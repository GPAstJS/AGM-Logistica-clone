import React from "react";
import CheckIcon from "../assets/check-icon.svg";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#2E3447]">
      <div className="w-[75rem] h-[17.753rem] flex items-center justify-between bg-transparent">
        <div className="flex flex-col font-montserrat text-white w-[15.5rem] mb-[4rem]">
          <h5 className="tracking-widest w-full text-sm uppercase font-bold">
            unidade pavuna centers
          </h5>

          <p className="text-xs mt-[1rem]">
            <strong className="text-sm">Rio de Janeiro</strong>
            <br />
            Estrada do Rio D'Ouro, 1000 - Módulos J,K e L - Pavuna - CEP:
            21535-030
          </p>
        </div>

        <div className="flex flex-col font-montserrat text-white w-[15rem] mb-[4rem]">
          <h5 className="tracking-widest text-sm uppercase font-bold">
            unidade pavuna gd
          </h5>

          <p className="text-xs mt-[1rem]">
            <strong className="text-sm">Rio de Janeiro</strong>
            <br />
            Rua Benjamin da Silva, 345 – Pavuna CEP: 21535-490
          </p>
        </div>

        <div className="flex flex-col font-montserrat text-white w-[15rem] mb-[3.4rem]">
          <h5 className="tracking-widest text-sm uppercase font-bold">
            contatos
          </h5>

          <p className="text-xs mt-[1rem]">
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

        <div className="flex flex-col font-montserrat text-white w-[15rem] mb-[6.3rem]">
          <h5 className="tracking-widest text-sm uppercase font-bold">
            termos legais
          </h5>

          <a
            className="hover:text-[#417581] duration-500  text-white flex flex-row text-xs mt-[1rem]"
            href="https://www.agmlogistica.com.br/politica-de-privacidade/"
          >
            <img
              className=" fill-[#417581] hover:fill-white mr-1"
              src={CheckIcon}
              alt="Check Icon"
            />
            
            Política de Privacidade
          </a>
        </div>
      </div>

      <div className="w-full bg-[#242938] flex justify-center">

      <div className="flex justify-start  items-center  h-[3rem]  w-[75rem] bg-transparent text-white text-xs">
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
