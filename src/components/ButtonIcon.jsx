import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: #212529;
  }

  & svg {
    width: 2rem;
    height: 1.5rem;
    color: white;
  }
`;

export default ButtonIcon;
