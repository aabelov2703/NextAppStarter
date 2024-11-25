"use client";
import { ReactNode } from "react";
import { useAppContext } from "@/context/app-context";
import { ModalFormConfig } from "@/types/modal-form-config";
import ModalForm from "../modal/modal-form";

type BtnModalType = {
  children: ReactNode;
  className?: string;
  modalForm?: ModalFormConfig;
  closeForm?: () => void;
  submitForm?: (data: Record<string, string | number>) => void;
  data?: Record<string, string | number>;
};

/**
Description:
  Button-Component for a single Modal window with self-controlled Form 
Actions:
  use as a single Component on a page (for data arrays use ModalForm)
*/
const BtnModal: React.FC<BtnModalType> = ({
  children,
  className,
  modalForm,
  closeForm,
  submitForm,
  data,
}) => {
  const { setModalOpen } = useAppContext();
  const iconClass = `w-8 ${className}`;

  const handleClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <button className={iconClass} onClick={handleClick}>
        {children}
      </button>

      <ModalForm
        closeForm={closeForm}
        submitForm={submitForm}
        modalForm={modalForm}
        data={data}
      />
    </>
  );
};

export default BtnModal;
