import React, { useState } from "react";
import Button from "./button/button";

type FormProps = {
  children: React.ReactNode;
  onSubmit: (data: Record<string, string | number>) => void;
  initial?: Record<string, string | number>;
};

type FormFieldElement = React.ReactElement<{
  name: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string;
}>;

const Form: React.FC<FormProps> = ({ children, onSubmit, initial }) => {
  const [formData, setFormData] = useState<Record<string, string | number>>(
    initial ?? {}
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  /* control all changes to the input data and return the full formData result in the onSubmit event */
  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.name) {
          return React.cloneElement(child as FormFieldElement, {
            onChange: handleChange,
            value: String(formData[child.props.name] ?? ""),
          });
        }
        return child;
      })}
      <Button type="submit" className="w-[100px] my-1">
        Submit
      </Button>
    </form>
  );
};

export default Form;
