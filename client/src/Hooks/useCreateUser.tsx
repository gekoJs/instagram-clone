import { useState } from "react";
import validateUserSignUp from "../utils/validateUserSignUp";
import { useMutation } from "@tanstack/react-query";
import { postUser } from "../helpers/fetchers/users";
import { IS_LOGGED } from "../utils/localStorageKeys";

type values = {
  email: string;
  fullName: string;
  userName: string;
  password: string;
};

type errors = {
  email?: string;
  fullName?: string;
  userName?: string;
  password?: string;
};

function useCreateUser() {
  const [values, setValues] = useState<values>({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });
  const [errors, setErrors] = useState<errors>({});

  const userMutation = useMutation({
    mutationFn: postUser,
    onSuccess: (data) => {
      if (data.data.created === true) {
        setValues({
          email: "",
          fullName: "",
          userName: "",
          password: "",
        });

        window.localStorage.setItem(
          IS_LOGGED,
          JSON.stringify({ isLogged: true })
        );

        window.location.assign("/");
      }
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validatedErrors = validateUserSignUp({ ...values });
    setErrors(validatedErrors);

    if (Object.keys(validatedErrors).length === 0) {
      userMutation.mutate(values);
    }
  }

  return { values, errors, handleChange, handleSubmit, userMutation };
}
export default useCreateUser;
