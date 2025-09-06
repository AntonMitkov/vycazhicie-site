"use client";
import React, { useEffect, useState } from "react";
import Logo from "./logo";

type LoadingScreenProps = {
  durationMs?: number;
};

export default function LoadingScreen({ durationMs = 3000 }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setOpacity(0);
      const hideTimer = setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = '';
      }, 1000);
      return () => clearTimeout(hideTimer);
    }, durationMs);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, [durationMs]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black transition-opacity duration-1000"
      style={{ opacity }}
    >
      <Logo className="md:w-[50vw] w-[70vw] lg:w-[600px] h-auto p-1 gradient-text" />
      <p className="text-2xl max-[650]:text-xl mt-4 gradient-text">і будзьце пачутымі!</p>
      <style jsx>{`
        .gradient-text {
          background: linear-gradient(90deg, #ffffff, #ff0000, #ffffff, #ff0000);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
