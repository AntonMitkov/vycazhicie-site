"use client"; // if you’re in Next.js

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";

const FloatingButton = () => {
  const [mounted, setMounted] = useState(false);
  const text = "РЭГІСТРАЦЫЯ НА ТЭД";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleClick = () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd77VhyTc-FwIMOkImVMFEEdpgMPioC9CRB4NSUrk8OPkVQjQ/viewform?usp=dialog";
  };

  return createPortal(
    <StyledWrapper>
      <button className="button" aria-label="Floating action" onClick={handleClick}>
        <p className="button__text" aria-hidden>
        {text.split("").map((letter, index) => (
            <span
            key={index}
            style={{ "--index": index } as React.CSSProperties & Record<string, any>}
            >
            {letter}
            </span>
        ))}
        </p>

        <div className="button__circle">
          <svg
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--first"
            width={14}
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
          <svg
            viewBox="0 0 14 15"
            fill="none"
            width={14}
            xmlns="http://www.w3.org/2000/svg"
            className="button__icon button__icon--copy"
          >
            <path
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
              fill="currentColor"
            />
          </svg>
        </div>
      </button>
    </StyledWrapper>,
    document.body
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #991c1f;
    color: #fff;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;
    user-select: none;

    > span {
      position: absolute;
      transform: rotate(calc(19deg * var(--index)));
      inset: 7px;
      font-size: 10px;
      line-height: 1;
      white-space: pre;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    background: #fff;
    color: #991c1f;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }


  .button__icon--first{
    opacity: 100%;
    transition: all 0.3s ease-in-out;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
    opacity: 0%;
  }

  .button:hover {
    background: #7a1516;
    transform: scale(1.05);
  }

  .button:hover .button__icon--first {
    transform: translate(150%, -150%);
    opacity: 0%
  }

  .button:hover .button__icon--copy {
    transition: all 0.3s ease-in-out 0.1s;
    transform: translate(0);
    opacity: 100%;
  }

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default FloatingButton;
