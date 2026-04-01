export interface Deposit {
  id: string;
  spreadsheetId: string;
  userId: string;
  slotNumber: number;
  amount: number;
  note?: string;
  status: 'completed' | 'pending';
  createdAt: string;
  user?: { id: string; name: string; email: string };
}
