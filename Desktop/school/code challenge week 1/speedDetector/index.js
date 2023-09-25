const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the speed of the car (in km/h): ', (speedInput) => {
  const speed = parseFloat(speedInput);
  const speedLimit = 70;  // Speed limit in km/h
  let demeritPoints = 0;

  if (speed < speedLimit) {
    console.log('Ok');
  } else {
    const excessSpeed = speed - speedLimit;
    demeritPoints = Math.floor(excessSpeed / 5);  // Calculate demerit points for every 5 km/h above the speed limit

    if (demeritPoints > 12) {
      console.log('License suspended! You have too many demerit points.');
    } else {
      console.log(`Demerit points: ${demeritPoints}`);
    }
  }

  rl.close();
});
