import Header from "../components/header";
import Form from "../components/form";
import Footer from "../components/footer";
import IlustracaoQuemSomos from "../assets/ilustracao-quem-somos4.png";
import Banner from '../assets/banner-empresa2.jpg'

import BezierIcon from "../assets/bezier.svg";

export default function Sobre() {
  return (
    <div>
      <Header />
      <div className="w-full flex mt-20 flex-col items-center  font-montserrat">
            <div className="w-full bg-[#f6f6f6] h-[6rem] flex items-center h-[rem] justify-center">
                
                <div className="bg-transparent flex flex-row items-center justify-between w-[75rem]">

                    <div>
                        <h5 className="uppercase font-bold text-[#075e6c]" >conheça a agm logística</h5>
                    </div>

                    <div className="text-sm" >
                       <p>Você está aqui: AGM LOGÍSTICA / CONHEÇA A AGM LOGÍSTICA</p> 
                    </div>

                </div>

            </div>
            <div className="w-full h-[27.375rem] mb-20 flex items-center justify-between" style={{
                backgroundImage: `url(${Banner})`
            }}>
                <h1 className=" ml-28 uppercase font-bold font-montserrat text-3xl w-[38rem]  text-center text-white">um dos principais especialistas em logística do mercado</h1>

                <div className="w-[984px]"></div>

            </div>
        <div className="flex flex-col items-center justify-center ">



          <div className="flex flex-row items-center justify-between w-[72.5rem]">
            <div className="flex flex-col justify-between w-[35rem]">
              <strong className="uppercase text-3xl/[35px] text-[#075e6c]">
                entregar excelência <br /> em logística, por 65 anos <br />{" "}
                requer esforço e dedicação
              </strong>

              <div className="opacity-8 text-gray-800 5 mt-5 text-[1.063rem] gap-y-5  flex flex-col">
                <p>
                  Do benefício de comodities no Espírito Santo, para a gestão e
                  armazenagem de complexos processos logísticos. A AGM nasceu no
                  armazenamento de café e, com a evolução da economia e
                  tecnologia nos anos 1990, se reposicionou no mercado
                  brasileiro fazendo a Gestão de Documentos para grandes Bancos
                  do Rio de Janeiro.
                </p>

                <p>
                  Outros clientes da área bancária surgiram, a operação se
                  tornou cada vez maior e mais complexa, e a AGM foi solicitada
                  a cuidar da logística de seus clientes. Ao crescer com o
                  mercado e seus desafios, a AGM criou um diferencial que é
                  entender a cadeia de suprimentos de cada cliente, e se adaptar
                  aos desafios específicos de cada um deles.
                </p>

                <p>
                  Por ser experiente no cenário econômico brasileiro, a AGM
                  prepara seus clientes com antecedência para eventuais mudanças
                  e adaptações desde a Gestão de Processos (BPM) até a operação
                  completa de seu parque logístico.
                </p>

                <p>
                  As práticas mais exigentes do mercado são dia a dia para a
                  AGM.
                </p>
              </div>
            </div>

            <div>
              <img src={IlustracaoQuemSomos} alt="Ilustração Quem Somos" />
            </div>
          </div>

          <div className="flex flex-col mt-20 items-center justify-center font-montserrat">
            <h6 className="text-[#075e6c] tracking-[0.2rem] font-bold">
              qualidades
            </h6>
            <h2 className="uppercase font-bold text-5xl">
              porque escolher a agm
            </h2>

            <div className="flex flex-row items-center justify-between w-[85rem] mt-20 font-montserrat">
              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={BezierIcon} alt="Bezier Icon" />
                </div>

                <strong className="text-lg font-bold opacity-80">
                  Tradição
                </strong>

                <p className="text-1xl">
                  65 anos de experiência na operação logística
                </p>
              </div>

              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={BezierIcon} alt="Bezier Icon" />
                </div>

                <strong className="text-lg font-bold opacity-80">
                  Solidez
                </strong>

                <p className="text-1xl w-[18rem]">
                  Clientes em áreas onde a regulação é constante e complexa
                </p>
              </div>

              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center mt-6 rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={BezierIcon} alt="Bezier Icon" />
                </div>

                <strong className="text-lg font-bold opacity-80">
                  Segurança
                </strong>

                <p className="text-1xl w-[18rem]">
                  Do controle de pragas ao monitoramento completo do   acesso
                </p>
              </div>

              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center mt-6 rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={BezierIcon} alt="Bezier Icon" />
                </div>

                <strong className="text-lg font-bold opacity-80">
                  Atendimento
                </strong>

                <p className="text-1xl">
                  Call center integrado e equipes especializadas na operação de
                  cada cliente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Footer />
    </div>
  );
}
