const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function calculatePayee(income) {
  if (income <= 12298) {
    return 0.1 * income;
  } else if (income <= 23885) {
    return 0.15 * (income - 12298) + 1229.80;
  } else if (income <= 35472) {
    return 0.2 * (income - 23885) + 2679.80;
  } else if (income <= 47059) {
    return 0.25 * (income - 35472) + 5259.80;
  } else {
    return 0.3 * (income - 47059) + 8947.80;
  }
}

rl.question('Enter your basic salary (in KES): ', (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);
  
  rl.question('Enter benefits (if any, in KES): ', (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);

    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhifDeductions = Math.min(1700, grossSalary * 0.015); // NHIF maximum is 1700
    const nssfDeductions = Math.min(2000, grossSalary * 0.06); // NSSF maximum is 2000

    const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

    console.log(`Gross Salary: KES ${grossSalary.toFixed(2)}`);
    console.log(`Payee (Tax): KES ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: KES ${nhifDeductions.toFixed(2)}`);
    console.log(`NSSF Deductions: KES ${nssfDeductions.toFixed(2)}`);
    console.log(`Net Salary: KES ${netSalary.toFixed(2)}`);

    rl.close();
  });
});
