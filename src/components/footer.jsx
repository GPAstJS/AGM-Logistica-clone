import React from "react";
import CheckIcon from "../assets/check-icon.svg";

const Footer = () => {
  return (
    <div className="3xl:w-full sm:w-[40rem] flex flex-col 3xl:justify-center sm:justify-start 3xl:items-center sm:items-start bg-[#2E3447] sm:w-[30rem]">
      <div className="3xl:w-[75rem] sm:w-full mt-10 flex 3xl:flex-row sm:flex-col 3xl:items-center sm:items-start justify-between bg-transparent">
        <div className="flex ml-4 flex-col 3xl:w-[15.5rem] font-montserrat text-white  mb-[4rem] sm:w-[20rem]">
          <h5 className="tracking-widest 3xl:text-sm sm:text-2xl uppercase font-bold sm:w-[26rem]">
            unidade pavuna centers
          </h5>

          <p className="3xl:text-xs sm:text-xl mt-[1rem]">
            <strong className="3xl:text-xs sm:text-xl">Rio de Janeiro</strong>
            <br />
            Estrada do Rio D'Ouro, 1000 - Módulos J,K e L - Pavuna - CEP:
            21535-030
          </p>
        </div>

        <div className="flex flex-col  ml-4 font-montserrat text-white 3xl:w-[15rem] sm:w-[26rem] mb-[4rem]">
          <h5 className="tracking-widest uppercase font-bold 3xl:text-sm sm:text-2xl">
            unidade pavuna gd
          </h5>

          <p className="3xl:text-xs sm:text-xl mt-[1rem]">
            <strong className="3xl:text-xs sm:text-xl">Rio de Janeiro</strong>
            <br />
            Rua Benjamin da Silva, 345 – Pavuna CEP: 21535-490
          </p>
        </div>

        <div className="flex flex-col ml-4 font-montserrat text-white 3xl:w-[15rem] sm:w-[26rem] mb-[3.4rem]">
          <h5 className="tracking-widest sm:h-full 3xl:text-sm sm:text-2xl uppercase font-bold">
            contatos
          </h5>

          <p className="3xl:text-xs sm:text-xl   mt-[1rem]">
            Comercial Logística:
            <br />
            <a
              className="hover:text-[#417581] duration-500"
              href="tel:021998159083"
            >
              (55) 21 99815-9083
            </a>
            <br />
            Comercial Guarda de Documentos:
            <br />
            <a
              className="hover:text-[#417581] duration-500"
              href="tel:021998176366"
            >
              (55) 21 99817-6366
            </a>
          </p>
        </div>

        <div className="flex flex-col ml-4 font-montserrat text-white w-[15rem] mb-[6.3rem]">
          <h5 className="tracking-widest 3xl:text-sm sm:text-xl uppercase font-bold">
            termos legais
          </h5>

          <a
            className="hover:text-[#417581] duration-500  text-white 3xl:w-full sm:w-[18rem] flex flex-row 3xl:text-xs sm:text-xl mt-[1rem]"
            href="https://www.agmlogistica.com.br/politica-de-privacidade/"
          >
            <img
              className=" fill-[#417581]  hover:fill-white mr-1"
              src={CheckIcon}
              alt="Check Icon"
            />
            
            Política de Privacidade
          </a>
        </div>
      </div>

      <div className="w-full bg-[#242938] flex 3xl:justify-center sm:justify-start text-center">

      <div className="flex justify-start  mt-5 mb-3 items-center  h-[3rem]  3xl:w-[75rem] sm:w-[40rem] bg-transparent text-white sm:text-xl 3xl:text-xs">
        <p>
          © 2024 AGM Logistica. Todos os Direitos Reservados. - Desenvolvido
          pela Profile Design
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
