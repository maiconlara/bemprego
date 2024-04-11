import TextButton from "./text-button";
import logo from "../../assets/logo-text.svg";

const headerButtons = [
  {
    text: "Home",
    link: "home",
  },
  {
    text: "Sobre nós",
    link: "about",
  },
  {
    text: "Rankings",
    link: "rankings",
  },
  {
    text: "Planos",
    link: "plans",
  },

];

const Header = () => {


  return (
    <div className="flex max-w-full max-h-[100px] min-h-[100px] shadow w-full h-full sticky top-0 left-0 justify-between px-28 items-center transition-colors overflow-hidden">
      
      <div className="flex flex-row h-full items-center justify-center gap-12">
		<img src={logo} alt="logo" className="w-32 h-32 mr-10" />
    {headerButtons.map((item, index) => {
          return <TextButton key={index} text={item.text} link={item.link} />;
        })}

	</div>
  <button className="hidden lg:flex rounded-full font-semibold text-white py-2 px-6 bg-ribbon-600 hover:bg-ribbon-700 transition-colors ">
    Quero Emprego
  </button>
     
    </div>
  );
};
export default Header;
