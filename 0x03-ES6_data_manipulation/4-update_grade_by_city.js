export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);

  return cityStudents.map((student) => {
    const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    const newGrade = newGradeObj ? newGradeObj.grade : 'N/A';

    return { ...student, grade: newGrade };
  });
}
