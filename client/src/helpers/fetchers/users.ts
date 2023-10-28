import { routeUsers } from "../../utils/routeKeys";

//-----------------------------------------------

export interface UserData {
  email: string;
  fullName: string;
  userName: string;
  password: string;
}

//-----------------------------------------------

async function getUsers() {
  return await fetch(routeUsers).then((resp) => resp.json());
}

async function getUserLogIn(user: string, password: string) {
  return await fetch(
    routeUsers +
      `?user=${user.toLocaleLowerCase()}&password=${password.toLocaleLowerCase()}`
  ).then((resp) => resp.json());
}

async function postUser(data: UserData) {
  return await fetch(routeUsers, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json());
}

export { getUsers, getUserLogIn, postUser };
