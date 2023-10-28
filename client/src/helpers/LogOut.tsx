import { IS_LOGGED } from "../utils/localStorageKeys";

function LogOut() {
  window.localStorage.removeItem(IS_LOGGED);
  window.location.assign("/");
}
export default LogOut;
