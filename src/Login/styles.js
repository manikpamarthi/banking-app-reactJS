import styled from "styled-components";

export const Title = styled.div`
  font-size: 1.9rem;
  font-weight: 500;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
`;

export const UserInput = styled.input`
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  font-family: inherit;
  text-align: center;
  width: 12rem;
  border-radius: 10rem;
  margin-right: 1rem;
  color: inherit;
  transition: all 0.3s;
  border: 1px solid #ccc;

  :focus {
    outline: none;
    border: 1px solid black;
  }
`;

export const StyledForm = styled.div`
  display: flex;
`;

export const StyledBtn = styled.button`
  border: none;
  background: none;
  font-size: 2.2rem;
  color: inherit;
  cursor: pointer;
  transition: all 0.3s;

  :hover {
    outline: none;
    color: #777;
  }
`;
