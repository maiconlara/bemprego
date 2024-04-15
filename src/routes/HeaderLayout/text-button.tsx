
interface TextButtonProps {
  text: string;
  link?: string;
  isActive?: boolean;
}

const TextButton = ({ text, link }: TextButtonProps) => {

  return (
    <a
      href={`#${link}`}
      className="font-nunito  cursor-pointer hover:text-ribbon-600 transition-colors select-none text-black"
    >
      {text}
    </a>
  );
};
export default TextButton;
