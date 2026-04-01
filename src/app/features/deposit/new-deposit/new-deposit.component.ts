import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DepositService } from '../../../core/services/deposit.service';
import { SpreadsheetService } from '../../../core/services/spreadsheet.service';
import { Deposit } from '../../../core/models/deposit.model';

interface SlotInfo {
  number: number;
  status: 'completed' | 'available';
  amount: number;
}

@Component({
  selector: 'app-new-deposit',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './new-deposit.component.html',
  styleUrls: ['./new-deposit.component.scss']
})
export class NewDepositComponent implements OnInit {
  private depositService = inject(DepositService);
  private spreadsheetService = inject(SpreadsheetService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  spreadsheetId = '';
  spreadsheetName = signal('');
  slots = signal<SlotInfo[]>([]);
  selectedSlot = signal<SlotInfo | null>(null);
  note = '';
  loading = signal(false);
  loadingSlots = signal(true);
  error = signal('');
  success = signal(false);

  selectedAmount = computed(() => this.selectedSlot()?.number || 0);

  formatCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  ngOnInit() {
    this.spreadsheetId = this.route.snapshot.paramMap.get('spreadsheetId') || '';
    if (!this.spreadsheetId) {
      this.router.navigate(['/dashboard']);
      return;
    }
    this.loadData();
  }

  loadData() {
    this.spreadsheetService.getById(this.spreadsheetId).subscribe({
      next: (sheet) => {
        this.spreadsheetName.set(sheet.name);
      }
    });

    this.depositService.getAll(this.spreadsheetId).subscribe({
      next: (deposits) => {
        const completedSlots = new Set(
          deposits.filter(d => d.status === 'completed').map(d => d.slotNumber)
        );
        const slots: SlotInfo[] = Array.from({ length: 200 }, (_, i) => {
          const num = i + 1;
          return {
            number: num,
            status: completedSlots.has(num) ? 'completed' : 'available',
            amount: num
          };
        });
        this.slots.set(slots);
        this.loadingSlots.set(false);
      },
      error: () => {
        this.error.set('Erro ao carregar slots.');
        this.loadingSlots.set(false);
      }
    });
  }

  selectSlot(slot: SlotInfo) {
    if (slot.status === 'completed') return;
    if (this.selectedSlot()?.number === slot.number) {
      this.selectedSlot.set(null);
    } else {
      this.selectedSlot.set(slot);
    }
  }

  isSelected(slot: SlotInfo): boolean {
    return this.selectedSlot()?.number === slot.number;
  }

  confirm() {
    const slot = this.selectedSlot();
    if (!slot) {
      this.error.set('Selecione um slot para depositar.');
      return;
    }
    this.loading.set(true);
    this.error.set('');

    this.depositService.create(this.spreadsheetId, {
      slotNumber: slot.number,
      amount: slot.amount,
      note: this.note || undefined,
      status: 'completed'
    }).subscribe({
      next: () => {
        this.success.set(true);
        setTimeout(() => {
          this.router.navigate(['/dashboard', this.spreadsheetId]);
        }, 1500);
      },
      error: (err) => {
        this.error.set(err?.error?.message || 'Erro ao registrar depósito.');
        this.loading.set(false);
      }
    });
  }
}
