const vm = new Vue ({
  el : "#app",

  data : {
    welcomeMessage : "Welcome to your first Vue app",

    hasVue : false,

    vueMessage : "You can haz vue now!",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    deliciousFruit : [
      { name : "apples", flavour: "tangy!" },
      { name : "peaches", flavour: "sweet!" },
      { name : "grapes", flavour: "tart!" }
    ]
  },

  methods : {
    logFruit(e) {
      console.log(e.currentTarget);
    }
  }
});
