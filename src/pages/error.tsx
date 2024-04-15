import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <div
      id="error-page"
      className="flex flex-col flex-1 -mt-[100px] justify-center items-center gap-8"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1>Oops!</h1>
        <p>Desculpe, parece que essa página não existe</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="flex rounded-full font-semibold text-white py-2 px-6 justify-center items-center w-full max-w-[176px] bg-ribbon-600 hover:bg-ribbon-700 transition-colors "
      >
        Voltar ao ínicio
      </button>
    </div>
  );
};
export default Error;
