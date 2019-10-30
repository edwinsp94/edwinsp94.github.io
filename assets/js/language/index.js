var arrLang = {
    'en' : {
        'MENU_INICIO' : 'HOME',
        'MENU_NOSOTROS' : 'ABOUT US',
        'MENU_SOLUCIONES' : 'SOLUTIONS',
        'MENU_CLIENTES' : 'CUSTOMERS',
        'MENU_CONTACTANOS' : 'CONTACT US',
        'SLIDER_1_TITULO_1' : 'GROW',
        'SLIDER_1_TITULO_2' : 'TECHNOLOGY',
        'SLIDER_2_TITULO_1' : 'WE ARE A TEAM',
        'SLIDER_2_TITULO_2' : 'SPECIALIZED AND EXPERIENCED',
        'SLIDER_3_TITULO_1' : 'SOLUTIONS THAT',
        'SLIDER_3_TITULO_2' : 'GENERATE ADDED VALUE',
        'SLIDER_BOTON_CONTACTO' : 'MEET US',
        'SLIDER_BOTON_VER' : 'SEE SOLUTIONS',
        'ABOUT_TITULO' : 'WHO WE ARE',
        'ABOUT_TEXTO_1' : 'We are a company dedicated to the development of technological solutions for the support of the agricultural operation.',
        'ABOUT_TEXTO_2' : 'We are committed to providing solutions that provide in your organization with accurate and timely information for decision-making.',
        'ABOUT_TEXTO_3' : 'We take our solutions to different operational realities, crops, zones and markets, through our service lines: Software as a Service and Software Factory.',
        'CLIENTS_TTULO' : 'OUR CUSTOMERS',
        'CONTACT_TITULO' : 'CONTACT US',
        'CONTACT_OFI_1_TITULO' : 'Office Trujillo',
        'CONTACT_OFI_2_TITULO' : 'Office Lima',
        'CONTACT_TELEFONO_TITULO' : 'Phone',
        'CONTACT_CORREO_TITULO' : 'Email',
        'LOCATION_TITULO' : 'Send us your Message',
        'LOCATION_NOMBRE' : 'Name:',
        'LOCATION_INPUT_NOMBRE' : 'Enter your name',
        'LOCATION_CORREO' : 'Email:',
        'LOCATION_INPUT_CORREO' : 'Enter your email',
        'LOCATION_CELULAR' : 'Phone:',
        'LOCATION_INPUT_CELULAR' : 'Enter your phone number',
        'LOCATION_MESAJE' : 'Message:',
        'LOCATION_INPUT_MENSAJE' : 'Enter your message',
        'LOCATION_BOTON' : 'SEND MESSAGE',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019',
        'LIBRARY_APP' : 'Application Library',
        'HELP_DESK' : 'Help desk'
    },
    'es' : {
        'MENU_INICIO' : 'INICIO',
        'MENU_NOSOTROS' : 'NOSOTROS',
        'MENU_SOLUCIONES' : 'SOLUCIONES',
        'MENU_CLIENTES' : 'CLIENTES',
        'MENU_CONTACTANOS' : 'CONTÁCTANOS',
        'SLIDER_1_TITULO_1' : 'CULTIVAMOS',
        'SLIDER_1_TITULO_2' : 'TECNOLOGÍA',
        'SLIDER_2_TITULO_1' : 'SOMOS UN EQUIPO',
        'SLIDER_2_TITULO_2' : 'ESPECIALIZADO Y CON EXPERIENCIA',
        'SLIDER_3_TITULO_1' : 'SOLUCIONES QUE',
        'SLIDER_3_TITULO_2' : 'GENERAN VALOR AGREGADO',
        'SLIDER_BOTON_CONTACTO' : 'CONÓCENOS',
        'SLIDER_BOTON_VER' : 'VER SOLUCIONES',
        'ABOUT_TITULO' : 'QUIÉNES SOMOS',
        'ABOUT_TEXTO_1' : 'Somos una empresa dedicada al servicio de desarrollo de soluciones tecnológicas para el soporte de la operación agrícola.',
        'ABOUT_TEXTO_2' : 'Estamos comprometidos en brindar soluciones que aporten en su organización con información exacta y oportuna para la toma de decisiones.',
        'ABOUT_TEXTO_3' : 'Llevamos nuestras soluciones a distintas realidades operativas, cultivos, zonas y mercados, mediante nuestras líneas de servicio: Software as a Service y Software Factory.',
        'CLIENTS_TTULO' : 'NUESTROS CLIENTES',
        'CONTACT_TITULO' : 'CONTÁCTANOS',
        'CONTACT_OFI_1_TITULO' : 'Oficina Trujillo',
        'CONTACT_OFI_2_TITULO' : 'Oficina Lima',
        'CONTACT_TELEFONO_TITULO' : 'Teléfono',
        'CONTACT_CORREO_TITULO' : 'Correo Electrónico',
        'LOCATION_TITULO' : 'Envianos tu Mensaje',
        'LOCATION_NOMBRE' : 'Nombre:',
        'LOCATION_INPUT_NOMBRE' : 'Ingrese su nombre',
        'LOCATION_CORREO' : 'Correo:',
        'LOCATION_INPUT_CORREO' : 'Ingrese su correo',
        'LOCATION_CELULAR' : 'Celular:',
        'LOCATION_INPUT_CELULAR' : 'Ingrese su número de celular',
        'LOCATION_MESAJE' : 'Mensaje:',
        'LOCATION_INPUT_MENSAJE' : 'Ingrese su mensaje',
        'LOCATION_BOTON' : 'ENVIAR MENSAJE',
        'FOOTER_COPY' : '© Diseñado por YAPU Solutions | Copyright 2019',
        'LIBRARY_APP' : 'Biblioteca de Aplicaciones',
        'HELP_DESK' : 'Mesa de Ayuda'
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