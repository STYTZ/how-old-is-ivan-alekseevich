$( document ).ready(function() {
    const birthday = moment("2018-04-27");
    var diff = moment.duration(moment().diff(birthday));
    $(".js-years").text(diff.years());
    $(".js-months").text(diff.months());
    $(".js-days").text(diff.days());
});
