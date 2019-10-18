var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'SLIDER_TEXTO' : 'We do not sell software or hardware, we sell peace of mind!',
        'SLIDER_1_TITULO' : 'WE ARE A COMMITTED COMPANY IN GIVING SOLUTIONS YOU NEED',
        'SLIDER_2_TITULO' : 'WE ARE A HIGHLY QUALIFIED TEAM',
        'SLIDER_3_TITULO' : 'WE PROVIDE SOLUTIONS THAT DIFFERENCE FROM THE REST',
        'SLIDER_BOTON_CONTACTO' : 'KNOW US',
        'SLIDER_BOTON_VER' : 'SEE SOLUTIONS',
        'ABOUT_TITULO' : 'About YAPU',
        'ABOUT_TEXTO_1' : 'We are a company that provides computer consulting services and management of computer facilities to the agribusiness sector.',
        'ABOUT_TEXTO_2' : 'Our core business is solutions such as Software as a Service (SaaS), with Genesys, RHsys, PSE and two service lines that are Software Factory and Project Consulting T.I.',
        'ABOUT_TEXTO_3' : 'We have a highly qualified team committed to providing solutions to the needs or problems of the client, accompanied by a quality service.',
        'ABOUT_TEXTO_4' : 'To achieve this goal, our company currently has the international certification in Quality Management.',
        'CLIENTS_TTULO' : 'Our Clients',
        'CONTACT_TITULO' : 'Contact Us',
        'CONTACT_SUBTITULO_1' : 'Do not hesitate to tell us your doubts,',
        'CONTACT_SUBTITULO_2' : 'you can contact us at:',
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
        'LOCATION_BOTON' : 'Send Message',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'SLIDER_TEXTO' : '¡No vendemos software ni hardware, vendemos tranquilidad!',
        'SLIDER_1_TITULO' : 'SOMOS UNA EMPRESA COMPROMETIDA EN DAR SOLUCIONES QUE NECESITAS',
        'SLIDER_2_TITULO' : 'SOMOS UN EQUIPO ALTAMENTE CUALIFICADO',
        'SLIDER_3_TITULO' : 'APORTAMOS SOLUCIONES QUE TE DIFERENCIAN DEL RESTO',
        'SLIDER_BOTON_CONTACTO' : 'CONÓCENOS',
        'SLIDER_BOTON_VER' : 'VER SOLUCIONES',
        'ABOUT_TITULO' : 'Sobre YAPU',
        'ABOUT_TEXTO_1' : 'Somos una empresa que brinda servicios de consultoría de informática y gestión de instalaciones informáticas al sector agroindustrial.',
        'ABOUT_TEXTO_2' : 'Nuestra core business son las soluciones como Software as a Service (SaaS), con Genesys, RHsys, PSE y dos líneas de servicio que son Software Factory y Asesoría en Proyectos T.I.',
        'ABOUT_TEXTO_3' : 'Contamos con un equipo altamente calificado y comprometido con aportar soluciones a las necesidades o problemas del cliente, acompañado de un servicio de calidad.',
        'ABOUT_TEXTO_4' : 'Para cumplir con ese fin nuestra empresa cuenta actualmente con la certificación internacional en Gestión de la Calidad.',
        'CLIENTS_TTULO' : 'Nuestros Clientes',
        'CONTACT_TITULO' : 'Contáctanos',
        'CONTACT_SUBTITULO_1' : 'No dudes en comentarnos tus dudas,',
        'CONTACT_SUBTITULO_2' : 'puedes contactarnos en:',
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