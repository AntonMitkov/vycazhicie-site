export async function POST(req: Request) {
  try {
    const formData = await req.json();
    const { isPair, person1, person2, topics } = formData;

    // Генерируем HTML для блоков с участниками
    let participantsHtml = `
      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
        <h3 style="color: #991c1f; margin: 0 0 10px 0;">Спикер 1</h3>
        <p><b>ФИ:</b> ${person1.firstName} ${person1.lastName} | <b>Класс:</b> ${person1.studentClass}</p>
        <p><b>TG:</b> ${person1.telegram}</p>
      </div>
    `;

    if (isPair && person2) {
      participantsHtml += `
        <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
          <h3 style="color: #991c1f; margin: 0 0 10px 0;">Спикер 2</h3>
          <p><b>ФИ:</b> ${person2.firstName} ${person2.lastName} | <b>Класс:</b> ${person2.studentClass}</p>
          <p><b>TG:</b> ${person2.telegram}</p>
        </div>
      `;
    }

    // Генерируем HTML для всех тем
    const topicsHtml = topics.map((t: any, i: number) => `
      <div style="border-left: 4px solid #991c1f; padding-left: 15px; margin-bottom: 20px;">
        <h4 style="margin: 0; color: #333;">Тема №${i + 1}: ${t.title}</h4>
        <p style="color: #666; font-style: italic;">${t.details.replace(/\n/g, '<br/>')}</p>
      </div>
    `).join("");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Website <onboarding@resend.dev>",
        to: ["vycazhicie.event@gmail.com"],
        subject: `Новая заявка (${topics.length} тем): ${person1.lastName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #1c1c1c;">Регистрация на (Вы)кажыце</h2>
            ${participantsHtml}
            <h3 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Предложенные темы:</h3>
            ${topicsHtml}
          </div>
        `,
      }),
    });

    if (!res.ok) return new Response("Error", { status: 500 });
    return Response.json({ success: true });
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}