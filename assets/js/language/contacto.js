var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'ROUTER_TITULO' : 'Contact Us',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'Contact Us',
        'CONTACT_OFI_1_TITULO' : 'Office Trujillo',
        'CONTACT_OFI_2_TITULO' : 'Office Lima',
        'CONTACT_TELEFONO_TITULO' : 'Phone',
        'CONTACT_CORREO_TITULO' : 'Email',
        'LOCATION_TITULO' : 'Send us your Message',
        'LOCATION_NOMBRE' : 'Name:',
        'LOCATION_INPUT_NOMBRE' : 'Enter your name',
        'LOCATION_CORREO' : 'Mail Address:',
        'LOCATION_INPUT_CORREO' : 'Enter your email',
        'LOCATION_CELULAR' : 'Cell Phone Number:',
        'LOCATION_INPUT_CELULAR' : 'Enter your mobile number',
        'LOCATION_MESAJE' : 'Message:',
        'LOCATION_INPUT_MENSAJE' : 'Enter your message',
        'LOCATION_BOTON' : 'Send Message',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'ROUTER_TITULO' : 'Contáctanos',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Contáctanos',
        'CONTACT_OFI_1_TITULO' : 'Oficina Trujillo',
        'CONTACT_OFI_2_TITULO' : 'Oficina Lima',
        'CONTACT_TELEFONO_TITULO' : 'Teléfono',
        'CONTACT_CORREO_TITULO' : 'Correo Electrónico',
        'LOCATION_TITULO' : 'Envianos tu Mensaje',
        'LOCATION_NOMBRE' : 'Nombre:',
        'LOCATION_INPUT_NOMBRE' : 'Ingrese su nombre',
        'LOCATION_CORREO' : 'Dirección de Correo:',
        'LOCATION_INPUT_CORREO' : 'Ingrese su correo',
        'LOCATION_CELULAR' : 'Número de Celular:',
        'LOCATION_INPUT_CELULAR' : 'Ingrese su número de celular',
        'LOCATION_MESAJE' : 'Mensaje:',
        'LOCATION_INPUT_MENSAJE' : 'Ingrese su mensaje',
        'LOCATION_BOTON' : 'Enviar Mensaje',
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