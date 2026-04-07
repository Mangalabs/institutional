import { contactData } from '../data/contactData'

const WHATSAPP_LINK =
  'https://tintim.link/whatsapp/92686307-95f3-4968-9a39-4de9891fa388/1538f4d0-5dbc-4ed3-82ed-00d06c625b64'

export function useContactActions() {
  const email = contactData.contactItems.find(
    (i) => i.title === 'E-mail',
  )?.content
  const whatsapp = contactData.contactItems.find(
    (i) => i.title === 'WhatsApp',
  )?.content

  function openEmail(subject = 'Contato', body = '') {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    window.open(mailto, '_blank')
  }

  function openWhatsApp(_message = 'Olá! Gostaria de saber mais.') {
    window.open(WHATSAPP_LINK, '_blank')
  }

  function getWhatsAppLink(_message = 'Olá! Gostaria de saber mais.') {
    return WHATSAPP_LINK
  }

  return {
    openEmail,
    openWhatsApp,
    getWhatsAppLink,
    email,
    whatsapp,
  }
}
