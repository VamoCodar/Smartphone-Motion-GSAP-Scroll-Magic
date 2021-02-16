 //var videoHeight = document.querySelector("#video").getBoundingClientRect.height
 let video = document.querySelector("#video")
 let wrapper = document.querySelector(".wrapper")
 let celular = document.querySelector(".celular")
 let body = document.querySelector("body")
 //timelines GSAP
 const timeline = new TimelineMax();
 const animationResize = new TimelineMax();
 //variaveis Animação do celular
 let scaleVariable;
 let xInicial;
 let offsetFix = -230;
 var texto = document.querySelector('.text__animation');
 let tela = window.innerWidth;
 //controlador
 let controller = new ScrollMagic.Controller();
 //timeline

 //VARIAVEIS ANIMAÇÃO SEÇÃO 2
 var triggerSecao2 = .4;
 let tempoSecaoFixa = 1450; // tempo que segunda seção fica fixa
 let tempoAnimaoSegundaSecao = 800; //tempo que dura a animação

//VARIAVEIS ANIMAÇAO SEÇÃO FUTURO 
let tempoSecaoPresenteFixa = 1000;
let tempoAnimacaoPresente = 550;
let trigerSecaoPresente = .4;


 //plugin gradiente ======================
 gsap.registerPlugin({
     name: "gradient",
     init(target, value) {
         let forceDeg = value => ~value.indexOf("deg") ? value : (value = value.split("(")) && value.shift() + "(180deg, " + value.join("(");
         this.add(target.style, "backgroundImage", forceDeg(window.getComputedStyle(target).backgroundImage + ""), forceDeg(value));
     }
 });

 //verificação scale +++ =================

 function scale() {
     if (tela <= 400) {
         scaleVariable = 2.5
         xInicial = 0
         triggerSecao2 = .3;

     } else if (tela <= 540) {
         scaleVariable = 3
         xInicial = 0
         triggerSecao2 = .3;

     } else if (tela <= 720) {
         scaleVariable = 6
         xInicial = -100
         triggerSecao2 = .3;


     } else if (tela <= 992) {
         scaleVariable = 6
         xInicial = 0
     } else if (tela <= 1100) {
         scaleVariable = 6
         xInicial = 200

     } else if (tela <= 1366) {
         xInicial = 250
         scaleVariable = 9
         offsetFix = -130

     } else if (tela <= 1600) {
         scaleVariable = 12
         xInicial = 300
         offsetFix = -230


     } else if (tela <= 2000) {
         scaleVariable = 13
         xInicial = 150

     } else if (tela >= 2400) {
         scaleVariable = 20
         xInicial = 200

     }


 }
 scale()


 //SET  ==========================

 gsap.set(".artificial__2 h2 ", {
     x: "100%",
     opacity: 0,

     //  display: "none",
     /*  scaleX: 0,
      scaleY: 1.5, */
 })

 /*  gsap.set(".artificial__1", {
      x: 0,
  })
  */
 gsap.set(".artificial__2 p", {
     x: "100%",
     opacity: 0,


 })
 gsap.set(".artificial__2 img", {
     x: "100%",
     opacity: 0,

 })



 /* SEÇÃO ANIMAÇAO NOVA ======================== */
 const animationSecao = new TimelineMax()
     .to(".artificial__1 h2", .2, {
         x: "-100%",
         opacity: 0,
         //  ease: "none",
         //  scaleX: 0,
         //  scaleY: 1.5,
         // visibility: "hidden",
     })
     .to(".artificial__1 p", .2, {

         x: "-100%",
         opacity: 0,
         //  scaleX: 1,
         //  scaleY: 1,
         //y: 0,
         //transformOrigin: "center",
         // display: "block",
     }, "-=.150")
     .to(".artificial__1 img", .2, {

         x: "-100vw",
         opacity: 0,
         //  scaleX: 1,
         //  scaleY: 1,
         //y: 0,
         //transformOrigin: "center",
         // display: "block",
     }, "-=.2")

     .to(".artificial__2 h2", .2, {
         // ease: "none",
         opacity: 1,
         x: 0,

     }, "-=.050")

     .to(".artificial__2 p", .1, {
         opacity: 1,
         x: 0,
     }, "-=.1")
     .to(".artificial__2 img", .1, {
         opacity: 1,
         x: 0,
     }, "-=.1")




 /* let animationP = new TimelineMax()

     .to(".artificial__1", .2, {
         ease: "none",
         opacity: 0,
         x: "-100%",

     })

     .to(".artificial__2", .1, {
         opacity: 1,
         x: 0,
     }) */





 //wrapper celular
 //estado inicial do celular
 gsap.set(".secao__celular", {
     scale: scaleVariable, //SCALA QUE O celular recebe
     x: xInicial,
 })

 //scala final
 animationResize
     .to(".secao__celular", {
         scale: 1,
         x: 0,
     });


 //estado inicial titulo
 let inicial = TweenMax.set("#text-principal", {
     y: 0,
     opacity: 1,
 });


 let menuAnimation =
     new TimelineMax()
     .from(".menu a", .3, {
         y: -100,
         opacity: 1,
     })
     .staggerFrom(".menu ul li", .3, {
         y: -100,
         opacity: 1,
     }, .05, "-=0.2")


 //text estado final
 const resizeText = TweenMax.to("#text-principal", {
     y: "-20%",
     opacity: 0,
 });


 //fixado SCENE ==================================
 var sceneFix = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         triggerHook: 0,
         duration: 1330,
         offset: offsetFix,

     })
     /*  .addIndicators({
          name: "fixo"
      }) */

     .setPin(".wrapper", {
         pushFollowers: false,
         spacerClass: "#trigger1",
     })

 var start = sceneFix.scrollOffset();


 //scale SCENE ===================================
 var sceneScale = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 700,
         offset: 390,
         triggerHook: 0,


     })

     .setTween(animationResize)
 /*  .addIndicators({
      name: "RESIZE celular"
  }); */


 // TITULO SCENE ===============================
 var sceneTitle = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 350,
         offset: 20,
         triggerHook: 0,
     })
     // .setClassToggle("#high3", "active") // add class toggle
     .setTween(resizeText)
 /*  .addIndicators({
      name: "RESIZE text"
  }) */


 // SECAO SCENE ===============================
 var secaoTitleFixed = new ScrollMagic.Scene({
         triggerElement: ".videoFixed",
         duration: tempoSecaoFixa,
         offset: 0,
         triggerHook: triggerSecao2,
     })
     // .setClassToggle("#high3", "active") // add class toggle
     //  .setTween(animationSecao)
     .setPin(".videoFixed", {
         pushFollowers: true,
         spacerClass: ".videoFixed",
     })

     .addIndicators({
         name: "secao fixed"
     })


 // SECAO p SCENE ===============================
 // TITULO SCENE ===============================
 //  var secaoP = new ScrollMagic.Scene({
 //          triggerElement: "#videoSection",
 //          duration: 500,
 //          offset: 100,
 //          triggerHook: .4,
 //      })
 //      .setTween(animationP)

 //      .addIndicators({
 //          name: "p",

 //      })
 // .setClassToggle("#high3", "active") // add class toggle

 var secaoTitle = new ScrollMagic.Scene({
         triggerElement: "#videoSection",
         duration: tempoAnimaoSegundaSecao,
         offset: 300,
         triggerHook: triggerSecao2,
     })
     //.setClassToggle("body", "corP") // add class toggle
     .setTween(animationSecao)

     .addIndicators({
         name: "secao"
     })

 var secaoClass = new ScrollMagic.Scene({
         triggerElement: "#videoSection",
         duration: 0,
         offset: 300,
         triggerHook: triggerSecao2,
     })
     .setClassToggle("body", "corP") // add class toggle
     //.setTween(animationSecao)

     .addIndicators({
         name: "class"
     })




 //CLASSE NO BODY SCENE ====================
 var sceneClass = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1090,
         triggerHook: 0,

     })
     .setClassToggle("body", "active")
     /*  .addIndicators({
          name: "body"
      }) */
     .setTween(menuAnimation)


 // FIX SCENE =====================================
 var sceneClassFix = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1090,
         triggerHook: 0,

     })
     .setClassToggle("body", "fixEnd")
 /*   .addIndicators({
       name: "add class fix"
   }) */

 //DEGRADE 1 GSAP ===================================
 const degrade = gsap.to(".degrade", {
     gradient: "linear-gradient(180deg, #081131 2%, #f5f5f5 100%)",
     duration: .2,
     ease: "sine.out",
     //repeat: 3,
     // yoyo: true
 });

 // DEGRADE SCENE ===================================
 var sceneDegrade = new ScrollMagic.Scene({
         triggerElement: "#videoSection",
         duration: 0,
         offset: 300,
         triggerHook: triggerSecao2,

     })
     .addIndicators({
         name: "degrade"
     })
     .setTween(degrade)



 // TYPEWRITTER NO AUTOSTART ===================
 /*  var typewriter = new Typewriter(texto, {
      loop: false,
      autoStart: false,
  }); */


 // TEXTO 1 =================================
 var sceneLetra = new ScrollMagic.Scene({
     triggerElement: "#trigger1",
     duration: 0,
     offset: 1650,
     triggerHook: 0,

 })
 /*  .addIndicators({
      name: "Letra"
  }) */
 /* .setTween(degrade2) */


 /*   .on("start", function typing() {

         var typewriter = new Typewriter(texto, {
             loop: false,
             delay: 65,
         });

         typewriter
             .start()
             .typeString('<strong>Inteligência</strong> Artificial')
             .pauseFor(1200)
             .deleteAll()
             .typeString('')
             //.deleteAll()
             .typeString('<strong>Transformação</strong> Digital')
             .pauseFor(2000)
     });
 */



 // gradiente 2 GSAP ===========================
 const degrade2 = gsap.to("#aprendaSection", {
     duration: 2,
     ease: "sine.out",
     //repeat: 3,
     // yoyo: true
 });

 //TEXTO 2 SCENE ========================================
 const texto2 = document.querySelector(".titulo__presente")

