import Header from "../components/header";
import fetch from "../hooks/useSendMail";

import Form from "../components/form";
import Footer from "../components/footer";
import AMGDocLogo from "../assets/logomarca-agmdoc.png";
import BezierIcon from "../assets/bezier.svg";
import ArrowRangeIcon from "../assets/arrow-range.svg";
import TruckIcon from "../assets/truck-icon.svg";

import GraphIcon from "../assets/graph-up-arrow.svg";
import NotebookIcon from "../assets/laptop.svg";
import QuestionIcon from "../assets/question-circle-fill.svg";
import BoxIcon from "../assets/dropbox.svg";
import Maquininha from "../assets/maquininha.png";
import TecSegImg from "../assets/tenologia-seguranca.png";
import CompromissosImg from '../assets/gestaodecompromissoimg.jpg'

export default function Home() {

  return (
    <div className="w-full flex flex-col items-center ">
      <Header />

      <fetch/>

      <div className="w-full flex flex-row justify-around items-center">
        <div className="w-[69rem] font-montserrat pt-20">
          <h6 className="tracking-[0.3rem] text-[#417581] text-sm font-bold font-montserrat">
            conheça
          </h6>
          <h2 className="text-[28pt] text-black leading-10 tracking-wide   uppercase font-montserrat font-bold">
            <span className="mr-2 text-[#075E6C]">65 anos</span>
            de experência
            <br />
            <span className="text-[#1E1D24]">em logística</span>
          </h2>
          <p className="text-[17px] mt-10 tracking-2 text-left text-gray-600 w-[45rem]">
            Fornecemos ao mercado e aos nossos clientes soluções inteligentes e
            eficazes de gestão logística, zelando pela integridade dos seus
            patrimônios, das pessoas e do meio ambiente, de forma rentável,
            através da otimização e melhoria contínua <br /> dos nossos
            processos.
          </p>
          <div>
            <div className="flex flex-row justify-between font-montserrat mt-10 font-semibold text-[#075E6C] w-[42rem]">
              <img src={AMGDocLogo} alt="AMG Doc" />

              <h4 className="text-left w-[27.5rem]">
                <a href="https://agmdoc.com.br" target="_blank">
                  Preocupado em como realizar a Transformação Digital na sua
                  empresa? Conheça nossos serviços de Gestão de Documentos?
                </a>
                <a
                  className="ml-1"
                  href="https://agmdoc.com.br"
                  target="_blank"
                >
                  www.agmdoc.com.br
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 flex items-center justify-center flex-col">
        <div className="w-[72.5rem] font-montserrat  ">
          <h6 className="tracking-[0.1rem] text-[#417581] text-sm font-bold font-montserrat">
            sobre nós
          </h6>

          <h2 className="text-[30pt] ml-[1px] text-black leading-10 tracking-wide   uppercase font-montserrat font-bold">
            soluções excelentes e eficazes
          </h2>

          <p className="text-[17px] mt-10 tracking-2 text-left text-gray-600  w-[72.5rem]">
            Formado pelas empresas AGM Logística, AGM Gestão de Documentos e
            AGMSBS Transportes, temos foco nas necessidades de cada cliente.
          </p>

          <p className="text-[17px] mt-10 tracking-2 text-left text-gray-600 w-[72.5rem]">
            Com mais de 65 anos de experiência na área de armazenagem e
            logística, temos extenso know-how no desenvolvimento de projetos
            customizados. Através de uma estrutura flexível da AGM oferecemos
            soluções logísticas integradas a diversos segmentos.
          </p>

          <p className="text-[17px] mt-10 tracking-2 text-left text-gray-600 w-[72.5rem]">
            Fornecemos soluções inteligentes e eficazes de gestão logística,
            zelamos pela integridade patrimonial, social e ambiental.
            Trabalhamos com o cliente na otimização e melhoria contínua de
            processos – trazendo ganhos e vantagem competitiva.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col items-center mt-10 justify-center">
        <div className="w-[72.5rem] flex flex-row  justify-between">
          <div className="flex flex-col w-[22.5rem] h-[22.5rem] border-[1px] px-5 items-center font-montserrat ">
            <div className="flex justify-center items-center mt-10   rounded-full w-[5rem] h-[5rem] bg-[#075E6C]">
              <img src={BezierIcon} alt="Bezier Icon" />
            </div>

            <a
              className="mt-5 uppercase font-bold  tracking-[0.05rem]"
              href="https://agmlogistica.com.br"
            >
              logística integrada
            </a>

            <p className="w-[20rem] mt-5 text-[17px] text-center text-gray-600">
              Planejamento, execução, armazenamento e controle de todo o fluxo
              de matéria-prima, suprimentos e produtos industrializados.
            </p>
          </div>

          <div className="flex flex-col w-[22.5rem] h-[22.5rem] border-[1px] px-5 items-center font-montserrat ">
            <div className="flex justify-center items-center mt-14   rounded-full w-[5rem] h-[5rem] bg-[#075E6C]">
              <img src={ArrowRangeIcon} alt="Bezier Icon" />
            </div>

            <a
              className="mt-8 uppercase font-bold  tracking-[0.05rem]"
              href="https://agmlogistica.com.br"
            >
              logística reversa
            </a>

            <p className="w-[20rem] mt-10 text-[17px] text-center text-gray-600">
              Gestão e operação de retornos, descarte e reciclagem de bens
              materiais pós-consumo.
            </p>
          </div>

          <div className="flex flex-col w-[22.5rem] h-[22.5rem] border-[1px] px-5 items-center font-montserrat ">
            <div className="flex justify-center items-center mt-10   rounded-full w-[5rem] h-[5rem] bg-[#075E6C]">
              <img src={TruckIcon} alt="Bezier Icon" />
            </div>

            <a
              className="mt-5 w-full text-center uppercase font-bold  tracking-[0.05rem]"
              href="https://agmlogistica.com.br"
            >
              transporte e distribuição
            </a>

            <p className="w-[20rem] mt-5 text-[17px] text-center text-gray-600">
              Temos soluções para todas as etapas, da indústria ao centro de
              distribuição e consumidor final.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-20  bg-transparent">
        <div className="w-full h-[16.25rem] flex items-center justify-center bg-[#0B4048]">
          <div className="w-[72.5rem]  bg-transparent tracking-[0.3rem] flex flex-row uppercase justify-between items-center text-white text-3xl font-montserrat font-medium">
            <h4>como podemos ajudar sua empresa?</h4>

            <button className="bg-white text-[#0B4048] tracking-[0.3rem] uppercase font-montserrat h-[4rem] w-[18rem]  text-[15px]">
              entre em contato
            </button>
          </div>
        </div>

        <div className="w-72.5rem h-[6rem] text-[15px] text-[#075E6C] flex items-center justify-center uppercase font-montserrat  tracking-[0.6rem] bg-[#F2F2F2]">
          <strong className="mt-3">
            adaptamos soluções para cada tipo de necessidade
          </strong>
        </div>
      </div>
      <div className="w-full mt-20  flex items-center justify-center flex-row">
        <div className="w-[25rem] h-[25rem] text-center font-montserrat flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center w-[16rem]">
            <img
              className="w-[3rem] h-[3rem] mb-4"
              src={GraphIcon}
              alt="Graph Icon"
            />

            <span className="tracking-[0.1rem] mb-3 text-[#075e6c] font-bold uppercase">
              indicadores de performance (kpis)
            </span>

            <p className="text-gray-700">
              Monitoramos e apontamos melhorias em todo o seu processo logístico
              – conheça mais sobre os KPIs.
            </p>
          </div>

          <div className="flex mt-5 flex-col items-center justify-center w-[16rem]">
            <img
              className="w-[3rem] h-[3rem] mb-4"
              src={NotebookIcon}
              alt="Laptop Icon"
            />

            <span className="tracking-[0.1rem] mb-3 text-[#075e6c] font-bold uppercase">
              tecnologia de gerenciamento
            </span>

            <p className="text-gray-700 text-center w-[20rem]">
              Velocidade para sua tomada de decisão e solução de problemas
              através do nosso WMS e nosso Call Center
            </p>
          </div>
        </div>
        <img
          className="w-[25rem] h-[31.25rem]"
          src={Maquininha}
          alt="Maquininha"
        />
        <div className="w-[25rem] ml-20 text-center font-montserrat flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center w-[16rem]">
            <img
              className="w-[3rem] h-[3rem] mb-6"
              src={QuestionIcon}
              alt="Question Icon"
            />

            <span className="tracking-[0.1rem] mb-3 text-[#075e6c] font-bold uppercase">
              tire suas duvidas
            </span>

            <p className="text-gray-700">
              Tem dúvidas sobre processo logístico? Veja algumas das perguntas e
              respostas sobre nossos serviços, controle e qualidade.
            </p>
          </div>

          <div className="flex mt-10 flex-col items-center justify-center w-[16rem]">
            <img
              className="w-[3rem] h-[3rem] mb-6"
              src={BoxIcon}
              alt="Box Icon"
            />

            <span className="tracking-[0.1rem] text-[#075e6c] mb-3   font-bold uppercase">
              casos de sucesso
            </span>

            <p className="text-gray-700">
              A AGM é a solução para diversos desafios logísticos do mercado.
              Conheça.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col mt-20 items-center justify-center">
        <h6 className="tracking-[0.2rem] text-[#417581] text-sm font-bold font-montserrat">
          áreas atendidas
        </h6>

        <h2 className="text-[30pt] ml-[1px] text-black leading-10 tracking-wide   uppercase font-montserrat font-bold">
          segmentos
        </h2>

        <div className="grid grid-cols-6 mt-10 gap-20">
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>

          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>saúde</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>educação</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>indústria</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>hotelaria</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>transportes</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>RH</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>
          <div className="font-montserrat tracking-[0.1rem] uppercase text-[#075E6C] flex flex-col items-center justify-center">
            <img src={NotebookIcon} alt="Test Icon" />
            <span>bancos</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10 bg-[#075E6C] h-[8rem]">
        <div className="w-[72.5rem] flex flex-row items-center justify-between font-montserrat uppercase font-medium text-white bg-transparent">
          <div className="flex flex-col items-center">
            <span className="text-5xl">300</span>
            <p className="uppercase font-medium">funcionários</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl">200</span>
            <p className="uppercase font-medium">veículos</p>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-5xl">75.250m²</span>
            <p className="uppercase font-medium">área de armazenagem</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl">42.000</span>
            <p className="uppercase font-medium">posições palets</p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center mt-20 justify-center">
        <div className="w-[72.5rem] flex flex-col">
          <div className="w-[72.5rem] flex flex-row items-center justify-between">
            <div className="flex flex-col font-bold text-[#075e6c] tracking-[0.2rem] font-montserrat">
              <p>estrutura</p>
              <h3 className="uppercase font-bold font-montserrat text-black text-4xl opacity-90 tracking-[0.1rem]">
                segurança
                <br />
                tecnologia
                <p className=" mt-5 normal-case font-montserrat font-medium opacity-75 text-left text-lg w-[27rem] tracking-normal">
                  Áreas protegidas, esterilizadas e protegidas voltadas
                  especialmente para a armazenagem. A integridade de qualquer
                  produto garantida por um robusto sistema de segurança 24hs,
                  proteção a incêndio, pragas ou insetos. Controle rigoroso de
                  acesso.
                </p>
              </h3>
            </div>

            <div>
              <img src={TecSegImg} alt="Tecnologia e Segurança" />
            </div>
          </div>

          <div className="flex flex-row items-center mt-20 justify-between">
            <div className="font-bold uppercase font-montserrat flex flex-col items-center justify-center">
              <img src={NotebookIcon} alt="test" />
              <span>monitoramento 24 horas</span>
            </div>

            <div className="font-bold uppercase font-montserrat flex flex-col items-center justify-center">
              <img src={NotebookIcon} alt="test" />
              <span>monitoramento 24 horas</span>
            </div>

            <div className="font-bold uppercase font-montserrat flex flex-col items-center justify-center">
              <img src={NotebookIcon} alt="test" />
              <span>monitoramento 24 horas</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center font-montserrat font-bold mt-20">

        <h6 className="text-[#075e6c] tracking-[0.3rem]">compromisso</h6>
        <h5 className="uppercase text-4xl">gestão da qualidade</h5>

        <div className="w-[72.5rem] mt-20 flex flex-row items-center justify-center ">

          <img className="w-[22.5rem] h-[22.5rem]" src={CompromissosImg} alt="Compromisso Image" />

          <div className="flex flex-col items-center ml-5 mr-3 justify-between">
            
              <div className="flex flex-row font-montserrat mb-5  w-[40rem] ">
                
              <p><strong>Processos:</strong>confiabilidade e qualidade na gestão de todos os processos solicitados pelo cliente.  </p>
              </div>

              <div className="flex flex-row font-montserrat mb-5 w-[40rem] ">
                
              <p><strong>Processos:</strong>confiabilidade e qualidade na gestão de todos os processos solicitados pelo cliente.  </p>

              </div>

              <div className="flex flex-row font-montserrat mb-5 w-[40rem] ">
                
              <p><strong>Processos:</strong>confiabilidade e qualidade na gestão de todos os processos solicitados pelo cliente.  </p>

              </div>

              <div className="flex flex-row font-montserrat mb-5 w-[40rem] ">
                
              <p><strong>Processos:</strong>confiabilidade e qualidade na gestão de todos os processos solicitados pelo cliente.  </p>

              </div>

              <div className="flex flex-row font-montserrat mb-5 w-[40rem] ">
                
                <p><strong>Processos:</strong>confiabilidade e qualidade na gestão de todos os processos solicitados pelo cliente.  </p>

              </div>


          </div>

        </div>

      </div>
      <Form />
      <Footer />
    </div>
  );
}
