import styled from "styled-components";

export const CardContainer = styled.div`
  background-image: linear-gradient(to top left, #e52a5a, #ff585f);
  border-radius: 1rem;
  padding: 25px 20px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

export const StyledInput = styled.input`
  width: 50%;
  border: none;
  background-color: rgba(255, 255, 255, 0.4);
  font-family: inherit;
  font-size: 1.5rem;
  text-align: center;
  color: #333;
  padding: 0.3rem 1rem;
  margin: 10px 0;
  border-radius: 0.7rem;
  transition: all 0.3s;
`;

export const StyledBtn = styled.button`
  border: none;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    outline: none;
    color: #777;
  }
`;
