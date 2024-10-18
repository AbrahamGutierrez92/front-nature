import imagenPresentacion from "../img/login-imagenBannere.png";
import LogoNature from "../img/logo-Nature.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../../src/store/usersSlice.js";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const initialState = {
    correo: "",
    contrasena: "",
  };
  const [user, setUser] = useState(initialState);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const loginUser = async (e) => {
    e.preventDefault();

    const dato = {
      correo: user.correo,
      contrasena: user.contrasena,
    };

    await fetch("http://localhost:3000/api/usuario/login", {
      method: "POST",
      body: JSON.stringify(dato),
      headers: {
        "Content-Type": "application/json; chartset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((datas) => {
        dispatch(fetchUsers(datas));
      });

    navigate("/home/dashboard");
    setUser(initialState);
  };

  return (
    <div className="w-full h-screen flex justify-center flex-wrap grow bg-[#032D23] shadow-md ">
      <div className="w-1/3 h-screen bg-[#032D23] relative shadow-2xl">
        <div className="absolute w-full h-full bg-[#032d23ad] shadow-md flex justify-center items-center flex-col">
          <figure className="w-[200px]">
            <img className="w-full" src={LogoNature} />
          </figure>
          <h2 className="text-white">Plant variety</h2>

          <div className="absolute mt-[450px] text-center">
            <p className="text-white text-xl">“Save the Planet...”</p>
            <p className="text-white text-sm">- Abraham Gutierrez -</p>
          </div>
        </div>

        <figure className="w-full h-full">
          <img className="w-full h-full bg-contain" src={imagenPresentacion} />
        </figure>
      </div>

      <div className="w-1/2 relative bg-white flex justify-center items-center flex-col shadow-md">
        <div className="w-96 h-96">
          <div className="w-full flex items-center justify-center flex-col mt-8">
            <div className="w-full flex">
              <h3 className="text-2xl font-normal text-[#032D23] p-1">
                Welcom back to
              </h3>
              <p className="text-2xl font-medium text-[#75C32C] p-1">
                Plataform
              </p>
            </div>

            <div className="w-full flex mt-1">
              <h3 className="text-3xl font-serif font-bold text-[#032D23] p-1">
                Login
              </h3>
            </div>

            <form className="w-full flex flex-col mt-1">
              <div className="w-full mt-1 p-1">
                <input
                  className="w-full rounded-md border-solid border-2 border-[#032D23] p-2"
                  type="text"
                  placeholder="Email"
                  name="correo"
                  value={user.correo}
                  onChange={handleInput}
                />
              </div>

              <div className="w-full mt-4 p-1">
                <input
                  className="w-full rounded-md border-solid border-2 border-[#032D23] p-2"
                  type="password"
                  placeholder="PassWord"
                  name="contrasena"
                  value={user.contrasena}
                  onChange={handleInput}
                />
              </div>

              <div className="w-full flex items-center justify-between mt-1 p-1">
                <div className="flex ">
                  <input
                    className="accent-[#75C32C] cursor-pointer"
                    type="checkbox"
                  />
                  <p className="ml-2 text-[#032D23]">Remember me</p>
                </div>

                <div className="flex">
                  <Link className="text-[#032D23]">Forget Password?</Link>
                </div>
              </div>

              <div className="w-full mt-1 p-1">
                <button
                  className="w-full text-white rounded-md border-node bg-[#032D23] hover:bg-[#184d40] p-2"
                  onClick={loginUser}
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="w-full flex">
              <h3 className="text-xs font-normal text-[#032D23] p-1">
                Don’t have an account?
              </h3>
              <Link className="text-xs font-medium text-[#75C32C] p-1">
                Get Started
              </Link>
            </div>
          </div>
        </div>

        <div className="flex absolute right-6  top-[570px]">
          <p>Copyright © 2024 OrgaFarm All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
