setInterval(dateTime, 1000);

function dateTime() {
    $("#dateTime").text(dayjs().format('MMM DD, YYYY hh:mm:ss'));
}