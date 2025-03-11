import { IPositionResponsibility } from "./IPositionResponsibility";

export interface IPosition {
  id: number;
  role: string;
  startDate: string;
  endDate: string;
  userId: number;
  responsibilities: IPositionResponsibility[];
}
