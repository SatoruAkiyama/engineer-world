import Vue from "vue";

Vue.mixin({
  head() {
    return {
      script: [
        {
          src:
            "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"
        }
      ]
    };
  },
  methods: {
    scroll(event) {
      let speed = 500;
      let target = $("#" + event);
      let position = target.offset().top - 120;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
      //   });
    }
  }
});
