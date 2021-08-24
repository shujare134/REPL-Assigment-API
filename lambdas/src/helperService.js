/*
Function to convert date to string format
*/

async function dateToString(date) {
    let dateInString = date.getFullYear() + '-' +
        ("0" + (date.getMonth() + 1)).slice(-2) + '-' +
        ("0" + (date.getDate())).slice(-2);
    return dateInString;
}

exports.dateToString = dateToString;

// can be wrapped for making simple and readable
function isNumeric(num){
  return !isNaN(num)
}
exports.isNumeric = isNumeric;
