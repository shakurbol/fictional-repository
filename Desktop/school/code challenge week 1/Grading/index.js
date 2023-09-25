function calculateGrade() {

    const userInput = prompt("Enter the student's mark (between 0 and 100):");
  
    
    const mark = parseFloat(userInput);
  
    
    if (isNaN(mark) || mark < 0 || mark > 100) {
      console.log("Invalid input. Please enter a number between 0 and 100.");
      return;
    }
  
    
    let grade;
    if (mark > 79) {
      grade = 'A';
    } else if (mark >= 60) {
      grade = 'B';
    } else if (mark >= 50) {
      grade = 'C';
    } else if (mark >= 40) {
      grade = 'D';
    } else {
      grade = 'E';
    }
  
    
    console.log(`Student's Grade: ${grade}`);
  }
  
  
  calculateGrade();
  