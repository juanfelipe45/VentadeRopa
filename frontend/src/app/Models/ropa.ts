import { User } from './user';

export interface Ropa {
  id?: string;
  nombre?: string;
  talle?: string;
  stock?: string;
  precio?: number;
  imagen?: string;
  userid?: string;
  user?: User;
}
