import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const DiceResult = ({ results }) => {
  const total = results.reduce((sum, result) => sum + result.value, 0);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">Results:</h3>
      <div className="flex flex-wrap gap-2">
        {results.map((result, index) => (
          <Card key={index} className="w-16 h-16 flex items-center justify-center">
            <CardContent className="p-0">
              <span className="text-2xl font-bold">{result.value}</span>
              <span className="text-xs block">d{result.type}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      {results.length > 0 && (
        <p className="mt-4 text-lg font-semibold">Total: {total}</p>
      )}
    </div>
  );
};

export default DiceResult;