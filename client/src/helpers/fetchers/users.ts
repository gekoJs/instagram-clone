import { routeUsers } from "../../utils/routeKeys";
import axios from "axios";

//-----------------------------------------------

export interface UserData {
    email: string;
    fullName: string;
    userName: string;
    password: string;
}

//-----------------------------------------------

async function getUser() {
  return await fetch(routeUsers).then((resp) => resp.json());
}

async function postUser(data: UserData) {
  return await axios.post(routeUsers, data).then((resp) => resp);
}

export { getUser, postUser };
