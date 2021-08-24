const {getCalendarDetails} = require('../src/getCalendarDetails');
const {getStartDateOf445CalendarYear} = require("../src/getStartDateOf445CalendarYear");

describe(`when calling getCalendarDetails and passing invalid year which not in range`, () => {

    const event = {
        pathParameters: { year: '19' }
    }
    let result; 
    beforeAll(async() => {
        result = await getCalendarDetails(event);
        console.log(result);
    })
    test('should return result',async () =>{
        expect(result).toBeDefined();
    })
    test('should return 500 result',async () =>{
        expect(result.statusCode).toBe(500);
    })
    test('should return error message in body',async () =>{
        expect(JSON.parse(result.body).message).toMatch("internal server error, please connect with API team.");
    })
});


describe(`when calling getCalendarDetails and passing invalid year which not a number`, () => {

    const event = {
        pathParameters: { year: 'uuiuui' }
    }
    let result; 
    beforeAll(async() => {
        result = await getCalendarDetails(event);
        console.log(result);
    })
    test('should return result',async () =>{
        expect(result).toBeDefined();
    })
    test('should return 400 result',async () =>{
        expect(result.statusCode).toBe(400);
    })
    test('should return error in body of result',async () =>{
        expect(JSON.parse(result.body).message).toMatch("year should be number");
    })
});