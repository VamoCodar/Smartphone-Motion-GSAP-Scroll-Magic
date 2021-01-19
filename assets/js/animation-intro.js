 //var videoHeight = document.querySelector("#video").getBoundingClientRect.height
 let video = document.querySelector("#video")
 let wrapper = document.querySelector(".wrapper")
 let celular = document.querySelector(".celular")
 let body = document.querySelector("body")
 const timeline = new TimelineMax();
 const animationResize = new TimelineMax();
 let scaleVariable;
 let xInicial;
 let offsetFix = -230;
 var texto = document.querySelector('.text__animation');
 let tela = window.innerWidth;
 //controlador
 let controller = new ScrollMagic.Controller();
 //timeline

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
     } else if (tela <= 540) {
         scaleVariable = 3
         xInicial = 0


     } else if (tela <= 720) {
         scaleVariable = 6
         xInicial = -100

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
     } else if (tela >= 2000) {
         scaleVariable = 13
         xInicial = 200
     }

 }
 scale()




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
     .addIndicators({
         name: "fixo"
     })

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
     .addIndicators({
         name: "RESIZE celular"
     });


 // TITULO SCENE ===============================
 var sceneTitle = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 350,
         offset: 20,
         triggerHook: 0,
     })
     // .setClassToggle("#high3", "active") // add class toggle
     .setTween(resizeText)
     .addIndicators({
         name: "RESIZE text"
     })

 //CLASSE NO BODY SCENE ====================
 var sceneClass = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1090,
         triggerHook: 0,

     })
     .setClassToggle("body", "active")
     .addIndicators({
         name: "body"
     })
     .setTween(menuAnimation)

// FIX SCENE =====================================
 var sceneClassFix = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1090,
         triggerHook: 0,

     })
     .setClassToggle("body", "fixEnd")
     .addIndicators({
         name: "add class fix"
     })

//DEGRADE 1 GSAP ===================================
 const degrade = gsap.to(".degrade", {
     gradient: "linear-gradient(180deg, rgba(36,110,255,1) 0%, rgba(0,194,255,0.9051995798319328) 100%)",
     duration: 2,
     ease: "sine.out",
     //repeat: 3,
     // yoyo: true
 });

 // DEGRADE SCENE ===================================
 var sceneDegrade = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1650,
         triggerHook: 0,

     })
     .addIndicators({
         name: "degrade"
     })
     .setTween(degrade)



 // TYPEWRITTER NO AUTOSTART ===================
 var typewriter = new Typewriter(texto, {
     loop: false,
     autoStart: false,
 });


 // TEXTO 1 =================================
 var sceneLetra = new ScrollMagic.Scene({
         triggerElement: "#trigger1",
         duration: 0,
         offset: 1650,
         triggerHook: 0,

     })
     .addIndicators({
         name: "Letra"
     })
     .on("start", function typing() {

         var typewriter = new Typewriter(texto, {
             loop: false,
             delay: 65,
             //onCreateTextNode: customNodeCreator,

         });

         typewriter
             .start()
             .typeString('Inteligencia Artificial')
             .pauseFor(1200)
             .deleteAll()
             .typeString('')
             //.deleteAll()
             .typeString('<strong>Transformação</strong> Digital')
             .pauseFor(2000)
     });




 // gradiente 2 GSAP ===========================
 const degrade2 = gsap.to("#aprendaSection", {
     gradient: "linear-gradient(180deg, rgba(36,110,255,1) 0%, rgba(0,194,255,0.9051995798319328) 100%)",
     duration: 2,
     ease: "sine.out",
     //repeat: 3,
     // yoyo: true
 });

 //TEXTO 2 SCENE ========================================
 const texto2 = document.querySelector(".titulo__presente")
 var sceneLetra2 = new ScrollMagic.Scene({
    //triggerElement: "#trigger1",
    triggerElement: "#aprendaSection",
         duration: 0,
         offset: 0,
         triggerHook: 0,

     })
     .addIndicators({
         name: "Letra"
     })
     .setTween(degrade2)
     .on("start", function typing() { //APLICA TIPEWRITTER NA CENA
         var typewriter = new Typewriter(texto2, {
             loop: false,
             delay: 58,   //timing do tipyng
             //onCreateTextNode: customNodeCreator,
         });
         typewriter
             .start()
             .typeString('Se prepare para o futuro')
             .pauseFor(1400)
             .deleteChars(6)
             .typeString('<strong> Presente. </strong>')
     })

 //controlador 
 controller.addScene([
     sceneFix,
     sceneScale,
     sceneTitle,
     sceneClass,
     sceneClassFix,
     sceneDegrade,
     sceneLetra,
     sceneLetra2,

 ]);

 window.addEventListener("resize", scale)
 //window.addEventListener("scroll", dataMenu)
 // window.addEventListener("resize", restart1)