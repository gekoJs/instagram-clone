type props = {
  user: string;
  password: string;
};
type errors = {
  user?: string;
  password?: string;
};
function validateUsersLogIn({ user, password }: props) {
  const errors: errors = {};

  if (user.length <= 0) {
    errors.user = "user input is needed";
  }

  if (password.length <= 0) {
    errors.password = "password input is needed";
  }
  return errors;
}

export default validateUsersLogIn;
