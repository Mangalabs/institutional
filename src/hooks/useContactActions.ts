import { contactData } from '../data/contactData'

export function useContactActions() {
  const email = contactData.contactItems.find((i) => i.title === 'E-mail')?.content
  const whatsapp = contactData.contactItems.find((i) => i.title === 'WhatsApp')?.content

  function openEmail(subject = 'Contato', body = '') {
    const mailto = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.open(mailto, '_blank')
  }

  function openWhatsApp(message = 'Olá! Gostaria de saber mais.') {
    const cleanedNumber = whatsapp.replace(/\D/g, '')
    const link = `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(
      message
    )}`
    window.open(link, '_blank')
  }

  function getWhatsAppLink(message = 'Olá! Gostaria de saber mais.') {
    const cleanedNumber = whatsapp.replace(/\D/g, '')
    return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`
  }

  return {
    openEmail,
    openWhatsApp,
    getWhatsAppLink,
    email,
    whatsapp,
  }
}
