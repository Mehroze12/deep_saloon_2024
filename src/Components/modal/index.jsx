import React, { useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  footer,
  customClass = "",
  backdropClass = "",
  contentClass = "",
}) {
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50 backdrop-blur-sm ${backdropClass}`}
    >
      <div
        ref={modalRef}
        className={`bg-secondaryColor rounded-md shadow-md w-full max-w-lg p-6 relative ${customClass}`}
      >
        {/* Header */}
        {title && (
          <div className="flex justify-between items-center mb-4 border-b border-primaryColor/50">
            <div>{title}</div>
            <button
              className="text-gray-500 hover:text-gray-700 font-2xl"
              onClick={onClose}
            >
              <IoClose color="#ccc" size={28} />
            </button>
          </div>
        )}

        {/* Content */}
        <div className={`flex-grow ${contentClass}`}>{children}</div>

        {/* Footer */}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
}
