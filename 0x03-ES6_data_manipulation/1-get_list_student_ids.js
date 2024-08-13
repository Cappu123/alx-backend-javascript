/**
 * Retrieves ids from a list of object
 * @return array of ids from a list of object
 * @param: The same as in the array structure in task0
 */

export default function getListStudentIds(students) {
  if (students instanceof Array) {
    return students.map((student) => student.id);
  }
  return [];
}
