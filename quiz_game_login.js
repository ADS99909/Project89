 var player1="";
 player2="";
function adduser(){
  player1=document.getElementById("player_1_name").value;
  player2=document.getElementById("player_2_name").value;

  localStorage.setItem=player1;
  localStorage.setItem=player2;

  window.location="quiz_game_page.html";
}