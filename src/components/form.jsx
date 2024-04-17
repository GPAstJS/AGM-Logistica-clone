import { useState } from "react";

import WhatsAppIcon from "../assets/whatsapp.svg";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  return (
    <div className="3xl:w-full sm:w-[40rem]  flex flex-col font-montserrat mt-10 mb-10">
      <div className="3xl:w-full sm:w-[40rem] text-center flex flex-col items-center tracking-widest font-bold text-[#417581]">
        <h6 className="3xl:w-[72.5rem] sm:w-[40rem] ">atendimento</h6>
        <h2 className="3xl:w-[72.5rem] sm:w-[40rem] uppercase border-gray-200     border-b-2     text-black 3xl:text-5xl sm:text-3xl tracking-wide">
          entre em contato
        </h2>
      </div>

      <div className="w-full flex 3xl:flex-row sm:flex-col mt-10 justify-center">
        <div className="w-[40rem]">
          <div className="3xl:grid 3xl:grid-cols-2 3xl:gap-4 sm:flex sm:flex-col sm:px-5 ">
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border-[1px] p-3 border-[#7a7a7a] sm:h-[4rem] sm:mb-3 "
              type="text"
              placeholder="Nome"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="border-[1px] p-3 border-[#7a7a7a] sm:h-[4rem] sm:mb-3 "
              type="text"
              placeholder="Email"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="border-[1px] p-3 border-[#7a7a7a] sm:h-[4rem] sm:mb-3 "
              type="text"
              placeholder="Telefone"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
              className="border-[1px] p-3 border-[#7a7a7a] sm:h-[4rem] sm:mb-3 "
              type="text"
              placeholder="Empresa"
            />
            <textarea
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="3xl:w-[40rem]  h-[13rem] border-[1px] p-3 border-[#7a7a7a] sm:h-[4rem] "
              placeholder="Mensagem"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>

          <div className="w-[40rem] h-[5rem] flex justify-center items-center ">
            <button className="uppercase   hover:bg-[#F7A600] hover:duration-500 text-white font-bold w-[20rem] h-[3rem] bg-[#075E6C] tracking-[0.2rem]">
              solicitar contato
            </button>
          </div>
        </div>

        <div className=" flex flex-col items-center 3xl:w-[27rem] sm:w-[40rem] h-[21.25rem]">
          <div className="sm:w-[37.5rem] 3xl:w-[25rem] sm:h-[15.6rem] 3xl:h-[21.25rem] flex flex-col justify-center items-center text-center text-white font-montserrat font-bold  bg-[#075e6c]">
            <img className="mb-5" src={WhatsAppIcon} alt="WhatsApp Icon" />

            <span className="text-4xl">(55) 21 99815-9083</span>
            <p className="text-xxl">Comercial Logística</p>

            <span className="text-4xl mt-3">(55) 21 99817-6366</span>
            <p className="text-xl">Comercial Guarda de Documentos</p>

            <div className=" mt-3 flex flex-row">
              <strong className="text-lg">E-mail: </strong>conheça
              <a
                className="font-thin ml-2"
                href="mailto:comercial@agmlogistica.com"
              >
                comercial@agmlogistica.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
