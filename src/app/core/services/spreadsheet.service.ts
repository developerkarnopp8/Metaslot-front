import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Spreadsheet, Member } from '../models/spreadsheet.model';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class SpreadsheetService {
  private http = inject(HttpClient);

  getAll(): Observable<Spreadsheet[]> {
    return this.http.get<{ spreadsheets: Spreadsheet[] }>(`${API_URL}/spreadsheets`).pipe(
      map(res => res.spreadsheets)
    );
  }

  getById(id: string): Observable<Spreadsheet> {
    return this.http.get<{ spreadsheet: Spreadsheet }>(`${API_URL}/spreadsheets/${id}`).pipe(
      map(res => res.spreadsheet)
    );
  }

  create(data: { name: string; description?: string }): Observable<Spreadsheet> {
    return this.http.post<{ spreadsheet: Spreadsheet }>(`${API_URL}/spreadsheets`, data).pipe(
      map(res => res.spreadsheet)
    );
  }

  update(id: string, data: Partial<Spreadsheet>): Observable<Spreadsheet> {
    return this.http.put<{ spreadsheet: Spreadsheet }>(`${API_URL}/spreadsheets/${id}`, data).pipe(
      map(res => res.spreadsheet)
    );
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/spreadsheets/${id}`);
  }

  join(token: string): Observable<Spreadsheet> {
    return this.http.post<{ spreadsheet: Spreadsheet }>(`${API_URL}/spreadsheets/join`, { shareToken: token }).pipe(
      map(res => res.spreadsheet)
    );
  }

  getMembers(id: string): Observable<Member[]> {
    return this.http.get<{ members: any[] }>(`${API_URL}/spreadsheets/${id}/members`).pipe(
      map(res => res.members.map(m => ({
        id: m.user.id,
        name: m.user.name,
        email: m.user.email,
        role: m.role,
        joinedAt: m.joinedAt
      })))
    );
  }

  removeMember(spreadsheetId: string, userId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/spreadsheets/${spreadsheetId}/members/${userId}`);
  }
}
