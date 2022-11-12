<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Instrumentos de diagnóstico y temas de capacitación
    .bg3       
      .row.justify-content-center.align-items-start.mb-4       
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/57.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Ahora, es tiempo de hablar sobre las diversas técnicas que permiten realizar en una empresa, el diagnóstico y análisis de las competencias a desarrollar o fortalecer, a través del programa de capacitación y, para ello, lo invitamos a ver el siguiente video.

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .row.justify-content-center.align-items-center        
        .col-lg-10
          .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
            p(data-aos="fade-down").mb-0 Ahora, al aplicar las diferentes técnicas de recolección de información que permitan generar un diagnóstico de necesidades de capacitación, se generan múltiples temas que es necesario inventariar para lograr revisar los que son comunes entre áreas y los que son específicos. Esto permitirá, dentro de la planeación, proyectar los proveedores a utilizar y toda la logística a emplear, para el desarrollo de la formación. 

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/58.png', alt='')         
      .col-lg-8.my-3
        p(data-aos="fade-down") Cuando se tiene este diagnóstico, se genera el plan de capacitación, el cual se debe caracterizar por lo siguiente:
        ul.lista-ul.ps-2
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Aumento en la eficacia organizacional.
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Mejoramiento en la imagen de la empresa.
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Mejoramiento en el clima organizacional.
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Aumento en la eficiencia.
          li 
            i.fas.fa-angle-right.colorv
            p.mb-0 Mejoramiento en la relación empresa frente a empleados.        
        p(data-aos="fade-down") Y algo importante, debe tener la aprobación de la gerencia de la empresa.             
</template>

<script>
export default {
  name: 'Tema2',
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
