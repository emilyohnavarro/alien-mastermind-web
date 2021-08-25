// Peg: =========================================================
const RED_PEG = 1, YELLOW_PEG = 2, GREEN_PEG = 3, PURPLE_PEG = 4, BLUE_PEG = 5, ORANGE_PEG = 6,
  PINK_PEG = 7, AQUA_PEG = 8, EMPTY_PEG = 9;

const RED_PEG_IMG = "images/redAlien.gif", YELLOW_PEG_IMG = "images/yellowAlien.gif", GREEN_PEG_IMG = "images/greenAlien.gif",
  PURPLE_PEG_IMG = "images/purpleAlien.gif", BLUE_PEG_IMG = "images/blueAlien.gif", ORANGE_PEG_IMG = "images/orangeAlien.gif",
  PINK_PEG_IMG = "images/pinkAlien.gif", AQUA_PEG_IMG = "images/aquaAlien.gif", EMPTY_PEG_IMG = "images/emptyPeg.gif";

function Peg(color) {
  this.color = color;
  this.imageSrc;

  switch (color) {
    case RED_PEG:
      this.imageSrc = RED_PEG_IMG;
      // console.log("red");
      break;
    case YELLOW_PEG:
      this.imageSrc = YELLOW_PEG_IMG;
      break;
    case GREEN_PEG:
      this.imageSrc = GREEN_PEG_IMG;
      break;
    case PURPLE_PEG:
      this.imageSrc = PURPLE_PEG_IMG;
      break;
    case BLUE_PEG:
      this.imageSrc = BLUE_PEG_IMG;
      break;
    case ORANGE_PEG:
      this.imageSrc = ORANGE_PEG_IMG;
      break;
    case PINK_PEG:
      this.imageSrc = PINK_PEG_IMG;
      break;
    case AQUA_PEG:
      this.imageSrc = AQUA_PEG_IMG;
      break;
    default:
      this.imageSrc = EMPTY_PEG_IMG;
      break;
  }
}


// Rocket: =========================================================
const BLUE_ROCKET = 1, WHITE_ROCKET = 2, EMPTY_ROCKET = 3;
const BLUE_ROCKET_IMG = "images/blueRocket.gif", WHITE_ROCKET_IMG = "images/whiteRocket.gif",
  EMPTY_ROCKET_IMG = "images/emptyRocket.gif";

function Rocket(fill) {
  this.fill = fill;
  this.imageSrc;

  switch (fill) {
    case BLUE_ROCKET:
      this.imageSrc = BLUE_ROCKET_IMG;
      break;
    case WHITE_ROCKET:
      this.imageSrc = WHITE_ROCKET_IMG;
      break;
    default:
      this.imageSrc = EMPTY_ROCKET_IMG;
      break;
  }
}


