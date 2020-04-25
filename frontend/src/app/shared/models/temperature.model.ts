type statusTemperature = 'success' | 'primary' | 'warn' | 'info';

type dateFormat = number | string | Date;

export interface ITemperature {
  userId: string;
  currentMeasurement: number;
  expectedMeasurement: number;
  registeredAt: dateFormat;
  changetAt: dateFormat;
  status: statusTemperature;
}

export interface IPayLoadTemperature {
  _id?: string;
  year: string;
  month: string;
  days: ITemperature[];
}
