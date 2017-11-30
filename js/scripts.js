$(document).ready(function() {
  $(".btn").click(function() {

    var animal = $("input:radio[name=animal]:checked").val();


    if (animal === "turtles") {
      $("#turtles").show();
      $("#snakes").hide();
      $("#insects").hide();
    }

    if (animal === "snakes") {
      $("#turtles").hide();
      $("#snakes").show();
      $("#insects").hide();
    }

    if (animal === "insects") {
      $("#turtles").hide();
      $("#snakes").hide();
      $("#insects").show();
    }

  });

});
