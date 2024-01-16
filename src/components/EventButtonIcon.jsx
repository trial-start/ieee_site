import styled from "styled-components";

const EventButtonIcon = styled.button`
  /* background: none; */
  border: none;
  padding: 0.3rem;
  /* border-radius: var(--border-radius-sm); */
  transition: all 0.2s;

  &:hover {
    background-color: #bfc3c6;
  }

  & svg {
    width: 2rem;
    height: 1.5rem;
    color: #524f4f;
  }
`;

export default EventButtonIcon;
