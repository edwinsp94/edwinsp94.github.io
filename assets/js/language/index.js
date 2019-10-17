var arrLang = {
    'en' : {
        'MENU_INICIO' : 'Home',
        'MENU_NOSOTROS' : 'About Us',
        'MENU_SOLUCIONES' : 'Solutions',
        'MENU_CLIENTES' : 'Customers',
        'MENU_CONTACTANOS' : 'Contact Us',
        'SLIDER_1_TITULO' : 'SOLUTIONS UNDER THE SaaS MODULE',
        'SLIDER_1_TEXTO' : 'We are specialists in the Development of Agronomic Software.',
        'SLIDER_2_TITULO' : 'HIGH IMPACT SOLUTIONS',
        'SLIDER_2_TEXTO' : 'Resource optimization - Sustainability - Profitability.',
        'SLIDER_3_TITULO' : 'WEB AND MOBILE APPLICATIONS',
        'SLIDER_3_TEXTO' : 'We create customized solutions under an innovative and agile approach for companies of all sizes.',
        'SLIDER_BOTON_CONTACTO' : 'SEPARATE YOUR SOLUTION',
        'SLIDER_BOTON_VER' : 'SEE SOLUTIONS',
        'ABOUT_TITULO' : 'About YAPU',
        'ABOUT_TEXTO_1' : 'We are a company that provides computer consulting services and management of computer facilities to the agribusiness sector.',
        'ABOUT_TEXTO_2' : 'Our core business is solutions such as Software as a Service (SaaS), with Genesys, RHsys, PSE and two service lines that are Software Factory and Project Consulting T.I.',
        'ABOUT_TEXTO_3' : 'We have a highly qualified team committed to providing solutions to the needs or problems of the client, accompanied by a quality service.',
        'ABOUT_TEXTO_4' : 'To achieve this goal, our company currently has the international certification in Quality Management.',
        'SOLUTIONS_TITULO' : 'Solutions provided to our Clients',
        'SOLUTIONS_BOTON' : 'All',
        'CLIENTS_TTULO' : 'Work with Us',
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
        'SLIDER_1_TITULO' : 'SOLUCIONES BAJO EL MÓDULO SaaS',
        'SLIDER_1_TEXTO' : 'Somos especialistas en el Desarrollo de Software Agrónomo.',
        'SLIDER_2_TITULO' : 'SOLUCIONES DE ALTO IMPACTO',
        'SLIDER_2_TEXTO' : 'Optimización de recursos – Sostenibilidad – Rentabilidad.',
        'SLIDER_3_TITULO' : 'APLICACIONES WEB Y MÓVILES',
        'SLIDER_3_TEXTO' : 'Creamos soluciones a medida bajo un enfoque innovador y ágil para empresas de todo tamaño.',
        'SLIDER_BOTON_CONTACTO' : 'SEPARA TU SOLUCIÓN',
        'SLIDER_BOTON_VER' : 'VER SOLUCIONES',
        'ABOUT_TITULO' : 'Sobre YAPU',
        'ABOUT_TEXTO_1' : 'Somos una empresa que brinda servicios de consultoría de informática y gestión de instalaciones informáticas al sector agroindustrial.',
        'ABOUT_TEXTO_2' : 'Nuestra core business son las soluciones como Software as a Service (SaaS), con Genesys, RHsys, PSE y dos líneas de servicio que son Software Factory y Asesoría en Proyectos T.I.',
        'ABOUT_TEXTO_3' : 'Contamos con un equipo altamente calificado y comprometido con aportar soluciones a las necesidades o problemas del cliente, acompañado de un servicio de calidad.',
        'ABOUT_TEXTO_4' : 'Para cumplir con ese fin nuestra empresa cuenta actualmente con la certificación internacional en Gestión de la Calidad.',
        'SOLUTIONS_TITULO' : 'Soluciones brindadas a nuestros Clientes',
        'SOLUTIONS_BOTON' : 'Todas',
        'CLIENTS_TTULO' : 'Trabajan con Nosotros',
        'CONTACT_TITULO' : 'Contactanos',
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