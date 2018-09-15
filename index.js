var colorsArr = [];
var allColors;
var leftSleeveArr=[];
var rightSleeveArr=[];
var shirtParts;
var shirtPart;

function getColors(){
  allColors = document.getElementsByClassName("color")
  shirtParts = document.getElementsByClassName("tshirt")
  console.log(allColors)
  for (i=0; i < allColors.length; i++){
    allColors[i].addEventListener("click", selectColor)
  }
  for (i=0; i < shirtParts.length; i++){
    shirtParts[i].addEventListener("click", selectShirtPart)
  }
}

function selectColor(e){
  if (shirtPart){
    if (shirtPart.classList.value.includes("mid-section")){
      checkColorArray(e, colorsArr)
    } else if (shirtPart.classList.value.includes("sleeve-left")){
      checkColorArray(e, leftSleeveArr)
    } else {
      checkColorArray(e, rightSleeveArr)
    }
  }
}

function checkColorArray(e, arr){

  if (!arr.includes(e.target.style.backgroundColor)){
    arr.unshift(e.target.style.backgroundColor)
    e.target.classList.add("clicked")
    changeColor(arr)
  } else if (e.target.classList.value.includes("clicked") && arr.includes(e.target.style.backgroundColor) && arr[0] !== e.target.style.backgroundColor) {
    arr.splice(arr.indexOf(e.target.style.backgroundColor), 1)
    arr.unshift(e.target.style.backgroundColor)
    e.target.classList.remove("clicked")
    e.target.classList.add("clicked")
    changeColor(arr)
  } else {
    arr.splice(arr.indexOf(e.target.style.backgroundColor), 1)
    e.target.classList.remove("clicked")
    changeColor(arr)
  }
}

function selectShirtPart(e){
  shirtPart = e.target
}

function changeColor(arr){

  if (shirtPart.classList.value.includes("mid-section")){
    if (arr.length > 0){
      document.getElementsByClassName("tshirt mid-section")[0].style.backgroundColor = arr[0]
    } else {
      document.getElementsByClassName("tshirt mid-section")[0].style.backgroundColor = ''
    }
  } else if (shirtPart.classList.value.includes("sleeve-left")){
    if (arr.length > 0){
      document.getElementsByClassName("tshirt sleeve-left")[0].style.backgroundColor = arr[0]
    } else {
      document.getElementsByClassName("tshirt sleeve-left")[0].style.backgroundColor = ''
    }
  } else if (shirtPart.classList.value.includes("sleeve-right")){
    if (arr.length > 0){
      document.getElementsByClassName("tshirt sleeve-right")[0].style.backgroundColor = arr[0]
    } else {
      document.getElementsByClassName("tshirt sleeve-right")[0].style.backgroundColor = ''
    }
  }
}

function clearAll(){
  debugger
  colorsArr = []
  leftSleeveArr=[]
  rightSleeveArr=[]
  shirtParts = ''
  shirtPart = ''
  for (i = 0; i < allColors.length; i++){
    if (allColors[i].classList.value.includes("clicked")){
      allColors[i].classList.remove("clicked")
    }
  }
  document.getElementsByClassName("tshirt mid-section")[0].style.backgroundColor = ''
  document.getElementsByClassName("tshirt sleeve-left")[0].style.backgroundColor = ''
  document.getElementsByClassName("tshirt sleeve-right")[0].style.backgroundColor = ''
}

$(document).ready(function(){
    getColors()
});
