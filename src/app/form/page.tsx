"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telegram, setTelegram] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const router = useRouter();

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      telegram,
      studentClass,
      topic,
      details,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        // ✅ через 2 секунды редирект на главную
        setTimeout(() => {
          router.push("/");
        }, 5000);
      } else {
        console.error("Ошибка при отправке:", await res.text());
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
    }
  };


  return (
    <div className="font-[Montserrat] min-h-screen bg-[#1c1c1c] text-white flex flex-col items-center">
      {/* БАННЕР */}
      <div className="relative w-full h-60">
        <Image
          src="/back.jpg" // положи файл в public/
          alt="Banner"
          fill
          className="object-cover"
        />
        {/* Логотип */}
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center border-4 border-[#1c1c1c]">
            <span className="text-white font-bold text-xl">(Вы)</span>
          </div>
        </div>
      </div>

      {/* КОНТЕЙНЕР */}
      <div className="bg-[#2a2a2a] mt-16 w-full max-w-2xl rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold mb-6">
          Рэгістрацыя спікера “(Вы)кажыце”
        </h1>

        {!submitted ? (
          <>
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                {/* Имя */}
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Ваша імя *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Фамилия */}
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Ваша прозвішча *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Telegram */}
                <div>
                  <label
                    htmlFor="telegram"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Ваш тэлеграм *
                  </label>
                  <input
                    type="text"
                    id="telegram"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Класс */}
                <div>
                  <label
                    htmlFor="studentClass"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Ваш клас *
                  </label>
                  <div className="relative">
                    <select
                      id="studentClass"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="appearance-none w-full rounded-md border border-gray-500 bg-[#1c1c1c] p-3 pr-10 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                      required
                    >
                      <option value="" disabled>
                        Абярыце клас
                      </option>
                      <option value="Філ">Філ</option>
                      <option value="Гіст">Гіст</option>
                      <option value="Гум">Гум</option>
                      <option value="Грам">Грам</option>
                      <option value="Бія1">Бія-1</option>
                      <option value="Бія2">Бія-2</option>
                      <option value="М">М</option>
                      <option value="Ф">Ф</option>
                      <option value="Ім">Ім</option>
                      <option value="Іф">Іф</option>
                      <option value="Эг">Эг</option>
                      <option value="Хім">Хім</option>
                    </select>

                    {/* Кастомная стрелка */}
                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
                      ▼
                    </span>
                  </div>
                </div>

                {/* Кнопка */}
                <button
                  type="submit"
                  className="bg-[#991c1f] hover:bg-[#7a1516] transition w-full py-3 rounded-md font-semibold"
                >
                  Далей →
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Тема */}
                <div>
                  <label
                    htmlFor="topic"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Тэма вашага выступлення *
                  </label>
                  <input
                    type="text"
                    id="topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Подробное описание */}
                <div>
                  <label
                    htmlFor="details"
                    className="block text-sm font-medium text-gray-200 mb-2"
                  >
                    Апішыце тэму падрабязна *
                  </label>
                  <textarea
                    id="details"
                    rows={5}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
                    required
                  />
                </div>

                {/* Кнопки */}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="bg-gray-600 hover:bg-gray-500 transition w-1/2 py-3 rounded-md font-semibold"
                  >
                    ← Назад
                  </button>
                  <button
                    type="submit"
                    className="bg-[#991c1f] hover:bg-[#7a1516] transition w-1/2 py-3 rounded-md font-semibold"
                  >
                    Адправіць
                  </button>
                </div>
              </form>
            )}
          </>
        ) : (
          <p className="mt-6 text-newwhite font-medium">
            Дзякуй, {firstName} {lastName}!  
            Ваша тэма: «{topic}»  
            Форма адпраўлена ✅
            Праз 5 секунд вы перайдзеце на галоўную старонку
          </p>
        )}
      </div>
    </div>
  );
}
