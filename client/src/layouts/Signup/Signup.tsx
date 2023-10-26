import useChangeTitle from "../../Hooks/useChangeTitle";
import { Logotipo } from "../../assets/svg";
import style from "./Signup.module.scss";
import { Link } from "react-router-dom";
import useCreateUser from "../../Hooks/useCreateUser";

const Signup = () => {
  useChangeTitle("Instanel - SignUp");
  const { values, errors, handleChange, handleSubmit, userMutation } =
    useCreateUser();

  const { isPending, data } = userMutation;
  
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

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={style.inputsWrapper}>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={(e) => handleChange(e)}
                className={errors.email ? `${style.error}` : ""}
              />
              <span className={style.errorSpan}>{errors.email}</span>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={values.fullName}
                onChange={(e) => handleChange(e)}
                className={errors.fullName ? `${style.error}` : ""}
              />
              <span className={style.errorSpan}>{errors.fullName}</span>
              <input
                type="text"
                placeholder="Username"
                name="userName"
                value={values.userName}
                onChange={(e) => handleChange(e)}
                className={errors.userName ? `${style.error}` : ""}
              />
              <span className={style.errorSpan}>{errors.userName}</span>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={(e) => handleChange(e)}
                className={errors.password ? `${style.error}` : ""}
              />
              <span className={style.errorSpan}>{errors.password}</span>
            </div>

            {data?.data.created === false && (
              <div>
                <p className={style.existError}>User already exists</p>
              </div>
            )}

            <div>
              <p className={style.terms}>
                People who use our service may have uploaded your contact
                information to Instagram. <span>Learn More</span>
              </p>
              <p className={style.terms}>
                By signing up, you agree to our <span>Terms</span>,{" "}
                <span>Privacy</span>, <span>Policy</span> and{" "}
                <span>Cookies Policy</span>
              </p>

              <button type="submit">
                {!isPending ? "Sign up" : "creando"}
              </button>
            </div>
          </form>
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
