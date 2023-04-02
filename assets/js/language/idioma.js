function cambiarIdioma(id) {debugger
    var lang = id;
    $('.lang').each(function(index, element) {
        if ($(this).is("input") || $(this).is("textarea")) {
            $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);
        } else {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        }
    });

    localStorage.idioma = id;
}