import { useState } from "react"
import styled from "styled-components"

const RollDice = ({ currentDice, rollDice }) => {


  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/Dice-Game/Images/dice/dice_${currentDice}.png`} alt="dice_1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 48px;
  flex-direction: column;

  .dice {
    cursor: pointer;

  }

  p{
    font-size: 24px;
  }
`;