type active = true | false;
type status = "opened" | "closed" | "foreign";
export interface User {
  name: string;
  id: number;
  active?: active;
  status?: status;
}
export type Users = User[];
