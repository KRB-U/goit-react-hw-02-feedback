import styled from 'styled-components';

const DivButtonContainer = styled.div`
  display: flex;
  justify-content: left;
  gap: 10px;

  button {
    padding: 5px 15px;
    background-color: #e0e0e0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    background-color: #a0a0a0;
    color: white;
  }
`;

export { DivButtonContainer };
