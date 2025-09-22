export async function POST(req: Request) {
  try {
    // --- читаем тело запроса ---
    const text = await req.text(); // тело как строка
    if (!text) {
      return new Response("Пустое тело запроса", { status: 400 });
    }

    let formData;
    try {
      formData = JSON.parse(text);
    } catch {
      return new Response("Некорректный JSON", { status: 400 });
    }

    const { firstName, lastName, telegram, studentClass, topic, details } = formData;

    if (!firstName || !lastName || !telegram || !studentClass || !topic || !details) {
      return new Response("Не все поля заполнены", { status: 400 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`, // ключ из .env
      },
      body: JSON.stringify({
        from: "Website <onboarding@resend.dev>",
        to: ["vycazhicie.event@gmail.com"], // куда отправляем
        subject: `Новая заявка: ${firstName} ${lastName}`,
        html: `
          <h2>Новая регистрация спикера</h2>
          <p><strong>Имя:</strong> ${firstName}</p>
          <p><strong>Фамилия:</strong> ${lastName}</p>
          <p><strong>Telegram:</strong> ${telegram}</p>
          <p><strong>Класс:</strong> ${studentClass}</p>
          <p><strong>Тема:</strong> ${topic}</p>
          <p><strong>Описание:</strong><br/>${details}</p>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Ошибка Resend API:", errorText);
      return new Response("Ошибка отправки письма", { status: 500 });
    }

    const data = await res.json();

    return Response.json({ success: true, resendId: data.id });
  } catch (error) {
    console.error("Ошибка сервера:", error);
    return new Response("Ошибка обработки формы", { status: 500 });
  }
}

// (опционально) добавим GET для проверки
export async function GET() {
  return Response.json({ message: "API работает, отправляй POST" });
}
