import { User } from './user';

export interface UserIdentity {
  id?: string;
  provider?: string;
  autSchema?: string;
  profile?: object;
  credentiasl?: object;
  modified?: Date;
  userId: string;
  user: User;
}
