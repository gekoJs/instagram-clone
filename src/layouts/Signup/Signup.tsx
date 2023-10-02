import useChangeTitle from "../../Hooks/useChangeTitle";
import { Logotipo } from "../../assets/svg";
import style from "./Signup.module.scss";
import { Link } from "react-router-dom";

const Signup = () => {
  useChangeTitle("Instanel - SignUp");
  return (
    <section className={style.container}>
      <main className={style.wrapper}>
        <article className={style.form_wrapper}>
          <div className={style.logo}>
            <Logotipo />
          </div>

          <p className={style.p1}>
            Sign up to see photos and videos from your friends.
          </p>

          <div className={style.divide}>
            <span>
              <hr />
            </span>
            <p>or</p>
            <span>
              <hr />
            </span>
          </div>

          <form>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </form>

          <p className={style.terms}>
            People who use our service may have uploaded your contact
            information to Instagram. <span>Learn More</span>
          </p>
          <p className={style.terms}>
            By signing up, you agree to our <span>Terms</span>,{" "}
            <span>Privacy</span>, <span>Policy</span> and{" "}
            <span>Cookies Policy</span>
          </p>

          <button>Sign up</button>
        </article>

        <article className={style.signin}>
          <p>
            Have an account? <Link to={"/"}>Log in</Link>
          </p>
        </article>
      </main>
    </section>
  );
};

export default Signup;
