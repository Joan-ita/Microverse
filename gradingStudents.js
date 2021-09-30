/*
 *
 *
 * option 1 using loops
 *
 */

function gradingStudents(grades){
    let newGrades = [];  //final grades after alteration
    for (let i=0; i < grades.length; i++){
        // check if grade is greater than 37 and is a multiple of 5 or less than 38
        if ((grades[i] > 37 && grades[i] % 5 == 0) || grades[i] < 38){
          // we dont make any changes, just add it to the newGrades array
          newGrades.push(grades[i]);
        }
        // check if grade is greater than 37 but is not a multiple of 5
        else if (grades[i] > 37 && grades[i] % 5 != 0) {
            // check if the difference between grades[i] and next multiple of 5 is less than 3
            if (((grades[i] + 2) - grades[i]) < 3 && (grades[i] + 2) % 5 == 0) {
                // makeChanges
                newGrades.push(grades[i] + 2);
            }
            else if (((grades[i] + 1) - grades[i]) < 3 && (grades[i] + 2) % 5 == 0) {
                // makeChanges
                newGrades.push(grades[i] + 1);
            }
            // if none of the conditions are met, we dont make changes
            else{
               newGrades.push(grades[i]);
            }
        }
    }

    // in this case, we shall return the newGrades
    return newGrades;
}







/*
 *
 *
 * option 2 using map with the arrow function
 *
 */

function gradingStudents(grades){

    //final grades after alteration
    let newGrades = grades.map((n) => {
          // check if grade is greater than 37 but is not a multiple of 5
          // check if grade is greater than 37 and is a multiple of 5 or less than 38
          if ((n > 37 && n % 5 == 0) || n < 38){
            // we dont make any changes, just add it to the newGrades array
            return n
          }
          // check if grade is greater than 37 but is not a multiple of 5
          else if (n > 37 && n % 5 != 0) {
              // check if the difference between grades[i] and next multiple of 5 is less than 3
              if (((n + 2) - n) < 3 && (n + 2) % 5 == 0) {
                  // makeChanges
                  return n + 2;
              }
              else if (((n + 1) - n) < 3 && (n + 2) % 5 == 0) {
                  // makeChanges
                  return n + 1;
              }
              // if none of the conditions are met, we dont make changes
              else{
                 return n;
              }
          }
    } )


    return newGrades;
}
