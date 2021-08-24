const { getCalendarDetails } = require("./getCalendarDetails");
const responses = require(`./API_Responses`);

exports.handler = async (event) => {
    console.log(event);

    let result = await getCalendarDetails(event);

    console.log(JSON.stringify(result));

    return result;

};
