<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo1
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Capacitación o formación empresarial

    .bg1    
      .row.justify-content-center.align-items-start.mb-5           
        .col-lg-2.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.svg', alt='')    
        .col-lg-10.my-3
          p(data-aos="fade-down") Para empezar, es necesario hablar sobre la capacitación o formación empresarial, la cual es la respuesta a una necesidad que tienen las organizaciones o empresas para tener un personal calificado y productivo. Es decir, es el desarrollo de tareas con el fin de mejorar el rendimiento productivo, al incrementar la capacidad de los trabajadores, mediante la mejora de las habilidades, actitudes y conocimientos.  

      .row.justify-content-center.align-items-start.mb-4
        .col-lg-8.my-3
          p(data-aos="fade-down") De hecho, la capacitación del personal debe ser coherente y en correspondencia con determinadas necesidades que van desde lo individual hasta lo social, concluyendo, de esta manera, que es vital porque contribuye al desarrollo personal y profesional de las personas y aporta importantes ventajas a la empresa.

          p(data-aos="fade-down") Por otro lado, la formación tiene la función de mejorar el presente y ayudar a construir un futuro en el que el equipo de trabajo sea constantemente motivado por la organización y debe realizarse como un proceso, siempre relacionado con el puesto y objetivos organizacionales.                
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')  

      p(data-aos="fade-down").mb-5 Antes de continuar, es preciso conocer tres conceptos que debemos tener claros: 


      .row.justify-content-center.align-items-start.mb-4
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/5.svg', alt='')        
        .col-lg-7.my-3
          LineaTiempoD.color-primario(data-aos="fade-left")
            .row.justify-content-center.align-items-start(numero="A" titulo="Capacitación")
              p Es una actividad que debe ser sistémica, planeada, continua y permanente, que tiene el objetivo de proporcionar el conocimiento necesario y desarrollar las habilidades (aptitudes y actitudes) precisas para que las personas que ocupan un puesto en las organizaciones, puedan desarrollar sus funciones y cumplir con sus responsabilidades de manera eficiente y efectiva, esto es, en tiempo y en forma.  
            .row.justify-content-center.align-items-start(numero="B" titulo="Desarrollo")
              p Se refiere a los conocimientos que se le proporcionan al empleado, con el propósito de prepararlo para responsabilidades futuras, es decir, se tiene detectado que la persona tiene potencial para ocupar mejores puestos, o puestos con mayores niveles de responsabilidades, de tal forma que se le capacita, con el objetivo de prepararlo para promociones futuras.    
            .row.justify-content-center.align-items-start(numero="C" titulo="Entrenamiento")
              p Es la puesta en práctica de los conocimientos adquiridos en las sesiones de capacitación, con el propósito de adquirir o desarrollar habilidades psicomotrices en los trabajadores, para que desempeñen mejor su trabajo.                                          
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-10.up(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/6.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 En muchas empresas, hay personas que consideran la formación como un gasto innecesario; sin embargo, es una de las mayores inversiones que una empresa puede hacer para promover el desarrollo de las personas y alcanzar los objetivos organizacionales, porque cuanto mayor sea el nivel de formación y cualificación de los empleados, mayor será su nivel de productividad, tanto cualitativa como cuantitativamente. En este sentido, los programas de capacitación o formación profesional, se encuentran entre las inversiones más rentables, debido a que si la empresa no progresa de manera uniforme, sufrirá consecuencias como: estancamiento, fracaso, o falta de competitividad en el mercado. 

      p(data-aos="fade-down") La continuidad en la capacitación del personal, permite que los empleados planifiquen, mejoren y realicen sus actividades de manera más eficiente, en cooperación con otros miembros de la organización; por lo tanto, es muy adecuado construir un equipo de alto rendimiento y realizar un trabajo experto, de acuerdo con los mejores estándares de calidad.  
      p(data-aos="fade-down").mb-5 En general, los principales beneficios que una organización obtiene de la capacitación, son los siguientes:
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12.up      
      SlyderF.custom.mb-5(columnas="col-lg-3 col-md-4")(data-aos="fade-left")
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/7.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Cumplimiento de normatividad. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/8.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Aumentar la productividad y la calidad del trabajo. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/9.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Incrementar la rentabilidad. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/10.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Disminuir la rotación de personal. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/11.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Mejorar los estándares de reclutamiento y selección de personal. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/12.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Levantar la moral de los trabajadores. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/13.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Ayudar a resolver problemas concretos en el día a día. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/14.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Disminuir la necesidad de supervisión. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/15.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Prevenir accidentes de trabajo. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/16.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Mejorar la estabilidad de la organización y su flexibilidad. 
        .tarjeta-avatar
          img.img-a.img-t.img-w1(src='@/assets/curso/temas/17.svg' alt='AvatarTop')
          div.text-center.bg2.p-2.pt-5.h-100
            p Lograr que el personal se sienta identificado con la empresa.

    p(data-aos="fade-down").mb-5 Algunos de los temas en los cuales se puede capacitar a los empleados, se presentan en la <i>Figura 1.</i>

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Figura 1. 
          span Temas en los cuales se puede capacitar 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/18.svg', alt='')        
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/19.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Es necesario tener en cuenta que todo plan de capacitación debe definir el alcance que va a generar; esto implica determinar a quién va dirigido y quiénes son las personas que van a participar en el programa de capacitación. Por ejemplo, el alcance puede ser a un área determinada, a una regional, a todos los trabajadores del país, entre otros. 
    p(data-aos="fade-down").mb-5 Ahora, el plan de formación debe tener unos objetivos que suelen ser relevantes para las brechas de habilidades que la empresa quiere cubrir y contribuir para el desarrollo del talento; por lo tanto, estos objetivos deben:

    .row.justify-content-center.align-items-center      
      .col-lg-10
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/20.png', alt='')

          .tarjeta.color-primario.p-3(x="83.5%" y="43%" numero="+")
            p.mb-0 Uno de los objetivos específicos para capacitar al personal es la adquisición y actualización de las habilidades blandas y duras. Las empresas líderes reconocen que los equipos crecen, son más productivos y se sienten más motivados dentro de una organización que promueve la cultura del aprendizaje.     
          .tarjeta.color-primario.p-3(x="83.5%" y="60.5%" numero="+")
            p.mb-0 Uno de los objetivos fundamentales de la capacitación es el aumento de la productividad. Esto se da gracias a que los empleados fortalecen habilidades blandas como la comunicación efectiva o la gestión del tiempo, lo que les permite adquirir herramientas prácticas que aumentan su productividad.        
          .tarjeta.color-primario.p-3(x="83.5%" y="79%" numero="+")
            p.mb-0 Atraer talento para aumentar el crecimiento de una empresa es fundamental, pero lo es más retener ese talento. 

    .row.justify-content-center.align-items-center        
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-5(data-aos="flip-down")
          p(data-aos="fade-down").mb-0 En este punto surge el interrogante, ¿qué ganan las empresas y los empleados con la capacitación en habilidades y competencias?

    p(data-aos="fade-down").mb-5 Existen cuatro puntos importantes que a resaltar:

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Satisfacción en el ambiente de trabajo y compromiso hacia la empresa")
            .col-10
              P Una cultura educativa que aumente la moral, el entusiasmo y el trabajo duro de los empleados. Las actividades de formación profesional son las que estimulan el crecimiento profesional y esto es algo que cualquier colaborador apreciará.     
          .row.justify-content-center.align-items-center(titulo="Conocimientos actualizados para crecer")
            .col-10
              P Las organizaciones que apuestan por capacitar a sus equipos, aseguran que se mantengan a la vanguardia de nuevas habilidades, conocimientos y herramientas tecnológicas que contribuyan al desempeño de las operaciones del día a día.  
          .row.justify-content-center.align-items-center(titulo="Reducción en la rotación de empleados")
            .col-10
              P Uno de los beneficios que aprecian las empresas que invierten en formación, es la reducción de la rotación laboral. A nivel mundial, la rotación alcanza el 10.9 %, siendo el sector tecnológico el más afectado.  
          .row.justify-content-center.align-items-center(titulo="Contar con equipos más adaptables e innovadores")
            .col-10
              P Fomentar la formación especializada dentro de la empresa, crea una cultura de aprendizaje continuo y esto beneficia a la empresa, porque los equipos se sienten motivados para generar nuevas ideas, ser más flexibles, encontrar formas de adaptarse a los cambios tecnológicos o sentirse seguros para liderar nuevos proyectos.                                                
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/21.png', alt='')  

      .row.justify-content-center.align-items-start.mb-4
        .col-lg-4.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/22.png', alt='')          
        .col-lg-8.my-3
          p(data-aos="fade-down") Es importante tener presente que existen diferentes tipos de aprendizaje, o sea, la forma en que una persona aprende según diferentes teorías, enfoques y modelos pedagógicos: aprendizaje con propósito, aprendizaje exploratorio o aprendizaje de memoria. Mientras, los estilos de aprendizaje analizan las características emocionales, cognitivas y fisiológicas que sirven como indicadores sobre cómo las personas responden a la forma en que se les presenta el contenido en la capacitación: estilo de aprendizaje visual, estilo de aprendizaje auditivo y estilo de aprendizaje kinestésico, los cuales describen la predilección y habilidad de las personas para funcionar en su entorno.         

    p(data-aos="fade-down").mb-5 Cada uno de ellos habla de: 

    .row.justify-content-center.align-items-center      
      .col-lg-12
        ImagenInfograficaC.color-acento-botones.mb-5(data-aos="zoom-in")
          template(v-slot:imagen)
            figure
              img.img-a.img-t(src='@/assets/curso/temas/23.svg', alt='')

          .tarjeta.color-primario.p-3(x="50%" y="37%" numero="+")
            p.mb-0 Las personas tienden a recordar y aprender mejor la información, siguiendo y recordando una explicación oral. Es exitoso al aprender idiomas y música.  
          .tarjeta.color-primario.p-3(x="39%" y="89%" numero="+")
            p.mb-0 Las personas tienden a pensar en imágenes, y las relacionan con ideas o conceptos, absorben información con rapidez y establecen relaciones entre imágenes. Por ejemplo, utilizan un mapa conceptual para recordar ideas o procesos complejos.   
          .tarjeta.color-primario.p-3(x="61.5%" y="89%" numero="+")
            p.mb-0 Las personas aprenden, relacionando sus sensaciones y movimientos: recitar o aprender información al caminar o realizar un experimento en un laboratorio. Es un sistema más lento, pero genera un aprendizaje difícil de olvidar.                           
    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/24.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Recuerde, estos estilos son predominantes y complementarios entre sí, no son mutuamente excluyentes, y es una cuestión básica a tener en cuenta en los programas de formación que ofrecen las empresas. Conocer cómo aprenden los empleados, permite diseñar programas de formación y ambientes de trabajo que conlleven a la productividad y al talento humano moderno. 

    .row.justify-content-center.align-items-start.mb-5           
      .col-lg-12      
        .crd.crd--avatarHorizontal.crd--first.py-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/25.svg", alt="alt").img100
            .col
              h5 Aprendizaje significativo
              p Tipo de aprendizaje en el que una persona integra nueva información y la conecta con su conocimiento previo, es decir, con lo que ya sabe, adapta y reconstruye la información en todas las etapas del proceso. 
        .crd.crd--avatarHorizontal.py-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/26.svg", alt="alt").img100
            .col
              h5 Aprendizaje cooperativo
              p Tipo de aprendizaje en el que la persona realiza actividades en grupos de hasta cinco integrantes que desempeñan diferentes roles y funciones y la mayor parte del proceso es dirigido y organizado por el capacitador. La heterogeneidad y la diferencia entre los que se van a capacitar, se utilizan como un aspecto positivo para enriquecer el aprendizaje de cada persona y generar una reflexión continua sobre los éxitos compartidos.
        .crd.crd--avatarHorizontal.crd--med.py-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/27.svg", alt="alt").img100
            .col
              h5 Aprendizaje colaborativo
              p Tipo de aprendizaje similar al cooperativo, la diferencia es que en este se tiene una temática asignada y las personas eligen la metodología que trabajarán, destacando así sus propias habilidades, a través del trabajo en grupo.
        .crd.crd--avatarHorizontal.py-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/28.svg", alt="alt").img100
            .col
              h5 Aprendizaje emocional
              p Se refiere al proceso mediante el cual los individuos adquieren conocimientos, habilidades y actitudes que les permiten reconocer y manejar sus emociones de manera más efectiva. Fomentar este tipo de aprendizaje tiene enormes beneficios, porque se reducen los conflictos, se promueve la sana convivencia y se mejora el rendimiento laboral.
        .crd.crd--avatarHorizontal.crd--med.py-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/29.svg", alt="alt").img100
            .col
              h5 Aprendizaje observacional
              p También se conoce como aprendizaje imitativo, indirecto o modelado; se fundamenta en aprender a realizar una tarea u oficio, reproduciendo lo que se ha visto. Puede suceder de manera intencional y consciente, cuando un individuo hace algo para dar ejemplo a los demás y, puede suceder incluso, de manera inconsciente.
        .crd.crd--avatarHorizontal.py-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/30.svg", alt="alt").img100
            .col
              h5 Aprendizaje experiencial
              p Proceso mediante el cual una persona puede construir su propio conocimiento y desarrollar habilidades, actitudes y valores al atravesar diferentes situaciones y acontecimientos. El aprendizaje se logra cuando el individuo se involucra en experiencias que son significativas y útiles para él, e incluyen acción, observación, razonamiento y corrección de errores.
        .crd.crd--avatarHorizontal.crd--med.py-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/31.svg", alt="alt").img100
            .col
              h5 Aprendizaje por descubrimiento
              p Tipo de aprendizaje en el que el sujeto participa activamente en el proceso; por lo tanto, el contenido no se presenta en su forma final, sino que debe descubrirse por sí mismo, por lo que se fomenta y estimula la curiosidad. Los capacitadores asumen el papel de moderadores, brindando a los empleados las herramientas que necesitan para ubicarse en el camino hacia el logro de sus objetivos.
        .crd.crd--avatarHorizontal.py-4(data-aos="fade-left")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/32.svg", alt="alt").img100
            .col
              h5 Aprendizaje memorístico
              p También conocido como aprendizaje por repetición, consiste en memorizar conceptos o datos; es el resultado de acciones mecánicas y de repetición, por lo que este tipo de aprendizaje no se considera verdaderamente significativo.                
        .crd.crd--avatarHorizontal.crd--last.py-4(data-aos="fade-right")
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/33.svg", alt="alt").img100
            .col
              h5 Aprendizaje asociativo
              p Tipo de aprendizaje donde las personas asocian un estímulo con otro estímulo o comportamiento. Aunque esta forma de aprender requiere mucho trabajo, es uno de los tipos de aprendizaje más ricos, profundos y con mejores resultados.

      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10.up(data-aos="fade-left")
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/34.png')})`}"
            )
            .bloque-texto-g__texto.p-4.py-5
              p.mb-0 El diseño del programa de capacitación, posee métodos y técnicas de formación, los cuales se refieren a diferentes formas de organizar, implementar y ejecutar los procesos de enseñanza, con el fin de lograr los objetivos de aprendizaje previstos. La elección de un determinado método y técnica, depende principalmente de los recursos disponibles, de los objetivos de aprendizaje que se persiguen al realizar la formación y, sobre todo, del perfil de la persona o personas que se capacitarán.

    p(data-aos="fade-down").mb-5 Primero, se abordará cuáles son los métodos de capacitación:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        PasosA.color-acento-contenido(tipo="l")
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Capacitación en el trabajo
              p(data-aos="fade-left") Se refiere a la formación impartida en el curso de las actividades profesionales de una persona, sea por su superior inmediato o por un entrenador profesional. 
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/35.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/36.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Capacitación fuera del trabajo
              p(data-aos="fade-right") Esta capacitación se brinda en centros especializados, internos o externos a la empresa, de manera sistemática y de acuerdo con un programa estructurado. 
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Capacitación presencial
              p(data-aos="fade-left") La instrucción presencial es un método tradicional de enseñanza y aprendizaje, en el que el capacitador interactúa directamente con el o los participantes, durante el proceso. 
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/37.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/38.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Capacitación no presencial
              p(data-aos="fade-right") El entrenamiento incluye todos los estilos de instrucción que no requieren la presencia del capacitador directo en el sitio de aprendizaje, o la interacción directa del facilitador con los participantes, como el aprendizaje a distancia y los programas de autoformación. 
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Aprendizaje pasivo
              p(data-aos="fade-left") Se asocia a métodos de formación en los que el participante es un receptor pasivo de la información impartida por el capacitador, sea directa o indirectamente. 
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/39.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/40.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Aprendizaje activo 
              p(data-aos="fade-right") Se aplica en modalidades formativas que exigen a los participantes pensar y actuar para descubrir conocimientos. El papel del capacitador y los medios de instrucción se basan en facilitar, dirigir y motivar el aprendizaje siendo el participante, en este caso, el protagonista.                             
          .row.justify-content-center.align-items-center
            .col-lg-8.my-3
              h4(data-aos="fade-left") Capacitación grupal
              p(data-aos="fade-left") Se refiere a métodos de formación en los que el sujeto de aprendizaje está conformado por un grupo de participantes y la enseñanza se realiza de forma colectiva. 
            .col-lg-4.my-3 
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/41.png', alt='')            
          .row.justify-content-center.align-items-center
            .col-lg-4.order-1.my-3
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/42.png', alt='')            
            .col-lg-8.text-start.order-lg-2.my-3
              h4(data-aos="fade-right") Capacitación individual
              p(data-aos="fade-right") Se trata de una formación adaptada a las características individuales de cada empleado, teniendo en cuenta sus potencialidades y limitaciones en cuanto a conocimientos previos, experiencia, intereses y estilos de aprendizaje.
       
    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8       
        .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
          h5 Tabla 2. 
          span Recursos de acuerdo con el tipo de emergencia que se puede presentar en una empresa  
        .tabla-a.color-secundario.mb-5(data-aos="fade-left") 
          table.text-center
            thead
              tr.text-bold.bgt2head
                th(colspan='3') Técnicas de capacitación
            tbody
              tr.bgt1
                td aprendizaje en acción 
                td rotación de puestos
                td seminario taller
              tr.bgt2
                td asesoría y reemplazo 
                td dramatización (role playing) 
                td simposio
              tr.bgt1
                td aula expositiva 
                td e-learning 
                td In-basket (bandeja de entrada) 
              tr.bgt2
                td capacitación a distancia 
                td entrenamiento de asimilación 
                td instrucción programada 
              tr.bgt1
                td comisiones 
                td entrenamiento por simuladores 
                td introducción de grupos 
              tr.bgt2
                td conferencia 
                td entrevista pública 
                td juegos de estrategia  
              tr.bgt1
                td debate dirigido 
                td estudio de caso 
                td lectura comentada 
              tr.bgt2
                td debate público 
                td estudio dirigido 
                td logia  
              tr.bgt1
                td panel 
                td foro 
                td mesa redonda 
              tr.bgt2
                td programa de internado 
                td seminario 
                td modelo de comportamiento 

    p(data-aos="fade-down").mb-5 Y para el desarrollo y complemento de la capacitación, se utilizan apoyos y ayudas didácticas, como son:

    SlyderF.custom.mb-5(columnas="col-lg-3 col-md-4")(data-aos="fade-left")
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/43.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Diálogo simultáneo.   
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/44.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Lectura comentada.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/45.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Debate dirigido.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/46.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Tormenta de ideas.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/47.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Dramatización.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/48.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Técnica expositiva.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/49.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 El método del caso.  
      .tarjeta.tarjeta--slyder.p-4
        .row.justify-content-center.mb-3
          .col-8
            img.img-a.img-t.mb-3.mt-4(src="@/assets/curso/temas/50.svg", alt="alt").img100.m-auto     
        p.text-center.mb-0 Las capacitaciones desde la experiencia.  

    p(data-aos="fade-down") Una vez ejecutada la capacitación, se debe aplicar la última fase del proceso, evaluar los resultados.

    p(data-aos="fade-down").mb-5 En esta fase se consideran los siguientes aspectos:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .row.justify-content-center.mb-5           
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/51.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                p.mb-0 Identificar si la capacitación desarrollada produjo los cambios deseados en la conducta de los empleados.
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/52.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                p.mb-0 Constatar si los resultados de la capacitación tienen estricta relación con la planeación y logro de metas de la empresa.
          .col-lg-4.col-md-6.col-sm-8.my-3(data-aos="fade-left")
            .tarjeta-avatar
              img.img-a.img-t.img-w(src='@/assets/curso/temas/53.svg' alt='AvatarTop')
              div.text-center.bg2.p-4.pt-5.h-100
                p.mb-0 Validar si la técnica de capacitación aplicada fue eficaz, para alcanzar los objetivos trazados.

    .row.justify-content-center.align-items-start.mb-4
      .col-lg-8.my-3 
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg6")
          .row.justify-content-center.align-items-center(titulo="Evaluación en el nivel organizacional")
            .col-10
              P En este nivel, los procesos de capacitación deben mostrar resultados como: 
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
                 
          .row.justify-content-center.align-items-center(titulo="Evaluación a nivel de talento humano")
            .col-10
              P En este nivel, los procesos de capacitación deben mostrar resultados como: 
              ul.lista-ul.ps-2
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Reducción en la rotación del personal.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Disminución del ausentismo.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Mejoramiento en la eficiencia individual de los empleados.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Mejoramiento en las habilidades personales.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Aumento en los conocimientos personales.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Mejoramiento en las actitudes y conductas.                
          .row.justify-content-center.align-items-center(titulo="Evaluación a nivel de tareas y operaciones")
            .col-10
              P En este nivel, los procesos de capacitación deben mostrar resultados como: 
              ul.lista-ul.ps-2
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Aumento en la productividad.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Mejoramiento en la atención al cliente.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Reducción de índices de accidentalidad.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Reducción de índices de mantenimiento de equipos y maquinaria.
                li 
                  i.fas.fa-angle-right.colorv
                  p.mb-0 Mejoramiento en la calidad de productos y servicios.               
                                             
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')

    .row.justify-content-center.align-items-start       
      .col-lg-2.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg', alt='')    
      .col-lg-10.my-3
        p(data-aos="fade-down") Si no se alcanzó el objetivo trazado, es preciso generar acciones de mejora, en procura de elevar el nivel alcanzado o el conocimiento aportado, que impacte en el logro de los objetivos organizacionales. 

        p(data-aos="fade-down") Cuando la empresa es muy grande, es necesario establecer un comité de capacitación, en el cual se establecen las variables a tener en cuenta para el desarrollo del programa de capacitación de la organización. A su vez, es preciso tener en cuenta los planes de contingencia y estar preparados para afrontar los cambios imprevistos en la planeación proyectada.
</template>

<script>
import ImagenInfograficaC from '../components/ImagenInfograficaC.vue'
export default {
  name: 'Tema3',
  components: {
    ImagenInfograficaC,
  },
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
