import { AdvanceType, RepaymentSource, RequestStatus } from './enums';

export interface Account {
  id: string;
  userId: string;
  name: string;
  saasUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FriendRequest {
  id: string;
  requesterUserId: string;
  targetUserId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Friend {
  userLow: string;
  userHigh: string;
  createdAt: Date;
}

export interface Advance {
  id: string;
  payerId: string;
  receiverId: string;
  amount: number;
  occurredDate: Date;
  type: AdvanceType;
  note: string | null;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Repayment {
  id: string;
  payerId: string;
  receiverId: string;
  amount: number;
  occurredDate: Date;
  note: string | null;
  source: RepaymentSource;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AdvanceRequest {
  id: string;
  requesterId: string;
  payerId: string;
  receiverId: string;
  amount: number;
  occurredDate: Date;
  note: string | null;
  status: RequestStatus;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface OffsetRequest {
  id: string;
  requesterId: string;
  counterpartyUserId: string;
  status: RequestStatus;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface RepaymentCancelRequest {
  id: string;
  repaymentId: string;
  requesterId: string;
  reason: string | null;
  status: RequestStatus;
  resolvedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserPairBalance {
  userLow: string;
  userHigh: string;
  netLowToHigh: bigint;
  netHighToLow: bigint;
  updatedAt: Date;
}
