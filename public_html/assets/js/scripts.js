
$(document).ready(function () {
    
    
    
//this plugin acnnot work o chrome unless you serve it on a server  for local  because chrome has blocked any other than http request
//in terminal write php -S localhost:8000 the visit localhost:8000



meSpeak.loadConfig("assets/js/mespeak/mespeak_config.json");
meSpeak.loadVoice('assets/js/mespeak/voices/en/en-us.json');

var numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//get the arrays by first shuffing them then getting the indexes
var array1 = numberarray.sort(function (a, b) {
    return 0.5 - Math.random()
}).slice(0, 2);

//array2
var array2 = numberarray.sort(function (a, b) {
    return 0.5 - Math.random()
}).slice(3, 6);

//this is the first array limited to 2 lelments


var index1;
$(array1).each(function (i, v) {

    $('.items1').append(" <button id = '" + i + "item1'class='" + v + " item btn btn-primary'>" + v + "</button>");

//disable all button except for the firts one
    if (i !== 0) {

        $("#" + i + "item1").prop('disabled', true);
    }

    $("#" + i + "item1").click(function () {
        //make sound of the numbers
        meSpeak.speak(v);

        $(this).prop('disabled', true).next().prop('disabled', false);
        $(this).last().prop('disabled', true).removeClass("btn-primary").addClass("btn-success");
    });

    if ($(this).last()) {
        index1 = i;

    }

});

//    clicking on the last index to triger the second array
$("#" + index1 + "item1").click(function () {
    $(".message1").html("<p class='bg bg-success'>here is the next step continue as before and follow the above instructions</p>");
//                .delay(5000).fadeOut();

    $(".items1").remove();
    $(array2).each(function (index, val) {

        $('.items2').append(" <button id = '" + index + "item2'class='item btn btn-primary'>" + val + "</button>");
        //disable all button except for the firts one

        if (index !== 0) {

            $("#" + index + "item2").prop('disabled', true);
        }
        $("#" + index + "item2").click(function () {

            meSpeak.speak(val);
            $(this).prop('disabled', true).next().prop('disabled', false);
            $(this).last().prop('disabled', true).removeClass("btn-primary").addClass("btn-success");

        });

//
        var len = $(array2).length - 1;

//        console.log(len);

        $("#" + len + "item2").click(function () {

//            alert("ok");
            $(".message1").remove();
            $(".message2").html("<p class='bg bg-success'>Congratulation You have just finished the Game</p>");
            $('.items2').hide();

        });

    });

});



});