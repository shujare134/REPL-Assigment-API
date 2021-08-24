const Sequencer = require('@jest/test-sequencer').default;

class CustomSequencer extends Sequencer {
    sort(tests){
        // Test structure info
        const orderPath =
        [
            'when-calling-getCalendarDetails.test',
            'when-calling-getCalendarDetails-with-invalid-year.test'
        ];
        const copyTests = Array.from(tests);
        let returnTests = [];
        orderPath.forEach(element=>{
            for(let test of copyTests){
                if(test.path.includes(element)){
                    returnTests.push(test);
                    break;
                }
            }
        });
        return returnTests;
    }
}

module.exports = CustomSequencer;