
import Header from "../components/header";
import Footer    from "../components/footer";
import Form  from "../components/form";
import Bezier from "../assets/bezier.svg";

export default function Contato() {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="3xl:w-full sm:w-[40rem] h-[5rem] bg-[#F6F6F6] items-center font-montserrat flex flex-col justify-center sm:items-center">
        <div className="3xl:w-[75rem] sm:w-[40rem] bg-transparent flex flex-row justify-between px-2">
          <div className="h-[2rem]">
            <h5 className="uppercase sm:text-xs 3xl:text-sm  text-[#075e6c] font-bold">
              contato agm logística
            </h5>
          </div>
          <div className="h-[2rem]">
            <p className="text-[12px]">
              Você está aqui: AGM LOGÍSTICA / CONTATO AGM LOGÍSTICA
            </p>
          </div>
        </div>
      </div>

      <div className="3xl:w-full 3xl:mt-10 3xl:mb-10 sm:w-[40rem] flex flex-col mt-28 items-center justify-center">
        <div className="3xl:flex 3xl:flex-row 3xl:items-center 3xl:mb-10 3xl:justify-center sm:grid sm:grid-cols-2 3xl:w-[75rem] sm:w-[40rem] ">
        <div className="3xl:w-[22rem] sm:w-full sm:mt-[1rem]  h-full flex 3xl:flex-row sm:flex-col sm:items-center sm:justify-center 3xl:items-start 3xl:justify-start ">
          <div className="flex items-center sm:mt-5 justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="3xl:block sm:mt-5 sm:flex sm:flex-col sm:items-center sm:justify-center 3xl:ml-5 sm:text-xs text-gray-700">
            <span className="tracking-[0.3rem] font-bold text-[17px] text-[#075e6c]">
              Telefones:
            </span>
            <p>Comercial Logística</p>
            <p>(21) 99815-9083</p>
            <p>Comercial Guarda de Documentos</p>
            <p> (21) 99817-6366 </p>
            <p>Financeiro </p>
            <p> (21) 99683-8731 </p>
            <p>Compras</p>
            <p> (21) 96782-7020</p>
          </div>
        </div>

        <div className="3xl:w-[22rem] sm:w-full h-full sm:p-0 sm:m-0 flex 3xl:flex-row sm:flex-col 3xl:items-start 3xl:justify-start sm:items-center sm:justify-center ">
          <div className="flex sm:mt-5 3xl:flex-row sm:flex-col items-center justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="3xl:block sm:mt-5 sm:text-center sm:flex sm:flex-col sm:items-center sm:justify-center ml-5 sm:text-xs text-gray-700 w-[13rem]">
            <span className="tracking-[0.3rem] font-bold text-[17px] text-[#075e6c]">
              Endereço:
            </span>
            <p>Rua Benjamin da Silva, 345 - Pavuna, Rio de Janeiro/RJ - CEP:22441-000</p>
            <br />
            <p>Estrada Rio D'Ouro, 1000 - Pavuna, Rio de Janeiro/RJ CEP:21535-030</p>
          </div>
        </div>

        <div className="3xl:w-[22rem] sm:mt-10 sm:mb-20 sm:w-[40rem] h-full flex 3xl:flex-row sm:flex-col 3xl:items-start 3xl:justify-start sm:items-center sm:justify-center ">
          <div className="flex 3xl:mt-0 sm:mt-5 3xl:flex-row sm:flex-col items-center justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="ml-5 sm:text-center sm:mt-5 text-gray-700">
            <span className="tracking-[0.3rem] font-bold text-[17px] text-[#075e6c]">
              E-mail:
            </span>
            <br />
            <p className=" text-black underline">comercial@agmlogistica.com</p>
          </div>
        </div>
        </div>
      </div>

      {/* <div className="w-full flex mt-20 items-center justify-center mb-20">

        <div className="w-[75rem] flex flex-col gap-y-3">

            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Nome" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Empresa" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="email" placeholder="Email" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Telefone" />
            <textarea className="w-full h-[12rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Mensagem" />
            <button className="text-white bg-[#818A91] h-[4rem] font-bold tracking-[0.3rem]">ENVIAR</button>
        </div>

      </div> */}
      <Form/>
      <Footer/>
    </div>
  );
}
