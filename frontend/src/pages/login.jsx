import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { AuthContext } from "../components/contexts/authContext";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { setUser } = useContext(AuthContext);

  // Navigation hook
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );
      if (response.status === 200) {
        const user = await response.json();

        setUser(user);

        navigate("/homepage");
      } else {
        console.info(response);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <main className="login__content">
      <img className="login__logo" src="../src/assets/logo.png" alt="logo" />
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login__identify">
          E-mail :
          <input
            id="email"
            className="login__input"
            type="email"
            ref={emailRef}
          />
        </label>
        <label htmlFor="password" className="login__password">
          Mot de passe :
          <input
            id="password"
            className="login__input"
            type="password"
            ref={passwordRef}
          />
        </label>
        <button className="login__button" type="submit">
          <Link to="/homepage"> Se Connecter</Link>
        </button>
      </form>
    </main>
  );
}

export default Login;
