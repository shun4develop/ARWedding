function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}
var AFEntity = function(id,type){
  this.id = id;
  this.type = type;
  this.positionX = 0;
  this.positionY = 0;
  this.positionZ = 0;
  this.rotationX = 0;
  this.rotationY = 0;
  this.rotationZ = 0;
  this.element = document.createElement('a-entity');
  this.element.setAttribute('id',id);
  this.element.setAttribute('geometry',"primitive: "+type);
  this.element.setAttribute('shadow','receive: true');
};
AFEntity.prototype.SetAttr = function(key,val){
  this.element.setAttribute(key, val);
};
AFEntity.prototype.SetPos = function(x,y,z){
  this.SetAttr("position",x + " " + y + " " + z);
};
AFEntity.prototype.GetAttr = function(key){
  return this.element.getAttribute(key);
};
AFEntity.prototype.AppendChild = function(){
  this.element.appendChild(element);
};

//OBJ
var AFObjectModel = function(id,model){
  this.element = document.createElement('a-gltf-model');
  this.element.setAttribute("id",id);
  this.element.setAttribute("src",model);
};

//Animation
var AFAnimation = function(mode,animationProperty){
  this.mode = mode;
  this.element = document.createElement('a-animation');
  this.element.setAttribute("attribute",mode)
  for(var key in animationProperty) {
    this.element.setAttribute(key,animationProperty[key]);
  }
  //this.element.setAttribute("animation",propertys);
}

let objectContainer = document.querySelector('#object-container');

function generateObject(){

  var obj1 = new AFEntity("test2","");
  obj1.SetAttr("gltf-model","src: url(./resouces/earth.glb.gltf);")
  
  objectContainer.appendChild(obj1.element);
}

generateObject();

/*
let scene = document.querySelector('#a-scene');
let objectContainer = document.querySelector('#object-container');

// random num generator
function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

// get random hex color


// change this value for more or less rings
let totalRingElements = 10;

function generateAllElements() {


  for(let a = 0; a < totalRingElements; a++){

    // element params
    let totalCircleElements = getRandomNumber(10, 3);
    let elementScale = getRandomNumber(3, 1);
    let scaleDuration = getRandomNumber(3000, 1000);

    // path params
    let pathValOne = getRandomNumber(21, -10);
    let pathValTwo = getRandomNumber(11, -20);
    let pathDuration = getRandomNumber(6000, 5000);

    for (let i = 1; i <= totalCircleElements; i++) {

      let currentRotation = 360 / totalCircleElements * i;
      let rotateContainer = document.createElement('a-entity');
      rotateContainer.setAttribute('rotation', `0 0 ${currentRotation}`);

      // generate circle element and set params
      let circleElementContainer = document.createElement('a-entity');
      circleElementContainer.setAttribute('position', `0 1 0`);
      let circleElement = document.createElement('a-entity');
      circleElement.setAttribute('class', `circleElement`);
      circleElement.setAttribute('scale', `${elementScale} ${elementScale} ${elementScale}`);
      circleElement.setAttribute('material', `color:#${getRandomColor()}; metalness: 0; roughness: 0`);
      circleElement.setAttribute('geometry', `primitive: sphere; radius: 1.5`);
      circleElement.setAttribute('animation__yoyo', `property: scale; dir: alternate; dur: ${scaleDuration}; easing: easeInOutSine; loop: true; to: 0 0 0`);
      circleElementContainer.appendChild(circleElement);
      rotateContainer.appendChild(circleElementContainer);

      // generate path and apply it
      let track1 = document.createElement('a-curve');
      track1.setAttribute('class', `track${a}`);
      scene.append(track1);
      let point1 = document.createElement('a-curve-point');
      point1.setAttribute('position', '0 0 0');
      track1.append(point1);
      let point2 = document.createElement('a-curve-point');
      point2.setAttribute('position', `${pathValOne} ${pathValTwo} ${pathValOne}`);
      track1.append(point2);
      let point3 = document.createElement('a-curve-point');
      point3.setAttribute('position', `${pathValTwo} ${pathValOne} ${pathValTwo}`);
      track1.append(point3);
      let point4 = document.createElement('a-curve-point');
      point4.setAttribute('position', '0 0 0');
      track1.append(point4);
      circleElement.setAttribute(`alongpath`, `curve: .track${a}; dur: ${pathDuration}; loop: true`);

      // append element to main container
      objectContainer.appendChild(rotateContainer);

    }

  }

}

generateAllElements()*/
