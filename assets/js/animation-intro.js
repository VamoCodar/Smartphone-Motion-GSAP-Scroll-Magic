  //  TRIGGER É O DESENCADEADOR, BASE NA VIEWPORT .5 METADE

  //   GSAP
  // .set = metodo gsap para setar estado inicial do elmento
  //   .

  //CONTROLLER 
  let controller = new ScrollMagic.Controller();

  //  ELEMENTOS
  let video = document.querySelector("#video")
  let wrapper = document.querySelector(".wrapper")
  let celular = document.querySelector(".celular")
  let body = document.querySelector("body")

  //timelines GSAP
  const timeline = new TimelineMax();
  const animationResize = new TimelineMax();

  //variaveis Animação do celular INTRO
  let scaleVariable;
  let xInicial;
  let offsetFix = -230;
  var texto = document.querySelector('.text__animation');
  let tela = window.innerWidth;


  //VARIAVEIS ANIMAÇÃO SEÇÃO 2
  var triggerSecao2 = .4;
  let tempoSecaoFixa = 1450; // tempo que segunda seção fica fixa
  let tempoAnimaoSegundaSecao = 800; //tempo que dura a animação


  //VARIAVEIS ANIMAÇAO SEÇÃO FUTURO 
  const texto2 = document.querySelector(".titulo__presente")

  let tempoSecaoPresenteFixa = 1000;
  let tempoAnimacaoPresente = 550;
  let trigerSecaoPresente = .3;




  //verificação scale +++ =================

  function scale() {
      if (tela <= 400) {
          scaleVariable = 2.5
          xInicial = 0
          triggerSecao2 = .3;
          trigerSecaoPresente = .4;
      } else if (tela <= 540) {
          scaleVariable = 3
          xInicial = 0
          triggerSecao2 = .3;
          trigerSecaoPresente = .4;
      } else if (tela <= 720) {
          scaleVariable = 6
          xInicial = -100
          triggerSecao2 = .3;
          trigerSecaoPresente = .4;

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


  //SET =  ESTADO INICIAL
  //SECAO INTELIGENCIA ARTIFICIAL ESTADO INICIAL =================
  gsap.set(".artificial__2 h2 ", {
      x: "100%",
      opacity: 0,

  });

  gsap.set(".artificial__2 p", {
      x: "100%",
      opacity: 0,

  });
  gsap.set(".artificial__2 img", {
      x: "100%",
      opacity: 0,

  });

  //SEÇÃO 2 ESTADO INICIAL PRESENTE
  gsap.set(".presenteAnimation", {
      y: "-220px"
  })

  //ESTADO INICIAL CELULAR ======================
  gsap.set(".secao__celular", {
      scale: scaleVariable, //SCALA QUE O celular recebe
      x: xInicial,
  })

  //ESTADO FINAL CELULAR  
  animationResize
      .to(".secao__celular", {
          scale: 1,
          x: 0,
      });

  //ESTADO INICIAL TITULO 1==============================
  gsap.set("#text-principal", {
      y: 0,
      opacity: 1,
  });

  //ESTADO FINAL TITULO 1
  const resizeText = TweenMax.to("#text-principal", {
      y: "-20%",
      opacity: 0,
  });

  //DEGRADE 1 GSAP ===================================
  const degrade = gsap.to(".degrade", {
      gradient: "linear-gradient(180deg, #081131 2%, #f5f5f5 100%)",
      duration: .2,
      ease: "sine.out",

  });

  //GSAP TIMELINE SEÇÃO 3 FUTURO ===================
  const presentefuturoAnimation =
      new TimelineMax()
      .to(".text__futuro", .2, {
          y: "100px",
      })
      .to(".presenteAnimation", .2, {
          y: 0,
      }, "-=0.100")






  /*  TIMELINE SEÇÃO INTELIGENCIA ARTIFICIAL ======================== */
  const animationSecao = new TimelineMax()
      .to(".artificial__1 h2", .2, { //TITULO 1
          x: "-100%",
          opacity: 0,

      })
      .to(".artificial__1 p", .2, {

          x: "-100%",
          opacity: 0,

      }, "-=.150")
      .to(".artificial__1 img", .2, {

          x: "-100vw",
          opacity: 0,

      }, "-=.2")

      .to(".artificial__2 h2", .2, { //TITULO 2
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



  //ANIMAÇÃO DO MENU QUANDO ELE APARECE
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





  //            ======================= SCENE SECAO 1 =================



  //FIXADO SECAO CELULAR SCENE ==================================
  var sceneFix = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          triggerHook: 0,
          duration: 1330,
          offset: offsetFix,

      })
      .setPin(".wrapper", {
          pushFollowers: false,
          spacerClass: "#trigger1",
      })



  //SCALE CELULAR SCENE ===================================
  var sceneScale = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 700,
          offset: 390,
          triggerHook: 0,


      })
      .setTween(animationResize)


  // TITULO 1 SCENE ===============================
  var sceneTitle = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 350,
          offset: 20,
          triggerHook: 0,
      })
      .setTween(resizeText)


  //                     ======================= SCENE SECAO 2 =================

  // FIXADO SECAO 2 SCENE ===============================
  var secaoTitleFixed = new ScrollMagic.Scene({
          triggerElement: ".videoFixed",
          duration: tempoSecaoFixa,
          offset: 0,
          triggerHook: triggerSecao2,
      })

      .setPin(".videoFixed", {
          pushFollowers: true,
          spacerClass: ".videoFixed",
      })

  // DEGRADE SCENE ===================================
  var sceneDegrade = new ScrollMagic.Scene({
          triggerElement: "#videoSection",
          duration: 0,
          offset: 300,
          triggerHook: triggerSecao2,

      })
   
      .setTween(degrade)



  //ANIMACÃO SEÇÃO 2 SCENE =============================
  var secaoTitle = new ScrollMagic.Scene({
          triggerElement: "#videoSection",
          duration: tempoAnimaoSegundaSecao,
          offset: 300,
          triggerHook: triggerSecao2,
      })
      .setTween(animationSecao)



  //ADD CLASS BODY
  var secaoClass = new ScrollMagic.Scene({
          triggerElement: "#videoSection",
          duration: 0,
          offset: 300,
          triggerHook: triggerSecao2,
      })
      .setClassToggle("body", "corP") // ADD CLASS CORP BODY




  //CLASSE NO BODY SCENE E  ----  ANIMAÇÃO MENU ====================
  var sceneClass = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 0,
          offset: 1090,
          triggerHook: 0,

      })
      .setClassToggle("body", "active") //ADD CLASS ACTIVE BODY
      .setTween(menuAnimation)


  //ADD CLASS BODY
  var sceneClassFix = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          duration: 0,
          offset: 1090,
          triggerHook: 0,

      })
      .setClassToggle("body", "fixEnd") //ADD CLASS FIXEND BODY



  //              ==============   SEÇÃO 3 =============



  // FIXADO SECAO PRESENTE SCENE ===============================
  var secaoPresenteFixed = new ScrollMagic.Scene({
          triggerElement: ".futuroAnimation",
          duration: tempoSecaoPresenteFixa,
          offset: 0,
          triggerHook: trigerSecaoPresente,
      })

      .setPin(".futuroAnimation", {
          pushFollowers: true,
          spacerClass: "fixoOrna",
      })

  //SCENE PRESENTE ANIMAÇÃO ===================================

  var scenePresente = new ScrollMagic.Scene({
          triggerElement: ".futuroAnimation",
          duration: tempoAnimacaoPresente,
          offset: 200,
          triggerHook: trigerSecaoPresente,
      })

      .setTween(presentefuturoAnimation)








  //controlador 
  controller.addScene([
      sceneFix,
      sceneScale,
      sceneTitle,
      sceneClass,
      sceneClassFix,
      sceneDegrade,
      secaoTitle,
      secaoTitleFixed,
      secaoClass,
      secaoPresenteFixed,
      scenePresente,
  ]);


  window.addEventListener("resize", scale)