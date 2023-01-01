import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin-right: 10px;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 15px 10px;
`;

export const Pill = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid red;
  padding: 5px 5px;

  &.red-color {
    border: 1px solid green;
  }
`;

export const DownImgDiv = styled.div`
  transform: rotate(210deg);
  margin-right: 5px;
`;

export const UpImgDiv = styled.div`
  transorm: rotate(30deg);
  margin-right: 5px;
`;

export const Name = styled.div`
  font-weight: 500;
`;

export const Date = styled.div`
  font-weight: 300;
  font-size: 10px;
`;

export const Amount = styled.div``;
