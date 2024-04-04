import { Button } from './styled';

function ButtonElement({ buttonText, onClick }) {
  return (
    <Button onClick={onClick}>{buttonText}</Button>
  );
}

export default ButtonElement
