"use strict";
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
