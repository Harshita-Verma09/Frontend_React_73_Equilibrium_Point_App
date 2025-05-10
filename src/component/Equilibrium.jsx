import React, { useState } from 'react';

const EquilibriumFinder = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const findEquilibrium = (arr) => {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
      totalSum -= arr[i]; // Right sum
      if (leftSum === totalSum) return i;
      leftSum += arr[i];
    }

    return -1; // No equilibrium
  };

  const handleCheck = () => {
    try {
      // Convert input string to array of numbers
      const arr = input.split(',').map(num => parseInt(num.trim()));
      if (arr.some(isNaN)) {
        setResult('❌ Please enter valid numbers separated by commas.');
        return;
      }

      const index = findEquilibrium(arr);
      setResult(
        index !== -1
          ? ` Equilibrium Index Found at: ${index}`
          : ' No Equilibrium Index Found.'
      );
    } catch (error) {
      setResult('⚠️ Something went wrong.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto pt-10 bg-blue-900 text-white shadow-xl rounded-xl">
      <h2 className="text-xl font-bold mb-4">Equilibrium Index Finder</h2>

      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded mb-4"
        placeholder="Enter array like: 1,2,0,3"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleCheck}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Find Index
      </button>

      {result && <p className="mt-4 text-lg">{result}</p>}
    </div>
  );
};

export default EquilibriumFinder;
