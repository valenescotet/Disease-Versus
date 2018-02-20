var selectedRect;
var rectSizes;
var selectedBrush = 0;
var symptom = [];
var disease= [];
function setup() {
  createCanvas(windowWidth, windowHeight);

	symptom= ["congestion, sore throat, coughing, headache", "congestion, sore throat, coughing, headache","mood swings, tender breast, food cravings, fatigue","mood swings, tender breast, food cravings, fatigue","abdominal pain, fatigue, upset stomach, poor appetite","abdominal pain, fatigue, upset stomach, poor appetite","headache, blurred vision, eye strain, irritated eyes", "headache, blurred vision, eye strain, irritated eyes", "excessive thirst or urination, fatigue, weight loss, dizziness", "excessive thirst or urination, fatigue, weight loss, dizziness"];
  textSize (50);
  textAlign (0);
  strokeWeight (7);
  disease= ["Flu", "Allegies", "Pregnancy", "PMS", "Appendicitis", "Colitis", "Myopia", "Eye Fatigue", "Diabetes", "Malnutrition"]
}

function draw() {
  background(0,0,0);
	textSize(40);
	textFont('Courier New');
	textAlign(CENTER);
	fill(255,255,255);
	strokeWeight(3);
	text("symptoms of: " +  disease[selectedBrush], width/2, height/2);
	textSize(30);
	fill(255,0,0);
	noStroke();
 // stroke (255,255,255);
  text(symptom[selectedBrush],mouseX, mouseY);
  
}
  

  function mousePressed () {
  selectedBrush++;
  if (selectedBrush >= symptom.length) {
    selectedBrush = 0;
  }
  
  function keyPressed (){
    symptom.push(key);
  }
}