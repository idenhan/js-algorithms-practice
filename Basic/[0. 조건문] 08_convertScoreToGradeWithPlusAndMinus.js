function convertScoreToGradeWithPlusAndMinus(score) {
  let grade,
    extra = "";

  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score < 100) {
    grade = "A";
  } else if (score >= 80 && score < 90) {
    grade = "B";
  } else if (score >= 70 && score < 80) {
    grade = "C";
  } else if (score >= 60 && score < 70) {
    grade = "D";
  } else if (score >= 0 && score < 60) {
    return "F";
  } else {
    return "INVALID SCORE";
  }

  if (String(score).slice(1) >= 8) {
    extra = "+";
  } else if (String(score).slice(1) <= 2) {
    extra = "-";
  }
  return grade + extra;
}

let output = convertScoreToGrade(91);
console.log(output);
