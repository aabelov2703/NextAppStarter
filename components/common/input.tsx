"use client";
import { useAppContext } from "@/context/appContext";
import { Props } from "@/types/props";
import { calcBtn } from "@/utils/calcStyles";

const Input: React.FC<Props> = ({ onChange, ...props }) => {
  const { theme } = useAppContext();

  const size = "my-1 ml-2 mr-1 px-2 w-[calc(100%-40px)]";
  const border = "border rounded-lg border-dotted";
  const focus =
    "focus:outline-none focus:border-dotted focus:border-blue-400 focus:border-1";

  const btnStyles = calcBtn(theme, { ...props });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(event);
  };

  return (
    <input
      className={`text-current ${size} ${border} ${focus}`}
      type="text"
      value={props?.value}
      onChange={handleChange}
      placeholder={props?.placeholder}
      style={{
        ...btnStyles,
        ...(props?.style && props.style),
      }}
    />
  );
};

export default Input;
