import diogoSerious from '../../assets/diogo-serious.jpeg';
import thiciannySerious from '../../assets/thicianny-serious.jpeg';
import thiciannyCrazy from '../../assets/thicianny-crazy.jpeg';
import diogoCrazy from '../../assets/diogo-crazy.jpeg';
import gabirelFrancoSerious from '../../assets/gabriel-franco-serious.jpeg';
import gabirelFrancoCrazy from '../../assets/gabriel-franco-crazy.jpeg';
import luizCrazy from '../../assets/luiz-crazy.jpeg';
import luizSerious from '../../assets/luiz-serious.jpeg';

import ProfileImage from '../../components/profileImage'

import { Container, Subtitle, SessionDescription, TeamSection, Member, MemberDescriptionContainer, MemberName, MemberDescription } from './styled';

const Team = () => {

  return (
    <Container id='team'>
      <Subtitle>Nossos especialistas</Subtitle>
      <SessionDescription>Veja alguns exemplos do nosso time</SessionDescription>

      <TeamSection>
        <Member>
          <ProfileImage serious={diogoSerious} crazy={diogoCrazy} />

          <MemberDescriptionContainer>
            <MemberName>Diogo L.C. Felipe</MemberName>
            <MemberDescription>Desenvolvedor com ampla experiência internacional</MemberDescription>
          </MemberDescriptionContainer>
        </Member>

        <Member>
          <ProfileImage serious={thiciannySerious} crazy={thiciannyCrazy} />
          <MemberDescriptionContainer>
            <MemberName>Thicianny Marques</MemberName>
            <MemberDescription>Desenvolvedora com larga experiência em arquitetura de nuvem</MemberDescription>
          </MemberDescriptionContainer>
        </Member>

        <Member>
          <ProfileImage serious={gabirelFrancoSerious} crazy={gabirelFrancoCrazy} />
          <MemberDescriptionContainer>
            <MemberName>Gabriel F. Pigozzo</MemberName>
            <MemberDescription>Desenvolvedor full-stack multiplataforma</MemberDescription>
          </MemberDescriptionContainer>
        </Member>
        
        <Member>
          <ProfileImage serious={luizSerious} crazy={luizCrazy} />
          <MemberDescriptionContainer>
            <MemberName>Luiz F. Pigozzo</MemberName>
            <MemberDescription>Desenvolvedor backend</MemberDescription>
          </MemberDescriptionContainer>
        </Member>
      </TeamSection>
    </Container>
  )
}

export default Team;