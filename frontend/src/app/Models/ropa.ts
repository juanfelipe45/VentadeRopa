import { User } from './user';

export interface Ropa {
  id?: string;
  nombre?: string;
  talla?: string;
  stock?: string;
  precio?: number;
  imagen?: string;
  userid?: string;
  user?: User;
}
