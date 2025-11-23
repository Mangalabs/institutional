import { Mail, Phone } from 'lucide-react'

export const contactData = {
  contactItems: [
    {
      icon: Mail,
      title: 'E-mail',
      content: 'contato@mangalab.io',
      href: 'mailto:contato@mangalab.io',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '(41) 98730-6000',
      href: 'https://wa.me/5541987306000',
    },
  ],
  mapPlaceholder: {
    icon: '🗺️',
    text: 'Mapa interativo disponível em breve',
  },
}
