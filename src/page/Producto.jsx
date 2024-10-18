import React from "react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Producto = () => {
  const navigate = useNavigate();

  const intialState = {
    url_Imagen_Prod: "",
    nombre: "",
    precio: 0,
    descripcion: ""
  }
  const [prod, setProd] = useState(intialState);

  const handleProd = (e) =>{
   setProd({...prod, [e.target.name]:e.target.value});

   console.log(e.target.value);
  }
  
  const saveProducto = async(e) => {
   e.preventDefault();

   const datos = {
    url_Imagen_Prod: prod.url_Imagen_Prod,
    nombre: prod.nombre,
    precio: prod.precio,
    descripcion: prod.descripcion,
   }
   
   await fetch("http://localhost:3000/api/productos",{
    method: "POST",
    body: JSON.stringify(datos),
    headers:{
      "Content-Type": "application/json; chartset=UTF-8",
    },
   })
   .then((res) => res.json())
   .then((datas) => {
    console.log(datas)
   })
   navigate("/home/allproduct");
    setProd(intialState);
  }


  return (
    <div className="w-11/12 h-screen flex flex-col relative left-8 right-8 ">
      <div className="w-full h-full mt-8 flex items-center justify-between">
        <form className="w-full h-full flex justify-center items-center flex-col">
        <p className="font-bold text-[#084D3D]">New Product</p>
          <div className="w-full h-72 flex items-center justify-between">
            <div className="w-2/5 h-64 flex items-center">
              <input
                className="w-[70%] h-full rounded-xl shadow-md border-2 border-[#084d3db9] text-center"
                type="url"
                name="url_Imagen_Prod"
                value={prod.url_Imagen_Prod}
                placeholder="Add url Imagen"
                onChange={handleProd}
              />
            </div>
            <div className="w-3/5 flex items-center justify-center flex-col ">
              <div className="w-[100%] h-14 mb-5">
                <label className="text-[#084D3D] font-semibold">
                  Name Product
                </label>
                <input
                  className="w-[100%] h-14 rounded-xl shadow-md border-2 border-[#084d3db9] text-justify"
                  type="text"
                  name="nombre"
                  value={prod.nombre}
                  placeholder="Plant Aloe"
                  onChange={handleProd}
                />
              </div>

              <div className="w-[100%] h-18 mb-5 mt-7">
                <label className="text-[#084D3D] font-semibold">Price</label>
                <input
                  className="w-[100%] h-14 rounded-xl shadow-md border-2 border-[#084d3db9] text-justify"
                  type="number"
                  name="precio"
                  value={prod.precio}
                  placeholder="$00.00"
                  onChange={handleProd}
                />
              </div>
            </div>
          </div>

          <div className="w-full h-[180px] flex">
          <div className="w-[100%] h-full">
                <label className="text-[#084D3D] font-semibold">Long Description</label>
                <input
                  className="w-[100%] h-full rounded-xl shadow-md border-2 border-[#084d3db9] text-justify"
                  type="text"
                  name="descripcion"
                  value={prod.descripcion}
                  placeholder="Item characteristics
"
onChange={handleProd}
                />
              </div>

          </div>

          <div className="w-full mt-9 flex justify-center items-center">
            <div className="w-[35%] flex items-center justify-center">
              <button className="w-[100%] rounded-xl text-white font-bold text-center p-2 bg-[#032D23] hover:bg-[#184d40]" onClick={saveProducto}>Save</button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Producto;
