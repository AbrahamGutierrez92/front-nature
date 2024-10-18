import React from "react";
import imgBanner from "../img/banner.png";
import planta from "../img/planta.png"
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-11/12 h-screen flex flex-col relative left-8 right-8">
      <div className="w-full mt-7 flex h-2/5">
        <figure className="w-full h-full flex">
          <img className="w-full -hfull" src={imgBanner} />
        </figure>
      </div>

      <div className="w-full mt-1 flex flex-col">
        <div className="w-full flex">
          <h3 className="font-serif font-semibold text-lg text-[#032D23]">
            Best selling product
          </h3>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="w-[30%] p-4 flex justify-center items-center flex-col bg-[#032D23] border-4 rounded-xl border-[#75C32C] cursor-pointer">
            <div className="flex items-center justify-center">
              <h4 className="text-center text-4xl text-white font-bold font-serif">
                Total
              </h4>
            </div>

            <div className="flex items-center mt-3 justify-center">
              <h5 className="text-center text-white text-6xl font-extrabold">
                +258
              </h5>
            </div>

            <div className=" w-full flex items-center justify-evenly mt-4">
              <div className="flex justify- items-center flex-col">
                <h2 className="text-[#75C32C] font-bold text-xl">Managua</h2>
                <h3 className="text-white text-lg font-semibold">U/ 200</h3>
              </div>

              <div className="flex items-center flex-col">
                <h2 className="text-[#75C32C] font-bold text-xl">Masaya</h2>
                <h3 className="text-white text-lg font-semibold">U/ 350</h3>
              </div>
            </div>
          </div>

          <div className="w-3/4 flex items-center justify-evenly p-4">
            <div className="w-1/2 flex items-center justify-center flex-col">
              <h2 className="font-bold text-xl text-[#032D23]">
                African plant
              </h2>
              <p className="text-black font-semibold">Subafrican city</p>

              <p className="text-gray-600 text-center">
                 simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
              </p>

              <div className="flex mt-2">
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
              </div>

              <div className="flex mt-2">
              <Link to="/home/allproduct" className="w-48 rounded-full font-semibold hover:bg-[#184d40] text-white text-center bg-[#032D23] p-2">
              View
              </Link>
              </div>
            </div>

            <div className="w-[180px]">
            <figure className="w-full">
              <img className="w-full rounded-lg" src={planta}/>
            </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
