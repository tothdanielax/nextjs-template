import { type UserInsert } from '../schema/users';

export const usersSeed = [
  {
    name: 'John Doe',
    role: 'admin',
  },
  {
    name: 'Jane Doe',
    role: 'user',
  },
] satisfies UserInsert[];
