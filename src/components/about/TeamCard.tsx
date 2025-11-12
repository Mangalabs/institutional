import { motion } from 'framer-motion'
import { type TeamMember } from '../../data/about.data'
import { Linkedin, Github, Mail } from 'lucide-react'

interface TeamCardProps {
  member: TeamMember
  index: number
}

export function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.1 }}
      whileHover={{
        y: -10,
        transition: { type: 'spring', stiffness: 300 },
      }}
      className='relative group'>
      <div className='relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border-2 border-white/20 rounded-3xl overflow-hidden'>
        <div
          className='relative h-64 flex items-center justify-center overflow-hidden'
          style={{ background: member.imageBgGradient }}>
          <img
            src={member.image}
            alt={member.name}
            className='absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent' />
        </div>

        <div className='p-6'>
          <h3 className='text-2xl font-black text-white mb-2'>{member.name}</h3>
          <p className='font-bold mb-4' style={{ color: member.color }}>
            {member.role}
          </p>
          <p className='text-sm text-white/70 leading-relaxed mb-6'>
            {member.description}
          </p>
          <div className='flex gap-3'>
            <motion.a
              href={member.socials.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors'
              style={{ '--hover-color': member.color } as React.CSSProperties}>
              <Linkedin size={18} className='text-white' />
            </motion.a>
            <motion.a
              href={`mailto:${member.socials.mail}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='w-10 h-10 bg-white/10 rounded-full flex items-center justify-center transition-colors'
              style={{ '--hover-color': member.color } as React.CSSProperties}>
              <Mail size={18} className='text-white' />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
