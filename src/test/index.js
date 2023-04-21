

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculatePremium(deductible, coverage) {
  let premium = 0;
  
  // Apply the formula to calculate the premium based on the deductible and coverage
  premium = deductible * 0.1 + coverage * 0.05;
  
  return premium;
}

rl.question("Enter the deductible amount: ", function(deductible) {
  rl.question("Enter the coverage amount: ", function(coverage) {
    const premium = calculatePremium(parseInt(deductible), parseInt(coverage));
    console.log('Your premium is: $${premium.toFixed(2)}');
    rl.close();
  });
});