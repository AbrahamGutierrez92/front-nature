import React from "react";
import LogoNature from "../img/logo-Nature.png";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  const users = useSelector(state => state.users.publicUser[0]);

  return (
    <nav className="w-full h-14 flex items-center justify-center bg-[#032D23]">
      <div className="w-[95%] flex items-center justify-between">
        <div className="w-1/3">
          <figure className="w-32">
            <img src={LogoNature} alt="Logo Nature" />
          </figure>
        </div>

        <div className="w-3/5 h-14 flex items-center justify-between">
          

          <div className="w-1/2 flex items-center justify-center border-none rounded-3xl bg-white">
            <div className="w-full flex items-center justify-around">
              <div className="w-[20%] flex items-center justify-center"><FaSearch className="w-[200px] text-gray-400"/></div>
              <input className="w-4/5 rounded-3xl p-2 mr-1 outline-none" type="text"/>
            </div>
          </div>

          <div className="w-1/3 flex items-center justify-evenly">
          <div className="text-center text-white">
            <h5 className="m-0 p-0 ">{users.nombre}</h5>
            <p className="m-0 p-0 ">{users.correo}</p>
          </div>

            <figure className="w-[50px] rounded-full">
              <img className="rounded-full w-full" src={users.url_Imagen}/>
            </figure>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
