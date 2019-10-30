var arrLang = {
    'en' : {
        'MENU_INICIO' : 'HOME',
        'MENU_NOSOTROS' : 'ABOUT US',
        'MENU_SOLUCIONES' : 'SOLUTIONS',
        'MENU_CLIENTES' : 'CUSTOMERS',
        'MENU_CONTACTANOS' : 'CONTACT US',
        'ROUTER_TITULO' : 'ABOUT US',
        'ROUTER_NAV_1' : 'Home',
        'ROUTER_NAV_2' : 'About Us',
        'MISION_TITULO' : 'YAPU: "Growing Technology"',
        'MISION_TEXTO' : 'Company dedicated to technology development, with a highly qualified team with experience in the processes of the agro-industry sector. We provide solutions as a service through quality and timely information. Generating great impact on the management of your operation and added value to your organization',        
        'VALUES_TITULO' : 'VALUES',
        'VALUES_ITEM_1' : 'High quality',
        'VALUES_ITEM_2' : 'Innovation',
        'VALUES_ITEM_3' : 'Project Management',
        'VALUES_ITEM_4' : 'Commitment and flexibility',
        'VALUES_ITEM_5' : 'Competence and experience',        
        'POLICIES_TITULO' : 'QUALITY POLICY',
        'POLICIES_TEXTO_1' : '1.- Meet the requirements of customers, stakeholders, legal and other requirements applicable to the organization, generating a culture of quality by strengthening human talent.',
        'POLICIES_TEXTO_2' : '2.- Provide technological services that meet the technical specifications of quality and the achievement of the needs and expectations of the user, guaranteeing their satisfaction.',
        'POLICIES_TEXTO_3' : '3.- Promote the continuous improvement of the quality management system by evaluating performance and generating opportunities for improvement throughout all processes.',
        'FOOTER_COPY' : '© Designed by YAPU Solutions | Copyright 2019'
    },
    'es' : {
        'MENU_INICIO' : 'Inicio',
        'MENU_NOSOTROS' : 'Nosotros',
        'MENU_SOLUCIONES' : 'Soluciones',
        'MENU_CLIENTES' : 'Clientes',
        'MENU_CONTACTANOS' : 'Contáctenos',
        'ROUTER_TITULO' : 'Nosotros',
        'ROUTER_NAV_1' : 'Inicio',
        'ROUTER_NAV_2' : 'Nosotros',
        'MISION_TITULO' : 'YAPU: "Cultivando Tecnología"',
        'MISION_TEXTO' : 'Empresa dedicada al desarrollo de tecnología, con un equipo altamente calificado y con experiencia en los procesos del sector agroindustrial. Brindamos soluciones como servicio a través de información de calidad y oportuna. Generando gran impacto en la gestión de su operación y valor agregado a su organización.',        
        'VALUES_TITULO' : 'VALORES',
        'VALUES_ITEM_1' : 'Alta calidad',
        'VALUES_ITEM_2' : 'Innovación',
        'VALUES_ITEM_3' : 'Gestión de Proyectos',
        'VALUES_ITEM_4' : 'Compromiso y flexibilidad',
        'VALUES_ITEM_5' : 'Competencia y experiencia',        
        'POLICIES_TITULO' : 'POLÍTICA DE CALIDAD',
        'POLICIES_TEXTO_1' : '1.- Cumplir los requisitos de los clientes, partes interesadas, legales y demás requisitos aplicables al rubro de la organización, generando una cultura de calidad mediante el fortalecimiento del talento humano.',
        'POLICIES_TEXTO_2' : '2.- Brindar servicios tecnológicos que cumplan las especificaciones técnicas de calidad y el logro de las necesidades y expectativas del usuario, garantizando su satisfacción.',
        'POLICIES_TEXTO_3' : '3.- Promover la mejora continua del sistema de gestión de la calidad mediante la evaluación del desempeño y generación de oportunidades de mejora a través de todos los procesos.',
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