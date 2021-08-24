const XLSX_CALC = require('xlsx-calc');
const formulajs = require('@formulajs/formulajs');
const helperService = require('./helperService');
/* By using this formula we can get start of the year for 445 calendar
 Our start date always will be last satarday of last year.
 `=CHOOSE(WEEKDAY(DATE(${year},1,1)),-1,-2,-3,-4,-5,-6,-7)`;
*/
async function getStartDateOf445CalendarYear(year) {
   console.log(year);
    // import calc functions lib
    XLSX_CALC.import_functions(formulajs);
    var workbook = { Sheets: { Sheet1: {} } };
    
    // use it
    workbook.Sheets.Sheet1.A5 = { f: `=CHOOSE(WEEKDAY(DATE(${year},1,1)),-1,-2,-3,-4,-5,-6,-7)` };
    
    workbook.Sheets.Sheet1.A6 = { f: `=DATE(${year},1,1)` };
    XLSX_CALC(workbook);
    console.log(`workbook.Sheets.Sheet1.A5: ${JSON.stringify(workbook.Sheets.Sheet1.A5)}`);
    console.log(`workbook.Sheets.Sheet1.A6: ${JSON.stringify(workbook.Sheets.Sheet1.A6)}`);
    XLSX_CALC(workbook);
    let startDateOfYear = new Date(workbook.Sheets.Sheet1.A6.v);
    startDateOfYear.setDate(startDateOfYear.getDate() + workbook.Sheets.Sheet1.A5.v);
    console.log(`Start Date of the year ${year}: ${await helperService.dateToString(startDateOfYear)}`);
    return startDateOfYear;
}

exports.getStartDateOf445CalendarYear = getStartDateOf445CalendarYear;