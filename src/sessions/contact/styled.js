import styled from "styled-components";

import {
  global,
  form
} from "../../styles/colors";

export const Container = styled.section`
  background-color: ${global.background};

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  padding: 0em 2em 4em 2em;
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  padding: 0 1em;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const FeedbackMessage = styled.p`
  font-size: 1.05em;
  font-weight: 700;
  text-align: center;
  margin: 0;

  color: ${(props) =>
    props.hasError
      ? form.negativeFeedbackMessage
      : form.positiveFeedbackMessage};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1em;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const InputLabel = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: ${form.label};
`;

export const Input = styled.input`
  margin-top: 0.3em;
  width: 100%;
  height: 2.5em;
  box-sizing: border-box;
  padding: 0 0.5em;
  border: none;
  border-bottom: 2px solid ; 
  background-color: #555; 
  color: #2220;
  font-size: 16px;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #2196F3; 
  }

  &::placeholder {
    color: #33308;
  }
`;

export const TextArea = styled.textarea`
  margin-top: 0.3em;
  width: 100%;
  height: 5em;
  box-sizing: border-box;
  padding: 0.5em;
  border: none;
  border-bottom: 2px solid;
  background-color: #555; 
  color: #2220;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition: border-bottom-color 0.3s ease;

  &:focus {
    outline: none;
    border-bottom-color: #2196F3;
  }

  &::placeholder {
    color: #999;
  }
  `;