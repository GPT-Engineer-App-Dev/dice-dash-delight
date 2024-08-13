import React from 'react';
import { Button } from "@/components/ui/button";

const diceTypes = [4, 6, 8, 10, 12, 20];

const DiceSelector = ({ selectedDice, setSelectedDice }) => {
  const addDie = (dieType) => {
    setSelectedDice([...selectedDice, dieType]);
  };

  const removeDie = (index) => {
    const newSelectedDice = [...selectedDice];
    newSelectedDice.splice(index, 1);
    setSelectedDice(newSelectedDice);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {diceTypes.map(dieType => (
          <Button key={dieType} onClick={() => addDie(dieType)} variant="outline">
            d{dieType}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {selectedDice.map((die, index) => (
          <Button key={index} onClick={() => removeDie(index)} variant="secondary">
            d{die}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DiceSelector;