//  var sceneDegrade2 = new ScrollMagic.Scene({
//          //triggerElement: "#trigger1",
//         //  triggerElement: ".futuroAnimation",
//          duration: 0,
//          offset: 0,
//          triggerHook: trigerSecaoPresente,

//      })
//        .addIndicators({
//           name: "degrade-2"
//       }) 
//      .setTween(degrade2)
//  /* .on("start", function typing() { //APLICA TIPEWRITTER NA CENA
//      var typewriter = new Typewriter(texto2, {
//          loop: false,
//          delay: 58,   //timing do tipyng
//          //onCreateTextNode: customNodeCreator,
//      });
//      typewriter
//          .start()
//          .typeString('Se prepare para o futuro')
//          .pauseFor(600)
//          .deleteChars(6)
//          .typeString('<strong> Presente. </strong>')
//  }) */

 gsap.set(".presenteAnimation", {
     y: "-220px"
 })

 const presentefuturoAnimation =
     new TimelineMax()
     .to(".text__futuro", .2, {
         y: "100px",
     })
     .to(".presenteAnimation", .2, {
         y: 0,
     }, "-=0.100")



 // SECAO SCENE ===============================
 var secaoPresenteFixed = new ScrollMagic.Scene({
         triggerElement: ".futuroAnimation",
         duration: tempoSecaoPresenteFixa,
         offset: 0,
         triggerHook: trigerSecaoPresente,
     })
     // .setClassToggle("#high3", "active") // add class toggle
     //  .setTween(animationSecao)
     .setPin(".futuroAnimation", {
         pushFollowers: true,
           spacerClass: "fixoOrna",
     })

     .addIndicators({
         name: "secao fixed"
     })

 var scenePresente = new ScrollMagic.Scene({
         triggerElement: ".futuroAnimation",
         duration: tempoAnimacaoPresente,
         offset: 200,
         triggerHook: trigerSecaoPresente,
     })
     //.setClassToggle("body", "corP") // add class toggle
     .setTween(presentefuturoAnimation)

     .addIndicators({
         name: "FUTURO "
     })


 //controlador 
 controller.addScene([
     sceneFix,
     sceneScale,
     sceneTitle,
     sceneClass,
     sceneClassFix,
     sceneDegrade,
    //  sceneLetra,
    //  sceneDegrade2,
     secaoTitle,
     secaoTitleFixed,
     secaoClass,
     secaoPresenteFixed,
     scenePresente,
 ]);

 window.addEventListener("resize", scale)
 //window.addEventListener("scroll", dataMenu)
 // window.addEventListener("resize", restart1)