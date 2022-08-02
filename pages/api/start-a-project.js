import nodemailer from "nodemailer";


const create_Message = ( questions)  => {
  const structure_questions = () => {
    const names = [
      {
        key: "exist",
        title:
          "1. Do you want to build a new website or redesign an existing one?",
      },
      {
        key: "dBussiness",
        title: "2. Describe your business in a few sentences",
      },
      { key: "serviceOffer", title: "3. What services do you offer?" },
      { key: "target", title: "4. Who is your target audience?" },
      { key: "unique", title: "5. What makes your services unique?" },
      {
        key: "features",
        title:
          "6. What features do you need to include in your website, to make it successful?",
      },
      {
        key: "marketing",
        title: "9. Are you interested in content marketing services?",
      },
      {
        key: "maintaince",
        title:
          "9. Would you like us to provide ongoing support and maintenance?",
      },
      { key: "budget", title: "10. What is your budget?" },
      {
        key: "date",
        title: "11. What is your ideal launch date for the website?",
      },
      {
        key: "guide",
        title: "12. Do you have any existing style guides and guidelines?",
      },
      {
        key: "guides",
        title: "13. If yes, then share the guides and guideline with us",
      },
      { key: "name", title: "Name: " },
      { key: "company", title: "Company: " },
      { key: "email", title: "Email: " },
      { key: "phNumber", title: "Phone Number: " },
    ];

    let return_string = "";

    for (let value of names) {
      return_string += `<li>${value.title}<br />${questions[value.key]}</li>`;
    }
    return return_string;
  };

  return `
  <ul>
    ${structure_questions()}
  </ul>
  `;
};

let transporter = nodemailer.createTransport({
  host: process.env.HOST || "smtp.gmail.com",
  port: process.env.PORT || 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

const send_Email = async (questions) => {
  const message = create_Message(questions);
  const reciver_Email = questions.email;

  let sent = await transporter.sendMail({
    from: `"Incubr Tech. Pvt." <${process.env.NEXT_PUBLIC_SENDER_EMAIL}>`,
    to: reciver_Email,
    subject: "Thank you for connecting with us.",
    text: "Thank you for connecting with us. We received your valuable inquiry and will get back to you within 24 hours.",
    priority: "high",
  });

  let office = await transporter.sendMail({
    from: `"Incubr Tech. Pvt." <${process.env.NEXT_PUBLIC_SENDER_EMAIL}>`,
    to: process.env.NEXT_PUBLIC_OFFICE_RECIVERS?.split(","),
    subject: "Start a Project form inquiry Incubr Tech. Pvt.",
    priority: "high",
    html: message,
  });

  console.log("Message sent: %s", sent.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(sent));
};


const handler = async (
  req,
  res
) => {
  if (req.method === "POST") {
    const questions = req.body;
    await send_Email(questions);
    return res.status(200).json({ success: true });
  }
  return res.status(200).json({ success: true });
};

export default handler;
