
import Header from "../components/header";
import Footer    from "../components/footer";
import Bezier from "../assets/bezier.svg";

export default function Contato() {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="w-full h-[5rem] bg-[#F6F6F6] items-center font-montserrat flex flex-col justify-center">
        <div className="w-[75rem] bg-transparent flex flex-row justify-between px-2">
          <div className="h-[2rem]">
            <h5 className="uppercase text-sm  text-[#075e6c] font-bold">
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

      <div className="w-full flex flex-col mt-28 items-center justify-center">
        <div className="flex flex-row w-[75rem] justify-between">
        <div className="w-[22rem] h-[15rem] flex flex-row ">
          <div className="flex items-center justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="ml-5 text-gray-700">
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
        <div className="w-[22rem] h-[15rem] flex flex-row ">
          <div className="flex items-center justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="ml-5 text-gray-700 w-[13rem]">
            <span className="tracking-[0.3rem] font-bold text-[17px] text-[#075e6c]">
              Endereço:
            </span>
            <p>Rua Benjamin da Silva, 345 - Pavuna, Rio de Janeiro/RJ - CEP:22441-000</p>
            <br />
            <p>Estrada Rio D'Ouro, 1000 - Pavuna, Rio de Janeiro/RJ CEP:21535-030</p>
          </div>
        </div>
        <div className="w-[22rem] h-[15rem] flex flex-row ">
          <div className="flex items-center justify-center bg-[#075e6c] h-[4rem] w-[4rem] rounded-full">
            <img src={Bezier} alt="test" />
          </div>

          <div className="ml-5 text-gray-700">
            <span className="tracking-[0.3rem] font-bold text-[17px] text-[#075e6c]">
              E-mail:
            </span>
            <br />
            <p className=" text-black underline">comercial@agmlogistica.com</p>
          </div>
        </div>
        </div>
      </div>

      <div className="w-full flex mt-20 items-center justify-center mb-20">

        <div className="w-[75rem] flex flex-col gap-y-3">

            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Nome" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Empresa" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="email" placeholder="Email" />
            <input className="w-full h-[2.896rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Telefone" />
            <textarea className="w-full h-[12rem] p-2 border-[1px] border-solid border-black text-black" type="text" placeholder="Mensagem" />
            <button className="text-white bg-[#818A91] h-[4rem] font-bold tracking-[0.3rem]">ENVIAR</button>
        </div>

      </div>
      <Footer/>
    </div>
  );
}
