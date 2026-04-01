import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deposit } from '../models/deposit.model';

const API_URL = 'http://localhost:3001/api';

export interface CreateDepositDto {
  slotNumber: number;
  amount: number;
  note?: string;
  status?: 'completed' | 'pending';
}

@Injectable({ providedIn: 'root' })
export class DepositService {
  private http = inject(HttpClient);

  getAll(spreadsheetId: string): Observable<Deposit[]> {
    return this.http.get<{ deposits: Deposit[] }>(`${API_URL}/spreadsheets/${spreadsheetId}/deposits`).pipe(
      map(res => res.deposits)
    );
  }

  create(spreadsheetId: string, data: CreateDepositDto): Observable<Deposit> {
    return this.http.post<{ deposit: Deposit }>(`${API_URL}/spreadsheets/${spreadsheetId}/deposits`, data).pipe(
      map(res => res.deposit)
    );
  }

  update(spreadsheetId: string, depositId: string, data: Partial<CreateDepositDto>): Observable<Deposit> {
    return this.http.put<{ deposit: Deposit }>(`${API_URL}/spreadsheets/${spreadsheetId}/deposits/${depositId}`, data).pipe(
      map(res => res.deposit)
    );
  }

  delete(spreadsheetId: string, depositId: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/spreadsheets/${spreadsheetId}/deposits/${depositId}`);
  }
}
