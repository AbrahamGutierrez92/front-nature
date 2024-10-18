import { FaStore } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa";
import Lineas from "../components/graficos/Lineas";

const Statistics = () => {
  return (
    <div className="w-11/12 h-screen flex flex-col relative left-8 right-8">
      <div className="w-full mt-8 flex items-center justify-between">
        <div className="w-[30%] p-5 h-33 cursor-pointer rounded-xl bg-[#14B58F]">
          <div className="w-full flex items-center justify-around">
            <div>
              <FaStore className="text-2xl text-white" />
            </div>

            <div>
              <h2 className="text-2xl text-white font-semibold">60%</h2>
            </div>
          </div>

          <div className="w-full p-0 mt-4 flex items-center justify-center flex-col">
            <h5 className="text-white p-0 m-0 font-semibold text-2xl">
              $ 450,000.50
            </h5>
            <p className="text-white p-0 m-0 font-semibold">Total Anual</p>
          </div>
        </div>

        <div className="w-[30%] h-33 p-5 cursor-pointer rounded-xl bg-[#06765B]">
          <div className="w-full flex items-center justify-around">
            <div>
              <FaUsers className="text-2xl text-white" />
            </div>

            <div>
              <h2 className="text-2xl text-white font-semibold">30%</h2>
            </div>
          </div>

          <div className="w-full p-0 mt-4 flex items-center justify-center flex-col">
            <h5 className="text-white p-0 m-0 font-semibold text-2xl">
              CD 450
            </h5>
            <p className="text-white p-0 m-0 font-semibold">Total Users</p>
          </div>
        </div>

        <div className="w-[30%] h-33 p-5 cursor-pointer rounded-xl bg-[#084D3D]">
          <div className="w-full flex items-center justify-around">
            <div>
              <FaLocationArrow className="text-2xl text-white" />
            </div>

            <div>
              <h2 className="text-2xl text-white font-semibold">80%</h2>
            </div>
          </div>

          <div className="w-full p-0 mt-1 flex items-center justify-center flex-col">
            <h5 className="text-white p-0 m-0 font-semibold text-sm">
              Sales by department
            </h5>

            <div className="w-full flex items-center justify-between">
              <div className="w-full m-0 p-0 flex items-center justify-center flex-col">
                <p className="text-white m-0 p-0 text-xs font-semibold">300</p>
                <h6 className="text-white m-0 p-0 text-xs font-semibold">
                  Managua
                </h6>
              </div>

              <div className="w-full m-0 p-0 flex items-center justify-center flex-col">
                <p className="text-white m-0 p-0 text-xs font-semibold">350</p>
                <h6 className="text-white m-0 p-0 text-xs font-semibold">
                  Masaya
                </h6>
              </div>

              <div className="w-full m-0 p-0 flex items-center justify-center flex-col">
                <p className="text-white m-0 p-0 text-xs font-semibold">900</p>
                <h6 className="text-white m-0 p-0 text-xs font-semibold">
                  Granada
                </h6>
              </div>
            </div>

            <p className="text-white p-0 m-0 font-semibold">Total Anual</p>
          </div>
        </div>
      </div>

      {/*Graficos*/}
      <div className="w-full mt-4 flex items-center justify-center flex-row">
        <div className="w-3/5">
          <Lineas />
        </div>

        <div className="w-2/4 p-4 flex items-center justify-center flex-col">

          <div className="w-full rounded-full p-3 flex justify-between items-center bg-[#032D23]">
            <div className="">
              <FaStore className="text-white"/>
            </div>

            <div>
              <p className="text-white">Pending orders</p>
            </div>

            <div>
              <strong className="text-white">300</strong>
            </div>
          </div>

          <div className="w-full mt-2 rounded-full p-3 flex justify-between items-center bg-[#14B58F]">
            <div className="">
              <FaMotorcycle className="text-white"/>
            </div>

            <div className="flex justify-center items-center">
              <p className="text-white text-center">In delivery</p>
            </div>

            <div>
              <strong className="text-yellow-400">100</strong>
            </div>
          </div>

          <div className="w-full mt-2 rounded-full p-3 flex justify-between items-center bg-[#06765B]">
            <div className="">
              <FaMotorcycle className="text-white"/>
            </div>

            <div>
              <p className="text-white">Orders delivered</p>
            </div>

            <div>
              <strong className="text-red-400">100</strong>
            </div>
          </div>

        </div>
      </div>

      {/*Table */}
      <div className="w-full mt-10">
      <table class="w-full table-fixed">
  <thead>
    <tr>
      <th className="text-[#032D23] text-center">Customer Name</th>
      <th className="text-[#032D23] text-center">Date</th>
      <th className="text-[#032D23] text-center">Location</th>
      <th className="text-[#032D23] text-center">Product</th>
      <th className="text-[#032D23] text-center">Status order</th>
    </tr>
  </thead>
  <tbody>
    <tr className="cursor-pointer hover:bg-[#14B58F] hover:text-white rounded-lg">
      <td className="text-center">Abraham Gutierrez</td>
      <td className="text-center">19-Marzo-2024</td>
      <td className="text-center">Managua</td>
      <td className="text-center">Plant Sabila</td>
      <td className="text-center font-semibold">New Order</td>
    </tr>

    <tr className="cursor-pointer hover:bg-[#14B58F] hover:text-white rounded-lg">
      <td className="text-center">Maria Jose</td>
      <td className="text-center">01-Marzo-2024</td>
      <td className="text-center">Masaya</td>
      <td className="text-center">Flovers</td>
      <td className="text-center font-semibold">New Order</td>
    </tr>
    
    <tr className="cursor-pointer hover:bg-[#14B58F] hover:text-white rounded-lg">
      <td className="text-center">Alejandra Tuque</td>
      <td className="text-center">07-Abril-2024</td>
      <td className="text-center">Granada</td>
      <td className="text-center">Yellow Flovers</td>
      <td className="text-center text-yellow-500 font-semibold">In Delivery</td>
    </tr>
   
    <tr className="cursor-pointer hover:bg-[#14B58F] hover:text-white rounded-lg">
      <td className="text-center">Marcelo Tuque</td>
      <td className="text-center">09-Abril-2024</td>
      <td className="text-center">Rivas</td>
      <td className="text-center">Flovers</td>
      <td className="text-center text-red-400 font-semibold">Orders delivered</td>
    </tr>

    <tr className="cursor-pointer hover:bg-[#14B58F] hover:text-white rounded-lg">
      <td className="text-center">MarceloTuque</td>
      <td className="text-center">08-Enero-2024</td>
      <td className="text-center">Ciudad Sandino</td>
      <td className="text-center">Aloe</td>
      <td className="text-center text-yellow-500 font-semibold">In Delivery</td>
    </tr>
    
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Statistics;
