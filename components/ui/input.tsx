import { toCamelCase } from "@/lib/utils";

type InputProps = {
  className?: string;
  label?: string;
  name: string;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  value?: string;
};
const Input: React.FC<InputProps> = ({
  className,
  name,
  noLabel,
  label,
  onChange,
  type = "text",
  value,
}) => {
  const inputName = name ?? toCamelCase(label || "");
  const inputClass = `flex bg-background text-foreground px-1 border border-neutral-0 rounded-sm
    outline-none outline-1 outline-offset-0 focus:outline-neutral-1
    ${noLabel ? "w-full mb-1 " : "grow  justify-between"} 
    ${className}`;

  return noLabel ? (
    <input
      placeholder={label}
      className={inputClass}
      name={inputName}
      value={value}
      onChange={onChange}
      type={type}
      autoComplete="off"
    />
  ) : (
    <>
      <label className="w-full" htmlFor={inputName}>
        {label}
      </label>
      <input
        id={inputName}
        className={`w-full mb-1 text-nowrap ${inputClass}`}
        name={inputName}
        value={value}
        onChange={onChange}
        type={type}
        autoComplete="off"
      />
    </>
  );
};

export default Input;
