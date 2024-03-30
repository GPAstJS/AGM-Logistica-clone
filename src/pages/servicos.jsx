import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
import Bezier from "../assets/bezier.svg";

export default function Servicos() {
  return (
    <div className="font-montserrat">
      <Header />
      <div className="w-full h-[5rem] bg-[#F6F6F6] items-center font-montserrat flex flex-col justify-center">
        <div className="w-[75rem] bg-transparent flex flex-row justify-between px-2">
          <div className="h-[2rem]">
            <h5 className="uppercase text-sm  text-[#075e6c] font-bold">
              serviços de logística e armazenagem
            </h5>
          </div>
          <div className="h-[2rem]">
            <p className="text-[12px]">
              Você está aqui: AGM LOGÍSTICA / SERVIÇOS DE LOGÍSTICA E
              ARMAZENAGEM
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-20">
        <h6 className="tracking-[0.2rem] text-[#075e6c] font-bold">serviços</h6>
        <h2 className="uppercase text-[40px] font-bold tracking-[0.1rem]">
          serviços oferecidos
        </h2>

        <div className="flex flex-col uppercase w-[90rem] mt-20 items-center justify-center">
          <div className="flex flex-row h-[20rem] w-full items-center justify-between">
            <div className="flex w-[50%] flex-col items-center justify-center">
              <div className=" flex items-center justify-center h-[5rem] w-[5rem] bg-[#075e6c] rounded-full">
                <img src={Bezier} alt="Test" />
              </div>
              <p className="uppercase text-[#075e6c] text-3xl font-bold mt-2">
                logística integrada
              </p>
            </div>

            <div className="flex flex-col w-[37.5rem]">
              <p className="normal-case w-[40rem]">
                Controle completo de todo o fluxo logístico: da matéria prima ao
                produto nas mãos do consumidor final.
              </p>

              <button className="uppercase  hover:duration-500 hover:bg-[#F7A600] text-white bg-[#075e6c] border-left-1 text-sm w-[10rem] h-[3rem] mt-5     tracking-[0.3rem] font-medium">
                conheça
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[20rem] w-full items-center justify-between">
            <div className="flex w-[50%] flex-col items-center justify-center">
              <div className=" flex items-center justify-center h-[5rem] w-[5rem] bg-[#075e6c] rounded-full">
                <img src={Bezier} alt="Test" />
              </div>
              <p className="uppercase text-[#075e6c] text-3xl font-bold mt-2">
                armazenamento
              </p>
            </div>

            <div className="flex flex-col w-[37.5rem]">
              <p className="normal-case w-[40rem]">
              Infraestrutura completa para estocagem/armazenagem de diversos tipos de produtos. 360.000m3 em conformidade com todas as regulações e segurança necessárias.
              </p>

              <button className="uppercase  hover:duration-500 hover:bg-[#F7A600] text-white bg-[#075e6c] border-left-1 text-sm w-[10rem] h-[3rem] mt-5     tracking-[0.3rem] font-medium">
                conheça
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[20rem] w-full items-center justify-between">
            <div className="flex w-[50%] flex-col items-center justify-center">
              <div className=" flex items-center justify-center h-[5rem] w-[5rem] bg-[#075e6c] rounded-full">
                <img src={Bezier} alt="Test" />
              </div>
              <p className="uppercase text-[#075e6c] text-3xl font-bold mt-2">
                logística in-house
              </p>
            </div>

            <div className="flex flex-col w-[37.5rem]">
              <p className="normal-case w-[40rem]">
              Deixar a operação do seu parque logístico nas mãos de um especialista se traduz em ganho trabalhista e despreocupação. Conheça mais sobre o Outsourcing em Logística.
              </p>

              <button className="uppercase  hover:duration-500 hover:bg-[#F7A600] text-white bg-[#075e6c] border-left-1 text-sm w-[10rem] h-[3rem] mt-5     tracking-[0.3rem] font-medium">
                conheça
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[20rem] w-full items-center justify-between">
            <div className="flex w-[50%] flex-col items-center justify-center">
              <div className=" flex items-center justify-center h-[5rem] w-[5rem] bg-[#075e6c] rounded-full">
                <img src={Bezier} alt="Test" />
              </div>
              <p className="uppercase text-[#075e6c] text-3xl font-bold mt-2">
                logística reversa
              </p>
            </div>

            <div className="flex flex-col w-[37.5rem]">
              <p className="normal-case w-[40rem]">
              Ingressar na economia circular pós 2020 é essencial. E a logística reversa é a principal ferramenta para a redução de custoso e aumento de valor da sua marca ou produto.  
              </p>

              <button className="uppercase  hover:duration-500 hover:bg-[#F7A600] text-white bg-[#075e6c] border-left-1 text-sm w-[10rem] h-[3rem] mt-5     tracking-[0.3rem] font-medium">
                conheça
              </button>
            </div>
          </div>
          <div className="flex flex-row h-[20rem] w-full items-center justify-between">
            <div className="flex w-[50%] flex-col items-center justify-center">
              <div className=" flex items-center justify-center h-[5rem] w-[5rem] bg-[#075e6c] rounded-full">
                <img src={Bezier} alt="Test" />
              </div>
              <p className="uppercase text-[#075e6c] text-3xl font-bold mt-2">
                transporte e distribuição
              </p>
            </div>

            <div className="flex flex-col w-[37.5rem]">
              <p className="normal-case w-[40rem]">
              Soluções em transporte em todas as etapas do processo, da indústria para o centro de distribuição e para o consumidor final. Conheça nossos modais de transporte. 
              </p>

              <button className="uppercase  hover:duration-500 hover:bg-[#F7A600] text-white bg-[#075e6c] border-left-1 text-sm w-[10rem] h-[3rem] mt-5     tracking-[0.3rem] font-medium">
                conheça
              </button>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />        
    </div>
  );
}
