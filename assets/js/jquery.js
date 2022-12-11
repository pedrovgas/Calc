$(function () {
    $.each(Calcs, function (i, e) {
        $('#calcs-list').append('<li class="function">' + e + '</li>');
    });
    
    $('#calcs-list .function').on('click', function (e) {
        $('#calcs-list .function').removeClass('active');
        $(this).addClass('active');
    });

    $('#calcs-list .function:first').trigger("click");



});