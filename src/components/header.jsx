import SiteLogo from '../assets/site-logo.png'

export default function Header() {
  return (
    <div className='3xl:w-full sm:w-[40rem] flex justify-center pt-[2.75rem]'>
    <div className="3xl:w-[75rem] w-[40rem] flex" style={{
      flexDirection: window.location.href !==  "http://localhost:3000/" ? "row" : "column",
      alignItems: window.location.href !== "http://localhost:3000/" ? "center" : "start"
    }}>
      <div className='w-[18.128em] h-[4.5rem] mb-[1rem] ml-[0.5rem] mt-[1rem]' >

      <img src={SiteLogo} alt="AGM Logomarca" />

      </div>
      <div style={{
        marginLeft: window.location.href !== "http://localhost:3000/" ? "11rem" : "0"
      }}>
        
      <ul className="flex flex-row font-montserrat font-bold  text-sm uppercase">
        <li className="p-2 w-[4rem] hover:text-[#075E6C] ">
          <a href="/">home</a>
        </li>
        <li className="p-2  hover:text-[#075E6C] ">
          <a href="sobre">a empresa</a>
        </li>
        <li className="p-2 hover:text-[#075E6C] ">
          <a href="servicos">serviços</a>
        </li>
        <li className="p-2 hover:text-[#075E6C] ">
          <a href="contato">contato</a>
        </li>
        <li className="p-2 hover:text-[#075E6C] ">  
          <a href="areadocliente">área do cliente</a>
        </li>
        <li className="p-2 hover:text-[#075E6C] ">
          <a href="faq">faq</a>
        </li>
        <li className="p-2 hover:text-[#075E6C] ">
          <a href="carreira">trabalhe conosco</a>
        </li>
      </ul>
      </div>
    </div>
    </div>
  );
}
