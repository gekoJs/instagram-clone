import style from "./Login.module.scss";
import { Facebook, Logotipo } from "../../assets/svg";
import useChangeTitle from "../../Hooks/useChangeTitle";
import { Link } from "react-router-dom";
import NotAvailable from "../../components/NotAvailable/NotAvailable";
import useShowWarning from "../../Hooks/useShowWarning";
import useLogIn from "../../Hooks/useLogIn";
import Loader from "../../components/Loader/Loader";

const Login = () => {
  useChangeTitle("Instanel - Login");

  const { warningActive, setWarningActive } = useShowWarning();

  const { values, errors, handleSubmit, handleChange, loading } = useLogIn();

  return (
    <section className={style.container}>
      {warningActive && <NotAvailable />}
      <main className={style.content_wrapper}>
        <div className={style.img_wrapper}>
          <img
            className={style.img}
            src="./images/iphone-with-profile.jpg"
            alt=""
          />
        </div>

        <div className={style.form_container}>
          <div className={style.form_wrapper}>
            <Logotipo />
            <form onSubmit={handleSubmit}>
              <div className={style.inputWrapper}>
                <input
                  type="text"
                  placeholder="Phone number, Username or Email"
                  onChange={handleChange}
                  name="user"
                  value={values.user}
                  className={
                    errors.password
                      ? `${style.input} ${style.isError} `
                      : style.input
                  }
                />
                {errors.user && (
                  <span className={style.error}>{errors.user}</span>
                )}
              </div>

              <div className={style.inputWrapper}>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  className={
                    errors.password
                      ? `${style.isError} ${style.input}`
                      : style.input
                  }
                />
                {errors.password && (
                  <span className={style.error}>{errors.password}</span>
                )}
              </div>
              <button type="submit">{!loading ? "Log in" : <Loader />}</button>
            </form>

            <div className={style.line_divide}>
              <span>
                <hr />
              </span>
              <p>Or</p>
              <span>
                <hr />
              </span>
            </div>

            <div className={style.other_options}>
              <button onClick={() => setWarningActive(true)}>
                <Facebook />
                <p className={style.facebook}>login with facebook</p>
              </button>
              {errors.login && (
                <span className={style.errorLogin}>{errors.login}</span>
              )}
              <button onClick={() => setWarningActive(true)}>
                Forgot password?
              </button>
            </div>
          </div>

          <div className={style.sign_up}>
            <p>
              Don't have an account? <Link to={"/signup"}>Sign up</Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
