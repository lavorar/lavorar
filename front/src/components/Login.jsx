// componente logion
// componenter de registro
import { useState } from "react";
import { useAuth, loginWhithGoogle } from "../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "./Alert";
import { async } from "@firebase/util";

export function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(user.email, user.password);
      navigate("/");
      //setError("");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/invalid-email") {
        setError("Mensaje del servidor: mail o clave incorrecta");
      }
      if (error.code === "auth/user-not-found") {
        setError("Mensaje del servidor: Cuenta no existe");
      }

      setError(error.message);
    }

    console.log(user);
  };

  const handleGoogleSignin = async () => {
    try {
      await loginWhithGoogle();
      navigate("/");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    console.log("first");
    if (!user.email) return setError("Ingrese tu email");
    try {
      await resetPassword(user.email);
      setError("enviamos un email a tu cuanta para recuperar password");
    } catch (error) {
      setError(error.message);
    }

    console.log("resetsssssss");
  };

  return (
    <div className="w-full bg-white-ghost max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded 
        px-8 pt-6 pb-8 mb-4"
      >
      
        <div className="mb-4">
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="tuemail@dominio.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
          placeholder="password"
        />
       
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded ">
            Login
          </button>
          <a
            href="#!"
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            onClick={handleResetPassword}
          >
            Olvidaste tu contrasena?!
          </a>
        </div>
      </form>
      <p className="flex justify-between py-1 px-2">
        No tienes cuenta??
        <Link to={"/register"} className="text-blue-500 ">
          Registrar
        </Link>
      </p>

      <button
        className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded  border-2 border-gray-300 py-2 px-4 w-full"
        onClick={loginWhithGoogle}
      >
        Login con google
      </button>
    </div>
  );
}
