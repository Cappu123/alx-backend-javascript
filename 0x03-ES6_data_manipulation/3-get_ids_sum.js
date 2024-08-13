/*
 * @param: from the getListStudents function
 * in task#0
 * @return: summ of all student ids
 */

export default function(students) {
  if (students instanceof Array) {
    return students.reduce((student) => sum(student.id));
  }
  return [];
}
