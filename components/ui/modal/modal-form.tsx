import Modal from "./modal";
import TextArea from "../text-area";
import Form from "../form";
import { useAppContext } from "@/context/app-context";
import { ModalFormConfig } from "@/types/modal-form-config";
import Input from "../input";

type ModalFormType = {
  className?: string;
  modalForm?: ModalFormConfig;
  closeForm?: () => void;
  submitForm?: (data: Record<string, string | number>) => void;
  data?: Record<string, string | number>;
};

/**
Desciption:
  Modal windown with form to fill inputs
Object form inclides:
  { 
    title:string,
    inputs: [ {label: string, name: string, type: "text" | "textarea"} ]
  }
*/
const ModalForm: React.FC<ModalFormType> = ({
  modalForm,
  closeForm,
  submitForm,
  data,
}) => {
  const { modalOpen, setModalOpen } = useAppContext();

  const handleClose = () => {
    if (closeForm) closeForm();
    setModalOpen(false);
  };

  const handleSubmit = (data: Record<string, string | number>) => {
    if (closeForm) closeForm();
    if (submitForm) submitForm(data);
    setModalOpen(false);
  };

  return (
    <Modal isOpen={modalOpen} onClose={handleClose}>
      {modalForm?.title ? <h2>{modalForm.title}</h2> : null}
      <Form onSubmit={handleSubmit} initial={data}>
        {modalForm &&
          modalForm?.inputs?.map((inp) => {
            const commonProps = {
              label: inp.label || inp.name,
              name: inp.name,
              type: inp.type || "text",
            };

            return inp.type === "textarea" ? (
              <TextArea key={inp.name} rows={inp.rows} {...commonProps} />
            ) : (
              <Input key={inp.name} {...commonProps} />
            );
          })}
      </Form>
    </Modal>
  );
};

export default ModalForm;
