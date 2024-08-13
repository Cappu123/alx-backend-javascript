/*
 * @param: the same arrray type as in task#0
 * @return array of objects located in 
 * a specific city
 */


export default function(students, city) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === city);
  }
  return [];
}

    
