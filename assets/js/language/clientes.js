var arrLang = {
    'en' : {
        'MENU_INICIO' : 'HOME',
        'MENU_NOSOTROS' : 'ABOUT US',
        'MENU_SOLUCIONES' : 'SOLUTIONS',
        'MENU_CLIENTES' : 'CUSTOMERS',
        'MENU_CONTACTANOS' : 'CONTACT US',
        'ROUTER_TITULO' : 'CUSTOMERS',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'Customers',
        'CUSTOMERS_TITULO' : 'Companies that trust us.',
        'TESTIMONIAL_TITULO' : 'TESTIMONIALS',
        'TESTIMONIAL_SUBTITULO' : 'What our customers say about us',
        'TESTIMONIAL_ITEM_POST_1' : 'General Manager - Hortifrut Perú',
        'TESTIMONIAL_ITEM_TEXTO_1' : 'I am totally delighted with the service provided by Yapu Solutions is a company that has a team of highly qualified professionals totally oriented to the client and their needs, besides being very friendly and very attentive. Certainly a success to trust them.',
        'TESTIMONIAL_ITEM_POST_2' : 'General Manager - El Rocio',
        'TESTIMONIAL_ITEM_TEXTO_2' : 'The service received by Yapu Solutions has been agile and professional. They have managed to understand the objectives of our company and adapt the content and development to meet these objectives. Teamwork has worked and allowed us to share ideas and suggestions throughout the process.',
        'TESTIMONIAL_ITEM_POST_3' : 'General Manager - Tal S.A.',
        'TESTIMONIAL_ITEM_TEXTO_3' : 'Yapu Soltuions is for me a company with characteristics that make it unique and indispensable. In programming, design and communication shine for their great professionalism and creativity. But I would especially like to highlight the proximity and complicity treatment with its clients, making your problems theirs and obtaining very good results.',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'INICIO',
        'MENU_NOSOTROS' : 'NOSOTROS',
        'MENU_SOLUCIONES' : 'SOLUCIONES',
        'MENU_CLIENTES' : 'CLIENTES',
        'MENU_CONTACTANOS' : 'CONTÁCTANOS',
        'ROUTER_TITULO' : 'CLIENTES',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Clientes',
        'CUSTOMERS_TITULO' : 'Empresas que confian en nosotros.',
        'TESTIMONIAL_TITULO' : 'TESTIMONIOS',
        'TESTIMONIAL_SUBTITULO' : 'Que dicen nuestros clientes sobre nosotros',
        'TESTIMONIAL_ITEM_POST_1' : 'Gerente General - Hortifrut Perú',
        'TESTIMONIAL_ITEM_TEXTO_1' : 'Estoy totalmente encantado con el servicio brindado por Yapu Solutions es una empresa que posee un equipo de profesionales altamente calificados totalmente orientados al cliente y sus necesidades, además de ser muy amables y muy atentos. Sin duda un acierto confiar en ellos.',
        'TESTIMONIAL_ITEM_POST_2' : 'Gerente General - El Rocio',
        'TESTIMONIAL_ITEM_TEXTO_2' : 'El servicio recibido por Yapu Solutions ha sido ágil y profesional. Han sabido entender los objetivos de nuestra empresa y adaptar el contenido y desarrollo al cumplimiento de dichos objetivos. El trabajo en equipo ha funcionado y ha permitido compartir ideas y sugerencias durante todo el proceso.',
        'TESTIMONIAL_ITEM_POST_3' : 'Gerente General - Tal S.A.',
        'TESTIMONIAL_ITEM_TEXTO_3' : 'Yapu Soltuions es para mí una empresa con unas características que la hacen única e indispensable. En programación, diseño y comunicación brillan por su gran profesionalidad y creatividad. Pero quisiera destacar especialmente el trato de proximidad y complicidad con sus clientes, haciendo de tus problemas los suyos y obteniendo muy buenos resultados.',
        'FOOTER_COPY' : '© Diseñado por YAPU Solutions | Copyright 2019'
    }
}

$(document).ready(function() {
    $("#testimonial-slider").owlCarousel({
        items: 2,
        itemsDesktop: [1000, 2],
        itemsDesktopSmall: [992, 1],
        itemsTablet: [768, 1],
        pagination: false,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });

    $('.js-translate').click(function () {
        var lang = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[lang][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            }
        });
    });
});