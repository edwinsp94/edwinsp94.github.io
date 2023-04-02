var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        'CONTACT_TITULO': 'Contact us',
                
        'CONTACT_OFI_1_TITULO': 'Office Trujillo',
        'CONTACT_OFI_2_TITULO': 'Office Lima',
        'CONTACT_TELEFONO_TITULO': 'Phone',
        'CONTACT_CORREO_TITULO': 'Email',
        
        'LOCATION_TITULO_1': 'Quote with us',
        'LOCATION_TITULO_2': 'Request an Advisor',
        'LOCATION_INPUT_NOMBRE': 'Write your Name',
        'LOCATION_INPUT_CORREO': 'Write your Email',
        'LOCATION_INPUT_CELULAR': 'Write your Phone Number',
        'LOCATION_INPUT_MENSAJE': 'Write your Message',
        'LOCATION_BOTON': 'Send',
        
        'Privacidad': 'Privacy Policy',
        'Cookies': 'Cookies Policy',
        'FOOTER_COPY': '© Designed by IV&RM | Copyright 2023'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'CONTACT_TITULO': 'Contáctanos',        
        
        'CONTACT_OFI_1_TITULO': 'Oficina Trujillo',
        'CONTACT_OFI_2_TITULO': 'Oficina Lima',
        'CONTACT_TELEFONO_TITULO': 'Teléfono',
        'CONTACT_CORREO_TITULO': 'Email',

        'LOCATION_TITULO_1': 'Cotiza con Nosotros',
        'LOCATION_TITULO_2': 'Solicita un Asesor',
        'LOCATION_INPUT_NOMBRE': 'Escribe tu Nombre',
        'LOCATION_INPUT_CORREO': 'Escribe tu Email',
        'LOCATION_INPUT_CELULAR': 'Escribe tu Teléfono',
        'LOCATION_INPUT_MENSAJE': 'Escribe tu Mensaje',
        'LOCATION_BOTON': 'Enviar',

        'Privacidad': 'Política de privacidad',
        'Cookies': 'Política de cookies',
        'FOOTER_COPY': '© Diseñado por IV&RM | Copyright 2023'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function() {
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