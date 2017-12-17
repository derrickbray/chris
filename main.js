function show(id, color) {
  var content = document.getElementsByClassName("right");
  var option = document.getElementsByClassName('options');
  var o;
  for (o = 0; o < option.length; o++) {
    option[o].style.background = "linear-gradient(to right, #ebeced , #d1d5d6)";
    option[o].style.color = "#9ba0a4";
  }
  var currentSide = document.getElementById(color).style;
  currentSide.background = 'white';
  currentSide.color = '#36abe1';
  var c;
  for (c = 0; c < content.length; c++) {
    content[c].style.display = "none";
  }
  var element = document.getElementById(id).style.display = 'block';
}