// Goal: =========================================================
const NUM_PEGS = 4, COUNTED_BLUE = 1, COUNTED_WHITE = 2, NOT_COUNTED = 3;
const G_IMG = "images/g.gif", O_IMG = "images/o.gif", A_IMG = "images/a.gif", L_IMG = "images/l.gif";
function Goal(level) {
  console.log("level in Goal constructor: " + level);
  this.level = level;
  this.sequence = []; // element type: Peg
  this.beenCounted = []; // element type: int

  for (i in this.beenCounted) {
    this.beenCounted[i] = NOT_COUNTED;
  }

  switch (level) {
    case 1:
      for (i = 0; i < NUM_PEGS; i++) {
        randDouble = Math.random();
        if (randDouble < 0.25) {
          this.sequence[i] = new Peg(RED_PEG);
        } else if ((randDouble >= 0.25) && (randDouble < 0.5)) {
          this.sequence[i] = new Peg(YELLOW_PEG);
        } else if ((randDouble >= 0.5) && (randDouble < 0.75)) {
          this.sequence[i] = new Peg(GREEN_PEG);
        } else { // (randDouble >= 0.75)
          this.sequence[i] = new Peg(PURPLE_PEG);
        }
      }
      console.log("in case 1");
      break;
    case 2:
      for (i = 0; i < NUM_PEGS; i++) {
        randDouble = Math.random();
        if (randDouble < 0.2) {
          this.sequence[i] = new Peg(RED_PEG);
        } else if ((randDouble >= 0.2) && (randDouble < 0.4)) {
          this.sequence[i] = new Peg(YELLOW_PEG);
        } else if ((randDouble >= 0.4) && (randDouble < 0.6)) {
          this.sequence[i] = new Peg(GREEN_PEG);
        } else if ((randDouble >= 0.6) && (randDouble < 0.8)) {
          this.sequence[i] = new Peg(PURPLE_PEG);
        } else { // (randDouble >= 0.8)
          this.sequence[i] = new Peg(BLUE_PEG);
        }
      }
      console.log("in case 2");
      break;
    case 3:
      for (i = 0; i < NUM_PEGS; i++) {
        randDouble = Math.random();
        if (randDouble < 0.167) {
          this.sequence[i] = new Peg(RED_PEG);
        } else if ((randDouble >= 0.167) && (randDouble < 0.333)) {
          this.sequence[i] = new Peg(YELLOW_PEG);
        } else if ((randDouble >= 0.333) && (randDouble < 0.5)) {
          this.sequence[i] = new Peg(GREEN_PEG);
        } else if ((randDouble >= 0.5) && (randDouble < 0.667)) {
          this.sequence[i] = new Peg(PURPLE_PEG);
        } else if ((randDouble >= 0.667) && (randDouble < 0.833)) {
          this.sequence[i] = new Peg(BLUE_PEG);
        } else { // (randDouble >= 0.833)
          this.sequence[i] = new Peg(ORANGE_PEG);
        }
      }
      console.log("in case 3");
      break;
    case 4:
      for (i = 0; i < NUM_PEGS; i++) {
        randDouble = Math.random();
        if (randDouble < 0.143) {
          this.sequence[i] = new Peg(RED_PEG);
        } else if ((randDouble >= 0.143) && (randDouble < 0.286)) {
          this.sequence[i] = new Peg(YELLOW_PEG);
        } else if ((randDouble >= 0.286) && (randDouble < 0.429)) {
          this.sequence[i] = new Peg(GREEN_PEG);
        } else if ((randDouble >= 0.429) && (randDouble < 0.572)) {
          this.sequence[i] = new Peg(PURPLE_PEG);
        } else if ((randDouble >= 0.572) && (randDouble < 0.715)) {
          this.sequence[i] = new Peg(BLUE_PEG);
        } else if ((randDouble >= 0.715) && (randDouble < 0.858)) {
          this.sequence[i] = new Peg(ORANGE_PEG);
        } else { // (randDouble >= 0.858)
          this.sequence[i] = new Peg(PINK_PEG);
        }
      }
      console.log("in case 4");
      break;
    case 5:
      for (i = 0; i < NUM_PEGS; i++) {
        randDouble = Math.random();
        if (randDouble < 0.125) {
          this.sequence[i] = new Peg(RED_PEG);
        } else if ((randDouble >= 0.125) && (randDouble < 0.25)) {
          this.sequence[i] = new Peg(YELLOW_PEG);
        } else if ((randDouble >= 0.25) && (randDouble < 0.375)) {
          this.sequence[i] = new Peg(GREEN_PEG);
        } else if ((randDouble >= 0.375) && (randDouble < 0.5)) {
          this.sequence[i] = new Peg(PURPLE_PEG);
        } else if ((randDouble >= 0.5) && (randDouble < 0.625)) {
          this.sequence[i] = new Peg(BLUE_PEG);
        } else if ((randDouble >= 0.625) && (randDouble < 0.75)) {
          this.sequence[i] = new Peg(ORANGE_PEG);
        } else if ((randDouble >= 0.75) && (randDouble < 0.875)) {
          this.sequence[i] = new Peg(PINK_PEG);
        } else { // (randDouble >= 0.875)
          this.sequence[i] = new Peg(AQUA_PEG);
        }
      }
      console.log("in case 5");
      break;
    default:
      console.log("invalid level");
  }

  Goal.prototype.setPegCount = function (index, color) {
    this.beenCounted[index] = color;
  }

  Goal.prototype.clearAllCounts = function () {
    for (i = 0; i < 4; i++) {
      this.beenCounted[i] = NOT_COUNTED;
    }
  }

  Goal.prototype.getPegCount = function (index) {
    return this.beenCounted[index];
  }
}


