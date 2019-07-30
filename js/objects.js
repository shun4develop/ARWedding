//####################################################
//A-Frameオブジェクトのスーパークラス的なやつ
//####################################################
const AFEntity = (function(){
  const id_ = Symbol("id");
  const element_ = Symbol("element");
  const posX_ = Symbol("posX");
  const posY_ = Symbol("posY");
  const posZ_ = Symbol("posZ");
  return class{
    constructor(id) {
      this[id_] = id;
      this[element_] = document.createElement('a-entity');
      this[element_].setAttribute("id",id);
    }

    get id(){
      return this[id_];
    }
    get element(){
      return this[element_];
    }

    SetAttr(key,val){
      this[element_].setAttribute(key, val);
    }

    SetPos(x,y,z){
      this.SetAttr("position",x + " " + y + " " + z);
    }

    GetAttr(){
      return this[element_].getAttribute(key);
    }

    GetElement(){
      this[element_];
    }

    AppendChild(){
      this[element_].appendChild(element);
    }
  }
})();

const e = new AFEntity("test");
console.log(e.GetElement());  


/*
let scene = document.querySelector('#a-scene');
let objectContainer = document.querySelector('#object-container');

// random num generator
function getRandomNumber(x, y) {
  return Math.floor(Math.random() * x + y);
}

// get random hex color
function getRandomColor() {
  let letters = '0123456789abcdef';
  let randomColor = '';
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}

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
