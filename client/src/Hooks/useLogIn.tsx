import { useState } from "react";
import validateUsersLogIn from "../utils/validateUsersLogIn";
import { getUserLogIn } from "../helpers/fetchers/users";
import LogInHelper from "../helpers/LogInHelper";

type errors = {
  user?: string;
  password?: string;
  login?: string;
};

function useLogIn() {
  const [values, setValues] = useState({
    user: "",
    password: "",
  });
  const [errors, setErrors] = useState<errors>({});
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errors = validateUsersLogIn(values);
    setErrors(errors);

    if (!Object.keys(errors).length) {
      setLoading(true);
      const userFetch = await getUserLogIn(values.user, values.password);

      if (userFetch.error) {
        setErrors({ login: userFetch.error });
      }

      if (userFetch.data) {
        LogInHelper(userFetch);
      }

      setLoading(false);
    }
  }

  return {
    values,
    errors,
    handleSubmit,
    handleChange,
    loading,
  };
}

export default useLogIn;
