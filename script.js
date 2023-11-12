$(document).ready(function() {
    $('#form').submit(function(e) {
        e.preventDefault();
        var formData = {
            nome: $('#nome').val(),
            autor: $('#autor').val()
        };

        $.post('/submit', formData, function(data) {
            console.log(data);
        });
    });
});