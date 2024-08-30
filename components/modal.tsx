import { FC } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: JSX.Element | null;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div
        className="bg-white p-4 rounded-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >
        <div className="w-[600px] h-[400px] flex justify-center items-center">{content}</div>
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
