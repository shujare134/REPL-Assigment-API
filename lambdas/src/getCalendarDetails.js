const helperService = require('./helperService');
const { getStartDateOf445CalendarYear } = require('./getStartDateOf445CalendarYear');
const responses = require(`./API_Responses`);

async function getCalendarDetails(event) {
    let Months = [];
    let monthNumber = 0;

    if (!event.pathParameters || !event.pathParameters.year) {
        // failed without an year
        return responses._400({
            message: 'missing year in path'
        });

    }

    if (!helperService.isNumeric(event.pathParameters.year)) {
        // failed without if year is not number
        return responses._400({
            message: 'year should be number'
        });
    }

    try {
        let inputYear = Number(event.pathParameters.year);
        let startDateOfTheYear = await getStartDateOf445CalendarYear(inputYear);

        let fiscalYear = inputYear;
        let startDateOfMonth = new Date(startDateOfTheYear);
        //console.log(monthNumber);
        while (monthNumber < 12) {
            //start of month
            let weekNumber = 0;
            let Weeks = [];
            let startDate = new Date(startDateOfMonth);
            // Calculate Fiscal Month and start date of the month
            console.log(`---------Start of the month-------------`);
            let dateOfMonth = new Date(`${inputYear}-${monthNumber + 1}-1`);
            let options = { month: 'long' };
            let fiscalMonth = new Intl.DateTimeFormat('en-US', options).format(dateOfMonth);
            console.log(`start date of the month ${fiscalMonth}:: ${await helperService.dateToString(startDateOfMonth)}`);
            // condition for all months having 4 weeks
            if (monthNumber === 0 || monthNumber === 1 || monthNumber === 3 ||
                monthNumber === 4 || monthNumber === 6 || monthNumber === 7 ||
                monthNumber === 9 || monthNumber === 10) {
                while (weekNumber < 4) {
                    let Days = [];
                    for (let i = 0; i < 7; i++) {
                        let stDate = new Date(startDate);
                        stDate.setDate(stDate.getDate() + i);
                        Days.push(await helperService.dateToString(stDate));
                        if (i === 6) {
                            startDate = new Date(stDate);
                            startDate.setDate(stDate.getDate() + 1);
                        }
                    }
                    Weeks.push({
                        WeekNumber: weekNumber + 1,
                        Days: Days
                    });
                    if (weekNumber === 3) {
                        startDateOfMonth = new Date(startDate);
                        startDateOfMonth.setDate(startDateOfMonth.getDate());
                    }
                    weekNumber++;
                }
            }
            // condition for all months having 5 weeks
            else if (monthNumber === 2 || monthNumber === 5 || monthNumber === 8 ||
                monthNumber === 11) {
                while (weekNumber < 5) {
                    let Days = [];
                    for (let i = 0; i < 7; i++) {
                        let stDate = new Date(startDate);
                        stDate.setDate(stDate.getDate() + i);
                        Days.push(await helperService.dateToString(stDate));
                        if (i === 6) {
                            startDate = new Date(stDate);
                            startDate.setDate(stDate.getDate() + 1);
                        }
                    }
                    Weeks.push({
                        WeekNumber: weekNumber + 1,
                        Days: Days
                    });
                    if (weekNumber === 4) {
                        startDateOfMonth = new Date(startDate);
                        startDateOfMonth.setDate(startDateOfMonth.getDate());
                        //console.log(startDateOfMonth);
                    }
                    weekNumber++;
                    //Months.push(Weeks);
                }
            }
            Months.push({
                FiscalMonth: fiscalMonth,
                NumberOfWeeks: weekNumber,
                Weeks: Weeks,
            });
            monthNumber++;
            console.log(`---------End of the month-------------`);
        }
        return responses._200({
            FiscalYear: fiscalYear,
            Months
        });
    }
    catch (ex) {
        console.error(ex);
        return responses._500({
            message: `internal server error, please connect with API team.`
        });

    }

}
exports.getCalendarDetails = getCalendarDetails;
