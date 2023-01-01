import React from "react";
import DownArrow from "../../assets/arrow.svg";
import UpArrow from "../../assets/arrow-up.svg";
import { Card, Pill, UpImgDiv, DownImgDiv, Name, Date, Amount } from "./styles";

const SingleCard = ({ item = {}, userId }) => {
  const isDeposited = userId == item.sender_id;

  return (
    <Card>
      {isDeposited ? (
        <div>
          <Pill>
            <UpImgDiv>
              <img src={UpArrow} alt="React Logo" width="15px" />
            </UpImgDiv>
            <div>SENT</div>
          </Pill>
        </div>
      ) : (
        <div>
          <Pill className="red-color">
            <DownImgDiv>
              <img src={DownArrow} alt="React Logo" width="15px" />
            </DownImgDiv>
            <div>RECEIVED</div>
          </Pill>
        </div>
      )}
      <div>
        <Name>{isDeposited ? item.receiver_name : item.sender_name}</Name>
        <Date>{item.time}</Date>
      </div>
      <Amount>{item.amount} $</Amount>
    </Card>
  );
};

export default SingleCard;
