"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FormPage() {
  const [step, setStep] = useState(1);
  const [isPair, setIsPair] = useState(false);

  // Данные людей
  const [p1FirstName, setP1FirstName] = useState("");
  const [p1LastName, setP1LastName] = useState("");
  const [p1Telegram, setP1Telegram] = useState("");
  const [p1Class, setP1Class] = useState("");

  const [p2FirstName, setP2FirstName] = useState("");
  const [p2LastName, setP2LastName] = useState("");
  const [p2Telegram, setP2Telegram] = useState("");
  const [p2Class, setP2Class] = useState("");

  // МАССИВ ТЕМ (минимум одна)
  const [topics, setTopics] = useState([{ title: "", details: "" }]);

  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState<"ru" | "be">("ru");
  const router = useRouter();

  const handleNext = (e: FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  // Добавление темы
  const addTopic = () => {
    if (topics.length < 5) {
      setTopics([...topics, { title: "", details: "" }]);
    }
  };

  // Удаление темы
  const removeTopic = (index: number) => {
    if (topics.length > 1) {
      setTopics(topics.filter((_, i) => i !== index));
    }
  };

  // Обновление конкретной темы
  const updateTopic = (index: number, field: "title" | "details", value: string) => {
    const newTopics = [...topics];
    newTopics[index][field] = value;
    setTopics(newTopics);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = {
      isPair,
      person1: { firstName: p1FirstName, lastName: p1LastName, telegram: p1Telegram, studentClass: p1Class },
      person2: isPair ? { firstName: p2FirstName, lastName: p2LastName, telegram: p2Telegram, studentClass: p2Class } : null,
      topics, // отправляем массив
    };

    try {
      const res = await fetch("https://vycazhicie-email-api-production.up.railway.app/send_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) setSubmitted(true);
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };


  // Компонент выбора класса (вынесен для удобства)
  const ClassSelect = ({ value, onChange, label }: { value: string, onChange: (val: string) => void, label: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-200 mb-2">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full rounded-md border border-gray-500 bg-[#1c1c1c] p-3 pr-10 text-white focus:border-blue-500 focus:ring focus:ring-blue-300"
          required
        >
          <option value="" disabled>Абярыце клас</option>
          {["Філ", "Гіст", "Гум", "Грам", "Бія1", "Бія2", "М", "Ф", "Ім", "Іф", "Эг", "Хім"].map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">▼</span>
      </div>
    </div>
  );

  return (
    <div className="font-[Montserrat] min-h-screen bg-[#1c1c1c] text-white flex flex-col items-center">
      <div className="relative w-full h-60">
        <Image src="/back.jpg" alt="Banner" fill className="object-cover" />
        <div className="absolute left-1/2 -bottom-10 transform -translate-x-1/2">
          <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center border-4 border-[#1c1c1c]">
            <span className="text-white font-bold text-xl">(Вы)</span>
          </div>
        </div>
      </div>

      <div className="bg-[#2a2a2a] mt-16 w-full max-w-2xl rounded-xl shadow-lg p-8 mb-10">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Рэгістрацыя спікера “(Вы)кажыце”
        </h1>

        {!submitted ? (
          <>
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                {/* ПЕРЕКЛЮЧАТЕЛЬ КОЛИЧЕСТВА ЛЮДЕЙ */}
                <div className="flex bg-[#1c1c1c] p-1 rounded-lg border border-gray-600">
                  <button
                    type="button"
                    onClick={() => setIsPair(false)}
                    className={`flex-1 py-2 rounded-md transition ${!isPair ? "bg-[#991c1f] text-white" : "text-gray-400"}`}
                  >
                    Адзін чалавек
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsPair(true)}
                    className={`flex-1 py-2 rounded-md transition ${isPair ? "bg-[#991c1f] text-white" : "text-gray-400"}`}
                  >
                    Пара (2 чалавекі)
                  </button>
                </div>

                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-red-500">{isPair ? "Першы спікер" : "Дадзеныя спікера"}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Імя *</label>
                      <input type="text" value={p1FirstName} onChange={(e) => setP1FirstName(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Прозвішча *</label>
                      <input type="text" value={p1LastName} onChange={(e) => setP1LastName(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-200 mb-2">Тэлеграм *</label>
                      <input type="text" placeholder="@username" value={p1Telegram} onChange={(e) => setP1Telegram(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required />
                    </div>
                    <ClassSelect value={p1Class} onChange={setP1Class} label="Клас *" />
                  </div>
                </div>

                {isPair && (
                  <div className="space-y-6 pt-6 border-t border-gray-600">
                    <h2 className="text-lg font-semibold text-red-500">Другі спікер</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Імя *</label>
                        <input type="text" value={p2FirstName} onChange={(e) => setP2FirstName(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required={isPair} />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Прозвішча *</label>
                        <input type="text" value={p2LastName} onChange={(e) => setP2LastName(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required={isPair} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-200 mb-2">Тэлеграм *</label>
                        <input type="text" placeholder="@username" value={p2Telegram} onChange={(e) => setP2Telegram(e.target.value)} className="w-full rounded-md border border-gray-500 bg-transparent p-3 text-white focus:ring-1 focus:ring-blue-500" required={isPair} />
                      </div>
                      <ClassSelect value={p2Class} onChange={setP2Class} label="Клас *" />
                    </div>
                  </div>
                )}

                <button type="submit" className="bg-[#991c1f] hover:bg-[#7a1516] transition w-full py-3 rounded-md font-semibold">
                  Далей →
                </button>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleSubmit} className="space-y-8">
                {topics.map((topic, index) => (
                  <div key={index} className="p-4 border border-gray-600 rounded-lg relative bg-[#1c1c1c]">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-red-500 font-bold">Тэма №{index + 1}</h3>
                      {topics.length > 1 && (
                        <button type="button" onClick={() => removeTopic(index)} className="text-gray-400 hover:text-red-500 text-sm">Выдаліць</button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <input
                        placeholder="Назва тэмы"
                        className="w-full bg-transparent border border-gray-500 p-3 rounded-md"
                        value={topic.title}
                        onChange={(e) => updateTopic(index, "title", e.target.value)}
                        required
                      />
                      <textarea
                        placeholder="Апісанне тэмы"
                        rows={3}
                        className="w-full bg-transparent border border-gray-500 p-3 rounded-md"
                        value={topic.details}
                        onChange={(e) => updateTopic(index, "details", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                ))}

                {topics.length < 5 && (
                  <button
                    type="button"
                    onClick={addTopic}
                    className="w-full py-3 border-2 border-dashed border-gray-500 rounded-md text-gray-400 hover:border-red-500 hover:text-red-500 transition"
                  >
                    + Дадаць яшчэ тэму ({topics.length}/5)
                  </button>
                )}

                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="bg-gray-600 w-1/2 py-3 rounded-md">← Назад</button>
                  <button type="submit" className="bg-[#991c1f] w-1/2 py-3 rounded-md font-semibold">Адправіць</button>
                </div>
              </form>
            )}
          </>
        ) : (
          <div className="space-y-8 text-center">
            <p className="mt-6 text-white font-medium text-lg leading-relaxed">
              Дзякуй, {p1FirstName} {isPair && `і ${p2FirstName}`}!  <br />
            </p>
            <p>Вы прапанавалі тэм: {topics.length}</p>
            <p>Мы вельмі чакаем вас на адборы. Усю даданую інфармацыю мы напішам пасля сканчэння рэгістрацыі. А зараз вы бачыце невялічкі тэкст. Гэты тэкст трэба будзе расказаць на адборы, таму зрабіце скрыншот, каб яго не згубіць. Тэкст ёсць і на беларускай, і на расейскай мовах</p>
            <div className="bg-[#1c1c1c] p-6 rounded-xl border border-gray-600 text-left text-base leading-relaxed">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">Тэкст для спікера:</h2>
                    <button onClick={() => setLang(lang === "ru" ? "be" : "ru")} className="bg-gray-700 hover:bg-gray-600 transition px-3 py-1 rounded-md text-sm font-semibold">
                        {lang === "ru" ? "Русский" : "Беларускі"}
                    </button>
                </div>
                {lang === "ru" ? (
                    <p>39-летний мужчина с инициалами М.К. обратился к врачам с жалобами на то, что у
него постоянное дежавю. Он перестал смотреть телевизор, читать газеты и общаться с
людьми, потому что был уверен, что уже видел эти передачи и слышал эти разговоры.
Он даже утверждал, что знает, что скажут ведущие новостей, до того, как они откроют
рот. Это полностью парализовало его социальную жизнь. Врачи заподозрили у него
височную эпилепсию, но стандартные тесты (ЭЭГ) не показали явных приступов.
Однако дальнейшее обследование с помощью МРТ выявило повреждения гиппокампа.
Затем провели эксперимент. Они показывали М.К. списки слов и просили вспомнить
их. М.К. отказывался выполнять задание, утверждая, что он уже участвовал в этом
эксперименте и уже видел эти слова. Его мозг настолько сильно ощущал ложное
воспоминание, что это мешало формировать воспоминания реальные.
<br></br>
Этот случай стал важным научным доказательством того, что постоянное дежавю —
это не психическое расстройство, а именно неврологическая проблема, связанная с
дисфункцией центров памяти. Мозг по каким-то причинам записывает новое
воспоминание сразу же в отдел “долговременных воспоминаний”. 
Именно поэтому в
этот момент у вас есть ощущение, что вы уже проживали этот момент.</p>
                ) : (
                    <p>39-гадовы мужчына з ініцыяламі М. К. звярнуўся да лекараў са скаргамі на тое, што ў
яго бесперапыннае дэжавю. Ён перастаў глядзець тэлевізар, чытаць газеты і мець зносіны з
людзьмі, таму што быў упэўнены, што ўжо бачыў гэтыя перадачы і чуў гэтыя размовы.
Ён нават сцвярджаў, што ведае, што скажуць вядоўцы навін, перш чым яны адкрыюць
рот. Гэта цалкам паралізавала яго сацыяльнае жыццё. Лекары западозрылі ў яго
скроневую эпілепсію, але стандартныя тэсты (ЭЭГ) не паказалі відавочных прыступаў.
Аднак далейшае абследаванне з дапамогай МРТ выявіла пашкоджанні гіпакампа.
Затым правялі эксперымент. Яны паказвалі М. К. спісы слоў і прасілі ўспомніць
іх. М. К. адмаўляўся выконваць заданне, сцвярджаючы, што ён ужо ўдзельнічаў у гэтым
эксперыменце і ўжо бачыў гэтыя словы. Яго мозг настолькі моцна адчуваў ілжывая
ўспаміны, што гэта перашкаджала фармаваць ужо рэальныя ўспаміны.
<br></br>
Гэты выпадак стаў важным навуковым доказам таго, што пастаяннае дэжавю —
гэта не псіхічная хвароба, а менавіта неўралагічная праблема, звязаная з
дысфункцыяй цэнтраў памяці. Мозг па нейкіх прычынах запісвае новыя
ўспаміны адразу ў аддзел "доўгачасовых успамінаў". 
Менавіта таму ў
гэты момант у вас ёсць адчуванне, што вы ўжо пражывалі гэты момант.</p>
                )}
            </div>
            <button onClick={() => router.push("/")} className="bg-[#991c1f] hover:bg-[#7a1516] transition w-full py-4 rounded-md font-bold text-lg">
              ⬅ Вернуться на главную
            </button>
          </div>
        )}
      </div>
    </div>
  );
}