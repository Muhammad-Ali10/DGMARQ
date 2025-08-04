import React, { useEffect } from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children, className, setIsModalOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div
                onClick={setIsModalOpen}
                className="absolute inset-0 bg-[rgba(0,0,0,0.3)]"
              ></div>
            </div>

            {/* <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span> */}

            <div
              className={`inline-block align-top bg-white text-left overflow-hidden transform transition-all sm:my-8 sm:align-middle ${className}`}
            >
              {/* <MdClose
                className="cursor-pointer absolute top-3 right-7"
                onClick={() => setIsModalOpen(false)}
                size={25}
              /> */}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
