import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SpreadsheetService } from '../../core/services/spreadsheet.service';
import { AuthService } from '../../core/services/auth.service';
import { Spreadsheet, Member } from '../../core/models/spreadsheet.model';

@Component({
  selector: 'app-group',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  private spreadsheetService = inject(SpreadsheetService);
  private authService = inject(AuthService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  currentUser = this.authService.currentUser;

  spreadsheetId = '';
  spreadsheet = signal<Spreadsheet | null>(null);
  members = signal<Member[]>([]);
  loading = signal(true);
  error = signal('');
  copied = signal(false);
  editing = signal(false);
  editName = '';
  editDescription = '';
  saving = signal(false);

  isOwner = computed(() => {
    const user = this.currentUser();
    const sheet = this.spreadsheet();
    return user && sheet && (sheet.ownerId === user.id || sheet.memberRole === 'owner');
  });

  shareUrl = computed(() => {
    const sheet = this.spreadsheet();
    if (!sheet) return '';
    return `${window.location.origin}/join/${sheet.shareToken}`;
  });

  ngOnInit() {
    this.spreadsheetId = this.route.snapshot.paramMap.get('spreadsheetId') || '';
    if (!this.spreadsheetId) { this.router.navigate(['/dashboard']); return; }
    this.loadData();
  }

  loadData() {
    this.loading.set(true);
    this.spreadsheetService.getById(this.spreadsheetId).subscribe({
      next: (sheet) => {
        this.spreadsheet.set(sheet);
        this.editName = sheet.name;
        this.editDescription = sheet.description || '';
        this.loadMembers();
      },
      error: () => {
        this.error.set('Erro ao carregar grupo.');
        this.loading.set(false);
      }
    });
  }

  loadMembers() {
    this.spreadsheetService.getMembers(this.spreadsheetId).subscribe({
      next: (members) => {
        this.members.set(members);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
      }
    });
  }

  copyShareLink() {
    navigator.clipboard.writeText(this.shareUrl()).then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    });
  }

  removeMember(member: Member) {
    if (!confirm(`Remover ${member.name} do grupo?`)) return;
    this.spreadsheetService.removeMember(this.spreadsheetId, member.id).subscribe({
      next: () => {
        this.members.update(list => list.filter(m => m.id !== member.id));
      },
      error: () => alert('Erro ao remover membro.')
    });
  }

  saveEdit() {
    if (!this.editName.trim()) return;
    this.saving.set(true);
    this.spreadsheetService.update(this.spreadsheetId, {
      name: this.editName,
      description: this.editDescription
    }).subscribe({
      next: (sheet) => {
        this.spreadsheet.set(sheet);
        this.editing.set(false);
        this.saving.set(false);
      },
      error: () => {
        alert('Erro ao salvar.');
        this.saving.set(false);
      }
    });
  }

  getMemberInitials(name: string): string {
    return name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  }

  getRoleLabel(role: string): string {
    const map: Record<string, string> = {
      owner: 'Proprietário',
      editor: 'Editor',
      viewer: 'Visualizador'
    };
    return map[role] || role;
  }

  formatDate(dateStr: string): string {
    return new Date(dateStr).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' });
  }
}
