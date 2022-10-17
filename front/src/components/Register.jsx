// componenter de refistro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

import axios from 'axios'
import { Alert } from "./Alert";

export function Register() {
  const [user, setUser] = useState({ email: "", password: "",username:'', name: ''});
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const endpoint = "http://localhost:1337/api/users";
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(endpoint, { email: user.email, password: user.password , username: user.email, })
      .then(function (response) {
        console.log(response.data);
        // setcategories(response.data);
      })
      .catch(function (error) {
        console.error("error", error.response);
      });
  };

  return (
    <div className="w-full max-w-xs m-auto">
      {error && <Alert message={error} />}
      <form
        className="bg-white shadow-md rounded 
        px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="nombre"
        />
        <label htmlFor="">Apellido</label>
        <input
          type="text"
          name="surname"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="apellido"
        />
        <label htmlFor="">email</label>
        <input
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="tuemail@dominio.com"
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="password"
        />
        <div>
          <label
            htmlFor="small-toggle"
            className="inline-flex relative items-center mb-2 mt-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value=""
              id="small-toggle"
              className="sr-only peer"
            />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-900">
              Voy a prestar un servicio
            </span>
          </label>
        </div>

        <button className="bg-blue-500 hover:bg-blue-800 text-white text-sm font-bold py-2 px-4 rounded mt-2">
          Registrar
        </button>
      </form>
      <p className="flex justify-between py-1 px-2">
        Ya tienes cuenta??
        <Link to={"/Login"} className="text-blue-500 ">
          Iniciar sesion
        </Link>
      </p>
    </div>
  );
}
