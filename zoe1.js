(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"zoe1_atlas_", frames: [[0,2310,900,546],[1670,276,50,50],[0,770,1366,768],[902,2667,900,126],[0,1540,1366,768],[1368,276,300,380],[902,2310,900,355],[0,0,1366,768],[1722,276,32,32],[1368,0,440,274]]}
];


// symbols:



(lib.about = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.close = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.gamebg = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gameTitle = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.introBg = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.optionArea = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.questionArea = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.result = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.TextInput = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.timesup = function() {
	this.spriteSheet = ss["zoe1_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.wrongOption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// wrong-option.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DD0303").s().p("ABfC5IkYkXQgRgSAAgZQAAgZARgSIAFgEQASgSAaAAQAZAAARASIEXEXQASASAAAZQAAAZgSASIgFAEQgRASgZAAQgaAAgRgSg");
	this.shape.setTransform(20.3,20.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD0303").s().p("Ai0C5IgFgEQgRgSAAgZQAAgZARgSIEYkXQARgSAaAAQAZAAARASIAFAEQASASAAAZQAAAZgSASIkXEXQgRASgZAAQgaAAgSgSg");
	this.shape_1.setTransform(20.3,20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.wrongOption, new cjs.Rectangle(0,0,40.6,40.7), null);


(lib.uarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#445431").s().p("AiGF5QghgMgPggQgPggALghIDUpRQAMggAggPQAggPAhALQAhAMAPAgQAPAggLAhIjVJRQgLAhggAPQgSAIgTAAQgOAAgOgFg");
	this.shape.setTransform(19.2,38.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.uarm, new cjs.Rectangle(0,0,38.4,76.4), null);


(lib.timesUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.timesup();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.864,0.864);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.timesUp, new cjs.Rectangle(0,0,380,236.6), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F385C").s().p("AgZAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAIAzAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(146.7,1.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F385C").s().p("AggAMQgFAAgDgEQgDgDAAgFQAAgEADgDQADgEAFAAIBAAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAg");
	this.shape_1.setTransform(148.8,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F385C").s().p("AjjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIHHAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_2.setTransform(141.9,10.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F385C").s().p("AimAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIFNAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_3.setTransform(118.9,23.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED548D").s().p("AgfAMQgFAAgEgEQgDgDAAgFQAAgEADgDQAEgEAFAAIBAAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAg");
	this.shape_4.setTransform(158.1,131.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF528D").s().p("AiqAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAIFVAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_5.setTransform(144,122.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2518B").s().p("AinAKQgEAAgCgDQgDgDAAgEQAAgDADgDQADgDADAAIFOAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_6.setTransform(124.2,105.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_7.setTransform(62.4,62.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_8.setTransform(68.8,62.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_9.setTransform(75.3,62.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_10.setTransform(81.7,62.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_11.setTransform(88.4,62.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_12.setTransform(94.8,62.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_13.setTransform(101.2,62.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_14.setTransform(107.6,62.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_15.setTransform(115.5,62.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_16.setTransform(121.9,62.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_17.setTransform(128.3,62.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_18.setTransform(134.7,62.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_19.setTransform(142,62.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_20.setTransform(148.4,62.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_21.setTransform(154.8,62.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_22.setTransform(161.3,62.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCA74").s().p("AhwgPQAHgHBvAAQA5AAA2ABIAXArIkXABQAPgaAMgMg");
	this.shape_23.setTransform(15.4,64.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF528D").s().p("AG0GhQhGAAg5gdQgugXhOhBItIq0IIwgYILvNBg");
	this.shape_24.setTransform(100.3,110.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD466E").s().p("ABchAQggBAhIAkQhHAZgIAEg");
	this.shape_25.setTransform(200.5,83.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AC456E").s().p("At6AzIAAhlIb1AAIimBlg");
	this.shape_26.setTransform(118.8,85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EF528D").s().p("Ak5ArIDclFQAng4AfgbQAugqAtAAID2AAIhNDhIhUEcQgyCrhxBVQgkAagmAPIgeAJg");
	this.shape_27.setTransform(202.8,49.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B1416C").s().p("AAVA8QgVAAgngTQgrgWgVgZIgug1IDgASIBLAAIAABlg");
	this.shape_28.setTransform(15.9,84.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF528D").s().p("ABIC6QgqABgggZIiJhfQgIgUgBgdQgBg5AqgsQA1g5BqgcQA2gOArgDIAAFzg");
	this.shape_29.setTransform(14.9,71.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3538A").s().p("AsnCIIAAkOIZPAAIAAEOg");
	this.shape_30.setTransform(110.5,66.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8F385C").s().p("AoHGLIJ9qMQA4g7AqgaQA0giA9gFIC/gTIpJMhg");
	this.shape_31.setTransform(81.8,40.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,234.2,152.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#845326").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape.setTransform(40.2,60.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1.setTransform(39.1,62);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(38,63.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#845326").s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape_3.setTransform(36.2,64.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_4.setTransform(34.2,64.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(31.4,65.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#845326").s().p("AgDAAQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_6.setTransform(18.3,60.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_7.setTransform(19.4,62);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_8.setTransform(20.5,63.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#845326").s().p("AgEAAQgBgFAFAAQAFAAAAAFQAAAGgFAAQgFAAABgGg");
	this.shape_9.setTransform(22.3,64.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_10.setTransform(24.3,64.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#845326").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
	this.shape_11.setTransform(27.1,65.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_12.setTransform(29.4,65.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#845326").s().p("AgIAeQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAPg2QABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABIgPA1QAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(26.5,72.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#845326").s().p("AAIAeQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgPg1QAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAPA2QAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_14.setTransform(31.7,72.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#845326").s().p("AgCAeIAAg7QAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_15.setTransform(29.1,72.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#845326").s().p("AgEAnIgmgZQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABABQAAAAABAAIAmAaQAEADAFgEQAcgbADgWQABgGgFgCIgagMQgHgDgCAGIgMAXQgDAGAFADIAKAHQAFAEAEgFIAIgIQACgEAAgDQgBgDgDgCQgHgDgDAGIgDAFQgBABAAAAQgBAAAAABQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFQADgFAFgBQAFgBAFACQAGAEAAAFQABAHgEADIgIAJQgDAEgFABQgFAAgDgDIgKgHQgJgFAFgLIAMgWQADgFADgBQAFgCAFACIAaAMQAJAEgBAJQgEAageAbQgEAEgEAAQgDAAgEgDg");
	this.shape_16.setTransform(44,63.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#845326").s().p("AgQAkQgJAAgDgIIgRgqQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIARAqQACAFAGgBQAjgEATgTQADgEgDgEIgOgYQgEgHgGAEIgWALQgFAEABAGIAEAKQADAHAFgCIAMgDQADgBACgDQABgCgBgEQgBgCgDgBQgDgBgDABIgGACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAGgDQAFgCAFACQAFACACAFQADAFgDAFQgDAGgGABIgLADQgEACgFgDQgEgCgCgFIgEgKQgCgFACgFQACgFAEgCIAWgLQAFgDAFACQAFABADAFIAOAYQAFAIgGAHQgTAUgmAFg");
	this.shape_17.setTransform(36.8,70.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#845326").s().p("AgKAmQgegbgEgaQgBgJAJgEIAagMQAFgCAFACQAEABACAFIAMAWQAFALgJAFIgKAHQgEADgEAAQgFgBgDgEIgIgJQgEgDABgHQAAgFAGgEQAFgCAFABQAFABACAFIADAFQABAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAgBAAAAQAAAAgBgBIgDgFQgDgGgHADQgDACgBADQAAADACAEIAIAIQAEAFAFgEIAKgHQAFgDgDgGIgMgXQgBgCgCgBQgDgBgDABIgaAMQgFACABAGQADAWAcAbQAFAEAEgDIAmgaQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAgBABQAAAAgBABIgmAZQgEADgDAAQgEAAgEgEg");
	this.shape_18.setTransform(14.4,63.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#845326").s().p("AAJAcIgRgJQgIgEADgKIADgIQABgEAEgCQAEgCADABIAJACQAFACACAEQADAEgDAFQgCAEgEACQgEABgEgCIgEgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAEACQAGACABgFQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgJgCQgEgCgCAFIgDAIQgCAFAFACIARAJQAEACADgEIALgUQACgCgCgDQgOgOgcgEQgEAAgCAEIgNAgQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIANggQADgJAIACQAfAEAPAPQAFAGgEAGIgLATQgDAGgHAAIgFgBg");
	this.shape_19.setTransform(36.3,9.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#845326").s().p("AgQAgIgPggQgEgIAHgFQAagUATABQAIAAACAIIAGAVQADAJgKAEIgTAGQgDACgEgCQgDgBgCgEIgFgJQgCgCACgFQABgEAEgCIAHgFQADgCAGABQAFACACAFQABAEgBAEQgCADgEACIgFACQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAEgCQAFgBgCgFQAAgBAAgBQgBAAAAgBQgBAAAAgBQAAAAgBAAIgEABIgHAFQgFADADADIAEAIQABAEAEgBIATgHQAGgBgCgEIgGgWQgBgDgEgBIgBAAQgRAAgYASQgDADACAEIAPAgQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCABQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_20.setTransform(22.5,9.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#845326").s().p("AgdAZIgCgjQAAgJAIgDQAdgJAUAIQAHAEgBAIIgCAVQgBAKgKAAIgTgBQgEAAgDgDQgDgDgBgEIgBgJQgBgJAKgCIAIgCQAFgBAFADQADADAAAGQAAADgDAEQgDADgEAAIgFAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAFAAQAFgBAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIgIACQgEABAAAFIABAIQABAFAEAAIATABQAFAAAAgFIADgVQAAgEgDgBQgSgIgcAJQgDACAAADIACAjQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_21.setTransform(29.6,7.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#845326").s().p("AAPAkQgmgFgTgUQgGgHAFgIIAOgYQADgFAFgBQAFgCAFADIAWALQAKAFgEAMIgEAKQgCAFgEACQgFADgEgCIgLgDQgGgBgDgGQgDgFADgFQACgFAFgCQAFgCAFACIAFADQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIgGgCQgDgBgDABQgDABgBACQgBAEABACQACADADABIAMADQAFACADgHIAEgKQABgGgFgEIgWgLQgGgEgEAHIgOAYQgDAEADAEQATATAjAEQAGACACgGIARgqQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgRAqQgDAIgJAAg");
	this.shape_22.setTransform(21.6,70.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#845326").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDgAgFAAQAAAHAFAAQAHAAAAgHQAAgFgHAAQgFAAAAAFg");
	this.shape_23.setTransform(31.8,13.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#845326").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDgAgGAAQAAAHAGAAQAGAAAAgHQAAgFgGAAQgGAAAAAFg");
	this.shape_24.setTransform(26,13.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#845326").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDgAgGAAQABAGAFAAQAHAAgBgGQABgFgHAAQgFAAgBAFg");
	this.shape_25.setTransform(28.9,13);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#845326").s().p("AgYAYQgKgJAAgPQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLgAgUgUQgJAIABAMQgBAMAJAJQAJAIALAAQAMAAAIgIQAJgJAAgMQAAgMgJgIQgIgJgMAAQgLAAgJAJg");
	this.shape_26.setTransform(37.2,16.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#845326").s().p("AAxAEIgIgCIgpgDIgpADIgHACIgJAEIADgDIAFgDIAHgCQARgGAZgBIAXACQAMACAHADIAIACIAIAGg");
	this.shape_27.setTransform(28.9,11.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#845326").s().p("AAHAHIgHgaQgEgKgDgEIgFgLIgBgDIAKAMIAHAOQADAIADAKIACAJIACASIgCAYg");
	this.shape_28.setTransform(44.5,16.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#845326").s().p("AADAAIgGgQIgMgcIAJAMIAHANQAFAIADAJQAEAIABAIIADAQIAAAPg");
	this.shape_29.setTransform(42.1,17.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#845326").s().p("AgNAYIACgSIACgJQACgKAEgIIAHgOIAKgMIgBADIgGALQgDAEgDAKIgHAaIgGApg");
	this.shape_30.setTransform(14,16.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#845326").s().p("AgPAeIACgQQACgIAEgIQADgJAEgIIAHgNIAKgMIgOAcIgGAQIgHAXIgFAWg");
	this.shape_31.setTransform(16.4,17.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#845326").s().p("AgYAYQgKgJAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAJQgLALgOAAQgNAAgLgLgAgUgUQgIAIAAAMQAAAMAIAJQAJAIALAAQAMAAAJgIQAIgJABgMQgBgMgIgIQgJgJgMAAQgLAAgJAJg");
	this.shape_32.setTransform(21.3,16.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#845326").s().p("AgbAYIgEgFQgFgJAAgKQAAgOALgLQALgLAOAAQAJAAAIAEIAFADQAPALAAASQAAAPgLALQgLALgPAAQgPAAgMgNgAgVgWQgJAKAAAMQAAAGADAHIADAFQAJANAPAAQANAAAJgJQAKgJgBgNQABgRgPgJIgGgDQgFgBgGgBQgMAAgJAJg");
	this.shape_33.setTransform(47.4,46.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#845326").s().p("AgZAaQgLgLAAgPQAAgVATgKIAGgDQAFgCAGAAQAPAAALALQALALAAAOQAAALgHAKIgEAFQgLALgPAAQgPAAgKgLgAgGgeIgGACQgSAIgBAUQABANAIAJQAKAJAMAAQAPAAAJgLIAEgGQADgGAAgIQAAgMgJgKQgJgJgNAAg");
	this.shape_34.setTransform(11.1,46.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#845326").s().p("AguATQgSgFgSgNQgNgJgIgKIgEgIIAFAHQAHAIAPAKQAOAJAWAHQAUAGAYAAQAZAAAUgGQAWgHAOgJQAQgKAGgIIAFgHIgEAIQgIAKgNAJQgSANgSAFQgXAIgYgBQgXABgXgIg");
	this.shape_35.setTransform(29.2,65.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#845326").s().p("AAAA3QgLAAgOgCIgBAAIgBAAIgBgBIgSgEIgCgBIgBAAIgBAAIgBgBQgLgEgIgFIgBAAIgBAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgIgGQgNgJgIgLIgEgHIAFAHQAHAIAPAKIAHAEIAUgqQgOgFgPgLQgOgKgHgKQgDgEgBgDIAFAGQAIAKAOAIQAMAJATAGIABAAIABABIAMADIABAAQASAEAQAAQARAAASgEIABAAIAMgDIABgBIABAAQATgGAMgJQAOgIAIgKIAFgGQgBADgDAEQgHAKgOAKQgPALgOAFIAUAqIAHgEQAPgKAHgIIAFgHIgEAHQgIALgNAJIgIAGQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgBAAIgBAAQgIAFgLAEIgBABIgBAAIgBAAIgCABIgSAEIgBABIgBAAIgBAAQgOACgMAAgAADgBIAAAyIAVgBIgKgygAgXAwIAVABIAAgyIgLgBgAAUgDIAJAyIAQgEIACAAIgNgwIgOACgAguArIACAAIAQAEIAJgyIgOgCgAAogGIAMAvIARgHIgVgrgAhEAiIARAHIAMgvIgIgDg");
	this.shape_36.setTransform(29.2,59.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_37.setTransform(33.6,78.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_38.setTransform(39.1,76.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#845326").s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_39.setTransform(43.7,73.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_40.setTransform(47.4,70.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_41.setTransform(49.8,66.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_42.setTransform(24.8,78.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_43.setTransform(19.4,76.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#845326").s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_44.setTransform(14.8,73.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_45.setTransform(11.1,70.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_46.setTransform(8.6,66.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#845326").s().p("Ai5AYQg3gzgIguQgCgOAGgGQAEgEAIAAQAQACAJAPQA2BfBSAfQApAQAegEIAAAAIAVAAQAZgCAagKQBRgfA3hfQAJgPAQgCQAIAAAEAEQAGAGgCAOQgIAug3AzQhMBHhuADQhtgDhMhHgAjwhZQgEAEACAMQAHArA3AyQBKBFBqAEQBsgEBKhFQA2gyAHgrQACgMgEgEQgCgCgGAAQgNABgHANQgpBJg6AkQgoAZgrAGQgUADgLgCQgjAEgsgTQhPghg2hdQgHgNgNgBIgCAAQgEAAgCACg");
	this.shape_47.setTransform(29.2,70.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#845326").s().p("AgeAHIgDgBQgHgCABgGQABgIAHAAIAWgBIATAAIAWABQAHAAABAIQABAGgHACIgDABQgPAFgQAAQgPAAgPgFgAgegEQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIADABQAcAKAdgKIADgBQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgVgBIgTAAIgVABg");
	this.shape_48.setTransform(29.2,52.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#845326").s().p("AgjAYQgigLAAgVQAAgFAEgEQAJgIAcgCQAOgBAOAAIAdABQAcACAJAIQAEAEAAAFQAAAVgiALQgQAFgUAAQgTAAgQgFgAg9gNQAAAAgBABQAAAAAAABQgBABAAAAQAAABAAABQAAARAeAJQAhAMAigMQAegJAAgRQAAgBAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgHgGgXgCQgQgCgQABIgJAAQgqAAgKAJg");
	this.shape_49.setTransform(29.2,52.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#845326").s().p("AgIAaQgQgDgMgOIgKgNQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAVgRAUgCQAEgBADABIAGABQAaAFAOAZQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgXASgWAAgAgogEQANASAPAFQAJgBAHgCIgDAAQgRAAgOgRIgBgCIABgCQAQgKANAAQAEAAAFACIgDgCIgKgFQgSACgRAOgAgYgCQALAMAOAAQALAAANgHQgMgMgOAAQgMAAgLAHg");
	this.shape_50.setTransform(36.3,41.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#845326").s().p("AguAJQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAEgGAHgHQANgOAQgDQAYgGAeAYQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAQgDAGgHAHQgMAOgQADIgKABQgWAAgXgSgAgRgQQgPAIgIAOQARANARACQAKgCAHgGQgGADgFAAQgPAAgPgKQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCQAQgRARAAIAFABIgHgCIgHgBIgKABgAgYADQANAHALAAQAOAAALgMQgLgHgMAAQgOAAgMAMg");
	this.shape_51.setTransform(22.1,41.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#845326").s().p("AgkA0QgIgCgGgHQgFgFABgJQABgMAHgGQAIgGAMACQABgjAMgSQAHgIAGgBIABAAIANAJQAMASABAjQAMgCAIAGQAIAGAAAMQABAJgFAFQgFAHgJACQgUAFgRgBQgQABgUgFgAgrAQQgFAEAAAIQABAJAKAEQAFACAKABQAcACALgBQAigGgFgVIgCgCQgFgDgIAAIgHABIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgfgJgQQgGgLgGgBQgFABgGALQgJAQAAAfQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABIgIgBQgHAAgFADg");
	this.shape_52.setTransform(29.2,43.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#845326").s().p("AAAGZIgwgEQhGgIg3goQg4gogbg+IgBgDQgEgJgEgPQgFgPgDgVQgBgJACgHQAEgKAJgCQAEgCALAAIABABQAqABAmgPQAPgFADgIQABgGgBgHIgEgJQgOAHgRAAQgdAAgUgTQgUgVAAgcQAAgbARgTQgHgBgEgDQgNgFgPgLQgOgKgEgLQgFgLAGgKQACgDAFgEIADgDQALgFAUABIAGAAQAbgBAagNQAZgMAQgWQAKgNACgMQABgIgEgHQgDgGgFgDQgFgDgLABQgOABgQAIIgcARIgPAKQgPAHgJgBQgMgCgDgSQgBgJACgVIACgNIAAgBQACgNADgKIABgBIAGgSIACgFQAIgOAIgLIABgBQAIgLALgKIABgBIAPgMQAYgSAagIQAQgwA9gWQAjgNAogDIADAAQASAAAbAGQAwAKAdAXIABAAIACADQAWASAJAaQAfAJAbAXIAHAGQALAKAJALIABACQAIALAIAOIAAABQAEAIAFAPQAEAOACAWIAEAcQAAANgJAFQgNAKgTgLIgPgKIgcgRQgQgIgOgBQgKgBgGADQgFADgDAGQgDAHAAAIQACAMAKANQARAXAZAMQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAYAKAZABIAGAAQAUgBALAFQAGAEAEAGQAGAKgFALQgEALgOAKQgMAJgaALQAQAUAAAaQAAAcgUAVQgUATgdAAQgVAAgRgLQgBALACAIQAFAPAPAFQAmAPAqgBIABgBQALAAAEACQAJACAEAKQACAHgBAJQgEAfgNAgQgTArghAhQghAhgsATIgBABIgLAFQggAMgjAEIgxAEIAAABgAiHBpIACAHQADAYgKAMQgFAFgNAGQgcAMgpACQgQAAgHAFQgJAFgCAMQAAAOAIAVQANAhAMASQANATAbAZQApAmAdANQANAGAZAHQA3ANA2gFQA6gFAwgaQAygaAhguQAjguAGg2QgCgIgFgFQgJgIgZAAQgrgBgWgPQgMgJgHgQQgIgSAHgMQgFgFgGgKIgBAFQgSAigiAVQgjAVglgBQgnAAgjgZQgQgLgMgRQgOgTgCgIQgGALgIAHgAg8gpQgXACgMADQgJACgHAEQgGAFgDAJIgFAPIgDAJQAQATAAAaQAAANgEALQAGANAGAJQARAaAbAOQAcAPAgAAQAhAAAcgPQAbgOARgaQAGgJAGgNQgEgLAAgNQAAgYAOgRQgCgEgBgIIgCgLQgDgNgRgJQgKgFgUgCQgggEglAAQgeAAghADgAjdAEIgFAFQgSASAAAaQAAALAEAKQAWAkAhAAQATgBAPgNIAFgFQALgMAEgPIABgHQACgUgIgRQgHgOgOgLQgLgFgMAAQgXAAgSAOgACJAHIgFAGQgOASAAAWQAAAIADAIIACAIIAFAKQAGAGAGADIAFADQAQAIARgBQASAAAOgKQALgHAEgJQAFgJABgMQAEgZgLgUIgBgBIgDgFQgHgIgLgGQgLgEgKAAQgZAAgTARgAB4goIAGAHIACAEIABAAQAFAJABAKIACALQASgPAXgBQgNgPgGgMQgFAJgJAAQgOAAgCgMQgFAFgEAAgAixgPQAXABASAPQADgUAIgOIAGgHQgEAAgFgFQgCAMgOAAQgJAAgFgJQgGAMgNAPgACdhBIABAAIADANQAFAPARASIABAEQAXABASAOIABgBQABgEAOgEQgkgHgYgYQgPgNgDgNgAi0goQgZAYgjAGQALAGAJABQARgLAUgBIABgEQARgSAFgPIADgMIgEgBQgEANgPAMgACohEQADALAOANQAcAbAmADQAOgIAHgKIgTACQglAAgegXIgCgDQgJgHgCgFgAkMgdQAJAJALAGQAlgEAbgaQANgLAEgLIgGgCQgCAGgJAHIgBACQgeAXglAAIgSgCgAkVgvQAAAFACADQAXAGAWgGQAXgEASgPIACgBQAGgFACgFIgBgBIgGgBIgBAAQgYAVgiABQgQAAgPgHIgBAJgACzhGQABAEAIAGIACACQASAPAXAEQAYAGAWgGIADgJQABgDgBgDQgPAGgRAAQgjAAgbgagACJg5QgDADAAAFQAAAEADAEQADACAFAAQAEAAADgCQADgEAAgEIAAgCIgBgDQgDgGgGAAQgFgBgDAEgAiZg2IgBADIAAACQAAAEADAEQADACAEAAQAFAAADgCQADgEAAgEQAAgFgDgDQgDgEgFABQgGAAgDAGgABog4QAAAGAEACQADADAEABQAFgBADgDQADgCAAgGQAAgGgGgDIgFgBIgBAAQgKACAAAIgAh4hBQgFAEAAAFQAAAGADACQADADAFABQAEgBAEgDQADgCAAgGQAAgHgJgDIgCAAQgEAAgCABgAhRhJQAHAEAAAIQAAAGgFAFQAVgDAgAAQAAgJgIgHQgIgGgKgCIgEAAQgKAAgPAEgABQgyQgFgEAAgHQAAgIAHgEQgSgEgLAAQgKACgIAGQgIAHAAAJQAYAAAWACIACAAIAFABIAAAAgABThEQgCADAAAEQAAAEACACQADADAEAAQAEAAACgDQADgCAAgEQAAgEgDgDQgCgCgEAAQgEAAgDACgAhfhEQgDADAAAEQAAAEADACQADADADAAQAEAAADgDQACgCAAgEQAAgEgCgDQgDgCgEAAQgDAAgDACgAgKhGQgDADAAAEQAAAIAIADIAFgBQAIgCAAgIQAAgEgDgDQgEgEgDAAQgFAAgDAEgAAvhhIgGAEQgRALgJAEIgJABQAHAFAAAJQAAAFgDAFIAKAAIABgCQABgKAKgJQAJgHALgBQAJgBAHABQAGAAAZAEQAkAGARgJQANgHAFAAIgMgJIgGABQgNAKgagEIgHgBIgGADIgBABIgCABQgNAEgTgIQgNgFgEgEgAg9hTIAKABQALABAJAHQAKAJABAKIABACIAEAAQgEgFAAgFQAAgKAIgEIgBAAQgMgBgKgEQgNgGgDgJIgDADQgTANgYgEQgEAAgCgCQgEgEgCgBIgHAAQgSAGgRgJIgHgCQgHAGgLAHIAEABIARAHQAQAEAWgEIAcgEQAMgDAJAAIAGAAgADqg3QAXAFAUgJIgBAAQgIgEgUgBIgHAAQgagBgWgKQASAQAXAEgAkRg8QAUAIAWgFQAWgEARgOQgWAKgaABIgIAAQgRAAgIAEgAgShdIAQACIAOgCIAAgEIACgNIgGABIgVgBIgGgBIABASIgEgTIgBAAIgJgCIAKAAIgBgFIgBgNIgIgCIAHgBIAAgRIgHgDIAHAAIAAgSIgHgCIAHgBIABgCIABgPIgJgCIAKAAIACgRIgLgDIAMgBIAFgUQADgJAEgKIABgCQgPAJgKAhQgFAPgCAMQgGAiABAdQADAIgBAEIgBAAQABAKACABQAHAHAOACgABQhdQALACAFgCQAEgBAIgQQAJgTAGgVIAEgUIgIgCIgEAMIAGADIgGgBIgEAKIgBACIAFADIgGgBIgFAMIAEACIgFAAIgGALIAFADIgGAAIgFAIIgCADIAGACIgHAAIAAgBgAh+iqIAEAUQAGAVAJATQAIAQAEABQAFACALgCIgIgLIAAABIgHAAIAGgCIgCgDIgFgIIgGAAIAFgDIgGgLIgFAAIAEgCIgFgMIgGABIAFgDIgBgCIgEgKIgGABIAGgDIgEgMgAA+hvIgDAIIAJAHIAMADIAFgKIABgBQgFgBgHgDIgLgGgAAYhxIgHACIgBAAIgDASQAOgDAGgGQAEgEAAgaQABgcgGgcQgCgMgEgPQgKghgQgJIABADIAGATIAFAUIAOAAIgCABIgHACIgEABIABADIACANIAKAAIgCABIgHACIgBAAIACAQIAAABIAIAAIgIADIABARIAHAAIgCABIgFACIAAASIAHAAIgHADIgBABIgBAOIAAACIAJAAgAhJhsQgHADgFABIABABIAFAKIAMgDIAJgHIgDgIIgBgDIgLAGgACBiGQgFAXgHAKIgBABQASAEATgGIgKgLQgLgPgBgNgAiQirQAQAJgCAUQAAAMgMARIgKALQAVAHAWgHQgLgUgHgbQgMguAOgRQACgCADAAIAAAAIAEgBQAOgBAOAMQALAIAJAPQAHAKAFAMIAHATQABgcAFgWQAKg9AcgNIACAAIAAgBIAHACIAHAHQAJAHAFAIQALAPAFAYQAHAegCApQAJgXAQgWQAdgmAVAAQADAAACACQAGAIABAOQADAKgBAKIgBAKQAEgHAHgEQAHgEALABIAPAEQAAgVgEggQgFgrgHgbQgQgUgigUQg4gjg6AAQg7AAg1AgQgcARgRATQgNArgFBXIAPgEIAGAAQAHAAAFADgABMitQgNATgJASQgIARACAEQADAHAHAFIADgMIgFgGIAGADIAEgLIAAgBIgEgEIACAAIADACIAGgMIgEgFIAFADIAGgMIgFgEIAGADIAAgBIAGgKIgFgGIAHAEIAHgKIgDgCIgEgEgAg8h0IAAABIADAMQAHgHACgDIgBgLQgGgVgUgcIgNgPIgEAEIgDACIAHAKIAHgEIgFAGIAGAKIAAABIAGgDIgFAEIAGAMIAFgDIgEAFIAGAMIADgCIACAAIgEAEIAAABIAEALIAGgDIgFAFgABFiAIgEAJIgBACIAXALIACgEIAEgIQgFAAgIgEIgLgGgAhPh6QgIAEgFAAIAEAIIACAEIAXgLIgBgCIgEgJIAAAAgAgUhyIAiAAIAAgRIgGABIgKABIgSgCgABGiDIAFACIATAJIAFgLIgMgEIgLgGgAhWiHIgMAEIAFALIATgJIAFgCIgGgKgABPiUIgCAEIAYALIAEgMIgMgEIgKgGgAhciVIgMAEIAEAMIAYgLIgCgEIgEgHgAgUiHIAiABIAAgQIgGABIgVgBIgHgBgAC/ivQADAGAIAFQASAOATAHQAIgDADgHQAEgIAAgLQgugVgWgEQAAAPAFAHgABVieIAAAAIAVAKIABgBIAEgJIgLgFIgJgEgAhjijIgLAFIAEAJIABABIAVgKIAAAAIgGgJIgJAEgAj+irIABAIQAEALAHACQAEABAIAAIAWgPQANgHAEgHQACgFACgLIABgDQgXAEgtAWgAAOibIgBgPIgPABIgRgDIgBARIAiAAgABciqIAUAJIADgMIgJgDIgHgEgAhpiwIgJADIADAMIASgIIABgBIgEgIIgCgCgAB3ivIAIAEQADgXgGgKgAh+irIAIgEIgFgdQgGAKADAXgAgTixIAAABIAfABIAAgBIgBgPIgDABIgVgBIgFgBgABli3IAPAHIAHgcIAAgBIgBgDIgDAAgAh6jNIAAABIAHAcIAPgHIgSgZIgDAAgAj8jCIgBANIgBAEQAxgXATgDIACgKQgXAAgtATgAD+iyIgBgQQgvgUgUABIAAAKQAVAEAvAVgABZi8IABAAIAIAEIAUgYQgNACgQASgAhhi4IAIgEIABAAQgQgSgNgCgAAKjDIgCgQIgKABIgLgBIgCgBIgCARIAbAAgAj5jZIgCARQAugUAVABIACgNIgCgBQgdAAgkAQgAD8jJIgCgQQgmgQgcABIABANQAWgBAtATgAAHjXIgHgnIAAgDIgBgBIgCAAIgCABIgBADIgIAmIAMAAIAJABgAD4jfIgEgOQgqgOgVACIACALIADAAQAZAAAlAPgAj0jsIgDANQAlgQAcABIACgLIgGAAQgXAAgjANgAjskCIgGAPQApgOAVACIACgIQgHgCgKAAQgRAAgYAHgADyj0IgIgPQgngJgQAFIABAIIAIAAQAVAAAhALgAjZkYIgOAPQAkgJASAGIACgNQgFgDgKAAQgLAAgQAEgADmkKIgEgHIgHgHQgigEgKAGIADAKQAHgDAKAAQAOAAAVAFgACskkIACAIQAKgFAbADIgLgJQgSAAgKADgAitkeIACgHQgJgCgSAAIgEACIgHAGIATgCQALAAAGADgACqktIABADQAJgDALAAQgJgGgQgHQACAGACAHgAi+ktQAKABAKACIAHgQQgOAFgNAIgACekxQgDgKgDgFIAAAAIgBAAQgEgOgIgLIgNAPQARALAPAOIAAAAgAiXlAQgCADgBAFIASgPIgIgHQgEAHgCAHIgBAAgAiNlTIAJAJIALgIIgJgQQgIAKgDAFgABvlUIAKAGIAOgPIgNgNgAh+llIAJARIAPgJIgKgVQgIAGgGAHgABblgIAAABIAPAIIAMgWQgHgGgJgFgAhrl1IAKAVIARgHIgIgYgABFlpIARAHIAAAAIALgZIgUgJgAhTmBIAIAYIASgFIgGgagAAvlvIARAFIAIgcIgUgFgAg6mJIAGAaQALgEALgBIgEgcgAATl1IAWAFIAFgdIgYgEgAgcmRIAEAcIATgBIAAgdIgXACgAAAl2IANABIADgdIgQgBg");
	this.shape_53.setTransform(29.2,41);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8CA95").s().p("AgMAiQgIgDgFgGQgHgJADgQQAEgVARgNIABAIQAGgIAKABQAKABAGAIQALAQgLAUQgHAQgPAFIgIACIgHgBg");
	this.shape_54.setTransform(44.7,63.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8CA95").s().p("AgTAbQgGgDgEgGQgEgGgBgHQAAgPAOgHIADgCQAHgLAXADQAQACAEAHQACADAAAHQABAXgLAIQgHAGgSAAIgFAAQgIAAgGgCg");
	this.shape_55.setTransform(36.9,70.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8CA95").s().p("AAGAeQgfgDgGgPQgFgMAIgLQAEgIANgLIACAIQAIgDAJABQAJACAHAGQAGAGADAJQACAIgCAJQgDAIgHAEQgFADgHAAIgFgBg");
	this.shape_56.setTransform(21.4,70.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8CA95").s().p("AgLAhQgRgPgGgWQgGgbAWgKQASgIAQAQQAPAOAEATQADAQgFAMQgHAPgQABQgJAAgMgLg");
	this.shape_57.setTransform(14.8,64);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8CA95").s().p("AhhAUQgCgNAJgKQALgOAngKQAegJAeAEQAgAEAbAQQAKAGAFAHQAHAJgEAKQgFALgOABQgJAAgPgEQg3gOg7AQQgMAEgHAAQgPAAgDgOg");
	this.shape_58.setTransform(29.2,8.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8CA95").s().p("AgEAwQgMgDgHgKQgHgJAGgFQADgDAFABIAJAAQAHgDACgJIAAgPQAAgWATgSQgBAfADAeIADAPQACAIgCAFQgEAEgEACQgGACgHAAIgJgBg");
	this.shape_59.setTransform(27.1,43.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E8CA95").s().p("AgfAsQgNgQAZggQAMgPAagaQAKgIAFAFQAEAEgFAJIgkBBQgJAQgCACQgDADgDAAQgFAAgGgHg");
	this.shape_60.setTransform(38,25.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8CA95").s().p("AADBJQgGAAgEgEQgHgHgDgOQgEgXAFgtQAGg2ASACQAMACAAA3QAAAcgCAoQAAAMgFAFQgDADgGAAIgBAAg");
	this.shape_61.setTransform(27.2,24.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E8CA95").s().p("AAPA2QgGgCgFgIQgNgTgJgbQgLgfAEgUQALAAAEAOIAFAYQAIAcATAYQAFAGAAAFQgBADgEACIgEABIgDAAg");
	this.shape_62.setTransform(19,26.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C59B5C").s().p("AgNAAIAMgDIAKgHIAGAKIgFACIgTAJg");
	this.shape_63.setTransform(20.8,27.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C59B5C").s().p("AgJAIIgFgIQAGAAAIgDIAKgHIAAABIAEAJIAAAAIgVALg");
	this.shape_64.setTransform(21.4,29.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C59B5C").s().p("AiYCDIAKgLQAMgRAAgMQACgUgQgJQgHgEgLACIgPADQAFhVANgrQARgUAcgRQA1ggA7AAQA6AAA4AjQAiAVAQATQAHAbAFAqQAEAgAAAVIgPgDQgLgCgHAEQgHAEgEAHIABgKQABgKgDgKQgBgOgGgHQgCgDgDAAQgVAAgdAmQgQAXgJAWQACgpgHgeQgFgXgLgPQgFgIgJgHIgHgHIgHgBIAAAAIgCABQgcAMgKA9QgFAVgBAcIgHgTQgFgMgHgKQgJgPgLgIQgOgLgOAAIgEABIAAAAQgDAAgCADQgOAQAMAuQAHAbALAUQgLAEgLAAQgLAAgKgEgAB9gRIAHAQIAIAXIAFAWIAAgPIgDgQQgBgIgEgIQgDgJgFgHIgIgOIgJgMgAh4ghIgIAOQgFAHgDAJQgEAIgBAIIgDAQIAAAPIAFgWIAIgXIAHgQIANgcIgJAMgACMg2IAFALQADAEAEAKIAFASIAIAxIACgYIgCgRIgCgKQgDgKgDgIIgJgOIgJgMgAiTgtIgJAOQgDAIgDAKIgCAKIgCARIACAYIAFgoIAIgbQAEgKADgEIAFgLIABgDgAA3glQgKAKAAAPQAAANAKAKQAKALAPAAQAOAAAKgLQALgKAAgNQAAgPgLgKQgKgKgOAAQgPAAgKAKgAhnglQgLAKAAAPQAAANALAKQAKALAOAAQAPAAAKgLQAKgKAAgNQAAgPgKgKQgKgKgPAAQgOAAgKAKgAARgvQgDAEAAAFQAAAFADAEQAEADAFAAQAFAAAEgDQADgEAAgFQAAgFgDgEQgEgDgFAAQgFAAgEADgAgogvQgEAEAAAFQAAAFAEAEQADADAFAAQAFAAAEgDQAEgEAAgFQAAgFgEgEQgDgDgGAAQgFAAgDADgAgLg1QgDADAAAFQAAAFADAEQAEAEAFAAQAEAAADgEQAEgEAAgFQAAgFgEgDQgDgEgEAAQgFAAgEAEgAhfhiQgHAFAEAIIAPAhQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIACgBQAAAAABAAQAAgBAAAAQABgBAAAAQgBgBAAAAIgPghQgCgEADgDQAYgSASAAIABAAQAEABABADIAGAWQACAFgGABIgTAHQgEABgCgEIgEgIQgDgEAFgDIAIgFIAEgBQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQACAFgFABIgEACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFgCQAEgCACgEQABgEgBgEQgCgFgFgCQgGgBgDACIgIAFQgEACgBAEQgCAFACADIAFAJQACAEAEABQAEACADgCIATgGQAKgEgDgKIgGgVQgCgIgIAAIgBAAQgTAAgaATgAA3gzIgIgGIgIgDQgIgDgLgCIgWgCQgaABgRAGIgHADIgFADIgDADIAJgEIAHgCIAqgEIAoAEIAIACIAJAEgABAhaQgDACgCAEIgDAJQgCAJAIAEIASAJIAFABQAGAAADgFIAMgTQADgIgFgFQgPgQgfgEQgIgCgEAJIgMAiQgBAAAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIANgiQABgEAEABQAeAEANAOQADACgCAEIgMATQgCAEgFgCIgSgJQgEgBACgFIADgJQACgFAEABIAJACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgCAFgFgCIgFgCQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFACQAEACAEgCQAEgCACgEQACgEgCgFQgCgFgFgBIgKgCIgCgBIgGACgAgTh3QgIADAAAJIACAkQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgkQAAgDADgCQAcgJASAIQADABAAAEIgDAWQAAAFgFAAIgUgBQgDAAgBgFIgBgJQAAgFADgBIAJgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQAAAEgFABIgFAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAFAAQAEAAADgDQADgEAAgEQAAgGgDgDQgFgDgFABIgJACQgJACABAKIABAJQABAEADADQADADADAAIAUABQAKAAABgKIACgWQABgIgHgEQgKgEgLAAQgMAAgQAFg");
	this.shape_65.setTransform(29.2,17.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C59B5C").s().p("AgKgBIAJgDIAGgEIACACIAEAGIgBABIgRAIg");
	this.shape_66.setTransform(18.8,23.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C59B5C").s().p("AgNgLQANADAOAQIAAAAIgIAEg");
	this.shape_67.setTransform(18.9,21.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C59B5C").s().p("AgNAAIAMgEIAKgGIADAHIACADIgWALg");
	this.shape_68.setTransform(20.1,26.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E8CA95").s().p("Ai0AUQg3gygHgsQgCgMAEgDQACgCAEAAIACAAQANABAHAMQA2BeBPAhQAsASAjgEQALACAUgCQArgHAogZQA6gkAphJQAHgMANgBQAGgBACADQAEADgCAMQgHAsg2AyQhKBFhsADQhqgDhKhFgAAmBMQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAgxBMQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgABcA6QAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAhnA6QAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgACKAfQAAAHAHAAQAGAAAAgHQAAgGgGAAQgHAAAAAGgAiWAfQAAAHAGAAQAHAAAAgHQAAgGgHAAQgGAAAAAGgACwgBQAAAFAFAAQAGAAAAgFQAAgGgGAAQgFAAAAAGgAi6gBQAAAFAGAAQAFAAAAgFQAAgGgFAAQgGAAAAAGgADIgoQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAjTgoQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGg");
	this.shape_69.setTransform(29.2,70.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E8CA95").s().p("AgOASIAUgqIAJACIgNAvg");
	this.shape_70.setTransform(23.8,60.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E8CA95").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_71.setTransform(37.2,16.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AB7F3F").s().p("AgLAXIgBAAIAMgwIAOACIgKAxg");
	this.shape_72.setTransform(25.9,61.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8CA95").s().p("AgKAZIAKgyIALABIAAAyg");
	this.shape_73.setTransform(27.9,61.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8CA95").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_74.setTransform(21.3,16.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C59B5C").s().p("AhPCSQgZgHgMgGQgegNgogmQgbgZgNgTQgNgSgMgfQgIgWAAgOQABgMAJgFQAHgFARAAQAogBAcgMQANgGAGgGQAJgMgDgXIgCgIQAIgHAHgLQABAIAOATQANARAQALQAiAZAoABQAlABAjgWQAigVARgiIACgEQAFAJAGAFQgIANAIASQAHAPANAJQAVAPArABQAaAAAIAIQAGAFABAIQgGA1giAvQghAtgyAbQgwAZg6AFIgeACQgnAAgpgKgAjzgpQgFAGACAOQAHAsA4A0QBMBHBtAEQBugEBLhHQA4g0AHgsQADgOgGgGQgFgFgIABQgQABgIAPQg3BghSAfQgZAKgZACIgVAAIgBAAQgeADgogPQhSgfg3hgQgIgPgQgBIgCAAQgHAAgEAEgAgCAsIAAA8QAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAg8QAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABgAARApQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAQA2QABABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIgQg3QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBAAgAgTArIgQA3QAAAAAAABQAAABAAAAQAAAAABABQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIAQg2QABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBIgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAgAAhAjQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIARAqQAEAJAJAAIABAAQAngFATgVQAHgHgFgIIgPgZQgDgEgFgCQgFgBgEACIgXAMQgFACgBAFQgCAEABAFIAEAMQACAFAFACQAEACAFgBIAMgDQAGgCADgFQACgHgDgFQgCgFgFgBQgFgCgFACIgFACQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAGgDQACgBADABQADABABADQACADgCADQgBAEgEAAIgLADQgGADgDgHIgEgMQgCgGAFgDIAXgMQAHgDADAGIAPAZQACAEgDAEQgSAUgkAEQgHABgBgGIgRgqQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBAAgAhfASQgFACgDAEIgPAZQgFAIAHAHQATAVAnAFIABAAQAJAAAEgJIARgqQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIgRAqQgCAHgGgCQgkgEgSgUQgDgEACgEIAPgZQAEgGAGADIAXAMQAFADgCAGIgEAMQgDAHgGgDIgLgDQgEAAgBgEQgCgDACgDQABgDADgBQADgBACABIAGADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgCQgFgCgFACQgFABgCAFQgDAFACAHQADAFAGACIAMADQAFABAEgCQAFgCACgFIAEgMQADgLgKgFIgXgMQgDgBgDAAIgDAAgAhlgQQAHAKANAJQASAMATAGQAWAHAYAAQAYAAAWgHQATgGASgMQANgJAHgKIAEgIIgFAHQgGAIgPAJQgPAKgVAGQgUAHgZAAQgZAAgUgHQgVgGgPgKQgPgJgGgIIgFgHIAEAIgABqgGQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAIAmAZQADACAEAAQAEAAAFgDQAdgaAEgbQACgJgJgFIgagLQgFgCgFABQgFACgCAEIgNAXQgFAKAJAHIAKAHQAEADAFgBQAFAAAEgEIAIgJQAEgFgBgGQgBgGgGgDQgEgDgFABQgGACgCAEIgEAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABgBAAgBIADgFQAEgGAGAEQADABABAEQABADgDADIgHAJQgFAGgGgFIgJgHQgFgEACgGIANgWQACgGAHADIAaAMQAGACgBAFQgEAYgcAaQgFADgEgDIgmgZIgCAAIgCABgAidg4IgaALQgJAFACAJQAEAbAdAaQAFADAEAAQAEAAADgCIAmgZQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBABQAAAAgBAAIgmAZQgEADgFgDQgcgagEgYQgBgFAGgCIAagMQACgCADABQADABABADIANAWQACAGgFAEIgJAHQgGAFgFgGIgHgJQgDgDABgDQABgEADgBQAGgEAEAGIADAFQAAABABABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgEgFQgCgEgGgCQgFgBgEADQgGADgBAGQgBAGAEAFIAIAJQAEAEAFAAQAFABAEgDIAKgHQAJgHgFgKIgNgXQgCgEgFgCIgEAAIgGABgAgBAGQAAAFAEAAQAFAAAAgFQAAgFgFAAQgEAAAAAFgAASAEQAAAFAFAAQAGAAAAgFQAAgFgGAAQgFAAAAAFgAgZAEQAAAFAGAAQAFAAAAgFQAAgFgFAAQgGAAAAAFgAAtgCQAAAFAGAAQAGAAAAgFQAAgHgGAAQgGAAAAAHgAg1gCQAAAFAGAAQAGAAAAgFQAAgHgGAAQgGAAAAAHgABBgKQAAAGAGAAQAFAAAAgGQAAgGgFAAQgGAAAAAGgAhIgKQAAAGAFAAQAGAAAAgGQAAgGgGAAQgFAAAAAGgAABgFIABAAQALAAAOgDIACABIAAAAIACgBIARgEIADgCIAAABIABAAIACgCQALgEAIgFIABABIABgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAJgFQANgKAHgKIAEgHIgFAGQgGAJgPAJIgIAFIgUgrQAPgGAPgKQANgKAHgLQAEgEAAgDIgFAHQgIAKgNAIQgNAJgSAGIgCAAIAAAAIgMAEIgCAAQgRAEgRAAQgRAAgRgEIgCAAIgMgEIAAAAIgCAAQgSgGgNgJQgNgIgIgKIgFgHQAAADAEAEQAHALANAKQAPAKAPAGIgUArIgIgFQgPgJgGgJIgFgGIAEAHQAHAKANAKIAJAFQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABABIABgBQAIAFALAEIACACIABAAIAAgBIADACIARAEIACABIAAAAIACgBQAOADAKAAgABUgTQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgAhagTQAAAFAFAAQAGAAAAgFQAAgGgGAAQgFAAAAAGgABfgfQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgAhlgfQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgABsgsQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABgAhvgsQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAABg");
	this.shape_75.setTransform(29.1,65.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C59B5C").s().p("AgIAIIgEgIIALgEIAIgFIAGAJIAAAAIgUAKg");
	this.shape_76.setTransform(19.5,25.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AB7F3F").s().p("AgNgWIAIgCIATAqIgPAHg");
	this.shape_77.setTransform(34.7,60.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AB7F3F").s().p("AgJgYIAKgBIAJAyIgTABg");
	this.shape_78.setTransform(30.6,61.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E8CA95").s().p("Ag0AYQgEgKAAgLQAAgYASgTIAFgEQARgPAWAAQANAAALAEQANAMAHAOQAJASgCASIgCAHQgDAPgMAMIgFAGQgPANgTAAQggAAgVgkgAgFgfIgGADQgTALAAAUQAAAPALAMQALALAOgBQAPAAALgKIAEgGQAHgKAAgLQAAgOgLgLQgLgLgPABQgGAAgFABg");
	this.shape_79.setTransform(10.5,46);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E8CA95").s().p("AgMgXIANgCIANAwIgCAAIgPADg");
	this.shape_80.setTransform(32.6,61.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C59B5C").s().p("AgOASIgBgEQgRgSgGgPIgDgMIAAAAIAGgBQADANAPANQAXAXAkAHQgOAEgBAEIgBABQgSgOgWgBg");
	this.shape_81.setTransform(49.2,37.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C59B5C").s().p("AgKgLIAAgBIABgDIADAAIARAYIgOAHg");
	this.shape_82.setTransform(18,21.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AB7F3F").s().p("AgjgCQgOgNgCgLIAFAAQACAFAJAHIACADQAeAWAkAAIATgCQgHAKgOAIQglgDgdgag");
	this.shape_83.setTransform(51.3,36.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E8CA95").s().p("AgdAzIgFgDQgGgEgGgFIgFgKIgCgIQgDgJAAgHQAAgVAOgSIAFgGQATgSAYAAQAKAAALAEQALAFAHAKIADAEIABACQALATgEAZQgBAMgFAJQgEAJgLAHQgOAKgSAAIgCABQgPAAgPgIgAgTgUQgLAKAAAPQAAAKAGAIIADAGQAMANAPAAQAQAAAKgLQALgLAAgPQAAgSgPgLIgFgEQgHgDgKAAQgOAAgLALg");
	this.shape_84.setTransform(46.7,45.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E8CA95").s().p("AACAQQgXgFgRgNIgDgCQgHgGgCgFIAHgDQAbAZAiAAQASAAAOgGQABADgBADIgDAJQgLADgMAAQgLAAgLgDg");
	this.shape_85.setTransform(52.2,35.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C59B5C").s().p("AALAeIAAAAIAGgFIgHADIgDgLIgBgBIAEgFIgCABIgDACIgFgMIADgEIgDACIgHgLIAFgEIgGADIAAgBIgGgKIAFgGIgHAEIgHgKIADgCIAEgFIANAQQATAbAHAUIABALQgCAEgIAHg");
	this.shape_86.setTransform(22,26.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C59B5C").s().p("AgMABIgBgBQAFAAAIgEIAJgGIACADIADAIIgKAGIgKAEg");
	this.shape_87.setTransform(22,30.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C59B5C").s().p("AAAgQIAEAdIgGAEQgDgWAFgLg");
	this.shape_88.setTransform(16.9,22.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C59B5C").s().p("AAIAnQgEgBgHgQQgJgTgGgVIgEgUIAIgBIADAMIgGADIAHgBIAEAKIAAACIgEADIAFgBIAFALIgEACIAEAAIAGALIgEADIAFgBIAFAJIACACIgGADIAHAAIABgBIAHALIgJABIgGgBg");
	this.shape_89.setTransform(18.9,27.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C59B5C").s().p("ABKAWIgCgCQAAgKgKgIQgJgHgLgBIgKAAQgMgBgPADIgbAEQgXADgPgDIgRgHIgEAAQALgIAHgGIAHACQARAJASgFIAGgBQADABADAEQADACAEAAQAWAEAUgNIADgDQADAKANAFQAKAEAMABIABAAQgIAEAAAJQAAAGAEAEg");
	this.shape_90.setTransform(19.9,33.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C59B5C").s().p("AgpAYQAkgGAXgXQAPgNAEgMIAFABIgEALQgFAPgQASIgCADQgTABgQAMQgKgCgLgFg");
	this.shape_91.setTransform(9.3,37.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E8CA95").s().p("AguAPQgCgEAAgEIABgIQAPAFAQAAQAhAAAYgVIABAAIAGACIABAAQgCAFgGAFIgCACQgSANgWAFQgLADgLAAQgMAAgLgDg");
	this.shape_92.setTransform(6.3,35.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C59B5C").s().p("AgoAFQAJgEARAAIAHAAQAZgBAXgJQgRANgWAEIgOACQgOAAgOgFg");
	this.shape_93.setTransform(5.9,34.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AB7F3F").s().p("AgwAMIgDgEIASADQAlgBAegWIABgBQAIgHACgGIAHACQgEAKgNALQgbAagkAEQgLgHgJgIg");
	this.shape_94.setTransform(7.3,36.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E8CA95").s().p("AgKAAQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAIgIACIgFABQgIgDAAgIg");
	this.shape_95.setTransform(28.9,34.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C59B5C").s().p("AANgUIgBACQgEAKgDAIIgFAUIgMABQALggAOgJg");
	this.shape_96.setTransform(27.3,17.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C59B5C").s().p("AgPAIIgBgRIAGABIAVABIAGgBIgCAMIAAAEIgPACIgPgCg");
	this.shape_97.setTransform(28.9,30.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E8CA95").s().p("AgFAAQAAgGAFABQAGgBAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_98.setTransform(31.9,13.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E8CA95").s().p("AgGAGQgCgCAAgEQAAgDACgDQAEgCACAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgCAAgEgDg");
	this.shape_99.setTransform(38.2,34.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C59B5C").s().p("AgQAIIAAgQIAQADIAQgBIABAOg");
	this.shape_100.setTransform(28.9,24.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C59B5C").s().p("AgRAIIAAgPIAHABIAVABIAGgBIABAPg");
	this.shape_101.setTransform(28.9,26.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C59B5C").s().p("AAAAVIgFgUIgGgSIgBgDQAPAJAKAgg");
	this.shape_102.setTransform(30.5,17.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C59B5C").s().p("AgDAHIgKgGIADgIIACgDIAJAGQAIAEAFAAIgBABIgGAKIgKgEg");
	this.shape_103.setTransform(36.5,30.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C59B5C").s().p("AgIArIABAAIAHgCIABgBIgIAAIAAgCIABgOIABgBIAGgDIgGAAIAAgSIAFgCIABAAIgGAAIgBgRIAHgDIgHAAIAAgBIgCgQIABAAIAHgCIABgBIgJAAIgCgNIgBgDIAEgBIAHgCIABgBQAEAPACAMQAGAcgBAbQAAAagEAEQgGAGgNADg");
	this.shape_104.setTransform(31.7,25.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E8CA95").s().p("AgGAIQgEgDAAgFQAAgIAJgCIABAAIAFABQAGADAAAGQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_105.setTransform(40.8,35.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C59B5C").s().p("AgNAAIABgDIAFgHIAJAGIAMAEIgEALg");
	this.shape_106.setTransform(38.4,26.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C59B5C").s().p("AgIABIgDgBIAHgIIAHAEIAJADIgEAKg");
	this.shape_107.setTransform(39.6,23.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C59B5C").s().p("AgOAAIABAAIAEgJIABgBIAKAHQAHADAFAAIgDAIIgCADg");
	this.shape_108.setTransform(37.1,29.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C59B5C").s().p("AgNAMQgBgLgFgHIgBAAIgCgEIgGgHQAEAAAFgFQACAMAOAAQAIAAAFgJQAGAMANAOQgXABgRAPg");
	this.shape_109.setTransform(44.1,38.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C59B5C").s().p("AgJACIgEgCIAFgKIAKAHIAMADIgEALg");
	this.shape_110.setTransform(37.7,27.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E8CA95").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAHAAADAGIABADIAAABQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_111.setTransform(43.7,36);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C59B5C").s().p("AgMAAIAAAAIAGgJIAIAFIALAEIgEAIIAAACg");
	this.shape_112.setTransform(39,25.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C59B5C").s().p("AgQAIIgBgQIARADIALgBIAHgBIgBAPg");
	this.shape_113.setTransform(28.9,28.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C59B5C").s().p("AgXgDQAQgOASgCIAKAFIADACQgEgCgFAAQgNAAgPAKIgBACIABACQANARASAAIADAAQgIACgJABQgOgFgNgSg");
	this.shape_114.setTransform(34.7,41.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E8CA95").s().p("AghASQgegKAAgRQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAKgKAqAAIAJAAQAQAAAQABQAXADAHAGQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAARgeAKQgRAGgRAAQgQAAgRgGgAgfgKQgHAAgBAHQgBAHAHACIADABQAPAFAPAAQAQAAAPgFIADgBQAHgCgBgHQgBgHgHAAIgWgBIgTAAIgWABg");
	this.shape_115.setTransform(29.2,52.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C59B5C").s().p("AgNAIIACgPIACAAIAKABIALAAIACAOg");
	this.shape_116.setTransform(28.8,20.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C59B5C").s().p("AAAAJQgXgEgSgPQAXAKAZAAIAHAAQATAAAJAEIAAABQgOAGgPAAIgNgCg");
	this.shape_117.setTransform(52.7,34.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C59B5C").s().p("AhNAXQAEgFAAgFQAAgJgIgEIAJgBQAJgEARgLIAGgEIABgCQAEAEANAFQATAIAMgEIACgBIABgBIAGgDIAIABQAZAEANgKIAGgBIAMAJQgEAAgOAHQgRAIgkgFQgYgEgGAAQgGgBgJABQgMABgIAGQgKAJgCAKIgBACg");
	this.shape_118.setTransform(38,33.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C59B5C").s().p("AgVAvQgJgBgGgDQgJgEgCgJQABgIAFgEQAEgDAIAAIAHABIACgBQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAggAJgQQAFgKAFgCQAHACAFAKQAJAQAAAgQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIACABIAHgBQAIAAAEADIACACQAFAWgiAFIgNABIgagBg");
	this.shape_119.setTransform(29.1,43.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C59B5C").s().p("AgZAEQAIgOAPgIQAHgBAJABIAIACIgFgBQgRAAgQARIAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAPAKAOAAQAGAAAGgDQgHAGgLACQgQgCgRgNg");
	this.shape_120.setTransform(20.6,41.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C59B5C").s().p("AgHA0QgCgBgBgKIAAAAQABgEgCgIQgCgdAHghQACgMAEgPIALADIgDARIgIAAIAIACIgCAPIAAACIgGABIAGACIgBASIgFAAIAFACIABARIgGABIAGACIACANIAAAFIgIAAIAIACIABAAIADATQgMgCgHgHg");
	this.shape_121.setTransform(26.1,25.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E8CA95").s().p("AgFAGQgDgCAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_122.setTransform(20.3,34.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C59B5C").s().p("Ag7BVQgbgOgRgaQgGgJgGgNQAFgLAAgMQgBgagQgTIADgKIAFgQQADgIAHgFQAHgFAIgBQAMgDAXgCQBJgGA7AHQAUACAKAFQARAIAEAOIABAMQABAHACAEQgOASAAAYQAAAMAEALQgFANgGAJQgRAagcAOQgbAOgiAAQggAAgcgOgAgbAfQgcACgIAIQgFAEAAAFQAAAXAiAKQARAGASAAQAUAAAQgGQAigKAAgXQAAgFgEgEQgJgIgcgCIgdAAIgJgBIgTABgAgsgOQgIAFgBALQgBAJAFAGQAGAGAIACQAVAFAPAAQASAAATgFQAJgCAFgGQAFgGgBgJQAAgLgIgFQgIgGgMABQAAgkgNgRIgNgKIgCAAQgFABgGAJQgNARgBAkIgEAAQgKAAgFAFgABChNQgUACgUARQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAKAOQANAOAQADIAKABQAWAAAXgSQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgOgagZgFIgHgBIgEAAIgEAAgAhNhMQgQADgNAOQgHAHgDAHQgBAAAAABQAAAAAAABQAAAAABABQAAAAABABQAWASAXAAIAKgBQAQgDAMgOQAHgHADgHQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgYgUgVAAIgKACg");
	this.shape_123.setTransform(29.1,46.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C59B5C").s().p("AgPAIIAAgCIABgNIAEABIAVAAIAEAAIABAOIAAAAg");
	this.shape_124.setTransform(28.9,22.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C59B5C").s().p("AABAVIgLAAIAIglIABgDIABgBIACAAIACABIAAADIAHAmIgKgBg");
	this.shape_125.setTransform(28.8,17.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C59B5C").s().p("AgUACQAAgHgHgEQASgEAKABQAKABAIAGQAIAGAAAJQgfAAgVADQAFgFAAgGg");
	this.shape_126.setTransform(23.8,34.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C59B5C").s().p("AgcAHQANgOAGgMQAFAJAIAAQAOAAACgMQAFAFAEAAIgGAHQgIANgDAUQgRgPgXgBg");
	this.shape_127.setTransform(14.3,38.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E8CA95").s().p("AgHAIQgDgEAAgEIAAgBIABgDQADgGAGAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_128.setTransform(14.8,36);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E8CA95").s().p("AgHAIQgDgDAAgFQAAgFAFgDQADgCACAAIADAAQAIADAAAHQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_129.setTransform(17.7,35.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C59B5C").s().p("AAVANIgCAAQgVgCgYAAQAAgJAIgGQAIgHAJgBQAKgBATAFQgHAEAAAHQAAAGAFAEg");
	this.shape_130.setTransform(34.7,34.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C59B5C").s().p("AgLgBQAGgHAHgGIAKAUIgOAJg");
	this.shape_131.setTransform(17.7,5.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C59B5C").s().p("AgFADIAAAAIABAAQACgGADgHIAIAHIgRAOQABgFACgDg");
	this.shape_132.setTransform(14.6,8.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C59B5C").s().p("AgNgFIASgKIAJAXIgQAHg");
	this.shape_133.setTransform(19.8,4.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C59B5C").s().p("AgNAGQANgIANgFIgGAPQgJgCgLAAg");
	this.shape_134.setTransform(11.5,10.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C59B5C").s().p("AgLgMIAXgCIAAAcIgSABg");
	this.shape_135.setTransform(27.5,2.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E8CA95").s().p("AgHAPIAAgdIAPABIgDAcg");
	this.shape_136.setTransform(30,2.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C59B5C").s().p("AgSADIAHgEIAEgDQARABAJACIgCAFQgKgEgZADg");
	this.shape_137.setTransform(10.1,11.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C59B5C").s().p("AgMgIIATgHIAGAZIgQAGg");
	this.shape_138.setTransform(22.1,3.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E8CA95").s().p("AgNgJIAXgGIAEAbQgLABgKADg");
	this.shape_139.setTransform(24.8,2.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E8CA95").s().p("AghAPIABgNQAsgTAXAAIgCAKQgTAEgwAVg");
	this.shape_140.setTransform(7.2,21.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C59B5C").s().p("AgZgEQAmgKATAGIgCAIQgVgCgoANIAGgPg");
	this.shape_141.setTransform(8.1,15.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E8CA95").s().p("AgdAAQAmgOAYACIgBALQgcgBglAPg");
	this.shape_142.setTransform(7.8,17.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E8CA95").s().p("AgGAAQABgGAFABQAHgBAAAGQAAAGgHABQgFgBgBgGg");
	this.shape_143.setTransform(26,13.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E8CA95").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_144.setTransform(28.9,13);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C59B5C").s().p("AgfAAQAkgQAdABIgBANQgVAAgtASg");
	this.shape_145.setTransform(7.5,19.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C59B5C").s().p("AgVAXQgHgCgEgLIgBgIQAsgUAXgFIgBAEQgCAKgCAFQgEAGgNAIIgVAOIgFAAIgHgBg");
	this.shape_146.setTransform(7.1,23.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C59B5C").s().p("AgNAMIAEgbIAWAEIgEAcIgWgFg");
	this.shape_147.setTransform(32.5,2.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E8CA95").s().p("AgNgEQAegIALAHIgCAMQgSgGgjAIg");
	this.shape_148.setTransform(8.8,13.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C59B5C").s().p("AgJADQADgEAHgKIAJAPIgKAIg");
	this.shape_149.setTransform(16,6.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C59B5C").s().p("AgSAUIABgBQAHgKAFgWIACgHQABAMAKAOIAKAMQgLADgKAAQgHAAgIgBg");
	this.shape_150.setTransform(42.7,28.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C59B5C").s().p("AgggBIgBgOQAcAAAlAPIACAQQgsgSgWABg");
	this.shape_151.setTransform(51,19.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C59B5C").s().p("AgRAHQgIgFgDgFQgFgIAAgPQAWAEAtAWQAAAKgEAHQgDAHgIADQgTgHgRgNg");
	this.shape_152.setTransform(51.2,23.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E8CA95").s().p("AgggGIgBgLQAVAAAtASIABARQgugVgUgDg");
	this.shape_153.setTransform(51.2,21.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C59B5C").s().p("AgXAeQgBgDAIgRQAIgSAMgSIANgQIAFAFIACACIgHAKIgHgEIAGAGIgGAKIgBABIgFgDIAEAEIgGALIgEgCIADAEIgEAMIgDgCIgCgBIAEAFIgBABIgDALIgHgDIAGAFIgDANQgIgFgDgIg");
	this.shape_154.setTransform(36.4,26.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C59B5C").s().p("AgWAnIAHgLIABABIAHAAIgGgDIACgCIAFgJIAFABIgEgDIAFgLIAFAAIgEgCIAFgLIAFABIgEgDIAAgCIAEgKIAHABIgGgDIADgMIAIABIgEAUQgGAVgJATQgHAQgEABIgGABIgJgBg");
	this.shape_155.setTransform(39.6,27.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C59B5C").s().p("AgKAJIARgYIADAAIABADIAAABIgHAbg");
	this.shape_156.setTransform(40.4,21.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C59B5C").s().p("AgNAIIAAAAQAOgQANgDIgTAXg");
	this.shape_157.setTransform(39.6,21.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C59B5C").s().p("AgDANIADgdQAGALgDAWg");
	this.shape_158.setTransform(41.6,22.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C59B5C").s().p("AgIAFQgBgHgDgFQAPAHAKAFQgMAAgIADg");
	this.shape_159.setTransform(47.1,10.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C59B5C").s().p("AgLAIIALgVIAMANIgNAOg");
	this.shape_160.setTransform(41.5,6.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C59B5C").s().p("AgNAKIAIgaIATAJIgLAYIAAAAg");
	this.shape_161.setTransform(37.5,3.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C59B5C").s().p("AgMAIIAAAAIALgYQAIAFAHAGIgMAWg");
	this.shape_162.setTransform(39.7,5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C59B5C").s().p("AgPgFIAMgOQAIALAEANIAAAAIAAAAQADAFAEAKQgPgOgQgLg");
	this.shape_163.setTransform(43.5,8.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C59B5C").s().p("AgSgCQAKgDARAAIAKAIQgZgDgKAGg");
	this.shape_164.setTransform(48.4,12);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E8CA95").s().p("AgYAGIgCgJQAJgHAhAFIAHAGIAFAHQgkgIgQAGg");
	this.shape_165.setTransform(49.5,13.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C59B5C").s().p("AgdAAIgCgHQARgGAmAJIAHAPQglgNgXACg");
	this.shape_166.setTransform(50.3,15.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E8CA95").s().p("AgMALIAFgbIAUAGIgJAbg");
	this.shape_167.setTransform(35.2,3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E8CA95").s().p("AgfgBIgCgLQAVgBApANIAFANQgngPgaABg");
	this.shape_168.setTransform(50.7,17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,58.5,82), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69C6D").s().p("AgDBzQgGAAgEgDQgFgFAAgGIAAjKQAAgFAFgFQAEgDAGAAIAIAAQAGAAAEADQAEAFAAAFIAADKQAAAGgEAFQgEADgGAAg");
	this.shape.setTransform(68.6,95.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C69C6D").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape_1.setTransform(63.5,105.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#445431").s().p("AABFZQgXgSgEgdIhZp9ICNgUIBZJ9QAEAegSAXQgSAYgdAEIgLABQgXAAgTgPg");
	this.shape_2.setTransform(67.1,147);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#445431").s().p("AiGF5QghgMgPggQgPggALghIDUpRQAMggAggPQAggPAhALQAhAMAPAgQAPAggLAhIjVJRQgLAhggAPQgSAIgTAAQgOAAgOgFg");
	this.shape_3.setTransform(83.5,146.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D451D").ss(5).p("ADVGuIiGAAQhuAAhOhPQhOhOAAhuIAAlFQAAhvBOhOQBOhOBuAA");
	this.shape_4.setTransform(93.7,150.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D451D").s().p("AlKAaIAAgzIKVAAIAAAzg");
	this.shape_5.setTransform(67.6,162.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#677F4E").s().p("AAYH7IAAk4IgvAAIAAE4InKAAIAAnAQAAjqCNimQCNilDHAAQDIAACNClQCNCmAADqIAAHAg");
	this.shape_6.setTransform(67.6,199.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#677F4E").s().p("AlKE+IAAmDQgBhmBKhJQBIhJBnAAIClAAQBnAABIBJQBKBJgBBmIAAGDg");
	this.shape_7.setTransform(67.6,133);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#677F4E").s().p("AihBdIAAiYQAAgOAKgJQAJgKAOAAIAiAAQAUAAARAJQARAKAKARIAeAyIAfgyQAKgRARgKQARgJATAAIAjAAQAOAAAKAKQAJAJABAOIAACYg");
	this.shape_8.setTransform(67.6,96.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333D24").s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_9.setTransform(87.8,441.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333D24").s().p("AkiA3IAAhuIJFAAIAABvg");
	this.shape_10.setTransform(69.5,457.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A67C52").s().p("AgRB9QgWAAgQgQQgQgQAAgWIAAiNQAAgWAQgQQAQgQAWAAIAjAAQAWAAAQAQQAPAQAAAWIAACNQAAAWgPAQQgQAQgWAAg");
	this.shape_11.setTransform(87.8,314);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A67C52").s().p("AhqA8IAAh3IDVAAIAAB3g");
	this.shape_12.setTransform(87.8,256.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C69C6D").s().p("AgaJBQghAAgYgXQgXgYAAghIAAwxIDVAAIAAQxQAAAhgXAYQgYAXghAAg");
	this.shape_13.setTransform(87.8,277.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8DFD9").s().p("AiHBKIAAiTIEPAAIAACTg");
	this.shape_14.setTransform(87.8,353.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7EEE7").s().p("AhqISIAAwjIDVAAIAAQjg");
	this.shape_15.setTransform(87.8,399.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C69C6D").s().p("AhqKzIAA0VQAAghAXgXQAYgYAhAAIA1AAQAhAAAYAYQAXAXAAAhIAAUVg");
	this.shape_16.setTransform(87.8,383.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E6B4C").s().p("AgRB9QgWAAgQgQQgQgQAAgWIAAiNQAAgWAQgQQAQgQAWAAIAjAAQAWAAAQAQQAPAQAAAWIAACNQAAAWgPAQQgQAQgWAAg");
	this.shape_17.setTransform(47.4,314);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E6B4C").s().p("AhqA8IAAh3IDVAAIAAB3g");
	this.shape_18.setTransform(47.4,256.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AD8660").s().p("AgaJBQghAAgXgXQgYgYAAghIAAwxIDVAAIAAQxQAAAhgYAYQgXAXghAAg");
	this.shape_19.setTransform(47.4,277.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262D1A").s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_20.setTransform(47.4,441.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262D1A").s().p("AkiA3IAAhuIJFAAIAABvg");
	this.shape_21.setTransform(29.1,457.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DBCDC6").s().p("AiHBKIAAiTIEPAAIAACTg");
	this.shape_22.setTransform(47.4,353.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0D8D3").s().p("AhqISIAAwjIDVAAIAAQjg");
	this.shape_23.setTransform(47.4,399.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AD8660").s().p("AhqKzIAA0VQAAghAYgXQAXgYAhAAIA1AAQAhAAAXAYQAYAXAAAhIAAUVg");
	this.shape_24.setTransform(47.4,383.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D451D").s().p("AhZHvQh6AAhXhWQhWhXAAh6IAAmPQAAh6BWhWQBXhXB6AAICzAAQB6AABXBXQBWBWAAB6IAAGPQAAB6hWBXQhXBWh6AAg");
	this.shape_25.setTransform(90.4,152.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AD8660").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape_26.setTransform(37.5,263.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#445431").s().p("AhUGOIAArTQAAgeAVgVQAVgVAeAAIAZAAQAdAAAVAVQAWAVAAAeIAALTg");
	this.shape_27.setTransform(35.4,220.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333D24").s().p("AmwAZQgPAAgLgLQgLgLAAgOIAAgNIOrAAIAAANQAAAOgKALQgLALgPAAg");
	this.shape_28.setTransform(67.6,38.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#445431").s().p("AmwAxQgPAAgLgKQgLgMAAgPIAAgXQAAgPALgLQALgLAPAAINiAAQAPAAALALQAKALAAAPIAAAXQAAAPgKAMQgLAKgPAAg");
	this.shape_29.setTransform(67.6,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#677F4E").s().p("AlDCnIAAhaQAAhkBHhIQBHhHBlAAICiAAQBkAABIBHQBHBIAABkIAABag");
	this.shape_30.setTransform(67.6,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9ADDE8").s().p("Ag/AMQAAgiAZgZQAZgZAiAAQAWAAAVALIhkCGQgbgZAAgkg");
	this.shape_31.setTransform(53.2,56.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9ADDE8").s().p("Ag/AMQAAgiAZgZQAZgZAiAAQAWAAAVALIhkCGQgbgZAAgkg");
	this.shape_32.setTransform(77.9,56.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#EF20C8").ss(2.3).p("AgVAAIArAA");
	this.shape_33.setTransform(67.4,58);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF20C8").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAgggggAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_34.setTransform(80,58);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9F7F9").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAggggg");
	this.shape_35.setTransform(80,58);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF20C8").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAgggggAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_36.setTransform(55.2,58);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B9F7F9").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAggggg");
	this.shape_37.setTransform(55.2,58);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D1709").s().p("ACQCdQhFAAhAgbQg/gagxgxQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAqgdAdQgeAegpAAIgYAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAh4QgBhOBEg4QBEg5BfAAQBgAABEA5QBDA4AABOIAAB4QAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_38.setTransform(67.6,34.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A67C52").s().p("ACDCdQg/AAg6gbQg5gagtgxQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAqgbAdQgaAegmAAIgWAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAh4QABhOA9g4QA+g5BWAAQBYAAA9A5QA9A4ABBOIAAB4QAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_39.setTransform(67.6,36.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A67C52").s().p("AiUBAQg9g9gBhWIAAgqQADBUA7A6QA+A+BWAAQBYAAA9g+QA7g6ADhUIAAAqQgBBWg9A9Qg9A+hYAAQhWAAg+g+g");
	this.shape_40.setTransform(67.6,72.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C69C6D").s().p("AgzFHQhCAAgvguQgtgugBhCIAAlSQABhBAtguQAvguBCAAIBoAAQBBAAAvAuQAtAvABBAIAAFSQgBBCgtAuQgvAuhBAAg");
	this.shape_41.setTransform(67.6,48.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8C6239").s().p("AhZCNIAAjVQgBgdAVgTQATgUAcAAIAsAAQAdAAATAUQAVATAAAdIAADVg");
	this.shape_42.setTransform(67.6,87.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#160A03").s().p("AgzFHQhCAAgvguQgtgugBhCIAAlSQABhBAtguQAvguBCAAIBoAAQBBAAAvAuQAtAuABBBIAAFSQgBBCgtAuQgvAuhBAAg");
	this.shape_43.setTransform(67.6,61.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D1709").s().p("AiVCWQg+g+AAhYQAAhWA+g/QA/g+BWAAQBYAAA+A+QA+A/AABWQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape_44.setTransform(88.7,103.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D1709").s().p("AiVCWQg+g+AAhYQAAhXA+g+QA+g+BXAAQBYAAA+A+QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape_45.setTransform(46.6,103.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D1709").s().p("AhPJcQhlAAhGhHQhHhHAAhkIAArUQAAhkBHhGQBGhHBlAAICgAAQBjAABIBHQBGBGAABkIAALUQAABkhGBHQhIBHhjAAg");
	this.shape_46.setTransform(67.6,71.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#445431").s().p("Ag7F3QgZgYAAgkIAAp1QAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAYAAAkIAAJ1QAAAkgZAYQgYAagkAAQgiAAgZgag");
	this.shape_47.setTransform(35.1,149.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,128.9,463.3), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333D24").s().p("An9AeQgZAAgRgSQgSgQAAgZIRzAAQAAAZgRAQQgTASgYAAg");
	this.shape.setTransform(63.7,46.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445431").s().p("An9A7QgZAAgRgRQgSgSAAgYQAAgXARgSQASgRAZAAIP7AAQAZAAASARQARASAAAXQAAAYgSASQgRARgZAAg");
	this.shape_1.setTransform(63.7,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#677F4E").s().p("AmJDLIAAgMQAAijB0hyQBzh0CiAAIAAAAQCjAABzB0QB0ByAACjIAAAMg");
	this.shape_2.setTransform(63.7,20.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#677F4E").s().p("AmRGCIAAlyQAAilB2h2QB2h1ClgBIAAAAQCmABB2B1QB2B2AAClIAAFyg");
	this.shape_3.setTransform(63.7,161.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#677F4E").s().p("AjEBxIAAi4QAAgRAMgMQAMgMARAAIApAAQAYAAAVAMQAUAMAMATIABAAIAkA+IAmg+QAMgTAUgMQAVgMAYAAIApAAQARAAAMAMQAMAMAAARIAAC4g");
	this.shape_4.setTransform(63.7,117.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#445431").s().p("AiyCZQg5AAgogpQgpgpAAg5IAAgcQAAg5AogoQApgoA5AAIFkAAQA6AAAoAoQApAoAAA5IAAAcQAAA5gpApQgoApg6AAg");
	this.shape_5.setTransform(95.4,149.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#445431").s().p("AixCZQg6AAgogpQgpgpAAg5IAAgcQAAg5ApgoQAogoA6AAIFkAAQA5AAAoAoQApAoAAA5IAAAcQAAA5gpApQgoApg5AAg");
	this.shape_6.setTransform(31.7,149.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9ADDE8").s().p("AhMAOQAAgqAegeQAegeAqAAQAcAAAXAOIh5CjQgggfAAgsg");
	this.shape_7.setTransform(46.2,68.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9ADDE8").s().p("AhMAOQAAgqAegeQAegeAqAAQAcAAAXAOIh5CjQgggfAAgsg");
	this.shape_8.setTransform(76.2,68.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#EF20C8").ss(2.8).p("AgaAAIA1AA");
	this.shape_9.setTransform(63.4,70.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EF20C8").s().p("AhcBcQgmgmAAg2QAAg1AmgmQAngnA1ABQA2gBAnAnQAmAmgBA1QABA2gmAmQgnAng2AAQg1AAgngngAhIhIQgeAeAAAqQAAArAeAeQAeAeAqAAQAqAAAfgeQAegfAAgqQAAgqgegeQgfgegqAAQgqAAgeAeg");
	this.shape_10.setTransform(78.8,70.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B9F7F9").s().p("AhcBcQgmgmAAg2QAAg1AmgmQAngnA1ABQA2gBAnAnQAmAmgBA1QABA2gmAmQgnAng2AAQg1AAgngng");
	this.shape_11.setTransform(78.8,70.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EF20C8").s().p("AhbBcQgngmAAg2QAAg1AngmQAmgnA1ABQA2gBAmAnQAnAmAAA1QAAA2gnAmQgmAng2AAQg1AAgmgngAhIhIQgeAeAAAqQAAAqAeAfQAeAeAqAAQArAAAegeQAegeAAgrQAAgqgegeQgfgegqAAQgqAAgeAeg");
	this.shape_12.setTransform(48.6,70.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B9F7F9").s().p("AhbBcQgngmAAg2QAAg1AngmQAmgnA1ABQA2gBAmAnQAnAmAAA1QAAA2gnAmQgmAng2AAQg1AAgmgng");
	this.shape_13.setTransform(48.6,70.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2D1709").s().p("ACvC+QhUAAhOggQhMggg8g7QAAgBAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAABAAAAQAAAygjAlQgkAjgzAAIgcAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAgBIAAiQQAAhfBShFQBShEB0AAIAAAAQB1AABSBEQBSBFAABfIAACQQAAABAAABQgBAAAAAAQAAABgBAAQAAAAgBAAg");
	this.shape_14.setTransform(63.7,41.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A67C52").s().p("ACfC+QhMAAhHggQhFggg2g8QAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAAyghAlQggAjguAAIgaAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAgBIAAiQQAAhfBLhFQBKhEBpAAIAAAAQBqAABKBEQBLBFAABfIAACQQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAg");
	this.shape_15.setTransform(63.7,43.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#A67C52").s().p("AAACZQhpAAhKhLQhLhLAAhoIAAgzQACBlBJBHQBKBLBpAAIAAAAQBqAABKhLQBJhHAChlIAAAzQAABohLBLQhKBLhqAAg");
	this.shape_16.setTransform(63.7,87.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C69C6D").s().p("AAAGNQhpAAhKhLQhLhLAAhpIAAkaQAAhqBLhLQBKhLBpAAIAAAAQBqAABKBLQBLBLAABqIAAEaQAABphLBLQhKBLhqAAg");
	this.shape_17.setTransform(63.7,63.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8C6239").s().p("AhtCrIAAjnQAAguAgggQAgggAtAAIAAAAQAuAAAgAgQAgAgAAAuIAADng");
	this.shape_18.setTransform(63.7,106.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#160A03").s().p("AAAGNQhpAAhKhLQhLhLAAhqIAAkaQAAhpBLhLQBKhLBpAAIAAAAQBqAABKBLQBLBLAABpIAAEaQAABqhLBLQhKBLhqAAg");
	this.shape_19.setTransform(63.7,75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2D1709").s().p("Ai0C2QhMhMAAhqQAAhqBMhKQBLhMBpAAQBqAABMBMQBLBKAABqQAABqhLBMQhMBLhqAAQhpAAhLhLg");
	this.shape_20.setTransform(89.2,125.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2D1709").s().p("Ai1C2QhLhMAAhqQAAhqBLhKQBMhMBpAAQBqAABMBMQBLBKAABqQAABqhLBMQhMBLhqAAQhpAAhMhLg");
	this.shape_21.setTransform(38.2,125.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2D1709").s().p("AAALcQihAAhyhyQhyhzAAihIAAqrQAAihByhzQByhyChAAIAAAAQCiAAByByQByBzAAChIAAKrQAAChhyBzQhyByiiAAg");
	this.shape_22.setTransform(63.7,87);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,127.1,199.8), null);


(lib.stopIntroBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("התחל", "20px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(76.2,12.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("Ar4EAIAAoAIXxAAIAAIAg");
	this.shape.setTransform(76.1,25.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,152.2,51.3);


(lib.statueCounter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// statue(1).ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#845326").s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape.setTransform(66,74.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_1.setTransform(64.9,76);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(63.7,77.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#845326").s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape_3.setTransform(61.9,78.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_4.setTransform(59.9,78.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_5.setTransform(57.2,79.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#845326").s().p("AgDAAQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBgBgBg");
	this.shape_6.setTransform(44,74.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_7.setTransform(45.1,76);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_8.setTransform(46.3,77.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#845326").s().p("AgEAAQgBgFAFAAQAFAAAAAFQAAAGgFAAQgFAAABgGg");
	this.shape_9.setTransform(48.1,78.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_10.setTransform(50.1,78.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#845326").s().p("AgEAAQgBgEAFAAQAFAAABAEQgBAFgFAAQgFAAABgFg");
	this.shape_11.setTransform(52.8,79.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#845326").s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_12.setTransform(55.1,79.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#845326").s().p("AgIAeQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAPg2QABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAABIgPA1QAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAg");
	this.shape_13.setTransform(52.3,86.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#845326").s().p("AAIAeQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAAAgBgBIgPg1QAAgBAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABABIAPA2QAAAAAAABQAAAAAAABQAAAAgBABQAAAAgBAAg");
	this.shape_14.setTransform(57.4,86.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#845326").s().p("AgCAeIAAg7QAAgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAAAgBg");
	this.shape_15.setTransform(54.9,86.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#845326").s().p("AgEAnIgmgZQgBgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABABQAAAAABAAIAmAaQAEADAFgEQAcgbADgWQABgGgFgCIgagMQgHgDgCAGIgMAXQgDAGAFADIAKAHQAFAEAEgFIAIgIQACgEAAgDQgBgDgDgCQgHgDgDAGIgDAFQgBABAAAAQgBAAAAABQAAAAAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAIACgFQADgFAFgBQAFgBAFACQAGAEAAAFQABAHgEADIgIAJQgDAEgFABQgFAAgDgDIgKgHQgJgFAFgLIAMgWQADgFADgBQAFgCAFACIAaAMQAJAEgBAJQgEAageAbQgEAEgEAAQgDAAgEgDg");
	this.shape_16.setTransform(69.8,77.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#845326").s().p("AgQAkQgJAAgDgIIgRgqQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAABIARAqQACAFAGgBQAjgEATgTQADgEgDgEIgOgYQgEgHgGAEIgWALQgFAEABAGIAEAKQADAHAFgCIAMgDQADgBACgDQABgCgBgEQgBgCgDgBQgDgBgDABIgGACQAAAAgBAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAgBQAAAAABgBQAAAAAAgBQAAAAAAAAIAGgDQAFgCAFACQAFACACAFQADAFgDAFQgDAGgGABIgLADQgEACgFgDQgEgCgCgFIgEgKQgCgFACgFQACgFAEgCIAWgLQAFgDAFACQAFABADAFIAOAYQAFAIgGAHQgTAUgmAFg");
	this.shape_17.setTransform(62.6,84.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#845326").s().p("AgKAmQgegbgEgaQgBgJAJgEIAagMQAFgCAFACQAEABACAFIAMAWQAFALgJAFIgKAHQgEADgEAAQgFgBgDgEIgIgJQgEgDABgHQAAgFAGgEQAFgCAFABQAFABACAFIADAFQABAAAAABQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBABQAAAAgBAAQAAgBAAAAQAAAAgBgBIgDgFQgDgGgHADQgDACgBADQAAADACAEIAIAIQAEAFAFgEIAKgHQAFgDgDgGIgMgXQgBgCgCgBQgDgBgDABIgaAMQgFACABAGQADAWAcAbQAFAEAEgDIAmgaQAAgBABAAQAAAAABAAQAAAAABABQAAAAABABQAAAAABABQAAAAAAABQAAAAgBABQAAAAgBABIgmAZQgEADgDAAQgEAAgEgEg");
	this.shape_18.setTransform(40.2,77.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#845326").s().p("AAJAcIgRgJQgIgEADgKIADgIQABgEAEgCQAEgCADABIAJACQAFACACAEQADAEgDAFQgCAEgEACQgEABgEgCIgEgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABAAQAAAAABAAIAEACQAGACABgFQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBAAIgJgCQgEgCgCAFIgDAIQgCAFAFACIARAJQAEACADgEIALgUQACgCgCgDQgOgOgcgEQgEAAgCAEIgNAgQAAABAAAAQgBABAAAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBIANggQADgJAIACQAfAEAPAPQAFAGgEAGIgLATQgDAGgHAAIgFgBg");
	this.shape_19.setTransform(62,23.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#845326").s().p("AgQAgIgPggQgEgIAHgFQAagUATABQAIAAACAIIAGAVQADAJgKAEIgTAGQgDACgEgCQgDgBgCgEIgFgJQgCgCACgFQABgEAEgCIAHgFQADgCAGABQAFACACAFQABAEgBAEQgCADgEACIgFACQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAEgCQAFgBgCgFQAAgBAAgBQgBAAAAgBQgBAAAAgBQAAAAgBAAIgEABIgHAFQgFADADADIAEAIQABAEAEgBIATgHQAGgBgCgEIgGgWQgBgDgEgBIgBAAQgRAAgYASQgDADACAEIAPAgQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAIgCABQAAAAgBgBQAAAAgBAAQAAAAAAgBQAAAAAAAAg");
	this.shape_20.setTransform(48.3,23.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#845326").s().p("AgdAZIgCgjQAAgJAIgDQAdgJAUAIQAHAEgBAIIgCAVQgBAKgKAAIgTgBQgEAAgDgDQgDgDgBgEIgBgJQgBgJAKgCIAIgCQAFgBAFADQADADAAAGQAAADgDAEQgDADgEAAIgFAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBABAAIAFAAQAFgBAAgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAIgIACQgEABAAAFIABAIQABAFAEAAIATABQAFAAAAgFIADgVQAAgEgDgBQgSgIgcAJQgDACAAADIACAjQAAABAAABQAAAAAAABQgBAAAAAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_21.setTransform(55.4,21.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#845326").s().p("AAPAkQgmgFgTgUQgGgHAFgIIAOgYQADgFAFgBQAFgCAFADIAWALQAKAFgEAMIgEAKQgCAFgEACQgFADgEgCIgLgDQgGgBgDgGQgDgFADgFQACgFAFgCQAFgCAFACIAFADQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAIgGgCQgDgBgDABQgDABgBACQgBAEABACQACADADABIAMADQAFACADgHIAEgKQABgGgFgEIgWgLQgGgEgEAHIgOAYQgDAEADAEQATATAjAEQAGACACgGIARgqQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABABAAAAQABABAAAAQAAABAAAAQAAABAAAAIgRAqQgDAIgJAAg");
	this.shape_22.setTransform(47.4,84.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#845326").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDgAgFAAQAAAHAFAAQAHAAAAgHQAAgFgHAAQgFAAAAAFg");
	this.shape_23.setTransform(57.6,27.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#845326").s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDgAgGAAQAAAHAGAAQAGAAAAgHQAAgFgGAAQgGAAAAAFg");
	this.shape_24.setTransform(51.7,27.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#845326").s().p("AgHAJQgEgEAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDgAgGAAQABAGAFAAQAHAAgBgGQABgFgHAAQgFAAgBAFg");
	this.shape_25.setTransform(54.7,27);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#845326").s().p("AgYAYQgKgJAAgPQAAgNAKgLQAKgKAOAAQAPAAAKAKQAKALAAANQAAAPgKAJQgKALgPAAQgOAAgKgLgAgUgUQgJAIABAMQgBAMAJAJQAJAIALAAQAMAAAIgIQAJgJAAgMQAAgMgJgIQgIgJgMAAQgLAAgJAJg");
	this.shape_26.setTransform(63,30.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#845326").s().p("AAxAEIgIgCIgpgDIgpADIgHACIgJAEIADgDIAFgDIAHgCQARgGAZgBIAXACQAMACAHADIAIACIAIAGg");
	this.shape_27.setTransform(54.7,25.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#845326").s().p("AAHAHIgHgaQgEgKgDgEIgFgLIgBgDIAKAMIAHAOQADAIADAKIACAJIACASIgCAYg");
	this.shape_28.setTransform(70.3,30.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#845326").s().p("AADAAIgGgQIgMgcIAJAMIAHANQAFAIADAJQAEAIABAIIADAQIAAAPg");
	this.shape_29.setTransform(67.8,31.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#845326").s().p("AgNAYIACgSIACgJQACgKAEgIIAHgOIAKgMIgBADIgGALQgDAEgDAKIgHAaIgGApg");
	this.shape_30.setTransform(39.7,30.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#845326").s().p("AgPAeIACgQQACgIAEgIQADgJAEgIIAHgNIAKgMIgOAcIgGAQIgHAXIgFAWg");
	this.shape_31.setTransform(42.2,31.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#845326").s().p("AgYAYQgKgJAAgPQAAgNAKgLQALgKANAAQAOAAALAKQAKALAAANQAAAPgKAJQgLALgOAAQgNAAgLgLgAgUgUQgIAIAAAMQAAAMAIAJQAJAIALAAQAMAAAJgIQAIgJABgMQgBgMgIgIQgJgJgMAAQgLAAgJAJg");
	this.shape_32.setTransform(47,30.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#845326").s().p("AgbAYIgEgFQgFgJAAgKQAAgOALgLQALgLAOAAQAJAAAIAEIAFADQAPALAAASQAAAPgLALQgLALgPAAQgPAAgMgNgAgVgWQgJAKAAAMQAAAGADAHIADAFQAJANAPAAQANAAAJgJQAKgJgBgNQABgRgPgJIgGgDQgFgBgGgBQgMAAgJAJg");
	this.shape_33.setTransform(73.1,60.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#845326").s().p("AgZAaQgLgLAAgPQAAgVATgKIAGgDQAFgCAGAAQAPAAALALQALALAAAOQAAALgHAKIgEAFQgLALgPAAQgPAAgKgLgAgGgeIgGACQgSAIgBAUQABANAIAJQAKAJAMAAQAPAAAJgLIAEgGQADgGAAgIQAAgMgJgKQgJgJgNAAg");
	this.shape_34.setTransform(36.9,60.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#845326").s().p("AguATQgSgFgSgNQgNgJgIgKIgEgIIAFAHQAHAIAPAKQAOAJAWAHQAUAGAYAAQAZAAAUgGQAWgHAOgJQAQgKAGgIIAFgHIgEAIQgIAKgNAJQgSANgSAFQgXAIgYgBQgXABgXgIg");
	this.shape_35.setTransform(55,79.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#845326").s().p("AAAA3QgLAAgOgCIgBAAIgBAAIgBgBIgSgEIgCgBIgBAAIgBAAIgBgBQgLgEgIgFIgBAAIgBAAQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAIgIgGQgNgJgIgLIgEgHIAFAHQAHAIAPAKIAHAEIAUgqQgOgFgPgLQgOgKgHgKQgDgEgBgDIAFAGQAIAKAOAIQAMAJATAGIABAAIABABIAMADIABAAQASAEAQAAQARAAASgEIABAAIAMgDIABgBIABAAQATgGAMgJQAOgIAIgKIAFgGQgBADgDAEQgHAKgOAKQgPALgOAFIAUAqIAHgEQAPgKAHgIIAFgHIgEAHQgIALgNAJIgIAGQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAgBAAIgBAAIgBAAQgIAFgLAEIgBABIgBAAIgBAAIgCABIgSAEIgBABIgBAAIgBAAQgOACgMAAgAADgBIAAAyIAVgBIgKgygAgXAwIAVABIAAgyIgLgBgAAUgDIAJAyIAQgEIACAAIgNgwIgOACgAguArIACAAIAQAEIAJgyIgOgCgAAogGIAMAvIARgHIgVgrgAhEAiIARAHIAMgvIgIgDg");
	this.shape_36.setTransform(55,73.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_37.setTransform(59.4,92.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_38.setTransform(64.8,90.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#845326").s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_39.setTransform(69.4,87.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_40.setTransform(73.1,84.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_41.setTransform(75.6,80.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_42.setTransform(50.6,92.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_43.setTransform(45.2,90.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#845326").s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_44.setTransform(40.5,87.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_45.setTransform(36.8,84.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#845326").s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_46.setTransform(34.4,80.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#845326").s().p("Ai5AYQg3gzgIguQgCgOAGgGQAEgEAIAAQAQACAJAPQA2BfBSAfQApAQAegEIAAAAIAVAAQAZgCAagKQBRgfA3hfQAJgPAQgCQAIAAAEAEQAGAGgCAOQgIAug3AzQhMBHhuADQhtgDhMhHgAjwhZQgEAEACAMQAHArA3AyQBKBFBqAEQBsgEBKhFQA2gyAHgrQACgMgEgEQgCgCgGAAQgNABgHANQgpBJg6AkQgoAZgrAGQgUADgLgCQgjAEgsgTQhPghg2hdQgHgNgNgBIgCAAQgEAAgCACg");
	this.shape_47.setTransform(55,84.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#845326").s().p("AgeAHIgDgBQgHgCABgGQABgIAHAAIAWgBIATAAIAWABQAHAAABAIQABAGgHACIgDABQgPAFgQAAQgPAAgPgFgAgegEQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABQAAAAAAABQAAAAAAAAQABAAAAABQAAAAABAAIADABQAcAKAdgKIADgBQABAAAAAAQABgBAAAAQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgVgBIgTAAIgVABg");
	this.shape_48.setTransform(55,66.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#845326").s().p("AgjAYQgigLAAgVQAAgFAEgEQAJgIAcgCQAOgBAOAAIAdABQAcACAJAIQAEAEAAAFQAAAVgiALQgQAFgUAAQgTAAgQgFgAg9gNQAAAAgBABQAAAAAAABQgBABAAAAQAAABAAABQAAARAeAJQAhAMAigMQAegJAAgRQAAgBAAgBQAAAAgBgBQAAgBAAAAQgBgBAAAAQgHgGgXgCQgQgCgQABIgJAAQgqAAgKAJg");
	this.shape_49.setTransform(55,66.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#845326").s().p("AgIAaQgQgDgMgOIgKgNQgBAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAVgRAUgCQAEgBADABIAGABQAaAFAOAZQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgXASgWAAgAgogEQANASAPAFQAJgBAHgCIgDAAQgRAAgOgRIgBgCIABgCQAQgKANAAQAEAAAFACIgDgCIgKgFQgSACgRAOgAgYgCQALAMAOAAQALAAANgHQgMgMgOAAQgMAAgLAHg");
	this.shape_50.setTransform(62.1,55.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#845326").s().p("AguAJQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAEgGAHgHQANgOAQgDQAYgGAeAYQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAQgDAGgHAHQgMAOgQADIgKABQgWAAgXgSgAgRgQQgPAIgIAOQARANARACQAKgCAHgGQgGADgFAAQgPAAgPgKQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBIAAgCQAQgRARAAIAFABIgHgCIgHgBIgKABgAgYADQANAHALAAQAOAAALgMQgLgHgMAAQgOAAgMAMg");
	this.shape_51.setTransform(47.9,55.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#845326").s().p("AgkA0QgIgCgGgHQgFgFABgJQABgMAHgGQAIgGAMACQABgjAMgSQAHgIAGgBIABAAIANAJQAMASABAjQAMgCAIAGQAIAGAAAMQABAJgFAFQgFAHgJACQgUAFgRgBQgQABgUgFgAgrAQQgFAEAAAIQABAJAKAEQAFACAKABQAcACALgBQAigGgFgVIgCgCQgFgDgIAAIgHABIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAgfgJgQQgGgLgGgBQgFABgGALQgJAQAAAfQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAIgCABIgIgBQgHAAgFADg");
	this.shape_52.setTransform(55,57.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#845326").s().p("AAAGZIgwgEQhGgIg3goQg4gogbg+IgBgDQgEgJgEgPQgFgPgDgVQgBgJACgHQAEgKAJgCQAEgCALAAIABABQAqABAmgPQAPgFADgIQABgGgBgHIgEgJQgOAHgRAAQgdAAgUgTQgUgVAAgcQAAgbARgTQgHgBgEgDQgNgFgPgLQgOgKgEgLQgFgLAGgKQACgDAFgEIADgDQALgFAUABIAGAAQAbgBAagNQAZgMAQgWQAKgNACgMQABgIgEgHQgDgGgFgDQgFgDgLABQgOABgQAIIgcARIgPAKQgPAHgJgBQgMgCgDgSQgBgJACgVIACgNIAAgBQACgNADgKIABgBIAGgSIACgFQAIgOAIgLIABgBQAIgLALgKIABgBIAPgMQAYgSAagIQAQgwA9gWQAjgNAogDIADAAQASAAAbAGQAwAKAdAXIABAAIACADQAWASAJAaQAfAJAbAXIAHAGQALAKAJALIABACQAIALAIAOIAAABQAEAIAFAPQAEAOACAWIAEAcQAAANgJAFQgNAKgTgLIgPgKIgcgRQgQgIgOgBQgKgBgGADQgFADgDAGQgDAHAAAIQACAMAKANQARAXAZAMQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQAYAKAZABIAGAAQAUgBALAFQAGAEAEAGQAGAKgFALQgEALgOAKQgMAJgaALQAQAUAAAaQAAAcgUAVQgUATgdAAQgVAAgRgLQgBALACAIQAFAPAPAFQAmAPAqgBIABgBQALAAAEACQAJACAEAKQACAHgBAJQgEAfgNAgQgTArghAhQghAhgsATIgBABIgLAFQggAMgjAEIgxAEIAAABgAiHBpIACAHQADAYgKAMQgFAFgNAGQgcAMgpACQgQAAgHAFQgJAFgCAMQAAAOAIAVQANAhAMASQANATAbAZQApAmAdANQANAGAZAHQA3ANA2gFQA6gFAwgaQAygaAhguQAjguAGg2QgCgIgFgFQgJgIgZAAQgrgBgWgPQgMgJgHgQQgIgSAHgMQgFgFgGgKIgBAFQgSAigiAVQgjAVglgBQgnAAgjgZQgQgLgMgRQgOgTgCgIQgGALgIAHgAg8gpQgXACgMADQgJACgHAEQgGAFgDAJIgFAPIgDAJQAQATAAAaQAAANgEALQAGANAGAJQARAaAbAOQAcAPAgAAQAhAAAcgPQAbgOARgaQAGgJAGgNQgEgLAAgNQAAgYAOgRQgCgEgBgIIgCgLQgDgNgRgJQgKgFgUgCQgggEglAAQgeAAghADgAjdAEIgFAFQgSASAAAaQAAALAEAKQAWAkAhAAQATgBAPgNIAFgFQALgMAEgPIABgHQACgUgIgRQgHgOgOgLQgLgFgMAAQgXAAgSAOgACJAHIgFAGQgOASAAAWQAAAIADAIIACAIIAFAKQAGAGAGADIAFADQAQAIARgBQASAAAOgKQALgHAEgJQAFgJABgMQAEgZgLgUIgBgBIgDgFQgHgIgLgGQgLgEgKAAQgZAAgTARgAB4goIAGAHIACAEIABAAQAFAJABAKIACALQASgPAXgBQgNgPgGgMQgFAJgJAAQgOAAgCgMQgFAFgEAAgAixgPQAXABASAPQADgUAIgOIAGgHQgEAAgFgFQgCAMgOAAQgJAAgFgJQgGAMgNAPgACdhBIABAAIADANQAFAPARASIABAEQAXABASAOIABgBQABgEAOgEQgkgHgYgYQgPgNgDgNgAi0goQgZAYgjAGQALAGAJABQARgLAUgBIABgEQARgSAFgPIADgMIgEgBQgEANgPAMgACohEQADALAOANQAcAbAmADQAOgIAHgKIgTACQglAAgegXIgCgDQgJgHgCgFgAkMgdQAJAJALAGQAlgEAbgaQANgLAEgLIgGgCQgCAGgJAHIgBACQgeAXglAAIgSgCgAkVgvQAAAFACADQAXAGAWgGQAXgEASgPIACgBQAGgFACgFIgBgBIgGgBIgBAAQgYAVgiABQgQAAgPgHIgBAJgACzhGQABAEAIAGIACACQASAPAXAEQAYAGAWgGIADgJQABgDgBgDQgPAGgRAAQgjAAgbgagACJg5QgDADAAAFQAAAEADAEQADACAFAAQAEAAADgCQADgEAAgEIAAgCIgBgDQgDgGgGAAQgFgBgDAEgAiZg2IgBADIAAACQAAAEADAEQADACAEAAQAFAAADgCQADgEAAgEQAAgFgDgDQgDgEgFABQgGAAgDAGgABog4QAAAGAEACQADADAEABQAFgBADgDQADgCAAgGQAAgGgGgDIgFgBIgBAAQgKACAAAIgAh4hBQgFAEAAAFQAAAGADACQADADAFABQAEgBAEgDQADgCAAgGQAAgHgJgDIgCAAQgEAAgCABgAhRhJQAHAEAAAIQAAAGgFAFQAVgDAgAAQAAgJgIgHQgIgGgKgCIgEAAQgKAAgPAEgABQgyQgFgEAAgHQAAgIAHgEQgSgEgLAAQgKACgIAGQgIAHAAAJQAYAAAWACIACAAIAFABIAAAAgABThEQgCADAAAEQAAAEACACQADADAEAAQAEAAACgDQADgCAAgEQAAgEgDgDQgCgCgEAAQgEAAgDACgAhfhEQgDADAAAEQAAAEADACQADADADAAQAEAAADgDQACgCAAgEQAAgEgCgDQgDgCgEAAQgDAAgDACgAgKhGQgDADAAAEQAAAIAIADIAFgBQAIgCAAgIQAAgEgDgDQgEgEgDAAQgFAAgDAEgAAvhhIgGAEQgRALgJAEIgJABQAHAFAAAJQAAAFgDAFIAKAAIABgCQABgKAKgJQAJgHALgBQAJgBAHABQAGAAAZAEQAkAGARgJQANgHAFAAIgMgJIgGABQgNAKgagEIgHgBIgGADIgBABIgCABQgNAEgTgIQgNgFgEgEgAg9hTIAKABQALABAJAHQAKAJABAKIABACIAEAAQgEgFAAgFQAAgKAIgEIgBAAQgMgBgKgEQgNgGgDgJIgDADQgTANgYgEQgEAAgCgCQgEgEgCgBIgHAAQgSAGgRgJIgHgCQgHAGgLAHIAEABIARAHQAQAEAWgEIAcgEQAMgDAJAAIAGAAgADqg3QAXAFAUgJIgBAAQgIgEgUgBIgHAAQgagBgWgKQASAQAXAEgAkRg8QAUAIAWgFQAWgEARgOQgWAKgaABIgIAAQgRAAgIAEgAgShdIAQACIAOgCIAAgEIACgNIgGABIgVgBIgGgBIABASIgEgTIgBAAIgJgCIAKAAIgBgFIgBgNIgIgCIAHgBIAAgRIgHgDIAHAAIAAgSIgHgCIAHgBIABgCIABgPIgJgCIAKAAIACgRIgLgDIAMgBIAFgUQADgJAEgKIABgCQgPAJgKAhQgFAPgCAMQgGAiABAdQADAIgBAEIgBAAQABAKACABQAHAHAOACgABQhdQALACAFgCQAEgBAIgQQAJgTAGgVIAEgUIgIgCIgEAMIAGADIgGgBIgEAKIgBACIAFADIgGgBIgFAMIAEACIgFAAIgGALIAFADIgGAAIgFAIIgCADIAGACIgHAAIAAgBgAh+iqIAEAUQAGAVAJATQAIAQAEABQAFACALgCIgIgLIAAABIgHAAIAGgCIgCgDIgFgIIgGAAIAFgDIgGgLIgFAAIAEgCIgFgMIgGABIAFgDIgBgCIgEgKIgGABIAGgDIgEgMgAA+hvIgDAIIAJAHIAMADIAFgKIABgBQgFgBgHgDIgLgGgAAYhxIgHACIgBAAIgDASQAOgDAGgGQAEgEAAgaQABgcgGgcQgCgMgEgPQgKghgQgJIABADIAGATIAFAUIAOAAIgCABIgHACIgEABIABADIACANIAKAAIgCABIgHACIgBAAIACAQIAAABIAIAAIgIADIABARIAHAAIgCABIgFACIAAASIAHAAIgHADIgBABIgBAOIAAACIAJAAgAhJhsQgHADgFABIABABIAFAKIAMgDIAJgHIgDgIIgBgDIgLAGgACBiGQgFAXgHAKIgBABQASAEATgGIgKgLQgLgPgBgNgAiQirQAQAJgCAUQAAAMgMARIgKALQAVAHAWgHQgLgUgHgbQgMguAOgRQACgCADAAIAAAAIAEgBQAOgBAOAMQALAIAJAPQAHAKAFAMIAHATQABgcAFgWQAKg9AcgNIACAAIAAgBIAHACIAHAHQAJAHAFAIQALAPAFAYQAHAegCApQAJgXAQgWQAdgmAVAAQADAAACACQAGAIABAOQADAKgBAKIgBAKQAEgHAHgEQAHgEALABIAPAEQAAgVgEggQgFgrgHgbQgQgUgigUQg4gjg6AAQg7AAg1AgQgcARgRATQgNArgFBXIAPgEIAGAAQAHAAAFADgABMitQgNATgJASQgIARACAEQADAHAHAFIADgMIgFgGIAGADIAEgLIAAgBIgEgEIACAAIADACIAGgMIgEgFIAFADIAGgMIgFgEIAGADIAAgBIAGgKIgFgGIAHAEIAHgKIgDgCIgEgEgAg8h0IAAABIADAMQAHgHACgDIgBgLQgGgVgUgcIgNgPIgEAEIgDACIAHAKIAHgEIgFAGIAGAKIAAABIAGgDIgFAEIAGAMIAFgDIgEAFIAGAMIADgCIACAAIgEAEIAAABIAEALIAGgDIgFAFgABFiAIgEAJIgBACIAXALIACgEIAEgIQgFAAgIgEIgLgGgAhPh6QgIAEgFAAIAEAIIACAEIAXgLIgBgCIgEgJIAAAAgAgUhyIAiAAIAAgRIgGABIgKABIgSgCgABGiDIAFACIATAJIAFgLIgMgEIgLgGgAhWiHIgMAEIAFALIATgJIAFgCIgGgKgABPiUIgCAEIAYALIAEgMIgMgEIgKgGgAhciVIgMAEIAEAMIAYgLIgCgEIgEgHgAgUiHIAiABIAAgQIgGABIgVgBIgHgBgAC/ivQADAGAIAFQASAOATAHQAIgDADgHQAEgIAAgLQgugVgWgEQAAAPAFAHgABVieIAAAAIAVAKIABgBIAEgJIgLgFIgJgEgAhjijIgLAFIAEAJIABABIAVgKIAAAAIgGgJIgJAEgAj+irIABAIQAEALAHACQAEABAIAAIAWgPQANgHAEgHQACgFACgLIABgDQgXAEgtAWgAAOibIgBgPIgPABIgRgDIgBARIAiAAgABciqIAUAJIADgMIgJgDIgHgEgAhpiwIgJADIADAMIASgIIABgBIgEgIIgCgCgAB3ivIAIAEQADgXgGgKgAh+irIAIgEIgFgdQgGAKADAXgAgTixIAAABIAfABIAAgBIgBgPIgDABIgVgBIgFgBgABli3IAPAHIAHgcIAAgBIgBgDIgDAAgAh6jNIAAABIAHAcIAPgHIgSgZIgDAAgAj8jCIgBANIgBAEQAxgXATgDIACgKQgXAAgtATgAD+iyIgBgQQgvgUgUABIAAAKQAVAEAvAVgABZi8IABAAIAIAEIAUgYQgNACgQASgAhhi4IAIgEIABAAQgQgSgNgCgAAKjDIgCgQIgKABIgLgBIgCgBIgCARIAbAAgAj5jZIgCARQAugUAVABIACgNIgCgBQgdAAgkAQgAD8jJIgCgQQgmgQgcABIABANQAWgBAtATgAAHjXIgHgnIAAgDIgBgBIgCAAIgCABIgBADIgIAmIAMAAIAJABgAD4jfIgEgOQgqgOgVACIACALIADAAQAZAAAlAPgAj0jsIgDANQAlgQAcABIACgLIgGAAQgXAAgjANgAjskCIgGAPQApgOAVACIACgIQgHgCgKAAQgRAAgYAHgADyj0IgIgPQgngJgQAFIABAIIAIAAQAVAAAhALgAjZkYIgOAPQAkgJASAGIACgNQgFgDgKAAQgLAAgQAEgADmkKIgEgHIgHgHQgigEgKAGIADAKQAHgDAKAAQAOAAAVAFgACskkIACAIQAKgFAbADIgLgJQgSAAgKADgAitkeIACgHQgJgCgSAAIgEACIgHAGIATgCQALAAAGADgACqktIABADQAJgDALAAQgJgGgQgHQACAGACAHgAi+ktQAKABAKACIAHgQQgOAFgNAIgACekxQgDgKgDgFIAAAAIgBAAQgEgOgIgLIgNAPQARALAPAOIAAAAgAiXlAQgCADgBAFIASgPIgIgHQgEAHgCAHIgBAAgAiNlTIAJAJIALgIIgJgQQgIAKgDAFgABvlUIAKAGIAOgPIgNgNgAh+llIAJARIAPgJIgKgVQgIAGgGAHgABblgIAAABIAPAIIAMgWQgHgGgJgFgAhrl1IAKAVIARgHIgIgYgABFlpIARAHIAAAAIALgZIgUgJgAhTmBIAIAYIASgFIgGgagAAvlvIARAFIAIgcIgUgFgAg6mJIAGAaQALgEALgBIgEgcgAATl1IAWAFIAFgdIgYgEgAgcmRIAEAcIATgBIAAgdIgXACgAAAl2IANABIADgdIgQgBg");
	this.shape_53.setTransform(55,55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E8CA95").s().p("AgMAiQgIgDgFgGQgHgJADgQQAEgVARgNIABAIQAGgIAKABQAKABAGAIQALAQgLAUQgHAQgPAFIgIACIgHgBg");
	this.shape_54.setTransform(70.4,77.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E8CA95").s().p("AgTAbQgGgDgEgGQgEgGgBgHQAAgPAOgHIADgCQAHgLAXADQAQACAEAHQACADAAAHQABAXgLAIQgHAGgSAAIgFAAQgIAAgGgCg");
	this.shape_55.setTransform(62.6,84.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E8CA95").s().p("AAGAeQgfgDgGgPQgFgMAIgLQAEgIANgLIACAIQAIgDAJABQAJACAHAGQAGAGADAJQACAIgCAJQgDAIgHAEQgFADgHAAIgFgBg");
	this.shape_56.setTransform(47.1,84.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#E8CA95").s().p("AgLAhQgRgPgGgWQgGgbAWgKQASgIAQAQQAPAOAEATQADAQgFAMQgHAPgQABQgJAAgMgLg");
	this.shape_57.setTransform(40.6,78);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E8CA95").s().p("AhhAUQgCgNAJgKQALgOAngKQAegJAeAEQAgAEAbAQQAKAGAFAHQAHAJgEAKQgFALgOABQgJAAgPgEQg3gOg7AQQgMAEgHAAQgPAAgDgOg");
	this.shape_58.setTransform(55,22.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E8CA95").s().p("AgEAwQgMgDgHgKQgHgJAGgFQADgDAFABIAJAAQAHgDACgJIAAgPQAAgWATgSQgBAfADAeIADAPQACAIgCAFQgEAEgEACQgGACgHAAIgJgBg");
	this.shape_59.setTransform(52.8,57.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E8CA95").s().p("AgfAsQgNgQAZggQAMgPAagaQAKgIAFAFQAEAEgFAJIgkBBQgJAQgCACQgDADgDAAQgFAAgGgHg");
	this.shape_60.setTransform(63.7,39.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E8CA95").s().p("AADBJQgGAAgEgEQgHgHgDgOQgEgXAFgtQAGg2ASACQAMACAAA3QAAAcgCAoQAAAMgFAFQgDADgGAAIgBAAg");
	this.shape_61.setTransform(53,38.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E8CA95").s().p("AAPA2QgGgCgFgIQgNgTgJgbQgLgfAEgUQALAAAEAOIAFAYQAIAcATAYQAFAGAAAFQgBADgEACIgEABIgDAAg");
	this.shape_62.setTransform(44.7,40.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#C59B5C").s().p("AgNAAIAMgDIAKgHIAGAKIgFACIgTAJg");
	this.shape_63.setTransform(46.5,41.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#C59B5C").s().p("AgJAIIgFgIQAGAAAIgDIAKgHIAAABIAEAJIAAAAIgVALg");
	this.shape_64.setTransform(47.1,43.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#C59B5C").s().p("AiYCDIAKgLQAMgRAAgMQACgUgQgJQgHgEgLACIgPADQAFhVANgrQARgUAcgRQA1ggA7AAQA6AAA4AjQAiAVAQATQAHAbAFAqQAEAgAAAVIgPgDQgLgCgHAEQgHAEgEAHIABgKQABgKgDgKQgBgOgGgHQgCgDgDAAQgVAAgdAmQgQAXgJAWQACgpgHgeQgFgXgLgPQgFgIgJgHIgHgHIgHgBIAAAAIgCABQgcAMgKA9QgFAVgBAcIgHgTQgFgMgHgKQgJgPgLgIQgOgLgOAAIgEABIAAAAQgDAAgCADQgOAQAMAuQAHAbALAUQgLAEgLAAQgLAAgKgEgAB9gRIAHAQIAIAXIAFAWIAAgPIgDgQQgBgIgEgIQgDgJgFgHIgIgOIgJgMgAh4ghIgIAOQgFAHgDAJQgEAIgBAIIgDAQIAAAPIAFgWIAIgXIAHgQIANgcIgJAMgACMg2IAFALQADAEAEAKIAFASIAIAxIACgYIgCgRIgCgKQgDgKgDgIIgJgOIgJgMgAiTgtIgJAOQgDAIgDAKIgCAKIgCARIACAYIAFgoIAIgbQAEgKADgEIAFgLIABgDgAA3glQgKAKAAAPQAAANAKAKQAKALAPAAQAOAAAKgLQALgKAAgNQAAgPgLgKQgKgKgOAAQgPAAgKAKgAhnglQgLAKAAAPQAAANALAKQAKALAOAAQAPAAAKgLQAKgKAAgNQAAgPgKgKQgKgKgPAAQgOAAgKAKgAARgvQgDAEAAAFQAAAFADAEQAEADAFAAQAFAAAEgDQADgEAAgFQAAgFgDgEQgEgDgFAAQgFAAgEADgAgogvQgEAEAAAFQAAAFAEAEQADADAFAAQAFAAAEgDQAEgEAAgFQAAgFgEgEQgDgDgGAAQgFAAgDADgAgLg1QgDADAAAFQAAAFADAEQAEAEAFAAQAEAAADgEQAEgEAAgFQAAgFgEgDQgDgEgEAAQgFAAgEAEgAhfhiQgHAFAEAIIAPAhQAAAAAAABQAAAAABAAQAAAAAAABQABAAAAAAIACgBQAAAAABAAQAAgBAAAAQABgBAAAAQgBgBAAAAIgPghQgCgEADgDQAYgSASAAIABAAQAEABABADIAGAWQACAFgGABIgTAHQgEABgCgEIgEgIQgDgEAFgDIAIgFIAEgBQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQACAFgFABIgEACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABABAAAAQABAAAAAAQABAAAAAAIAFgCQAEgCACgEQABgEgBgEQgCgFgFgCQgGgBgDACIgIAFQgEACgBAEQgCAFACADIAFAJQACAEAEABQAEACADgCIATgGQAKgEgDgKIgGgVQgCgIgIAAIgBAAQgTAAgaATgAA3gzIgIgGIgIgDQgIgDgLgCIgWgCQgaABgRAGIgHADIgFADIgDADIAJgEIAHgCIAqgEIAoAEIAIACIAJAEgABAhaQgDACgCAEIgDAJQgCAJAIAEIASAJIAFABQAGAAADgFIAMgTQADgIgFgFQgPgQgfgEQgIgCgEAJIgMAiQgBAAAAABQAAABABAAQAAABAAAAQABAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQABgBAAAAIANgiQABgEAEABQAeAEANAOQADACgCAEIgMATQgCAEgFgCIgSgJQgEgBACgFIADgJQACgFAEABIAJACQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgCAFgFgCIgFgCQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAQAAABABAAQAAABAAAAQABABAAAAIAFACQAEACAEgCQAEgCACgEQACgEgCgFQgCgFgFgBIgKgCIgCgBIgGACgAgTh3QgIADAAAJIACAkQAAAAAAABQABAAAAAAQAAABABAAQABAAAAAAQABAAABAAQAAAAABgBQAAAAAAgBQAAAAAAgBIgCgkQAAgDADgCQAcgJASAIQADABAAAEIgDAWQAAAFgFAAIgUgBQgDAAgBgFIgBgJQAAgFADgBIAJgCQABAAABAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAABQAAAEgFABIgFAAQgBAAgBAAQAAABgBAAQAAAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAIAFAAQAEAAADgDQADgEAAgEQAAgGgDgDQgFgDgFABIgJACQgJACABAKIABAJQABAEADADQADADADAAIAUABQAKAAABgKIACgWQABgIgHgEQgKgEgLAAQgMAAgQAFg");
	this.shape_65.setTransform(55,31.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#C59B5C").s().p("AgKgBIAJgDIAGgEIACACIAEAGIgBABIgRAIg");
	this.shape_66.setTransform(44.6,37.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#C59B5C").s().p("AgNgLQANADAOAQIAAAAIgIAEg");
	this.shape_67.setTransform(44.6,35.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#C59B5C").s().p("AgNAAIAMgEIAKgGIADAHIACADIgWALg");
	this.shape_68.setTransform(45.9,40.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E8CA95").s().p("Ai0AUQg3gygHgsQgCgMAEgDQACgCAEAAIACAAQANABAHAMQA2BeBPAhQAsASAjgEQALACAUgCQArgHAogZQA6gkAphJQAHgMANgBQAGgBACADQAEADgCAMQgHAsg2AyQhKBFhsADQhqgDhKhFgAAmBMQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAgxBMQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgABcA6QAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAhnA6QAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgACKAfQAAAHAHAAQAGAAAAgHQAAgGgGAAQgHAAAAAGgAiWAfQAAAHAGAAQAHAAAAgHQAAgGgHAAQgGAAAAAGgACwgBQAAAFAFAAQAGAAAAgFQAAgGgGAAQgFAAAAAGgAi6gBQAAAFAGAAQAFAAAAgFQAAgGgFAAQgGAAAAAGgADIgoQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGgAjTgoQAAAGAGAAQAGAAAAgGQAAgGgGAAQgGAAAAAGg");
	this.shape_69.setTransform(55,84.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E8CA95").s().p("AgOASIAUgqIAJACIgNAvg");
	this.shape_70.setTransform(49.6,74.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E8CA95").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_71.setTransform(62.9,30.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#AB7F3F").s().p("AgLAXIgBAAIAMgwIAOACIgKAxg");
	this.shape_72.setTransform(51.7,75.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E8CA95").s().p("AgKAZIAKgyIALABIAAAyg");
	this.shape_73.setTransform(53.7,75.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E8CA95").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_74.setTransform(47,30.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#C59B5C").s().p("AhPCSQgZgHgMgGQgegNgogmQgbgZgNgTQgNgSgMgfQgIgWAAgOQABgMAJgFQAHgFARAAQAogBAcgMQANgGAGgGQAJgMgDgXIgCgIQAIgHAHgLQABAIAOATQANARAQALQAiAZAoABQAlABAjgWQAigVARgiIACgEQAFAJAGAFQgIANAIASQAHAPANAJQAVAPArABQAaAAAIAIQAGAFABAIQgGA1giAvQghAtgyAbQgwAZg6AFIgeACQgnAAgpgKgAjzgpQgFAGACAOQAHAsA4A0QBMBHBtAEQBugEBLhHQA4g0AHgsQADgOgGgGQgFgFgIABQgQABgIAPQg3BghSAfQgZAKgZACIgVAAIgBAAQgeADgogPQhSgfg3hgQgIgPgQgBIgCAAQgHAAgEAEgAgCAsIAAA8QAAAAAAABQABAAAAABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAgBAAAAQAAgBAAAAIAAg8QAAgBAAAAQAAgBAAAAQgBAAAAgBQgBAAgBAAQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABgAARApQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIAQA2QABABAAAAQAAABAAAAQABAAAAAAQABAAAAAAIABAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAgBAAAAIgQg3QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgBAAgAgTArIgQA3QAAAAAAABQAAABAAAAQAAAAABABQAAAAABAAIAAAAQABAAAAAAQABAAAAAAQAAAAABgBQAAAAAAgBIAQg2QABgBAAAAQAAgBgBAAQAAgBAAAAQgBAAgBgBIgBAAQAAAAgBAAQAAAAAAABQgBAAAAAAQAAABAAAAgAAhAjQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABIARAqQAEAJAJAAIABAAQAngFATgVQAHgHgFgIIgPgZQgDgEgFgCQgFgBgEACIgXAMQgFACgBAFQgCAEABAFIAEAMQACAFAFACQAEACAFgBIAMgDQAGgCADgFQACgHgDgFQgCgFgFgBQgFgCgFACIgFACQgBABAAAAQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABABAAQAAAAABAAQAAAAABAAIAGgDQACgBADABQADABABADQACADgCADQgBAEgEAAIgLADQgGADgDgHIgEgMQgCgGAFgDIAXgMQAHgDADAGIAPAZQACAEgDAEQgSAUgkAEQgHABgBgGIgRgqQAAgBgBAAQAAgBAAAAQgBAAAAAAQAAAAgBAAIgBAAgAhfASQgFACgDAEIgPAZQgFAIAHAHQATAVAnAFIABAAQAJAAAEgJIARgqQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBABIgRAqQgCAHgGgCQgkgEgSgUQgDgEACgEIAPgZQAEgGAGADIAXAMQAFADgCAGIgEAMQgDAHgGgDIgLgDQgEAAgBgEQgCgDACgDQABgDADgBQADgBACABIAGADQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAAAgBgBIgFgCQgFgCgFACQgFABgCAFQgDAFACAHQADAFAGACIAMADQAFABAEgCQAFgCACgFIAEgMQADgLgKgFIgXgMQgDgBgDAAIgDAAgAhlgQQAHAKANAJQASAMATAGQAWAHAYAAQAYAAAWgHQATgGASgMQANgJAHgKIAEgIIgFAHQgGAIgPAJQgPAKgVAGQgUAHgZAAQgZAAgUgHQgVgGgPgKQgPgJgGgIIgFgHIAEAIgABqgGQgBABAAAAQAAABAAAAQAAABABAAQAAABABAAIAmAZQADACAEAAQAEAAAFgDQAdgaAEgbQACgJgJgFIgagLQgFgCgFABQgFACgCAEIgNAXQgFAKAJAHIAKAHQAEADAFgBQAFAAAEgEIAIgJQAEgFgBgGQgBgGgGgDQgEgDgFABQgGACgCAEIgEAFQAAABAAABQAAAAAAABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABgBAAgBIADgFQAEgGAGAEQADABABAEQABADgDADIgHAJQgFAGgGgFIgJgHQgFgEACgGIANgWQACgGAHADIAaAMQAGACgBAFQgEAYgcAaQgFADgEgDIgmgZIgCAAIgCABgAidg4IgaALQgJAFACAJQAEAbAdAaQAFADAEAAQAEAAADgCIAmgZQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAgBgBABQAAAAgBAAIgmAZQgEADgFgDQgcgagEgYQgBgFAGgCIAagMQACgCADABQADABABADIANAWQACAGgFAEIgJAHQgGAFgFgGIgHgJQgDgDABgDQABgEADgBQAGgEAEAGIADAFQAAABABABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIgEgFQgCgEgGgCQgFgBgEADQgGADgBAGQgBAGAEAFIAIAJQAEAEAFAAQAFABAEgDIAKgHQAJgHgFgKIgNgXQgCgEgFgCIgEAAIgGABgAgBAGQAAAFAEAAQAFAAAAgFQAAgFgFAAQgEAAAAAFgAASAEQAAAFAFAAQAGAAAAgFQAAgFgGAAQgFAAAAAFgAgZAEQAAAFAGAAQAFAAAAgFQAAgFgFAAQgGAAAAAFgAAtgCQAAAFAGAAQAGAAAAgFQAAgHgGAAQgGAAAAAHgAg1gCQAAAFAGAAQAGAAAAgFQAAgHgGAAQgGAAAAAHgABBgKQAAAGAGAAQAFAAAAgGQAAgGgFAAQgGAAAAAGgAhIgKQAAAGAFAAQAGAAAAgGQAAgGgGAAQgFAAAAAGgAABgFIABAAQALAAAOgDIACABIAAAAIACgBIARgEIADgCIAAABIABAAIACgCQALgEAIgFIABABIABgBQAAAAAAAAQABAAAAAAQAAAAAAgBQAAAAAAgBIAJgFQANgKAHgKIAEgHIgFAGQgGAJgPAJIgIAFIgUgrQAPgGAPgKQANgKAHgLQAEgEAAgDIgFAHQgIAKgNAIQgNAJgSAGIgCAAIAAAAIgMAEIgCAAQgRAEgRAAQgRAAgRgEIgCAAIgMgEIAAAAIgCAAQgSgGgNgJQgNgIgIgKIgFgHQAAADAEAEQAHALANAKQAPAKAPAGIgUArIgIgFQgPgJgGgJIgFgGIAEAHQAHAKANAKIAJAFQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIABABIABgBQAIAFALAEIACACIABAAIAAgBIADACIARAEIACABIAAAAIACgBQAOADAKAAgABUgTQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgAhagTQAAAFAFAAQAGAAAAgFQAAgGgGAAQgFAAAAAGgABfgfQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgAhlgfQAAAFAFAAQAFAAAAgFQAAgGgFAAQgFAAAAAGgABsgsQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAgBQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBgBgBAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAABAAABgAhvgsQAAABAAAAQABABAAAAQABABAAAAQABAAABAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAgBABQAAAAgBAAQAAABgBAAQAAABAAABg");
	this.shape_75.setTransform(54.8,79.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#C59B5C").s().p("AgIAIIgEgIIALgEIAIgFIAGAJIAAAAIgUAKg");
	this.shape_76.setTransform(45.2,39.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#AB7F3F").s().p("AgNgWIAIgCIATAqIgPAHg");
	this.shape_77.setTransform(60.4,74.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#AB7F3F").s().p("AgJgYIAKgBIAJAyIgTABg");
	this.shape_78.setTransform(56.3,75.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#E8CA95").s().p("Ag0AYQgEgKAAgLQAAgYASgTIAFgEQARgPAWAAQANAAALAEQANAMAHAOQAJASgCASIgCAHQgDAPgMAMIgFAGQgPANgTAAQggAAgVgkgAgFgfIgGADQgTALAAAUQAAAPALAMQALALAOgBQAPAAALgKIAEgGQAHgKAAgLQAAgOgLgLQgLgLgPABQgGAAgFABg");
	this.shape_79.setTransform(36.2,60);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E8CA95").s().p("AgMgXIANgCIANAwIgCAAIgPADg");
	this.shape_80.setTransform(58.3,75.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#C59B5C").s().p("AgOASIgBgEQgRgSgGgPIgDgMIAAAAIAGgBQADANAPANQAXAXAkAHQgOAEgBAEIgBABQgSgOgWgBg");
	this.shape_81.setTransform(74.9,51.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#C59B5C").s().p("AgKgLIAAgBIABgDIADAAIARAYIgOAHg");
	this.shape_82.setTransform(43.8,35.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#AB7F3F").s().p("AgjgCQgOgNgCgLIAFAAQACAFAJAHIACADQAeAWAkAAIATgCQgHAKgOAIQglgDgdgag");
	this.shape_83.setTransform(77,50.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E8CA95").s().p("AgdAzIgFgDQgGgEgGgFIgFgKIgCgIQgDgJAAgHQAAgVAOgSIAFgGQATgSAYAAQAKAAALAEQALAFAHAKIADAEIABACQALATgEAZQgBAMgFAJQgEAJgLAHQgOAKgSAAIgCABQgPAAgPgIgAgTgUQgLAKAAAPQAAAKAGAIIADAGQAMANAPAAQAQAAAKgLQALgLAAgPQAAgSgPgLIgFgEQgHgDgKAAQgOAAgLALg");
	this.shape_84.setTransform(72.5,59.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E8CA95").s().p("AACAQQgXgFgRgNIgDgCQgHgGgCgFIAHgDQAbAZAiAAQASAAAOgGQABADgBADIgDAJQgLADgMAAQgLAAgLgDg");
	this.shape_85.setTransform(77.9,49.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#C59B5C").s().p("AALAeIAAAAIAGgFIgHADIgDgLIgBgBIAEgFIgCABIgDACIgFgMIADgEIgDACIgHgLIAFgEIgGADIAAgBIgGgKIAFgGIgHAEIgHgKIADgCIAEgFIANAQQATAbAHAUIABALQgCAEgIAHg");
	this.shape_86.setTransform(47.8,40.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#C59B5C").s().p("AgMABIgBgBQAFAAAIgEIAJgGIACADIADAIIgKAGIgKAEg");
	this.shape_87.setTransform(47.7,44.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#C59B5C").s().p("AAAgQIAEAdIgGAEQgDgWAFgLg");
	this.shape_88.setTransform(42.6,36.1);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#C59B5C").s().p("AAIAnQgEgBgHgQQgJgTgGgVIgEgUIAIgBIADAMIgGADIAHgBIAEAKIAAACIgEADIAFgBIAFALIgEACIAEAAIAGALIgEADIAFgBIAFAJIACACIgGADIAHAAIABgBIAHALIgJABIgGgBg");
	this.shape_89.setTransform(44.6,41.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#C59B5C").s().p("ABKAWIgCgCQAAgKgKgIQgJgHgLgBIgKAAQgMgBgPADIgbAEQgXADgPgDIgRgHIgEAAQALgIAHgGIAHACQARAJASgFIAGgBQADABADAEQADACAEAAQAWAEAUgNIADgDQADAKANAFQAKAEAMABIABAAQgIAEAAAJQAAAGAEAEg");
	this.shape_90.setTransform(45.6,47.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#C59B5C").s().p("AgpAYQAkgGAXgXQAPgNAEgMIAFABIgEALQgFAPgQASIgCADQgTABgQAMQgKgCgLgFg");
	this.shape_91.setTransform(35.1,51.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#E8CA95").s().p("AguAPQgCgEAAgEIABgIQAPAFAQAAQAhAAAYgVIABAAIAGACIABAAQgCAFgGAFIgCACQgSANgWAFQgLADgLAAQgMAAgLgDg");
	this.shape_92.setTransform(32.1,49.5);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#C59B5C").s().p("AgoAFQAJgEARAAIAHAAQAZgBAXgJQgRANgWAEIgOACQgOAAgOgFg");
	this.shape_93.setTransform(31.6,48.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AB7F3F").s().p("AgwAMIgDgEIASADQAlgBAegWIABgBQAIgHACgGIAHACQgEAKgNALQgbAagkAEQgLgHgJgIg");
	this.shape_94.setTransform(33,50.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E8CA95").s().p("AgKAAQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAIgIACIgFABQgIgDAAgIg");
	this.shape_95.setTransform(54.7,48.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#C59B5C").s().p("AANgUIgBACQgEAKgDAIIgFAUIgMABQALggAOgJg");
	this.shape_96.setTransform(53,31.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#C59B5C").s().p("AgPAIIgBgRIAGABIAVABIAGgBIgCAMIAAAEIgPACIgPgCg");
	this.shape_97.setTransform(54.7,44.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E8CA95").s().p("AgFAAQAAgGAFABQAGgBAAAGQAAAGgGABQgFgBAAgGg");
	this.shape_98.setTransform(57.6,27.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#E8CA95").s().p("AgGAGQgCgCAAgEQAAgDACgDQAEgCACAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgCAAgEgDg");
	this.shape_99.setTransform(64,48.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#C59B5C").s().p("AgQAIIAAgQIAQADIAQgBIABAOg");
	this.shape_100.setTransform(54.6,38.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#C59B5C").s().p("AgRAIIAAgPIAHABIAVABIAGgBIABAPg");
	this.shape_101.setTransform(54.6,40.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#C59B5C").s().p("AAAAVIgFgUIgGgSIgBgDQAPAJAKAgg");
	this.shape_102.setTransform(56.3,31.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#C59B5C").s().p("AgDAHIgKgGIADgIIACgDIAJAGQAIAEAFAAIgBABIgGAKIgKgEg");
	this.shape_103.setTransform(62.2,44.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#C59B5C").s().p("AgIArIABAAIAHgCIABgBIgIAAIAAgCIABgOIABgBIAGgDIgGAAIAAgSIAFgCIABAAIgGAAIgBgRIAHgDIgHAAIAAgBIgCgQIABAAIAHgCIABgBIgJAAIgCgNIgBgDIAEgBIAHgCIABgBQAEAPACAMQAGAcgBAbQAAAagEAEQgGAGgNADg");
	this.shape_104.setTransform(57.5,39.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E8CA95").s().p("AgGAIQgEgDAAgFQAAgIAJgCIABAAIAFABQAGADAAAGQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_105.setTransform(66.5,49.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#C59B5C").s().p("AgNAAIABgDIAFgHIAJAGIAMAEIgEALg");
	this.shape_106.setTransform(64.1,40.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#C59B5C").s().p("AgIABIgDgBIAHgIIAHAEIAJADIgEAKg");
	this.shape_107.setTransform(65.4,37.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#C59B5C").s().p("AgOAAIABAAIAEgJIABgBIAKAHQAHADAFAAIgDAIIgCADg");
	this.shape_108.setTransform(62.9,43.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#C59B5C").s().p("AgNAMQgBgLgFgHIgBAAIgCgEIgGgHQAEAAAFgFQACAMAOAAQAIAAAFgJQAGAMANAOQgXABgRAPg");
	this.shape_109.setTransform(69.9,52.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#C59B5C").s().p("AgJACIgEgCIAFgKIAKAHIAMADIgEALg");
	this.shape_110.setTransform(63.5,41.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E8CA95").s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAHAAADAGIABADIAAABQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_111.setTransform(69.4,50);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C59B5C").s().p("AgMAAIAAAAIAGgJIAIAFIALAEIgEAIIAAACg");
	this.shape_112.setTransform(64.8,39.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C59B5C").s().p("AgQAIIgBgQIARADIALgBIAHgBIgBAPg");
	this.shape_113.setTransform(54.6,42.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C59B5C").s().p("AgXgDQAQgOASgCIAKAFIADACQgEgCgFAAQgNAAgPAKIgBACIABACQANARASAAIADAAQgIACgJABQgOgFgNgSg");
	this.shape_114.setTransform(60.4,55.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#E8CA95").s().p("AghASQgegKAAgRQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAKgKAqAAIAJAAQAQAAAQABQAXADAHAGQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQAAARgeAKQgRAGgRAAQgQAAgRgGgAgfgKQgHAAgBAHQgBAHAHACIADABQAPAFAPAAQAQAAAPgFIADgBQAHgCgBgHQgBgHgHAAIgWgBIgTAAIgWABg");
	this.shape_115.setTransform(55,66.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C59B5C").s().p("AgNAIIACgPIACAAIAKABIALAAIACAOg");
	this.shape_116.setTransform(54.6,34.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#C59B5C").s().p("AAAAJQgXgEgSgPQAXAKAZAAIAHAAQATAAAJAEIAAABQgOAGgPAAIgNgCg");
	this.shape_117.setTransform(78.5,48.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C59B5C").s().p("AhNAXQAEgFAAgFQAAgJgIgEIAJgBQAJgEARgLIAGgEIABgCQAEAEANAFQATAIAMgEIACgBIABgBIAGgDIAIABQAZAEANgKIAGgBIAMAJQgEAAgOAHQgRAIgkgFQgYgEgGAAQgGgBgJABQgMABgIAGQgKAJgCAKIgBACg");
	this.shape_118.setTransform(63.8,47.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C59B5C").s().p("AgVAvQgJgBgGgDQgJgEgCgJQABgIAFgEQAEgDAIAAIAHABIACgBQABAAAAAAQAAAAAAAAQAAgBABAAQAAgBAAAAQAAggAJgQQAFgKAFgCQAHACAFAKQAJAQAAAgQAAAAAAABQAAAAABABQAAAAAAAAQAAAAABAAIACABIAHgBQAIAAAEADIACACQAFAWgiAFIgNABIgagBg");
	this.shape_119.setTransform(54.8,57.5);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C59B5C").s().p("AgZAEQAIgOAPgIQAHgBAJABIAIACIgFgBQgRAAgQARIAAACQAAABAAAAQAAAAAAABQAAAAABAAQAAAAAAAAQAPAKAOAAQAGAAAGgDQgHAGgLACQgQgCgRgNg");
	this.shape_120.setTransform(46.4,55.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#C59B5C").s().p("AgHA0QgCgBgBgKIAAAAQABgEgCgIQgCgdAHghQACgMAEgPIALADIgDARIgIAAIAIACIgCAPIAAACIgGABIAGACIgBASIgFAAIAFACIABARIgGABIAGACIACANIAAAFIgIAAIAIACIABAAIADATQgMgCgHgHg");
	this.shape_121.setTransform(51.8,39.5);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E8CA95").s().p("AgFAGQgDgCAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_122.setTransform(46,48.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C59B5C").s().p("Ag7BVQgbgOgRgaQgGgJgGgNQAFgLAAgMQgBgagQgTIADgKIAFgQQADgIAHgFQAHgFAIgBQAMgDAXgCQBJgGA7AHQAUACAKAFQARAIAEAOIABAMQABAHACAEQgOASAAAYQAAAMAEALQgFANgGAJQgRAagcAOQgbAOgiAAQggAAgcgOgAgbAfQgcACgIAIQgFAEAAAFQAAAXAiAKQARAGASAAQAUAAAQgGQAigKAAgXQAAgFgEgEQgJgIgcgCIgdAAIgJgBIgTABgAgsgOQgIAFgBALQgBAJAFAGQAGAGAIACQAVAFAPAAQASAAATgFQAJgCAFgGQAFgGgBgJQAAgLgIgFQgIgGgMABQAAgkgNgRIgNgKIgCAAQgFABgGAJQgNARgBAkIgEAAQgKAAgFAFgABChNQgUACgUARQgBAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIAKAOQANAOAQADIAKABQAWAAAXgSQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgOgagZgFIgHgBIgEAAIgEAAgAhNhMQgQADgNAOQgHAHgDAHQgBAAAAABQAAAAAAABQAAAAABABQAAAAABABQAWASAXAAIAKgBQAQgDAMgOQAHgHADgHQABAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQgYgUgVAAIgKACg");
	this.shape_123.setTransform(54.9,60.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C59B5C").s().p("AgPAIIAAgCIABgNIAEABIAVAAIAEAAIABAOIAAAAg");
	this.shape_124.setTransform(54.6,36.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C59B5C").s().p("AABAVIgLAAIAIglIABgDIABgBIACAAIACABIAAADIAHAmIgKgBg");
	this.shape_125.setTransform(54.6,31.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C59B5C").s().p("AgUACQAAgHgHgEQASgEAKABQAKABAIAGQAIAGAAAJQgfAAgVADQAFgFAAgGg");
	this.shape_126.setTransform(49.6,48.6);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C59B5C").s().p("AgcAHQANgOAGgMQAFAJAIAAQAOAAACgMQAFAFAEAAIgGAHQgIANgDAUQgRgPgXgBg");
	this.shape_127.setTransform(40.1,52.7);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#E8CA95").s().p("AgHAIQgDgEAAgEIAAgBIABgDQADgGAGAAQAEAAAEAEQADADAAADQAAAEgDAEQgEADgEAAQgEAAgDgDg");
	this.shape_128.setTransform(40.5,50);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E8CA95").s().p("AgHAIQgDgDAAgFQAAgFAFgDQADgCACAAIADAAQAIADAAAHQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_129.setTransform(43.5,49.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#C59B5C").s().p("AAVANIgCAAQgVgCgYAAQAAgJAIgGQAIgHAJgBQAKgBATAFQgHAEAAAHQAAAGAFAEg");
	this.shape_130.setTransform(60.4,48.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C59B5C").s().p("AgLgBQAGgHAHgGIAKAUIgOAJg");
	this.shape_131.setTransform(43.5,19.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C59B5C").s().p("AgFADIAAAAIABAAQACgGADgHIAIAHIgRAOQABgFACgDg");
	this.shape_132.setTransform(40.4,22.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#C59B5C").s().p("AgNgFIASgKIAJAXIgQAHg");
	this.shape_133.setTransform(45.5,18.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#C59B5C").s().p("AgNAGQANgIANgFIgGAPQgJgCgLAAg");
	this.shape_134.setTransform(37.2,24.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#C59B5C").s().p("AgLgMIAXgCIAAAcIgSABg");
	this.shape_135.setTransform(53.2,16.1);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#E8CA95").s().p("AgHAPIAAgdIAPABIgDAcg");
	this.shape_136.setTransform(55.8,16.1);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#C59B5C").s().p("AgSADIAHgEIAEgDQARABAJACIgCAFQgKgEgZADg");
	this.shape_137.setTransform(35.9,25.9);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#C59B5C").s().p("AgMgIIATgHIAGAZIgQAGg");
	this.shape_138.setTransform(47.9,17.3);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E8CA95").s().p("AgNgJIAXgGIAEAbQgLABgKADg");
	this.shape_139.setTransform(50.5,16.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#E8CA95").s().p("AghAPIABgNQAsgTAXAAIgCAKQgTAEgwAVg");
	this.shape_140.setTransform(33,35.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#C59B5C").s().p("AgZgEQAmgKATAGIgCAIQgVgCgoANIAGgPg");
	this.shape_141.setTransform(33.9,29.5);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E8CA95").s().p("AgdAAQAmgOAYACIgBALQgcgBglAPg");
	this.shape_142.setTransform(33.5,31.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E8CA95").s().p("AgGAAQABgGAFABQAHgBAAAGQAAAGgHABQgFgBgBgGg");
	this.shape_143.setTransform(51.7,27.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#E8CA95").s().p("AgFAAQAAgFAFAAQAHAAgBAFQABAGgHAAQgFAAAAgGg");
	this.shape_144.setTransform(54.7,27);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#C59B5C").s().p("AgfAAQAkgQAdABIgBANQgVAAgtASg");
	this.shape_145.setTransform(33.2,33.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#C59B5C").s().p("AgVAXQgHgCgEgLIgBgIQAsgUAXgFIgBAEQgCAKgCAFQgEAGgNAIIgVAOIgFAAIgHgBg");
	this.shape_146.setTransform(32.9,37.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#C59B5C").s().p("AgNAMIAEgbIAWAEIgEAcIgWgFg");
	this.shape_147.setTransform(58.3,16.4);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E8CA95").s().p("AgNgEQAegIALAHIgCAMQgSgGgjAIg");
	this.shape_148.setTransform(34.6,27.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#C59B5C").s().p("AgJADQADgEAHgKIAJAPIgKAIg");
	this.shape_149.setTransform(41.8,20.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#C59B5C").s().p("AgSAUIABgBQAHgKAFgWIACgHQABAMAKAOIAKAMQgLADgKAAQgHAAgIgBg");
	this.shape_150.setTransform(68.5,42.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#C59B5C").s().p("AgggBIgBgOQAcAAAlAPIACAQQgsgSgWABg");
	this.shape_151.setTransform(76.8,33.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#C59B5C").s().p("AgRAHQgIgFgDgFQgFgIAAgPQAWAEAtAWQAAAKgEAHQgDAHgIADQgTgHgRgNg");
	this.shape_152.setTransform(77,37.9);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#E8CA95").s().p("AgggGIgBgLQAVAAAtASIABARQgugVgUgDg");
	this.shape_153.setTransform(77,35.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#C59B5C").s().p("AgXAeQgBgDAIgRQAIgSAMgSIANgQIAFAFIACACIgHAKIgHgEIAGAGIgGAKIgBABIgFgDIAEAEIgGALIgEgCIADAEIgEAMIgDgCIgCgBIAEAFIgBABIgDALIgHgDIAGAFIgDANQgIgFgDgIg");
	this.shape_154.setTransform(62.1,40.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#C59B5C").s().p("AgWAnIAHgLIABABIAHAAIgGgDIACgCIAFgJIAFABIgEgDIAFgLIAFAAIgEgCIAFgLIAFABIgEgDIAAgCIAEgKIAHABIgGgDIADgMIAIABIgEAUQgGAVgJATQgHAQgEABIgGABIgJgBg");
	this.shape_155.setTransform(65.3,41.7);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#C59B5C").s().p("AgKAJIARgYIADAAIABADIAAABIgHAbg");
	this.shape_156.setTransform(66.2,35.7);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#C59B5C").s().p("AgNAIIAAAAQAOgQANgDIgTAXg");
	this.shape_157.setTransform(65.3,35.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#C59B5C").s().p("AgDANIADgdQAGALgDAWg");
	this.shape_158.setTransform(67.3,36.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#C59B5C").s().p("AgIAFQgBgHgDgFQAPAHAKAFQgMAAgIADg");
	this.shape_159.setTransform(72.8,24.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#C59B5C").s().p("AgLAIIALgVIAMANIgNAOg");
	this.shape_160.setTransform(67.3,20.1);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#C59B5C").s().p("AgNAKIAIgaIATAJIgLAYIAAAAg");
	this.shape_161.setTransform(63.3,17.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#C59B5C").s().p("AgMAIIAAAAIALgYQAIAFAHAGIgMAWg");
	this.shape_162.setTransform(65.4,19);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#C59B5C").s().p("AgPgFIAMgOQAIALAEANIAAAAIAAAAQADAFAEAKQgPgOgQgLg");
	this.shape_163.setTransform(69.2,22.4);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#C59B5C").s().p("AgSgCQAKgDARAAIAKAIQgZgDgKAGg");
	this.shape_164.setTransform(74.1,26);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#E8CA95").s().p("AgYAGIgCgJQAJgHAhAFIAHAGIAFAHQgkgIgQAGg");
	this.shape_165.setTransform(75.3,27.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#C59B5C").s().p("AgdAAIgCgHQARgGAmAJIAHAPQglgNgXACg");
	this.shape_166.setTransform(76,29.5);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E8CA95").s().p("AgMALIAFgbIAUAGIgJAbg");
	this.shape_167.setTransform(60.9,17);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E8CA95").s().p("AgfgBIgCgLQAVgBApANIAFANQgngPgaABg");
	this.shape_168.setTransform(76.5,31.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FCF6ED").s().p("AmEGFQihiiAAjjQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADjihCiQiiChjjAAQjjAAihihg");
	this.shape_169.setTransform(55,55);

	this.statueText = new cjs.Text("", "12px 'Heebo'", "#FFFFFF");
	this.statueText.name = "statueText";
	this.statueText.textAlign = "center";
	this.statueText.lineHeight = 20;
	this.statueText.lineWidth = 84;
	this.statueText.parent = this;
	this.statueText.setTransform(55,111.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.statueText},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.statueCounter, new cjs.Rectangle(0,0,110,151.1), null);


(lib.qBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// game-bg.svg
	this.instance = new lib.gamebg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.qBg, new cjs.Rectangle(0,0,1366,768), null);


(lib.qBoardImg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// option-stone.ai
	this.text = new cjs.Text("בחר בתשובה נכונה:", "14px 'Heebo'", "#454545");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 151;
	this.text.parent = this;
	this.text.setTransform(787,265.3);

	this.qBoardText = new cjs.Text("", "12px 'Times New Roman'", "#6D451D");
	this.qBoardText.name = "qBoardText";
	this.qBoardText.textAlign = "right";
	this.qBoardText.lineHeight = 16;
	this.qBoardText.lineWidth = 316;
	this.qBoardText.parent = this;
	this.qBoardText.setTransform(788,55.3);

	this.instance = new lib.questionArea();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.qBoardText},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qBoardImg, new cjs.Rectangle(0,0,828,326.6), null);


(lib.qBoard = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// option-stone.ai
	this.text = new cjs.Text("בחר בתשובה נכונה:", "14px 'Heebo'", "#454545");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 151;
	this.text.parent = this;
	this.text.setTransform(787,265.3);

	this.qBoardText = new cjs.Text("", "12px 'Times New Roman'", "#33CCCC");
	this.qBoardText.name = "qBoardText";
	this.qBoardText.textAlign = "right";
	this.qBoardText.lineHeight = 16;
	this.qBoardText.lineWidth = 622;
	this.qBoardText.parent = this;
	this.qBoardText.setTransform(787,62.1);

	this.instance = new lib.questionArea();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.92,0.92);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.qBoardText},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.qBoard, new cjs.Rectangle(0,0,828,326.6), null);


(lib.playagain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("שחק שוב", "18px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(56.7,9.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("ApDDYIAAmvISHAAIAAGvg");
	this.shape.setTransform(58,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,116.1,43.3);


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שחק", "24px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 40;
	this.text.parent = this;
	this.text.setTransform(117.4,10.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("At5EUQgRAAgLgMQgMgMAAgQIAAnXQAAgQAMgMQALgMARAAIbzAAQARAAAMAMQALAMAAAQIAAHXQAAAQgLAMQgMAMgRAAg");
	this.shape.setTransform(93,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,186,55.2);


(lib.openingBg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000201").s().p("AqJAgIAAg/IUTAAIAAA/g");
	this.shape.setTransform(1199.3,167.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#022B18").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgHAAIAAAfQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_1.setTransform(1242.1,261.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQADAAADADIAXAWQAFAGgFAHIgdAcQgEAFgHgFQgGgHAGgGIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAJAAAAAJQgBADgCADQgCADgEgBg");
	this.shape_2.setTransform(1239.6,259.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_3.setTransform(1248.3,261.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#022B18").s().p("AgfBLQgEABgDgDQgCgDgBgDQAAgJAKAAIAWAAIAhghIAAg2IgYgZIgKALIAVAVQAGAGgGAHQgGAFgGgFIgbgcQgCgDgBgDQABgEACgDIAWgWQADgDADAAQADAAACADIAiAhQADADgBADIAAA+QABADgDADIgmAmQgDADgDgBg");
	this.shape_4.setTransform(1250.7,259.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#022B18").s().p("AgFAyQgCgDAAgDIAAhXQAAgIAHAAQAJAAAAAIIAABXQAAAIgJAAQgDAAgCgCg");
	this.shape_5.setTransform(1245.2,259.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_6.setTransform(1245.2,270.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_7.setTransform(1242.3,248.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_8.setTransform(1248,248.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_9.setTransform(1245.2,251.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_10.setTransform(1248.3,232.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#022B18").s().p("AgGBJIgWgXQgCgCgBgEQABgDACgDIAbgcQACgCAEAAQADAAADACQACADAAADQAAAEgCACIgVAWIAKAKIAYgYIAAg2IghgiIgWAAQgEAAgDgCQgCgDgBgDQABgEACgDQADgCAEAAIAaAAQADAAADACIAmAnQADADgBADIAAA9QABAEgDACIgiAiQgCADgDAAQgDAAgDgDg");
	this.shape_11.setTransform(1250.7,234.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQACADAAADIAAAeIAHAAQAEABACACQADADAAADQAAAEgDADQgCACgEAAg");
	this.shape_12.setTransform(1242.1,232.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#022B18").s().p("AgEBJIgigiQgCgCAAgEIAAg9QAAgDACgDIAmgnQACgCAEAAIAbAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQACgCAFAAQADAAABACIAdAcQACADAAADQAAAEgCACIgXAXQgDADgDAAQgCAAgDgDg");
	this.shape_13.setTransform(1239.6,234.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#022B18").s().p("AgFAyQgCgCAAgEIAAhXQAAgDACgDQACgCADgBQAJAAAAAJIAABXQAAAJgJAAQgDgBgCgCg");
	this.shape_14.setTransform(1245.2,235.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_15.setTransform(1245.2,224.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_16.setTransform(1248,245.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_17.setTransform(1242.3,245.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_18.setTransform(1245.2,243.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#022B18").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_19.setTransform(1245.2,182);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_20.setTransform(1245.2,189.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#022B18").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABACIABABIAAADIgBABIgCADIgBABIgCABIgCABg");
	this.shape_21.setTransform(1245.2,218.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#022B18").s().p("AgHBhQAAgDACgDQACgCADAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFBMQgCgDAAgDQAAgEACgDQACgCADAAQAJAAAAAJQAAAIgJAAQgDAAgCgCgAgFAwQgCgDAAgDQAAgJAHAAQAJAAAAAJQAAAIgJAAQgDAAgCgCgAgFAUQgCgDAAgDQAAgEACgCQACgDADAAQAJAAAAAJQAAAJgJAAQgDAAgCgDgAgFgHQgCgCAAgEQAAgDACgDQACgDADAAQAJAAAAAJQAAAJgJAAQgDAAgCgDgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFg+QgCgDAAgEQAAgDACgDQACgCADAAQAJAAAAAIQAAAJgJAAQgDAAgCgCgAgFhaQgCgDAAgDQAAgJAHAAQAJAAAAAJQAAAIgJAAQgDAAgCgCg");
	this.shape_22.setTransform(1245.2,205.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_23.setTransform(1245.1,193.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#022B18").s().p("AgQAUIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAAIgJAAIgIAAIAAAfQAAAJgHAAQgJAAAAgJg");
	this.shape_24.setTransform(1148.9,261.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQAEAAACADIAWAWQADADAAAEQAAADgDADIgcAcQgEAFgHgFQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAAIgIAAg");
	this.shape_25.setTransform(1146.5,259.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_26.setTransform(1155.1,261.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#022B18").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgnAmQgBADgEgBg");
	this.shape_27.setTransform(1157.6,259.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#022B18").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_28.setTransform(1152,259.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_29.setTransform(1152,270.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_30.setTransform(1149.2,248.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_31.setTransform(1154.9,248.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_32.setTransform(1152.1,251.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#022B18").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgDACgDQADgDADAAQAJAAAAAJIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_33.setTransform(1155.1,232.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#022B18").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_34.setTransform(1157.6,234.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#022B18").s().p("AgHAdQgJAAAAgJIAAgnQAAgJAJAAQAHAAAAAJIAAAeIAIAAQAJAAAAAJQAAAJgJAAg");
	this.shape_35.setTransform(1148.9,232.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#022B18").s().p("AgEBJIgighQgCgDAAgDIAAg9QAAgEACgCIAmgnQACgDAEAAIAbAAQAIAAAAAJQAAAJgIAAIgYAAIggAhIAAA2IAYAZIAKgKIgVgWQgCgCAAgEQAAgEACgCQADgDADAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgCADgEAAQgDAAgCgDg");
	this.shape_36.setTransform(1146.5,234.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#022B18").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_37.setTransform(1152,235.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_38.setTransform(1152,224.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_39.setTransform(1154.9,245.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_40.setTransform(1149.2,245.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_41.setTransform(1152.1,243.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#022B18").s().p("AgzAuIAzhbIA0Bbg");
	this.shape_42.setTransform(1152.1,182);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_43.setTransform(1152.1,189.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgCgCAAgEQAAgCACgDQADgDACAAIAEACIADACIABACIAAABIAAADIAAABIgCADIgDACIgBABg");
	this.shape_44.setTransform(1152.1,218.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#022B18").s().p("AgIBhQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCgAgFAUQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgCAAgDgDgAgFgHQgDgCAAgEQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_45.setTransform(1152,205.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_46.setTransform(1152,193.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_47.setTransform(1221,212.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_48.setTransform(1211.1,225.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_49.setTransform(1203.5,203.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_50.setTransform(1219.7,239.4);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_51.setTransform(1203.5,191);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDIADgCIABAAQAEgBADADIABABIABACIABACIAAACIgBACIgBABIgBABQgCADgEAAQgCAAgDgDg");
	this.shape_52.setTransform(1202.1,216.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#022B18").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCADgEgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAJgBAAAIQAAADgDADQgCADgEAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAEABACACQADACAAAEQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_53.setTransform(1202.1,223.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDAEABIADABIABABQADADAAACIAAACIgBABIgCADIgDACIgBABg");
	this.shape_54.setTransform(1202.1,229.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#022B18").s().p("AgEAHIgBgBQgDgDAAgDQAAgDADgCIADgCIABgBQAEgBADAEQADACAAADQAAADgDADQgCADgEAAg");
	this.shape_55.setTransform(1224.5,217.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#022B18").s().p("AATAGQgDgDABgDQgBgDADgCQADgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDgAgIAAQABgIAHAAQAJAAAAAIQAAAJgJAAQgHAAgBgJgAgfAGQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgEAAgDgDg");
	this.shape_56.setTransform(1219.5,217.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_57.setTransform(1214.5,217.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBIADAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_58.setTransform(1212,208.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#022B18").s().p("AAHAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgVAGQgCgCAAgEQAAgCACgDQADgDAEAAQAEAAACADQACADABACQgBAEgCACQgCADgEAAQgEAAgDgDg");
	this.shape_59.setTransform(1207.4,208.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_60.setTransform(1202.8,208.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#022B18").s().p("AAAAJIgDgBIgBgBIgBgBIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIABgBIABgBIADgBIABAAIACABIACABIACACIABACIABACIAAABIgBACIgBACIgCACIgCABIgCABg");
	this.shape_61.setTransform(1209.5,236.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#022B18").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAABADQAHAGgHAGQgBACgFAAQgEAAgBgCgAgFAGQgDgCABgEQgBgDADgCQAGgGAFAGQAGAFgGAGQgDADgDAAQgBAAgEgDgAAPgOQgCgCgBgEQABgDACgDQACgCAEAAQADAAADACQACADABADQgBAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_62.setTransform(1205.4,240.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_63.setTransform(1201.2,244.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#022B18").s().p("AAHAyQgEAAgDgCQgBgDAAgEIAAgpQAAgDABgCQADgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh6AAQgIAAAAgJQAAgDACgDQADgCADAAICDAAQADAAADACQACADAAADIAABSQAAAEgCADQgDACgDAAg");
	this.shape_64.setTransform(1215.3,224.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#022B18").s().p("AhhBtQgEgBgDgCQgCgCAAgEQAAgEACgDQADgCAEAAIBgAAIBXhZIhZhZIguAvIApApIAbgbQACgDADAAQAFAAABADQADACAAADQAAAEgDACIghAiQgCACgDAAQgEAAgCgCIg2g1QgCgCAAgEQAAgDACgCIA8g8QACgDADABQADgBADADIBmBmQACADAAACQAAAEgCADIhhBhQgDACgDABg");
	this.shape_65.setTransform(1212,203.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#022B18").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIghAgIBBBAQADACAAAEQAAAEgDACIhtBuQgCADgEAAQgDAAgDgDg");
	this.shape_66.setTransform(1209.3,243.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_67.setTransform(1176.2,212.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_68.setTransform(1186.1,225.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_69.setTransform(1193.7,203.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_70.setTransform(1177.5,239.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_71.setTransform(1193.7,191);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#022B18").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIACgCIACgBIABgBIACAAIADABIABABIABABQADACgBADQABAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_72.setTransform(1195.1,216.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#022B18").s().p("AgIAfQAAgDADgDQADgCACAAQAIAAAAAIQAAAKgIgBQgIABAAgKgAgFAGQgDgDAAgDQAAgIAIABQAIgBAAAIQAAAJgIAAQgCAAgDgDgAgIgfQAAgEADgCQADgCACgBQAIAAAAAJQAAAJgIAAQgIAAAAgJg");
	this.shape_73.setTransform(1195.1,223.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgCIAAgBQAAgCADgEQADgCACAAQAEAAACACQADAEgBACIAAABIAAACIgCADQgDADgDgBQgCABgDgDg");
	this.shape_74.setTransform(1195.1,229.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#022B18").s().p("AgFAGQgDgEAAgCIAAgBIABgBIACgEQACgCADAAQAEAAACACQADADgBADQABACgDAEIgBABIgFABQgDAAgCgCg");
	this.shape_75.setTransform(1172.7,217.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#022B18").s().p("AARAAQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_76.setTransform(1177.7,217.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDIAAgBIABgBIACgDQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_77.setTransform(1182.7,217.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_78.setTransform(1185.2,208.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#022B18").s().p("AAJAGQgCgCAAgEQAAgIAIAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgVAGQgCgCAAgEQAAgCACgDQADgDAEAAQADAAADADQADADAAACQAAAEgDACQgDADgDAAQgEAAgDgDg");
	this.shape_79.setTransform(1189.8,208.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_80.setTransform(1194.4,208.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCIgBgBIgCgFIACgEIABgBIADgCIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_81.setTransform(1187.7,236.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#022B18").s().p("AAOAbQgFgGAFgGQADgDADAAQAEAAADADQAFAGgFAGQgDACgEAAQgDAAgDgCgAgFAGQgDgCAAgEQAAgDADgCQAFgGAGAGQAFAFgFAGQgDADgDAAQgDAAgCgDgAgagOQgDgCAAgEQAAgDADgDQACgCAEAAQADAAADACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_82.setTransform(1191.9,240.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQADgEADABIADABIABABIABABQADACgBADQABADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_83.setTransform(1196,244.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#022B18").s().p("AhBAyQgIAAAAgJIAAhSQAAgIAIAAICDAAQAIAAAAAIQAAAJgIAAIh6AAIAABBIAqAAIAAghQAAgDACgCQADgDAEAAQAHAAAAAIIAAApQAAAJgHAAg");
	this.shape_84.setTransform(1181.9,224.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#022B18").s().p("AgBBtQgDgBgDgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgDACgDAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_85.setTransform(1185.2,203.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#022B18").s().p("AARCUIhshtQgDgDAAgDQAAgEADgDIBAg/IggghQgCgCAAgEQAAgDACgDIBAhBQAHgGAGAGIBKBLQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCIhEhFIg0A1IAgAgQACAEAAADQAAADgCADIhBBAIBgBhIApgoIglgmIgWAXQgCACgDAAQgEAAgCgCQgDgDAAgDQAAgEADgDIAbgcQACgCAEAAQAEAAACACIAxAxQADADAAAEQAAADgDADIg0A0QgDADgEAAQgDAAgDgDg");
	this.shape_86.setTransform(1187.9,243.6);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgOAaQgCgCAAgEIAAgnQAAgJAJAAIAQAAQAIAAAAAJQAAADgDADQgCACgDAAIgIAAIAAAfQgBAEgBACQgCADgEAAQgEAAgDgDg");
	this.shape_87.setTransform(1242.7,261.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgCgCAAgEIAAg+QAAgDACgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_88.setTransform(1240.3,259.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAAAUIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_89.setTransform(1248.9,261.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDgBgDQABgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgDACgDAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgmAmQgCADgEgBg");
	this.shape_90.setTransform(1251.4,259.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgFAyQgCgDgBgDIAAhXQAAgIAIAAQAIAAAAAIIAABXQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_91.setTransform(1245.8,259.4);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_92.setTransform(1245.8,270.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_93.setTransform(1243,248.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_94.setTransform(1248.7,248.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_95.setTransform(1245.8,251.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgJAIAAQAEAAACADQADADAAADIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_96.setTransform(1248.9,232.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQADAAADADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCgBgEQABgDACgDQADgDADAAIAbAAQAEAAACADIAmAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_97.setTransform(1251.4,234.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHAdQgEAAgDgCQgCgDAAgEIAAgnQAAgDACgDQADgDAEAAQAEAAACADQABADABADIAAAeIAIAAQADABACACQADADAAADQAAAEgDADQgCACgDAAg");
	this.shape_98.setTransform(1242.7,232.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgFBJIghgiQgCgCAAgEIAAg9QAAgEACgCIAmgnQACgCAEAAIAbAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCADAAQAEAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgDAAgDgDg");
	this.shape_99.setTransform(1240.3,234.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgFAyQgCgCgBgEIAAhXQABgDACgDQACgCADgBQAIAAAAAJIAABXQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_100.setTransform(1245.8,235.1);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_101.setTransform(1245.8,224.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_102.setTransform(1248.7,245.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_103.setTransform(1243,245.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_104.setTransform(1245.8,243.3);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_105.setTransform(1245.8,182);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_106.setTransform(1245.8,189.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABADIAAADIgBADIgCACIgCABIgBABg");
	this.shape_107.setTransform(1245.8,218.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgIBhQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgDACgDAAQgDAAgCgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCgAgFAUQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDgAgFgHQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAQgDAAgCgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_108.setTransform(1245.8,205.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACACIABACIAAABQAAAEgDACIgBABIgDABg");
	this.shape_109.setTransform(1245.8,193.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgNAaQgDgCAAgEIAAgnQAAgEADgCQACgDADAAIAQAAQAJAAAAAJQAAADgCADQgDACgEAAIgIAAIAAAfQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_110.setTransform(1149.6,261.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgDgDAAgDIAAg+QAAgDADgDIAhghQADgDACAAQAEAAADADIAWAWQADADAAAEQAAADgDADIgcAcQgBACgEAAQgEAAgCgCQgCgDAAgDQAAgEACgDIAVgVIgLgLIgXAZIAAA2IAgAhIAYAAQAIAAABAJQAAADgDADQgDADgDgBg");
	this.shape_111.setTransform(1147.2,259.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AACAaQgCgCAAgEIAAgfIgIAAQgDAAgCgCQgDgDAAgDQAAgJAIAAIAQAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_112.setTransform(1155.8,261.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgGgHAGgGIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAAEgCACIgnAmQgBADgEgBg");
	this.shape_113.setTransform(1158.2,259.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_114.setTransform(1152.7,259.4);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_115.setTransform(1152.7,270.1);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_116.setTransform(1149.9,248.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_117.setTransform(1155.5,248.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_118.setTransform(1152.7,251.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AgIAdQgDAAgCgCQgDgDAAgEQAAgDADgDQACgCADgBIAIAAIAAgeQAAgDACgDQACgDAEAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_119.setTransform(1155.8,232.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgGBJIgWgWQgCgDAAgDQAAgEACgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAAEgCACIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_120.setTransform(1158.2,234.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgIAdQgDAAgCgCQgDgDAAgEIAAgnQAAgDADgDQACgDADAAQAIAAAAAJIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_121.setTransform(1149.6,232.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgFBJIghghQgDgDAAgDIAAg9QAAgEADgCIAmgnQACgDAEAAIAbAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAIgYAAIggAhIAAA2IAXAZIALgKIgVgWQgCgCAAgEQAAgEACgCQACgDAEAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgDADgEAAQgCAAgDgDg");
	this.shape_122.setTransform(1147.2,234.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_123.setTransform(1152.7,235.1);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_124.setTransform(1152.7,224.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_125.setTransform(1155.5,245.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_126.setTransform(1149.9,245.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_127.setTransform(1152.7,243.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AgzAuIAzhbIA1Bbg");
	this.shape_128.setTransform(1152.7,182);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_129.setTransform(1152.7,189.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AAAAJQgCAAgDgDQgDgCABgEQgBgCADgDQADgDACAAIAEACIADACIABACIABABIAAADIgBABIgCADIgDACIgBABg");
	this.shape_130.setTransform(1152.7,218.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("AgHBhQAAgIAHAAQADAAADACQADADAAADQAAAJgJAAQgHAAAAgJgAgHBGQAAgJAHAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgHAAAAgIgAgHAqQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgHAAAAgIgAgHAOQAAgJAHAAQADAAADADQADACAAAEQAAADgDADQgDADgDAAQgHAAAAgJgAgHgNQAAgJAHAAQADAAADADQADADAAADQAAAEgDACQgDADgDAAQgHAAAAgJgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgHhFQAAgIAHAAQADAAADACQADADAAADQAAAEgDADQgDACgDAAQgHAAAAgJgAgHhgQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgHAAAAgIg");
	this.shape_131.setTransform(1152.7,205.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_132.setTransform(1152.7,193.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_133.setTransform(1221.6,212.1);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_134.setTransform(1211.8,225.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_135.setTransform(1204.1,203.4);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_136.setTransform(1220.3,239.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_137.setTransform(1204.1,191);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCIABgBIACgBIABAAQADgBAEADIABABIABACIAAACIAAACIAAACIgBABIgBABQgDADgDAAQgDAAgCgDg");
	this.shape_138.setTransform(1202.8,216.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AgIAfQAAgIAIAAQADAAADACQADADgBADQABAEgDADQgDADgDgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQABADgDADQgDADgDAAQgIAAAAgJgAgIgfQAAgJAIAAQADABADACQADACgBAEQABAEgDADQgDACgDAAQgIAAAAgJg");
	this.shape_139.setTransform(1202.8,223.1);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgDgCAAgEQAAgDADgCQADgDAEABIADABIABABQADADgBACIAAACIAAABIgCADIgDACIgBABg");
	this.shape_140.setTransform(1202.8,229.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgCIABgBIACgBIABgBQADgBAEAEQADACgBADQABADgDADQgDADgDAAg");
	this.shape_141.setTransform(1225.2,217.6);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AATAGQgDgCAAgEQAAgDADgCQADgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgDAAgDgDgAgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAIAAAAAIQAAAJgIAAQgDAAgCgDgAghAAQAAgIAJAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgJAAAAgJg");
	this.shape_142.setTransform(1220.2,217.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_143.setTransform(1215.1,217.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_144.setTransform(1212.7,208.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_145.setTransform(1208.1,208.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_146.setTransform(1203.5,208.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAAAJIgCgBIgDgCIgBgBIgBgCIgBgCIAAgBIABgCIABgCIABgBIADgCIACgBIACAAIABABIACABIABABIACABIAAAEIAAABIAAAEIgCABIgBABIgCABIgBABg");
	this.shape_147.setTransform(1210.2,236.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgaAbQgFgGAFgGQADgDAEAAQADAAACADQAHAGgHAGQgCACgDAAQgFAAgCgCgAgFAGQgGgGAGgFQAFgGAHAGQAFAFgFAGQgEADgDAAQgBAAgEgDgAAPgOQgDgCAAgEQAAgDADgDQACgCAEAAQADAAADACQADADgBADQABAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_148.setTransform(1206,240.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACgBADQABACgDAEQgDADgDgBQgDABgCgDg");
	this.shape_149.setTransform(1201.9,244.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AAHAyQgIAAAAgJIAAgpQAAgIAIAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh5AAQgJAAAAgJQAAgDACgDQADgCAEAAICCAAQAIAAAAAIIAABSQAAAJgIAAg");
	this.shape_150.setTransform(1216,224.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AhiBtQgIAAAAgJQAAgJAIAAIBhAAIBYhZIhahZIgvAvIApApIAbgbQADgDAEAAQADAAADADQACACAAADQAAAEgCACIgiAiQgCACgEAAQgDAAgDgCIg1g1QgCgCAAgEQAAgDACgCIA7g8QADgDADABQADgBACADIBnBmQACADAAACQAAAEgCADIhhBhQgEACgDABg");
	this.shape_151.setTransform(1212.7,203.5);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgCAAgDgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIggAgIBABAQADACAAAEQAAAEgDACIhsBuQgDADgEAAQgDAAgDgDg");
	this.shape_152.setTransform(1209.9,243.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_153.setTransform(1176.9,212.1);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_154.setTransform(1186.7,225.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_155.setTransform(1194.4,203.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_156.setTransform(1178.2,239.4);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_157.setTransform(1194.4,191);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgFAGIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIADgCIABgBIADAAIACABIABABIABABQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_158.setTransform(1195.7,216.7);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AgFAmQgCgDAAgEQAAgDACgDQACgCADAAQAIAAAAAIQAAAKgIgBQgDABgCgDgAgFAGQgCgDAAgDQgBgIAIABQAIgBAAAIQAAADgCADQgDADgDAAQgDAAgCgDgAgFgYQgCgDAAgEQAAgEACgCQACgCADgBQAIAAAAAJQAAAJgIAAQgDAAgCgCg");
	this.shape_159.setTransform(1195.7,223.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AgFAGIgCgDIAAgCIAAgBQAAgCACgEQACgCADAAQAEAAACACQACADAAADIAAABIAAACIgCADQgDADgDgBQgDABgCgDg");
	this.shape_160.setTransform(1195.7,229.4);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AgFAGQgCgEAAgCIAAgBIAAgBIACgEQADgCACAAQAEAAACACQACACAAAEQAAADgCADIgBABIgFABQgCAAgDgCg");
	this.shape_161.setTransform(1173.3,217.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgHAAQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgHAAAAgJgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_162.setTransform(1178.3,217.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AgFAGQgDgDAAgDIACgEIABgBQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgCAAgDgDg");
	this.shape_163.setTransform(1183.4,217.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_164.setTransform(1185.8,208.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_165.setTransform(1190.4,208.9);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_166.setTransform(1195,208.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgBAJIgBgBIgCgBIgBgBIgBgBIgCgFIACgEIABgBIABgBIACgBIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_167.setTransform(1188.3,236.1);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAPAbQgHgGAHgGQACgDADAAQAEAAADADQAFAGgFAGQgCACgFAAQgDAAgCgCgAgGAGQgCgCAAgEQAAgDACgCQAGgGAGAGQAFAFgFAGQgEADgCAAQgCAAgEgDgAgagOQgDgCABgEQgBgDADgDQADgCADAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgDAAgDgDg");
	this.shape_168.setTransform(1192.5,240.2);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQAEgEADABIACABIABABIABABQACACAAADQAAAEgCACIgBABIgFACQgCAAgDgDg");
	this.shape_169.setTransform(1196.6,244.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AhBAyQgIAAAAgJIAAhSQAAgIAIAAICCAAQAEAAADACQACADAAADQAAAJgJAAIh5AAIAABBIAqAAIAAghQAAgDACgCQADgDADAAQAEAAACADQACACAAADIAAApQAAAJgIAAg");
	this.shape_170.setTransform(1182.5,224.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAABtQgDgBgEgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgCACgEAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAEgCACQgDACgDABg");
	this.shape_171.setTransform(1185.8,203.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AARCUIhshuQgDgCAAgEQAAgEADgCIBAhAIggggQgCgDAAgDQAAgEACgCIBBhCQACgCAEAAQADAAADACIBKBLQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDIhEhEIg0A1IAgAgQACADAAADQAAAEgCACIhBBAIBhBiIAogpIglglIgWAWQgFAGgGgGQgDgCAAgEQAAgEADgCIAbgcQACgDAEAAQAEAAACADIAxAxQADACAAAEQAAAEgDACIg0A1QgDADgDAAQgEAAgDgDg");
	this.shape_172.setTransform(1188.6,243.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#245B4E").s().p("AhuAaQgLAAgIgHQgHgIAAgLQAAgKAHgHQAIgIALAAIDcAAQAMAAAHAIQAIAHAAAKQAAALgIAIQgHAHgMAAg");
	this.shape_173.setTransform(1280.1,112.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#245B4E").s().p("AhvAuQgTAAgNgOQgOgNAAgTQAAgRAOgOQANgNATAAIDfAAQATAAANANQAOAOAAARQAAATgOANQgNAOgTAAg");
	this.shape_174.setTransform(1295.2,95.3);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#003944").s().p("AigAmQgFAAgDgDQgDgDAAgEIAAg3QAAgEADgDQADgDAFAAIFCAAQADAAAEADQADADAAAEIAAA3QAAAEgDADQgEADgDAAg");
	this.shape_175.setTransform(1237,99.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#003944").s().p("AgqAgQgNAAgKgJQgJgKAAgNQAAgMAJgKQAKgJANAAIBVAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAg");
	this.shape_176.setTransform(1154.7,106.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#245B4E").s().p("Ai7AnQgRAAgMgLQgLgMAAgQQAAgPALgMQAMgLARAAIF3AAQARAAAMALQALAMAAAPQAAAQgLAMQgMALgRAAg");
	this.shape_177.setTransform(1101.2,103.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#003944").s().p("AiBAkQgPAAgKgKQgLgLAAgPQAAgOALgLQAKgKAPAAIEDAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAg");
	this.shape_178.setTransform(1148.8,92.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#003944").s().p("AhxAVQgIAAgHgGQgGgHAAgIQAAgIAGgGQAHgGAIAAIDjAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAg");
	this.shape_179.setTransform(1189.7,99.7);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_180.setTransform(1115.6,132.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_181.setTransform(1121.1,138.2);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_182.setTransform(1126.7,132.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_183.setTransform(1121.1,127.1);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_184.setTransform(1141.7,132.6);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_185.setTransform(1147.2,138.2);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_186.setTransform(1152.7,132.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_187.setTransform(1147.2,127.1);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_188.setTransform(1167.7,132.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_189.setTransform(1173.2,138.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_190.setTransform(1178.7,132.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_191.setTransform(1173.2,127.1);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_192.setTransform(1193.7,132.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_193.setTransform(1199.3,138.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_194.setTransform(1204.8,132.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_195.setTransform(1199.3,127.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_196.setTransform(1219.8,132.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_197.setTransform(1225.3,138.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_198.setTransform(1230.8,132.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_199.setTransform(1225.3,127.1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_200.setTransform(1245.8,132.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_201.setTransform(1251.3,138.2);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_202.setTransform(1256.9,132.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_203.setTransform(1251.3,127.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_204.setTransform(1271.9,132.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_205.setTransform(1277.4,138.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_206.setTransform(1282.9,132.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_207.setTransform(1277.4,127.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#00070B").s().p("AhMBXQggAAgYgYQgXgXAAggIAAgPQAAghAXgXQAYgXAgAAIDoAAIAACtg");
	this.shape_208.setTransform(1248.7,232.9);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#00070B").s().p("Ai/BgQggAAgXgXQgXgYAAggIAAghQAAggAXgYQAXgXAgAAIHJAAIAEABIAAC+g");
	this.shape_209.setTransform(1237.3,261.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#00070B").s().p("AhMCNQggAAgYgXQgXgXAAghIAAh7QAAggAXgYQAYgXAgAAIDoAAIAAEZg");
	this.shape_210.setTransform(1248.7,308.2);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#00070B").s().p("AibBXIAAisIDoAAQAhAAAXAWQAXAYAAAhIAAANQAAAhgXAXQgXAXghABg");
	this.shape_211.setTransform(1149.8,273.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#00070B").s().p("AkJBgIgEgBIAAi+IHMAAQAhAAAXAXQAXAYAAAgIAAAhQAAAggXAYQgXAXghAAg");
	this.shape_212.setTransform(1161.2,244.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#00070B").s().p("AibCNIAAkZIDoAAQAhAAAXAXQAXAYAAAgIAAB7QAAAhgXAXQgXAXghAAg");
	this.shape_213.setTransform(1149.8,198);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#00070B").s().p("AlJBhIAAjBIJEAAQAhAAAXAYQAXAXAAAhIAAAiQAAAggXAYQgXAXghAAg");
	this.shape_214.setTransform(1167.2,174.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#010C06").s().p("EgKJAs6MAAAhZzIUTAAMAAABZzg");
	this.shape_215.setTransform(1199.3,451.9);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#073D33").s().p("AymBvQgJAAgGgGQgHgHAAgIIAAiyQAAgJAHgGQAGgHAJAAMAlNAAAQAJAAAGAHQAHAGAAAJIAACyQAAAIgHAHQgGAGgJAAg");
	this.shape_216.setTransform(1199.3,101.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#01160C").s().p("AtEA9IAAh5IaJAAIAAB5g");
	this.shape_217.setTransform(1199.3,158.5);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#022B18").s().p("AuwDGIAAmLIdhAAIAAGLg");
	this.shape_218.setTransform(1199.3,132.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AgEAAQAAgFAFAAQADAAABADIgFAIQgEgBAAgFg");
	this.shape_219.setTransform(1105.5,25.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#170700").s().p("AgCAUQgJgCgEgRQgCgKAAgCQABgGAKgBIADAAIACgBQASAAABAKIAAABQAAAGgEAHIgGAJQgEAGgEAAg");
	this.shape_220.setTransform(1104.6,24.3);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#351100").s().p("AgZAuQgVgRgGgZQgCgHAAgLQAAgKACgHIAAgDQAFgOAIgLIAFgBIANgBQAcAAAXATQAZAXAAAiIAAAIQgCATgMASQgJACgKAAQgZAAgWgQg");
	this.shape_221.setTransform(1109.7,25.9);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#170700").s().p("AghgTQALgQAUAAQAPgBAKALQALAMAAAOQAAANgHAKQgIAJgLADQgHgkgigTg");
	this.shape_222.setTransform(1120.9,11.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#351100").s().p("AgDBRQADgKAAgLQAAgIgCgHQgHgmgjgSQgQgIgTgBQAHgaAWgRQAWgRAcAAQAgAAAYAYQAYAXAAAhQAAAhgYAYQgYAYggAAg");
	this.shape_223.setTransform(1122,10.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#351100").s().p("AAhAbQgEgFgFgDQgPgLgTgFIgQgBIgMAAQADgKAKgKQAEgEAGgDQALgHALADQARADAJARQAJAPgEAUIgCAFg");
	this.shape_224.setTransform(1108.3,10.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_225.setTransform(1106.3,12.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AgWAYQgEgEgCgEQgEgHAAgJQAAgLAIgKIAIgHQAJgEAHAAQAMAAAKAIQAJAIACAMIAAAGQgBANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_226.setTransform(1107.5,13);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#351100").s().p("AgrBOQgVgQgGgZQgJgCgEgRQgDgLABgCQABgFAKgBIACAAIACgBQAEgOAIgLIAEgEQgHgUgBgVQgEgDgCgFIAGgDIABgBQAKgEAQgEIAUgCIAVACQAQAEAOAIQATAMANATQANASAEAXIACAQQAAAPgFARQgFAMgGAKIgEAAQgRAZgcAGQgIACgKAAQgaAAgVgRg");
	this.shape_227.setTransform(1111.5,22.6);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#351100").s().p("AihCjQhEhEAAhfQAAheBEhDQBDhEBeAAQBfAABDBEQBDBDAABeQAABfhDBEQhDBChfAAQheAAhDhCg");
	this.shape_228.setTransform(1152.9,63.5);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#1E0900").s().p("AgvA8QgVgQgGgZQgCgJAAgKQAAgJACgIIAAgDQAFgOAIgLIADgEQAXgbAjAAQASAAAOAHQAgAPAKAiQADALAAAJQAAAKgDALQgDAMgIALQgRAZgbAGQgJACgKAAQgZAAgWgRg");
	this.shape_229.setTransform(1111.9,24.4);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#351100").s().p("AgSBLIgMgBQgKgBgLgGIgEgCIACAAIACgBQAEgOAJgLIADgFQgGgTgCgUQgEgEgCgEQgEgHAAgJQAAgMAIgKIgGABQAEgMAKgJIAHgCIAMgBQAUAAATALQAcASAGAgIABANIgBAOQgFAZgTASQgUAQgXACg");
	this.shape_230.setTransform(1109.6,15.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#351100").s().p("AjaA8QgQAAgMgMQgLgLAAgQQAAghAYgXQAYgYAhAAIF2AAQAZAAASARQARATAAAXQAAAZgRASQgSARgZAAg");
	this.shape_231.setTransform(1144.8,86.5);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#1E0900").s().p("AjhF7QA8hDAXgqQAhg9AAhJQAAhAgcg1QgSgkgtgzQg3hAgRgZQgmg3gPg+QBHhPAcgTQAxghBVAAQCsAAB7B7QB7B7AACsQAACrh8BwQh5BuiwAAQgsAAhWgbg");
	this.shape_232.setTransform(1156.9,51.9);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#351100").s().p("AkqAdQgKgKAAgOQAAgNAKgKQAJgKAOAAIImgJQAOAAAKAKQAKAKAAAOQAAANgKAKQgJAKgOAAIomAIQgOAAgKgJg");
	this.shape_233.setTransform(1193.2,83.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#351100").s().p("AhXFiQgOAAgKgJQgJgKgBgOQgBgOAKgKQAJgKAOgBQBDgCA7gaQA7gZAsgtQAtguAXg6QAWg7gChAQgEhqhOhIQhOhIhpAEQhSADg3A8Qg4A8ADBSQADA+AtArQAuAqA/gCQAwgCAfgjQAggigCgvQgBgjgagYQgYgYgkACQgZABgRASQgRATABAZQAAAOgJAKQgKALgOAAQgOABgKgKQgKgJgBgPQgCg1AkgnQAlgnA1gCQA+gCAuAqQAvAsACA/QADBKgzA3Qg0A4hKADQgsABgpgPQgpgPgggeQgggegSgnQgSgmgCgsQgEhuBLhRQBLhRBugEQCFgFBiBbQBjBbAFCGQADBOgcBIQgbBIg3A3Qg2A3hHAeQhGAfhQADg");
	this.shape_234.setTransform(1229.6,51.5);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#1E0900").s().p("AgJCQIgEAAQgRgCgNgFQgqgNgbgiQgOgSgHgTIgCgEQgHgTgBgVIAAgMQAAgMADgPIADgNIAJgVQASgkAigVQAjgWApAAQA5AAAqAnQApAnAEA5IAAAIQAAAygeAmQgdAmgvANQgRAFgVAAg");
	this.shape_235.setTransform(1119.6,14.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000201").s().p("AqKAgIAAg/IUVAAIAAA/g");
	this.shape_236.setTransform(121.3,167.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#022B18").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgCADQgDACgEAAIgIAAIAAAfQAAAEgBACQgDADgDAAQgDAAgDgDg");
	this.shape_237.setTransform(164.1,261.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#022B18").s().p("AAGBLQgDABgDgDIgmgmQgDgDAAgDIAAg+QAAgDADgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgDAAQgEAAgDgCQgFgHAFgGIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAJAAAAAJQAAADgDADQgDADgDgBg");
	this.shape_238.setTransform(161.7,259.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_239.setTransform(170.3,261.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#022B18").s().p("AgfBLQgEABgDgDQgDgDABgDQgBgJAKAAIAWAAIAhghIAAg2IgYgZIgKALIAVAVQAGAGgGAHQgGAFgGgFIgbgcQgDgDABgDQgBgEADgDIAWgWQACgDAEAAQADAAADADIAhAhQACADAAADIAAA+QAAADgCADIgnAmQgCADgDgBg");
	this.shape_240.setTransform(172.8,259.7);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#022B18").s().p("AgFAyQgDgDABgDIAAhXQAAgIAHAAQAJAAAAAIIAABXQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_241.setTransform(167.2,259.4);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_242.setTransform(167.2,270.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_243.setTransform(164.4,248.7);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_244.setTransform(170,248.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_245.setTransform(167.2,251.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_246.setTransform(170.3,232.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#022B18").s().p("AgGBJIgWgXQgDgCABgEQgBgDADgDIAbgcQACgCAEAAQAEAAACACQACADABADQgBAEgCACIgVAWIAKAKIAYgYIAAg2IghgiIgWAAQgEAAgDgCQgDgDABgDQgBgEADgDQADgCAEAAIAaAAQADAAACACIAnAnQACADAAADIAAA9QAAAEgCACIghAiQgDADgDAAQgDAAgDgDg");
	this.shape_247.setTransform(172.8,234.8);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQABADAAADIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_248.setTransform(164.1,232.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#022B18").s().p("AgFBJIghgiQgDgCAAgEIAAg9QAAgDADgDIAmgnQADgCADAAIAbAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCAEAAQADAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgCAAgEgDg");
	this.shape_249.setTransform(161.7,234.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#022B18").s().p("AgFAyQgDgCABgEIAAhXQgBgDADgDQADgCACgBQAJAAAAAJIAABXQAAAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_250.setTransform(167.2,235.1);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_251.setTransform(167.2,224.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_252.setTransform(170,245.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_253.setTransform(164.4,245.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_254.setTransform(167.2,243.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#022B18").s().p("AgzAuIAzhbIA1Bbg");
	this.shape_255.setTransform(167.2,182);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_256.setTransform(167.2,189.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCABgEQgBgCADgDQADgDACAAIAFACIABABIABABIABACIABABIAAADIgBABIgCADIgBABIgCABIgBABg");
	this.shape_257.setTransform(167.2,218.2);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#022B18").s().p("AgHBhQgBgDADgDQADgCACAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFBMQgDgDABgDQgBgEADgDQADgCACAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCgAgFAwQgDgDABgDQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCgAgFAUQgDgDABgDQgBgEADgCQADgDACAAQAJAAAAAJQAAAJgJAAQgCAAgDgDgAgFgHQgDgCABgEQgBgDADgDQADgDACAAQAJAAAAAJQAAAEgDACQgDADgDAAQgCAAgDgDgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFg+QgDgDABgEQgBgDADgDQADgCACAAQAJAAAAAIQAAAJgJAAQgCAAgDgCgAgFhaQgDgDABgDQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_258.setTransform(167.2,205.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_259.setTransform(167.2,193.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#022B18").s().p("AgQAUIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgIAAIAAAfQAAAJgHAAQgJAAAAgJg");
	this.shape_260.setTransform(71,261.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQAEAAACADIAWAWQADADAAAEQAAADgDADIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_261.setTransform(68.5,259.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAJgJAAQgDAAgDgDg");
	this.shape_262.setTransform(77.2,261.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#022B18").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgnAmQgBADgEgBg");
	this.shape_263.setTransform(79.6,259.7);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#022B18").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_264.setTransform(74.1,259.4);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_265.setTransform(74.1,270.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_266.setTransform(71.3,248.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_267.setTransform(76.9,248.7);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_268.setTransform(74.1,251.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#022B18").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgDACgDQADgDADAAQAJAAAAAJIAAAnQAAAJgJAAg");
	this.shape_269.setTransform(77.2,232.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#022B18").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_270.setTransform(79.6,234.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#022B18").s().p("AgHAdQgJAAAAgJIAAgnQAAgJAJAAQAHAAAAAJIAAAeIAIAAQAJAAAAAJQAAAEgDADQgCACgEAAg");
	this.shape_271.setTransform(71,232.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#022B18").s().p("AgEBJIgighQgCgDAAgDIAAg9QAAgEACgCIAmgnQACgDAEAAIAbAAQAIAAAAAJQAAAEgCACQgDADgDAAIgYAAIggAhIAAA2IAYAZIAKgKIgVgWQgCgCAAgEQAAgEACgCQADgDADAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgCADgEAAQgDAAgCgDg");
	this.shape_272.setTransform(68.5,234.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#022B18").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_273.setTransform(74.1,235.1);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_274.setTransform(74.1,224.3);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_275.setTransform(76.9,245.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_276.setTransform(71.3,245.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_277.setTransform(74.1,243.3);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#022B18").s().p("Ag0AuIA0hbIA0Bbg");
	this.shape_278.setTransform(74.1,182);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_279.setTransform(74.1,189.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDACAAIAFACIACACIABACIAAABIAAADIAAABIgCADIgDACIgCABg");
	this.shape_280.setTransform(74.1,218.2);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#022B18").s().p("AgIBhQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCgAgFAUQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgCAAgDgDgAgFgHQgDgCAAgEQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_281.setTransform(74.1,205.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_282.setTransform(74.1,193.2);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_283.setTransform(143,212.1);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_284.setTransform(133.1,225.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_285.setTransform(125.5,203.4);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_286.setTransform(141.7,239.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_287.setTransform(125.5,191);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDIADgCIABAAQAEgBADADIABABIABACIABACIAAACIgBACIgBABIgBABQgCADgEAAQgCAAgDgDg");
	this.shape_288.setTransform(124.2,216.7);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#022B18").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCADgEgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAJgBAAAIQAAADgDADQgCADgEAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAEABACACQADACAAAEQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_289.setTransform(124.2,223.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDAEABIADABIABABQADADAAACIAAACIgBABIgCADIgDACIgBABg");
	this.shape_290.setTransform(124.2,229.4);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#022B18").s().p("AgEAHIgBgBQgDgDAAgDQAAgDADgCIADgCIABgBQAEgBADAEQADACAAADQAAADgDADQgCADgEAAg");
	this.shape_291.setTransform(146.6,217.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#022B18").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDgAgHAAQgBgDADgCQADgDACAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgfAGQgCgCAAgEQAAgDACgCQADgDAEAAQAEAAACADQACACABADQgBADgCADQgCADgEAAQgEAAgDgDg");
	this.shape_292.setTransform(141.6,217.6);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_293.setTransform(136.5,217.6);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBIADAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_294.setTransform(134.1,208.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#022B18").s().p("AAHAAQAAgIAIAAQAJAAAAAIQAAAEgCACQgDADgEAAQgIAAAAgJgAgUAGQgDgCAAgEQAAgCADgDQADgDADAAQADAAADADQADADAAACQAAAEgDACQgDADgDAAQgDAAgDgDg");
	this.shape_295.setTransform(129.5,208.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_296.setTransform(124.9,208.9);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#022B18").s().p("AgBAJIgCgBIgBgBIgBgBIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIABgBIABgBIACgBIADAAIABABIACABIACACIABACIABACIAAABIgBACIgBACIgCACIgCABIgBABg");
	this.shape_297.setTransform(131.6,236.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#022B18").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAACADQAFAGgFAGQgCACgFAAQgDAAgCgCgAgFAGQgCgCAAgEQAAgDACgCQAGgGAFAGQAGAFgGAGQgDADgDAAQgBAAgEgDgAAPgOQgDgCABgEQgBgDADgDQADgCADAAQAEAAACACQACADABADQgBAEgCACQgCADgEAAQgDAAgDgDg");
	this.shape_298.setTransform(127.4,240.2);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_299.setTransform(123.3,244.3);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#022B18").s().p("AAHAyQgEAAgDgCQgBgDAAgEIAAgpQAAgDABgCQADgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh6AAQgIAAAAgJQAAgDACgDQADgCADAAICDAAQADAAADACQACADAAADIAABSQAAAEgCADQgDACgDAAg");
	this.shape_300.setTransform(137.4,224.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#022B18").s().p("AhiBtQgDgBgDgCQgDgCAAgEQAAgEADgDQADgCADAAIBhAAIBXhZIhZhZIguAvIAoApIAbgbQADgDADAAQAEAAADADQACACAAADQAAAEgCACIgiAiQgBACgFAAQgDAAgCgCIg2g1QgDgCAAgEQAAgDADgCIA7g8QADgDADABQADgBADADIBmBmQACADAAACQAAAEgCADIhhBhQgDACgDABg");
	this.shape_301.setTransform(134.1,203.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#022B18").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgGAGgFgGIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIghAgIBBBAQADACAAAEQAAAEgDACIhtBuQgCADgEAAQgDAAgDgDg");
	this.shape_302.setTransform(131.3,243.6);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_303.setTransform(98.3,212.1);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_304.setTransform(108.1,225.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_305.setTransform(115.8,203.4);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_306.setTransform(99.6,239.4);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_307.setTransform(115.8,191);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#022B18").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIACgCIACgBIACgBIABAAIACABIACABIABABQACACAAADQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_308.setTransform(117.1,216.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#022B18").s().p("AgIAfQAAgIAIAAQAIAAAAAIQAAAKgIgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQAAAJgIAAQgIAAAAgJgAgIgfQAAgJAIAAQAIAAAAAJQAAAJgIAAQgIAAAAgJg");
	this.shape_309.setTransform(117.1,223.1);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgCIAAgBQABgCACgEQACgCADAAQAEAAACACQACAEAAACIAAABIAAACIgCADQgCADgEgBQgDABgCgDg");
	this.shape_310.setTransform(117.1,229.4);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#022B18").s().p("AgFAGQgCgEgBgCIAAgBIABgBIACgEQACgCADAAQAEAAACACQADADgBADQABACgDAEIgBABIgFABQgDAAgCgCg");
	this.shape_311.setTransform(94.7,217.6);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#022B18").s().p("AARAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_312.setTransform(99.7,217.6);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDIAAgBIABgBIACgDQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_313.setTransform(104.8,217.6);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_314.setTransform(107.2,208.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#022B18").s().p("AAJAGQgCgCAAgEQAAgIAJAAQAIAAAAAIQAAAJgIAAQgEAAgDgDgAgUAGQgDgCAAgEQAAgCADgDQADgDADAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_315.setTransform(111.8,208.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_316.setTransform(116.4,208.9);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCIgBgBIgCgFIACgEIABgBIADgCIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_317.setTransform(109.7,236.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#022B18").s().p("AAOAbQgFgGAFgGQACgDAFAAQADAAACADQAHAGgHAGQgCACgDAAQgFAAgCgCgAgFAGQgDgCAAgEQAAgDADgCQAFgGAGAGQAFAFgFAGQgEADgCAAQgDAAgCgDgAgagOQgCgCgBgEQABgDACgDQACgCAEAAQADAAADACQADADgBADQABAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_318.setTransform(113.9,240.2);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgBIAAgCQABgDACgCQADgEADABIACABIACABIABABQACACABADQgBADgCADIgBABIgFACQgDAAgCgDg");
	this.shape_319.setTransform(118,244.3);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#022B18").s().p("AhBAyQgIAAAAgJIAAhSQAAgDACgDQADgCADAAICDAAQAIAAAAAIQAAAJgIAAIh6AAIAABBIAqAAIAAghQAAgDACgCQADgDAEAAQAHAAAAAIIAAApQAAAJgHAAg");
	this.shape_320.setTransform(103.9,224.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#022B18").s().p("AgBBtQgDgBgDgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgDACgDAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_321.setTransform(107.2,203.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#022B18").s().p("AARCUIhshtQgDgDAAgDQAAgEADgDIBAg/IggghQgCgCAAgEQAAgDACgDIBAhBQAHgGAGAGIBKBLQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCIhEhFIg0A1IAgAgQACAEAAADQAAADgCADIhBBAIBgBhIApgoIglgmIgWAXQgFAFgGgFQgDgDAAgDQAAgEADgDIAbgcQACgCAEAAQAEAAACACIAxAxQADADAAAEQAAADgDADIg0A0QgDADgEAAQgDAAgDgDg");
	this.shape_322.setTransform(110,243.6);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgHAAIAAAfQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_323.setTransform(164.8,261.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgCgCAAgEIAAg+QAAgDACgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_324.setTransform(162.3,259.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AAAAUIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_325.setTransform(171,261.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDgBgDQAAgJAJAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQADADgBAEQABADgDADQgGAFgGgFIgbgcQgCgDgBgDQABgEACgDIAXgWQACgDADAAQADAAACADIAiAhQADADgBADIAAA+QABADgDADIgmAmQgCADgDgBg");
	this.shape_326.setTransform(173.4,259.7);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFAyQgCgDgBgDIAAhXQABgIAHAAQAJAAAAAIIAABXQAAAIgJAAQgDAAgCgCg");
	this.shape_327.setTransform(167.9,259.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_328.setTransform(167.9,270.1);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_329.setTransform(165,248.7);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_330.setTransform(170.7,248.7);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_331.setTransform(167.9,251.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgJAIAAQAEAAACADQADADAAADIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_332.setTransform(171,232.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgFBJIgXgWQgCgDgBgDQABgEACgCIAbgcQACgDAEAAQADAAADADQADACgBAEQABAEgDACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCgBgEQABgDACgDQADgDADAAIAcAAQADAAACADIAmAnQADACgBAEIAAA9QABADgDADIgiAhQgCADgDAAQgDAAgCgDg");
	this.shape_333.setTransform(173.4,234.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQACADAAADIAAAeIAHAAQAEABACACQADADAAADQAAAEgDADQgCACgEAAg");
	this.shape_334.setTransform(164.8,232.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgFBJIghgiQgCgCAAgEIAAg9QAAgEACgCIAmgnQACgCAEAAIAbAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCADAAQAEAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgDAAgDgDg");
	this.shape_335.setTransform(162.3,234.8);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgFAyQgCgCgBgEIAAhXQABgDACgDQACgCADgBQAJAAAAAJIAABXQAAAJgJAAQgDgBgCgCg");
	this.shape_336.setTransform(167.9,235.1);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_337.setTransform(167.9,224.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_338.setTransform(170.7,245.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_339.setTransform(165,245.8);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_340.setTransform(167.9,243.3);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_341.setTransform(167.9,182);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_342.setTransform(167.9,189.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABADIAAADIgBADIgCACIgCABIgBABg");
	this.shape_343.setTransform(167.9,218.2);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AgIBhQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgDACgDAAQgDAAgCgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCgAgFAUQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDgAgFgHQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAQgDAAgCgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_344.setTransform(167.9,205.7);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACACIABACIAAABQAAAEgDACIgBABIgDABg");
	this.shape_345.setTransform(167.8,193.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AgOAaQgCgCAAgEIAAgnQAAgJAIAAIAQAAQAJAAAAAJQAAADgCADQgEACgDAAIgIAAIAAAfQAAAJgIAAQgDAAgDgDg");
	this.shape_346.setTransform(71.7,261.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAFBLQgDABgCgDIgmgmQgCgDgBgDIAAg+QABgDACgDIAhghQADgDADAAQADAAADADIAWAWQACADAAAEQAAADgCADIgcAcQgEAFgHgFQgDgDAAgDQAAgEADgDIAVgVIgKgLIgYAZIAAA2IAhAhIAWAAQAJAAAAAJQAAADgCADQgDADgEgBg");
	this.shape_347.setTransform(69.2,259.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AACAaQgCgCAAgEIAAgfIgIAAQgDAAgDgCQgCgDAAgDQAAgJAIAAIAQAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_348.setTransform(77.9,261.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgGAFgFgFIgcgcQgGgHAGgGIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAAEgCACIgnAmQgBADgEgBg");
	this.shape_349.setTransform(80.3,259.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_350.setTransform(74.7,259.4);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_351.setTransform(74.7,270.1);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_352.setTransform(71.9,248.7);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_353.setTransform(77.6,248.7);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_354.setTransform(74.8,251.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgIAdQgDAAgDgCQgCgDAAgEQAAgDACgDQADgCADgBIAIAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_355.setTransform(77.9,232.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgGBJIgWgWQgCgDAAgDQAAgEACgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAAEgCACIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_356.setTransform(80.3,234.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgIAdQgDAAgDgCQgCgDAAgEIAAgnQAAgDACgDQADgDADAAQAIAAAAAJIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgEACgDAAg");
	this.shape_357.setTransform(71.7,232.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgFBJIghghQgCgDgBgDIAAg9QABgEACgCIAmgnQACgDADAAIAbAAQAEAAADADQACADAAADQAAAEgCACQgDADgEAAIgWAAIghAhIAAA2IAYAZIAKgKIgVgWQgDgCAAgEQAAgEADgCQADgDADAAQAEAAABADIAcAcQACACAAAEQAAADgCADIgWAWQgDADgDAAQgDAAgDgDg");
	this.shape_358.setTransform(69.2,234.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_359.setTransform(74.7,235.1);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_360.setTransform(74.7,224.3);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_361.setTransform(77.6,245.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_362.setTransform(71.9,245.8);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_363.setTransform(74.8,243.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgzAuIAzhbIA0Bbg");
	this.shape_364.setTransform(74.8,182);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_365.setTransform(74.8,189.4);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAAAJQgCAAgDgDQgCgCAAgEQAAgCACgDQADgDACAAIAFACIACACIABACIAAABIAAADIAAABIgCADIgDACIgBABg");
	this.shape_366.setTransform(74.8,218.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AgHBhQgBgIAIAAQADAAADACQACADAAADQABAJgJAAQgIAAABgJgAgHBGQgBgJAIAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgIAAABgIgAgHAqQgBgJAIAAQAJAAgBAJQAAADgCADQgDACgDAAQgIAAABgIgAgHAOQgBgJAIAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgIAAABgJgAgHgNQgBgJAIAAQADAAADADQACADAAADQAAAEgCACQgDADgDAAQgIAAABgJgAgHgpQgBgIAIAAQAJAAgBAIQABAJgJAAQgIAAABgJgAgHhFQgBgIAIAAQADAAADACQACADAAADQAAAEgCADQgDACgDAAQgIAAABgJgAgHhgQgBgJAIAAQAJAAgBAJQAAADgCADQgDACgDAAQgIAAABgIg");
	this.shape_367.setTransform(74.8,205.7);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_368.setTransform(74.7,193.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_369.setTransform(143.7,212.1);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_370.setTransform(133.8,225.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_371.setTransform(126.2,203.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_372.setTransform(142.4,239.4);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_373.setTransform(126.2,191);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQABgDACgCIABgBIACgBIABAAQAEgBADADIABABIABACIAAACIAAACIAAACIgBABIgBABQgDADgDAAQgDAAgCgDg");
	this.shape_374.setTransform(124.9,216.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AgIAfQABgDACgDQACgCADAAQADAAADACQADADgBADQABAEgDADQgDADgDgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQABADgDADQgDADgDAAQgIAAAAgJgAgIgfQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDADQgDACgDAAQgIAAAAgJg");
	this.shape_375.setTransform(124.9,223.1);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCgBgEQABgDACgCQADgDADABIAEABIABABQADADgBACIAAACIAAABIgCADIgDACIgCABg");
	this.shape_376.setTransform(124.9,229.4);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AgEAHIgBgBQgCgCgBgEQABgDACgCIABgBIACgBIACgBQACgBAEAEQACACABADQgBADgCADQgCADgEAAg");
	this.shape_377.setTransform(147.3,217.6);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AATAGQgDgCAAgEQAAgDADgCQADgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgDAAgDgDgAgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAIAAAAAIQAAAJgIAAQgDAAgCgDgAghAAQAAgDADgCQACgDAEAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgJAAAAgJg");
	this.shape_378.setTransform(142.2,217.6);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_379.setTransform(137.2,217.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_380.setTransform(134.7,208.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAEgDACQgCADgEAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_381.setTransform(130.1,208.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_382.setTransform(125.5,208.9);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AAAAJIgCgBIgDgCIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIADgCIACgBIACAAIABABIACABIABABIACABIABAEIAAABIgBAEIgCABIgBABIgCABIgBABg");
	this.shape_383.setTransform(132.2,236.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAABADQAHAGgHAGQgBACgFAAQgEAAgBgCgAgFAGQgGgGAGgFQAFgGAGAGQAGAFgGAGQgDADgCAAQgCAAgEgDgAAPgOQgCgCgBgEQABgDACgDQACgCAEAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_384.setTransform(128.1,240.2);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQABgDACgCQACgDADAAQAEAAACADQADACgBADQABACgDAEQgDADgDgBQgDABgCgDg");
	this.shape_385.setTransform(124,244.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AAHAyQgIAAAAgJIAAgpQAAgDACgCQACgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh5AAQgJAAAAgJQAAgDACgDQADgCAEAAICCAAQAIAAAAAIIAABSQAAAJgIAAg");
	this.shape_386.setTransform(138,224.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AhiBtQgIAAAAgJQAAgJAIAAIBhAAIBYhZIhahZIgvAvIApApIAbgbQADgDAEAAQADAAADADQACACAAADQAAAEgCACIgiAiQgCACgEAAQgDAAgDgCIg1g1QgCgCAAgEQAAgDACgCIA7g8QADgDADABQADgBACADIBnBmQACADAAACQAAAEgCADIhhBhQgEACgDABg");
	this.shape_387.setTransform(134.7,203.5);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgCAAgDgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIggAgIBABAQADACAAAEQAAAEgDACIhsBuQgDADgEAAQgDAAgDgDg");
	this.shape_388.setTransform(132,243.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_389.setTransform(98.9,212.1);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_390.setTransform(108.8,225.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_391.setTransform(116.4,203.4);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_392.setTransform(100.3,239.4);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_393.setTransform(116.4,191);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIABgBIADgCIABgBIADAAIACABIABABIABABQADACgBADQABAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_394.setTransform(117.8,216.7);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAIAAAAAIQAAAKgIgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAIgBAAAIQAAAJgIAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAIAAAAAJQAAAJgIAAQgCAAgDgCg");
	this.shape_395.setTransform(117.8,223.1);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgFAGIgCgDIgBgCIAAgBQAAgCADgEQADgCACAAQAEAAACACQADADgBADIAAABIAAACIgCADQgDADgDgBQgCABgDgDg");
	this.shape_396.setTransform(117.8,229.4);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AgFAGQgDgEAAgCIAAgBIABgBIACgEQADgCACAAQAEAAACACQACACAAAEQAAADgCADIgBABIgFABQgCAAgDgCg");
	this.shape_397.setTransform(95.4,217.6);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgHAAQAAgIAHAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgHAAAAgJgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_398.setTransform(100.4,217.6);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgFAGQgDgDAAgDIACgEIABgBQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgCAAgDgDg");
	this.shape_399.setTransform(105.4,217.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_400.setTransform(107.9,208.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAEgDACQgCADgEAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_401.setTransform(112.5,208.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_402.setTransform(117.1,208.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AgBAJIgBgBIgCgBIgBgBIgBgBIgCgFIACgEIABgBIABgBIACgBIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_403.setTransform(110.4,236.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AAOAbQgFgGAFgGQADgDAEAAQADAAADADQAFAGgFAGQgCACgEAAQgFAAgCgCgAgGAGQgCgCAAgEQAAgDACgCQAGgGAGAGQAFAFgFAGQgDADgDAAQgCAAgEgDgAgagOQgDgCAAgEQAAgDADgDQACgCAEAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_404.setTransform(114.6,240.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQADgEADABIADABIABABIABABQADACgBADQABAEgDACIgBABIgFACQgCAAgDgDg");
	this.shape_405.setTransform(118.7,244.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AhBAyQgIAAAAgJIAAhSQAAgDACgDQADgCADAAICCAAQAEAAADACQACADAAADQAAAJgJAAIh5AAIAABBIAqAAIAAghQAAgDACgCQADgDADAAQAIAAAAAIIAAApQAAAJgIAAg");
	this.shape_406.setTransform(104.6,224.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AAABtQgDgBgEgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgCACgEAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_407.setTransform(107.9,203.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#000000").s().p("AARCUIhshuQgDgCAAgEQAAgEADgCIBAhAIggggQgCgDAAgDQAAgEACgCIBBhCQACgCAEAAQADAAADACIBKBLQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDIhEhEIg0A1IAgAgQACADAAADQAAAEgCACIhBBAIBhBiIAogpIglglIgWAWQgCADgDAAQgEAAgCgDQgDgCAAgEQAAgEADgCIAbgcQACgDAEAAQAEAAACADIAxAxQADACAAAEQAAAEgDACIg0A1QgDADgDAAQgEAAgDgDg");
	this.shape_408.setTransform(110.6,243.6);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#245B4E").s().p("AhuAaQgLAAgIgHQgHgIAAgLQAAgKAHgHQAIgIALAAIDdAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAg");
	this.shape_409.setTransform(202.1,112.1);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#245B4E").s().p("AhvAuQgTAAgNgOQgOgNAAgTQAAgRAOgOQANgNATAAIDfAAQATAAANANQAOAOAAARQAAATgOANQgNAOgTAAg");
	this.shape_410.setTransform(217.3,95.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#003944").s().p("AigAmQgEAAgEgDQgDgDAAgEIAAg3QAAgEADgDQAEgDAEAAIFCAAQAEAAADADQADADAAAEIAAA3QAAAEgDADQgDADgEAAg");
	this.shape_411.setTransform(159,99.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#003944").s().p("AgqAgQgNAAgKgJQgJgKAAgNQAAgMAJgKQAKgJANAAIBVAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAg");
	this.shape_412.setTransform(76.7,106.9);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#245B4E").s().p("Ai8AnQgQAAgMgLQgLgMAAgQQAAgPALgMQAMgLAQAAIF4AAQAQAAAMALQAMAMAAAPQAAAQgMAMQgMALgQAAg");
	this.shape_413.setTransform(23.3,103.6);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#003944").s().p("AiBAkQgPAAgKgKQgLgLAAgPQAAgOALgLQAKgKAPAAIEDAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAg");
	this.shape_414.setTransform(70.8,92.4);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#003944").s().p("AhxAVQgIAAgHgGQgGgHAAgIQAAgIAGgGQAHgGAIAAIDjAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAg");
	this.shape_415.setTransform(111.8,99.7);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_416.setTransform(37.7,132.6);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_417.setTransform(43.2,138.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_418.setTransform(48.7,132.6);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_419.setTransform(43.2,127.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_420.setTransform(63.7,132.6);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_421.setTransform(69.2,138.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_422.setTransform(74.7,132.6);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_423.setTransform(69.2,127.1);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_424.setTransform(89.8,132.6);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_425.setTransform(95.3,138.2);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_426.setTransform(100.8,132.6);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_427.setTransform(95.3,127.1);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_428.setTransform(115.8,132.6);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#010C06").s().p("AhuA3IBuhtIBvBtg");
	this.shape_429.setTransform(121.3,138.2);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_430.setTransform(126.8,132.6);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#01160C").s().p("Ahug2IDdAAIhvBtg");
	this.shape_431.setTransform(121.3,127.1);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_432.setTransform(141.8,132.6);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_433.setTransform(147.3,138.2);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_434.setTransform(152.9,132.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_435.setTransform(147.3,127.1);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_436.setTransform(167.9,132.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_437.setTransform(173.4,138.2);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_438.setTransform(178.9,132.6);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_439.setTransform(173.4,127.1);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_440.setTransform(193.9,132.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_441.setTransform(199.4,138.2);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_442.setTransform(204.9,132.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_443.setTransform(199.4,127.1);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#00070B").s().p("AhMBXQggAAgYgYQgXgXAAggIAAgPQAAghAXgXQAYgXAgAAIDoAAIAACtg");
	this.shape_444.setTransform(170.8,232.9);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#00070B").s().p("Ai/BgQggAAgXgXQgXgYAAggIAAghQAAggAXgYQAXgXAgAAIHJAAIAEABIAAC+g");
	this.shape_445.setTransform(159.4,261.8);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#00070B").s().p("AhMCNQggAAgYgXQgXgXAAghIAAh7QAAggAXgYQAYgXAgAAIDoAAIAAEZg");
	this.shape_446.setTransform(170.8,308.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#00070B").s().p("AibBXIAAisIDoAAQAhAAAXAWQAXAYAAAhIAAANQAAAhgXAXQgXAXghABg");
	this.shape_447.setTransform(71.9,273.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#00070B").s().p("AkKBgIgDgBIAAi+IHMAAQAhAAAXAXQAXAYAAAgIAAAhQAAAggXAYQgXAXghAAg");
	this.shape_448.setTransform(83.3,244.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#00070B").s().p("AibCNIAAkZIDoAAQAhAAAXAXQAXAYAAAgIAAB7QAAAhgXAXQgXAXghAAg");
	this.shape_449.setTransform(71.9,198);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#00070B").s().p("AlJBhIAAjBIJEAAQAhAAAXAYQAXAXAAAhIAAAiQAAAggXAYQgXAXghAAg");
	this.shape_450.setTransform(89.3,174.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#010C06").s().p("EgKKAs6MAAAhZzIUVAAMAAABZzg");
	this.shape_451.setTransform(121.3,451.9);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#073D33").s().p("AymBvQgJAAgGgGQgHgHAAgIIAAiyQAAgJAHgGQAGgHAJAAMAlOAAAQAIAAAHAHQAGAGAAAJIAACyQAAAIgGAHQgHAGgIAAg");
	this.shape_452.setTransform(121.3,101.8);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#01160C").s().p("AtEA9IAAh5IaJAAIAAB5g");
	this.shape_453.setTransform(121.3,158.5);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#022B18").s().p("AuwDGIAAmLIdhAAIAAGLg");
	this.shape_454.setTransform(121.3,132.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.openingBg, new cjs.Rectangle(0,0,1320.6,739.3), null);


(lib.navigation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// logo(3).ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5AA53").s().p("AABA/QgBgBACgFIAEgFIADgMQABgHgFgFQgDgCgFgCIgLgDQgNgDgJgNQgIgLABgPQABgTAOgOQAOgMARAAQARAAALAMQANALAAARQADAmgWAiIgEAIIgIAJQgEAEgDABQgEgBgBgEg");
	this.shape.setTransform(1268.9,16.2,0.438,0.438);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5AA53").s().p("AhwifIDegGIAEBbIh8gDIACAlIA/AAIAEBSIhCgFIABAoIBtgBIADBYIjbACg");
	this.shape_1.setTransform(1309,42.3,0.438,0.438);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E5AA53").s().p("AgiAvIAFBoIhpACIgDk2QA8gSA8AFQA0ADAhAXQApAcAGA6QADAQgFAUQgEASgIALQgLAQgTAKIBDBFIhUBGgAgmgWQALABAMgFQAWgJgBgYQAAgOgHgJQgFgGgMgFQgKgEgOAAg");
	this.shape_2.setTransform(1297.5,42.8,0.438,0.438);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E5AA53").s().p("AgCCrIgDAAQgxgEgigaQgagTgRgfQgeg4AHhWQADgfAIgkIANg0IBrAaIgMAmQgHAegDAUQgJA6APAbIAIAMQAKAKAMADQANADALgCQAHgCAGgFQAJgGAEgJQANgagIgyQgDgVgLggIgTg1IBwgKQA8Cxg6BaQgdArgxAOQgOAFgVABg");
	this.shape_3.setTransform(1284.2,42.5,0.438,0.438);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E5AA53").s().p("Ag5g/IhJAFIgEhcIEKgNIADBYIhbAGIAHDlIhrAEg");
	this.shape_4.setTransform(1270.8,42.2,0.438,0.438);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E5AA53").s().p("AibiEIC5BrIgJiBIB8gHIALFAIjChaIAFBdIh3AAg");
	this.shape_5.setTransform(1257.8,42.6,0.438,0.438);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5AA53").s().p("AhwifIDegGIAEBbIh8gDIABAlIBAAAIAEBSIhCgFIABAoIBtgBIADBYIjaACg");
	this.shape_6.setTransform(1245.2,42.3,0.438,0.438);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5AA53").s().p("AjBh+IB7gnIBKB2IBXh7IBnA2Ii7Efg");
	this.shape_7.setTransform(1231.7,42.3,0.438,0.438);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E5AA53").s().p("AhkCeQgbgDgSgFIACkqQA+gQBIAFQBoAEAkBUQAGAPAEAPQADAMABAOQACAOgBALQgBBIguAmQglAfg+AIQgWACgXAAQgbAAgcgDgAgngyIgHBoQAUAFAUgDQASgCALgKQAOgMAEgYQADgNgEgPQgFgOgHgGQgKgKgSgCIgMgBQgOAAgNADg");
	this.shape_8.setTransform(1217.5,42.2,0.438,0.438);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E5AA53").s().p("AitCBICvk1ICsE5IhtAoIgVgyIhqAGIgZAzgAgbA5IAqgEIgSgvg");
	this.shape_9.setTransform(1202.8,42.3,0.438,0.438);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E5AA53").s().p("AgfCpQgYgFgdgLIAohHQAVANAQgBQAPgCgEgRQgCgLgJgKQgJgIgSgJIgjgTQgsgZgKgnQgIghAQghQAQgeAfgPQAqgUAwAEQAYACAaAJIgZBHQgmgNgLARQgPAVAoAdQAPAMAXAMIARAJIALAGQAbATAIAdQAHAdgNAcQgMAcgXASQgYARgoAEIgLABQgRAAgWgGg");
	this.shape_10.setTransform(1276.1,24.2,0.438,0.438);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E5AA53").s().p("AhwifIDegGIAEBbIh8gDIACAlIA/AAIAEBSIhCgFIABAoIBtgBIADBYIjbACg");
	this.shape_11.setTransform(1261.4,23.9,0.438,0.438);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E5AA53").s().p("AgaCjQgigDgegPQgdgPgUgZQgUgXgIgfQgJgeAGgiQAFghATgdQARgcAcgVQA5gsBGAGQAiADAfAPQAcAPAVAYQAUAZAIAeQAJAfgGAhQgGAhgSAdQgSAdgbAUQg0Ang7AAIgRgBgAgmgvQgXARgFAbQgDAaAQAUQARAVAcACQAbACAXgRQAXgSAFgaQAEgbgRgUQgRgUgcgCIgGAAQgXAAgVAPg");
	this.shape_12.setTransform(1248.5,24.2,0.438,0.438);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5AA53").s().p("AibCCICFiuIh5gCIAChzIEpAaIh2CsIBjAHIgNB2g");
	this.shape_13.setTransform(1234.4,24.4,0.438,0.438);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#010C06").s().p("AABBFQgBgDADgEIABgCIACgEIAEgNQAAgIgEgEQgDgCgHgDIgLgCQgPgFgJgNQgJgMABgRQACgTAPgPQAOgPATAAQATACAMAMQANANAAARQADApgXAlIgCADIgCAFIgJALQgEADgEAAQgEAAgBgDg");
	this.shape_14.setTransform(1270.4,17.4,0.438,0.438);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#010C06").s().p("Ah1imIDogHIAEBgIiBgDIABAnIBCAAIAEBVIhEgFIABApIByAAIADBbIjlADg");
	this.shape_15.setTransform(1310.1,43.8,0.438,0.438);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#010C06").s().p("AgkAyIAGBsIhuACIgElEQA/gSA/AEQA3AEAiAYQAsAeAFA7QACATgDATQgEARgKAOQgLAQgUALIBGBIIhYBJgAgshlIAFBOQAMABALgFQAXgJgBgaQAAgOgHgJQgIgIgKgEQgLgEgMAAIgCAAg");
	this.shape_16.setTransform(1298.1,44.3,0.438,0.438);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#010C06").s().p("AACCzIgEAAIgDgBQgygEglgbQgagTgSghQggg7AHhZQAEgkAHgjQAFgYAKgeIBvAbQgGAOgHAbQgFAVgFAdQgJA/AQAbQAEAKAEACQAIAKAOAEQAOAEALgDQAJgCAFgFQAIgGAGgKQAOgcgJgzQgDgYgLggIgUg2IB1gLQA/C5g9BdQgfAugzAPQgRAFgTABIgHAAIgGAAg");
	this.shape_17.setTransform(1284.2,44,0.438,0.438);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#010C06").s().p("Ag7hCIhNAFIgEhgIEVgOIAEBdIhfAGIAHDwIhvAEg");
	this.shape_18.setTransform(1270.3,43.7,0.438,0.438);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#010C06").s().p("AifCpIgCkzIDABwIgJiHICBgHIAMFOIjKheIAEBhg");
	this.shape_19.setTransform(1256.6,44.1,0.438,0.438);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#010C06").s().p("Ah1imIDogHIAEBgIiBgDIABAnIBCAAIAEBVIhEgFIABApIByAAIADBbIjlADg");
	this.shape_20.setTransform(1243.4,43.8,0.438,0.438);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#010C06").s().p("AjKiEICAgpIBOB8IBbiBIBrA5IjDEsg");
	this.shape_21.setTransform(1229.3,43.7,0.438,0.438);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#010C06").s().p("AhoClQgegDgRgFIACk3QBBgRBKAEQBtAFAmBXQAGARAEAPQACAJACATQACANgBAMQAABMgwAoQgnAghBAIQgVADgYAAQgcAAgfgEgAgpg0IgHBsQAVAGAVgDQARgCANgLQAQgNADgYQADgOgEgPQgEgOgJgIQgLgLgSgBIgPgBQgOAAgMADg");
	this.shape_22.setTransform(1214.5,43.6,0.438,0.438);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#010C06").s().p("Ai0CHIC2lCICzFGIhyAqIgVg0IhwAGIgaA2gAgdA7IAtgDIgTgyg");
	this.shape_23.setTransform(1199.2,43.8,0.438,0.438);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#010C06").s().p("AghCxQgXgFgfgMIAqhLQAVAOAQgBQARgCgEgSQgCgMgKgJQgJgJgTgKIglgTQgugagKgpQgJglARggQAQgfAigQQAqgVAzAEQAbACAZAJIgZBLQgpgOgLASQgQAWAqAfQAQAKAYAOIAeAQQAcAUAHAeQAIAdgNAeQgOAggXAQQgaATgpAEIgIABQgUAAgZgGg");
	this.shape_24.setTransform(1275.7,25.8,0.438,0.438);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#010C06").s().p("Ah1imIDogHIAEBfIiBgCIACAmIBBABIAFBVIhFgFIABApIByAAIACBbIjjADg");
	this.shape_25.setTransform(1260.4,25.5,0.438,0.438);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#010C06").s().p("AgbCqQgmgDgdgQQgegQgVgZQgVgZgJggQgJghAGghQAGgjATgeQASgdAdgWQA8gtBKAFQAkADAfAQQAfAPAUAaQAVAZAIAgQAKAggGAiQgFAigUAgQgTAdgcAWQg2Aog/AAIgRgBgAgogxQgYASgEAcQgFAbARAVQASAVAeADQAcADAYgTQAYgSAFgcQAEgbgRgVQgRgWgegCIgGgBQgZAAgWARg");
	this.shape_26.setTransform(1246.9,25.7,0.438,0.438);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#010C06").s().p("AiiCIICLi3Ih+gCIACh3IE2AbIh7C0IBoAHIgOB7g");
	this.shape_27.setTransform(1232.1,26,0.438,0.438);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#182E30").s().p("AQ/GnIAAAeIigAAIgKg8QggAtg7AVQh1AriDh3Ig8AAIAAAyIwkAeIiBigQgNBDgyA1QhkBpi7hLIiNAoIgnhGIhagKIgfA8IiChQIDSl8IApAKIA7gdIBQBjQArgjBAgXQB/gsBqA+IB4goIhBg2IBQhkIhQAAIAplAIFyBkIAZgTQAggVAigKQBughBdBYIAKg8IDvAAIAEgPQAEgSAKgNQAegrA/ATIAaAQQAcAcAFA4IAagHQAggGAdgBQBcgCAgA4IgVBQIgMAPQgFAUAmAZQAtAeAWBMQAWBNgeAkIBugTIALAnIAegIQAkgJAlgDQB2gKBFAyIAAgoIEOgKIAAAyIAtAFIgUGGIi5AFIhkAog");
	this.shape_28.setTransform(1253.3,33.5,0.438,0.438);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#18473F").s().p("AhlEtQgGgBADgtQABgRAEgfQAGgkAGgXIAGgXIgCADIgrBbQgSAmgEgCQgFgBALgpQAHgZAHgTQAJgXANgdQAZgyAbgmIAOgSIhDgSQgVgGgZgMQgZgMgTgMIgigXQgegXAEgFQACgDAhAQIBPAnIApASQgMgIgVgRQgQgNgTgTIgageQgVgcAEgFQAEgCAaAXIBVBIIgWgfQgagmgVgpIgNgZQgEgJACgCQACgBAIAHQAHAFAMAQQAWAaAgAwIAZAmIhKiNQgUglADgCQACgCAJAIQAJAIAMAPIANARIAJANQgPgyAGgDQAFgCARAjQARAiASAzQAOAmAGATIgQiPQgEglAEgBQAGgCALAkQAGATAEAUIAEAUQAFg3AHglQAHglAFAAQAEABAAAqQAAAqgEA7IgCARIAIgfQAThBARgqQAQgsAFABQAFACgJAuQgMA1gQA4IgJAcIAxh1QASgpAEABQAGACgLArIgNAvQgHAVgOAjIgNAbIAWghIAig1IAagtQAYgpAEACQAGACgSAtIgWAwQgLAVgPAZIA9hEQAfgiADADQAFADgZAnIg0BEIBDhAQAbgaADACQAFAEgcAmIgOATIAAgBQAngVADAGQACAEgiAaIgmAeQBYgsAEAIQACAFglAYQglAYg2AcIgLAGIBrgzQApgSACAEQAEAFgmAZQgdASgWANIAFgBQATgFAcgEQArgFABAGQABAFgqAMIhcAaIBZgIQArAAAAAGQAAACgLADIgeAHIg/AKIA6AGQApAGAAAFQAAAGgqABQgPABgrgBQAhAJAUAIQAnAOgCAGQgBAEgogHIhYgRIAvAPIAqASQARAIAKAIQAKAHgCACQgBAEgogMIg+gSIBPAuIAHADIADADQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBABIgJABQgNgBgSgHIADADQANANAIAKQAGAKgCACQgBABgKgGIgZgQIgcgTIAaAlIANAbIAFAOQAEAMgDABQgCABgHgJIgJgMIgLgOIgegmQgWgYgTgSIghgcQAQARALAPQATAZAOAXQALARAMAZQAUAngGADQgEADgZgkIh8igQAQAZAfA7IAvBZIASAhIABAEQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAgBAAIgIgFQgKgHgMgQIgTgbIAMAjQALAqgGACQgEABgSgnIgohXQANA0AFAdQADASgBANQAAAFgCADQAAABAAABQgBAAAAABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBgBIgNgjQgRg1gLgoIgBgEIABALQAAA4gCAwQgDArgFAAQgGAAgEgrQgEgngChAIAAgIIgJBOQgEAlgFAAQgGAAgCglIgBgqIABgPIgVBdQgKArgFAAIAAAAg");
	this.shape_29.setTransform(1285.6,32.6,0.438,0.438);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#18473F").s().p("AgqIVQgIgCAKhJIAYiuIAKhZQgNAqgPAlQgSAugVApIgoBDQgTAagOAPQgOAOgEgDQgFgDAGgSQAEgOAOgiIBUjOQgWAfgXAeQg+BQg5A7QgYAZgQAOQgQANgEgDQgEgDAIgTQAJgTATgeQAhg0BKhgIA4hIIhTBVIiKCQIgqAsQgRAPgEgDQgFgCAKgWQAKgWAUggIAZgjIATgZQhXA7gIgKQgGgIA3g1QA3g2BUhDQA4gtAogcIkGB5QhDAegFgHQgDgFAOgOQAPgQAcgTQAbgUAqgYIAigTQhsAZhJAKQhLAKgDgKQgCgKBQgaQBQgbBzgbIAigIIhCADQh+AEhjgEQhegEAAgKQAAgLBcgLQBUgKCNgFIA7gBIj9gTQhZgHAAgJQAAgFAXgGQAZgFApgEIBhgEQBBABA2AFQAXACAkAFIhNgWQg+gRg8gNIhkgWQgygLgSgFQgZgIAAgFQABgFAagCQAcgCArACIAxAEQAeAEAZAEQAuAHA7APIinhKQhVgmADgIQABgFAZADQAaAEApAKICiA4IikhXQhCgjACgHQACgFAZAFQAbAEAoAOIAsAQIgBgCQgdgagPgUQgPgSAEgEQAGgHBHAvIBMA0IAEADQg8g+gjgqQgjgrAFgGQAIgHBEA3QBEA3BZBWIASARIgRgSQhuhyglgoQg9hCAHgHQAHgIBHA3QAxAmAqAnIgFgJQgdgwgQgjQgRgkgHgYQgHgXAFgCQAHgEAyBHIA1BNIA2BRQgYgwgNgdIgTguQgJgVgGgTQgNgkgEgZQgEgXAFgCQAFgCANAUQAJAOAVAnIA+BxQgNg3gMg8QgPhRAJgDQAFgCALAUQALAVANAjQARAtAUBCQgEhFACgqQABgmAFgXQAEgWAFAAQAJAAALBRQAMBVAKBcQgBg9ACgmQABg1AGgnQAFglAIgYQAHgWAFABQAFABACAXIADA8IAFCCIAbh6QAHgfAEgbIACgPIACgHQADgCAEAFQAFAGADAMQAGAVgBApIADgHQARghAPgVQAOgSAFACQAEADgFAWQgCAKgOAwIgSBAIAGgKIAggrIAfgjQALgLARgQIAXgSQAVgOADAEQAEADgOAVIgQAXIgVAfIgZAlIgbArQgiA7gUAsQgRAlgRAsQAZgqAUgeQAigyAkgrQAqgvAXgXQAdgbAUgOQAUgOADAEQAEADgNAUQgKAQgaAkIg3BLIhCBdQgkA2gaApIgrBJQArg0BXhbQAxg0BbhcIA0g3QAEgEACAAQADAAAAAHQABAIgEALQgIAWgXAhQgRAagWAaQAmgdAWgOQAggWAXgLQAVgKADAFQADAEgQARIgsAsIhDBAIhJBEQBbg8AzgZQAjgSAVgGQAKgCAIAAQAHABAAACQABADgFAEIg6AuQhYBDhHAvIgGADIAUgHQBwgnBVgWQBTgWAEAKQAEAKhPAjQhIAih4AqIgOAFICZggQBJgPAEAJQABAFgRAKQgTALggAOQgdAMgwAPIgdAHIC8gRQBZgIACAJQACALhXAWQgqALg2AJQg8AKg6AGIgwADIDPAZQBTAKAAAKQAAAFgWAEQgYAEgmACQgoADg0gDQgwgBhBgIQhqgOhegeQgcgJgNgGIAGCLQgBA4gGArQgFAygMAxIgLAqQgEARgGATQgMAggKATQgJARgFAAIgBgBg");
	this.shape_30.setTransform(1236.9,29.5,0.438,0.438);

	this.gameName = new cjs.Text("", "bold 18px 'Heebo'", "#002929");
	this.gameName.name = "gameName";
	this.gameName.textAlign = "right";
	this.gameName.lineHeight = 30;
	this.gameName.lineWidth = 527;
	this.gameName.parent = this;
	this.gameName.setTransform(1134.9,16.9);

	this.howToPlayLink = new cjs.Text("איך משחקים?", "bold 18px 'Heebo'", "#677F4E");
	this.howToPlayLink.name = "howToPlayLink";
	this.howToPlayLink.lineHeight = 30;
	this.howToPlayLink.parent = this;
	this.howToPlayLink.setTransform(125.7,16.5);

	this.editorLink = new cjs.Text("עורך", "bold 18px 'Heebo'", "#677F4E");
	this.editorLink.name = "editorLink";
	this.editorLink.lineHeight = 30;
	this.editorLink.parent = this;
	this.editorLink.setTransform(258,16.5);

	this.aboutLink = new cjs.Text("אודות", "bold 18px 'Heebo'", "#677F4E");
	this.aboutLink.name = "aboutLink";
	this.aboutLink.textAlign = "right";
	this.aboutLink.lineHeight = 30;
	this.aboutLink.parent = this;
	this.aboutLink.setTransform(89.4,16.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E2E2E2").s().p("EhqtAE2IAAprMDVbAAAIAAJrg");
	this.shape_31.setTransform(683,31);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E2E2E2").s().p("AlDDwIAAnfIKHAAIAAHfg");
	this.shape_32.setTransform(70.8,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.aboutLink},{t:this.editorLink},{t:this.howToPlayLink},{t:this.gameName},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.navigation, new cjs.Rectangle(0,0,1366,62), null);


(lib.larm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69C6D").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape.setTransform(11.2,11.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445431").s().p("AABFZQgXgSgEgdIhZp9ICNgUIBZJ9QAEAegSAXQgSAYgdAEIgLABQgXAAgTgPg");
	this.shape_1.setTransform(14.8,52.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.larm, new cjs.Rectangle(0,0,26.4,88.6), null);


(lib.introTexts = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("קוד משחק", "18px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(108.9,-5);

	this.text_1 = new cjs.Text("משחק לדוגמה: 101", "18px 'Heebo'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 30;
	this.text_1.parent = this;
	this.text_1.setTransform(142,91.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.introTexts, new cjs.Rectangle(-4.5,-7,148.5,126.9), null);


(lib.gameNotFound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.gameNotFound = new cjs.Text("המשחק אינו קיים", "bold 18px 'Heebo'", "#FF3333");
	this.gameNotFound.name = "gameNotFound";
	this.gameNotFound.textAlign = "center";
	this.gameNotFound.lineHeight = 30;
	this.gameNotFound.lineWidth = 234;
	this.gameNotFound.parent = this;
	this.gameNotFound.setTransform(119,3);

	this.timeline.addTween(cjs.Tween.get(this.gameNotFound).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameNotFound, new cjs.Rectangle(0,1,238.1,55.3), null);


(lib.gametitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gameTitle(1).ai
	this.instance = new lib.gameTitle();
	this.instance.parent = this;
	this.instance.setTransform(-379,-53,0.841,0.841);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gametitle, new cjs.Rectangle(-379,-53,757.2,106), null);


(lib.correctOption = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// correct-option.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2EA34F").s().p("AiJDbIgGgEQgVgOgFgYQgFgZANgVIDYlLQAOgVAYgFQAZgGAVAOIAFAEQAVAOAFAZQAGAYgOAVIjYFLQgNAVgZAFQgHACgGAAQgRAAgPgKg");
	this.shape.setTransform(32.7,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2EA34F").s().p("AA8CwQgZgFgOgVIiVjlQgOgVAGgZQAFgYAVgOIAFgEQAWgOAYAGQAZAFANAVICWDlQANAVgFAZQgFAYgVAOIgGAEQgPAKgRAAQgGAAgHgCg");
	this.shape_1.setTransform(13.9,27.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.correctOption, new cjs.Rectangle(0,0,49.9,45.7), null);


(lib.continueBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך", "24px 'Heebo'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 40;
	this.text.parent = this;
	this.text.setTransform(91.4,3.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF9933").s().p("At5EUQgRAAgLgMQgMgMAAgQIAAnXQAAgQAMgMQALgMARAAIbzAAQARAAAMAMQALAMAAAQIAAHXQAAAQgLAMQgMAMgRAAg");
	this.shape.setTransform(62,21,0.667,0.762);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,124,42);


(lib.closeBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// close-icon.ai
	this.instance = new lib.close();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clock.ai
	this.clockText = new cjs.Text("", "24px 'Heebo'", "#FF9933");
	this.clockText.name = "clockText";
	this.clockText.textAlign = "center";
	this.clockText.lineHeight = 40;
	this.clockText.lineWidth = 52;
	this.clockText.parent = this;
	this.clockText.setTransform(55,26.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#534741").s().p("AADFyQgEAAgEgEQgEgEAAgFQAAgFAEgEQAEgEAEAAIABAAQAGAAADADQAEAEAAAGQAAAFgEAEQgDAEgGAAgAi1FCIAAAAIAAAAQgFgDgBgFQgCgFADgFQAEgHAHAAQAEAAADACIAAAAQAFADABAFQACAFgDAFQgDAHgIAAQgEAAgDgCgACrE6QgDgFABgFQABgGAFgCIABgBIAGgCQAIAAAEAHQACAFgBAFQgBAFgFADIAAAAQgDACgEAAQgHAAgEgGgAk+C8IAAgBQgDgFABgFQACgFAEgDQAEgCADAAQAIAAAEAHIAAAAQACAFgBAFQgBAGgFACQgDACgEAAQgHAAgEgGgAExC6QgFgDgBgFQgCgFADgFIAAgBQAEgGAIAAQADAAADABQAFADABAFQACAFgDAFIAAABQgEAHgIAAQgEAAgCgCgAltAMQgEgEAAgGIAAAAQAAgFAEgEQAEgDAFAAQAGAAADADQAEAEAAAFIAAAAQAAAGgDAEQgEADgGABQgFAAgEgEgAFcAEQgEgEAAgEIAAgBQgBgFAEgEQAEgEAGAAQAFAAAEAEQAEAEAAAFIAAABQAAAEgEAEQgEAEgFAAQgGAAgDgEgAk7ikQgFgDgBgFQgCgGADgEIAAgBQAEgHAHAAQAEAAADACQAFADABAFQABAFgCAFIAAABQgEAGgIAAQgDAAgDgBgAEniwIgBAAQgCgFABgFQABgFAFgDIAHgCQAHAAAEAGIAAABQADAFgBAFQgBAFgFADQgDACgEAAQgHAAgEgHgAi+ktQgCgFABgFQABgFAFgDIAAAAIAHgCQAIAAAEAHQACAEgBAGQgBAFgFADIgBAAQgCACgEAAQgIAAgEgHgACmksIAAAAQgFgCgBgGQgCgFADgFQAEgHAHAAQAEAAADACIAAAAIAAAAQAFADACAFQABAFgDAFQgDAHgIAAQgEAAgDgCgAAAlXQgFAAgEgDQgEgEAAgGQAAgFAEgEQAEgEAFAAIAAAAQAGAAADAEQAEAEAAAFQAAAGgEAEQgDADgGAAg");
	this.shape.setTransform(55,55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCF1F9").s().p("AjgFFQhKgfg7g6IJRpRQA6A7AfBKQAgBOABBUQgBCth7B7Qh7B7itABQhUgBhOggg");
	this.shape_1.setTransform(61.3,61.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7931E").s().p("AmEGFQihiiAAjjQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADjihCiQiiChjjAAQjjAAihihgAluluQiZCYAADWQAADXCZCYQCYCZDWAAQDXAACYiZQCZiYAAjXQAAjWiZiYQiYiZjXAAQjWAAiYCZg");
	this.shape_2.setTransform(55,55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9C100").s().p("AmEGFQihiiAAjjQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADjihCiQiiChjjAAQjjAAihihgAkokoQh7B7AACtQAACuB7B7QB7B7CtAAQCuAAB7h7QB7h7AAiuQAAith7h7Qh7h7iuAAQitAAh7B7g");
	this.shape_3.setTransform(55,55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AmEGFQihiiAAjjQAAjjChihQChihDjAAQDjAACiChQChChAADjQAADjihCiQiiChjjAAQjjAAihihg");
	this.shape_4.setTransform(55,55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.clockText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(0,0,110,110), null);


(lib.buarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#445431").s().p("Ag7F3QgZgYAAgkIAAp1QAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAYAAAkIAAJ1QAAAkgZAYQgYAagkAAQgiAAgZgag");
	this.shape.setTransform(8.5,40.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.buarm, new cjs.Rectangle(0,0,17.1,80.1), null);


(lib.blarm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AD8660").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape.setTransform(11.2,83);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#445431").s().p("AhUGOIAArTQAAgeAVgVQAVgVAeAAIAZAAQAdAAAVAVQAWAVAAAeIAALTg");
	this.shape_1.setTransform(9.1,39.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.blarm, new cjs.Rectangle(0,0,22.5,94.2), null);


(lib.blackBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.blackBG, new cjs.Rectangle(0,0,1366,768), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjTWEQg6gqgehkIgyjfQgliig8iCQgYg1g9hqQhChzgdg7QhujfAAjHQAAhUAThXICgBQIiEixQAlhtBViXQBqi9ARgkQA8iBAkiiIAyjfQAdhlA7grQBFgyCNAAQCPAABFAyQA6ArAdBlQASA9AgCiQAkCiA8CBIAJASIh3B3IChgmIBQCMQAxBXAdBDQBTC7AACtQAADHhuDfQgdA7hCBzQg9BqgYA1Qg8CCglCiIgyDfQgdBkg7AqQhFAyiPAAQiNAAhGgyg");
	mask.setTransform(102.7,146.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#77B7B3").ss(4.5).p("AsMA8QBmhZCQgsQCDgoCXACQB+ABCaAeQBdATC4AvIHsB/");
	this.shape.setTransform(111.6,206.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#77B7B3").ss(4.5).p("AnTBVIIHgwQCKgNBKgTQBygeBFhA");
	this.shape_1.setTransform(110.8,244.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#77B7B3").ss(4.5).p("AGpgRQjSg+jeAWQjfAWjBBl");
	this.shape_2.setTransform(98,270.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#77B7B3").ss(4.5).p("AlWgsQB2gWA9gGQBkgLBPAJQBfAKBPAnQBWArAxBH");
	this.shape_3.setTransform(97.5,288.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#77B7B3").ss(4.5).p("AsQB2QBsgCEsAHQEBAHCWgKQHjggEYjZ");
	this.shape_4.setTransform(119.7,216.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#77B7B3").ss(4.5).p("ANzBMQmIh/mQgTQnpgYnlCL");
	this.shape_5.setTransform(89,148.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#77B7B3").ss(4.5).p("AtmkuIKNA7QDTATBtASQCxAdCEA3QCeBBByBtQB8B4AqCU");
	this.shape_6.setTransform(94.9,181.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#77B7B3").ss(4.5).p("Av9uxQHAHdI/FAQB0BADpB6QDKBwB+BrQCiCJBZCpQBkC9gQC7");
	this.shape_7.setTransform(103.8,111.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#77B7B3").ss(4.5).p("AxlsSQCWETGSCjQBuAsDnBIQDkBHBvAuQFBCCEJDrQEIDqCpEv");
	this.shape_8.setTransform(114.6,80);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#69B5AC").s().p("AjTWEQg6gqgehkIgyjfQgliig8iCQgYg1g9hqQhChzgdg7QhujfAAjHQAAhUAThXICgBQIiEixQAlhtBViXQBqi9ARgkQA8iBAkiiIAyjfQAdhlA7grQBFgyCNAAQCPAABFAyQA6ArAdBlQASA9AgCiQAkCiA8CBIAJASIh3B3IChgmIBQCMQAxBXAdBDQBTC7AACtQAADHhuDfQgdA7hCBzQg9BqgYA1Qg8CCglCiIgyDfQgdBkg7AqQhFAyiPAAQiNAAhGgyg");
	this.shape_9.setTransform(102.7,146.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(29,0,147.4,292.4), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ArzNIIhtgUQgLgugEhPQgIifAjikIApAdIgjg6QAsi9BiiuQB3jVDAi2QFKk4GQhYIAcBlIAvhzQCngbCgAPQBQAHAvANQAYBugOCrQgcFUjAEsIhngHIBRApQhlCWiLCDQmFFxnZA3QhMAJhKAAQhGAAhDgIg");
	mask.setTransform(140.5,130.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#5D9B8F").ss(3.8).p("APPsgQlAIxoBGgQn/GhpnDH");
	this.shape.setTransform(117.4,115.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#5D9B8F").ss(3.8).p("ALbudQodEZmAHvQmCHuiMJS");
	this.shape_1.setTransform(162.2,158.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#5D9B8F").ss(3.8).p("AQqrsQibEChSB9QiJDRiACZQlFGFl0ClQjFBXkLAuQiiAblBAc");
	this.shape_2.setTransform(108.3,82.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#5D9B8F").ss(3.8).p("AMbqOQhVEEidDkQidDjjVCrQjTCrkABqQkABpkQAc");
	this.shape_3.setTransform(112.2,66.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#5D9B8F").ss(3.8).p("AtFQUQAHg/AWhHQAQg3AfhLQDmpAGjnaQGhnaIfkt");
	this.shape_4.setTransform(194.2,149.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#5D9B8F").ss(3.8).p("AppLxQC/nHFAmBQE/mBGckP");
	this.shape_5.setTransform(185.1,176.1);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#389388").s().p("ArzNIIhtgUQgLgugEhPQgIifAjikIApAdIgjg6QAsi9BiiuQB3jVDAi2QFKk4GQhYIAcBlIAvhzQCngbCgAPQBQAHAvANQAYBugOCrQgcFUjAEsIhngHIBRApQhlCWiLCDQmFFxnZA3QhMAJhKAAQhGAAhDgIg");
	this.shape_6.setTransform(140.5,130.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(52.4,45.8,176.3,169.6), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AEUQUQg2gMgyg8IhmiMQhJhmhQhIQghgehJg3QhRg8gmghQiPh6g7iKQgag9gNhAICHAIIiRhTQgHhWAOiCQARijABgeQADhsgXh8Qgbh5gGgwQgJhPAbgvQAhg4BjgqQBjgrA/AOQA1AMAzA9QAfAmBGBnQBJBlBRBIIALAKIgvB2IBlhLQCmCAAfAdQBxBpA0B5QA8CKgKC7QgDAxgLBlQgKBbgBAsQgDBtAXB7IAgCqQAKBOgdAvQghA3hjArQhLAgg2AAQgRAAgPgDg");
	mask.setTransform(59,104.7);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#18473F").s().p("AEUQUQg2gMgyg8IhmiMQhJhmhQhIQghgehJg3QhRg8gmghQiPh6g7iKQgag9gNhAICHAIIiRhTQgHhWAOiCQARijABgeQADhsgXh8Qgbh5gGgwQgJhPAbgvQAhg4BjgqQBjgrA/AOQA1AMAzA9QAfAmBGBnQBJBlBRBIIALAKIgvB2IBlhLQCmCAAfAdQBxBpA0B5QA8CKgKC7QgDAxgLBlQgKBbgBAsQgDBtAXB7IAgCqQAKBOgdAvQghA3hjArQhLAgg2AAQgRAAgPgDg");
	this.shape.setTransform(59,104.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0,0,118.1,209.5), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsHHcQiMg5hNhAQAIgqAahCQA0iEBYh4IBuAIIhEg+QDkkZF7iHQDchPDXgJQCxgHCnApIAgAzIgHgtQCPAnB6BFQA9AjAgAbQgbCQh0CwQjpFfm/CgQieA4idAUIgBhQIgkBUQhEAHhCAAQjwAAjbhZg");
	mask.setTransform(99.3,56.5);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#04352C").s().p("AsHHcQiMg5hNhAQAIgqAahCQA0iEBYh4IBuAIIhEg+QDkkZF7iHQDchPDXgJQCxgHCnApIAgAzIgHgtQCPAnB6BFQA9AjAgAbQgbCQh0CwQjpFfm/CgQieA4idAUIgBhQIgkBUQhEAHhCAAQjwAAjbhZg");
	this.shape.setTransform(99.3,56.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,198.7,113), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACII7IgdhXIgHBQQiZggibhGQmwjEjLlxQhAh0ghh3QgQg7gEglQAjgYA/geQCAg7CSgaIgLArIAkgwQCqgbCwAWQDVAaDVBhQFuCmDNEqIhJA5IBuAAQBOCAAoCIQAVBEAFArQhSA4iQAuQixA3i5AAQh1AAh4gWg");
	mask.setTransform(96.1,59.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#053438").s().p("ACII7IgdhXIgHBQQiZggibhGQmwjEjLlxQhAh0ghh3QgQg7gEglQAjgYA/geQCAg7CSgaIgLArIAkgwQCqgbCwAWQDVAaDVBhQFuCmDNEqIhJA5IBuAAQBOCAAoCIQAVBEAFArQhSA4iQAuQixA3i5AAQh1AAh4gWg");
	this.shape.setTransform(96.1,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,192.2,118.7), null);


(lib.test = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.gameCodeInput = new lib.an_TextInput({'id': 'gameCodeInput', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.gameCodeInput.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.gameCodeInput).wait(1));

}).prototype = getMCSymbolPrototype(lib.test, new cjs.Rectangle(-0.5,-0.5,101,23), null);


(lib.statueAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(30));

	// statue.ai
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(38.4,18.1,0.726,0.726,0,0,0,29.1,40.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({regX:29,x:54.2,y:7.5},0).wait(1).to({x:68.9,y:-2.3},0).wait(1).to({x:82.4,y:-11.1},0).wait(1).to({x:94.8,y:-19},0).wait(1).to({x:106.2,y:-25.9},0).wait(1).to({x:116.5,y:-31.9},0).wait(1).to({x:126,y:-37},0).wait(1).to({x:134.5,y:-41.2},0).wait(1).to({x:142.2,y:-44.5},0).wait(1).to({x:149.1,y:-46.8},0).wait(1).to({x:155.3,y:-48.2},0).wait(1).to({x:160.7,y:-48.6},0).wait(1).to({x:165.4,y:-48.2},0).wait(1).to({x:170,y:-46.8},0).wait(1).to({x:175.2,y:-44.4},0).wait(1).to({x:180.9,y:-41.2},0).wait(1).to({x:187,y:-37},0).wait(1).to({x:193.6,y:-31.9},0).wait(1).to({x:200.6,y:-25.9},0).wait(1).to({x:208,y:-18.9},0).wait(1).to({x:215.7,y:-11.1},0).wait(1).to({x:223.6,y:-2.3},0).wait(1).to({x:231.8,y:7.5},0).wait(1).to({x:240.1,y:18.2},0).wait(1).to({x:248.4,y:29.7},0).wait(1).to({x:256.9,y:42.2},0).wait(1).to({x:265.3,y:55.7},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.resultScene = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn-continue
	this.playAgain = new lib.playagain();
	this.playAgain.name = "playAgain";
	this.playAgain.parent = this;
	this.playAgain.setTransform(983.1,462.3,1,1,0,0,0,58,21.6);
	new cjs.ButtonHelper(this.playAgain, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.playAgain).wait(1));

	// Layer_1
	this.gameSubjectText = new cjs.Text("", "bold 22px 'Heebo'");
	this.gameSubjectText.name = "gameSubjectText";
	this.gameSubjectText.textAlign = "center";
	this.gameSubjectText.lineHeight = 34;
	this.gameSubjectText.lineWidth = 476;
	this.gameSubjectText.parent = this;
	this.gameSubjectText.setTransform(972.2,186.2);

	this.finalTime = new cjs.Text("", "bold 22px 'Heebo'");
	this.finalTime.name = "finalTime";
	this.finalTime.textAlign = "right";
	this.finalTime.lineHeight = 34;
	this.finalTime.lineWidth = 97;
	this.finalTime.parent = this;
	this.finalTime.setTransform(974.3,296.1);

	this.finalScore = new cjs.Text("", "bold 22px 'Heebo'");
	this.finalScore.name = "finalScore";
	this.finalScore.textAlign = "right";
	this.finalScore.lineHeight = 34;
	this.finalScore.lineWidth = 84;
	this.finalScore.parent = this;
	this.finalScore.setTransform(974.3,262.3);

	this.text = new cjs.Text("זמן:", "18px 'Heebo'");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 72;
	this.text.parent = this;
	this.text.setTransform(1027.3,297.3);

	this.text_1 = new cjs.Text("ציון:", "18px 'Heebo'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 28;
	this.text_1.lineWidth = 70;
	this.text_1.parent = this;
	this.text_1.setTransform(1026.3,262.3);

	this.text_2 = new cjs.Text("סיימת את המשחק בנושא", "18px 'Heebo'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 28;
	this.text_2.lineWidth = 376;
	this.text_2.parent = this;
	this.text_2.setTransform(979.2,151.6);

	this.instance = new lib.result();
	this.instance.parent = this;
	this.instance.setTransform(0,-80);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.finalScore},{t:this.finalTime},{t:this.gameSubjectText}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.resultScene, new cjs.Rectangle(0,-80,1366,768), null);


(lib.optionStone = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// option-stone.ai
	this.optionCorrect = new lib.correctOption();
	this.optionCorrect.name = "optionCorrect";
	this.optionCorrect.parent = this;
	this.optionCorrect.setTransform(185.2,41.3,1,1,0,0,0,24.9,22.9);

	this.optionWrong = new lib.wrongOption();
	this.optionWrong.name = "optionWrong";
	this.optionWrong.parent = this;
	this.optionWrong.setTransform(185.3,43.7,1,1,0,0,0,20.3,20.3);

	this.stoneText = new cjs.Text("", "12px 'Times New Roman'", "#33CCCC");
	this.stoneText.name = "stoneText";
	this.stoneText.textAlign = "right";
	this.stoneText.lineHeight = 15;
	this.stoneText.lineWidth = 158;
	this.stoneText.parent = this;
	this.stoneText.setTransform(192,83.1);

	this.instance = new lib.optionArea();
	this.instance.parent = this;
	this.instance.setTransform(0,-2,0.763,0.763);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.stoneText},{t:this.optionWrong},{t:this.optionCorrect}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.optionStone, new cjs.Rectangle(0,-2,228.8,289.8), null);


(lib.intro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// airplane.ai
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(1503,154.2,1,1,0,0,0,117,76.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8F385C").s().p("AgZAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAIAzAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape.setTransform(1532.7,79.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8F385C").s().p("AggAMQgFAAgDgEQgDgDAAgFQAAgEADgDQADgEAFAAIBAAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAg");
	this.shape_1.setTransform(1534.8,101.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8F385C").s().p("AjjAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIHHAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_2.setTransform(1527.9,88.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8F385C").s().p("AimAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIFNAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_3.setTransform(1504.9,101.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#ED548D").s().p("AgfAMQgFAAgEgEQgDgDAAgFQAAgEADgDQAEgEAFAAIBAAAQAFAAADAEQADADAAAEQAAAFgDADQgDAEgFAAg");
	this.shape_4.setTransform(1544.1,209.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EF528D").s().p("AiqAMQgFAAgDgEQgEgDAAgFQAAgEAEgDQADgEAFAAIFVAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAg");
	this.shape_5.setTransform(1530,200.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2518B").s().p("AinAKQgEAAgCgDQgDgDAAgEQAAgDADgDQADgDADAAIFOAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAg");
	this.shape_6.setTransform(1510.2,183.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_7.setTransform(1448.4,140.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_8.setTransform(1454.8,140.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_9.setTransform(1461.3,140.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_10.setTransform(1467.7,140.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_11.setTransform(1474.4,140.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_12.setTransform(1480.8,140.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_13.setTransform(1487.2,140.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_14.setTransform(1493.6,140.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_15.setTransform(1501.5,140.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_16.setTransform(1507.9,140.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_17.setTransform(1514.3,140.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_18.setTransform(1520.7,140.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_19.setTransform(1528,140.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_20.setTransform(1534.4,140.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFCA74").s().p("AgLAZIAAgxIAXAAIAAAxg");
	this.shape_21.setTransform(1540.8,140.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFCA74").s().p("AgKAZIAAgxIAVAAIAAAxg");
	this.shape_22.setTransform(1547.3,140.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFCA74").s().p("AhwgPQAHgHBvAAQA5AAA2ABIAXArIkXABQAPgaAMgMg");
	this.shape_23.setTransform(1401.4,142.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EF528D").s().p("AG0GhQhGAAg5gdQgugXhOhBItIq0IIwgYILvNBg");
	this.shape_24.setTransform(1486.3,188.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD466E").s().p("ABchAQggBAhIAkQhHAZgIAEg");
	this.shape_25.setTransform(1586.5,161.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AC456E").s().p("At6AzIAAhlIb1AAIimBlg");
	this.shape_26.setTransform(1504.8,163.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EF528D").s().p("Ak5ArIDclFQAng4AfgbQAugqAtAAID2AAIhNDhIhUEcQgyCrhxBVQgkAagmAPIgeAJg");
	this.shape_27.setTransform(1588.8,127.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#B1416C").s().p("AAVA8QgVAAgngTQgrgWgVgZIgug1IDgASIBLAAIAABlg");
	this.shape_28.setTransform(1401.9,162.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EF528D").s().p("ABIC6QgqABgggZIiJhfQgIgUgBgdQgBg5AqgsQA1g5BqgcQA2gOArgDIAAFzg");
	this.shape_29.setTransform(1400.9,149.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F3538A").s().p("AsnCIIAAkOIZPAAIAAEOg");
	this.shape_30.setTransform(1496.5,144.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8F385C").s().p("AoHGLIJ9qMQA4g7AqgaQA0giA9gFIC/gTIpJMhg");
	this.shape_31.setTransform(1467.8,118.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:1485,y:151.4},0).wait(1).to({x:1467.1,y:148.8},0).wait(1).to({x:1449.1,y:146.3},0).wait(1).to({x:1431.2,y:143.9},0).wait(1).to({x:1413.3,y:141.7},0).wait(1).to({x:1395.5,y:139.7},0).wait(1).to({x:1377.7,y:137.8},0).wait(1).to({x:1360,y:136.1},0).wait(1).to({x:1342.3,y:134.5},0).wait(1).to({x:1324.6,y:133.1},0).wait(1).to({x:1307,y:131.9},0).wait(1).to({x:1289.4,y:130.8},0).wait(1).to({x:1271.9,y:129.9},0).wait(1).to({x:1254.3,y:129.1},0).wait(1).to({x:1236.9,y:128.5},0).wait(1).to({x:1219.4,y:128},0).wait(1).to({x:1202.1,y:127.7},0).wait(1).to({x:1184.7,y:127.6},0).wait(1).to({x:1167.4},0).wait(1).to({x:1150.1,y:127.7},0).wait(1).to({x:1132.9,y:128.1},0).wait(1).to({x:1115.7,y:128.5},0).wait(1).to({x:1098.5,y:129.2},0).wait(1).to({x:1081.4,y:130},0).wait(1).to({x:1064.3,y:130.9},0).wait(1).to({x:1047.2,y:132},0).wait(1).to({x:1030.2,y:133.3},0).wait(1).to({x:1013.3,y:134.7},0).wait(1).to({x:996.3,y:136.3},0).wait(1).to({x:979.4,y:138},0).wait(1).to({x:962.6,y:139.9},0).wait(1).to({x:945.8,y:142},0).wait(1).to({x:929,y:144.2},0).wait(1).to({x:912.2,y:146.5},0).wait(1).to({x:895.5,y:149.1},0).wait(1).to({x:878.9,y:151.7},0).wait(1).to({x:862.2,y:154.5},0).wait(1).to({x:845.6,y:157.5},0).wait(1).to({x:829.1,y:160.7},0).wait(1).to({x:812.6,y:164},0).wait(1).to({x:796.1,y:167.4},0).wait(1).to({x:779.6,y:171},0).wait(1).to({x:763.2,y:174.8},0).wait(1).to({x:746.9,y:178.7},0).wait(1).to({x:730.5,y:182.8},0).wait(1).to({x:714.2,y:187.1},0).wait(1).to({x:698,y:191.5},0).wait(1).to({x:681.7,y:196.1},0).wait(1).to({x:665.6,y:200.8},0).wait(1).to({x:649.4,y:205.7},0).wait(1).to({x:633.3,y:210.7},0).wait(1).to({x:617.2,y:215.9},0).wait(1).to({x:601.2,y:221.2},0).wait(1).to({x:585.2,y:226.7},0).wait(1).to({x:569.2,y:232.4},0).wait(1).to({x:553.3,y:238.2},0).wait(1).to({x:537.4,y:244.2},0).wait(1).to({x:521.5,y:250.4},0).to({_off:true},1).wait(1));

	// start-btn
	this.instance_1 = new lib.stopIntroBtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(978.3,667.5,1,1,0,0,0,76.1,25.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.introBtn = new lib.stopIntroBtn();
	this.introBtn.name = "introBtn";
	this.introBtn.parent = this;
	this.introBtn.setTransform(978.3,667.5,1,1,0,0,0,76.1,25.7);
	new cjs.ButtonHelper(this.introBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.introBtn}]},59).wait(1));

	// Layer_1
	this.instance_2 = new lib.introBg();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1620.2,768);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Artwork 4(3).ai
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(63.5,99.9,1,1,0,0,0,63.5,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:94.1},0).wait(1).to({y:88.3},0).wait(1).to({y:82.4},0).wait(1).to({y:76.6},0).wait(1).to({y:70.8},0).wait(1).to({y:64.9},0).wait(1).to({y:59.1},0).wait(1).to({y:53.3},0).wait(1).to({y:47.4},0).wait(1).to({y:41.6},0).wait(1).to({y:35.8},0).wait(1).to({y:29.9},0).wait(1).to({y:24.1},0).wait(1).to({y:18.3},0).wait(1).to({y:12.4},0).wait(1).to({y:6.6},0).wait(1).to({y:0.8},0).wait(1).to({y:-5.1},0).wait(1).to({y:-10.9},0).wait(1).to({y:-16.7},0).wait(1).to({y:-22.6},0).wait(1).to({y:-28.4},0).wait(1).to({y:-34.2},0).wait(1).to({y:-40.1},0).wait(17).to({y:-30.7},0).wait(1).to({y:-21.4},0).wait(1).to({y:-12.1},0).wait(1).to({y:-2.7},0).wait(1).to({y:6.6},0).wait(1).to({y:15.9},0).wait(1).to({y:25.3},0).wait(1).to({y:34.6},0).wait(1).to({y:43.9},0).wait(1).to({y:53.3},0).wait(1).to({y:62.6},0).wait(1).to({y:71.9},0).wait(1).to({y:81.3},0).wait(1).to({y:90.6},0).wait(1).to({y:99.9},0).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,127.1,199.8);


(lib.zoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(41));

	// Armature_15
	this.ikNode_8 = new lib.larm();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.parent = this;
	this.ikNode_8.setTransform(71.8,176.8,1,1,0,0,0,19.5,82.4);

	this.ikNode_7 = new lib.uarm();
	this.ikNode_7.name = "ikNode_7";
	this.ikNode_7.parent = this;
	this.ikNode_7.setTransform(96.4,117.9,1,1,0,0,0,32.1,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_7,p:{rotation:0,y:117.9,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:0,x:71.8,y:176.8,regX:19.5}}]},20).to({state:[{t:this.ikNode_7,p:{rotation:-5.4,y:117.8,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.3,rotation:-10.5,x:77.4,y:178.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-10.8,y:117.7,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:-20.9,x:83.2,y:180.3,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-16.2,y:117.7,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:-31.4,x:89.1,y:181.3,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-21.5,y:117.7,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:-41.9,x:95.2,y:181.6,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-15.1,y:117.7,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:-36,x:88,y:181.1,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-8.6,y:117.8,regX:32.1,regY:9.9,x:96.4}},{t:this.ikNode_8,p:{regY:82.4,rotation:-30.1,x:80.8,y:179.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-2.1,y:117.8,regX:32,regY:10,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-24.2,x:74,y:177.5,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:4.4,y:117.6,regX:32.1,regY:9.8,x:96.3}},{t:this.ikNode_8,p:{regY:82.3,rotation:-18.3,x:67.3,y:174.4,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:10.9,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-12.4,x:61.2,y:170.9,regX:19.6}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:12.3,y:117.6,regX:32.1,regY:9.8,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-12.7,x:59.8,y:170,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:13.6,y:117.6,regX:32.1,regY:9.8,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-13,x:58.6,y:169.1,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:15,y:117.6,regX:32.1,regY:9.8,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-13.3,x:57.4,y:168.2,regX:19.6}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:16.4,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-13.6,x:56.2,y:167.2,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:17.8,y:117.6,regX:32,regY:9.8,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-13.9,x:55.1,y:166.2,regX:19.6}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:19.2,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-14.2,x:53.8,y:165.3,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:20.6,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-14.4,x:52.8,y:164.1,regX:19.6}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:22,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-14.7,x:51.5,y:163.1,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:23.4,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-15,x:50.6,y:161.9,regX:19.6}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:24.7,y:117.8,regX:32.1,regY:10,x:96.1}},{t:this.ikNode_8,p:{regY:82.3,rotation:-15.3,x:49.4,y:160.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:9.7,y:117.7,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.3,rotation:-22.4,x:62.1,y:171.4,regX:19.4}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-5.4,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-29.6,x:77.4,y:178.5,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-20.4,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-36.7,x:93.9,y:181.3,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-35.5,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-43.9,x:110.4,y:179.7,regX:19.4}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-50.6,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-51,x:126.1,y:173.9,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-46.7,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-47.1,x:122.2,y:175.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-42.8,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-43.3,x:118.3,y:177.4,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-38.9,y:117.6,regX:32,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-39.4,x:114.2,y:178.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-35.1,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-35.6,x:110,y:179.8,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-31.2,y:117.6,regX:32,regY:9.9,x:96.1}},{t:this.ikNode_8,p:{regY:82.4,rotation:-31.7,x:105.7,y:180.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-27.3,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-27.8,x:101.4,y:181.1,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-23.4,y:117.6,regX:32.1,regY:10,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-24,x:97.1,y:181.3,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-19.5,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-20.1,x:92.8,y:181.2,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-15.7,y:117.7,regX:32,regY:10,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-16.3,x:88.4,y:180.9,regX:19.4}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-11.8,y:117.6,regX:32,regY:9.9,x:96.1}},{t:this.ikNode_8,p:{regY:82.4,rotation:-12.4,x:84.2,y:180.2,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-7.9,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-8.6,x:80,y:179.2,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-4,y:117.6,regX:32.1,regY:9.9,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:-4.7,x:75.9,y:178,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:-0.2,y:117.6,regX:32.1,regY:9.9,x:96.3}},{t:this.ikNode_8,p:{regY:82.4,rotation:-0.8,x:71.8,y:176.5,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:3.7,y:117.7,regX:32.1,regY:10,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:3,x:67.8,y:174.7,regX:19.5}}]},1).to({state:[{t:this.ikNode_7,p:{rotation:3.7,y:117.7,regX:32.1,regY:10,x:96.2}},{t:this.ikNode_8,p:{regY:82.4,rotation:3,x:67.8,y:174.7,regX:19.5}}]},1).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(64.4,231.7,1,1,0,0,0,64.4,231.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C69C6D").s().p("AgDBzQgGAAgEgDQgFgFAAgGIAAjKQAAgFAFgFQAEgDAGAAIAIAAQAGAAAEADQAEAFAAAFIAADKQAAAGgEAFQgEADgGAAg");
	this.shape.setTransform(68.6,88.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C69C6D").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape_1.setTransform(63.5,99.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#445431").s().p("AABFZQgXgSgEgdIhZp9ICNgUIBZJ9QAEAegSAXQgSAYgdAEIgLABQgXAAgTgPg");
	this.shape_2.setTransform(67.1,140.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#445431").s().p("AiGF5QghgMgPggQgPggALghIDUpRQAMggAggPQAggPAhALQAhAMAPAgQAPAggLAhIjVJRQgLAhggAPQgSAIgTAAQgOAAgOgFg");
	this.shape_3.setTransform(83.5,139.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6D451D").ss(5).p("ADVGuIiGAAQhuAAhOhPQhOhOAAhuIAAlFQAAhvBOhOQBOhOBuAA");
	this.shape_4.setTransform(93.7,150.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6D451D").s().p("AlKAaIAAgzIKVAAIAAAzg");
	this.shape_5.setTransform(67.6,162.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#677F4E").s().p("AAYH7IAAk4IgvAAIAAE4InKAAIAAnAQAAjqCNimQCNilDHAAQDIAACNClQCNCmAADqIAAHAg");
	this.shape_6.setTransform(67.6,199.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#677F4E").s().p("AlKE+IAAmDQgBhmBKhJQBIhJBnAAIClAAQBnAABIBJQBKBJgBBmIAAGDg");
	this.shape_7.setTransform(67.6,133);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#677F4E").s().p("AihBdIAAiYQAAgOAKgJQAJgKAOAAIAiAAQAUAAARAJQARAKAKARIAeAyIAfgyQAKgRARgKQARgJATAAIAjAAQAOAAAKAKQAJAJABAOIAACYg");
	this.shape_8.setTransform(67.6,96.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333D24").s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_9.setTransform(87.8,441.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333D24").s().p("AkiA3IAAhuIJFAAIAABvg");
	this.shape_10.setTransform(69.5,457.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A67C52").s().p("AgRB9QgWAAgQgQQgQgQAAgWIAAiNQAAgWAQgQQAQgQAWAAIAjAAQAWAAAQAQQAPAQAAAWIAACNQAAAWgPAQQgQAQgWAAg");
	this.shape_11.setTransform(87.8,314);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#A67C52").s().p("AhqA8IAAh3IDVAAIAAB3g");
	this.shape_12.setTransform(87.8,256.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C69C6D").s().p("AgaJBQghAAgYgXQgXgYAAghIAAwxIDVAAIAAQxQAAAhgXAYQgYAXghAAg");
	this.shape_13.setTransform(87.8,277.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8DFD9").s().p("AiHBKIAAiTIEPAAIAACTg");
	this.shape_14.setTransform(87.8,353.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F7EEE7").s().p("AhqISIAAwjIDVAAIAAQjg");
	this.shape_15.setTransform(87.8,399.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C69C6D").s().p("AhqKzIAA0VQAAghAXgXQAYgYAhAAIA1AAQAhAAAYAYQAXAXAAAhIAAUVg");
	this.shape_16.setTransform(87.8,383.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E6B4C").s().p("AgRB9QgWAAgQgQQgQgQAAgWIAAiNQAAgWAQgQQAQgQAWAAIAjAAQAWAAAQAQQAPAQAAAWIAACNQAAAWgPAQQgQAQgWAAg");
	this.shape_17.setTransform(47.4,314);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E6B4C").s().p("AhqA8IAAh3IDVAAIAAB3g");
	this.shape_18.setTransform(47.4,256.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AD8660").s().p("AgaJBQghAAgXgXQgYgYAAghIAAwxIDVAAIAAQxQAAAhgYAYQgXAXghAAg");
	this.shape_19.setTransform(47.4,277.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#262D1A").s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_20.setTransform(47.4,441.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#262D1A").s().p("AkiA3IAAhuIJFAAIAABvg");
	this.shape_21.setTransform(29.1,457.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DBCDC6").s().p("AiHBKIAAiTIEPAAIAACTg");
	this.shape_22.setTransform(47.4,353.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E0D8D3").s().p("AhqISIAAwjIDVAAIAAQjg");
	this.shape_23.setTransform(47.4,399.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AD8660").s().p("AhqKzIAA0VQAAghAYgXQAXgYAhAAIA1AAQAhAAAXAYQAYAXAAAhIAAUVg");
	this.shape_24.setTransform(47.4,383.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#6D451D").s().p("AhZHvQh6AAhXhWQhWhXAAh6IAAmPQAAh6BWhWQBXhXB6AAICzAAQB6AABXBXQBWBWAAB6IAAGPQAAB6hWBXQhXBWh6AAg");
	this.shape_25.setTransform(90.4,152.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AD8660").s().p("AhOBQQghghAAgvQAAgtAhghQAgghAuAAQAuAAAhAhQAhAhAAAtQAAAvghAhQghAgguAAQguAAggggg");
	this.shape_26.setTransform(1.2,252.8,1,1,30);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#445431").s().p("AhUGOIAArTQAAgeAVgVQAVgVAeAAIAZAAQAdAAAVAVQAWAVAAAeIAALTg");
	this.shape_27.setTransform(21,214.4,1,1,30);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333D24").s().p("AmwAZQgPAAgLgLQgLgLAAgOIAAgNIOrAAIAAANQAAAOgKALQgLALgPAAg");
	this.shape_28.setTransform(67.6,38.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#445431").s().p("AmwAxQgPAAgLgKQgLgMAAgPIAAgXQAAgPALgLQALgLAPAAINiAAQAPAAALALQAKALAAAPIAAAXQAAAPgKAMQgLAKgPAAg");
	this.shape_29.setTransform(67.6,35.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#677F4E").s().p("AlDCnIAAhaQAAhkBHhIQBHhHBlAAICiAAQBkAABIBHQBHBIAABkIAABag");
	this.shape_30.setTransform(67.6,16.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#9ADDE8").s().p("Ag/AMQAAgiAZgZQAZgZAiAAQAWAAAVALIhkCGQgbgZAAgkg");
	this.shape_31.setTransform(53.2,56.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#9ADDE8").s().p("Ag/AMQAAgiAZgZQAZgZAiAAQAWAAAVALIhkCGQgbgZAAgkg");
	this.shape_32.setTransform(77.9,56.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#EF20C8").ss(2.3).p("AgVAAIArAA");
	this.shape_33.setTransform(67.4,58);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EF20C8").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAgggggAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_34.setTransform(80,58);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B9F7F9").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAggggg");
	this.shape_35.setTransform(80,58);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EF20C8").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAgggggAg7g7QgZAZAAAiQAAAjAZAZQAZAZAiAAQAjAAAZgZQAZgZAAgjQAAgigZgZQgZgZgjAAQgiAAgZAZg");
	this.shape_36.setTransform(55.2,58);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B9F7F9").s().p("AhLBMQgggfAAgtQAAgrAgggQAgggArAAQAtAAAfAgQAgAgAAArQAAAtggAfQgfAggtAAQgrAAggggg");
	this.shape_37.setTransform(55.2,58);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#2D1709").s().p("ACQCdQhFAAhAgbQg/gagxgxQAAAAAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQAAAAAAAAQgBAqgdAdQgeAegpAAIgYAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAIAAh4QgBhOBEg4QBEg5BfAAQBgAABEA5QBDA4AABOIAAB4QAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAg");
	this.shape_38.setTransform(67.6,34.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A67C52").s().p("ACDCdQg/AAg6gbQg5gagtgxQAAgBAAAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAqgbAdQgaAegmAAIgWAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAIAAh4QABhOA9g4QA+g5BWAAQBYAAA9A5QA9A4ABBOIAAB4QAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAg");
	this.shape_39.setTransform(67.6,36.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A67C52").s().p("AiUBAQg9g9gBhWIAAgqQADBUA7A6QA+A+BWAAQBYAAA9g+QA7g6ADhUIAAAqQgBBWg9A9Qg9A+hYAAQhWAAg+g+g");
	this.shape_40.setTransform(67.6,72.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C69C6D").s().p("AgzFHQhCAAgvguQgtgugBhCIAAlSQABhBAtguQAvguBCAAIBoAAQBBAAAvAuQAtAvABBAIAAFSQgBBCgtAuQgvAuhBAAg");
	this.shape_41.setTransform(67.6,48.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8C6239").s().p("AhZCNIAAjVQgBgdAVgTQATgUAcAAIAsAAQAdAAATAUQAVATAAAdIAADVg");
	this.shape_42.setTransform(67.6,87.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#160A03").s().p("AgzFHQhCAAgvguQgtgugBhCIAAlSQABhBAtguQAvguBCAAIBoAAQBBAAAvAuQAtAuABBBIAAFSQgBBCgtAuQgvAuhBAAg");
	this.shape_43.setTransform(67.6,61.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#2D1709").s().p("AiVCWQg+g+AAhYQAAhWA+g/QA/g+BWAAQBYAAA+A+QA+A/AABWQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape_44.setTransform(88.7,103.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#2D1709").s().p("AiVCWQg+g+AAhYQAAhXA+g+QA+g+BXAAQBYAAA+A+QA+A+AABXQAABYg+A+Qg+A+hYAAQhXAAg+g+g");
	this.shape_45.setTransform(46.6,103.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#2D1709").s().p("AhPJcQhlAAhGhHQhHhHAAhkIAArUQAAhkBHhGQBGhHBlAAICgAAQBjAABIBHQBGBGAABkIAALUQAABkhGBHQhIBHhjAAg");
	this.shape_46.setTransform(67.6,71.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#445431").s().p("Ag7F3QgZgYAAgkIAAp1QAAgjAZgZQAZgZAiAAQAjAAAZAZQAZAYAAAkIAAJ1QAAAkgZAYQgYAagkAAQgiAAgZgag");
	this.shape_47.setTransform(35.1,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape_47,p:{y:143.2}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{rotation:30,x:21,y:214.4}},{t:this.shape_26,p:{rotation:30,x:1.2,y:252.8}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:139.7}},{t:this.shape_2,p:{y:140.5}},{t:this.shape_1,p:{y:99.1}},{t:this.shape,p:{y:88.9}}]},9).to({state:[{t:this.shape_47,p:{y:149.7}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{rotation:0,x:35.4,y:220.5}},{t:this.shape_26,p:{rotation:0,x:37.5,y:263.6}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:146.2}},{t:this.shape_2,p:{y:147}},{t:this.shape_1,p:{y:105.6}},{t:this.shape,p:{y:95.4}}]},10).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_47,p:{y:149.7}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27,p:{rotation:0,x:35.4,y:220.5}},{t:this.shape_26,p:{rotation:0,x:37.5,y:263.6}},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{y:146.2}},{t:this.shape_2,p:{y:147}},{t:this.shape_1,p:{y:105.6}},{t:this.shape,p:{y:95.4}}]},35).wait(1));

	// Armature_17
	this.ikNode_9 = new lib.buarm();
	this.ikNode_9.name = "ikNode_9";
	this.ikNode_9.parent = this;
	this.ikNode_9.setTransform(34,121.7,1,1,0,0,0,7.4,12.1);

	this.ikNode_10 = new lib.blarm();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.parent = this;
	this.ikNode_10.setTransform(34.9,189.5,0.997,0.997,0,0,0,10.2,10.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:0,x:34.9,y:189.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:0,regY:12.1,y:121.7,regX:7.4,x:34}}]},20).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:6.5,x:35.3,y:189.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:-0.5,regY:12.1,y:121.7,regX:7.4,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:12.9,x:35.9,y:189.4,regY:10.5}},{t:this.ikNode_9,p:{rotation:-0.9,regY:12.2,y:121.8,regX:7.4,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:19.4,x:36.6,y:189.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:-1.4,regY:12.1,y:121.7,regX:7.4,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:25.9,x:37.2,y:189.3,regY:10.5}},{t:this.ikNode_9,p:{rotation:-1.9,regY:12.1,y:121.7,regX:7.4,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:39,x:40.1,y:189,regY:10.5}},{t:this.ikNode_9,p:{rotation:-4.4,regY:12.1,y:121.5,regX:7.5,x:34.1}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:52.1,x:43.1,y:188.8,regY:10.5}},{t:this.ikNode_9,p:{rotation:-6.9,regY:12.1,y:121.5,regX:7.4,x:33.9}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:65.2,x:46,y:188.3,regY:10.5}},{t:this.ikNode_9,p:{rotation:-9.4,regY:12.1,y:121.6,regX:7.4,x:33.9}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:78.4,x:48.9,y:187.7,regY:10.5}},{t:this.ikNode_9,p:{rotation:-11.9,regY:12.2,y:121.7,regX:7.4,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:91.5,x:51.8,y:187,regY:10.5}},{t:this.ikNode_9,p:{rotation:-14.4,regY:12.1,y:121.5,regX:7.4,x:33.9}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:100.9,x:43.9,y:187.2,regY:10.5}},{t:this.ikNode_9,p:{rotation:-8.7,regY:12.1,y:121.5,regX:7.4,x:33.5}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:110.4,x:36.4,y:186.4,regY:10.5}},{t:this.ikNode_9,p:{rotation:-2.9,regY:12.1,y:121.5,regX:7.4,x:33}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:119.9,x:29.1,y:184.9,regY:10.6}},{t:this.ikNode_9,p:{rotation:2.8,regY:12.1,y:121.5,regX:7.4,x:32.5}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:129.4,x:22.2,y:182.6,regY:10.5}},{t:this.ikNode_9,p:{rotation:8.5,regY:12.1,y:121.5,regX:7.4,x:32}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:138.8,x:15.7,y:179.8,regY:10.5}},{t:this.ikNode_9,p:{rotation:14.2,regY:12.1,y:121.4,regX:7.4,x:31.5}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:148.3,x:9.6,y:176.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:19.9,regY:12.1,y:121.3,regX:7.4,x:31.1}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:153.3,x:6.2,y:174.7,regY:10.5}},{t:this.ikNode_9,p:{rotation:24.2,regY:12.2,y:121.5,regX:7.4,x:31.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:158.4,x:3,y:172.7,regY:10.5}},{t:this.ikNode_9,p:{rotation:28.4,regY:12.1,y:121.4,regX:7.4,x:32.4}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:163.4,x:-0.2,y:170.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:32.7,regY:12.1,y:121.4,regX:7.4,x:33}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:168.4,x:-2.8,y:168.1,regY:10.5}},{t:this.ikNode_9,p:{rotation:36.9,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:162.5,x:7.7,y:176.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:24.5,regY:12.1,y:121.4,regX:7.5,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:156.6,x:20.2,y:182.8,regY:10.5}},{t:this.ikNode_9,p:{rotation:12.1,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:150.7,x:34.3,y:185.8,regY:10.5}},{t:this.ikNode_9,p:{rotation:-0.3,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:144.9,x:48.9,y:185.8,regY:10.5}},{t:this.ikNode_9,p:{rotation:-12.7,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:139,x:63.6,y:182.5,regY:10.5}},{t:this.ikNode_9,p:{rotation:-25.1,regY:12.1,y:121.4,regX:7.5,x:34}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:128.9,x:61.6,y:183.3,regY:10.5}},{t:this.ikNode_9,p:{rotation:-23.3,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:118.8,x:59.6,y:184.2,regY:10.5}},{t:this.ikNode_9,p:{rotation:-21.4,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:108.8,x:57.6,y:185,regY:10.5}},{t:this.ikNode_9,p:{rotation:-19.6,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:98.7,x:55.5,y:185.6,regY:10.5}},{t:this.ikNode_9,p:{rotation:-17.8,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:88.7,x:53.5,y:186.2,regY:10.5}},{t:this.ikNode_9,p:{rotation:-15.9,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:78.6,x:51.3,y:186.6,regY:10.5}},{t:this.ikNode_9,p:{rotation:-14.1,regY:12.2,y:121.5,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.1,rotation:68.6,x:49.2,y:187.2,regY:10.5}},{t:this.ikNode_9,p:{rotation:-12.3,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:58.5,x:47,y:187.7,regY:10.5}},{t:this.ikNode_9,p:{rotation:-10.4,regY:12.1,y:121.4,regX:7.5,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:48.5,x:44.8,y:188.1,regY:10.6}},{t:this.ikNode_9,p:{rotation:-8.6,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:38.4,x:42.7,y:188.3,regY:10.5}},{t:this.ikNode_9,p:{rotation:-6.8,regY:12.1,y:121.4,regX:7.4,x:33.8}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:28.4,x:40.5,y:188.6,regY:10.5}},{t:this.ikNode_9,p:{rotation:-5,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:18.3,x:38.3,y:189,regY:10.6}},{t:this.ikNode_9,p:{rotation:-3.1,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:8.2,x:36.1,y:188.9,regY:10.5}},{t:this.ikNode_9,p:{rotation:-1.3,regY:12.1,y:121.4,regX:7.5,x:33.9}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:-1.8,x:34,y:189,regY:10.5}},{t:this.ikNode_9,p:{rotation:0.5,regY:12.1,y:121.4,regX:7.4,x:33.7}}]},1).to({state:[{t:this.ikNode_10,p:{regX:10.2,rotation:-1.8,x:34,y:188.9,regY:10.5}},{t:this.ikNode_9,p:{rotation:0.5,regY:12.1,y:121.4,regX:7.4,x:33.6}}]},1).wait(1));

	// shadow(1).ai
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#191313").s().p("AsGBfQgnAAgcgcQgcgcAAgnIAAAAQAAgnAcgbQAcgcAnAAIYNAAQAoAAAbAcQAcAbAAAnIAAAAQAAAngcAcQgbAcgoAAg");
	this.shape_48.setTransform(61,469.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,0,174,479);


(lib.bush = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00251F").s().p("AMuTtQgHgLgHgpQg4ljiglbQiZlLjwlHQjOkbkhkuIkYkVQj4j2ADgEQAJgKDZDGQCfCRBTBRQEwEmDVERQD/FCCkFLQC2FxA+FtQARBkgLAvQgCANgEAAQgCAAgDgEg");
	this.shape.setTransform(123.6,204.5,0.904,0.904);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003944").s().p("AhAAuQgMgEgGgMQgGgNAGgMQAFgJAPgEQAJgCARgCQApgHAVgGQAjgIAZgNIgzAmIgtAkQgbATgSAAIgJgBg");
	this.shape_1.setTransform(197.8,279.1,0.904,0.904);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003944").s().p("AghA1QgSgPAJgNQACgEAZgVQAWgRAMgNQATgUAIgTQgKBbgCAKQgLAmgXAAQgNAAgUgRg");
	this.shape_2.setTransform(75.1,100.7,0.904,0.904);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003944").s().p("AgOglQA+hTAlA9QARAcgSARQgJAJgmAOQgrATgYANQglAVgZAYQAshQAigrg");
	this.shape_3.setTransform(64.2,117.5,0.904,0.904);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#003944").s().p("AgQBJQgZgIgEgQQgEgQARgRIArgpQAZgaAKgYQgCAVgCBNQgJA1ghAAQgHAAgJgDg");
	this.shape_4.setTransform(81.3,108.7,0.904,0.904);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003944").s().p("AgHgXQASgYAPgDQASgEATAWQAWAYgLAOQgJALghAHIg2ALQghAHgWAKQAfgaAngxg");
	this.shape_5.setTransform(185.7,289.8,0.904,0.904);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#003944").s().p("Ag5AVQgLgUADgJQAEgKAWgEIA3gHQAfgHATgPIgYApQgRAdgMAOQgQATgPAAQgUAAgTgfg");
	this.shape_6.setTransform(193.8,267.3,0.904,0.904);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003944").s().p("AgQgmQBvh1ApA3QAcAng5AgQgeASg3ARQhtAyg5A+QBXhzApgpg");
	this.shape_7.setTransform(164.1,255.3,0.904,0.904);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#003944").s().p("AhLAjIBGhDQAtgsATgMQAvgdAaAfQAiAog2AfQgFADhRAeQhxArg5AqQAZgXAsgtg");
	this.shape_8.setTransform(138.3,211.3,0.904,0.904);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#003944").s().p("AgGgjQBzhkAfA1QAYAqg/AfIhgAiQgzAVgaANQgrAVgfAWQBQhWA8gzg");
	this.shape_9.setTransform(105,171,0.904,0.904);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003944").s().p("AgEgXQAogkAVArQALAWgJAIQgGAGgaABQg8ADgdAQQAjgsAXgTg");
	this.shape_10.setTransform(118.4,171,0.904,0.904);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003944").s().p("Ag9ATQAtgqAggcQBDg5AjAYQAmAagiAfQgWAVgoANQhKAZgbAKQg6AYgmAbIBMhKg");
	this.shape_11.setTransform(117,180.5,0.904,0.904);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003944").s().p("AhaAHQgBgcAegCQARgCAjAFQA/ACAmgYQgxAqgzAZQghASgUAAQgdAAAAgkg");
	this.shape_12.setTransform(193,257.2,0.904,0.904);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003944").s().p("AhtAWQghgoA4gKQAVgDA4ACQBTAFAwgKIhKAdQgwAWgfAKQgaAIgSAAQgXAAgLgNg");
	this.shape_13.setTransform(190.7,248.6,0.904,0.904);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#003944").s().p("AgtAnQgfgdA2gYQBDgYAMgLQgKAPgfA5QgTAbgSAAQgMAAgMgLg");
	this.shape_14.setTransform(182.3,238.4,0.904,0.904);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003944").s().p("AhLAZQgNgcAPgKQAJgHAhgDQBLgGAmgUIhOBNQgbAWgUAAQgVAAgLgZg");
	this.shape_15.setTransform(178,227.1,0.904,0.904);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#003944").s().p("AhgAvQgqgsBpgfQA1gQBZgQQgmASgxApIg2AwQgUAOgQAAQgQAAgMgOg");
	this.shape_16.setTransform(180.4,232.5,0.904,0.904);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#003944").s().p("Ag6gJQAGgSAvAFQA6AGAJgCQg8AfgQAFQgRAGgMAAQgaAAALghg");
	this.shape_17.setTransform(164.3,207.3,0.904,0.904);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#003944").s().p("Ah4AjQgLgmAxgMQAbgHA0gDQBNgNAxgXQhLA8g0AfQg0AggdAAQgbAAgIgbg");
	this.shape_18.setTransform(179.8,219.6,0.904,0.904);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#003944").s().p("AiOA1QgQgsCEgnQBEgVBngXQg/AfhKAwIhMA3QgbAPgSAAQgVAAgIgWg");
	this.shape_19.setTransform(171.4,206.5,0.904,0.904);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#003944").s().p("Ag5AQQgPgbAHgMQAHgLAeACQAeACATgCQAcgDATgMQgRASgpA7QgPASgPAAQgUAAgRggg");
	this.shape_20.setTransform(166.7,213.6,0.904,0.904);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#003944").s().p("AgzAGQgFgXArgDIBCgFIg3ApQgSAKgLAAQgQAAgEgUg");
	this.shape_21.setTransform(170.4,218.3,0.904,0.904);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#003944").s().p("AiLAqQgGgkA4gOQAfgJA3gGQBggYAwgZIiPBfQgzAigYAKQgRAGgNAAQgbAAgFgfg");
	this.shape_22.setTransform(167.3,195.1,0.904,0.904);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#003944").s().p("AhdAnQgkgnBlgaQAzgNBQgKQgmAPg6ApIgwAjQgPAIgMAAQgPAAgKgLg");
	this.shape_23.setTransform(156.9,191.8,0.904,0.904);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#003944").s().p("AhDATQgWgjBDgMQAigHA9gEQgUAKgyAzQgVASgRAAQgTAAgNgVg");
	this.shape_24.setTransform(154,188.4,0.904,0.904);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#003944").s().p("AhHABQgEgbARgDQAHgBAhAGQA3ALAkgIQgyAfgeAMQgTAIgOAAQgaAAgFgdg");
	this.shape_25.setTransform(147.4,183.9,0.904,0.904);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#003944").s().p("AggAaQg1giA3gPQAegHA7gHQgPAKgKAXQgLAagHAIQgHAIgKAAQgNAAgSgMg");
	this.shape_26.setTransform(143,179.2,0.904,0.904);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#003944").s().p("AiOA2QgYg0CJgmQBHgUBpgRQg9AUhJAyQgtAmggAUQgeATgTAAQgUAAgJgUg");
	this.shape_27.setTransform(146.5,168.7,0.904,0.904);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#003944").s().p("AgQAmQgUgFgMgQQgTgaAzgOQAZgIAtgHQgMALgJAWQgKAagHAIQgIAKgNAAIgLgBg");
	this.shape_28.setTransform(132.3,163.9,0.904,0.904);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#003944").s().p("AhzApQgKglAqgNQAYgHAwgGQBTgVAugcQhGBEgyAlQgyAmgdAAQgaAAgIgfg");
	this.shape_29.setTransform(132,156.1,0.904,0.904);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#003944").s().p("AguAPQgOgbArgIIBDgOIgtA3QgOAOgNAAQgOAAgKgUg");
	this.shape_30.setTransform(123,149.5,0.904,0.904);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#003944").s().p("AiAAnQgLgxB0gdQA7gPBdgNQg+AZhDA2QgqAkgYAMQgSAIgNAAQgYAAgHgdg");
	this.shape_31.setTransform(120.3,138.4,0.904,0.904);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#003944").s().p("Ag7AiQgNgaA3gYQBMgkAEgDIg2BSQgXAdgSAAQgQAAgLgWg");
	this.shape_32.setTransform(105.7,130.1,0.904,0.904);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#003944").s().p("AiBAqQgOgoA3gOQAdgIA3gFQAsgIAZgHQAngKAdgOQhOA8g4AhQg9AkggAAQgbAAgIgXg");
	this.shape_33.setTransform(106,124.9,0.904,0.904);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#003944").s().p("Ag4A0QgVgXAPgPQAHgIAhgNQA9gbAegfQgLASgnBLQgZAmgXAAQgOAAgNgOg");
	this.shape_34.setTransform(94,119.9,0.904,0.904);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#003944").s().p("AgaAOQAGhOgEgRIApBaQAZBGgoADIgCAAQgaAAAAhEg");
	this.shape_35.setTransform(61.6,89.6,0.904,0.904);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#003944").s().p("AgaBMIABhJQAAhOgKgoIA2B4QAjBfgmANQgIADgGAAQgXAAgFgog");
	this.shape_36.setTransform(65.7,92.9,0.904,0.904);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#003944").s().p("AAXAXIg/gRQgmgJgbgEQAvABBKgRQArgJAIAAQAeAAAHAaQAKAkgiADIgEAAQgSAAgjgKg");
	this.shape_37.setTransform(44.7,98.2,0.904,0.904);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003944").s().p("AANgaQCIgsgCBEQgCAkgsAAIhDgKQhvgMhFAhQBAgpBfgeg");
	this.shape_38.setTransform(47.4,102.5,0.904,0.904);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#003944").s().p("ABiAkQhNgWgPgCQhpgQhHAQQBUgdBogOQCbgWgCA8QgCAfgqAAQgNAAgQgCg");
	this.shape_39.setTransform(50.3,108.3,0.904,0.904);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#003944").s().p("AgPggQBShZAjAsQAZAigyAbQgbAPgyAPQhLAmgjAoQA6hVAlgng");
	this.shape_40.setTransform(64.9,125.7,0.904,0.904);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#003944").s().p("AgEgaQBxhsAPBEQAGAeguAYQgYANgtAQQg1AYgSAKQgoAVgbAVQA6g9A9g6g");
	this.shape_41.setTransform(75.3,137.2,0.904,0.904);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#003944").s().p("AgbgfQAvgwApgcQBJgzAaAkQAYAihHAoQglAVg7AXQh4BAg+BOQA7haBPhPg");
	this.shape_42.setTransform(82.2,151.3,0.904,0.904);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#003944").s().p("AgdgEQBFg0A1gfQBlg7AXAiQAcAnhwAxIiLAzQhIAcgmAQQg8AbguAbg");
	this.shape_43.setTransform(115.5,192.2,0.904,0.904);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#003944").s().p("AgGgSQAggYARgIQAmgTAUAOQA8ApiSAhQguALgVAGQgmALgbAOQBJg2AmgZg");
	this.shape_44.setTransform(129.6,193.2,0.904,0.904);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003944").s().p("AgBgcQB+hkAVApQASAihEAjQgjASg4ASIhOAlQgtAXgfAWICUiAg");
	this.shape_45.setTransform(132.3,202,0.904,0.904);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#003944").s().p("AgUgfQA3gkAbgMQA9gbAbAZQArAnhOAbIhpAWQhtAfhBA4QBPhSBBgrg");
	this.shape_46.setTransform(146.7,223.1,0.904,0.904);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#003944").s().p("AgEgKIBGgzQA1gbAUAhQAYAog8AXQgJAEhRAUIhPATQgvALggAMQA7gdBSg3g");
	this.shape_47.setTransform(149.2,231.8,0.904,0.904);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#003944").s().p("AilA2ICAg5IBYgpQA0gYAmgPQA1gUAXgGQA4gOAQAVQAeAriZAvIi4AsIiLAkQhPAXg4AZQA0gbBLgjg");
	this.shape_48.setTransform(144.2,242.9,0.904,0.904);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#003944").s().p("AgHgRQAvgkAUAYQAVAXgPALQgKAKgbACQgiAEgRADQgdAFgVALQAngmAagTg");
	this.shape_49.setTransform(172.9,260.5,0.904,0.904);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#003944").s().p("AgBgYQBxhDAXAmQAVAihBAVIhXAUIhIATQgpAMgeAPQBPg6A7gig");
	this.shape_50.setTransform(172,271.3,0.904,0.904);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#003944").s().p("AAEgOQBVgtAKgEQBGgaAPAtQAQAvhPATIhxAPIhhAQQg3AJgpAMQBPgfBug5g");
	this.shape_51.setTransform(171,280,0.904,0.904);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#003944").s().p("AgdgSQA0hGAGgFQAsgrAjAZQA/Atg+ArQghAXhKAdQhcAxgxArQAogwBGhbg");
	this.shape_52.setTransform(93.3,155.8,0.904,0.904);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#003944").s().p("AgQghQBQhSAiAwQAaAjgyAVQg9AQgNAFQhHAdgjAvQAfg8A7g7g");
	this.shape_53.setTransform(103.6,162.7,0.904,0.904);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#182E30").s().p("AM3UmQi7ABinhFQivhIh0iIIC+iPIjKAJQggAFgPAAQgZAAgOgOQgPgPgUgdIghgwIpdsrQgSgUgCgHQgEgJARgPIB2huIhpAHIgoAFQgcADgJgFQgIgFgMgWIgPgeIjJlDQgKgQAAgDQABgDAOgQIBMhTIh7gkQhaiNggiZQgah6AhhfQAph1B3ACQBOACBgAiQA9AVBoAyQD/B6EKC8IhMBWIBEgCQApgCAbABQARAAAFADQAEACAMAOIFrGoQAXAbA0A2QAtAyAXAkIAKAPQAAACgMAPIhPBjIB2gZIAYgEQAFAAAMAKQAdAaAkAzIA5BUQBoCUBECGQBbCyATCLQAHAyAAAKQAAAigTAQQgaAXg6AnIBOBBIAaAVQANAMAEANQAFAUgFAiIgLA1QgUBagxBJQgaAlgSAUQgeAhgaAIQgNAEgWAAIgkgBg");
	this.shape_54.setTransform(114.3,184.9,0.904,0.904);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00130F").s().p("AGYFQQgJhegIgxQgTh3ghhXQgXg9gfgzQgjg7gugwQgvgxg5ghQg5ggg5gNQhbgUh3ATQg+ALhPAXQgzAOAAgBQgBgDAygTQBFgaBHgOQB2gYBjAUQA9AMA8AiQA8AjAxAzQAxAzAjA7QAgA3AWA+QAhBaAQB4QAJBQABBCQABA1gDAAQgCAAgFg1g");
	this.shape_55.setTransform(200.3,294,0.904,0.904);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00130F").s().p("AjvFMQgEgwAAg8QABhSAOhNQAShlArhVQAZgwAggmQAcgkAnghQBEg4BIgWQA8gSAwADQAJAAAIABIAMACQALACgBABQAAABgKABIgNAAIgQABQgxACg2ATQhEAYhAA3QgnAjgYAfQggAqgWApQgqBVgTBfQgOBHgFBVIgDBrQgBAngCAAQgDAAgDgng");
	this.shape_56.setTransform(267.5,300.2,0.904,0.904);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00130F").s().p("ACfCFQgMgfgIgTQglhSg/g8QgogpgigSQgogUggAGQgbAEgTARIgKAKQgDADgBAAQgCAAACgGQACgGAGgHQAQgXAhgHQASgFAWADQAWADAWAKQAlASAsArQBDBBAfBXQALAeADAYQADAUgCAAIAAAAQgCAAgHgSg");
	this.shape_57.setTransform(208.9,316.4,0.904,0.904);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00130F").s().p("AiqCUQgCgbAEgiQAGgvARgoQAag7AmgiIAMgKIAMgIQAQgKAJgFQARgJAegOQAbgLAUgFQAMgDAKgBIAMAAIALADQAmAKAQAUQAHAIADAHQACAFgBABIgFgEQgGgGgGgEQgSgPgigHQgLgEgZAIQgVAHgWAKQgTAIgbAPIgWAOIgLAIIgLAJQgjAfgZA0QgSAogIArQgGAagDAgQgCAWgCAAQgDAAgCgWg");
	this.shape_58.setTransform(265.2,319.4,0.904,0.904);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00130F").s().p("ADaEmIgOhdQgMhJgRg+QgYhUgnhGQgphKg+g4Qg3gxg6gZQgrgSgtgIQgigEAAgCQAAgDAiABQApABA1ASQA+AXA6AyQBCA5AsBOQAnBHAYBZQARBCAIBIQAGA2ABAoQABAjgCAAIAAAAQgCAAgGgig");
	this.shape_59.setTransform(197.2,303.4,0.904,0.904);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00130F").s().p("AAuGJQgBgoAFg4IAGhAQAEgpABghQAEhPgbhVQgLgkgSgvIgehMQgihTgMgyQgMgrgCgzQABgjACAAQACAAADAiQAMBAAJAbQAPAwAjBRQAtBqARA3IALArIAIAsQAFAmgDAuQgBAigGApIgJBAQgIA7gCAjQgDAigBAAQgEAAgBgig");
	this.shape_60.setTransform(223.7,290.1,0.904,0.904);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00130F").s().p("AhdH4IgOgzQgKglgFggQgEgbgDg7QgDgwACgyQAEhqAvhxQAUgvAeg6IAxhfQA0hhAXhEQAMgfAHgjIAKg0QADgsACAAQACAAABAtQgEBEgSA2QgWBIgyBhIgvBgQgfA8gSAsQgvBvgFBkQgCAuABAzQACBAADAUQADAdAIAnIALA0QAHAsgDABQgBAAgMgrg");
	this.shape_61.setTransform(254.2,289,0.904,0.904);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00130F").s().p("AgXLNIgEioIgDj5QgBi9AIhzQAEg+AKhfIAPiSQAOiQgIhnQgGhegUhGQgFgUgDgFIgFgTQgGgPACAAQABgBAHAPIAIARIAJAZQAZBDAJBiQAKBugMCMIgOCTQgKBhgDA8QgGBfgCDPIgCD5QgCB5gCAvQgBA+gDAAQgCAAgCg+g");
	this.shape_62.setTransform(231.6,264,0.904,0.904);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00130F").s().p("AA1JhIgJiOQgPkEgTjPQgUjngdjsIgRiOQgGg0ACAAQADgBAJA0QALA4AOBVQAhDcAWD3QAXD4AFDdQACBOgBBAQAAA0gCABQgCAAgEg1g");
	this.shape_63.setTransform(225.7,272.5,0.904,0.904);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00130F").s().p("ABYJVQgRg3gVhRQgZhagYhwQgaiAgUh7QgUh8gPiAQgMhvgHhiQgFhTgBg5QgBgzACgBQADAAAEA0IAOCLQAIBVAPB6QASCHATB0QARBnAbCTQAXBwAVBcIAgCJQALAxgCACIAAAAQgCAAgQgxg");
	this.shape_64.setTransform(224.2,277.3,0.904,0.904);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00130F").s().p("AALJbQgFg3gFhVQgLjRgGj+QgFj6ADjUQAChTACg5QADgzACAAQACAAACAzQACAoABBkIATOcIADCMQABA0gDAAQgCAAgFgzg");
	this.shape_65.setTransform(237.9,276.7,0.904,0.904);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00130F").s().p("AAZJsIABiQQAAj1gNjnQgLjngaj1IgPiQQgGg1ADAAQACAAAJA0QAMA6ALBVQAeDiAOD7QAND0gIDpQgDBZgEA4QgEA1gCAAQgDAAAAg2g");
	this.shape_66.setTransform(238.1,278.4,0.904,0.904);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00130F").s().p("AA+EyQAJhOADhDQAFhcgLhUQgMhWghhVQgVg1gmhPIguhYQgQggACgBQACgCAUAfQAWAiAdAyQAnBFAaBAQAjBUANBbQALBXgGBdQgFBFgNBNQgKA6gJAnQgIAkgCAAQgDgBARiGg");
	this.shape_67.setTransform(225.5,300.1,0.904,0.904);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00130F").s().p("ABDGmQgCgBACgiIADhdIAAhAIgChKQgGhXgOhPQgMhLgahZIgXhGIgXg8QgOgigYgyQgPgfACgBQABgCATAdIAVAjQAUAlAEALIAaA8QAJAVAQAxQAaBRAPBVQAOBMAEBdIABBLQAAAZgDAoQgEA1gHAoQgFAigDAAIAAAAg");
	this.shape_68.setTransform(218.8,300.5,0.904,0.904);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00130F").s().p("ABbI8QgCgBAGgtIADg2QABgPgBg4QgDieg4j5Qgoi2hBjaIgkh4QgMgtACAAQACgBARArQAXA8ATA7QBCDEAuDLQA3D3gCClQgBAygDAWIgHA2QgJAtgDAAIAAAAg");
	this.shape_69.setTransform(215.3,282.7,0.904,0.904);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00130F").s().p("AA7DuQgOiFgYhtQgXhugqh/QgghiACAAQACgBAMAZQAPAcAQAoQAUAwARA6QAUBBAPBEQAPBFAHBBQAIA/ABAwQACAsgBAgQgCAbgCAAQgBAAgLhmg");
	this.shape_70.setTransform(227.9,296.5,0.904,0.904);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00130F").s().p("AgHEjQgDh5AAiqQAAipADh5QADh4AEAAQAFAAADB4QADB4AACqQAACrgDB4QgDB4gFAAQgEAAgDh4g");
	this.shape_71.setTransform(236.2,294.3,0.904,0.904);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00130F").s().p("AB1GyIgMhpIgJhIIgOhSQgRhegYhbQgWhXgghgIgdhOQgHgVgUguIgphhQgQgjACgBQACgCATAiQANAWAJASIAbA3QAOAeAPAkQANAdARAyQAkBiAWBVQAYBdAQBfQAHAwAEAjIAHBJQACAVABAnIABAuQgBAmgBAAIAAAAQgCAAgEgmg");
	this.shape_72.setTransform(227.1,288.8,0.904,0.904);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00130F").s().p("AASHfQgCAAAAgmIAAhnQgBidgKi1QgIizgRifIgLhmQgDglACgBQACAAAIAlQAJArAJA6QAWCbAKC4QAKDBgHCSQgCA9gEAqQgEAmgDAAIAAAAg");
	this.shape_73.setTransform(241.5,292,0.904,0.904);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00130F").s().p("AhnENIgFgdIgCgoIABgwQABgPAGgoQAKg7AZg+QAqhoBIheQAYggAVgVQARgTACACQABABgOAVIgmA5QhGBpgkBcQgYA6gMA7IgJA1IgEAuQgBAdACAnQABAagCAAIAAAAQgCAAgGgZg");
	this.shape_74.setTransform(268.8,302.9,0.904,0.904);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00130F").s().p("AhKGEIgEgnQgEgmAAgQIAAhAIACgkIADgmQAJhSARhUQAeiSA1iVQATgzAPgjQAPggACABQACABgKAhIgcBYQgyCogbB+QgQBUgLBQIgGBJIgDA/QgBAoACA1QABAigCAAQgCAAgGgig");
	this.shape_75.setTransform(262.6,291,0.904,0.904);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00130F").s().p("AgWGSQgDgmgCg4QgDiGAMiuQAJh4ASi8QANh/AEAAQAGAAgICAQgCApgTEKQgKCwgECEIgCBeQgBAigCAAIAAAAQgDAAgDgig");
	this.shape_76.setTransform(254.2,296.6,0.904,0.904);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00130F").s().p("ABSFrQgCgBAFgeIAFgjIACgVQACgOgBgLIAAg4IgDgfIgEghQgNhJgYhGQgkhmhKiRQg0hlADgBQAFgCA6BgQBNCFAoBzQAaBKAKBJIAEAiQABAKAAAWIgCA6QAAAOgHAhIgDAUIgFAPQgJAdgDAAIAAAAg");
	this.shape_77.setTransform(211.2,296.7,0.904,0.904);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00130F").s().p("ADXI6QgFgjgFgaQgLg+gEgSIgJguIgLgyIgahuQgkiEgqhyQgth7g1h0QgshbgGgLIguhXQgMgWgcgwQgVgkgLgRQgbgtACgCQACgBAfArIAiAzIAsBFIAxBXQANAXAnBOQA4B3AsB5QAqB0AjCFQAUBWAEAZIASBiQAEAWAHA7QAFAkABAZQAEA1gCAAQgDAAgHg0g");
	this.shape_78.setTransform(203.3,279.6,0.904,0.904);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00130F").s().p("ABuGtQACg8AAgtIgDhJQgBgYgGg7QgNhkgWhWQgYhcgjhZIghhNIgQgiIgQgfQgVgogeg0QgUghABgBQACgBAYAfIAaAlQAWAhAKASIASAfIARAiQAIARAbA8QAlBYAZBfQAWBbALBjQAFA7AAAZIABAnIAAAjQAAAWgEAnIgFAtQgGAmgCAAQgCAAABgng");
	this.shape_79.setTransform(215.5,289.2,0.904,0.904);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00130F").s().p("ABZJpIgTiQQgnkqgaivQghjjgqj1IgXiPQgIg1ACAAQACgBANA0QAPBDAPBLQArDVAmEDQAnEFAUDVQAHBMAFBFQADA1gCAAQgCAAgIg0g");
	this.shape_80.setTransform(227.9,275.2,0.904,0.904);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00130F").s().p("AgyIoQgDABABgsQABgnAEhQQALiaAajsIAqmGQAQiiADAAQADAAgBAsQAAAmgFBRQgJCKgcD9IgpGFIgNB2QgFAsgCAAIAAgBg");
	this.shape_81.setTransform(258.2,288,0.904,0.904);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00130F").s().p("Ag+J+QgBAAAEgzQAGhIAAhDQAAhIgKiGQgMiqAAhTQgCiOARhwQAPhuAhhcQAahKAhg1QAbgsADACIgXAuQgfA9gVBDQgdBdgNBrQgOBsABCPQABA4ADBKIAHB6QAHCEgDBLQgDBSgJA6QgJAygDAAIAAAAg");
	this.shape_82.setTransform(262.7,278.1,0.904,0.904);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00130F").s().p("AhFKvQgFg8gDhnQgChgABiRIgBkmQgCikAPiEQAPiGAihoQAahTAmhDQAfgzADABQABABgbA1QgjBJgWBOQgfBrgNCAQgMB+ABCoIABCYQAABKgBBEQgEC1AAA8QgBA4ACBqQABA8gCAAQgCAAgGg7g");
	this.shape_83.setTransform(254.4,269.4,0.904,0.904);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00130F").s().p("AgGKGQgEkOAAl4QAAl8ADkIQADkMAEAAQAEAAAEEMQADEGAAF+QABF2gEEQQgDELgEAAQgEAAgDkLg");
	this.shape_84.setTransform(240.5,256.8,0.904,0.904);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#578687").ss(4,1).p("AtEqVIaJUq");
	this.shape_85.setTransform(102.8,234.2,0.904,0.904);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#245B4E").s().p("AICM+IAZgwIg4AtQjKgRjFhMQjthbjbitQl1kniXmTIBlgsIh/ggQg1iqgIioQgDg1ACguIADgjQBvgqCzgLQFmgWFUCaIAIBtIAfhaQCpBRCdB9QG6FeCAHjQAoCXAECTQACBJgGArQgvAThRAPQh5AYh/AAQguAAgugDg");
	this.shape_86.setTransform(102.9,234.4,0.904,0.904);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#3F726A").ss(4.5,1).p("AAAykMAAAAlJ");
	this.shape_87.setTransform(210.6,172.2,0.904,0.904);

	this.instance = new lib.ClipGroup_3();
	this.instance.parent = this;
	this.instance.setTransform(220.8,175.2,0.904,0.904,0,0,0,114,149.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#3F7677").ss(3.8,1).p("ALiq6I3DV2");
	this.shape_88.setTransform(306.5,232,0.904,0.904);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(305.8,229.2,0.904,0.904,0,0,0,139.7,127.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#428A8C").ss(3.4,1).p("Aljs4ILGZx");
	this.shape_89.setTransform(118,135,0.904,0.904);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(118.2,135.1,0.904,0.904,0,0,0,59.2,104.8);

	this.instance_3 = new lib.ClipGroup_0();
	this.instance_3.parent = this;
	this.instance_3.setTransform(89.9,289.4,0.904,0.904,0,0,0,99.4,56.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#338287").ss(3.4,1).p("AMzFzI5lrl");
	this.shape_90.setTransform(330.1,280.2,0.904,0.904);

	this.instance_4 = new lib.ClipGroup();
	this.instance_4.parent = this;
	this.instance_4.setTransform(330.3,280.2,0.904,0.904,0,0,0,96.3,59.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#3C6B6B").ss(4.6,1).p("AIcxMMgQ3AiY");
	this.shape_91.setTransform(351.4,184.4,0.904,0.904);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#245B4E").s().p("Aq9SEQhLiwgejJIA7ARIhAgzQgejpAljvQAtkhCNkfQCCkKC4jKQCbiqC8h5IBKBmIAFiWQCyhlC7gyQBdgZA6gFIAsBSQAzBrAjB8QBvGMhaGlIh4AkIBtAMQg0DThlDOQkdJFn/EGQihBRikAoIiDAYQgggwgmhYg");
	this.shape_92.setTransform(351.3,184.4,0.904,0.904);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#081F06").s().p("AA0C4QhsgChYhFQhHg5hAhrIBABIQAmApAhAaQAoAeAzASQAyAQAyACQA3ABA3gmQAxgjAdg0QAWgnAJhAQADgVAGhZQAHBFgDAvQgDBCgWAsQgdA7g2AoQg5Aqg9AAIgBAAg");
	this.shape_93.setTransform(136.3,85.8,0.904,0.904);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#081F06").s().p("AgcBfQhPgTg+gyQhCg0gjhNQByCNCLAgQCGAeCbhUQhhBYh5AAQgoAAgqgJg");
	this.shape_94.setTransform(135.7,65.4,0.904,0.904);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#081F06").s().p("AgbBNQg+gQgugpQgwgrgSg9QBHBmBvAcQBtAcBwg4QgtAtg/APQgcAHgdAAQggAAgggIg");
	this.shape_95.setTransform(133.5,46.3,0.904,0.904);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#081F06").s().p("AgLAOQg7g0gng6QA+AgA6A0QA8AzAnA6Qg+gfg7g0g");
	this.shape_96.setTransform(134.6,24.3,0.904,0.904);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#081F06").s().p("AgSAAQgBhHAlg0IgEA+QgDAmAAAXQAAApAIBTQglgzAAhJg");
	this.shape_97.setTransform(140.5,17.4,0.904,0.904);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#081F06").s().p("Ah9CIQBsgRBAhLQBBhKAChuQAUA1gNA4QgNA0glAsQglArgyATQgiAOgjAAQgUAAgUgFg");
	this.shape_98.setTransform(158.5,26.1,0.904,0.904);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#081F06").s().p("AhMBhQBdgXA0gaQA4gbApgwQAogvAXg9QgOCXibBCQhlAri7AKQAggLB4gbg");
	this.shape_99.setTransform(175.1,42.4,0.904,0.904);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#081F06").s().p("AgFCCQgjgGg8gVQhegihAgoQBPAcBGATQBDATAaAFQA1AKAogJQBGgRAwhNQAUggAshtQghDdiGApQgYAHgbAAQgWAAgYgFg");
	this.shape_100.setTransform(183,64.9,0.904,0.904);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#081F06").s().p("ABaDbIhWjLQgnhfg9hzQgkhDhPiJQCbDDBZDRQAdBDAxCHQAxB3A0BIQhEhCg2hyg");
	this.shape_101.setTransform(148,42,0.904,0.904);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#030D08").s().p("AAOBnIhVg6QgxgjgbgeQBUAsAagbQAPgPgHgkQgCgOgNgnQgFgOgJgTIgTglQAiA3AaAcQAuAyAngNQAwgRADh2QABBrADBNQADBOAFAyIADAmQAEAbAKAJIiGhbg");
	this.shape_102.setTransform(136.8,25.5,0.904,0.904);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#030D08").s().p("AAcDWQgMgBgQAIQAPgOgBgSQgBgRgNgQIgTgPQgQgLgBgEQgBgEAFgMQAFgOgBgGQgDgQgSgKQgRgLgegDQAngVANgVQAQgdgmgVQgfgRg9gKQAfgDAEhCQACgfgEg7QAdAmAsAYQArAYAuAFQgcAfAkAuQAOATAXADIgMAIQgNAJgDAJQgKAdAjAUQAXAOAmAIQgmAPAPAmQALAcAfAdQglgMgfARQgeARgLAmQgFgPgRAAg");
	this.shape_103.setTransform(155.7,53.5,0.904,0.904);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#182E30").s().p("AhEAAQgEgUBAgLQBAgLALAgQAGAQgSANQgRALgbAEIgUABQgzAAgIgjg");
	this.shape_104.setTransform(142.9,52.2,0.904,0.904);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#182E30").s().p("AglAtQgZgDgRgLQgQgKABgLQABgZAngQQAhgOAsAAQAsAAATANQAVAPgbAXQgtAog1AAIgTgBg");
	this.shape_105.setTransform(146.2,70.7,0.904,0.904);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#182E30").s().p("ABiDUQg0gBgwgYQhjgyhLh7Qg1hUgziNQBNBzBUBXQAjAjAXATQAkAdAgAMQAuAQAqgXQAegRAlgtQAdgiAnAMQAnAKAKAsQAJArgZAoQgXAlgpAVQgsAWgzAAIgGAAg");
	this.shape_106.setTransform(134.3,89.9,0.904,0.904);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#182E30").s().p("ABpCvQgTgGghgSQhAgkg6g8Qg2g2grhEQACg2AGggQADgUADgEQAGgIALANQAZAdAiA5QAnBCARAWQAoA4AeAUQANAJAeAIQAeAIANAKQARALAIAPQALATgMANQgJAKgRAAQgMAAgRgGg");
	this.shape_107.setTransform(121.6,60.5,0.904,0.904);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#182E30").s().p("AAcBnQgqgggtgyIgpgvQgYgfgIgYQgLgjAtgWQAkBRA0A5QAjAoA4AWQAYAJAQAPQAWAVgOATQgKANgQAAQgcAAgvgkg");
	this.shape_108.setTransform(122.2,41.5,0.904,0.904);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#182E30").s().p("ABLCkQgPgGgggQQhcgwhFhkQBmhrggg9QAoAdApAKQAyALAngUQAMA5AHBHQAHBBAAA4IABAmQgBAagIAEQgEACgGAAQgOAAgagLg");
	this.shape_109.setTransform(134.2,20.1,0.904,0.904);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#182E30").s().p("AhUC2QgMgLATgdQAKgPASgWQApg9gDhCQgCgrgQgsQgQgqgagjQA7AAAsAVQA8AagCAzQgCAqgYA0QgRAkggAyQg6BfgdAAQgHAAgFgFg");
	this.shape_110.setTransform(168.3,23.4,0.904,0.904);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#182E30").s().p("AiWDNQgagCgIgJQgMgKAVgQQAWgRAtgUQAygVATgNQBLgxAahUQAYhPgYhcQAiAhAjAnIAlAoQAVAcAAAUQAAAVgOAdQgHAQgTAeQgxBQhDAoQg+AnhPAAQgUAAgWgDg");
	this.shape_111.setTransform(181.4,36.2,0.904,0.904);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#182E30").s().p("AgBD5QhvgRh9haQBKAEBJgHQBAgGAggKQA2gPAagjQAbglAVg5QAMggAThGQASg9AOhDQA5CMgVCIQgPBng5A/Qg3A9hMAAQgQAAgPgDg");
	this.shape_112.setTransform(188.5,60,0.904,0.904);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#030D08").s().p("AFVFzQgfg6iUiMIiiiTQiDh7huhNIhVg0QAKgTgBgRQgBgkg3ACIAVgvQAegtArALQAXAGgBAMQAAAGgOATQgeArAeAhQARASASAeQALATBFA8QBkBaDSDCQDeDPgCAEQgGAJgIAEQgEADgDAAQgHAAgFgJg");
	this.shape_113.setTransform(192.7,101.6,0.904,0.904);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#010C06").s().p("AjJJyQhggIhghWQhrhhg5iWQg2iMADiYQBxDhCdB3QAnAeAVALQAnAWAegFQAXgDAJgUQAJgSgGgXQgIgcgbgPQgYgOgfAAQgcAAgVgHQgXgHgXgPQgxghg0g4Qgeghg4hHQgYgbgMgPQgXgbgCgTQgCgTAFgeIAJgxQAKgzAMgnQAvBkAmA9QA2BVA+A0QAiAdAnAGQAwAIAWgnQAHgNAAgPQgBgPgJgLQgMgQgYgEIgqgEQg2gHg5gzQgkgfgyhBQgOgRgZgkIgKgNQgGgIgCgGQgDgIADgKIAGgSQAdhRAng8QAJCjCCBVQAcARAZAHQAlAJAMgZQALgYgcgYQgPgNgigRQg9gfgwhAQgTgZgRgeIgNgUQgJgPABgGQABgLAUgXIAcgeQAhgnALgUQAUgmADgpQAYAOAvAFQAXADA6gCIArgCIAVgBQAJABAIAIQAoAiATBnQADAQADA0QACArAIAXQATA6AsgjQAqgigCgvQgCg6gyhCQgggpg/g5QBTADBaAfQAqAOArAUQAPAHAcAPIAXAKQAQAIADAGQAIANgJAkQgDAOgLAiQgTA6gqA4QgXAeghAiIgOAOQgIAJgDAIQgLAZAWARQAgAXAwgaQAjgTAdgkQAug6AFhJQAFg/gZhPQBaA7BJBKIAiAjQAVAXgBARQAAAMgGATIgKAgQgeBmgYAlQguBGhZALQglAFgWAMQgjASAQAdQAMAXAhALQAcAKAdgDQBMgJA4hxQA1hrAGifQA2BGAcBJQAgBTgDBOQgEBLgjBHQglBLg6ApQhEAwhYgSQhAgNhXgzIgTgMQgMgHgJgCQgcgIgNAUQgLAQgBAdQgBA/gHApQgIA4gVAsQghBDhCAhQg0AZg+AAIgagBgAhFDkQgrAjAEAvQABAQAUgDQASgCAXgRQA6gqgSgiQgKgSgQAAQgQAAgVASgABpBIQgEAOAmAIQAlAJAFgRQAFgUgkgMQgKgDgIAAQgUAAgHAVgAi3BKQADASAngFQAogEgBgRQgBgIgNgIQgOgIgQgDIgKAAQgfAAAEAjgAAriCQgYAOAJAOQAGAKAcgOQAcgNgMgMQgFgGgIAAQgJAAgNAHgAjkihQgFAeAbADQAcADACgTQACgYgYgLQgHgEgFAAQgOAAgEAWgAhpkQQgeAXAcASQAZAPAjgVQAjgUgggUQgNgIgOAAQgRAAgRANg");
	this.shape_114.setTransform(159.2,56.7,0.904,0.904);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#0A2E16").s().p("AhngzQhYhIhehCIhNg0QgHhBAFgpQAKhRBCB8QA3BoE2EKIDLCtQBZBNgCANQgDAagmAPIglAKQhwjKkYjlg");
	this.shape_115.setTransform(195.4,103.7,0.904,0.904);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#00251F").s().p("ArKQEQAAirAfi0QA1k2Cak5QCLkYDYkRQC3jpEAj4QBJhHCEh4QC4ioAIAIQADAEjTDRIjtDrQj1EAivDwQjMEViBEYQiJEngvEsQgaCmAACGQANELABAAIgBAAQgPAAgTkwg");
	this.shape_116.setTransform(270.8,166.6,0.904,0.904);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#003944").s().p("AAJAYIglgfIgsggQAWALAdAHQASAFAjAGIAWAEQAMADAFAIQAEAJgEALQgFALgLADIgHABQgQAAgXgQg");
	this.shape_117.setTransform(208.8,206.3,0.904,0.904);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#003944").s().p("AgcAbQgDgLgHhKQAHAQAQARQAJAKATAQQAWARACADQAHALgQANQgQAOgMAAQgSAAgKggg");
	this.shape_118.setTransform(312.9,55,0.904,0.904);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#003944").s().p("AAbAjQgVgLglgQQgggNgHgGQgPgPAOgYQAfgzA1BFQAdAkAlBEQgVgUgfgRg");
	this.shape_119.setTransform(322.1,69.3,0.904,0.904);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#003944").s().p("AgjAUQgBhCgCgRQAIAUAWAWIAkAiQAOAPgDANQgEAOgVAHQgIACgGAAQgcAAgHgsg");
	this.shape_120.setTransform(307.5,61.8,0.904,0.904);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#003944").s().p("AAUAeIgugJQgcgGgHgKQgKgMATgUQAQgSAPADQANADAPAUQAjArAYAUQgSgIgcgGg");
	this.shape_121.setTransform(219,215.3,0.904,0.904);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#003944").s().p("AgKAcIgthHQAQANAbAFQAOADAfADQAUAEADAIQADAIgKAQQgQAbgRAAQgNAAgNgQg");
	this.shape_122.setTransform(212.2,196.4,0.904,0.904);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003944").s().p("AgRAFQgvgOgagPQgwgcAYggQAjgvBeBjQAjAjBJBhQgvgzhdgsg");
	this.shape_123.setTransform(237.4,186.1,0.904,0.904);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#003944").s().p("AgVAPIhJgbQgugaAdgiQAWgbAoAZQAQAKAmAlIB3ByQgwgihhgmg");
	this.shape_124.setTransform(259.2,148.8,0.904,0.904);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#003944").s().p("AgDAVQg1gPgcgOQg2gaAUgjQAbgtBhBUQAzArBEBJQgpgdhXgkg");
	this.shape_125.setTransform(287.5,114.7,0.904,0.904);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#003944").s().p("AAQAWQgOgDgYgBQgWgBgFgFQgIgHAKgSQARglAjAeQATARAeAlQgQgIgWgEg");
	this.shape_126.setTransform(276.1,114.7,0.904,0.904);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#003944").s().p("AAkAkIhWgeQghgKgUgSQgcgbAggWQAegVA4AxQAcAYAlAkIBBA+QgggXgxgUg");
	this.shape_127.setTransform(277.3,122.7,0.904,0.904);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#003944").s().p("AAHAWQgqgWgqgjQAgAUA1gCIAsgCQAaACgBAXQAAAegYAAQgRAAgdgOg");
	this.shape_128.setTransform(212.9,187.7,0.904,0.904);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#003944").s().p("AAcAXIhDgcIg/gYQAoAJBGgEQAvgDATAEQAvAHgcAiQgJAMgUAAQgPAAgVgHg");
	this.shape_129.setTransform(214.8,180.4,0.904,0.904);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#003944").s().p("AgNATQgagwgIgMQAKAJA4AUQAuAVgaAYQgKAJgKAAQgQAAgQgXg");
	this.shape_130.setTransform(221.9,171.8,0.904,0.904);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#003944").s().p("AgDAXQg0g0gOgNQAgASBAAFQAcACAIAGQANAJgLAXQgKAWgSAAQgRAAgXgUg");
	this.shape_131.setTransform(225.6,162.2,0.904,0.904);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#003944").s().p("AAcAoIgugoQgogigigQQASAFBnAWQBZAagjAlQgLALgNAAQgOAAgRgLg");
	this.shape_132.setTransform(223.5,166.8,0.904,0.904);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#003944").s().p("AAMAPQgUgHgsgYQAIACAxgFQAogEAFAPQAJAdgWAAQgJAAgQgGg");
	this.shape_133.setTransform(237.2,145.4,0.904,0.904);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#003944").s().p("AAEAaQhahCgRgLQAnASBEAMIBDAIQApAKgJAgQgHAXgXAAQgZAAgsgag");
	this.shape_134.setTransform(224,155.9,0.904,0.904);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#003944").s().p("AA7AzIhAguQhAgqg1gaQAWAIB8AeQBvAhgNAlQgHATgSAAQgPAAgXgNg");
	this.shape_135.setTransform(231.2,144.8,0.904,0.904);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#003944").s().p("AgIAaQgigzgPgPQAcARA1gFQAagCAGALQAGAKgNAXQgOAbgRAAQgNAAgNgPg");
	this.shape_136.setTransform(235.1,150.8,0.904,0.904);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#003944").s().p("AADANIgugiIA3AEQAlACgFAUQgEARgNAAQgKAAgOgJg");
	this.shape_137.setTransform(232,154.7,0.904,0.904);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#003944").s().p("ABCA4QgSgHgtgeIh6hQQApAVBSAUQAPAEA5AJQAwAMgFAfQgEAagXAAQgLAAgPgGg");
	this.shape_138.setTransform(234.7,135.1,0.904,0.904);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#003944").s().p("AAjAkIgpgeQgwgighgOQAOAEBhAQQBWAWgfAhQgIAKgNAAQgKAAgNgHg");
	this.shape_139.setTransform(243.5,132.3,0.904,0.904);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#003944").s().p("AgBATQgrgsgRgIQAOADBDAGQA4AKgSAeQgMASgPAAQgPAAgRgPg");
	this.shape_140.setTransform(245.9,129.4,0.904,0.904);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#003944").s().p("AAHATQg1gegPgHQAfAHAvgKQAcgFAFABQAPADgEAXQgEAZgWAAQgLAAgRgHg");
	this.shape_141.setTransform(251.5,125.6,0.904,0.904);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#003944").s().p("AgMAZQgGgGgKgXQgIgTgNgIQAOAEA9AIQAvANgtAcQgPAKgLAAQgIAAgGgHg");
	this.shape_142.setTransform(255.2,121.6,0.904,0.904);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#003944").s().p("AA3AvIhBgxQg/grgzgQICVAfQB1AggVAsQgHARgRAAQgRAAgZgQg");
	this.shape_143.setTransform(252.3,112.7,0.904,0.904);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#003944").s().p("AgNAZQgFgHgJgVQgIgUgKgJQAJAEAzAJQArAMgRAVQgKAOgRAEIgJABQgLAAgHgIg");
	this.shape_144.setTransform(264.3,108.7,0.904,0.904);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#003944").s().p("AACAdQhVhNgQgMQAlAXBIASQAQAEAtAIQAjAKgIAgQgHAagWAAQgYAAgrggg");
	this.shape_145.setTransform(264.6,102,0.904,0.904);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#003944").s().p("AgDASIgnguIA5ALQAlAHgMAXQgIAQgNAAQgKAAgMgLg");
	this.shape_146.setTransform(272.2,96.4,0.904,0.904);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#003944").s().p("AA4AzQgUgKgkgfQg6gugzgVQAUAGBtATQBiAYgJApQgGAZgVAAQgLAAgPgHg");
	this.shape_147.setTransform(274.5,87,0.904,0.904);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#003944").s().p("AgHAXIgthGQADADBAAfQAvAUgLAWQgJATgOAAQgPAAgUgZg");
	this.shape_148.setTransform(286.9,80,0.904,0.904);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#003944").s().p("AACAZIhyhPQApATBLAOIBIALQAuAMgMAhQgHAUgWAAQgcAAgzgeg");
	this.shape_149.setTransform(286.6,75.6,0.904,0.904);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#003944").s().p("AgPAYQghhAgKgPQAZAbA0AWQAcAMAGAGQANANgSATQgLAMgMAAQgTAAgVggg");
	this.shape_150.setTransform(296.8,71.3,0.904,0.904);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#003944").s().p("AAABFQgigCAVg8IAihMQgDAPAFBBQAAA7gXAAIAAgBg");
	this.shape_151.setTransform(324.2,45.7,0.904,0.904);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#003944").s().p("AgNBgQgggLAehQIAthmQgJAkAABAIACA+QgEAhgUAAQgFAAgHgCg");
	this.shape_152.setTransform(320.8,48.5,0.904,0.904);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#003944").s().p("AhDAcQgdgCAJgeQAGgXAZAAQAIAAAjAIQBDAOAkgBQgXAEggAHIg2APQgeAIgPAAIgDAAg");
	this.shape_153.setTransform(338.6,52.9,0.904,0.904);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#003944").s().p("AgcAUQglAJgUgBQgmAAgBgeQgCg6B0AmQBPAZA4AjQg8gchdAKg");
	this.shape_154.setTransform(336.3,56.6,0.904,0.904);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#003944").s().p("AiQAGQgCgzCEASQBWANBJAYQg+gNhXANQgvAPgfAFQgOADgKAAQglAAgBgbg");
	this.shape_155.setTransform(333.9,61.5,0.904,0.904);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#003944").s().p("AAAAMQgqgNgXgMQgqgXAVgdQAegmBFBMQAeAgAzBJQgfgjg/gfg");
	this.shape_156.setTransform(321.5,76.2,0.904,0.904);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#003944").s().p("AAwArQgOgIgtgVQgmgNgVgLQgngVAFgZQAIglAtAbQAZAOAeAeQAuArA3A6QgXgSgigSg");
	this.shape_157.setTransform(312.7,86,0.904,0.904);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#003944").s().p("AgOgEQgygTgfgSQg8giAUgcQAWgfA/ArQAjAYAnApQBEBEAxBLQgzhBhog4g");
	this.shape_158.setTransform(306.8,98,0.904,0.904);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#003944").s().p("ABjA9IhdgmQhFgWgxgVQhfgqAYghQATgcBXAyQAtAaA5AsICkBtQgmgWg0gXg");
	this.shape_159.setTransform(278.6,132.6,0.904,0.904);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#003944").s().p("AAtAfIg4gPQh9gbAzgjQARgMAhAQQAMAGAeAVQAgAVA+AuQgXgMghgJg");
	this.shape_160.setTransform(266.6,133.5,0.904,0.904);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#003944").s().p("AA/AvQgTgKgvgVQgwgQgegPQg5geAPgcQASgjBrBUIB9BtQgagTgmgTg");
	this.shape_161.setTransform(264.3,140.9,0.904,0.904);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#003944").s().p("AgIAHQg2gIgjgLQhCgXAkgiQAXgVA0AXQAWAKAvAfQA2AjBFBHQg5gwhbgZg");
	this.shape_162.setTransform(252.1,158.8,0.904,0.904);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#003944").s().p("AA5ArIhDgQQhCgQgLgEQgygUAUghQARgcAsAXIA8AqQBDAuA1AaQgbgKgogKg");
	this.shape_163.setTransform(249.9,166.2,0.904,0.904);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#003944").s().p("ACGA6Ih2gfQhagShCgTQiBgoAZgkQANgSAwAMQAPADAxATQAhAMAsAUIBKAjIBtAxQBAAdAsAXQgvgVhEgTg");
	this.shape_164.setTransform(254.2,175.7,0.904,0.904);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#003944").s().p("AATAUIgrgFQgXgDgJgIQgMgJARgUQASgUAoAfQAWAPAgAgQgRgIgZgFg");
	this.shape_165.setTransform(229.9,190.5,0.904,0.904);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#003944").s().p("AA7AjQgTgGgqgLQgugHgcgJQg3gRASgeQAUggBeA5QAzAdBCAwQgZgLgigLg");
	this.shape_166.setTransform(230.6,199.7,0.904,0.904);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#003944").s().p("ABMAsIhSgNQg8gEgjgIQhDgRANgoQANgmA7AXIBRApQBaAvBGAbQgjgJgvgJg");
	this.shape_167.setTransform(231.5,207.1,0.904,0.904);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#003944").s().p("AgBAZQg+gZgcgTQg0glA0gmQAegVAmAlIAwA/QA1BEAoAyQgpglhOgpg");
	this.shape_168.setTransform(297.4,101.8,0.904,0.904);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#003944").s().p("AABAJQgogJgXgJQgqgSAWgeQAdgoBDBGQAyAxAbAzQgegog8gYg");
	this.shape_169.setTransform(288.6,107.7,0.904,0.904);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#010C06").s().p("Ar1RbQgjgKgyhJQgqg/gQhMIgJgtQgFgcAEgRQADgLALgLIAWgRIBCg3QgxgigWgSQgQgOAAgdQAAgKAGgpQAQh1BNiYQA7hyBXh9QAQgVAggxQAfgsAZgWQAKgIAEgBIAUAEIBkAVIhChUQgKgNAAgCIAIgNQATgeAngqIA/hFIE0lnQALgMADgCQAEgCAPgBIBzADIhBhJQDhieDZhpQBZgqAzgSQBSgdBCgBQBlgCAiBjQAcBQgWBoQgaCAhOB5IhoAfIBBBHQAMAMAAADQAAADgIAOIiqESIgNAZQgKASgHAEQgIAFgYgDIgigEIhYgFIBjBcQAPANgDAIIgRAXIoBKwIgcAoQgRAYgNANQgMANgVgBIgogEIirgIIChB5QhiB0iVA9QiNA6igAAIgeAAQgSAAgLgDg");
	this.shape_170.setTransform(279.6,126.5,0.904,0.904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.instance_4},{t:this.shape_90},{t:this.instance_3},{t:this.instance_2},{t:this.shape_89},{t:this.instance_1},{t:this.shape_88},{t:this.instance},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.bush, new cjs.Rectangle(0,0,433.4,345.3), null);


(lib.aboutModal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.closeBtn();
	this.instance.parent = this;
	this.instance.setTransform(10.1,10.3,0.9,0.9);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.aboutModalLink = new cjs.Text("הפקולטה לטכנולוגיות למידה", "bold 18px 'Heebo'", "#0066CC");
	this.aboutModalLink.name = "aboutModalLink";
	this.aboutModalLink.textAlign = "center";
	this.aboutModalLink.lineHeight = 28;
	this.aboutModalLink.lineWidth = 227;
	this.aboutModalLink.parent = this;
	this.aboutModalLink.setTransform(450,458.3);

	this.instance_1 = new lib.about();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.aboutModalLink},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.aboutModal, new cjs.Rectangle(0,1,900,546), null);


// stage content:
(lib.zoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		function declareLibraryElements() {
			intro = new lib.intro();
			timesUp = new lib.timesUp();
			resultScene = new lib.resultScene();
			gameNotFound = new lib.gameNotFound();
			aboutModal = new lib.aboutModal();
			zoe = new lib.zoe();
			statueAnimation = new lib.statueAnimation();
		    head = new lib.head();
		    openingBg = new lib.openingBg();
		    introTexts = new lib.introTexts();
		    textInput = $("#gameCodeInput");
		    bush = new lib.bush();
		    clock = new lib.clock();
		    closeBtn = new lib.closeBtn();
		    correctOption = new lib.correctOption();
		    questionOption = new lib.optionStone();
		    qBoard = new lib.qBoard();
			qBoardImg = new lib.qBoardImg();
		    statueCounter = new lib.statueCounter();
		    wrongOption = new lib.wrongOption();
		    navigation = new lib.navigation();
			continueBtn = new lib.continueBtn();
			qBg = new lib.qBg();
			blackBG = new lib.blackBG();
			navigation = new lib.navigation();
			navigation.x = 0;
			navigation.y = 0;
			stage.addChild(navigation);
			
			navigation.aboutLink.addEventListener("click", function () {
				placeLibEl(0, 0, blackBG);
				blackBG.alpha = 0.5;
				placeLibEl(225, 100, aboutModal);
				if(document.getElementById('gameCodeInput')) {
					document.getElementById('gameCodeInput').style.display = 'none';
				}
			});
			aboutModal.instance.addEventListener("click", function () {
				stage.removeChild(aboutModal);
				stage.removeChild(blackBG);
				if(document.getElementById('gameCodeInput')) {
					document.getElementById('gameCodeInput').style.display = 'block';
				}
				
			});
			
			aboutModal.aboutModalLink.addEventListener("click", function () {
				window.open('https://www.hit.ac.il/telem/overview', '_blank');
			});
			navigation.editorLink.addEventListener("click", function () {
				window.location.href = "/Login.aspx";
			});
		    
		    //openingSceneElements = [ stage.children[0].instance, stage.children[0].instance_1, stage.children[0].instance_2, stage.children[0].instance_3, stage.children[0].instance_4, stage.children[0].instance_5 ];
		}
		
		declareLibraryElements();
		playBtn = stage.children[0].instance_2;
		playBtn.alpha = 0.5;
		playBtn.on('click', function() {
			console.log($(this));
			if(playBtn.enabled) {
				getJSON();
			} else {
				console.log("do nothing")
			}
		})
		
		continueBtn.x = 400;
		continueBtn.y = 420;
		continueBtn.on("click", function() {
			console.log("continueBtn click");
			printQuestion();
		});
		
		timesUp.addEventListener("click", function () {
			stage.removeChild(blackBG);
			stage.removeChild(timesUp);
			printQuestion();
		});
		
		intro.x = 0;
		intro.y = 0;
		stage.addChild(intro);
		intro.introBtn.addEventListener("click", function () {
			stage.removeChild(intro);
			document.getElementById('gameCodeInput').style.opacity = '1';
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// title
	this.instance = new lib.gametitle();
	this.instance.parent = this;
	this.instance.setTransform(683.1,152.2,0.881,0.881,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// enter-game
	this.instance_1 = new lib.introTexts();
	this.instance_1.parent = this;
	this.instance_1.setTransform(685.3,296.6,1,1,0,0,0,72,60.5);

	this.instance_2 = new lib.playBtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(683,388.4,1,1,0,0,0,93,27.6);

	this.instance_3 = new lib.test();
	this.instance_3.parent = this;
	this.instance_3.setTransform(683.2,293,1.8,2.273,0,0,0,50.1,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// bush
	this.instance_4 = new lib.bush();
	this.instance_4.parent = this;
	this.instance_4.setTransform(344.8,603.5,0.95,0.95,0,0,0,216.7,172.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// head
	this.instance_5 = new lib.head();
	this.instance_5.parent = this;
	this.instance_5.setTransform(410.1,626.2,1,1,0,0,0,63.5,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// openning.ai
	this.instance_6 = new lib.openingBg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(682.8,489.7,1,1,0,0,0,660.3,369.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(705.5,489.5,1320.6,753.8);
// library properties:
lib.properties = {
	id: '3373781C9321154880124364328DC8EF',
	width: 1366,
	height: 768,
	fps: 30,
	color: "#182E30",
	opacity: 1.00,
	manifest: [
		{src:"images/zoe1_atlas_.png?1540649621207", id:"zoe1_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1540649623410", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1540649623410", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1540649623410", id:"an.TextInput"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['3373781C9321154880124364328DC8EF'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;