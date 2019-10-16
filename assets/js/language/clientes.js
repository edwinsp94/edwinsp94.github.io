var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'ROUTER_TITULO' : 'Customers',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'Customers',
        'CUSTOMERS_TITULO' : 'Companies that trust our services.',
        'TESTIMONIAL_TITULO' : 'Testimonials',
        'TESTIMONIAL_SUBTITULO' : 'What our customers say about us',
        'TESTIMONIAL_ITEM_POST_1' : 'General Manager - Hortifrut Perú',
        'TESTIMONIAL_ITEM_TEXTO_1' : 'We live in an increasingly digitalized world. Not only from the point of view of the technological transformation of companies and organizations, but also of the cultural importance that this new scenario has for the whole society.',
        'TESTIMONIAL_ITEM_POST_2' : 'General Manager - El Rocio',
        'TESTIMONIAL_ITEM_TEXTO_2' : 'In the business environment configured by the digital revolution, organizations need to implement transformation processes to adapt their businesses to this new and challenging environment, which must be carried out without affecting their operational continuity.',
        'TESTIMONIAL_ITEM_POST_3' : 'General Manager - Avo Perú',
        'TESTIMONIAL_ITEM_TEXTO_3' : 'Several studies show that most of the disruptive ideas that are transformed into new businesses within organizations come from the demands of customers, where these requirements operate as an engine for the development of new services, solutions and products.',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'ROUTER_TITULO' : 'Clientes',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Clientes',
        'CUSTOMERS_TITULO' : 'Empresas que confian en nuestros servicios.',
        'TESTIMONIAL_TITULO' : 'Testimonios',
        'TESTIMONIAL_SUBTITULO' : 'Que dicen nuestros clientes sobre nosotros',
        'TESTIMONIAL_ITEM_POST_1' : 'Gerente General - Hortifrut Perú',
        'TESTIMONIAL_ITEM_TEXTO_1' : 'Vivimos en un mundo cada vez más digitalizado. No sólo desde el punto de vista de la transformación tecnológica de empresas y organizaciones, sino también de la trascendencia cultural que este nuevo escenario tiene para toda la sociedad.',
        'TESTIMONIAL_ITEM_POST_2' : 'Gerente General - El Rocio',
        'TESTIMONIAL_ITEM_TEXTO_2' : 'En el entorno de negocios configurado por la revolución digital, las organizaciones requieren implementar procesos de transformación para adaptar sus negocios a este nuevo y desafiante entorno, los que deben ser llevados a cabo sin afectar su continuidad operativa.',
        'TESTIMONIAL_ITEM_POST_3' : 'Gerente General - Avo Perú',
        'TESTIMONIAL_ITEM_TEXTO_3' : 'Diversos estudios dan cuenta de que la mayoría de las ideas disruptivas que se transforman en nuevos negocios dentro de las organizaciones provienen de las demandas de los clientes, donde estos requerimientos operan como motor para el desarrollo de nuevos servicios, soluciones y productos.',
        'FOOTER_COPY' : '© Diseñado por YAPU Solutions | Copyright 2019'
    }
}

$(document).ready(function() {
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