import { useNavigate, useLocation } from "react-router-dom";

interface TextButtonProps {
  text: string;
  link: string;
  isActive?: boolean;
}

const TextButton = ({ text, link }: TextButtonProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === `/${link}`;

  const navigate = useNavigate();

  return (
    <p
      className={`font-nunito  cursor-pointer hover:text-ribbon-600 transition-colors select-none ${
        isActive ? "text-ribbon-600" : "text-black"
      } transition-colors select-none`}
      onClick={() => navigate(`/${link}`)}
    >
      {text}
    </p>
  );
};
export default TextButton;