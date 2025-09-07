"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

type CardMobileProps = {
  imageSrc: string;
  title: string;
  description: string;
  isFlipped?: boolean;
};

const CardMobile: React.FC<CardMobileProps> = ({
  title,
  imageSrc,
  description,
  isFlipped = false,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 550);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => setAnimateModal(true), 10);
  };

  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  // Обрезанное описание
  const shortDescription =
    description.length > 100 ? description.slice(0, 100) + "..." : description;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Фон */}
      <div
        onClick={closeModal}
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          animateModal ? "opacity-50" : "opacity-0"
        }`}
      ></div>

      {/* Контент */}
      <div
        className={`relative bg-white rounded-lg max-w-sm w-full p-6 flex flex-col transform transition-all duration-300 ${
          animateModal
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="text-newblack text-lg font-bold text-center mb-4">{title}</h2>
        <p className="text-gray-700 text-sm flex-1">{description}</p>
        <button
          onClick={closeModal}
          className="mt-6 bg-newred text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Закрыть
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Карточка */}
      <div
        className={`max-w-xl mx-auto bg-newred p-6 flex items-center space-x-4 gap-5 max-[600px]:gap-3 ${
          isFlipped ? "flex-row-reverse" : ""
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className="w-20 h-20 block rounded-full object-cover"
        />
        <div>
          <p className="text-newwhite text-2xl max-[600px]:text-base font-bold">
            {title}
          </p>

          {isSmallScreen ? (
            <>
              <p className="text-newwhite mt-1 text-xs">{shortDescription}</p>
              <button
                onClick={openModal}
                className="mt-1 text-xs text-newwhite underline"
              >
                Подробнее
              </button>
            </>
          ) : (
            <p className="text-newwhite mt-2 text-xs">{description}</p>
          )}
        </div>
      </div>

      {/* Рендерим модалку через портал */}
      {isClient && isModalOpen &&
        ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
};

export default CardMobile;
