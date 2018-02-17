/**
 * This function will log Subscribed App Event
 * @param {string} description
 * @param {boolean} success
 *
$("#subscribe").click
    function logSubscribedEvent() {
        var params = {};
        params['Description'] = "Bob just subscribed";
        params['Success'] = true;
        FB.AppEvents.logEvent(FB.AppEvents.EventNames, null, params);
});

*/

$("#subscribe").click(
function logViewedContentEvent() {
    var params = {};
    params[FB.AppEvents.ParameterNames.CONTENT_TYPE] = "Subscribed";
    params[FB.AppEvents.ParameterNames.CONTENT_ID] = "123";
    params[FB.AppEvents.ParameterNames.CURRENCY] = "GBP";
    FB.AppEvents.logEvent(FB.AppEvents.EventNames.VIEWED_CONTENT, 11, params);
});