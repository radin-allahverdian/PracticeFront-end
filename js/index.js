$(document).ready(function () {
  // $(window).resize(function () {
  //     console.log(window.innerWidth);
  // });



  const questionHeader = document.querySelectorAll(".QandA-header");
  const anwserPart = document.querySelectorAll(".Anwser-ex");
  const plusIcon = document.querySelectorAll('.myplusicon');

  let activeColorCode1 = true;
  questionHeader[0].addEventListener("click", function () {
    anwserPart[0].classList.toggle('anwser-dnone');
    if (activeColorCode1 == true) {
      questionHeader[0].style.color = '#f4843f';
      plusIcon[0].style.transform = "rotate(45deg)";
      activeColorCode1 = false;
    } else if (activeColorCode1 == false) {
      questionHeader[0].style.color = '#b7b6b6';
      plusIcon[0].style.transform = "rotate(0deg)";
      activeColorCode1 = true;
    }
  });

  let activeColorCode2 = true;
  questionHeader[1].addEventListener("click", function () {
    anwserPart[1].classList.toggle('anwser-dnone');
    if (activeColorCode2 == true) {
      questionHeader[1].style.color = '#f4843f';
      plusIcon[1].style.transform = "rotate(45deg)";
      activeColorCode2 = false;
    } else if (activeColorCode2 == false) {
      questionHeader[1].style.color = '#b7b6b6';
      plusIcon[1].style.transform = "rotate(0deg)";
      activeColorCode2 = true;
    }
  });

  let activeColorCode3 = true;
  questionHeader[2].addEventListener("click", function () {
    anwserPart[2].classList.toggle('anwser-dnone');
    if (activeColorCode3 == true) {
      questionHeader[2].style.color = '#f4843f';
      plusIcon[2].style.transform = "rotate(45deg)";
      activeColorCode3 = false;
    } else if (activeColorCode3 == false) {
      questionHeader[2].style.color = '#b7b6b6';
      plusIcon[2].style.transform = "rotate(0deg)";
      activeColorCode3 = true;
    }
  });

  let activeColorCode4 = true;
  questionHeader[3].addEventListener("click", function () {
    anwserPart[3].classList.toggle('anwser-dnone');
    if (activeColorCode4 == true) {
      questionHeader[3].style.color = '#f4843f';
      plusIcon[3].style.transform = "rotate(45deg)";
      activeColorCode4 = false;
    } else if (activeColorCode4 == false) {
      questionHeader[3].style.color = '#b7b6b6';
      plusIcon[3].style.transform = "rotate(0deg)";
      activeColorCode4 = true;
    }
  });
});
