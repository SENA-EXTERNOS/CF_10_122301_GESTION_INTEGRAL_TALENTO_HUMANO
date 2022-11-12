<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo4
    .bloque-fondo5
      .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
        .titulo-principal__numero
          span 3
        h1 Presupuesto, logística, programación de actividades y proveedores
      .row.justify-content-center.align-items-start.mb-4
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='')        
        .col-lg-8.my-3
          p(data-aos="fade-down") La divulgación de gestión interna permite transmitir información relevante para todo el personal, tanto administrativo, operativo, de servicio al cliente o gerencial, la cual hace posible divulgar la gestión interna, como políticas, directrices, estrategias, lineamientos, actividades, dinámicas, formatos, circulares y comunicados generales.
          .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Ese presupuesto de capacitación debe ser eficiente y tener en cuenta factores como: objetivos a lograr, tipo de capacitación (presencial o virtual), materiales, frecuencia, personal a capacitar, intensidad (necesidad de reemplazos de personal), evaluación de aprendizaje, recursos, duración, plan de contingencias, entre otros elementos a considerar.    

    p(data-aos="fade-down") Luego, está la logística, proceso lógico que se aplica para establecer, guiar y controlar las actividades inherentes de un proceso dentro de la organización.   

    p(data-aos="fade-down").mb-5 Teniendo en cuenta el proceso de capacitación, es necesario que el área de gestión de talento humano, establezca una programación donde estime cada requerimiento de dicho proceso; en esta planeación, tendrá en cuenta las siguientes acciones:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/63.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Definición de la modalidad de capacitación. 
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left")  Adquisición del espacio físico o virtual para realizar la capacitación. 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.svg', alt='')      
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/65.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Reclutamiento del personal capacitador. 
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left") Garantizar la disponibilidad de recursos (materiales) para la capacitación. 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.svg', alt='')    
          .row.justify-content-center.align-items-center
            .col-lg-3.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.svg', alt='')            
            .col-lg-9.text-start.order-lg-2.my-3
              p(data-aos="fade-right") Organización de cronogramas (días, horas) para ejecutar la capacitación.
          .row.justify-content-center.align-items-center
            .col-lg-9.my-3
              p(data-aos="fade-left") Garantizar que la capacitación se realice conforme a la planeación (tiempo, espacio y recursos). 
            .col-lg-3.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/68.svg', alt='') 

      .row.justify-content-center.align-items-start.mb-4       
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/69.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Y, de acuerdo con el tipo de capacitación que se ofrecerá, se necesitará contar con el profesional o experto en el área respectiva; para esto, la organización debe definir el perfil profesional necesario para tal capacitación. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10.up(data-aos="fade-left")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/70.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.mb-0 El capacitador seleccionado debe contar con la formación y la experiencia adecuadas para dirigir dicho proceso. Las empresas deben realizar el proceso de identificación y selección de dicho capacitador, apuntando a satisfacer la necesidades identificadas en sus trabajadores y, en algunos casos, contratar el capacitador específico y, en otros, puede identificar un experto dentro de la misma organización.


    p(data-aos="fade-down").mb-5 Para concluir, se puede decir que la programación de actividades y la agenda de trabajo, determinan el tiempo de ejecución de cada una de las tareas a realizar, asignando:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-center.mb-5           
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/71.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4 Duración 
                p.mb-0 Fechas de inicio y fin. 
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/72.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4 Recursos 
                p.mb-0 Materiales, personas, servicios, productos. 
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/73.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                h4 Orden 
                p.mb-0 Secuencia en que se llevarán a cabo estas tareas.

    .row.justify-content-center.align-items-start.mb-4 
      .col-lg-5.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/74.svg', alt='')        
      .col-lg-7.my-3
        p(data-aos="fade-down") Igualmente, le permitirá detectar factores externos o internos que impactan en el desarrollo del proyecto, ajustando las variables necesarias para poder concluir el trabajo en el tiempo establecido.

        p(data-aos="fade-down") La administración del tiempo a través de agendas y planificadores, bien sean escritos o digitales, permiten no sobrecargar la actividad mental, posibilita organizar el tiempo para aprovechar al máximo las tareas de cada día, para lograr los objetivos. Asimismo, facilita también la distribución del trabajo entre proyectos de distinta naturaleza, asegurando el cumplimiento de las tareas, de acuerdo con las prioridades.
 
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Y el seguimiento busca garantizar el cumplimiento de las metas de un proyecto o proceso, las cuales son las acciones correctivas o planes de acción que se estén ejecutando y validar en qué etapa se encuentran.
    .row.justify-content-start.align-items-center.mb-5           
      .col-auto
        .bgp.p-1(data-aos="fade-right")
          h4(data-aos="fade-down").mb-0 Proveedores de capacitación 
    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3
        p(data-aos="fade-down") En la administración de un plan de capacitación, es importante contar con una base de datos de proveedores que ofrezcan un amplio abanico de temas de capacitación y que permita suplir las necesidades detectadas. Dependiendo del tipo de negocio de la empresa, se deberá buscar proveedores especializados que ofrezcan herramientas técnicas que puedan aportar al desarrollo de conocimientos específicos propios de la organización. 
        .cajon.color-primario.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Invitar a un proveedor para que cotice el servicio de capacitación, implica que defina claramente: el tema de la formación, la intensidad horaria, el capacitador, la estrategia metodológica a utilizar y, por supuesto, el costo de la misma, para determinar si se ajusta al presupuesto autorizado. 
        p(data-aos="fade-down") Con esta información, se debe plasmar una evaluación a proveedores como requisito para revisar y retroalimentar la ejecución del servicio. Para seleccionar al proveedor, se debe hacer una evaluación y seguimiento de los primeros servicios que se le contraten; si la empresa se encuentra conforme con el servicio que presta, ingresaría a la base de datos de proveedores de la empresa; de lo contrario, se le hace una solicitud de mejora para volver a evaluarse. Al proveedor que ingrese a la base de datos de proveedores, se le deberá aplicar una evaluación continua, supervisando que los servicios por los que se contrató al inicio, sigan siendo los adecuados durante el proceso.

      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png', alt='')

    .row.justify-content-center.align-items-start
      .col-lg-10
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 Ha finalizado el estudio de este recurso educativo. Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros. 
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
