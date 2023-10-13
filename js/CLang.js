var getURLParameter = function(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(window.location)||[,""])[1].replace(/\+/g, '%20'))||null;
};

var lang = getURLParameter('lang');

if(lang == 'de'){
  TEXT_GAMEOVER  = "GAME OVER";
  TEXT_PLAY      = "Spielen";
  TEXT_PLAYAGAIN = "Nochmal spielen";

  TEXT_PL1_VICTORY = "Spieler 1 gewinnt!!!";
  TEXT_PL2_VICTORY = "Spieler 2 gewinnt!!!";
  TEXT_DRAW = "Unentschieden!!!";

  TEXT_BUT1PLAYER = "1 Spieler";
  TEXT_BUT2PLAYERS = "2 Spieler";

  TEXT_ACTIVEPLAYER = {pt1: "Spieler ", pt2: " am Zug"};
  TEXT_AIACTIVEPLAYER = {pt1: "Computer ", pt2: " am Zug"};

  TEXT_THREE_IN_ROW = "Platziere 3 in einer Reihe!";
  TEXT_FOUR_IN_ROW = "Platziere 4 in einer Reihe!";
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
  TEXT_LINK = "www.codethislab.com";

  TEXT_SHARE_IMAGE = "200x200.jpg";
  TEXT_SHARE_TITLE = "Gratulation!";
  TEXT_SHARE_MSG1 = "Du hast <strong>";
  TEXT_SHARE_MSG2 = " Punkte</strong>!<br><br>Teile das mit deinen Freunden!";
  TEXT_SHARE_SHARE1 = "Mein Ergebnis sind ";
  TEXT_SHARE_SHARE2 = " Punkte! Kannst du es besser?";
}else{
  TEXT_GAMEOVER  = "GAME OVER";
  TEXT_PLAY      = "PLAY";
  TEXT_PLAYAGAIN = "PLAY AGAIN";

  TEXT_PL1_VICTORY = "PLAYER 1 WINS!!!";
  TEXT_PL2_VICTORY = "PLAYER 2 WINS!!!";
  TEXT_DRAW = "DRAW!!!";

  TEXT_BUT1PLAYER = "1 Player";
  TEXT_BUT2PLAYERS = "2 Players";

  TEXT_ACTIVEPLAYER = {pt1: "Player ", pt2: " to move"};
  TEXT_AIACTIVEPLAYER = {pt1: "AI ", pt2: " to move"};

  TEXT_THREE_IN_ROW = "PLACE 3 IN A ROW!";
  TEXT_FOUR_IN_ROW = "PLACE 4 IN A ROW!";
  TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
  TEXT_LINK = "www.codethislab.com";

  TEXT_SHARE_IMAGE = "200x200.jpg";
  TEXT_SHARE_TITLE = "Congratulations!";
  TEXT_SHARE_MSG1 = "You collected <strong>";
  TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
  TEXT_SHARE_SHARE1 = "My score is ";
  TEXT_SHARE_SHARE2 = " points! Can you do better?";
}
