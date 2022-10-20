// componenter de refistro
import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";

import { Alert } from "./Alert";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

export function Register() {

  const endpoint = 'http://localhost:1337'
  const [user, setUser] = useState({ email: "", password: "", name: '', surname: '', phone: '', is_lender: false });
  const { signup, login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();
  const handleChange = ({ target: { name, value, checked } }) => {
    if (name === 'is_lender') {
      setUser({ ...user, [name]: checked });
    }
    else {
      setUser({ ...user, [name]: value });
    }
  };

  const register = async (user) => {
    const { data } = await axios.post(`${endpoint}/api/auth/local/register `, user)
    return data
  }


  const mutation = useMutation(register, {
    onSuccess: () => {
      login(user)
      navigate('/')
    }
  })


  const handleSubmit = async (e) => {
    e.preventDefault();

    mutation.mutate({
      username: user.email, password: user.password, name: user.name, surname: user.surname, email: user.email,
      phone: user.phone, is_lender: user.is_lender
    })

    // try {
    //   await signup(user.email, user.password, user.name, user.surName);
    //   navigate("/");
    //   setError("");
    // } catch (error) {
    //   console.log(error.code);
    //   if (error.code === "auth/invalid-email") {
    //     setError("Mensaje del servidor: mail o clave incorrecta");
    //   }
    //   if (error.code === "auth/user-not-found") {
    //     setError("Mensaje del servidor: Cuenta no existe");
    //   }

    //   // setError(error.message);
    // }

    // console.log(user);
  }

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
          value={user.name}
          type="text"
          name="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="nombre"
        />

        <label htmlFor="">Apellido</label>
        <input
          value={user.surname}
          type="text"
          name="surname"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="apellido"
        />
        <label htmlFor="">email</label>
        <input
          value={user.email}
          type="email"
          name="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="tuemail@dominio.com"
        />
        <label htmlFor="">Password</label>
        <input
          value={user.password}
          type="password"
          name="password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="password"
        />

        <label htmlFor="">Telefono</label>
        <input
          value={user.phone}
          type="text"
          name="phone"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={handleChange}
          placeholder="+542990054299"
        />
        <div>
          <label
            htmlFor="small-toggle"
            className="inline-flex relative items-center mb-2 mt-2 cursor-pointer"
          >
            <input
              type="checkbox"
              value={user.is_lender}
              id="small-toggle"
              name="is_lender"
              className="sr-only peer"
              onChange={handleChange}
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
