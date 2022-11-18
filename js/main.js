//footer question
$(function () {
  var c = 0;
    $("#answer-2").hide();
    $('#first-2').on('click',function(){
      c = c +1;
      $('#answer-2').toggle(500);
      $(".fa-angle-right").css("transform","rotate(90deg)");
      if( c % 2 === 0){
        $(".fa-angle-right").css("transform","rotate(0deg)");
      }
    });
  });
  //loading 

  $(window).ready(function(){
     $("body").css("overflow","auto");
     $(".over .sk-chase").fadeOut(2000,function(){
       $(this).parent().fadeOut(2000,
       function(){
         $(this).remove();
     });

  });
});

//scroll to top
let scrollest = document.querySelector(".scrollToTop");
window.onscroll = function(){
   if(this.scrollY >= 100){
      scrollest.classList.add("showScroll");
   }else{
     scrollest.classList.remove("showScroll");
   }
 };
 scrollest.onclick = function(){
   window.scroll({
     top:0,
     behavior: 'smooth',
   });
 };
//search for course
 
  let courses =["ALADIN Bet" , "WCT S2" , "Educational videos" , "ERA7 WCT S1" ,"Arab Cup 22","","",""];
  function searchfunction() {

    let ulmenu = document.getElementById("myUL");

    let lielement  = ulmenu.getElementsByTagName("li");

    let checker = document.getElementById("searchAria");

    let filter = checker.value.toUpperCase();

    // check if filter(input value) is empty
    function check(ele){
      if(filter.length === 0)
        ele.preventDefault();
      else
       ulmenu.getElementsByTagName("p")[0].style.display="block";
    }
    for(let i = 0; i < courses.length; i++){
       check();
      if(courses[i].toUpperCase().includes(filter)){
        lielement[i].style.display = "block";
        lielement[i].style.textIndent ="70px";
      }else{
        lielement[i].style.display = "none";
      }
    }
  }
  //animation scroll



