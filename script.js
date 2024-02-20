const studentData = 'Temoye Dennis Charity CSC/18/976';
const dataSpread = [...studentData];

const studentDataLength = dataSpread.length;
function GetNameAndMatricNumber() {
  for (let i = 0; i <= studentDataLength; i++) {
    if (studentData[i] == '/') {
      //  console.log(studentData[i]);
      const startIndex = dataSpread.indexOf(studentData[i]);
      const newPosition = startIndex - 3;

      if (startIndex !== -1) {
        const name = studentData.slice(0, newPosition);
        const matricNumber = studentData.slice(newPosition);
        console.log('Full Name:', name.toLocaleUpperCase());
        console.log('Matric Number:', matricNumber.toLocaleUpperCase());
      }

      return;
    }
  }
}
GetNameAndMatricNumber();
