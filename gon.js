// hexagon

function drawHex(){
  debugger
  var numberOfSides = 24,
      size = 70,
      Xcenter = 70,
      Ycenter = 70;


      var canvas = document.getElementById("abcdef");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;


  ctx.beginPath();
  ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  debugger

  ctx.strokeStyle = "#ffffff";
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.stroke();

  ctx.addEventListener('click', function(){
    if (ctx.fillStyle === '#ffffff'){
      debugger
      ctx.fillStyle = "blue";
      ctx.fill();
    } else {
      debugger
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

  })

}

document.addEventListener("DOMContentLoaded", function(event) {
    drawHex()
});
