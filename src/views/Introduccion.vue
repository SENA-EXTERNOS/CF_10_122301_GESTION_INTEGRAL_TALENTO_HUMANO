<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde conocerá cuáles son las acciones que se deben realizar para la capacitación y desarrollo del talento humano, haciendo uso de estilos de aprendizaje, métodos y técnicas, apoyos y ayudas didácticas, implementación, evaluación, financiamiento, instalación del comité y planes de contingencia, permitiendo ejecutar, de manera sistemática, las acciones de capacitación para el desarrollo del talento humano, teniendo en cuenta las políticas de la organización y la normativa. 
    p(data-aos="fade-down").mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9ZsztYOk2JM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
