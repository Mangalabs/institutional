export const contactData = {
  heading: {
    title: "Entre em",
    highlighted: "Contato",
    subtitle: "Pronto para transformar sua ideia em realidade? Vamos conversar!"
  },
  form: {
    fields: [
      {
        name: "name",
        label: "Nome",
        type: "text",
        placeholder: "Seu nome completo",
        required: true
      },
      {
        name: "email",
        label: "E-mail",
        type: "email",
        placeholder: "seu@email.com",
        required: true
      },
      {
        name: "message",
        label: "Mensagem",
        type: "textarea",
        placeholder: "Conte-nos sobre seu projeto...",
        required: true,
        rows: 5
      }
    ],
    submitText: "Enviar Mensagem",
    submittingText: "Enviando...",
    successMessage: "Mensagem enviada com sucesso! Entraremos em contato em breve."
  },
  contactItems: [
    {
      icon: "📧",
      title: "E-mail",
      content: "contato@mangalab.io"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      content: "(85) 981263142"
    },
    {
      icon: "📍",
      title: "Localização",
      content: "Curitiba, PR - Brasil"
    }
  ],
  mapPlaceholder: {
    icon: "🗺️",
    text: "Mapa interativo disponível em breve"
  }
};
