import React from "react";
import { FaHome } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaUserSlash } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const usersLogout = async () =>{
    await fetch("http://localhost:3000/api/usuario/logout",{
      method: "POST",
      headers: {
        "Content-Type": "application/json; chartset=UTF-8",
      },
    })
    .then(res => res.json())
    .then((data)=>{
      navigate("/");
      console.log(data);
    })
  }
  


  return (
    <div className="w-52 h-screen pt-9 flex items-center flex-col bg-[#032D23]">
      <Link
        to="/home/dashboard"
        className="w-full flex items-center hover:bg-[#75C32C]"
      >
        <div className="p-4 flex items-center justify-between  text-center">
          <FaHome className="text-base text-white m-2" />
          <p className="text-center text-white font-semibold">Dashboard</p>
        </div>
      </Link>

      <Link
        to="/home/statistics"
        className="w-full flex items-center hover:bg-[#75C32C]"
      >
        <div className="p-4 flex items-center justify-between  text-center">
          <FaDatabase className="text-base text-white m-2" />
          <p className="text-center text-white font-semibold">Statistics</p>
        </div>
      </Link>

      <Link
        to="/home/product"
        className="w-full flex items-center hover:bg-[#75C32C]"
      >
        <div className="p-4 flex items-center justify-between  text-center">
          <FaArchive className="text-base text-white m-2" />
          <p className="text-center text-white font-semibold">New Product</p>
        </div>
      </Link>

      <Link
        to="/home/allproduct"
        className="w-full flex items-center hover:bg-[#75C32C]"
      >
        <div className="p-4 flex items-center justify-between  text-center">
          <FaAngleDoubleRight className="text-base text-white m-2" />
          <p className="text-center text-white font-semibold">All Product</p>
        </div>
      </Link>

      <div className="w-36 h-48 border-2 rounded-xl border-lime-400 relative top-4"></div>

      <div className="w-full flex items-center justify-betwee relative top-10">

        <button className="w-full p-3 flex items-center justify-center flex-col hover:bg-[#75C32C]" onClick={usersLogout}>
          <FaUserSlash className="text-white w-36 " />
          <p className="text-white">User Exit</p>
        </button>

      </div>
    </div>
  );
};

export default Menu;
