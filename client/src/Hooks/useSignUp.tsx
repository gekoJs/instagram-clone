import { useState } from "react";
import validateUserSignUp from "../utils/validateUserSignUp";
import { useMutation } from "@tanstack/react-query";
import { postUser } from "../helpers/fetchers/users";
import LogInHelper from "../helpers/LogInHelper";

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
  signUp?: string;
};

function useSignUp() {
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
      if (!data.error && data.data) {
        setValues({
          email: "",
          fullName: "",
          userName: "",
          password: "",
        });
        LogInHelper(data.data);
      }
      setErrors((prev) => ({ ...prev, signUp: data.error }));
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.name === "userName"
          ? e.target.value.toLowerCase()
          : e.target.value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validatedErrors = validateUserSignUp({ ...values });
    setErrors(validatedErrors);

    if (Object.keys(validatedErrors).length === 0) {
      console.log("useSignUp", values);
      userMutation.mutate(values);
    }
  }

  return { values, errors, handleChange, handleSubmit, userMutation };
}
export default useSignUp;
