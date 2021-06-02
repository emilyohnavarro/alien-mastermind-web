// Peg: =========================================================
const RED_PEG = 1, YELLOW_PEG = 2, GREEN_PEG = 3, PURPLE_PEG = 4, BLUE_PEG = 5, ORANGE_PEG = 6,
  PINK_PEG = 7, AQUA_PEG = 8, EMPTY_PEG = 9;

function Peg(color) {
  this.color = color;
  this.imageSrc;

  switch (color) {
    case RED_PEG:
      this.imageSrc = "images/redAlien.gif";
      // console.log("red");
      break;
    case YELLOW_PEG:
      this.imageSrc = "images/yellowAlien.gif";
      break;
    case GREEN_PEG:
      this.imageSrc = "images/greenAlien.gif";
      break;
    case PURPLE_PEG:
      this.imageSrc = "images/purpleAlien.gif";
      break;
    case BLUE_PEG:
      this.imageSrc = "images/purpleAlien.gif";
      break;
    case ORANGE_PEG:
      this.imageSrc = "images/orangeAlien.gif";
      break;
    case PINK_PEG:
      this.imageSrc = "images/pinkAlien.gif";
      break;
    case AQUA_PEG:
      this.imageSrc = "images/aquaAlien.gif";
      break;
    default:
      this.imageSrc = "images/emptyPeg.gif";
      break;
  }
}


// Rocket: =========================================================
const BLUE_ROCKET = 1, WHITE_ROCKET = 2, EMPTY_ROCKET = 3;

function Rocket(fill) {
  this.fill = fill;
  this.imageSrc;

  switch (fill) {
    case BLUE_ROCKET:
      this.imageSrc = "images/blueRocket.gif";
      break;
    case WHITE_ROCKET:
      this.imageSrc = "images/whiteRocket.gif";
      break;
    default:
      this.imageSrc = "images/emptyRocket.gif";
      break;
  }
}


// Goal: =========================================================
const NUM_PEGS = 4, COUNTED_BLUE = 1, COUNTED_WHITE = 2, NOT_COUNTED = 3;
function Goal(level) {
  this.level = level;
  this.sequence = []; // element type: Peg
  this.beenCounted = []; // element type: int

  for (i in beenCounted) {
    beenCounted[i] = NOT_COUNTED;
  }

  switch (level) {
  case 1:
    for (i = 0; i < NUM_PEGS; i++) {
      randDouble = Math.random();
      if (randDouble < 0.25) {
        sequence[i] = new Peg(RED_PEG);
      } else if ((randDouble >= 0.25) && (randDouble < 0.5)) {
        sequence[i] = new Peg(YELLOW_PEG);
      } else if ((randDouble >= 0.5) && (randDouble < 0.75)) {
        sequence[i] = new Peg(GREEN_PEG);
      } else { // (randDouble >= 0.75)
        sequence[i] = new Peg(PURPLE_PEG);
      }
    }
    break;
  case 2:
    for (i = 0; i < NUM_PEGS; i++) {
      randDouble = Math.random();
      if (randDouble < 0.2) {
        sequence[i] = new Peg(RED_PEG);
      } else if ((randDouble >= 0.2) && (randDouble < 0.4)) {
        sequence[i] = new Peg(YELLOW_PEG);
      } else if ((randDouble >= 0.4) && (randDouble < 0.6)) {
        sequence[i] = new Peg(GREEN_PEG);
      } else if ((randDouble >= 0.6) && (randDouble < 0.8)) {
        sequence[i] = new Peg(PURPLE_PEG);
      } else { // (randDouble >= 0.8)
        sequence[i] = new Peg(BLUE_PEG);
      }
    }
    break;
  case 3:
    for (i = 0; i < NUM_PEGS; i++) {
      randDouble = rand.nextDouble();
      if (randDouble < 0.167) {
        sequence[i] = new Peg(RED_PEG);
      } else if ((randDouble >= 0.167) && (randDouble < 0.333)) {
        sequence[i] = new Peg(YELLOW_PEG);
      } else if ((randDouble >= 0.333) && (randDouble < 0.5)) {
        sequence[i] = new Peg(GREEN_PEG);
      } else if ((randDouble >= 0.5) && (randDouble < 0.667)) {
        sequence[i] = new Peg(PURPLE_PEG);
      } else if ((randDouble >= 0.667) && (randDouble < 0.833)) {
        sequence[i] = new Peg(BLUE_PEG);
      } else { // (randDouble >= 0.833)
        sequence[i] = new Peg(ORANGE_PEG);
      }
    }
    break;
  case 4:
    for (i = 0; i < NUM_PEGS; i++) {
      randDouble = rand.nextDouble();
      if (randDouble < 0.143) {
        sequence[i] = new Peg(RED_PEG);
      } else if ((randDouble >= 0.143) && (randDouble < 0.286)) {
        sequence[i] = new Peg(YELLOW_PEG);
      } else if ((randDouble >= 0.286) && (randDouble < 0.429)) {
        sequence[i] = new Peg(GREEN_PEG);
      } else if ((randDouble >= 0.429) && (randDouble < 0.572)) {
        sequence[i] = new Peg(PURPLE_PEG);
      } else if ((randDouble >= 0.572) && (randDouble < 0.715)) {
        sequence[i] = new Peg(BLUE_PEG);
      } else if ((randDouble >= 0.715) && (randDouble < 0.858)) {
        sequence[i] = new Peg(ORANGE_PEG);
      } else { // (randDouble >= 0.858)
        sequence[i] = new Peg(PINK_PEG);
      }
    }
    break;
  default: // case 5:
    for (i = 0; i < NUM_PEGS; i++) {
      randDouble = rand.nextDouble();
      if (randDouble < 0.125) {
        sequence[i] = new Peg(RED_PEG);
      } else if ((randDouble >= 0.125) && (randDouble < 0.25)) {
        sequence[i] = new Peg(YELLOW_PEG);
      } else if ((randDouble >= 0.25) && (randDouble < 0.375)) {
        sequence[i] = new Peg(GREEN_PEG);
      } else if ((randDouble >= 0.375) && (randDouble < 0.5)) {
        sequence[i] = new Peg(PURPLE_PEG);
      } else if ((randDouble >= 0.5) && (randDouble < 0.625)) {
        sequence[i] = new Peg(BLUE_PEG);
      } else if ((randDouble >= 0.625) && (randDouble < 0.75)) {
        sequence[i] = new Peg(ORANGE_PEG);
      } else if ((randDouble >= 0.75) && (randDouble < 0.875)) {
        sequence[i] = new Peg(PINK_PEG);
      } else { // (randDouble >= 0.875)
        sequence[i] = new Peg(AQUA_PEG);
      }
    }
    break;
  }

  Goal.prototype.setPegCount = function(index, color) {
    this.beenCounted[index] = color;
  }

	Goal.prototype.clearAllCounts = function() {
		for (i = 0; i < 4; i++) {
			this.beenCounted[i] = NOTCOUNTED;
		}
	}

	Goal.prototype.getPegCount = function(index) {
		return this.beenCounted[index];
	}
}


$(".btn").click(function () {
  p = new Peg(RED_PEG);
  // console.log("p.color: " + p.color);
  // console.log("p.imageSrc: " + p.imageSrc);
  $(".img1").attr("src", p.imageSrc);

  r = new Rocket(BLUE_ROCKET);
  console.log("r.imageSrc: " + r.imageSrc);
  $(".img2").attr("src", r.imageSrc);

  g = new Goal(1);
  console.log(g.sequence);
})