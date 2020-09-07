function convertScoreToGradeWithPlusAndMinus(score) {
  let grade,
    extra = "";
  if (score === 100) {
    return "A+";
  } else if (90 <= score && score < 100) {
    grade = "A";
  } else if (80 <= score && score < 90) {
    grade = "B";
  } else if (70 <= score && score < 80) {
    grade = "C";
  } else if (60 <= score && score < 70) {
    grade = "D";
  } else if (0 <= score && score < 60) {
    return "F";
  } else {
    return "INVALID SCORE";
  }
  if (String(score).slice(-1) >= 8) {
    extra = "+";
  } else if (String(score).slice(-1) <= 2) {
    extra = "-";
  }
  return grade + extra;
}
console.log(convertScoreToGradeWithPlusAndMinus(99()));
