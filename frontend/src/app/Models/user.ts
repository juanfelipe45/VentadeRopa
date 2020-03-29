import { Ropa } from './ropa';
import { UserIdentity } from './userIdentity';

export interface User {
  id?: string;
  name?: string;
  lastname?: string;
  phone?: string;
  photo?: string;
  email?: string;
  password?: string;
  ropas?: Ropa[];
  useridentities?: UserIdentity[];
}
