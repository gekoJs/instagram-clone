type props = {
  email: string;
  fullName: string;
  userName: string;
  password: string;
};

type error = {
  email?: string;
  fullName?: string;
  userName?: string;
  password?: string;
};

function validateUserSignUp({ email, fullName, userName, password }: props) {
  const error: error = {};
  if (email.length <= 0) {
    error.email = "email input is empty";
  }

  if (password.length <= 0) {
    error.password = "Password input is empty";
  }
  if (fullName.length <= 0) {
    error.fullName = "Full Name input is empty";
  }
  if (userName.length <= 0) {
    error.userName = "Username input is empty";
  }


  return error;
}

export default validateUserSignUp;
