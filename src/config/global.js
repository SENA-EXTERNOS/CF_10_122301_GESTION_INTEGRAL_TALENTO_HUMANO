export default {
  global: {
    componenteFormativo:
      'Diseño del programa de capacitación de recurso humano',
    descripcionCurso:
      'Una de las funciones del área de talento humano, es la capacitación del recurso humano, proceso a través del cual se busca promover el desarrollo integral del personal y de la organización. Para lograrlo, se requiere diseñar un programa de capacitación enfocado en el desarrollo de competencias laborales y fundamentado en etapas, teniendo en cuenta las políticas de la organización y la normatividad vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/8.svg'),
      },
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-11'],
        imagen: require('@/assets/curso/portada/11.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Capacitación o formación empresarial',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Instrumentos de diagnóstico y temas de capacitación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Presupuesto, logística, programación de actividades y proveedores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Capacitación o formación empresarial',
      referencia:
        'Campos, E. (2022). <i>Formación o Capacitación Empresarial</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=u_TEG8fA-IA',
    },
    {
      tema: 'Capacitación o formación empresarial',
      referencia:
        'INFO G-TALENT. (2021). <i>Tutorial - Tipos de capacitación</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HgvcR67fjgI&t=141s',
    },
    {
      tema: 'Presupuesto, logística, programación de actividades y proveedores',
      referencia:
        'Hernández, F. (2020). <i>La logística de las sesiones de capacitación</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oYVQ-FLpyEM',
    },
    {
      tema: 'Presupuesto, logística, programación de actividades y proveedores',
      referencia: 'Paucar, C. (2020). <i>Presupuesto de Capacitación</i>',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=mTcFm3f3TFw',
    },
  ],
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'es una acción que se lleva a cabo para optimizar una actividad, proceso o procedimiento.',
    },
    {
      termino: 'Aprendizaje',
      significado:
        'proceso a través del cual se modifican y adquieren habilidades, destrezas, conocimientos, conductas y valores.',
    },
    {
      termino: 'Capacitación',
      significado:
        'actividad que debe ser sistémica, planeada, continua y permanente, con el objetivo de proporcionar el conocimiento necesario y desarrollar las habilidades precisas para que las personas que ocupan un puesto en las organizaciones, puedan desarrollar sus funciones y cumplir con sus responsabilidades, de manera eficiente y efectiva.',
    },
    {
      termino: 'Capacitación en el trabajo',
      significado:
        'es la formación impartida en el curso de las actividades profesionales de una persona, sea por su superior inmediato o por un entrenador profesional.',
    },
    {
      termino: 'Capacitación fuera del trabajo',
      significado:
        'la capacitación se brinda en centros especializados, internos o externos a la empresa, de manera sistemática y de acuerdo con un programa estructurado.',
    },
    {
      termino: 'Competencia',
      significado:
        'es la capacidad de una persona para desempeñar, en diferentes contextos y con base en los requerimientos de calidad y resultados esperados, las funciones inherentes a un empleo.',
    },
    {
      termino: 'Desarrollo',
      significado:
        'se refiere a los conocimientos que se le proporcionan al empleado, con el propósito de prepararlo para responsabilidades futuras.',
    },
    {
      termino: 'Didáctica',
      significado:
        'parte de la pedagogía que estudia las técnicas y métodos de enseñanza.',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'es la puesta en práctica de los conocimientos adquiridos en las sesiones de capacitación, con el propósito de adquirir o desarrollar habilidades psicomotrices en los trabajadores, para desarrollar un mejor trabajo.',
    },
    {
      termino: 'Proveedor',
      significado:
        'persona natural o jurídica que se dedica a proveer o abastecer de productos o servicios necesarios, a una empresa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Boada, R. (2015). <i>Identificando el talento humano</i>. McGraw-Hill Interamericana.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7452',
    },
    {
      referencia:
        'Chiavenato, I. (2009). <i>Gestión del talento humano</i>. McGraw-Hill. ',
      link:
        'http://repositorio.uasb.edu.bo:8080/bitstream/54000/1143/1/Chiavenato-Talento%20humano%203ra%20ed.pdf',
    },
    {
      referencia:
        'Chiavenato, I. (2017).<i> Administración de recursos humanos. El capital humano de las organizaciones</i>. McGraw-Hill.',
      link:
        'https://www.sijufor.org/uploads/1/2/0/5/120589378/administracion_de_recursos_humanos_-_chiavenato.pdf',
    },
    {
      referencia:
        'Cuesta Santos, A. (2010).<i> Gestión del talento humano y el conocimiento</i>. Ecoe Ediciones.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=110',
    },
    {
      referencia:
        'Louffat, E. (2017). <i>Reclutando y seleccionando al personal</i>. Pearson Educación.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10379',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
