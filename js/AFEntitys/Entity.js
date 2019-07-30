"use strict";

//####################################################
//A-Frameオブジェクトのスーパークラス的なやつ
//####################################################

class AFEntity{

	const id_ = Symbol("id");
	const element_ = Symbol("element");
	const posX_ = Symbol("posX");
	const posY_ = Symbol("posY");
	const posZ_ = Symbol("posZ");

	const EntityType = {
		box = "box",
		circle="circle",
		cone="cone",
		cylinder="cylinder",
		dodecahedron="dodecahedron",
		octahedron="octahedron",
		plane="plane",
		ring="ring",
		sphere="sphere",
		tetrahedron="tetrahedron",
		torus="torus",
		torusKnot="torusKnot",
		triangle="triangle"
	}

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