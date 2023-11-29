export interface IUser {
  id?: string;
  name: string;
  surName: string;
  email: string;
  vehicleType: string;
  baseFare: number;
  baseDistance: number;
  fare?: number;
}
