import { GiHumanTarget } from "react-icons/gi";
import { GiTeamIdea } from "react-icons/gi";
import { GiMountainRoad } from "react-icons/gi";


import { Container, Subtitle, DifferentialsContainer, Differential, DifferentialTittle, DifferentialDescription, CallUsButton } from './styled';

const Home = () => {
  return (
    <Container>
      <Subtitle>Transformando sonhos em código</Subtitle>
      <DifferentialsContainer>
        <Differential>
          <GiHumanTarget size={100} />
          <DifferentialTittle>Software Personalizado</DifferentialTittle>
          <DifferentialDescription>Focado nas suas necessidades</DifferentialDescription>
        </Differential>


        <Differential>
          <GiTeamIdea size={100} />
          <DifferentialTittle>Equipe Muiltidisciplinar Qualificada</DifferentialTittle>
          <DifferentialDescription>Larga experiência internacional</DifferentialDescription>
        </Differential>


        <Differential>
          <GiMountainRoad size={100} />
          <DifferentialTittle>Consultoria Completa</DifferentialTittle>
          <DifferentialDescription>Atuamos da ideia até o produto final</DifferentialDescription>
        </Differential>

      </DifferentialsContainer>

      <CallUsButton>Fale Conosco</CallUsButton>
    </Container>
  )
}

export default Home;