// GameEngine: =========================================================
const WIN = 1, LOSE = 2, IN_PROGRESS = 3;

function GameEngine(level) {
  // console.log("level in GameEngine constructor: " + level);
  this.target = new Goal(level);
  this.currentPegSeq = []; // Pegs
  this.currentRocketSeq = []; // Rockets
  this.currentRow = 9;
  this.currentCol = 0;
  this.winOrLose = IN_PROGRESS;
}

GameEngine.prototype.addPegToSeq = function (color) {
  if (this.currentPegSeq.length < 4) {
    this.currentPegSeq.push(new Peg(color));
    this.currentCol++;
  }
}

GameEngine.prototype.submitPSeq = function () {
  numBlueRockets = 0;
  numWhiteRockets = 0;

  for (i = 0; i < 4; i++) { // go through each peg in sequence
    if (this.currentPegSeq[i].color == this.target.sequence[i].color) {
      numBlueRockets++;
      this.target.setPegCount(i, COUNTED_BLUE);
    }
  }

  for (i = 0; i < 4; i++) { // go through each peg again to test for white rockets
    goThruTarget: for (j = 0; j < 4; j++) { // go through each peg in target until there is a match or target
      // sequence has been exhaustively searched
      if ((this.currentPegSeq[i].color == this.target.sequence[j].color)
        && (this.target.getPegCount(i) != COUNTED_BLUE) && (this.target.getPegCount(j) == NOT_COUNTED)) {
        numWhiteRockets++;
        this.target.setPegCount(j, COUNTED_WHITE);
        break goThruTarget;
      }
    }
  }
  if (numBlueRockets == 4) {
    this.winOrLose = WIN;
  }
  if ((numBlueRockets != 4) && this.currentRow == 0) {
    this.winOrLose = LOSE;
  }
  for (i = 0; i < 4; i++) {
    if (numBlueRockets > 0) {
      r = new Rocket(BLUE_ROCKET);
      this.currentRocketSeq[i] = r;
      numBlueRockets--;
    }
    else {
      if (numWhiteRockets > 0) {
        r = new Rocket(WHITE_ROCKET);
        this.currentRocketSeq[i] = r;
        numWhiteRockets--;
      }
      else {
        r = new Rocket(EMPTY_ROCKET);
        this.currentRocketSeq[i] = r;
      }
    }
  }
  this.currentPegSeq = [];
  this.currentRow--;
  this.currentCol = 0;
  this.target.clearAllCounts();
}

GameEngine.prototype.getLastPeg = function () {
  return this.currentPegSeq[this.currentPegSeq.length - 1];
}

GameEngine.prototype.getCurrentSeqSize = function () {
  return this.currentPegSeq.length;
}

GameEngine.prototype.getCurrentRocketSeq = function (index) {
  return this.currentRocketSeq[index];
}

GameEngine.prototype.clearCurrentPegSeq = function () {
  this.currentPegSeq = [];
  this.currentCol = 0;
}

GameEngine.prototype.getPlayerStatus = function () {
  return this.winOrLose;
}

GameEngine.prototype.getLevel = function () {
  return this.target.level;
}


// GameBoard: =========================================================
function GameBoard(level) {
  this.engine = new GameEngine(level);
  this.rocketSpaces = []; // 2d array of rocket spaces
  this.spaces = []; // 2d array of spaces
}


// Main: =========================================================
const DEFAULT_LEVEL = 1;
const RED_X_IMG ="images/x.png";

newGame(DEFAULT_LEVEL);

// g = board.engine.target;
// console.log(g.sequence[0].color);
// console.log(g.sequence[1].color);
// console.log(g.sequence[2].color);
// console.log(g.sequence[3].color);

