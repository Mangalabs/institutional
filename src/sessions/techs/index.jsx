import jsLogo from '../../assets/techs/js.png';
import tsLogo from '../../assets/techs/ts.png';
import reactLogo from '../../assets/techs/react.png';
import goLogo from '../../assets/techs/go.png';
import awsLogo from '../../assets/techs/aws.png';
import firebaseLogo from '../../assets/techs/firebase.webp';
import flutterLogo from '../../assets/techs/flutter.png';
import graphqlLogo from '../../assets/techs/graphql.png';
import laravelLogo from '../../assets/techs/laravel.png';
import nestLogo from '../../assets/techs/nest.png';
import nextLogo from '../../assets/techs/nextjs.png';
import nodeLogo from '../../assets/techs/node.png';
import nuxtLogo from '../../assets/techs/nuxt.png';
import pythonLogo from '../../assets/techs/python.webp';
import postgresqlLogo from '../../assets/techs/postgresql.png';
import vueLogo from '../../assets/techs/vue.png';

import { Container, Subtitle, SessionDescription, TechsContainer, Tech, TechLogo, TechName } from './styled'

function MobileNavigator() {
  return (
    <Container id='techs'>
      <Subtitle>Tecnologias</Subtitle>
      <SessionDescription>Estamos sempre atualizados com as melhores tecnologias do mercado</SessionDescription>

      <TechsContainer>
        <Tech>
          <TechLogo src={jsLogo} />
          <TechName>Javascript</TechName>
        </Tech>

        <Tech>
          <TechLogo src={tsLogo} />
          <TechName>Typescript</TechName>
        </Tech>

        <Tech>
          <TechLogo src={reactLogo} />
          <TechName>React</TechName>

        </Tech>
        <Tech>
          <TechLogo src={reactLogo} />
          <TechName>React-native</TechName>
        </Tech>

        <Tech>
          <TechLogo src={goLogo} />
          <TechName>GO</TechName>
        </Tech>

        <Tech>
          <TechLogo src={awsLogo} />
          <TechName>AWS</TechName>
        </Tech>

        <Tech>
          <TechLogo src={firebaseLogo} />
          <TechName>Firebase</TechName>
        </Tech>

        <Tech>
          <TechLogo src={graphqlLogo} />
          <TechName>GraphQL</TechName>
        </Tech>

        <Tech>
          <TechLogo src={flutterLogo} />
          <TechName>Flutter</TechName>
        </Tech>

        <Tech>
          <TechLogo src={laravelLogo} />
          <TechName>Laravel</TechName>
        </Tech>

        <Tech>
          <TechLogo src={nestLogo} />
          <TechName>Nest</TechName>
        </Tech>

        <Tech>
          <TechLogo src={nodeLogo} />
          <TechName>Node</TechName>
        </Tech>

        <Tech>
          <TechLogo src={nuxtLogo} />
          <TechName>Nuxt</TechName>
        </Tech>

        <Tech>
          <TechLogo src={pythonLogo} />
          <TechName>Python</TechName>
        </Tech>

        <Tech>
          <TechLogo src={postgresqlLogo} />
          <TechName>PostgresQL</TechName>
        </Tech>

        <Tech>
          <TechLogo src={vueLogo} />
          <TechName>Vue</TechName>
        </Tech>

      
        <Tech>
          <TechLogo src={nextLogo} />
          <TechName>Next</TechName>
        </Tech>
      </TechsContainer>
    </Container>
  );
}

export default MobileNavigator
