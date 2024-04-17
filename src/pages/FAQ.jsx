import { useState } from "react";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Form from '../components/form'
import Footer from '../components/footer'
import Header from "../components/header";

export default function FAQ() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="font-montserrat">
      <Header />
      <div className="3xl:w-full sm:w-[40rem] h-[5rem] bg-[#F6F6F6] items-center font-montserrat flex flex-col justify-center">
        <div className="3xl:w-[75rem] sm:w-[40rem] bg-transparent flex flex-row justify-between px-2">
          <div className="h-[2rem]">
            <h5 className="uppercase 3xl:text-sm sm:text-xs  text-[#075e6c] font-bold">
              Perguntas e Respostas
            </h5>
          </div>
          <div className="h-[2rem]">
            <p className="text-[12px]">
              Você está aqui: AGM LOGÍSTICA / PERGUNTAS E RESPOSTAS
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#075e6c] sm:text-2xl 3xl:text-4xl h-[8rem] font-montserrat flex items-center justify-center uppercase text-white font-bold">
        <h1>PERGUNTAS E RESPOSTAS</h1>
      </div>

      <div className=" sm:w-[40rem] 3xl:w-full flex flex-col items-center" >

        <div className="shadow-xl mt-20 3xl:w-90 sm:w-[37.5rem] items-center justify-center flex " >
          <Accordion className=" sm:w-[37.5rem] 3xl:w-[60rem]" open={open === 1}>
            <AccordionHeader className="sm:w-[37.5rem] 3xl:w-full uppercase font-montserrat text-sm text-[#075e6c] " onClick={() => handleOpen(1)}>Qual é o controle de custos e capacidade atrelado a um plano para melhoria contínua de produtividade?</AccordionHeader>
            <AccordionBody className="3xl:w-full sm:w-[37.5rem] ">
              Todas as unidades e projetos são administrados individualmente com análises de desempenho por competência e por caixa além dos indicadores de performance operacionais. Mensalmente é realizado o confrontamento entre realizado X orçado por projeto aonde são desenvolvido projetos de melhoria contínua e produtividade.
            </AccordionBody>
          </Accordion>

        </div>

        <div className="shadow-xl mt-5 sm:w-[37.5rem] 3xl:w-90"  >
          <Accordion className=" 3xl:w-full sm:w-[37.5rem]" open={open === 2}>
            <AccordionHeader className="uppercase font-montserrat text-sm text-[#075e6c]  " onClick={() => handleOpen(2)}>Qual a estrutura de overhead (pessoas que suportam a conta, mas não trabalham diretamente na operação)?</AccordionHeader>
            <AccordionBody>
              A AGM conta com um backoffice com mais de 20 profissionais, incluindo equipe de Inteligência Logística
            </AccordionBody>
          </Accordion>

        </div>

        <div className="mt-5" >
          <Accordion className="sm:w-[37.5rem] shadow-xl 3xl:w-[600px]" open={open === 3}>
            <AccordionHeader className="uppercase font-montserrat text-sm text-[#075e6c  " onClick={() => handleOpen(3)}>Estimativa (baseada em sua experiência) de absenteísmo e rotatividade – Como mitigar esses impactos?  </AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:w-[37.5rem]">
              Estimamos um quadro a maior em 5% para cobertura de Absenteísmo, além de equipe de férias. Provisionamos multas de FGTS (50%) para ajustes no quadro visando atender a desligamentos não previstos antes do término de contrato.
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className="sm:w-[37.5rem] 3xl:w-[600px]" open={open === 4}>
            <AccordionHeader className="uppercase font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(4)}>Que tipo de treinamentos e habilidades que a AGM fornece aos funcionários?</AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:w-[37rem]">
              A AGM possui uma ferramenta de desenvolvimento profissional via Web.
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className="sm:w-[37.5rem] 3xl:w-[600px]" open={open === 5}>
            <AccordionHeader className="uppercase font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(5)}>Qual é a capacidade / Flexibilidade de sinergia entre as operações que não sejam concorrentes?</AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:w-[35rem]">


              Podemos propor sinergia com demais clientes porque atuam e segmentos diferentes.
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className="sm:w-[37.5rem] 3xl:w-[600px]" open={open === 6}>
            <AccordionHeader className="uppercase font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(6)}>Exemplo de um foco em redução de custos ao longo da operação:</AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:ml-5 sm:w-[35rem]">
              Durante os anos de 2011 e 2012 a AGM e a SHELL fizeram um projeto de otimização de movimentação na fábrica de lubrificantes da Ilha do Governador no RJ elevando o índice de paletização de 30 para 90% do material movimentado, gerando 40% no tempo de carregamento e no risco de manuseio de material. A equipe de Picking foi reduzida em 60%
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className=" 3xl:w-[600px] w-[37.5rem]" open={open === 7}>
            <AccordionHeader className="uppercase font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(7)}>Quais sistemas de WMS são familiarizados com WMS, Oracle, OSB, SAP e noutros?</AccordionHeader>
            <AccordionBody className="3xl:w-[580px] sm:ml-5 sm:w-[35rem]">
              A AGM possui WMS e TMS próprio e está altamente qualificada para implantação, customização e operacionalização de sistemas de armazenagem e transporte com integração ou não com ERPs SAP, Oracle e outros
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className="sm:[37.5rem] 3xl:w-[600px]" open={open === 8}>
            <AccordionHeader className="uppercase sm:w-[37.5rem] font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(8)}>Qual o sistema de controle de produtividade, eficiência, gerenciamento de inventário, etc.?</AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:ml-2 sm:w-[35rem]">
              Inventários cíclicos e rotativos com conferencia cega e uso de coletores com consolidação via sistema WMS
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className="3xl:w-[600px] sm:w-[37.5rem]" open={open === 9}>
            <AccordionHeader className="uppercase font-montserrat text-sm text-[#075e6c]  " onClick={() => handleOpen(9)}>Como é manejado as alterações de volume, pico de operação inesperado, necessidade de equipamentos inesperados, etc?</AccordionHeader>
            <AccordionBody className="w-[560px  ] sm:ml-2 sm:w-[35rem ]">
              lterações de volume para menor são tratadas via banco de horas, para maior são utilizados os recursos existentes em baco de horas, horas extras, sempre dentro do limite legal e justificável pelo HSE. Sempre buscamos formar banco de reserva de candidatos para contratação imediata em caso de demanda. Outra ação possível é o cancelamento de férias programadas adicionado 12% da capacidade produtiva de forma imediata.
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className=" 3xl:w-[600px] sm:w-[37.5rem] " open={open === 10}>
            <AccordionHeader className="uppercase font-montserrat text-sm  text-[#075e6c] " onClick={() => handleOpen(10)}>

              O modelo de gestão da AGM é matricial proporcionando ações e reações rápidas a demandas operacionais e de RH</AccordionHeader>
            <AccordionBody className="3xl:w-[595px] sm:ml-2 sm:w-[35rem]">
              O modelo de gestão da AGM é matricial proporcionando ações e reações rápidas a demandas operacionais e de RH
            </AccordionBody>
          </Accordion>

        </div>
        <div className="shadow-xl mt-5" >
          <Accordion className=" 3xl:w-[600px] sm:w-[37.5rem]" open={open === 11}>
            <AccordionHeader className="uppercase font-montserrat text-sm text-[#075e6c] " onClick={() => handleOpen(11)}>Como decisões são tomadas dentro da AGM? Quanto tempo leva e quem normalmente aprova as decisões de negócio?</AccordionHeader>
            <AccordionBody className="w-[50rem] sm:ml-2 sm:w-[35rem]">
              Estimamos um quadro a maior em 5% para cobertura de Absenteísmo, além de equipe de férias. Provisionamos multas de FGTS (50%) para ajustes no quadro visando atender a desligamentos não previstos antes do término de contrato.
            </AccordionBody>
          </Accordion>

        </div>
      </div>

      <div className="flex items-center justify-center bg-[#075e6c] mt-10 mb-10 w-full h-[8rem] text-white text-4xl font-bold">
        <h1>CONHEÇA NOSSOS SERVIÇOS </h1>
      </div>

      <Form />
      <Footer />

    </div>
  );
}
