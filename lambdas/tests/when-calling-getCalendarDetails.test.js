const {getCalendarDetails} = require('../src/getCalendarDetails');
const {getStartDateOf445CalendarYear} = require("../src/getStartDateOf445CalendarYear");

describe(`when calling getCalendarDetails and passing valid year`, () => {

    const event = {
        pathParameters: { year: '2020' }
    }
    let startDateOfTheYear;
    let result; 
    beforeAll(async() => {
        let response = await getCalendarDetails(event);
        result = JSON.parse(response.body);
    })
    test('should return result',async () =>{
        expect(result).toBeDefined();
    })
    test('should return fiscal year 2020',async () =>{
        expect(result.FiscalYear).toBe(2020);
    })
    test('should return 12 months details',async () =>{
        expect(result.Months.length).toBe(12);
    })
    test('should return NumberOfWeeks 4 for 1st month of first querter',async () =>{
        expect(result.Months[0].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 4 for 2nd month of first querter',async () =>{
        expect(result.Months[1].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 5 for 3rd month of 1st querter',async () =>{
        expect(result.Months[2].NumberOfWeeks).toBe(5);
    })
    test('should return NumberOfWeeks 4 for 1st month of 2nd querter',async () =>{
        expect(result.Months[3].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 4 for 2nd month of 2nd querter',async () =>{
        expect(result.Months[4].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 5 for 3rd month of 2nd querter',async () =>{
        expect(result.Months[5].NumberOfWeeks).toBe(5);
    })
    test('should return NumberOfWeeks 4 for 1st month of 3rd querter',async () =>{
        expect(result.Months[6].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 4 for 2nd month of 3rd querter',async () =>{
        expect(result.Months[7].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 5 for 3rd month of 3rd querter',async () =>{
        expect(result.Months[8].NumberOfWeeks).toBe(5);
    })
    test('should return NumberOfWeeks 4 for 1st month of 4th querter',async () =>{
        expect(result.Months[9].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 4 for 2nd month of 4th querter',async () =>{
        expect(result.Months[10].NumberOfWeeks).toBe(4);
    })
    test('should return NumberOfWeeks 5 for 3rd month of 4th querter',async () =>{
        expect(result.Months[11].NumberOfWeeks).toBe(5);
    })
});