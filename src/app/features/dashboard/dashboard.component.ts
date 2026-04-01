import { Component, OnInit, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { SpreadsheetService } from '../../core/services/spreadsheet.service';
import { DepositService } from '../../core/services/deposit.service';
import { Spreadsheet } from '../../core/models/spreadsheet.model';
import { Deposit } from '../../core/models/deposit.model';

export interface SlotInfo {
  number: number;
  status: 'completed' | 'available';
  deposit?: Deposit;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private authService = inject(AuthService);
  private spreadsheetService = inject(SpreadsheetService);
  private depositService = inject(DepositService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  currentUser = this.authService.currentUser;

  spreadsheets = signal<Spreadsheet[]>([]);
  activeSpreadsheet = signal<Spreadsheet | null>(null);
  deposits = signal<Deposit[]>([]);
  slots = signal<SlotInfo[]>([]);
  loading = signal(true);
  error = signal('');

  readonly GOAL = 20100;

  totalDeposited = computed(() =>
    this.deposits().reduce((sum, d) => sum + d.amount, 0)
  );

  progressPercent = computed(() =>
    Math.min(100, Math.round((this.totalDeposited() / this.GOAL) * 100))
  );

  completedCount = computed(() =>
    this.deposits().filter(d => d.status === 'completed').length
  );

  recentDeposits = computed(() =>
    [...this.deposits()]
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5)
  );

  monthlyAverage = computed(() => {
    const deps = this.deposits();
    if (!deps.length) return 0;
    const sorted = [...deps].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    const first = new Date(sorted[0].createdAt);
    const last = new Date(sorted[sorted.length - 1].createdAt);
    const diffMs = last.getTime() - first.getTime();
    const months = Math.max(1, diffMs / (1000 * 60 * 60 * 24 * 30));
    return Math.round(this.totalDeposited() / months);
  });

  getUserInitials(): string {
    const user = this.currentUser();
    if (!user) return '?';
    return user.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  getSlotClass(slot: SlotInfo): string {
    return slot.status;
  }

  ngOnInit() {
    const spreadsheetId = this.route.snapshot.paramMap.get('spreadsheetId');
    this.loadSpreadsheets(spreadsheetId);
  }

  loadSpreadsheets(preselectedId?: string | null) {
    this.loading.set(true);
    this.spreadsheetService.getAll().subscribe({
      next: (sheets) => {
        this.spreadsheets.set(sheets);
        if (sheets.length > 0) {
          const target = preselectedId
            ? sheets.find(s => s.id === preselectedId) || sheets[0]
            : sheets[0];
          this.selectSpreadsheet(target);
        } else {
          this.loading.set(false);
        }
      },
      error: () => {
        this.error.set('Erro ao carregar planilhas.');
        this.loading.set(false);
      }
    });
  }

  selectSpreadsheet(sheet: Spreadsheet) {
    this.activeSpreadsheet.set(sheet);
    this.router.navigate(['/dashboard', sheet.id], { replaceUrl: true });
    this.loadDeposits(sheet.id);
  }

  loadDeposits(spreadsheetId: string) {
    this.loading.set(true);
    this.depositService.getAll(spreadsheetId).subscribe({
      next: (deps) => {
        this.deposits.set(deps);
        this.buildSlots(deps);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erro ao carregar depósitos.');
        this.loading.set(false);
      }
    });
  }

  buildSlots(deposits: Deposit[]) {
    const completedSlots = new Set(
      deposits.filter(d => d.status === 'completed').map(d => d.slotNumber)
    );
    const depositBySlot = new Map(deposits.map(d => [d.slotNumber, d]));

    const slots: SlotInfo[] = Array.from({ length: 200 }, (_, i) => {
      const num = i + 1;
      return {
        number: num,
        status: completedSlots.has(num) ? 'completed' : 'available',
        deposit: depositBySlot.get(num)
      };
    });
    this.slots.set(slots);
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  }

  logout() {
    this.authService.logout();
  }

  get activeSheetId(): string {
    return this.activeSpreadsheet()?.id || '';
  }

  createSpreadsheet() {
    const name = prompt('Nome da planilha:');
    if (!name) return;
    this.spreadsheetService.create({ name }).subscribe({
      next: (sheet) => {
        this.spreadsheets.update(sheets => [...sheets, sheet]);
        this.selectSpreadsheet(sheet);
      },
      error: () => alert('Erro ao criar planilha.')
    });
  }
}
