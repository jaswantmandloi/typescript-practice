import { User, Users, StringArray } from "./unionInterfacesType";

const users: Users = [];
export function addUser(user: User): Users {
  users.push({
    status: "opened",
    active: false,
    ...user,
  });

  return users;
}

export function pass2DataVariants(values: string | StringArray): number {
  return Array.isArray(values) ? values.length : values.length;
}
