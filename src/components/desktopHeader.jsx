import React from 'react'

const DesktopHeader = () => {
  return (
    <div style={{
        marginLeft: window.location.href !== "http://localhost:3000/" ? "11rem" : "0"
      }}>

      <ul className="flex flex-row font-montserrat font-bold  text-sm uppercase">
        <li className="3xl:p-2 w-[4rem] hover:text-[#075E6C] ">
          <a href="/">home</a>
        </li>
        <li className="3xl:p-2   sm:p-0 hover:text-[#075E6C] ">
          <a href="sobre">a empresa</a>
        </li>
        <li className="3xl:p-2  sm:p-0 hover:text-[#075E6C] ">
          <a href="servicos">serviços</a>
        </li>
        <li className="3xl:p-2  sm:p-0 hover:text-[#075E6C] ">
          <a href="contato">contato</a>
        </li>
        <li className="3xl:p-2 sm:p-0  hover:text-[#075E6C] ">  
          <a href="areadocliente">área do cliente</a>
        </li>
        <li className="3xl:p-2 sm:p-0 hover:text-[#075E6C] ">
          <a href="faq">faq</a>
        </li>
        <li className="3xl:p-2  sm:p-0 hover:text-[#075E6C] ">
          <a href="carreira">trabalhe conosco</a>
        </li>
      </ul>
      </div>
      
  )
}

export default DesktopHeader
