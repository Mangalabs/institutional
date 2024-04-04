import { useState } from "react";
import { TailSpin } from 'react-loader-spinner'
import emailjs from "@emailjs/browser";

import Button from '../../components/button';

import { Container, Subtitle, Form, FeedbackMessage, InputContainer, InputLabel, Input, TextArea } from './styled';

function Contact() {

  const [feedbackMessage, setFeedbackMessage] = useState('')
  const [isLoafing, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(true)
  const [data, setData] = useState({
    name: '',
    email: '',
    enterprise: '',
    position: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true)
    setHasError(false)

    emailjs.send("service_6lt15j9", "template_idk32wb", data, { publicKey: "iMnb5sTZT00LVrX59" })
      .then(() => {
        setData({
          name: '',
          email: '',
          enterprise: '',
          position: '',
          message: '',
        })
        setFeedbackMessage('Email enviado, entraremos em contato em breve!')
        setIsLoading(false)
      })
      .catch(() => {
        setFeedbackMessage('Ops, tivemos um problema enviando o email, tente pelo nosso whatsapp')
        setIsLoading(false)
      });
  }

  return (
    <Container id='contact'>
      <Subtitle>Fale com a gente</Subtitle>

      {isLoafing && (<TailSpin
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />)}

      {!isLoafing && (
        <Form onSubmit={handleSubmit}>
          {feedbackMessage && (
            <FeedbackMessage hasError={hasError}>{feedbackMessage}</FeedbackMessage>
          )}
          <InputContainer>
            <InputLabel htmlFor='contact-name'>Nome</InputLabel>
            <Input
              id='contact-name'
              type="text"
              placeholder="Digite seu nome"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor='contact-enterprise'>Empresa</InputLabel>
            <Input
              id='contact-enterprise'
              type="text"
              placeholder="Qual empresa você representa"
              value={data.enterprise}
              onChange={(e) => setData({ ...data, enterprise: e.target.value })}
            />
          </InputContainer>


          <InputContainer>
            <InputLabel htmlFor='contact-position'>Cargo</InputLabel>
            <Input
              id='contact-position'
              type="text"
              placeholder="Qual seu cargo na empresa"
              value={data.position}
              onChange={(e) => setData({ ...data, position: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor='contact-email'>Email</InputLabel>
            <Input
              id='contact-email'
              type="email"
              placeholder="Como podemos entrar em contato com você"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel htmlFor='contact-message'>Mensagem</InputLabel>
            <TextArea
              id='contact-message'
              placeholder="Conte um pouco da sua necessiade"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
            />
          </InputContainer>

          <Button buttonText='Enviar' />
        </Form>
      )}

    </Container>
  );
}

export default Contact
