function calculateBillTotal(preTaxAndTipAmout) {
  let tip = preTaxAndTipAmout * 0.15;
  let tax = preTaxAndTipAmout * 0.095;

  return preTaxAndTipAmout + tip + tax;
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9