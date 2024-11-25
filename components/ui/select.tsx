import { ReactNode } from "react";

type Option = {
  label?: ReactNode;
  value: string | number;
  disabled?: boolean;
};

type SelectProps = {
  options: Option[] | string[] | number[];
  className?: string;
  defaultValue?: string | number;
  value?: string | number;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
};

/**
  Descroption: simple select list
  Actions:
    options - can be either an array of objects {label, value} or an array of strings/numbers
    name - you can pass the value of your specific field to apply different logic for onChange
*/
const Select: React.FC<SelectProps> = ({
  options,
  className,
  onChange,
  defaultValue,
  value,
  disabled,
  name,
}) => {
  return (
    <select
      className={`cursor-pointer ${className}`}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      onChange={onChange}
      name={name}
    >
      {options.map((o) => {
        if (typeof o === "object") {
          return <option key={o.value}>{o.label ?? o.value}</option>;
        } else {
          return <option key={o}>{o}</option>;
        }
      })}
    </select>
  );
};

export default Select;
