import { XMarkIcon } from "@heroicons/react/24/outline";

type ModalProps = {
  children?: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
}) => {
  if (typeof document !== "undefined" && isOpen) {
    document.body.classList.add("overflow-hidden");
  } else if (typeof document !== "undefined") {
    document.body.classList.remove("overflow-hidden");
  }

  if (!isOpen) return null;

  const contentClass = `relative flex flex-col w-full sm:w-3/4 lg:w-2/3 max-w-[900px] min-w-[100px] bg-background opacity-[99%] rounded-md py-4 px-6`;

  return (
    <div className="fixed inset-x-0 top-0 flex justify-center items-center z-10 size-full">
      <div className="fixed inset-0 bg-primary opacity-20"></div>
      <div className={`${contentClass} ${className}`}>
        <button
          onClick={onClose}
          className="absolute top-2 right-4 hover:text-warning-1 opacity-50 hover:opacity-100"
        >
          <XMarkIcon className="w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