$("#btn-submit").click(function () {
  submit();
});

$("#btn-clear").click(function () {
  clear();
});

$("#btn-instructions").click(function () {
  instructions();
});

$("#btn-new-game").click(function () {
  if (confirm("Are you sure you want to start a new game?")) {
    newGame(board.engine.getLevel());
  }
});

$('.dropdown-menu a').click(function () {  
  console.log("level in drop down: " + $(this).text());
  changeLevel(parseInt($(this).text()));         
});

function submit() {
  if (board.engine.getCurrentSeqSize() == 4) {
    board.engine.submitPSeq();
    allBlank = true;
    for (i = 0; i < 4; i++) {
      $("#rocket" + (board.engine.currentRow + 1) + "-" + i).attr("src", board.engine.getCurrentRocketSeq(i).imageSrc);
      if (board.engine.getCurrentRocketSeq(i).imageSrc != EMPTY_ROCKET_IMG) {
        allBlank = false;
      }

      // if no rockets, blank, show red x:
      if (allBlank) {
        $("#x-" + (board.engine.currentRow + 1)).attr("src", RED_X_IMG);
        $("#x-" + (board.engine.currentRow + 1)).show();
      }
    }
    disableSubmitButton();
  }
  else {
    alert("Each guess must contain 4 aliens");
  }
  if (board.engine.getPlayerStatus() == WIN) {
    win();
  }
  if (board.engine.getPlayerStatus() == LOSE) {
    lose();
  }
}

function clear() {
  if (board.engine.getCurrentSeqSize() != 0) {
    board.engine.clearCurrentPegSeq();
    for (i = 0; i < 4; i++) {
      $("#peg" + board.engine.currentRow + "-" + i).attr("src", EMPTY_PEG_IMG);
    }
  }
  disableSubmitButton();
}

function instructions() {
  alert("Four aliens have arranged themselves in a secret order and are hiding behind the sign marked GOAL."
    + '\n' + "There are " + (board.engine.getLevel() + 3) + " different possible colors of aliens."
    + '\n'
    + "There may be more than one alien of the same color, and there may be no alien of a particular color."
    + '\n'
    + "Try to guess the order in which the four aliens are arranged before you reach the end of the board."
    + '\n'
    + "After each guess, zero to four rockets will appear on the rocket panel on the left."
    + '\n'
    + "Each blue rocket means that you have placed an alien of the right color in the right position."
    + '\n'
    + "Each white rocket means that you have placed an alien of the right color in the wrong position."
    + '\n' + '\n' + "You are currently playing level " + board.engine.getLevel());
}

function win() {
  showGoal();
  alert("Congratulations -- You win!");
  disableButtons();
}

function lose() {
  showGoal();
  alert("Sorry -- You lose.");
  disableButtons();
}

function showGoal() {
  for (i = 0; i < 4; i++) {
    $("#goal-" + i).attr("src", board.engine.target.sequence[i].imageSrc);
  }
}

function disableButtons() {
  $("#btn-red").prop("disabled", true);
  $("#btn-yellow").prop("disabled", true);
  $("#btn-green").prop("disabled", true);
  $("#btn-purple").prop("disabled", true);
  $("#btn-blue").prop("disabled", true);
  $("#btn-orange").prop("disabled", true);
  $("#btn-pink").prop("disabled", true);
  $("#btn-aqua").prop("disabled", true);
  disableSubmitButton();
  $("#btn-clear").prop("disabled", true);
  $("#btn-change-level").prop("disabled", true);
}

function resetButtons() {
  $("#btn-red").prop("disabled", false);
  $("#btn-yellow").prop("disabled", false);
  $("#btn-green").prop("disabled", false);
  $("#btn-purple").prop("disabled", false);
  $("#btn-blue").prop("disabled", false);
  $("#btn-orange").prop("disabled", false);
  $("#btn-pink").prop("disabled", false);
  $("#btn-aqua").prop("disabled", false);
  disableSubmitButton();
  $("#btn-clear").prop("disabled", false);
  $("#btn-change-level").prop("disabled", false);
}

