import { IS_LOGGED } from "../utils/localStorageKeys";

function LogOut() {
  window.localStorage.setItem(IS_LOGGED, JSON.stringify({ isLogged: false }));
  window.location.assign("/");
}
export default LogOut;
