import Form from "../components/form";
import Header from "../components/header";
import Footer from "../components/footer";

import bezierIcon from "../assets/bezier.svg";
import banner from "../assets/banner-empresa2.jpg";
import mobileBanner from "../assets/banner-empresa2-mobile.png";
import ilustracaoQuemSomos from "../assets/ilustracao-quem-somos4.png";

import { useScreenSize } from "../hooks/useScreenSize";

export default function Sobre() {
  return (
    <div className="flex flex-col items-center md:w-full sm:w-[90%]">
      <Header />
      <div className="3xl:w-full p-2 sm:w-[90%] flex mt-20 flex-col items-center font-montserrat justify-center">
        <div className="w-full bg-[#f6f6f6] h-[6rem] flex items-center justify-center">
          <div className="bg-transparent flex flex-row items-center justify-between sm:w-[100%] 3xl:w-[75rem]">
            <div>
              <h5 className="sm:text-xs uppercase font-bold text-[#075e6c]">
                conheça a agm logística
              </h5>
            </div>

            <div className="3xl:text-sm sm:text-xs">
              <p>Você está aqui: AGM LOGÍSTICA / CONHEÇA A AGM LOGÍSTICA</p>
            </div>
          </div>
        </div>
        <div
          className="3xl:w-full sm:w-[100%] sm:h-[5.063rem] 3xl:h-[27.375rem] mb-20 flex items-center justify-between"
          style={{
            backgroundImage: `url(${useScreenSize() <= 1160 ? mobileBanner : banner})`,
          }}
        >
          <h1 className="3xl:static sm:relative top-20 sm:ml-0 3xl:ml-28 uppercase font-bold font-montserrat sm:text-xl 3xl:text-3xl 3xl:w-[40rem] sm:mt-5 sm:w-[100%] text-center 3xl:text-white sm:text-[#075e6c]">
            um dos principais especialistas em logística do mercado
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center sm:w-[100%]">
          <div className="flex 3xl:flex-row sm:flex-col mt-16 items-center justify-between sm:w-[100%] 3xl:w-[72.5rem]">
            <div className="flex flex-col justify-between w-[35rem] sm:w-[90%]">
              <strong className="uppercase 3xl:text-3xl/[35px] sm:text-2xl text-[#075e6c]">
                entregar excelência <br /> em logística, por 65 anos <br />{" "}
                requer esforço e dedicação
              </strong>

              <div className="opacity-8 sm:mb-5 text-gray-800 5 mt-5 text-[1.063rem] gap-y-5  flex flex-col">
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
              <img src={ilustracaoQuemSomos} alt="Ilustração Quem Somos" />
            </div>
          </div>

          <div className="flex flex-col mt-20 items-center justify-center font-montserrat">
            <h6 className="text-[#075e6c] tracking-[0.2rem] font-bold">
              qualidades
            </h6>
            <h2 className="uppercase font-bold sm:text-3xl 3xl:text-5xl">
              porque escolher a agm
            </h2>

            <div className="3xl:flex 3xl:flex-row sm:grid sm:grid-cols-2 sm:gap-9 items-center justify-between 3xl:w-[85rem] mt-20 font-montserrat">
              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={bezierIcon} alt="Bezier Icon" />
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
                  <img src={bezierIcon} alt="Bezier Icon" />
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
                  <img src={bezierIcon} alt="Bezier Icon" />
                </div>

                <strong className="text-lg font-bold opacity-80">
                  Segurança
                </strong>

                <p className="text-1xl w-[18rem]">
                  Do controle de pragas ao monitoramento completo do acesso
                </p>
              </div>

              <div className="flex flex-col items-center text-center justify-center w-[17rem]">
                <div className="flex items-center justify-center mt-6 rounded-full w-[5rem] h-[5rem] bg-[#075e6c] mb-5">
                  <img src={bezierIcon} alt="Bezier Icon" />
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