function newGame(level) {
  board = new GameBoard(level);

  // clear all peg images:
  $(".peg-img").attr("src", EMPTY_PEG_IMG);

  // clear all rocket images:
  $(".rocket-img").attr("src", EMPTY_ROCKET_IMG);

  // hide red x images:
  $(".x").hide();

  // cover goal:
  $("#goal-0").attr("src", G_IMG);
  $("#goal-1").attr("src", O_IMG);
  $("#goal-2").attr("src", A_IMG);
  $("#goal-3").attr("src", L_IMG);

  // clear all color buttons:
  $(".color-buttons").empty();

  // add color buttons:
  // all levels:
  $(".color-buttons").append(generateColorButtonHtml("red"), generateColorButtonHtml("yellow"), generateColorButtonHtml("green"),
    generateColorButtonHtml("purple"));

  // level 2:
  if (board.engine.getLevel() > 1) {
    $(".color-buttons").append(generateColorButtonHtml("blue"));
    // decrease button/font size to make them all fit in the same space:
    $(".btn-color").css("fontSize", "0.7rem");

    // level 3:
    if (board.engine.getLevel() > 2) {
      $(".color-buttons").append(generateColorButtonHtml("orange"));
      $(".btn-color").css("fontSize", "0.6rem");

      // level 4:
      if (board.engine.getLevel() > 3) {
        $(".color-buttons").append(generateColorButtonHtml("pink"));
        $(".btn-color").css("fontSize", "0.5rem");

        // level 5:
        if (board.engine.getLevel() > 4) {
          $(".color-buttons").append(generateColorButtonHtml("aqua"));
          $(".btn-color").css("fontSize", "0.4rem");
        }
      }
    }
  }

  // reset buttons:
  resetButtons();

  // add handlers to color buttons:
  $(".btn-color").on("click", function () {
    var source = $(this).attr("id");
    console.log("source = " + source);
    if (board.engine.getCurrentSeqSize() < 4) {
      if (source == "btn-red") {
        board.engine.addPegToSeq(RED_PEG);
      } else if (source == "btn-yellow") {
        board.engine.addPegToSeq(YELLOW_PEG);
      } else if (source == "btn-green") {
        board.engine.addPegToSeq(GREEN_PEG);
      } else if (source == "btn-purple") {
        board.engine.addPegToSeq(PURPLE_PEG);
      } else if (source == "btn-blue") {
        board.engine.addPegToSeq(BLUE_PEG);
      } else if (source == "btn-orange") {
        board.engine.addPegToSeq(ORANGE_PEG);
      } else if (source == "btn-pink") {
        board.engine.addPegToSeq(PINK_PEG);
      } else if (source == "btn-aqua") {
        board.engine.addPegToSeq(AQUA_PEG);
      }
      $("#peg" + board.engine.currentRow + "-" + (board.engine.currentCol - 1)).attr("src", board.engine.getLastPeg().imageSrc);

      // enable submit button only if current guess contains 4 aliens:
      if (board.engine.getCurrentSeqSize() == 4) {
        enableSubmitButton();
      } else {
        disableSubmitButton();
      }
    }
  });

  // set text on level dropdown:
  $("#level-dropdown").text("Level: " + board.engine.getLevel());
}

function changeLevel(level) {
  if (confirm("Are you sure you want to start a new game?")) {
    console.log("level in changeLevel: " + level);
    newGame(level);
  }
}

function disableSubmitButton() {
  $("#btn-submit").prop("disabled", true);
  $("#btn-submit").attr("title", "Each guess must contain 4 aliens");
}

function enableSubmitButton() {
  $("#btn-submit").prop("disabled", false);
  $("#btn-submit").attr("title", "Submit your current guess");
}

function generateColorButtonHtml(color) {
  return "<div class=\"row\"><button type=\"button\" class=\"btn btn-primary btn-color\" id=\"btn-" + color.toLowerCase()
    + "\" title=\"Add " + color.toLowerCase() + " alien to your guess\">" + color.substring(0, 1).toUpperCase() + color.substring(1) + "</button></div>";
}