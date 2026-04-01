import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { SpreadsheetService } from '../../core/services/spreadsheet.service';

@Component({
  selector: 'app-join',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  private spreadsheetService = inject(SpreadsheetService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  token = '';
  loading = signal(true);
  error = signal('');
  spreadsheetName = signal('');

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token') || '';
    if (!this.token) {
      this.error.set('Token de convite inválido.');
      this.loading.set(false);
      return;
    }
    this.joinGroup();
  }

  joinGroup() {
    this.spreadsheetService.join(this.token).subscribe({
      next: (sheet) => {
        this.spreadsheetName.set(sheet.name);
        this.loading.set(false);
        setTimeout(() => {
          this.router.navigate(['/dashboard', sheet.id]);
        }, 2000);
      },
      error: (err) => {
        const msg = err?.error?.message || 'Erro ao entrar no grupo.';
        this.error.set(msg);
        this.loading.set(false);
      }
    });
  }
}
