import style from "./Login.module.scss";
import { Facebook, Logotipo } from "../../assets/svg";
import useChangeTitle from "../../Hooks/useChangeTitle";
import { Link } from "react-router-dom";

const Login = () => {
  useChangeTitle("Instanel - Login");

  return (
    <section className={style.container}>
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
            <form action="">
              <input
                type="text"
                placeholder="Phone number, Username or Email"
              />
              <input type="password" placeholder="Password" />
              <button type="submit">Log in</button>
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
              <a href="">
                <Facebook />
                <p className={style.facebook}>login with facebook</p>
              </a>

              <a href="">Forgot password?</a>
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
