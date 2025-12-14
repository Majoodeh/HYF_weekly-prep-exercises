"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0]; 

  for (let i = 0; i < sampleSize; i++) {
    const roll = Math.floor(Math.random() * 6) + 1; 
    valueCounts[roll - 1] += 1;
  }

  const results = [];

  
  for (const count of valueCounts) {
    const percentage = (count / sampleSize) * 100;
    results.push(percentage.toFixed(2));
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (const size of sampleSizes) {
    const experimentResults = runExperiment(size);
    console.log(experimentResults, size);
  }
}

main();

