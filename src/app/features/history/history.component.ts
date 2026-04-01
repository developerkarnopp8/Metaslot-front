import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepositService } from '../../core/services/deposit.service';
import { SpreadsheetService } from '../../core/services/spreadsheet.service';
import { Deposit } from '../../core/models/deposit.model';
import { AuthService } from '../../core/services/auth.service';

type StatusFilter = 'all' | 'completed' | 'pending';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  private depositService = inject(DepositService);
  private spreadsheetService = inject(SpreadsheetService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  authService = inject(AuthService);

  currentUser = this.authService.currentUser;

  spreadsheetId = '';
  spreadsheetName = signal('');
  deposits = signal<Deposit[]>([]);
  loading = signal(true);
  error = signal('');
  statusFilter = signal<StatusFilter>('all');
  sortBy = signal<'date' | 'amount' | 'slot'>('date');

  filtered = computed(() => {
    let list = this.deposits();
    const f = this.statusFilter();
    if (f !== 'all') {
      list = list.filter(d => d.status === f);
    }
    const sort = this.sortBy();
    return [...list].sort((a, b) => {
      if (sort === 'date') return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (sort === 'amount') return b.amount - a.amount;
      return a.slotNumber - b.slotNumber;
    });
  });

  totalCompleted = computed(() =>
    this.deposits().filter(d => d.status === 'completed').reduce((s, d) => s + d.amount, 0)
  );

  totalPending = computed(() =>
    this.deposits().filter(d => d.status === 'pending').reduce((s, d) => s + d.amount, 0)
  );

  completedCount = computed(() =>
    this.deposits().filter(d => d.status === 'completed').length
  );

  pendingCount = computed(() =>
    this.deposits().filter(d => d.status === 'pending').length
  );

  ngOnInit() {
    this.spreadsheetId = this.route.snapshot.paramMap.get('spreadsheetId') || '';
    if (!this.spreadsheetId) { this.router.navigate(['/dashboard']); return; }
    this.loadData();
  }

  loadData() {
    this.spreadsheetService.getById(this.spreadsheetId).subscribe({
      next: (s) => this.spreadsheetName.set(s.name)
    });
    this.depositService.getAll(this.spreadsheetId).subscribe({
      next: (deps) => {
        this.deposits.set(deps);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Erro ao carregar histórico.');
        this.loading.set(false);
      }
    });
  }

  deleteDeposit(deposit: Deposit) {
    if (!confirm(`Excluir depósito #${deposit.slotNumber}?`)) return;
    this.depositService.delete(this.spreadsheetId, deposit.id).subscribe({
      next: () => {
        this.deposits.update(deps => deps.filter(d => d.id !== deposit.id));
      },
      error: () => alert('Erro ao excluir depósito.')
    });
  }

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('pt-BR', {
      day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  }

  getUserInitials(): string {
    const user = this.currentUser();
    if (!user) return '?';
    return user.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }
}
