import { toCamelCase } from "@/lib/utils";

type TextAreaProps = {
  className?: string;
  label?: string;
  name: string;
  value?: string;
  noLabel?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
  disabled?: boolean;
};
const TextArea: React.FC<TextAreaProps> = ({
  className,
  label,
  name,
  noLabel,
  onChange,
  rows,
  value,
  disabled,
}) => {
  const inputName = name ?? toCamelCase(label || "");
  const inputClass = `flex bg-background text-foreground px-1 border border-neutral-0 rounded-sm
    outline-none outline-1 outline-offset-0 focus:outline-neutral-1
    ${noLabel ? "w-full mb-1 " : "grow  justify-between"} 
    ${className}`;

  return noLabel ? (
    <textarea
      placeholder={label}
      className={inputClass}
      name={inputName}
      onChange={onChange}
      rows={rows}
      value={value}
      disabled={disabled}
    />
  ) : (
    <label className="w-full flex flex-col gap-x-2 mb-1 text-nowrap">
      <span>{label}</span>
      <textarea
        className={inputClass}
        name={inputName}
        onChange={onChange}
        rows={rows}
        value={value}
        disabled={disabled}
      />
    </label>
  );
};

export default TextArea;
