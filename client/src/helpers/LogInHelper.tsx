import { IS_LOGGED } from "../utils/localStorageKeys";
import { userDataType } from "../utils/types";

function LogInHelper(data: userDataType) {
  window.localStorage.setItem(
    IS_LOGGED,
    JSON.stringify({ isLogged: true, userId: data?.data?.id })
  );

  window.location.assign("/");
}

export default LogInHelper;
