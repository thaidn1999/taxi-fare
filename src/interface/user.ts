export interface IUser {
  name: string;
  surName: string;
  email: string;
  vehicleType: string;
  baseFare: number;
  baseDistance: number;
  fare?: number;
}
