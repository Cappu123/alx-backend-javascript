/*
 * @param: from the getListStudents function
 * in task#0
 * @return: summ of all student ids
 */

export default function getStudentIdsSum(students) {
  if (students instanceof Array) {
    return students.reduce(
      (prevStudent, curStudent) => prevStudent.id || prevStudent + curStudent.id,
      0,
    );
  }
  return 0;
}
