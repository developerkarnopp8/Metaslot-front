import { Deposit } from './deposit.model';

export interface Spreadsheet {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  shareToken: string;
  isActive: boolean;
  createdAt: string;
  memberRole?: 'owner' | 'editor' | 'viewer';
  deposits?: Deposit[];
  members?: Member[];
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'editor' | 'viewer';
  joinedAt: string;
}
