var portion;
var color;
var el;

var colors = ['FF0000', 'FFA500', 'FFFF00', '008000', '0000FF', '4B0082', 'EE82EE', 'F9EBEA', 'FDEDEC', 'F5EEF8', 'F4ECF7', 'EAF2F8', 'EBF5FB', 'E8F8F5', 'F9E79F', 'F9E79F', 'ABB2B9', '99A3A4', '17202A']


createColorOpts = () =>{
  for (i = 0; i < colors.length; i++){
    debugger
    el = document.createElement('div')
    el.classList.add("color")
    el.style.backgroundColor = '#' + colors[i]
    $('.color-container')[0].appendChild(el)
  }

}
// var classList;

function drawHex(){

  var numberOfSides = 24,
      size = 70,
      Xcenter = 70,
      Ycenter = 70;

      var canvas = document.getElementById("abcdef");
        var ctx = canvas.getContext("2d");
        var radius = canvas.height / 2;

        context = ctx


  ctx.beginPath();
  ctx.moveTo (Xcenter +  size * Math.cos(0), Ycenter +  size *  Math.sin(0));

  for (var i = 1; i <= numberOfSides;i += 1) {
      ctx.lineTo (Xcenter + size * Math.cos(i * 2 * Math.PI / numberOfSides), Ycenter + size * Math.sin(i * 2 * Math.PI / numberOfSides));
  }

  ctx.strokeStyle = "#0000000";
  ctx.fillStyle = '#ffffff';
  ctx.fill();
  ctx.lineWidth = 1;
  ctx.stroke();

}

selectPortion = (e) => {
  portion = e.target
}

selectColor = (e) => {

  color = e.target.style.backgroundColor

  if (portion){
    checkColor(portion, color)
  } else {
    alert("Please select figure section first.")
  }

}

checkColor = (portion, color) => {
  if (portion.classList.value.includes(color) && portion.classList[portion.classList.length - 1] != color && portion.classList.length > 3){
    portion.classList.remove(color)
    portion.classList.add(color)
  } else if (portion.classList.value.includes(color)) {
    portion.classList.remove(color)
  } else {
    portion.classList.add(color)
  }

  applyColor()

}

applyColor = () => {
  if (portion.classList.value.includes('hex')){
    if (portion.classList[portion.classList.length - 1] != 'hex' ){
      context.fillStyle = portion.classList[portion.classList.length - 1]
      context.fill()
    } else {
      context.fillStyle = '#ffffff'
      context.fill()
      context.strokeStyle = '#0000000';
      context.stroke()
    }
  } else if (portion.classList.length > 3 ){
    portion.style.backgroundColor = portion.classList[portion.classList.length - 1]
  } else {
    portion.style.backgroundColor = ''
  }
}

function clearAll(){
  // portion = ''
  // for (i = 0; i < $('.tshirt').length; i++){
  //   classList = $('.tshirt')[i].classList.length
  //   for (i = 0; i < classList - 1; i++){
  //     if (classList[i])
  //     classList[i]
  //   }
  //   $('.tshirt').classList
  //
  // }
}

$(document).ready(function(){
    createColorOpts()
    $('.tshirt').on('click', selectPortion)
    $('.color').on('click', selectColor)
    drawHex()
})
