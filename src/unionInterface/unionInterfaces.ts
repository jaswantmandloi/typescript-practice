import { User, Users } from "./unionInterfacesType";

const users: Users = [];
export function addUser(user: User): Users {
  users.push({
    status: "opened",
    active: false,
    ...user,
  });

  return users;
}
