var arrLang = {
    'en': {
        'MENU_INICIO': 'Home',
        'MENU_NOSOTROS': 'Know us',
        'MENU_SOLUCIONES': 'Solutions',
        'MENU_CLIENTES': 'Clients',
        'MENU_CONTACTANOS': 'Contact us',
        
        'SLIDER_1_TITULO_1': 'high impact',
        'SLIDER_1_TITULO_2': 'solutions',
        
        'SLIDER_2_TITULO_1': 'Experts',
        'SLIDER_2_TITULO_2': 'in integration',
        'SLIDER_2_TITULO_3': 'solutions',
        
        'SLIDER_3_TITULO_1': 'Advanced,',
        'SLIDER_3_TITULO_2': 'agile and secure',
        'SLIDER_3_TITULO_3': 'services',
        
        'SLIDER_BOTON_CONTACTO': 'know us',
        'SLIDER_BOTON_VER': 'See Solutions',

        'ALIADOS_TITULO': 'Our Allies',

        'SOLUCIONES_TITULO':'Our Solutions',

        'SOLUCION1_TITULO':'Fiber Optic laying',
        'SOLUCION1_DESC':'In our company we develop, implement and carry out the laying of fiber optics, with international standards, we have more than 100 facilities that offer greater capacity to improve communication...',

        'SOLUCION2_TITULO':'Camera Installation',
        'SOLUCION2_DESC':'We offer peace of mind for your company with the Installation of Security Cameras, since having everything under surveillance can prevent theft or deal with an incident within the company or its adjacencies, opening...',
        
        'SOLUCION3_TITULO':'Data Center Installation',
        'SOLUCION3_DESC':'In the Data Center area, our company installs servers to store both company information directly, and to be used for effective virtualization, in addition to offering...',
        
        'VER_SOLUCIONES':'See Solutions',
        
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
        'FOOTER_COPY': '© Designed by IV&RM | Copyright 2023',
        
        'LIBRARY_APP': 'Application Library',
        'HELP_DESK': 'Help desk'
    },
    'es': {
        'MENU_INICIO': 'Inicio',
        'MENU_NOSOTROS': 'Conócenos',
        'MENU_SOLUCIONES': 'Soluciones',
        'MENU_CLIENTES': 'Clientes',
        'MENU_CONTACTANOS': 'Contáctanos',
        'SLIDER_1_TITULO_1': 'Cultivamos',
        'SLIDER_1_TITULO_2': 'Tecnología',
        'SLIDER_2_TITULO_1': 'Somos un equipo',
        'SLIDER_2_TITULO_2': 'especializado y',
        'SLIDER_2_TITULO_3': 'con experiencia',
        'SLIDER_3_TITULO_1': 'Soluciones que',
        'SLIDER_3_TITULO_2': 'generan valor',
        'SLIDER_3_TITULO_3': 'agregado',
        'SLIDER_BOTON_CONTACTO': 'Conócenos',
        'SLIDER_BOTON_VER': 'ver Soluciones',

        'ALIADOS_TITULO': 'Nuestros Aliados',

        'SOLUCIONES_TITULO':'Nuestras Soluciones',
        'SOLUCION1_TITULO':'Tendido de Fibra Óptica',
        'SOLUCION1_DESC':'En nuestra empresa desarrollamos, implementamos y realizamos el tendido de la fibra óptica, con los estándares internacionales, contamos con mas 100 instalaciones que ofrecen mayor capacidad ...',
        
        'SOLUCION2_TITULO':'Instalación de Cámaras',
        'SOLUCION2_DESC':'Ofrecemos tranquilidad para su empresa con la Instalación de Cámaras de Seguridad, ya que al tener todo bajo vigilancia se pueden prevenir robos o atender algún incidente dentro de la ...',
        
        'SOLUCION3_TITULO':'Instalación de Data Center',
        'SOLUCION3_DESC':'En el rubro de Data Center, nuestra empresa instala servidores para almacenar tanto la información de las empresas directamente, como para ser empleados para la ...',
        
        'VER_SOLUCIONES': 'Ver Soluciones',
        
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
        'FOOTER_COPY': '© Diseñado por IV&RM | Copyright 2023',
        
        'LIBRARY_APP': 'Biblioteca de Aplicaciones',
        'HELP_DESK': 'Mesa de Ayuda'
    }
}

$(document).ready(function() {
    $('.js-translate').click(function() {
        language_select = $(this).attr('id');
        $('.lang').each(function(index, element) {
            if ($(this).is("input") || $(this).is("textarea")) {
                $(this).attr('placeholder', arrLang[language_select][$(this).attr('key')]);
            } else {
                $(this).text(arrLang[language_select][$(this).attr('key')]);
            }
        });
    });
});