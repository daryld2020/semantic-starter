window.onload = function () {
  // necessary for dropdown menus to function properly:
  // https://stackoverflow.com/a/25347431
  $('.ui.dropdown').dropdown();


  let button = document.querySelector("#calc")
  button.addEventListener("click", function () {

    //entry from 1stbox
    var AA = document.getElementById("input1id").value;
    //entry from 2ndbox
    var BB = document.getElementById("input2id").value;
    //Now put it
    var sum = (AA) + " " + (BB);
    //Result will post on new clean screen
    document.write(sum);

  })

} 
