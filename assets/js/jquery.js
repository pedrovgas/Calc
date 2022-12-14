$(function () {
    $.each(Calcs, function (i, e) {
        $('#calc-type').append('<option value="' + e + '">' + e + '</option>');
    });

    $('button#calc').on('click', function (e) {
        e.preventDefault();
        let calcFunction = $('#calc-type').val();

        switch (calcFunction) {
            case 'imc':
                peso = $('#value-one').val();
                altura = $('#value-two').val();
                result = CalculaImc(peso, altura)
                console.log(result);
                $('#result-field h2').text(result);
                break;

            default:
                break;
        }
    });
});

