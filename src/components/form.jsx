import useSendMail from "../hooks/useSendMail";

import React from "react";
import WhatsAppIcon from '../assets/whatsapp.svg'

const Form = () => {
  return (
    <div className="w-full flex-flex-col font-montserrat mt-10 mb-10">
      <useSendMail/>
      <div className="w-full text-center flex flex-col items-center tracking-widest font-bold text-[#417581]">
        <h6 className="w-[72.5rem]">atendimento</h6>
        <h2 className="w-[72.5rem] uppercase border-gray-200     border-b-2     text-black text-5xl tracking-wide">
          entre em contato
        </h2>
      </div>

      <div className="w-full flex flex-row justify-center mt-10">
        <div className=" w-[40rem]">
            <div className="gap-4  grid grid-cols-2">
                
            <input className="border-[1px] p-3 border-[#7a7a7a]" type="text" placeholder="Nome" />
            <input className="border-[1px] p-3 border-[#7a7a7a]" type="text" placeholder="Email" />
            <input className="border-[1px] p-3 border-[#7a7a7a]" type="text" placeholder="Telefone" />
            <input className="border-[1px] p-3 border-[#7a7a7a]" type="text" placeholder="Empresa" />
            <textarea className="w-[40rem] h-[13rem] border-[1px] p-3 border-[#7a7a7a]" placeholder="Mensagem" name="" id="" cols="30" rows="10"></textarea>
            </div>
            
            <div className="w-[40rem] h-[5rem] flex justify-center items-center ">
            <button className="uppercase hover:bg-[#F7A600] hover:duration-500 text-white font-bold w-[20rem] h-[3rem] bg-[#075E6C] tracking-[0.2rem]" >solicitar contato</button>
            </div>

        </div>

        <div className=" ml-20 flex flex-col items-center w-[27rem] h-[21.25rem] justify-center bg-[#075e6c]">

          <div className="flex flex-col items-center text-center text-white font-montserrat font-bold">

            <img className="mb-5" src={WhatsAppIcon} alt="WhatsApp Icon" />

            <span className="text-4xl">(55) 21 99815-9083</span>
            <p className="text-xxl">Comercial Logística</p>

            <span className="text-4xl mt-3">(55) 21 99817-6366</span>
            <p className="text-xl">Comercial Guarda de Documentos</p>

            <div className=" mt-3 flex flex-row">

              <strong className="text-lg">E-mail: </strong>
              <a className="font-thin ml-2" href="mailto:comercial@agmlogistica.com">comercial@agmlogistica.com</a>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Form;
