import { HeroSection } from '../components/academy/HeroSection'
import { MissionSection } from '../components/academy/MissionSection'
import { ProgramSection } from '../components/academy/ProgramSection'
import { PartnershipsSection } from '../components/academy/PartnershipsSection'
import { ImpactSection } from '../components/academy/ImpactSection'
import { TeamLocationSection } from '../components/academy/TeamLocationSection'
import { ContactSection } from '../components/academy/ContactSection'

export function Academy() {
  return (
    <div className='min-h-screen bg-white'>
      <HeroSection />
      <MissionSection />
      <ProgramSection />
      <PartnershipsSection />
      <ImpactSection />
      <TeamLocationSection />
      <ContactSection />
    </div>
  )
}