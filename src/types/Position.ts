export interface Position {
  id: number;
  role: string;
  startDate: string;
  endDate: string;
  userId: number;
  responsibilities: PositionResponsibility[];
}

export interface PositionResponsibility {
  id: number;
  positionId: number;
  responsibility: string;
}
