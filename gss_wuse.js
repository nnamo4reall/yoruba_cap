// let arrow = document.querySelector('#arrow').classList = ('arrow_active');

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.querySelector("#arrow").className = "test";
  } else {
    document.getElementById("arrow").className = "";
  }
}

