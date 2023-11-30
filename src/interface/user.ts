export interface IUser {
  id?: string;
  name: string;
  surName: string;
  email: string;
  vehicleType: string;
  baseFare: string;
  baseDistance: string;
  fare?: number;
}
