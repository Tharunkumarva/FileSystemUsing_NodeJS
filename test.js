const path = require('path');
const fs = require('fs');

const dayjs = require('dayjs');

console.log("Current Path is : " + __filename);

const folderPath = path.join(__dirname, 'testFiles');

console.log("New Path is : " + folderPath);


// Check if the folder exists, and create it if not
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }


  const timestamp = new Date().toISOString().replace(/[-:]/g, '');

  console.log("timestamp : " + timestamp);





// const currentDate = new Date().toLocaleString('en-IN', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: false
//   });
  
//   // Extract date and time components
//   const [datePart, timePart] = currentDate.split(', ');
  
//   // Reformat the datePart to 'DD/MM/YYYY'
//   const [day, month, year] = datePart.split('/');
//   const reformattedDatePart = `${day}/${month}/${year}`;
  
//   const fileName = `${reformattedDatePart} - ${timePart.replace(/:/g, '')}.txt`;
//   console.log(fileName);
  

// let today = dayjs();
 
// // console.log("ISO")
// // console.log(today.format());
 
// // console.log("\nDate")
 
// console.log(today.format(" DD MMM YYYY - h:mm:ss").toString());
  

let fileName = dayjs().format("DD MMM YYYY - h:mm:ss").toString();
console.log(fileName);