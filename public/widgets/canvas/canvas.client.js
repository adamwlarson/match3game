feather.ns("match3game");
(function() {
  match3game.canvas = feather.Widget.create({
    name: "match3game.canvas",
    path: "widgets/canvas/",
    prototype: {
      onInit: function() {
        
      },
      onReady: function() {
        var me = this;
        // Creates canvas 320 × 200 at 10, 50
        var paper = Raphael(10, 50, 500, 600);

        // Creates circle at x = 50, y = 40, with radius 10
        var circle = paper.circle(50, 40, 200);
        // Sets the fill attribute of the circle to red (#f00)
        circle.attr("fill", "#f00");

        // Sets the stroke attribute of the circle to white
        circle.attr("stroke", "#fff");
        var img = paper.image( "images/GemDropSheet1.gif", 0, 0, 80, 165 );
        //img.attr( "clip-rect", "0 0 380 320" );
        img.attr( "x", 10 );
        //img.scale( 10, 10, 19, 16 );

        img.click( function( ) {
          //img.rotate( 10, 20, 17.5 );
          img.translate( 100, 0 );
          //img.animate({
          //  transform: "t100,100" }, 1000, "<>"
          //);
        });
        me.domEvents.bind( img, "click", function( ) {
          alert( "Hello" );
          img.animate({
            transform: "r" + 180 }, 1000, "<>"
          );
        });

      }
    }
  });
})();