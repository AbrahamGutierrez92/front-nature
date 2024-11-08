import React from "react";
import { useState, useEffect } from "react";
import aloe from "../img/aloe.png";
import { useNavigate } from "react-router-dom";
const allProductos = () => {
  const [profuct, setProduct] = useState([]);
  const navigate = useNavigate();

  const tokenLocalStorage = localStorage.getItem ('token');
  useEffect(() => {
    fetch("http://localhost:3000/api/productos",{
     headers: {Authorization: tokenLocalStorage}
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const deleteProduct = async(id) => {
    await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; chartset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

      navigate("/home/allproduct");
  };

  return (
    <div className="w-11/12 h-screen flex flex-col relative left-8 right-8">
      <strong className="p-2 text-[#032D23]">All Products</strong>
      <div className="w-full mt-1 flex justify-between flex-wrap items-center overflow-auto">
        {profuct.map((items, index) => (
          <div
            key={index}
            className="w-[22%] flex justify-center items-center border-[#032d23af] border-3 rounded-2xl shadow-md cursor-pointer hover:bg-[#032D23] hover:border-gray-400 hover:text-white mt-2"
          >
            <div className="w-full p-4 h-[300px] flex items-center flex-col justify-center ">
              <div className="w-full flex justify-center items-center">
                <figure className="w-full flex ">
                  <img className="w-[200px]" src={aloe}  alt="img" />
                </figure>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="text-center font-semibold ">{items.nombre}</p>
              </div>
              <div className="w-full flex justify-center items-center">
                <p className="text-center font-bold text-[#14B58F]">
                  $ {items.precio}
                </p>
              </div>

              <div className="w-full flex justify-center items-center">
                <button
                  className="w-full bg-red-500 p-1 text-white rounded-lg"
                 onClick={()=>deleteProduct(items.id_producto)}
                >
                  Eliminar
                </button>
              </div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default allProductos;
