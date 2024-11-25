export type ModalFormConfig = {
  title?: string;
  inputs?: Array<{
    rows?: number | undefined;
    label?: string;
    name: string;
    value?: string;
    type?: string;
    placeholder?: string;
  }>;
  submit?: boolean;
  cancel?: boolean;
};
