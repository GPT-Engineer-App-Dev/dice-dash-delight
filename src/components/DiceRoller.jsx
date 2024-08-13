import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import DiceSelector from './DiceSelector';
import DiceResult from './DiceResult';

const DiceRoller = () => {
  const [selectedDice, setSelectedDice] = useState([]);
  const [results, setResults] = useState([]);

  const rollDice = () => {
    const newResults = selectedDice.map(die => ({
      type: die,
      value: Math.floor(Math.random() * die) + 1
    }));
    setResults(newResults);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Virtual Dice Roller</CardTitle>
        </CardHeader>
        <CardContent>
          <DiceSelector selectedDice={selectedDice} setSelectedDice={setSelectedDice} />
          <div className="mt-4">
            <Button onClick={rollDice} disabled={selectedDice.length === 0}>
              Roll Dice
            </Button>
          </div>
          <DiceResult results={results} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DiceRoller;