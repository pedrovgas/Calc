$(function () {
    $.each(Calcs, function (i, e) {
        $('#calc-type').append('<option value="' + e + '">' + e + '</option>');
    });
});