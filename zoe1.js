(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1366,768);// helper functions:

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


(lib.zhead = function(mode,startPosition,loop) {
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

}).prototype = getMCSymbolPrototype(lib.zhead, new cjs.Rectangle(0,0,127.1,199.8), null);


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


// stage content:
(lib.zoe1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// enter-game
	this.instance = new lib.test();
	this.instance.parent = this;
	this.instance.setTransform(683,239,1,1,0,0,0,50,11);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglBGIAAhKIABgNIAEgJIANAAIgCAIIAAANIAABLgAgEAVQAIAAAGgEQAHgEADgHQAEgGAAgIIAAgwIg/AAIAAgNIBPAAIAAA9QAAALgFALQgGAJgKAFQgKAFgNAAg");
	this.shape.setTransform(716.6,191.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAXA0IAAhAQAAgOgFgGQgGgGgMAAIgXAAIAABaIgQAAIAAhnIAnAAQAUAAAKAKQAKAKAAAUIAAA/g");
	this.shape_1.setTransform(705.7,189.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgdAyQgNgDgMgGIAAhdIAPAAIAABUIASAGQAKACAHAAQAMAAAKgEQALgEAFgHQAGgIgBgLIAAg6IAQAAIAAA8QABAPgJAKQgHAKgNAFQgOAFgPAAQgNAAgOgDgAgOAWQADgEACgFQABgHAAgHIAAgzIAQAAIAAAwQAAAJgCAGQgDAHgDAEg");
	this.shape_2.setTransform(693,189.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACA1IAAgNIAaAAIAAgyQAAgOgGgHQgGgHgMAAQgIAAgFAHQgGAGgBALIgIBDIgQAAIAIhBQABgHADgHQADgGAEgDIACgCIAAAAIgKACIgLADIgEgMIAXgGQANgCAJAAQAVAAALALQALAMABAVIAAA9g");
	this.shape_3.setTransform(680,189.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAIA0IAAhaIgwAAIAAgNIBRAAIAAANIgRAAIAABag");
	this.shape_4.setTransform(665.2,189.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgBA0IAAhaIgMAAIAAgNIAbAAIAABng");
	this.shape_5.setTransform(657.6,189.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AglBGIAAhKIABgNIAEgJIANAAIgCAIIAAANIAABLgAgEAVQAIAAAGgEQAHgEADgHQAEgGAAgIIAAgwIg/AAIAAgNIBPAAIAAA9QAAALgFALQgGAJgKAFQgKAFgNAAg");
	this.shape_6.setTransform(649.6,191.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgyBdIAAhkQAAgKACgGIAEgMIASAAIgCALIAAAQIAABlgAgGAbQALAAAJgFQAIgEAFgJQAFgJAAgLIAAhAIhVAAIAAgRIBqAAIAABRQAAAQgHANQgIAMgNAHQgOAHgRABg");
	this.shape_7.setTransform(699.9,329.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAgBFIAAhVQAAgTgIgHQgIgJgQAAIgeAAIAAB4IgWAAIAAiJIA0AAQAaAAAOANQANANAAAbIAABUg");
	this.shape_8.setTransform(685.3,327.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnBDQgSgFgQgHIAAh9IAVAAIAABxQALAFANACQAMADALAAQAQAAAOgFQANgFAHgKQAIgKAAgOIAAhPIAVAAIAABRQAAATgKAOQgLANgSAHQgSAHgVAAQgRAAgSgEgAgTAdQAFgEACgIQACgIAAgKIAAhFIAUAAIAABBQAAALgDAJQgDAJgFAGg");
	this.shape_9.setTransform(668.4,327.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B3B7B5").s().p("At5EUQgRAAgLgMQgMgMAAgQIAAnXQAAgQAMgMQALgMARAAIbzAAQARAAAMAMQALAMAAAQIAAHXQAAAQgLAMQgMAMgRAAg");
	this.shape_10.setTransform(683,326.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAIBAIAAhrIggAMIAAgPIAugRIADAAIAAB/g");
	this.shape_11.setTransform(749.1,279);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgdA0QgLgNAAgeIAAgSQAAgeALgNQALgNASAAQAUAAAKANQAKANAAAeIAAASQAAAegKANQgKAOgUAAQgSAAgLgOgAgRgqQgGAJAAAVIAAAYQAAAVAGAKQAGAJALAAQANAAAFgJQAGgKAAgVIAAgYQAAgVgGgJQgGgKgMAAQgLAAgGAKg");
	this.shape_12.setTransform(740.1,279);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAIBAIAAhrIgfAMIAAgPIAtgRIACAAIAAB/g");
	this.shape_13.setTransform(728.9,279);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAuQgDgDAAgEQAAgFADgCQACgDAEAAQAFAAADADQACACAAAFQAAAEgCADQgDADgFgBQgEABgCgDgAgGgfQgDgCAAgEQAAgFADgDQACgDAEAAQAFAAADADQACADAAAFQAAAEgCACQgDADgFAAQgEAAgCgDg");
	this.shape_14.setTransform(718.3,280.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAXA0IAAhAQAAgOgGgGQgGgGgMAAIgmAAIAAgNIAnAAQATAAAKAKQALAKAAATIAABAgAgnA0IAAgkQAAgIACgEIADgIIANAAIgBAHIgBAMIAAAlg");
	this.shape_15.setTransform(710.8,280.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACA1IAAgNIAaAAIAAgyQAAgOgGgHQgGgHgMAAQgIAAgFAHQgGAGgBALIgIBDIgQAAIAIhBQABgHADgHQADgGAEgDIACgCIAAAAIgKACIgLADIgEgMIAXgGQANgCAJAAQAVAAALALQALAMABAVIAAA9g");
	this.shape_16.setTransform(699.7,280.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgdA0IAAgPIAFABQAMgBAIgHQAHgIACgLIAAgxIgWAAIAAgNIAmAAIAAA1QAAAHACAIIAHAiIgPAAIgGgcIgBAAQgBAHgFAHQgEAHgHAEQgIAEgIAAIgEAAg");
	this.shape_17.setTransform(690.4,280.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgBA0IAAhaIgMAAIAAgNIAbAAIAABng");
	this.shape_18.setTransform(684.2,280.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAIA0IAAhaIgwAAIAAgNIBRAAIAAANIgRAAIAABag");
	this.shape_19.setTransform(677.1,280.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgPBDIAkhZIg7AAIAAgtIAQAAIAAAgIA9AAIAAAKIgmBcg");
	this.shape_20.setTransform(667.9,278.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AglBGIAAhKIABgNIAEgJIANAAIgCAIIAAANIAABLgAgEAVQAIAAAGgEQAHgEADgHQAEgGAAgIIAAgwIg/AAIAAgNIBPAAIAAA9QAAALgFALQgGAJgKAFQgKAFgNAAg");
	this.shape_21.setTransform(653.1,282.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAXA0IAAhAQAAgOgFgGQgGgGgMAAIgXAAIAABaIgQAAIAAhnIAnAAQATAAALAKQAKAKAAAUIAAA/g");
	this.shape_22.setTransform(642.3,280.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgdAyQgNgDgMgGIAAhdIAPAAIAABUIASAGQAKACAHAAQAMAAAKgEQALgEAFgHQAGgIgBgLIAAg6IAQAAIAAA8QABAPgJAKQgHAKgNAFQgOAFgPAAQgNAAgOgDgAgOAWQADgEACgFQABgHAAgHIAAgzIAQAAIAAAwQAAAJgCAGQgDAHgDAFg");
	this.shape_23.setTransform(629.5,280.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AACA1IAAgNIAaAAIAAgyQAAgOgGgHQgGgHgMAAQgIAAgFAHQgGAGgBALIgIBDIgQAAIAIhBQABgHADgHQADgGAEgDIACgCIAAAAIgKACIgLADIgEgMIAXgGQANgCAJAAQAVAAALALQALAMABAVIAAA9g");
	this.shape_24.setTransform(616.6,280.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(90));

	// navigation
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgQBIIAAiQIAhAAIAACQg");
	this.shape_25.setTransform(1273.6,29.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgoBJIADgfIADABIAFAAIAHAAQAEAAAGgCQAJgEAEgIQAGgHAAgLIAAgnQAAgNgHgEQgCgCgEABQgKAAgHABIgCABIAAgbQAJgDANABQALAAAIABQAIADAFAEQAFAEACAGQADAGABAGIABAPIAABkIgaAAIgFgUIgCAAIgFAHIgHAIIgLAFQgGACgGAAIgNgBg");
	this.shape_26.setTransform(1264.2,29.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgQBIIAAiQIAhAAIAACQg");
	this.shape_27.setTransform(1255.9,29.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgJBXIALg2IATg/IhLAAIAAg4IAiAAIAAAdIBLAAIAAAXIgUBDIgMA2g");
	this.shape_28.setTransform(1246.2,27.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#677F4E").s().p("AlxDIQhTAAg6g7Qg7g6AAhTIAAAAQABhSA6g6QA6g7BTAAILjAAQBTAAA6A7QA7A6AABSIAAAAQAABTg7A6Qg6A7hTAAg");
	this.shape_29.setTransform(1258.5,30.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#002929").s().p("AAbA6IAAhPQAAgXgeAAIggAAIgGABIAAgMIAmgBQAQAAALAEQALAGAEALQACAHABAIIAABOgAgpA6IAAhIIAPAAIAABIg");
	this.shape_30.setTransform(1179.6,30.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#002929").s().p("AAEA6IAAgMIAYAAIAAhBQAAgagYAAIgHACIgHAEIgIAIIgBABIgIBYIgPAAIAIhXIAAgBIgBgIQgBgHgCgEIgCgGIAPAAIAEAMIAAAAQAFgGAGgDIAJgDQAEgCAGABQARgBAIAKQAJAKAAASIAABNg");
	this.shape_31.setTransform(1168.4,30.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#002929").s().p("AgbA5IADgNIAMABQAFAAAHgFQAIgGADgLQACgGAAgHIAAglQAAgKgFgEQgEgFgHAAIgLABIAAgLQAHgCAHABQAcAAAAAdIAABVIgNAAIgBgTIAAAAIgCADIgEAEIgEAFIgFAEQgCACgEABQgDABgEABQgJgBgEgBg");
	this.shape_32.setTransform(1159.1,30.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#002929").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_33.setTransform(1153.6,30.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#002929").s().p("AAJA5IAAhNIABgKIADgHQADgFADgBIACgBIAAAAIg9AAIAAgMIBRAAIAAAKQgSAGAAAUIAABNg");
	this.shape_34.setTransform(1146.9,30.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#002929").s().p("AgBBEIAIgsIAQg5Ig7AAIAAgiIAOAAIAAAXIA7AAIAAALIgPA5IgJAsg");
	this.shape_35.setTransform(1138.1,29.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#002929").s().p("AgpBPIAAhvIAPAAIAABvgAABAjIAAgDQAAgGADgLIAEgPIAHgXIAMgrIhEAAIAAgLIBTAAIAAALIgNAtIgEANIgDAJIgDAKIgCAIIgCANIAAADg");
	this.shape_36.setTransform(1124.4,32.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#002929").s().p("AAbA6IAAhPQAAgXgeAAIgXAAIAABmIgPAAIAAhxIAogBQAOAAALAEQALAGAEALQADAHAAAIIAABOg");
	this.shape_37.setTransform(1113.4,30.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#002929").s().p("AguA5IgJhxIAOAAIAGA/IALgEQAOgEACgUIADgjIAOAAIgDAeIgBALIgEAKQgBAFgDADIgIAHQgFADgHACIgLADIACAbIAaAAQARAAAMgNQAMgMACgaIAFgyIAOAAIgEAyQgBAKgDAJIgFAPIgIALQgFAFgGAEQgGAEgIACQgJADgJAAg");
	this.shape_38.setTransform(1101.4,30.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#002929").s().p("AAEA6IAAgMIAYAAIAAhBQAAgagYAAIgHACIgHAEIgIAIIgBABIgIBYIgPAAIAIhXIAAgBIgBgIQgBgHgCgEIgCgGIAPAAIAEAMIAAAAQAFgGAGgDIAJgDQAEgCAGABQARgBAIAKQAJAKAAASIAABNg");
	this.shape_39.setTransform(1089.2,30.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#677F4E").s().p("AgoA6IAAhxQAPgBAXAAQArAAAAAeIAABUgAgaAuIA1AAIAAhFQAAgGgCgEQgCgEgCgCQgEgCgEgCIgIgBIgIAAIgTAAIgEAAg");
	this.shape_40.setTransform(215.5,30);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#677F4E").s().p("AgGAmIAAhKIANAAIAAA6IgKAQg");
	this.shape_41.setTransform(207.9,28.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#677F4E").s().p("AgpBOIAAhuIAPAAIAABugAABAjIAAgDQAAgGADgLIAEgPIAHgXIAMgrIhEAAIAAgLIBTAAIAAALIgNAtIgEANIgDAJIgDAKIgCAIIgCANIAAADg");
	this.shape_42.setTransform(201.2,32.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#677F4E").s().p("AAbA6IAAhPQAAgXgeAAIgXAAIAABmIgOAAIAAhyIAmAAQAPAAALAEQALAFAEAMQACAGABAJIAABOg");
	this.shape_43.setTransform(190.2,30);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#677F4E").s().p("AguA5IgJhxIAOAAIAGA/IALgEQAOgEACgUIADgjIAOAAIgDAeIgBALIgEAKQgBAFgDADIgIAHQgFADgHACIgLADIACAbIAaAAQARAAAMgNQAMgMACgaIAFgyIAOAAIgEAyQgBAKgDAJIgFAPIgIALQgFAFgGAEQgGAEgIACQgJADgJAAg");
	this.shape_44.setTransform(178.2,30);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#677F4E").s().p("AAEA6IAAgMIAYAAIAAhBQAAgagYAAIgHACIgHAEIgIAIIgBABIgIBYIgPAAIAIhXIAAgBIgBgIIgDgLIgCgGIAPAAIAEAMIAAAAQAFgGAGgDIAJgDQAEgCAGABQARgBAIAKQAJAKAAASIAABNg");
	this.shape_45.setTransform(166,30);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#677F4E").s().p("AAUBPIAAhrQgBgLgCgHIgEgIIgEgGQgEgCgEgCQgDgBgHAAIgNABIgJACIgCABIAAgMIACgCIAJgCIAOgBQAHAAAFACQAHACAEACQAEAEADAEQAEADACAFIADAJQADAIAAAKIAABsg");
	this.shape_46.setTransform(151.4,32.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#677F4E").s().p("AgGAmIAAhKIANAAIAAA6IgKAQg");
	this.shape_47.setTransform(145.6,28.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#677F4E").s().p("AAaA5IgagwIgOgTIgFADQgIAHAAAPIAAAqIgPAAIAAglQAAgTAGgJQACgDAEgEQAFgDAFgCIgWgkIARAAIAZAsIAPAWQAEgDACgCIAEgHQABgFAAgHIAAgqIAPAAIAAAlIgBANIgCAKQgEALgNAFIAWAlg");
	this.shape_48.setTransform(138.5,30);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#677F4E").s().p("AgNA/QgCgCAAgHQAAgMAKABQAFgBACAEQADADAAAFQAAAHgDACQgCADgFAAQgEAAgEgDgAgLAcIAAgEQAAgLADgGQADgHAIgGQAMgLADgEQADgGAAgHQAAgIgFgFQgHgGgJAAQgIAAgGACQgGACgJAEIgFgLQARgJARAAQARgBAJAJQAJAIAAAPQAAAMgHAJIgOANQgJAHgDAFQgCAFAAAJIAAACg");
	this.shape_49.setTransform(129.5,29.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#677F4E").s().p("AATBPIAAhrQAAgLgCgHIgEgIIgEgGQgDgCgFgCQgDgBgHAAIgNABIgJACIgCABIAAgMIACgCIAJgCIAOgBQAHAAAFACQAHACAEACQAEAEADAEQAEADACAFIADAJQADAIAAAKIAABsg");
	this.shape_50.setTransform(366.6,32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#677F4E").s().p("AATA6IAAhPQAAgXgeAAIgWAAIAAgMIAWAAIAPAAQAGABAGADQAGADAEAEQAIAJAAAQIAABOg");
	this.shape_51.setTransform(358.1,30);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#677F4E").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_52.setTransform(352.1,30);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#677F4E").s().p("AgvAwIAjgGIgbhkIAPAAIAOA0IAKAuQAZgKAEgmIAEgyIAPAAIgFAyQgBAKgCAIIgFANIgHAKQgFAGgFAEQgGAEgIADQgIADgKACIghAEg");
	this.shape_53.setTransform(344.4,30.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#677F4E").s().p("AgpBOIAAhuIAPAAIAABugAABAjIAAgDQAAgGADgLIAEgPIAHgXIAMgrIhEAAIAAgLIBTAAIAAALIgNAtIgEANIgDAJIgDAKIgCAIIgCANIAAADg");
	this.shape_54.setTransform(297.7,32.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#677F4E").s().p("AAbA6IAAhPQAAgXgeAAIgXAAIAABmIgPAAIAAhyIAoAAQAOAAALAEQALAFAEAMQADAGAAAJIAABOg");
	this.shape_55.setTransform(286.7,30);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#677F4E").s().p("AguA5IgJhxIAOAAIAGA/IALgEQAOgEACgUIADgjIAOAAIgDAeIgBALIgEAKQgBAFgDADIgIAHQgFADgHACIgLADIACAbIAaAAQARAAAMgNQAMgMACgaIAFgyIAOAAIgEAyQgBAKgDAJIgFAPIgIALQgFAFgGAEQgGAEgIACQgJADgJAAg");
	this.shape_56.setTransform(274.7,30);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#677F4E").s().p("AAEA6IAAgMIAYAAIAAhBQAAgagYAAIgHACIgHAEIgIAIIgBABIgIBYIgPAAIAIhXIAAgBIgBgIQgBgHgCgEIgCgGIAPAAIAEAMIAAAAQAFgGAGgDIAJgDQAEgCAGABQARgBAIAKQAJAKAAASIAABNg");
	this.shape_57.setTransform(262.6,30);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#677F4E").s().p("AguA5IAAgMIAHABQANAAAAgPIAAhKIgNABIAAgMQAZgDARAAQAQAAAKAFQAMAFAEAMQACAGAAAIIAABOIgPAAIAAhPQAAgWgfAAIgNAAIAABJQAAAOgGAHQgGAIgNAAIgJgBg");
	this.shape_58.setTransform(83.3,30);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#677F4E").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_59.setTransform(75.8,30);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#677F4E").s().p("AAJA5IAAhNIABgKIADgHQADgFADgBIACgBIAAAAIg9AAIAAgMIBRAAIAAAKQgSAGAAAUIAABNg");
	this.shape_60.setTransform(69.1,30);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#677F4E").s().p("AgGA5IAAhxIANAAIAABxg");
	this.shape_61.setTransform(62.5,30);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#677F4E").s().p("AAaA5IgagwIgOgTIgFADQgIAHAAAPIAAAqIgPAAIAAglQAAgTAGgJQACgDAEgEQAFgDAFgCIgWgkIARAAIAZAsIAPAWQAEgDACgCIAEgHQABgFAAgHIAAgqIAPAAIAAAlIgBANIgCAKQgEALgNAFIAWAlg");
	this.shape_62.setTransform(55.3,30);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#E2E2E2").s().p("EhqtAE2IAAprMDVbAAAIAAJrg");
	this.shape_63.setTransform(683,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},24).wait(66));

	// bush
	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00251F").s().p("AMiYjQABAAAPk7QAAiggejCQg4ljihlbQiZlKjvlHQjPkckhktIkXkVQj5j3AEgEQAJgKDYDHQCfCRBTBQQEwEnDWEQQD+FDCkFKQC3FxA+FuQAkDWAADHQgWFngTAAIAAAAgAMiYjIAAAAIAAAAIAAAAg");
	this.shape_64.setTransform(269.3,638.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#003944").s().p("AhAAuQgMgEgGgMQgGgNAGgMQAFgJAPgEQAJgCARgCQApgHAVgGQAjgIAZgNIgzAmIgtAkQgbATgSAAIgJgBg");
	this.shape_65.setTransform(350.1,690.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#003944").s().p("AghA1QgSgPAJgNQACgEAZgVQAWgRAMgNQATgUAIgTQgKBbgCAKQgLAmgXAAQgNAAgUgRg");
	this.shape_66.setTransform(214.4,493.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#003944").s().p("AgOglQA+hTAlA9QARAcgSARQgJAJgmAOQgrATgYANQglAVgZAYQAshQAigrg");
	this.shape_67.setTransform(202.4,512.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#003944").s().p("AgQBJQgZgIgEgQQgEgQARgRIArgpQAZgaAKgYQgCAVgCBNQgJA1ghAAQgHAAgJgDg");
	this.shape_68.setTransform(221.3,502.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#003944").s().p("AgHgXQASgYAPgDQASgEATAWQAWAYgLAOQgJALghAHIg2ALQghAHgWAKQAfgaAngxg");
	this.shape_69.setTransform(336.8,702.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#003944").s().p("Ag5AVQgLgUADgJQAEgKAWgEIA3gHQAfgHATgPIgYApQgRAdgMAOQgQATgPAAQgUAAgTgfg");
	this.shape_70.setTransform(345.7,677.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#003944").s().p("AgQgmQBvh1ApA3QAcAng5AgQgeASg3ARQhtAyg5A+QBXhzApgpg");
	this.shape_71.setTransform(312.8,664.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#003944").s().p("AhLAjIBGhDQAtgsATgMQAvgdAaAfQAiAog2AfQgFADhRAeQhxArg5AqQAZgXAsgtg");
	this.shape_72.setTransform(284.3,615.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#003944").s().p("AgGgjQBzhkAfA1QAYAqg/AfIhgAiQgzAVgaANQgrAVgfAWQBQhWA8gzg");
	this.shape_73.setTransform(247.5,571.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#003944").s().p("AgEgXQAogkAVArQALAWgJAIQgGAGgaABQg8ADgdAQQAjgsAXgTg");
	this.shape_74.setTransform(262.3,571.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#003944").s().p("Ag9ATQAtgqAggcQBDg5AjAYQAmAagiAfQgWAVgoANQhKAZgbAKQg6AYgmAbIBMhKg");
	this.shape_75.setTransform(260.7,581.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#003944").s().p("AhaAHQgBgcAegCQARgCAjAFQA/ACAmgYQgxAqgzAZQghASgUAAQgdAAAAgkg");
	this.shape_76.setTransform(344.8,666.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#003944").s().p("AhtAWQghgoA4gKQAVgDA4ACQBTAFAwgKIhKAdQgwAWgfAKQgaAIgSAAQgXAAgLgNg");
	this.shape_77.setTransform(342.2,657);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#003944").s().p("AgtAnQgfgdA2gYQBDgYAMgLQgKAPgfA5QgTAbgSAAQgMAAgMgLg");
	this.shape_78.setTransform(333,645.8);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#003944").s().p("AhLAZQgNgcAPgKQAJgHAhgDQBLgGAmgUIhOBNQgbAWgUAAQgVAAgLgZg");
	this.shape_79.setTransform(328.2,633.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#003944").s().p("AhgAvQgqgsBpgfQA1gQBZgQQgmASgxApIg2AwQgUAOgQAAQgQAAgMgOg");
	this.shape_80.setTransform(330.9,639.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#003944").s().p("Ag6gJQAGgSAvAFQA6AGAJgCQg8AfgQAFQgRAGgMAAQgaAAALghg");
	this.shape_81.setTransform(313.1,611.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#003944").s().p("Ah4AjQgLgmAxgMQAbgHA0gDQBNgNAxgXQhLA8g0AfQg0AggdAAQgbAAgIgbg");
	this.shape_82.setTransform(330.2,625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#003944").s().p("AiOA1QgQgsCEgnQBEgVBngXQg/AfhKAwIhMA3QgbAPgSAAQgVAAgIgWg");
	this.shape_83.setTransform(320.9,610.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#003944").s().p("Ag5AQQgPgbAHgMQAHgLAeACQAeACATgCQAcgDATgMQgRASgpA7QgPASgPAAQgUAAgRggg");
	this.shape_84.setTransform(315.7,618.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#003944").s().p("AgzAGQgFgXArgDIBCgFIg3ApQgSAKgLAAQgQAAgEgUg");
	this.shape_85.setTransform(319.8,623.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#003944").s().p("AiLAqQgGgkA4gOQAfgJA3gGQBggYAwgZIiPBfQgzAigYAKQgRAGgNAAQgbAAgFgfg");
	this.shape_86.setTransform(316.3,597.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#003944").s().p("AhdAnQgkgnBlgaQAzgNBQgKQgmAPg6ApIgwAjQgPAIgMAAQgPAAgKgLg");
	this.shape_87.setTransform(304.9,594.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#003944").s().p("AhDATQgWgjBDgMQAigHA9gEQgUAKgyAzQgVASgRAAQgTAAgNgVg");
	this.shape_88.setTransform(301.7,590.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#003944").s().p("AhHABQgEgbARgDQAHgBAhAGQA3ALAkgIQgyAfgeAMQgTAIgOAAQgaAAgFgdg");
	this.shape_89.setTransform(294.4,585.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#003944").s().p("AggAaQg1giA3gPQAegHA7gHQgPAKgKAXQgLAagHAIQgHAIgKAAQgNAAgSgMg");
	this.shape_90.setTransform(289.6,580.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#003944").s().p("AiOA2QgYg0CJgmQBHgUBpgRQg9AUhJAyQgtAmggAUQgeATgTAAQgUAAgJgUg");
	this.shape_91.setTransform(293.4,568.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#003944").s().p("AgQAmQgUgFgMgQQgTgaAzgOQAZgIAtgHQgMALgJAWQgKAagHAIQgIAKgNAAIgLgBg");
	this.shape_92.setTransform(277.7,563.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#003944").s().p("AhzApQgKglAqgNQAYgHAwgGQBTgVAugcQhGBEgyAlQgyAmgdAAQgaAAgIgfg");
	this.shape_93.setTransform(277.3,554.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#003944").s().p("AguAPQgOgbArgIIBDgOIgtA3QgOAOgNAAQgOAAgKgUg");
	this.shape_94.setTransform(267.4,547.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#003944").s().p("AiAAnQgLgxB0gdQA7gPBdgNQg+AZhDA2QgqAkgYAMQgSAIgNAAQgYAAgHgdg");
	this.shape_95.setTransform(264.5,535.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#003944").s().p("Ag7AiQgNgaA3gYQBMgkAEgDIg2BSQgXAdgSAAQgQAAgLgWg");
	this.shape_96.setTransform(248.2,526);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#003944").s().p("AiBAqQgOgoA3gOQAdgIA3gFQAsgIAZgHQAngKAdgOQhOA8g4AhQg9AkggAAQgbAAgIgXg");
	this.shape_97.setTransform(248.6,520.3);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#003944").s().p("Ag4A0QgVgXAPgPQAHgIAhgNQA9gbAegfQgLASgnBLQgZAmgXAAQgOAAgNgOg");
	this.shape_98.setTransform(235.3,514.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#003944").s().p("AgaAOQAGhOgEgRIApBaQAZBGgoADIgCAAQgaAAAAhEg");
	this.shape_99.setTransform(199.5,481.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#003944").s().p("AgaBMIABhJQAAhOgKgoIA2B4QAjBfgmANQgIADgGAAQgXAAgFgog");
	this.shape_100.setTransform(204,484.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#003944").s().p("AAXAXIg/gRQgmgJgbgEQAvABBKgRQArgJAIAAQAeAAAHAaQAKAkgiADIgEAAQgSAAgjgKg");
	this.shape_101.setTransform(180.8,490.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#003944").s().p("AANgaQCIgsgCBEQgCAkgsAAIhDgKQhvgMhFAhQBAgpBfgeg");
	this.shape_102.setTransform(183.8,495.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#003944").s().p("ABiAkQhNgWgPgCQhpgQhHAQQBUgdBogOQCbgWgCA8QgCAfgqAAQgNAAgQgCg");
	this.shape_103.setTransform(187,501.9);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#003944").s().p("AgPggQBShZAjAsQAZAigyAbQgbAPgyAPQhLAmgjAoQA6hVAlgng");
	this.shape_104.setTransform(203.1,521.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#003944").s().p("AgEgaQBxhsAPBEQAGAeguAYQgYANgtAQQg1AYgSAKQgoAVgbAVQA6g9A9g6g");
	this.shape_105.setTransform(214.6,533.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#003944").s().p("AgbgfQAvgwApgcQBJgzAaAkQAYAihHAoQglAVg7AXQh4BAg+BOQA7haBPhPg");
	this.shape_106.setTransform(222.3,549.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#003944").s().p("AgdgEQBFg0A1gfQBlg7AXAiQAcAnhwAxIiLAzQhIAcgmAQQg8AbguAbg");
	this.shape_107.setTransform(259.1,594.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#003944").s().p("AgGgSQAggYARgIQAmgTAUAOQA8ApiSAhQguALgVAGQgmALgbAOQBJg2AmgZg");
	this.shape_108.setTransform(274.7,595.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#003944").s().p("AgBgcQB+hkAVApQASAihEAjQgjASg4ASIhOAlQgtAXgfAWICUiAg");
	this.shape_109.setTransform(277.7,605.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#003944").s().p("AgUgfQA3gkAbgMQA9gbAbAZQArAnhOAbIhpAWQhtAfhBA4QBPhSBBgrg");
	this.shape_110.setTransform(293.6,628.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#003944").s().p("AgEgKIBGgzQA1gbAUAhQAYAog8AXQgJAEhRAUIhPATQgvALggAMQA7gdBSg3g");
	this.shape_111.setTransform(296.4,638.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#003944").s().p("AilA2ICAg5IBYgpQA0gYAmgPQA1gUAXgGQA4gOAQAVQAeAriZAvIi4AsIiLAkQhPAXg4AZQA0gbBLgjg");
	this.shape_112.setTransform(290.9,650.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#003944").s().p("AgHgRQAvgkAUAYQAVAXgPALQgKAKgbACQgiAEgRADQgdAFgVALQAngmAagTg");
	this.shape_113.setTransform(322.6,670.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#003944").s().p("AgBgYQBxhDAXAmQAVAihBAVIhXAUIhIATQgpAMgeAPQBPg6A7gig");
	this.shape_114.setTransform(321.6,682.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#003944").s().p("AAEgOQBVgtAKgEQBGgaAPAtQAQAvhPATIhxAPIhhAQQg3AJgpAMQBPgfBug5g");
	this.shape_115.setTransform(320.5,691.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#003944").s().p("AgdgSQA0hGAGgFQAsgrAjAZQA/Atg+ArQghAXhKAdQhcAxgxArQAogwBGhbg");
	this.shape_116.setTransform(234.6,554.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#003944").s().p("AgQghQBQhSAiAwQAaAjgyAVQg9AQgNAFQhHAdgjAvQAfg8A7g7g");
	this.shape_117.setTransform(246,562.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#182E30").s().p("AM3UmQi7ABinhFQivhIh0iIIC+iPIjKAJQggAFgPAAQgZAAgOgOQgPgPgUgdIghgwIpdsrQgSgUgCgHQgEgJARgPIB2huIhpAHIgoAFQgcADgJgFQgIgFgMgWIgPgeIjJlDQgKgQAAgDQABgDAOgQIBMhTIh7gkQhaiNggiZQgah6AhhfQAph1B3ACQBOACBgAiQA9AVBoAyQD/B6EKC8IhMBWIBEgCQApgCAbABQARAAAFADQAEACAMAOIFrGoQAXAbA0A2QAtAyAXAkIAKAPQAAACgMAPIhPBjIB2gZIAYgEQAFAAAMAKQAdAaAkAzIA5BUQBoCUBECGQBbCyATCLQAHAyAAAKQAAAigTAQQgaAXg6AnIBOBBIAaAVQANAMAEANQAFAUgFAiIgLA1QgUBagxBJQgaAlgSAUQgeAhgaAIQgNAEgWAAIgkgBg");
	this.shape_118.setTransform(257.8,586.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#00130F").s().p("AGYFQQgJhegIgxQgTh3ghhXQgXg9gfgzQgjg7gugwQgvgxg5ghQg5ggg5gNQhbgUh3ATQg+ALhPAXQgzAOAAgBQgBgDAygTQBFgaBHgOQB2gYBjAUQA9AMA8AiQA8AjAxAzQAxAzAjA7QAgA3AWA+QAhBaAQB4QAJBQABBCQABA1gDAAQgCAAgFg1g");
	this.shape_119.setTransform(352.9,707.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#00130F").s().p("AjvFMQgEgwAAg8QABhSAOhNQAShlArhVQAZgwAggmQAcgkAnghQBEg4BIgWQA8gSAwADQAJAAAIABIAMACQALACgBABQAAABgKABIgNAAIgQABQgxACg2ATQhEAYhAA3QgnAjgYAfQggAqgWApQgqBVgTBfQgOBHgFBVIgDBrQgBAngCAAQgDAAgDgng");
	this.shape_120.setTransform(427.2,714.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#00130F").s().p("ACfCFQgMgfgIgTQglhSg/g8QgogpgigSQgogUggAGQgbAEgTARIgKAKQgDADgBAAQgCAAACgGQACgGAGgHQAQgXAhgHQASgFAWADQAWADAWAKQAlASAsArQBDBBAfBXQALAeADAYQADAUgCAAIAAAAQgCAAgHgSg");
	this.shape_121.setTransform(362.4,732.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#00130F").s().p("AiqCUQgCgbAEgiQAGgvARgoQAag7AmgiIAMgKIAMgIQAQgKAJgFQARgJAegOQAbgLAUgFQAMgDAKgBIAMAAIALADQAmAKAQAUQAHAIADAHQACAFgBABIgFgEQgGgGgGgEQgSgPgigHQgLgEgZAIQgVAHgWAKQgTAIgbAPIgWAOIgLAIIgLAJQgjAfgZA0QgSAogIArQgGAagDAgQgCAWgCAAQgDAAgCgWg");
	this.shape_122.setTransform(424.6,735.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#00130F").s().p("ADaEmIgOhdQgMhJgRg+QgYhUgnhGQgphKg+g4Qg3gxg6gZQgrgSgtgIQgigEAAgCQAAgDAiABQApABA1ASQA+AXA6AyQBCA5AsBOQAnBHAYBZQARBCAIBIQAGA2ABAoQABAjgCAAIAAAAQgCAAgGgig");
	this.shape_123.setTransform(349.5,717.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#00130F").s().p("AAuGJQgBgoAFg4IAGhAQAEgpABghQAEhPgbhVQgLgkgSgvIgehMQgihTgMgyQgMgrgCgzQABgjACAAQACAAADAiQAMBAAJAbQAPAwAjBRQAtBqARA3IALArIAIAsQAFAmgDAuQgBAigGApIgJBAQgIA7gCAjQgDAigBAAQgEAAgBgig");
	this.shape_124.setTransform(378.8,703);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#00130F").s().p("AhdH4IgOgzQgKglgFggQgEgbgDg7QgDgwACgyQAEhqAvhxQAUgvAeg6IAxhfQA0hhAXhEQAMgfAHgjIAKg0QADgsACAAQACAAABAtQgEBEgSA2QgWBIgyBhIgvBgQgfA8gSAsQgvBvgFBkQgCAuABAzQACBAADAUQADAdAIAnIALA0QAHAsgDABQgBAAgMgrg");
	this.shape_125.setTransform(412.5,701.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#00130F").s().p("AgXLNIgEioIgDj5QgBi9AIhzQAEg+AKhfIAPiSQAOiQgIhnQgGhegUhGQgFgUgDgFIgFgTQgGgPACAAQABgBAHAPIAIARIAJAZQAZBDAJBiQAKBugMCMIgOCTQgKBhgDA8QgGBfgCDPIgCD5QgCB5gCAvQgBA+gDAAQgCAAgCg+g");
	this.shape_126.setTransform(387.5,674.1);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#00130F").s().p("AA1JhIgJiOQgPkEgTjPQgUjngdjsIgRiOQgGg0ACAAQADgBAJA0QALA4AOBVQAhDcAWD3QAXD4AFDdQACBOgBBAQAAA0gCABQgCAAgEg1g");
	this.shape_127.setTransform(381,683.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#00130F").s().p("ABYJVQgRg3gVhRQgZhagYhwQgaiAgUh7QgUh8gPiAQgMhvgHhiQgFhTgBg5QgBgzACgBQADAAAEA0IAOCLQAIBVAPB6QASCHATB0QARBnAbCTQAXBwAVBcIAgCJQALAxgCACIAAAAQgCAAgQgxg");
	this.shape_128.setTransform(379.3,688.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#00130F").s().p("AALJbQgFg3gFhVQgLjRgGj+QgFj6ADjUQAChTACg5QADgzACAAQACAAACAzQACAoABBkIATOcIADCMQABA0gDAAQgCAAgFgzg");
	this.shape_129.setTransform(394.5,688.1);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#00130F").s().p("AAZJsIABiQQAAj1gNjnQgLjngaj1IgPiQQgGg1ADAAQACAAAJA0QAMA6ALBVQAeDiAOD7QAND0gIDpQgDBZgEA4QgEA1gCAAQgDAAAAg2g");
	this.shape_130.setTransform(394.7,690.1);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#00130F").s().p("AA+EyQAJhOADhDQAFhcgLhUQgMhWghhVQgVg1gmhPIguhYQgQggACgBQACgCAUAfQAWAiAdAyQAnBFAaBAQAjBUANBbQALBXgGBdQgFBFgNBNQgKA6gJAnQgIAkgCAAQgDgBARiGg");
	this.shape_131.setTransform(380.8,714);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#00130F").s().p("ABDGmQgCgBACgiIADhdIAAhAIgChKQgGhXgOhPQgMhLgahZIgXhGIgXg8QgOgigYgyQgPgfACgBQABgCATAdIAVAjQAUAlAEALIAaA8QAJAVAQAxQAaBRAPBVQAOBMAEBdIABBLQAAAZgDAoQgEA1gHAoQgFAigDAAIAAAAg");
	this.shape_132.setTransform(373.4,714.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#00130F").s().p("ABbI8QgCgBAGgtIADg2QABgPgBg4QgDieg4j5Qgoi2hBjaIgkh4QgMgtACAAQACgBARArQAXA8ATA7QBCDEAuDLQA3D3gCClQgBAygDAWIgHA2QgJAtgDAAIAAAAg");
	this.shape_133.setTransform(369.5,694.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#00130F").s().p("AA7DuQgOiFgYhtQgXhugqh/QgghiACAAQACgBAMAZQAPAcAQAoQAUAwARA6QAUBBAPBEQAPBFAHBBQAIA/ABAwQACAsgBAgQgCAbgCAAQgBAAgLhmg");
	this.shape_134.setTransform(383.5,710.1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#00130F").s().p("AgHEjQgDh5AAiqQAAipADh5QADh4AEAAQAFAAADB4QADB4AACqQAACrgDB4QgDB4gFAAQgEAAgDh4g");
	this.shape_135.setTransform(392.6,707.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#00130F").s().p("AB1GyIgMhpIgJhIIgOhSQgRhegYhbQgWhXgghgIgdhOQgHgVgUguIgphhQgQgjACgBQACgCATAiQANAWAJASIAbA3QAOAeAPAkQANAdARAyQAkBiAWBVQAYBdAQBfQAHAwAEAjIAHBJQACAVABAnIABAuQgBAmgBAAIAAAAQgCAAgEgmg");
	this.shape_136.setTransform(382.5,701.6);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#00130F").s().p("AASHfQgCAAAAgmIAAhnQgBidgKi1QgIizgRifIgLhmQgDglACgBQACAAAIAlQAJArAJA6QAWCbAKC4QAKDBgHCSQgCA9gEAqQgEAmgDAAIAAAAg");
	this.shape_137.setTransform(398.4,705);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#00130F").s().p("AhnENIgFgdIgCgoIABgwQABgPAGgoQAKg7AZg+QAqhoBIheQAYggAVgVQARgTACACQABABgOAVIgmA5QhGBpgkBcQgYA6gMA7IgJA1IgEAuQgBAdACAnQABAagCAAIAAAAQgCAAgGgZg");
	this.shape_138.setTransform(428.7,717.1);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#00130F").s().p("AhKGEIgEgnQgEgmAAgQIAAhAIACgkIADgmQAJhSARhUQAeiSA1iVQATgzAPgjQAPggACABQACABgKAhIgcBYQgyCogbB+QgQBUgLBQIgGBJIgDA/QgBAoACA1QABAigCAAQgCAAgGgig");
	this.shape_139.setTransform(421.8,704);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#00130F").s().p("AgWGSQgDgmgCg4QgDiGAMiuQAJh4ASi8QANh/AEAAQAGAAgICAQgCApgTEKQgKCwgECEIgCBeQgBAigCAAIAAAAQgDAAgDgig");
	this.shape_140.setTransform(412.6,710.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#00130F").s().p("ABSFrQgCgBAFgeIAFgjIACgVQACgOgBgLIAAg4IgDgfIgEghQgNhJgYhGQgkhmhKiRQg0hlADgBQAFgCA6BgQBNCFAoBzQAaBKAKBJIAEAiQABAKAAAWIgCA6QAAAOgHAhIgDAUIgFAPQgJAdgDAAIAAAAg");
	this.shape_141.setTransform(364.9,710.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#00130F").s().p("ADXI6QgFgjgFgaQgLg+gEgSIgJguIgLgyIgahuQgkiEgqhyQgth7g1h0QgshbgGgLIguhXQgMgWgcgwQgVgkgLgRQgbgtACgCQACgBAfArIAiAzIAsBFIAxBXQANAXAnBOQA4B3AsB5QAqB0AjCFQAUBWAEAZIASBiQAEAWAHA7QAFAkABAZQAEA1gCAAQgDAAgHg0g");
	this.shape_142.setTransform(356.2,691.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#00130F").s().p("ABuGtQACg8AAgtIgDhJQgBgYgGg7QgNhkgWhWQgYhcgjhZIghhNIgQgiIgQgfQgVgogeg0QgUghABgBQACgBAYAfIAaAlQAWAhAKASIASAfIARAiQAIARAbA8QAlBYAZBfQAWBbALBjQAFA7AAAZIABAnIAAAjQAAAWgEAnIgFAtQgGAmgCAAQgCAAABgng");
	this.shape_143.setTransform(369.7,702);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#00130F").s().p("ABZJpIgTiQQgnkqgaivQghjjgqj1IgXiPQgIg1ACAAQACgBANA0QAPBDAPBLQArDVAmEDQAnEFAUDVQAHBMAFBFQADA1gCAAQgCAAgIg0g");
	this.shape_144.setTransform(383.5,686.5);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#00130F").s().p("AgyIoQgDABABgsQABgnAEhQQALiaAajsIAqmGQAQiiADAAQADAAgBAsQAAAmgFBRQgJCKgcD9IgpGFIgNB2QgFAsgCAAIAAgBg");
	this.shape_145.setTransform(416.9,700.6);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#00130F").s().p("Ag+J+QgBAAAEgzQAGhIAAhDQAAhIgKiGQgMiqAAhTQgCiOARhwQAPhuAhhcQAahKAhg1QAbgsADACIgXAuQgfA9gVBDQgdBdgNBrQgOBsABCPQABA4ADBKIAHB6QAHCEgDBLQgDBSgJA6QgJAygDAAIAAAAg");
	this.shape_146.setTransform(421.9,689.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#00130F").s().p("AhFKvQgFg8gDhnQgChgABiRIgBkmQgCikAPiEQAPiGAihoQAahTAmhDQAfgzADABQABABgbA1QgjBJgWBOQgfBrgNCAQgMB+ABCoIABCYQAABKgBBEQgEC1AAA8QgBA4ACBqQABA8gCAAQgCAAgGg7g");
	this.shape_147.setTransform(412.8,680);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#00130F").s().p("AgGKGQgEkOAAl4QAAl8ADkIQADkMAEAAQAEAAAEEMQADEGAAF+QABF2gEEQQgDELgEAAQgEAAgDkLg");
	this.shape_148.setTransform(397.4,666.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#578687").ss(4,1).p("AtEqVIaJUq");
	this.shape_149.setTransform(245.1,641.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#245B4E").s().p("AICM+IAZgwIg4AtQjKgRjFhMQjthbjbitQl1kniXmTIBlgsIh/ggQg1iqgIioQgDg1ACguIADgjQBvgqCzgLQFmgWFUCaIAIBtIAfhaQCpBRCdB9QG6FeCAHjQAoCXAECTQACBJgGArQgvAThRAPQh5AYh/AAQguAAgugDg");
	this.shape_150.setTransform(245.1,641.3);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#3F726A").ss(4.5,1).p("AAAykMAAAAlJ");
	this.shape_151.setTransform(364.3,572.6);

	this.instance_1 = new lib.ClipGroup_3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(375.5,575.8,1,1,0,0,0,113.9,149.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#3F7677").ss(3.8,1).p("ALiq6I3DV2");
	this.shape_152.setTransform(470.4,638.8);

	this.instance_2 = new lib.ClipGroup_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(469.5,635.6,1,1,0,0,0,139.6,127.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#428A8C").ss(3.4,1).p("Aljs4ILGZx");
	this.shape_153.setTransform(261.9,531.5);

	this.instance_3 = new lib.ClipGroup_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(262,531.5,1,1,0,0,0,59.1,104.7);

	this.instance_4 = new lib.ClipGroup_0();
	this.instance_4.parent = this;
	this.instance_4.setTransform(230.7,702.1,1,1,0,0,0,99.3,56.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#338287").ss(3.4,1).p("AMzFzI5lrl");
	this.shape_154.setTransform(496.5,692);

	this.instance_5 = new lib.ClipGroup();
	this.instance_5.parent = this;
	this.instance_5.setTransform(496.4,692,1,1,0,0,0,96,59.4);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#3C6B6B").ss(4.6,1).p("AIcxMMgQ3AiY");
	this.shape_155.setTransform(520,586.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#245B4E").s().p("Aq9SEQhLiwgejJIA7ARIhAgzQgejpAljvQAtkhCNkfQCCkKC4jKQCbiqC8h5IBKBmIAFiWQCyhlC7gyQBdgZA6gFIAsBSQAzBrAjB8QBvGMhaGlIh4AkIBtAMQg0DThlDOQkdJFn/EGQihBRikAoIiDAYQgggwgmhYg");
	this.shape_156.setTransform(519.9,586.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#081F06").s().p("AA0C4QhsgChYhFQhHg5hAhrIBABIQAmApAhAaQAoAeAzASQAyAQAyACQA3ABA3gmQAxgjAdg0QAWgnAJhAQADgVAGhZQAHBFgDAvQgDBCgWAsQgdA7g2AoQg5Aqg9AAIgBAAg");
	this.shape_157.setTransform(282.1,477);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#081F06").s().p("AgcBfQhPgTg+gyQhCg0gjhNQByCNCLAgQCGAeCbhUQhhBYh5AAQgoAAgqgJg");
	this.shape_158.setTransform(281.4,454.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#081F06").s().p("AgbBNQg+gQgugpQgwgrgSg9QBHBmBvAcQBtAcBwg4QgtAtg/APQgcAHgdAAQggAAgggIg");
	this.shape_159.setTransform(279,433.3);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#081F06").s().p("AgLAOQg7g0gng6QA+AgA6A0QA8AzAnA6Qg+gfg7g0g");
	this.shape_160.setTransform(280.3,408.9);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#081F06").s().p("AgSAAQgBhHAlg0IgEA+QgDAmAAAXQAAApAIBTQglgzAAhJg");
	this.shape_161.setTransform(286.7,401.3);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#081F06").s().p("Ah9CIQBsgRBAhLQBBhKAChuQAUA1gNA4QgNA0glAsQglArgyATQgiAOgjAAQgUAAgUgFg");
	this.shape_162.setTransform(306.6,411);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#081F06").s().p("AhMBhQBdgXA0gaQA4gbApgwQAogvAXg9QgOCXibBCQhlAri7AKQAggLB4gbg");
	this.shape_163.setTransform(325,429);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#081F06").s().p("AgFCCQgjgGg8gVQhegihAgoQBPAcBGATQBDATAaAFQA1AKAogJQBGgRAwhNQAUggAshtQghDdiGApQgYAHgbAAQgWAAgYgFg");
	this.shape_164.setTransform(333.8,453.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#081F06").s().p("ABaDbIhWjLQgnhfg9hzQgkhDhPiJQCbDDBZDRQAdBDAxCHQAxB3A0BIQhEhCg2hyg");
	this.shape_165.setTransform(295.1,428.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#030D08").s().p("AAOBnIhVg6QgxgjgbgeQBUAsAagbQAPgPgHgkQgCgOgNgnQgFgOgJgTIgTglQAiA3AaAcQAuAyAngNQAwgRADh2QABBrADBNQADBOAFAyIADAmQAEAbAKAJIiGhbg");
	this.shape_166.setTransform(282.7,410.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#030D08").s().p("AAcDWQgMgBgQAIQAPgOgBgSQgBgRgNgQIgTgPQgQgLgBgEQgBgEAFgMQAFgOgBgGQgDgQgSgKQgRgLgegDQAngVANgVQAQgdgmgVQgfgRg9gKQAfgDAEhCQACgfgEg7QAdAmAsAYQArAYAuAFQgcAfAkAuQAOATAXADIgMAIQgNAJgDAJQgKAdAjAUQAXAOAmAIQgmAPAPAmQALAcAfAdQglgMgfARQgeARgLAmQgFgPgRAAg");
	this.shape_167.setTransform(303.6,441.2);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#182E30").s().p("AhEAAQgEgUBAgLQBAgLALAgQAGAQgSANQgRALgbAEIgUABQgzAAgIgjg");
	this.shape_168.setTransform(289.4,439.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#182E30").s().p("AglAtQgZgDgRgLQgQgKABgLQABgZAngQQAhgOAsAAQAsAAATANQAVAPgbAXQgtAog1AAIgTgBg");
	this.shape_169.setTransform(293,460.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#182E30").s().p("ABiDUQg0gBgwgYQhjgyhLh7Qg1hUgziNQBNBzBUBXQAjAjAXATQAkAdAgAMQAuAQAqgXQAegRAlgtQAdgiAnAMQAnAKAKAsQAJArgZAoQgXAlgpAVQgsAWgzAAIgGAAg");
	this.shape_170.setTransform(279.9,481.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#182E30").s().p("ABpCvQgTgGghgSQhAgkg6g8Qg2g2grhEQACg2AGggQADgUADgEQAGgIALANQAZAdAiA5QAnBCARAWQAoA4AeAUQANAJAeAIQAeAIANAKQARALAIAPQALATgMANQgJAKgRAAQgMAAgRgGg");
	this.shape_171.setTransform(265.8,449.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#182E30").s().p("AAcBnQgqgggtgyIgpgvQgYgfgIgYQgLgjAtgWQAkBRA0A5QAjAoA4AWQAYAJAQAPQAWAVgOATQgKANgQAAQgcAAgvgkg");
	this.shape_172.setTransform(266.5,428);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#182E30").s().p("ABLCkQgPgGgggQQhcgwhFhkQBmhrggg9QAoAdApAKQAyALAngUQAMA5AHBHQAHBBAAA4IABAmQgBAagIAEQgEACgGAAQgOAAgagLg");
	this.shape_173.setTransform(279.8,404.4);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#182E30").s().p("AhUC2QgMgLATgdQAKgPASgWQApg9gDhCQgCgrgQgsQgQgqgagjQA7AAAsAVQA8AagCAzQgCAqgYA0QgRAkggAyQg6BfgdAAQgHAAgFgFg");
	this.shape_174.setTransform(317.5,408);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#182E30").s().p("AiWDNQgagCgIgJQgMgKAVgQQAWgRAtgUQAygVATgNQBLgxAahUQAYhPgYhcQAiAhAjAnIAlAoQAVAcAAAUQAAAVgOAdQgHAQgTAeQgxBQhDAoQg+AnhPAAQgUAAgWgDg");
	this.shape_175.setTransform(332,422.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#182E30").s().p("AgBD5QhvgRh9haQBKAEBJgHQBAgGAggKQA2gPAagjQAbglAVg5QAMggAThGQASg9AOhDQA5CMgVCIQgPBng5A/Qg3A9hMAAQgQAAgPgDg");
	this.shape_176.setTransform(339.8,448.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#030D08").s().p("AFVFzQgfg6iUiMIiiiTQiDh7huhNIhVg0QAKgTgBgRQgBgkg3ACIAVgvQAegtArALQAXAGgBAMQAAAGgOATQgeArAeAhQARASASAeQALATBFA8QBkBaDSDCQDeDPgCAEQgGAJgIAEQgEADgDAAQgHAAgFgJg");
	this.shape_177.setTransform(344.5,494.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#0A2D2B").s().p("AjJJyQhggIhghWQhrhhg5iWQg2iMADiYQBxDhCdB3QAnAeAVALQAnAWAegFQAXgDAJgUQAJgSgGgXQgIgcgbgPQgYgOgfAAQgcAAgVgHQgXgHgXgPQgxghg0g4Qgeghg4hHQgYgbgMgPQgXgbgCgTQgCgTAFgeIAJgxQAKgzAMgnQAvBkAmA9QA2BVA+A0QAiAdAnAGQAwAIAWgnQAHgNAAgPQgBgPgJgLQgMgQgYgEIgqgEQg2gHg5gzQgkgfgyhBQgOgRgZgkIgKgNQgGgIgCgGQgDgIADgKIAGgSQAdhRAng8QAJCjCCBVQAcARAZAHQAlAJAMgZQALgYgcgYQgPgNgigRQg9gfgwhAQgTgZgRgeIgNgUQgJgPABgGQABgLAUgXIAcgeQAhgnALgUQAUgmADgpQAYAOAvAFQAXADA6gCIArgCIAVgBQAJABAIAIQAoAiATBnQADAQADA0QACArAIAXQATA6AsgjQAqgigCgvQgCg6gyhCQgggpg/g5QBTADBaAfQAqAOArAUQAPAHAcAPIAXAKQAQAIADAGQAIANgJAkQgDAOgLAiQgTA6gqA4QgXAeghAiIgOAOQgIAJgDAIQgLAZAWARQAgAXAwgaQAjgTAdgkQAug6AFhJQAFg/gZhPQBaA7BJBKIAiAjQAVAXgBARQAAAMgGATIgKAgQgeBmgYAlQguBGhZALQglAFgWAMQgjASAQAdQAMAXAhALQAcAKAdgDQBMgJA4hxQA1hrAGifQA2BGAcBJQAgBTgDBOQgEBLgjBHQglBLg6ApQhEAwhYgSQhAgNhXgzIgTgMQgMgHgJgCQgcgIgNAUQgLAQgBAdQgBA/gHApQgIA4gVAsQghBDhCAhQg0AZg+AAIgagBgAhFDkQgrAjAEAvQABAQAUgDQASgCAXgRQA6gqgSgiQgKgSgQAAQgQAAgVASgABpBIQgEAOAmAIQAlAJAFgRQAFgUgkgMQgKgDgIAAQgUAAgHAVgAi3BKQADASAngFQAogEgBgRQgBgIgNgIQgOgIgQgDIgKAAQgfAAAEAjgAAriCQgYAOAJAOQAGAKAcgOQAcgNgMgMQgFgGgIAAQgJAAgNAHgAjkihQgFAeAbADQAcADACgTQACgYgYgLQgHgEgFAAQgOAAgEAWgAhpkQQgeAXAcASQAZAPAjgVQAjgUgggUQgNgIgOAAQgRAAgRANg");
	this.shape_178.setTransform(307.5,444.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#0A2E16").s().p("AhngzQhYhIhehCIhNg0QgHhBAFgpQAKhRBCB8QA3BoE2EKIDLCtQBZBNgCANQgDAagmAPIglAKQhwjKkYjlg");
	this.shape_179.setTransform(347.4,496.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#00251F").s().p("ArKQEQAAirAfi0QA1k2Cak5QCLkYDYkRQC3jpEAj4QBJhHCEh4QC4ioAIAIQADAEjTDRIjtDrQj1EAivDwQjMEViBEYQiJEngvEsQgaCmAACGQANELABAAIgBAAQgPAAgTkwg");
	this.shape_180.setTransform(430.8,566.3);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#003944").s().p("AAJAYIglgfIgsggQAWALAdAHQASAFAjAGIAWAEQAMADAFAIQAEAJgEALQgFALgLADIgHABQgQAAgXgQg");
	this.shape_181.setTransform(362.3,610.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#003944").s().p("AgcAbQgDgLgHhKQAHAQAQARQAJAKATAQQAWARACADQAHALgQANQgQAOgMAAQgSAAgKggg");
	this.shape_182.setTransform(477.4,443);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#003944").s().p("AAbAjQgVgLglgQQgggNgHgGQgPgPAOgYQAfgzA1BFQAdAkAlBEQgVgUgfgRg");
	this.shape_183.setTransform(487.6,458.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#003944").s().p("AgjAUQgBhCgCgRQAIAUAWAWIAkAiQAOAPgDANQgEAOgVAHQgIACgGAAQgcAAgHgsg");
	this.shape_184.setTransform(471.5,450.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#003944").s().p("AAUAeIgugJQgcgGgHgKQgKgMATgUQAQgSAPADQANADAPAUQAjArAYAUQgSgIgcgGg");
	this.shape_185.setTransform(373.6,620.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#003944").s().p("AgKAcIgthHQAQANAbAFQAOADAfADQAUAEADAIQADAIgKAQQgQAbgRAAQgNAAgNgQg");
	this.shape_186.setTransform(366.1,599.3);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#003944").s().p("AgRAFQgvgOgagPQgwgcAYggQAjgvBeBjQAjAjBJBhQgvgzhdgsg");
	this.shape_187.setTransform(393.9,588);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#003944").s().p("AgVAPIhJgbQgugaAdgiQAWgbAoAZQAQAKAmAlIB3ByQgwgihhgmg");
	this.shape_188.setTransform(418.1,546.7);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#003944").s().p("AgDAVQg1gPgcgOQg2gaAUgjQAbgtBhBUQAzArBEBJQgpgdhXgkg");
	this.shape_189.setTransform(449.3,508.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#003944").s().p("AAQAWQgOgDgYgBQgWgBgFgFQgIgHAKgSQARglAjAeQATARAeAlQgQgIgWgEg");
	this.shape_190.setTransform(436.7,508.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#003944").s().p("AAkAkIhWgeQghgKgUgSQgcgbAggWQAegVA4AxQAcAYAlAkIBBA+QgggXgxgUg");
	this.shape_191.setTransform(438.1,517.8);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#003944").s().p("AAHAWQgqgWgqgjQAgAUA1gCIAsgCQAaACgBAXQAAAegYAAQgRAAgdgOg");
	this.shape_192.setTransform(366.8,589.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#003944").s().p("AAcAXIhDgcIg/gYQAoAJBGgEQAvgDATAEQAvAHgcAiQgJAMgUAAQgPAAgVgHg");
	this.shape_193.setTransform(368.9,581.7);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#003944").s().p("AgNATQgagwgIgMQAKAJA4AUQAuAVgaAYQgKAJgKAAQgQAAgQgXg");
	this.shape_194.setTransform(376.8,572.1);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#003944").s().p("AgDAXQg0g0gOgNQAgASBAAFQAcACAIAGQANAJgLAXQgKAWgSAAQgRAAgXgUg");
	this.shape_195.setTransform(380.8,561.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#003944").s().p("AAcAoIgugoQgogigigQQASAFBnAWQBZAagjAlQgLALgNAAQgOAAgRgLg");
	this.shape_196.setTransform(378.5,566.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#003944").s().p("AAMAPQgUgHgsgYQAIACAxgFQAogEAFAPQAJAdgWAAQgJAAgQgGg");
	this.shape_197.setTransform(393.7,542.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#003944").s().p("AAEAaQhahCgRgLQAnASBEAMIBDAIQApAKgJAgQgHAXgXAAQgZAAgsgag");
	this.shape_198.setTransform(379.1,554.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#003944").s().p("AA7AzIhAguQhAgqg1gaQAWAIB8AeQBvAhgNAlQgHATgSAAQgPAAgXgNg");
	this.shape_199.setTransform(387,542.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#003944").s().p("AgIAaQgigzgPgPQAcARA1gFQAagCAGALQAGAKgNAXQgOAbgRAAQgNAAgNgPg");
	this.shape_200.setTransform(391.4,548.9);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#003944").s().p("AADANIgugiIA3AEQAlACgFAUQgEARgNAAQgKAAgOgJg");
	this.shape_201.setTransform(388,553.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#003944").s().p("ABCA4QgSgHgtgeIh6hQQApAVBSAUQAPAEA5AJQAwAMgFAfQgEAagXAAQgLAAgPgGg");
	this.shape_202.setTransform(390.9,531.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#003944").s().p("AAjAkIgpgeQgwgighgOQAOAEBhAQQBWAWgfAhQgIAKgNAAQgKAAgNgHg");
	this.shape_203.setTransform(400.7,528.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#003944").s().p("AgBATQgrgsgRgIQAOADBDAGQA4AKgSAeQgMASgPAAQgPAAgRgPg");
	this.shape_204.setTransform(403.4,525.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#003944").s().p("AAHATQg1gegPgHQAfAHAvgKQAcgFAFABQAPADgEAXQgEAZgWAAQgLAAgRgHg");
	this.shape_205.setTransform(409.5,521);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#003944").s().p("AgMAZQgGgGgKgXQgIgTgNgIQAOAEA9AIQAvANgtAcQgPAKgLAAQgIAAgGgHg");
	this.shape_206.setTransform(413.6,516.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#003944").s().p("AA3AvIhBgxQg/grgzgQICVAfQB1AggVAsQgHARgRAAQgRAAgZgQg");
	this.shape_207.setTransform(410.4,506.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#003944").s().p("AgNAZQgFgHgJgVQgIgUgKgJQAJAEAzAJQArAMgRAVQgKAOgRAEIgJABQgLAAgHgIg");
	this.shape_208.setTransform(423.7,502.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#003944").s().p("AACAdQhVhNgQgMQAlAXBIASQAQAEAtAIQAjAKgIAgQgHAagWAAQgYAAgrggg");
	this.shape_209.setTransform(424,495);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#003944").s().p("AgDASIgnguIA5ALQAlAHgMAXQgIAQgNAAQgKAAgMgLg");
	this.shape_210.setTransform(432.5,488.8);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#003944").s().p("AA4AzQgUgKgkgfQg6gugzgVQAUAGBtATQBiAYgJApQgGAZgVAAQgLAAgPgHg");
	this.shape_211.setTransform(435,478.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#003944").s().p("AgHAXIgthGQADADBAAfQAvAUgLAWQgJATgOAAQgPAAgUgZg");
	this.shape_212.setTransform(448.7,470.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#003944").s().p("AACAZIhyhPQApATBLAOIBIALQAuAMgMAhQgHAUgWAAQgcAAgzgeg");
	this.shape_213.setTransform(448.4,465.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#003944").s().p("AgPAYQghhAgKgPQAZAbA0AWQAcAMAGAGQANANgSATQgLAMgMAAQgTAAgVggg");
	this.shape_214.setTransform(459.7,461);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#003944").s().p("AAABFQgigCAVg8IAihMQgDAPAFBBQAAA7gXAAIAAgBg");
	this.shape_215.setTransform(490,432.6);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#003944").s().p("AgNBgQgggLAehQIAthmQgJAkAABAIACA+QgEAhgUAAQgFAAgHgCg");
	this.shape_216.setTransform(486.2,435.7);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#003944").s().p("AhDAcQgdgCAJgeQAGgXAZAAQAIAAAjAIQBDAOAkgBQgXAEggAHIg2APQgeAIgPAAIgDAAg");
	this.shape_217.setTransform(505.9,440.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#003944").s().p("AgcAUQglAJgUgBQgmAAgBgeQgCg6B0AmQBPAZA4AjQg8gchdAKg");
	this.shape_218.setTransform(503.4,444.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#003944").s().p("AiQAGQgCgzCEASQBWANBJAYQg+gNhXANQgvAPgfAFQgOADgKAAQglAAgBgbg");
	this.shape_219.setTransform(500.6,450.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#003944").s().p("AAAAMQgqgNgXgMQgqgXAVgdQAegmBFBMQAeAgAzBJQgfgjg/gfg");
	this.shape_220.setTransform(487,466.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#003944").s().p("AAwArQgOgIgtgVQgmgNgVgLQgngVAFgZQAIglAtAbQAZAOAeAeQAuArA3A6QgXgSgigSg");
	this.shape_221.setTransform(477.2,477.2);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#003944").s().p("AgOgEQgygTgfgSQg8giAUgcQAWgfA/ArQAjAYAnApQBEBEAxBLQgzhBhog4g");
	this.shape_222.setTransform(470.7,490.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#003944").s().p("ABjA9IhdgmQhFgWgxgVQhfgqAYghQATgcBXAyQAtAaA5AsICkBtQgmgWg0gXg");
	this.shape_223.setTransform(439.5,528.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#003944").s().p("AAtAfIg4gPQh9gbAzgjQARgMAhAQQAMAGAeAVQAgAVA+AuQgXgMghgJg");
	this.shape_224.setTransform(426.2,529.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#003944").s().p("AA/AvQgTgKgvgVQgwgQgegPQg5geAPgcQASgjBrBUIB9BtQgagTgmgTg");
	this.shape_225.setTransform(423.7,537.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#003944").s().p("AgIAHQg2gIgjgLQhCgXAkgiQAXgVA0AXQAWAKAvAfQA2AjBFBHQg5gwhbgZg");
	this.shape_226.setTransform(410.2,557.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#003944").s().p("AA5ArIhDgQQhCgQgLgEQgygUAUghQARgcAsAXIA8AqQBDAuA1AaQgbgKgogKg");
	this.shape_227.setTransform(407.8,565.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#003944").s().p("ACGA6Ih2gfQhagShCgTQiBgoAZgkQANgSAwAMQAPADAxATQAhAMAsAUIBKAjIBtAxQBAAdAsAXQgvgVhEgTg");
	this.shape_228.setTransform(412.5,576.4);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#003944").s().p("AATAUIgrgFQgXgDgJgIQgMgJARgUQASgUAoAfQAWAPAgAgQgRgIgZgFg");
	this.shape_229.setTransform(385.6,592.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#003944").s().p("AA7AjQgTgGgqgLQgugHgcgJQg3gRASgeQAUggBeA5QAzAdBCAwQgZgLgigLg");
	this.shape_230.setTransform(386.4,603);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#003944").s().p("ABMAsIhSgNQg8gEgjgIQhDgRANgoQANgmA7AXIBRApQBaAvBGAbQgjgJgvgJg");
	this.shape_231.setTransform(387.4,611.2);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#003944").s().p("AgBAZQg+gZgcgTQg0glA0gmQAegVAmAlIAwA/QA1BEAoAyQgpglhOgpg");
	this.shape_232.setTransform(460.3,494.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#003944").s().p("AABAJQgogJgXgJQgqgSAWgeQAdgoBDBGQAyAxAbAzQgegog8gYg");
	this.shape_233.setTransform(450.6,501.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#182E30").s().p("Ar1RbQgjgKgyhJQgqg/gQhMIgJgtQgFgcAEgRQADgLALgLIAWgRIBCg3QgxgigWgSQgQgOAAgdQAAgKAGgpQAQh1BNiYQA7hyBXh9QAQgVAggxQAfgsAZgWQAKgIAEgBIAUAEIBkAVIhChUQgKgNAAgCIAIgNQATgeAngqIA/hFIE0lnQALgMADgCQAEgCAPgBIBzADIhBhJQDhieDZhpQBZgqAzgSQBSgdBCgBQBlgCAiBjQAcBQgWBoQgaCAhOB5IhoAfIBBBHQAMAMAAADQAAADgIAOIiqESIgNAZQgKASgHAEQgIAFgYgDIgigEIhYgFIBjBcQAPANgDAIIgRAXIoBKwIgcAoQgRAYgNANQgMANgVgBIgogEIirgIIChB5QhiB0iVA9QiNA6igAAIgeAAQgSAAgLgDg");
	this.shape_234.setTransform(440.6,522);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.instance_5},{t:this.shape_154},{t:this.instance_4},{t:this.instance_3},{t:this.shape_153},{t:this.instance_2},{t:this.shape_152},{t:this.instance_1},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]}).wait(90));

	// Artwork 4(2).ai
	this.instance_6 = new lib.zhead();
	this.instance_6.parent = this;
	this.instance_6.setTransform(411.6,600,1,1,0,0,0,63.5,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({y:593.3},0).wait(1).to({y:586.7},0).wait(1).to({y:580},0).wait(1).to({y:573.3},0).wait(1).to({y:566.7},0).wait(1).to({y:560},0).wait(1).to({y:553.3},0).wait(1).to({y:546.7},0).wait(1).to({y:540},0).wait(1).to({y:533.3},0).wait(1).to({y:526.7},0).wait(1).to({y:520},0).wait(1).to({y:513.3},0).wait(1).to({y:506.7},0).wait(1).to({y:500},0).wait(1).to({y:493.3},0).wait(1).to({y:486.7},0).wait(1).to({y:480},0).wait(1).to({y:473.3},0).wait(1).to({y:466.7},0).wait(1).to({y:460},0).wait(1).to({y:453.3},0).wait(1).to({y:446.7},0).wait(1).to({y:440},0).wait(31).to({y:446.4},0).wait(1).to({y:452.8},0).wait(1).to({y:459.2},0).wait(1).to({y:465.6},0).wait(1).to({y:472},0).wait(1).to({y:478.4},0).wait(1).to({y:484.8},0).wait(1).to({y:491.2},0).wait(1).to({y:497.6},0).wait(1).to({y:504},0).wait(1).to({y:510.4},0).wait(1).to({y:516.8},0).wait(1).to({y:523.2},0).wait(1).to({y:529.6},0).wait(1).to({y:536},0).wait(1).to({y:542.4},0).wait(1).to({y:548.8},0).wait(1).to({y:555.2},0).wait(1).to({y:561.6},0).wait(1).to({y:568},0).wait(1).to({y:574.4},0).wait(1).to({y:580.8},0).wait(1).to({y:587.2},0).wait(1).to({y:593.6},0).wait(1).to({y:600},0).wait(11));

	// BG
	this.instance_7 = new lib.Path();
	this.instance_7.parent = this;

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#000201").s().p("AqJAgIAAg/IUTAAIAAA/g");
	this.shape_235.setTransform(1221.7,287.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#022B18").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgHAAIAAAfQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_236.setTransform(1264.5,381.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQADAAADADIAXAWQAFAGgFAHIgdAcQgEAFgHgFQgGgHAGgGIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAJAAAAAJQgBADgCADQgCADgEgBg");
	this.shape_237.setTransform(1262.1,379.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_238.setTransform(1270.7,381.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#022B18").s().p("AgfBLQgEABgDgDQgCgDgBgDQAAgJAKAAIAWAAIAhghIAAg2IgYgZIgKALIAVAVQAGAGgGAHQgGAFgGgFIgbgcQgCgDgBgDQABgEACgDIAWgWQADgDADAAQADAAACADIAiAhQADADgBADIAAA+QABADgDADIgmAmQgDADgDgBg");
	this.shape_239.setTransform(1273.2,379.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#022B18").s().p("AgFAyQgCgDAAgDIAAhXQAAgIAHAAQAJAAAAAIIAABXQAAAIgJAAQgDAAgCgCg");
	this.shape_240.setTransform(1267.6,379.3);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_241.setTransform(1267.6,390.1);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_242.setTransform(1264.8,368.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_243.setTransform(1270.4,368.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_244.setTransform(1267.6,371.2);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_245.setTransform(1270.7,352.7);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#022B18").s().p("AgGBJIgWgXQgCgCgBgEQABgDACgDIAbgcQACgCAEAAQADAAADACQACADAAADQAAAEgCACIgVAWIAKAKIAYgYIAAg2IghgiIgWAAQgEAAgDgCQgCgDgBgDQABgEACgDQADgCAEAAIAaAAQADAAADACIAmAnQADADgBADIAAA9QABAEgDACIgiAiQgCADgDAAQgDAAgDgDg");
	this.shape_246.setTransform(1273.2,354.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQACADAAADIAAAeIAHAAQAEABACACQADADAAADQAAAEgDADQgCACgEAAg");
	this.shape_247.setTransform(1264.5,352.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#022B18").s().p("AgEBJIgigiQgCgCAAgEIAAg9QAAgDACgDIAmgnQACgCAEAAIAbAAQAEAAACACQACADABAEQgBADgCADQgCACgEAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQACgCAFAAQADAAABACIAdAcQACADAAADQAAAEgCACIgXAXQgDADgDAAQgCAAgDgDg");
	this.shape_248.setTransform(1262.1,354.7);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#022B18").s().p("AgFAyQgCgCAAgEIAAhXQAAgDACgDQACgCADgBQAJAAAAAJIAABXQAAAJgJAAQgDgBgCgCg");
	this.shape_249.setTransform(1267.6,355);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_250.setTransform(1267.6,344.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_251.setTransform(1270.4,365.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_252.setTransform(1264.8,365.8);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_253.setTransform(1267.6,363.2);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#022B18").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_254.setTransform(1267.6,302);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_255.setTransform(1267.6,309.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#022B18").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABACIABABIAAADIgBABIgCADIgBABIgCABIgCABg");
	this.shape_256.setTransform(1267.6,338.1);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#022B18").s().p("AgHBhQAAgDACgDQACgCADAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFBMQgCgDAAgDQAAgEACgDQACgCADAAQAJAAAAAJQAAAIgJAAQgDAAgCgCgAgFAwQgCgDAAgDQAAgJAHAAQAJAAAAAJQAAAIgJAAQgDAAgCgCgAgFAUQgCgDAAgDQAAgEACgCQACgDADAAQAJAAAAAJQAAAJgJAAQgDAAgCgDgAgFgHQgCgCAAgEQAAgDACgDQACgDADAAQAJAAAAAJQAAAJgJAAQgDAAgCgDgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFg+QgCgDAAgEQAAgDACgDQACgCADAAQAJAAAAAIQAAAJgJAAQgDAAgCgCgAgFhaQgCgDAAgDQAAgJAHAAQAJAAAAAJQAAAIgJAAQgDAAgCgCg");
	this.shape_257.setTransform(1267.6,325.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_258.setTransform(1267.6,313.1);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#022B18").s().p("AgQAUIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAAIgJAAIgIAAIAAAfQAAAJgHAAQgJAAAAgJg");
	this.shape_259.setTransform(1171.4,381.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQAEAAACADIAWAWQADADAAAEQAAADgDADIgcAcQgEAFgHgFQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAAIgIAAg");
	this.shape_260.setTransform(1168.9,379.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_261.setTransform(1177.6,381.7);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#022B18").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgnAmQgBADgEgBg");
	this.shape_262.setTransform(1180,379.7);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#022B18").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_263.setTransform(1174.5,379.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_264.setTransform(1174.5,390.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_265.setTransform(1171.7,368.6);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_266.setTransform(1177.3,368.6);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_267.setTransform(1174.5,371.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#022B18").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgDACgDQADgDADAAQAJAAAAAJIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_268.setTransform(1177.6,352.7);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#022B18").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_269.setTransform(1180,354.7);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#022B18").s().p("AgHAdQgJAAAAgJIAAgnQAAgJAJAAQAHAAAAAJIAAAeIAIAAQAJAAAAAJQAAAJgJAAg");
	this.shape_270.setTransform(1171.4,352.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#022B18").s().p("AgEBJIgighQgCgDAAgDIAAg9QAAgEACgCIAmgnQACgDAEAAIAbAAQAIAAAAAJQAAAJgIAAIgYAAIggAhIAAA2IAYAZIAKgKIgVgWQgCgCAAgEQAAgEACgCQADgDADAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgCADgEAAQgDAAgCgDg");
	this.shape_271.setTransform(1168.9,354.7);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#022B18").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_272.setTransform(1174.5,355);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_273.setTransform(1174.5,344.2);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_274.setTransform(1177.3,365.8);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_275.setTransform(1171.7,365.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_276.setTransform(1174.5,363.2);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#022B18").s().p("AgzAuIAzhbIA0Bbg");
	this.shape_277.setTransform(1174.5,302);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_278.setTransform(1174.5,309.3);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgCgCAAgEQAAgCACgDQADgDACAAIAEACIADACIABACIAAABIAAADIAAABIgCADIgDACIgBABg");
	this.shape_279.setTransform(1174.5,338.1);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#022B18").s().p("AgIBhQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCgAgFAUQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgCAAgDgDgAgFgHQgDgCAAgEQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_280.setTransform(1174.5,325.6);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_281.setTransform(1174.5,313.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_282.setTransform(1243.4,332);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_283.setTransform(1233.5,345.3);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_284.setTransform(1225.9,323.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_285.setTransform(1242.1,359.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_286.setTransform(1225.9,311);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDIADgCIABAAQAEgBADADIABABIABACIABACIAAACIgBACIgBABIgBABQgCADgEAAQgCAAgDgDg");
	this.shape_287.setTransform(1224.6,336.6);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#022B18").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCADgEgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAJgBAAAIQAAADgDADQgCADgEAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAEABACACQADACAAAEQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_288.setTransform(1224.6,343);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDAEABIADABIABABQADADAAACIAAACIgBABIgCADIgDACIgBABg");
	this.shape_289.setTransform(1224.6,349.3);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#022B18").s().p("AgEAHIgBgBQgDgDAAgDQAAgDADgCIADgCIABgBQAEgBADAEQADACAAADQAAADgDADQgCADgEAAg");
	this.shape_290.setTransform(1247,337.5);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#022B18").s().p("AATAGQgDgDABgDQgBgDADgCQADgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDgAgIAAQABgIAHAAQAJAAAAAIQAAAJgJAAQgHAAgBgJgAgfAGQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgEAAgDgDg");
	this.shape_291.setTransform(1242,337.5);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_292.setTransform(1236.9,337.5);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBIADAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_293.setTransform(1234.5,328.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#022B18").s().p("AAHAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgVAGQgCgCAAgEQAAgCACgDQADgDAEAAQAEAAACADQACADABACQgBAEgCACQgCADgEAAQgEAAgDgDg");
	this.shape_294.setTransform(1229.9,328.9);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_295.setTransform(1225.3,328.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#022B18").s().p("AAAAJIgDgBIgBgBIgBgBIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIABgBIABgBIADgBIABAAIACABIACABIACACIABACIABACIAAABIgBACIgBACIgCACIgCABIgCABg");
	this.shape_296.setTransform(1232,356);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#022B18").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAABADQAHAGgHAGQgBACgFAAQgEAAgBgCgAgFAGQgDgCABgEQgBgDADgCQAGgGAFAGQAGAFgGAGQgDADgDAAQgBAAgEgDgAAPgOQgCgCgBgEQABgDACgDQACgCAEAAQADAAADACQACADABADQgBAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_297.setTransform(1227.8,360.1);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_298.setTransform(1223.7,364.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#022B18").s().p("AAHAyQgEAAgDgCQgBgDAAgEIAAgpQAAgDABgCQADgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh6AAQgIAAAAgJQAAgDACgDQADgCADAAICDAAQADAAADACQACADAAADIAABSQAAAEgCADQgDACgDAAg");
	this.shape_299.setTransform(1237.8,344.9);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#022B18").s().p("AhhBtQgEgBgDgCQgCgCAAgEQAAgEACgDQADgCAEAAIBgAAIBXhZIhZhZIguAvIApApIAbgbQACgDADAAQAFAAABADQADACAAADQAAAEgDACIghAiQgCACgDAAQgEAAgCgCIg2g1QgCgCAAgEQAAgDACgCIA8g8QACgDADABQADgBADADIBmBmQACADAAACQAAAEgCADIhhBhQgDACgDABg");
	this.shape_300.setTransform(1234.5,323.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#022B18").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIghAgIBBBAQADACAAAEQAAAEgDACIhtBuQgCADgEAAQgDAAgDgDg");
	this.shape_301.setTransform(1231.7,363.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_302.setTransform(1198.7,332);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_303.setTransform(1208.5,345.3);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_304.setTransform(1216.2,323.4);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_305.setTransform(1200,359.3);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_306.setTransform(1216.2,311);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#022B18").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIACgCIACgBIABgBIACAAIADABIABABIABABQADACgBADQABAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_307.setTransform(1217.5,336.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#022B18").s().p("AgIAfQAAgDADgDQADgCACAAQAIAAAAAIQAAAKgIgBQgIABAAgKgAgFAGQgDgDAAgDQAAgIAIABQAIgBAAAIQAAAJgIAAQgCAAgDgDgAgIgfQAAgEADgCQADgCACgBQAIAAAAAJQAAAJgIAAQgIAAAAgJg");
	this.shape_308.setTransform(1217.5,343);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgCIAAgBQAAgCADgEQADgCACAAQAEAAACACQADAEgBACIAAABIAAACIgCADQgDADgDgBQgCABgDgDg");
	this.shape_309.setTransform(1217.5,349.4);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#022B18").s().p("AgFAGQgDgEAAgCIAAgBIABgBIACgEQACgCADAAQAEAAACACQADADgBADQABACgDAEIgBABIgFABQgDAAgCgCg");
	this.shape_310.setTransform(1195.1,337.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#022B18").s().p("AARAAQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_311.setTransform(1200.1,337.5);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDIAAgBIABgBIACgDQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_312.setTransform(1205.2,337.5);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_313.setTransform(1207.6,328.9);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#022B18").s().p("AAJAGQgCgCAAgEQAAgIAIAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgVAGQgCgCAAgEQAAgCACgDQADgDAEAAQADAAADADQADADAAACQAAAEgDACQgDADgDAAQgEAAgDgDg");
	this.shape_314.setTransform(1212.2,328.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_315.setTransform(1216.8,328.9);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCIgBgBIgCgFIACgEIABgBIADgCIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_316.setTransform(1210.1,356);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#022B18").s().p("AAOAbQgFgGAFgGQADgDADAAQAEAAADADQAFAGgFAGQgDACgEAAQgDAAgDgCgAgFAGQgDgCAAgEQAAgDADgCQAFgGAGAGQAFAFgFAGQgDADgDAAQgDAAgCgDgAgagOQgDgCAAgEQAAgDADgDQACgCAEAAQADAAADACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_317.setTransform(1214.3,360.1);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQADgEADABIADABIABABIABABQADACgBADQABADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_318.setTransform(1218.4,364.3);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#022B18").s().p("AhBAyQgIAAAAgJIAAhSQAAgIAIAAICDAAQAIAAAAAIQAAAJgIAAIh6AAIAABBIAqAAIAAghQAAgDACgCQADgDAEAAQAHAAAAAIIAAApQAAAJgHAAg");
	this.shape_319.setTransform(1204.3,344.9);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#022B18").s().p("AgBBtQgDgBgDgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgDACgDAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_320.setTransform(1207.6,323.4);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#022B18").s().p("AARCUIhshtQgDgDAAgDQAAgEADgDIBAg/IggghQgCgCAAgEQAAgDACgDIBAhBQAHgGAGAGIBKBLQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCIhEhFIg0A1IAgAgQACAEAAADQAAADgCADIhBBAIBgBhIApgoIglgmIgWAXQgCACgDAAQgEAAgCgCQgDgDAAgDQAAgEADgDIAbgcQACgCAEAAQAEAAACACIAxAxQADADAAAEQAAADgDADIg0A0QgDADgEAAQgDAAgDgDg");
	this.shape_321.setTransform(1210.4,363.5);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#000000").s().p("AgOAaQgCgCAAgEIAAgnQAAgJAJAAIAQAAQAIAAAAAJQAAADgDADQgCACgDAAIgIAAIAAAfQgBAEgBACQgCADgEAAQgEAAgDgDg");
	this.shape_322.setTransform(1265.2,381.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgCgCAAgEIAAg+QAAgDACgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_323.setTransform(1262.7,379.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#000000").s().p("AAAAUIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_324.setTransform(1271.4,381.7);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDgBgDQABgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgDACgDAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgmAmQgCADgEgBg");
	this.shape_325.setTransform(1273.8,379.7);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#000000").s().p("AgFAyQgCgDgBgDIAAhXQAAgIAIAAQAIAAAAAIIAABXQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_326.setTransform(1268.3,379.3);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_327.setTransform(1268.3,390.1);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_328.setTransform(1265.4,368.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_329.setTransform(1271.1,368.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_330.setTransform(1268.3,371.2);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#000000").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgJAIAAQAEAAACADQADADAAADIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_331.setTransform(1271.4,352.7);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#000000").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQADAAADADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCgBgEQABgDACgDQADgDADAAIAbAAQAEAAACADIAmAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_332.setTransform(1273.8,354.7);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgHAdQgEAAgDgCQgCgDAAgEIAAgnQAAgDACgDQADgDAEAAQAEAAACADQABADABADIAAAeIAIAAQADABACACQADADAAADQAAAEgDADQgCACgDAAg");
	this.shape_333.setTransform(1265.2,352.7);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AgFBJIghgiQgCgCAAgEIAAg9QAAgEACgCIAmgnQACgCAEAAIAbAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCADAAQAEAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgDAAgDgDg");
	this.shape_334.setTransform(1262.7,354.7);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#000000").s().p("AgFAyQgCgCgBgEIAAhXQABgDACgDQACgCADgBQAIAAAAAJIAABXQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_335.setTransform(1268.3,355);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_336.setTransform(1268.3,344.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_337.setTransform(1271.1,365.8);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_338.setTransform(1265.4,365.8);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_339.setTransform(1268.3,363.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#000000").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_340.setTransform(1268.3,302);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_341.setTransform(1268.3,309.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABADIAAADIgBADIgCACIgCABIgBABg");
	this.shape_342.setTransform(1268.3,338.1);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#000000").s().p("AgIBhQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgDACgDAAQgDAAgCgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCgAgFAUQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDgAgFgHQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAQgDAAgCgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_343.setTransform(1268.3,325.6);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACACIABACIAAABQAAAEgDACIgBABIgDABg");
	this.shape_344.setTransform(1268.2,313.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#000000").s().p("AgNAaQgDgCAAgEIAAgnQAAgEADgCQACgDADAAIAQAAQAJAAAAAJQAAADgCADQgDACgEAAIgIAAIAAAfQAAAEgCACQgCADgEAAQgDAAgCgDg");
	this.shape_345.setTransform(1172.1,381.7);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgDgDAAgDIAAg+QAAgDADgDIAhghQADgDACAAQAEAAADADIAWAWQADADAAAEQAAADgDADIgcAcQgBACgEAAQgEAAgCgCQgCgDAAgDQAAgEACgDIAVgVIgLgLIgXAZIAAA2IAgAhIAYAAQAIAAABAJQAAADgDADQgDADgDgBg");
	this.shape_346.setTransform(1169.6,379.7);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AACAaQgCgCAAgEIAAgfIgIAAQgDAAgCgCQgDgDAAgDQAAgJAIAAIAQAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgEAAgCgDg");
	this.shape_347.setTransform(1178.3,381.7);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgGgHAGgGIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAAEgCACIgnAmQgBADgEgBg");
	this.shape_348.setTransform(1180.7,379.7);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#000000").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_349.setTransform(1175.1,379.3);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_350.setTransform(1175.1,390.1);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_351.setTransform(1172.3,368.6);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_352.setTransform(1178,368.6);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_353.setTransform(1175.2,371.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AgIAdQgDAAgCgCQgDgDAAgEQAAgDADgDQACgCADgBIAIAAIAAgeQAAgDACgDQACgDAEAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_354.setTransform(1178.3,352.7);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AgGBJIgWgWQgCgDAAgDQAAgEACgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAAEgCACIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_355.setTransform(1180.7,354.7);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#000000").s().p("AgIAdQgDAAgCgCQgDgDAAgEIAAgnQAAgDADgDQACgDADAAQAIAAAAAJIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_356.setTransform(1172.1,352.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#000000").s().p("AgFBJIghghQgDgDAAgDIAAg9QAAgEADgCIAmgnQACgDAEAAIAbAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAIgYAAIggAhIAAA2IAXAZIALgKIgVgWQgCgCAAgEQAAgEACgCQACgDAEAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgDADgEAAQgCAAgDgDg");
	this.shape_357.setTransform(1169.6,354.7);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#000000").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_358.setTransform(1175.1,355);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_359.setTransform(1175.1,344.2);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_360.setTransform(1178,365.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_361.setTransform(1172.3,365.8);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_362.setTransform(1175.2,363.2);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#000000").s().p("AgzAuIAzhbIA1Bbg");
	this.shape_363.setTransform(1175.2,302);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_364.setTransform(1175.2,309.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AAAAJQgCAAgDgDQgDgCABgEQgBgCADgDQADgDACAAIAEACIADACIABACIABABIAAADIgBABIgCADIgDACIgBABg");
	this.shape_365.setTransform(1175.2,338.1);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AgHBhQAAgIAHAAQADAAADACQADADAAADQAAAJgJAAQgHAAAAgJgAgHBGQAAgJAHAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAQgHAAAAgIgAgHAqQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgHAAAAgIgAgHAOQAAgJAHAAQADAAADADQADACAAAEQAAADgDADQgDADgDAAQgHAAAAgJgAgHgNQAAgJAHAAQADAAADADQADADAAADQAAAEgDACQgDADgDAAQgHAAAAgJgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgHhFQAAgIAHAAQADAAADACQADADAAADQAAAEgDADQgDACgDAAQgHAAAAgJgAgHhgQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgHAAAAgIg");
	this.shape_366.setTransform(1175.2,325.6);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_367.setTransform(1175.1,313.1);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_368.setTransform(1244.1,332);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_369.setTransform(1234.2,345.3);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_370.setTransform(1226.6,323.4);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_371.setTransform(1242.8,359.3);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_372.setTransform(1226.6,311);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCIABgBIACgBIABAAQADgBAEADIABABIABACIAAACIAAACIAAACIgBABIgBABQgDADgDAAQgDAAgCgDg");
	this.shape_373.setTransform(1225.3,336.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgIAfQAAgIAIAAQADAAADACQADADgBADQABAEgDADQgDADgDgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQABADgDADQgDADgDAAQgIAAAAgJgAgIgfQAAgJAIAAQADABADACQADACgBAEQABAEgDADQgDACgDAAQgIAAAAgJg");
	this.shape_374.setTransform(1225.3,343);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgDgCAAgEQAAgDADgCQADgDAEABIADABIABABQADADgBACIAAACIAAABIgCADIgDACIgBABg");
	this.shape_375.setTransform(1225.3,349.3);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#000000").s().p("AgEAHIgBgBQgDgCAAgEQAAgDADgCIABgBIACgBIABgBQADgBAEAEQADACgBADQABADgDADQgDADgDAAg");
	this.shape_376.setTransform(1247.7,337.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#000000").s().p("AATAGQgDgCAAgEQAAgDADgCQADgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgDAAgDgDgAgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAIAAAAAIQAAAJgIAAQgDAAgCgDgAghAAQAAgIAJAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgJAAAAgJg");
	this.shape_377.setTransform(1242.6,337.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_378.setTransform(1237.6,337.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_379.setTransform(1235.1,328.9);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_380.setTransform(1230.5,328.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_381.setTransform(1225.9,328.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#000000").s().p("AAAAJIgCgBIgDgCIgBgBIgBgCIgBgCIAAgBIABgCIABgCIABgBIADgCIACgBIACAAIABABIACABIABABIACABIAAAEIAAABIAAAEIgCABIgBABIgCABIgBABg");
	this.shape_382.setTransform(1232.6,356);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgaAbQgFgGAFgGQADgDAEAAQADAAACADQAHAGgHAGQgCACgDAAQgFAAgCgCgAgFAGQgGgGAGgFQAFgGAHAGQAFAFgFAGQgEADgDAAQgBAAgEgDgAAPgOQgDgCAAgEQAAgDADgDQACgCAEAAQADAAADACQADADgBADQABAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_383.setTransform(1228.5,360.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgDADgCQACgDADAAQAEAAACADQADACgBADQABACgDAEQgDADgDgBQgDABgCgDg");
	this.shape_384.setTransform(1224.4,364.3);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#000000").s().p("AAHAyQgIAAAAgJIAAgpQAAgIAIAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh5AAQgJAAAAgJQAAgDACgDQADgCAEAAICCAAQAIAAAAAIIAABSQAAAJgIAAg");
	this.shape_385.setTransform(1238.4,344.9);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AhiBtQgIAAAAgJQAAgJAIAAIBhAAIBYhZIhahZIgvAvIApApIAbgbQADgDAEAAQADAAADADQACACAAADQAAAEgCACIgiAiQgCACgEAAQgDAAgDgCIg1g1QgCgCAAgEQAAgDACgCIA7g8QADgDADABQADgBACADIBnBmQACADAAACQAAAEgCADIhhBhQgEACgDABg");
	this.shape_386.setTransform(1235.1,323.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgCAAgDgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIggAgIBABAQADACAAAEQAAAEgDACIhsBuQgDADgEAAQgDAAgDgDg");
	this.shape_387.setTransform(1232.4,363.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_388.setTransform(1199.3,332);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_389.setTransform(1209.2,345.3);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_390.setTransform(1216.8,323.4);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_391.setTransform(1200.7,359.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_392.setTransform(1216.8,311);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#000000").s().p("AgFAGIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIADgCIABgBIADAAIACABIABABIABABQACACAAADQAAAEgCACQgDACgDABQgDgBgCgCg");
	this.shape_393.setTransform(1218.2,336.7);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AgFAmQgCgDAAgEQAAgDACgDQACgCADAAQAIAAAAAIQAAAKgIgBQgDABgCgDgAgFAGQgCgDAAgDQgBgIAIABQAIgBAAAIQAAADgCADQgDADgDAAQgDAAgCgDgAgFgYQgCgDAAgEQAAgEACgCQACgCADgBQAIAAAAAJQAAAJgIAAQgDAAgCgCg");
	this.shape_394.setTransform(1218.2,343);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#000000").s().p("AgFAGIgCgDIAAgCIAAgBQAAgCACgEQACgCADAAQAEAAACACQACADAAADIAAABIAAACIgCADQgDADgDgBQgDABgCgDg");
	this.shape_395.setTransform(1218.2,349.4);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#000000").s().p("AgFAGQgCgEAAgCIAAgBIAAgBIACgEQADgCACAAQAEAAACACQACACAAAEQAAADgCADIgBABIgFABQgCAAgDgCg");
	this.shape_396.setTransform(1195.8,337.6);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#000000").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgHAAQAAgDACgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgHAAAAgJgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_397.setTransform(1200.8,337.5);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#000000").s().p("AgFAGQgDgDAAgDIACgEIABgBQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgCAAgDgDg");
	this.shape_398.setTransform(1205.8,337.5);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_399.setTransform(1208.3,328.9);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_400.setTransform(1212.9,328.9);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_401.setTransform(1217.5,328.9);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#000000").s().p("AgBAJIgBgBIgCgBIgBgBIgBgBIgCgFIACgEIABgBIABgBIACgBIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_402.setTransform(1210.8,356);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#000000").s().p("AAPAbQgHgGAHgGQACgDADAAQAEAAADADQAFAGgFAGQgCACgFAAQgDAAgCgCgAgGAGQgCgCAAgEQAAgDACgCQAGgGAGAGQAFAFgFAGQgEADgCAAQgCAAgEgDgAgagOQgDgCABgEQgBgDADgDQADgCADAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgDAAgDgDg");
	this.shape_403.setTransform(1215,360.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#000000").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQAEgEADABIACABIABABIABABQACACAAADQAAAEgCACIgBABIgFACQgCAAgDgDg");
	this.shape_404.setTransform(1219.1,364.3);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#000000").s().p("AhBAyQgIAAAAgJIAAhSQAAgIAIAAICCAAQAEAAADACQACADAAADQAAAJgJAAIh5AAIAABBIAqAAIAAghQAAgDACgCQADgDADAAQAEAAACADQACACAAADIAAApQAAAJgIAAg");
	this.shape_405.setTransform(1205,344.9);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AAABtQgDgBgEgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgCACgEAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAEgCACQgDACgDABg");
	this.shape_406.setTransform(1208.3,323.4);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AARCUIhshuQgDgCAAgEQAAgEADgCIBAhAIggggQgCgDAAgDQAAgEACgCIBBhCQACgCAEAAQADAAADACIBKBLQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDIhEhEIg0A1IAgAgQACADAAADQAAAEgCACIhBBAIBhBiIAogpIglglIgWAWQgFAGgGgGQgDgCAAgEQAAgEADgCIAbgcQACgDAEAAQAEAAACADIAxAxQADACAAAEQAAAEgDACIg0A1QgDADgDAAQgEAAgDgDg");
	this.shape_407.setTransform(1211,363.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#105B00").s().p("AhuAaQgLAAgIgHQgHgIAAgLQAAgKAHgHQAIgIALAAIDcAAQAMAAAHAIQAIAHAAAKQAAALgIAIQgHAHgMAAg");
	this.shape_408.setTransform(1302.5,232);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#105B00").s().p("AhvAuQgTAAgNgOQgOgNAAgTQAAgRAOgOQANgNATAAIDfAAQATAAANANQAOAOAAARQAAATgOANQgNAOgTAAg");
	this.shape_409.setTransform(1317.7,215.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#003944").s().p("AigAmQgFAAgDgDQgDgDAAgEIAAg3QAAgEADgDQADgDAFAAIFCAAQADAAAEADQADADAAAEIAAA3QAAAEgDADQgEADgDAAg");
	this.shape_410.setTransform(1259.4,219.8);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#003944").s().p("AgqAgQgNAAgKgJQgJgKAAgNQAAgMAJgKQAKgJANAAIBVAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAg");
	this.shape_411.setTransform(1177.1,226.8);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#105B00").s().p("Ai7AnQgRAAgMgLQgLgMAAgQQAAgPALgMQAMgLARAAIF3AAQARAAAMALQALAMAAAPQAAAQgLAMQgMALgRAAg");
	this.shape_412.setTransform(1123.7,223.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#003944").s().p("AiBAkQgPAAgKgKQgLgLAAgPQAAgOALgLQAKgKAPAAIEDAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAg");
	this.shape_413.setTransform(1171.2,212.3);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#003944").s().p("AhxAVQgIAAgHgGQgGgHAAgIQAAgIAGgGQAHgGAIAAIDjAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAg");
	this.shape_414.setTransform(1212.2,219.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_415.setTransform(1138.1,252.6);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_416.setTransform(1143.6,258.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_417.setTransform(1149.1,252.6);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_418.setTransform(1143.6,247.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_419.setTransform(1164.1,252.6);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_420.setTransform(1169.6,258.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_421.setTransform(1175.1,252.6);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_422.setTransform(1169.6,247.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_423.setTransform(1190.2,252.6);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_424.setTransform(1195.7,258.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_425.setTransform(1201.2,252.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_426.setTransform(1195.7,247.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_427.setTransform(1216.2,252.6);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_428.setTransform(1221.7,258.1);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_429.setTransform(1227.2,252.6);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_430.setTransform(1221.7,247.1);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_431.setTransform(1242.2,252.6);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_432.setTransform(1247.7,258.1);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_433.setTransform(1253.3,252.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_434.setTransform(1247.7,247.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_435.setTransform(1268.3,252.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_436.setTransform(1273.8,258.1);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_437.setTransform(1279.3,252.6);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_438.setTransform(1273.8,247.1);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_439.setTransform(1294.3,252.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_440.setTransform(1299.8,258.1);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_441.setTransform(1305.3,252.6);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_442.setTransform(1299.8,247.1);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#00070B").s().p("AhMBXQggAAgYgYQgXgXAAggIAAgPQAAghAXgXQAYgXAgAAIDoAAIAACtg");
	this.shape_443.setTransform(1271.2,352.9);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#00070B").s().p("Ai/BgQggAAgXgXQgXgYAAggIAAghQAAggAXgYQAXgXAgAAIHJAAIAEABIAAC+g");
	this.shape_444.setTransform(1259.8,381.8);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#00070B").s().p("AhMCNQggAAgYgXQgXgXAAghIAAh7QAAggAXgYQAYgXAgAAIDoAAIAAEZg");
	this.shape_445.setTransform(1271.2,428.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#00070B").s().p("AibBXIAAisIDoAAQAhAAAXAWQAXAYAAAhIAAANQAAAhgXAXQgXAXghABg");
	this.shape_446.setTransform(1172.3,393.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#00070B").s().p("AkJBgIgEgBIAAi+IHMAAQAhAAAXAXQAXAYAAAgIAAAhQAAAggXAYQgXAXghAAg");
	this.shape_447.setTransform(1183.7,364.3);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#00070B").s().p("AibCNIAAkZIDoAAQAhAAAXAXQAXAYAAAgIAAB7QAAAhgXAXQgXAXghAAg");
	this.shape_448.setTransform(1172.3,317.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#00070B").s().p("AlJBhIAAjBIJEAAQAhAAAXAYQAXAXAAAhIAAAiQAAAggXAYQgXAXghAAg");
	this.shape_449.setTransform(1189.7,294.2);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#010C06").s().p("EgKJAs6MAAAhZzIUTAAMAAABZzg");
	this.shape_450.setTransform(1221.7,571.9);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#015141").s().p("AymBvQgJAAgGgGQgHgHAAgIIAAiyQAAgJAHgGQAGgHAJAAMAlNAAAQAJAAAGAHQAHAGAAAJIAACyQAAAIgHAHQgGAGgJAAg");
	this.shape_451.setTransform(1221.7,221.7);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#01160C").s().p("AtEA9IAAh5IaJAAIAAB5g");
	this.shape_452.setTransform(1221.7,278.4);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#022B18").s().p("AuwDGIAAmLIdhAAIAAGLg");
	this.shape_453.setTransform(1221.7,252.6);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.lf(["rgba(1,12,6,0)","rgba(0,25,1,0.702)","#001D00"],[0,0.702,0.871],0,-384,0,384).s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_454.setTransform(683,384);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#000000").s().p("AgEAAQAAgFAFAAQADAAABADIgFAIQgEgBAAgFg");
	this.shape_455.setTransform(1127.9,145.1);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#170700").s().p("AgCAUQgJgCgEgRQgCgKAAgCQABgGAKgBIADAAIACgBQASAAABAKIAAABQAAAGgEAHIgGAJQgEAGgEAAg");
	this.shape_456.setTransform(1127.1,144.3);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#351100").s().p("AgZAuQgVgRgGgZQgCgHAAgLQAAgKACgHIAAgDQAFgOAIgLIAFgBIANgBQAcAAAXATQAZAXAAAiIAAAIQgCATgMASQgJACgKAAQgZAAgWgQg");
	this.shape_457.setTransform(1132.1,145.8);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#170700").s().p("AghgTQALgQAUAAQAPgBAKALQALAMAAAOQAAANgHAKQgIAJgLADQgHgkgigTg");
	this.shape_458.setTransform(1143.4,131.5);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#351100").s().p("AgDBRQADgKAAgLQAAgIgCgHQgHgmgjgSQgQgIgTgBQAHgaAWgRQAWgRAcAAQAgAAAYAYQAYAXAAAhQAAAhgYAYQgYAYggAAg");
	this.shape_459.setTransform(1144.4,130.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#351100").s().p("AAhAbQgEgFgFgDQgPgLgTgFIgQgBIgMAAQADgKAKgKQAEgEAGgDQALgHALADQARADAJARQAJAPgEAUIgCAFg");
	this.shape_460.setTransform(1130.8,130.5);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#000000").s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGABQAHgBAFAFQAFAFAAAGQAAAHgFAFQgFAEgHAAQgGAAgFgEg");
	this.shape_461.setTransform(1128.7,132.8);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#FFFFFF").s().p("AgWAYQgEgEgCgEQgEgHAAgJQAAgLAIgKIAIgHQAJgEAHAAQAMAAAKAIQAJAIACAMIAAAGQgBANgKAJQgJAJgNAAQgMAAgKgJg");
	this.shape_462.setTransform(1129.9,132.9);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#351100").s().p("AgrBOQgVgQgGgZQgJgCgEgRQgDgLABgCQABgFAKgBIACAAIACgBQAEgOAIgLIAEgEQgHgUgBgVQgEgDgCgFIAGgDIABgBQAKgEAQgEIAUgCIAVACQAQAEAOAIQATAMANATQANASAEAXIACAQQAAAPgFARQgFAMgGAKIgEAAQgRAZgcAGQgIACgKAAQgaAAgVgRg");
	this.shape_463.setTransform(1133.9,142.6);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#351100").s().p("AihCjQhEhEAAhfQAAheBEhDQBDhEBeAAQBfAABDBEQBDBDAABeQAABfhDBEQhDBChfAAQheAAhDhCg");
	this.shape_464.setTransform(1175.4,183.5);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#1E0900").s().p("AgvA8QgVgQgGgZQgCgJAAgKQAAgJACgIIAAgDQAFgOAIgLIADgEQAXgbAjAAQASAAAOAHQAgAPAKAiQADALAAAJQAAAKgDALQgDAMgIALQgRAZgbAGQgJACgKAAQgZAAgWgRg");
	this.shape_465.setTransform(1134.3,144.4);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#351100").s().p("AgSBLIgMgBQgKgBgLgGIgEgCIACAAIACgBQAEgOAJgLIADgFQgGgTgCgUQgEgEgCgEQgEgHAAgJQAAgMAIgKIgGABQAEgMAKgJIAHgCIAMgBQAUAAATALQAcASAGAgIABANIgBAOQgFAZgTASQgUAQgXACg");
	this.shape_466.setTransform(1132,135.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#351100").s().p("AjaA8QgQAAgMgMQgLgLAAgQQAAghAYgXQAYgYAhAAIF2AAQAZAAASARQARATAAAXQAAAZgRASQgSARgZAAg");
	this.shape_467.setTransform(1167.3,206.4);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#1E0900").s().p("AjhF7QA8hDAXgqQAhg9AAhJQAAhAgcg1QgSgkgtgzQg3hAgRgZQgmg3gPg+QBHhPAcgTQAxghBVAAQCsAAB7B7QB7B7AACsQAACrh8BwQh5BuiwAAQgsAAhWgbg");
	this.shape_468.setTransform(1179.4,171.8);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#351100").s().p("AkqAdQgKgKAAgOQAAgNAKgKQAJgKAOAAIImgJQAOAAAKAKQAKAKAAAOQAAANgKAKQgJAKgOAAIomAIQgOAAgKgJg");
	this.shape_469.setTransform(1215.7,203.8);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#351100").s().p("AhXFiQgOAAgKgJQgJgKgBgOQgBgOAKgKQAJgKAOgBQBDgCA7gaQA7gZAsgtQAtguAXg6QAWg7gChAQgEhqhOhIQhOhIhpAEQhSADg3A8Qg4A8ADBSQADA+AtArQAuAqA/gCQAwgCAfgjQAggigCgvQgBgjgagYQgYgYgkACQgZABgRASQgRATABAZQAAAOgJAKQgKALgOAAQgOABgKgKQgKgJgBgPQgCg1AkgnQAlgnA1gCQA+gCAuAqQAvAsACA/QADBKgzA3Qg0A4hKADQgsABgpgPQgpgPgggeQgggegSgnQgSgmgCgsQgEhuBLhRQBLhRBugEQCFgFBiBbQBjBbAFCGQADBOgcBIQgbBIg3A3Qg2A3hHAeQhGAfhQADg");
	this.shape_470.setTransform(1252,171.4);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#1E0900").s().p("AgJCQIgEAAQgRgCgNgFQgqgNgbgiQgOgSgHgTIgCgEQgHgTgBgVIAAgMQAAgMADgPIADgNIAJgVQASgkAigVQAjgWApAAQA5AAAqAnQApAnAEA5IAAAIQAAAygeAmQgdAmgvANQgRAFgVAAg");
	this.shape_471.setTransform(1142,134.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#000201").s().p("AqKAgIAAg/IUVAAIAAA/g");
	this.shape_472.setTransform(143.8,287.7);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#022B18").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgCADQgDACgEAAIgIAAIAAAfQAAAEgBACQgDADgDAAQgDAAgDgDg");
	this.shape_473.setTransform(186.6,381.7);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#022B18").s().p("AAGBLQgDABgDgDIgmgmQgDgDAAgDIAAg+QAAgDADgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgDAAQgEAAgDgCQgFgHAFgGIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAJAAAAAJQAAADgDADQgDADgDgBg");
	this.shape_474.setTransform(184.1,379.7);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_475.setTransform(192.8,381.7);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#022B18").s().p("AgfBLQgEABgDgDQgDgDABgDQgBgJAKAAIAWAAIAhghIAAg2IgYgZIgKALIAVAVQAGAGgGAHQgGAFgGgFIgbgcQgDgDABgDQgBgEADgDIAWgWQACgDAEAAQADAAADADIAhAhQACADAAADIAAA+QAAADgCADIgnAmQgCADgDgBg");
	this.shape_476.setTransform(195.2,379.7);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#022B18").s().p("AgFAyQgDgDABgDIAAhXQAAgIAHAAQAJAAAAAIIAABXQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_477.setTransform(189.7,379.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_478.setTransform(189.7,390.1);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_479.setTransform(186.8,368.6);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_480.setTransform(192.5,368.6);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_481.setTransform(189.7,371.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_482.setTransform(192.8,352.7);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#022B18").s().p("AgGBJIgWgXQgDgCABgEQgBgDADgDIAbgcQACgCAEAAQAEAAACACQACADABADQgBAEgCACIgVAWIAKAKIAYgYIAAg2IghgiIgWAAQgEAAgDgCQgDgDABgDQgBgEADgDQADgCAEAAIAaAAQADAAACACIAnAnQACADAAADIAAA9QAAAEgCACIghAiQgDADgDAAQgDAAgDgDg");
	this.shape_483.setTransform(195.2,354.7);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#022B18").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQABADAAADIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgDACgEAAg");
	this.shape_484.setTransform(186.6,352.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#022B18").s().p("AgFBJIghgiQgDgCAAgEIAAg9QAAgDADgDIAmgnQADgCADAAIAbAAQADAAADACQADADAAAEQAAADgDADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCAEAAQADAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgCAAgEgDg");
	this.shape_485.setTransform(184.1,354.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#022B18").s().p("AgFAyQgDgCABgEIAAhXQgBgDADgDQADgCACgBQAJAAAAAJIAABXQAAAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_486.setTransform(189.7,355);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_487.setTransform(189.7,344.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_488.setTransform(192.5,365.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_489.setTransform(186.8,365.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_490.setTransform(189.7,363.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#022B18").s().p("AgzAuIAzhbIA1Bbg");
	this.shape_491.setTransform(189.7,302);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_492.setTransform(189.7,309.3);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCABgEQgBgCADgDQADgDACAAIAFACIABABIABABIABACIABABIAAADIgBABIgCADIgBABIgCABIgBABg");
	this.shape_493.setTransform(189.7,338.1);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#022B18").s().p("AgHBhQgBgDADgDQADgCACAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFBMQgDgDABgDQgBgEADgDQADgCACAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCgAgFAwQgDgDABgDQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCgAgFAUQgDgDABgDQgBgEADgCQADgDACAAQAJAAAAAJQAAAJgJAAQgCAAgDgDgAgFgHQgDgCABgEQgBgDADgDQADgDACAAQAJAAAAAJQAAAEgDACQgDADgDAAQgCAAgDgDgAgHgpQAAgIAHAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgFg+QgDgDABgEQgBgDADgDQADgCACAAQAJAAAAAIQAAAJgJAAQgCAAgDgCgAgFhaQgDgDABgDQAAgJAHAAQAJAAAAAJQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_494.setTransform(189.7,325.6);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_495.setTransform(189.6,313.1);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#022B18").s().p("AgQAUIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgIAAIAAAfQAAAJgHAAQgJAAAAgJg");
	this.shape_496.setTransform(93.4,381.7);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#022B18").s().p("AAGBLQgEABgCgDIgmgmQgCgDAAgDIAAg+QAAgDACgDIAighQACgDADAAQAEAAACADIAWAWQADADAAAEQAAADgDADIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_497.setTransform(91,379.7);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#022B18").s().p("AACAaQgCgCAAgEIAAgfIgHAAQgEAAgCgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAJgJAAQgDAAgDgDg");
	this.shape_498.setTransform(99.6,381.7);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#022B18").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgCACgEAAQgEAAgBgCIgcgcQgDgDAAgDQAAgEADgDIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAADgCADIgnAmQgBADgEgBg");
	this.shape_499.setTransform(102.1,379.7);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#022B18").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_500.setTransform(96.5,379.3);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_501.setTransform(96.5,390.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_502.setTransform(93.7,368.6);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_503.setTransform(99.4,368.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_504.setTransform(96.6,371.2);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#022B18").s().p("AgHAdQgEAAgCgCQgDgDAAgEQAAgDADgDQACgCAEgBIAHAAIAAgeQAAgDACgDQADgDADAAQAJAAAAAJIAAAnQAAAJgJAAg");
	this.shape_505.setTransform(99.6,352.7);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#022B18").s().p("AgGBJIgWgWQgDgDAAgDQAAgEADgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAADgCADIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_506.setTransform(102.1,354.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#022B18").s().p("AgHAdQgJAAAAgJIAAgnQAAgJAJAAQAHAAAAAJIAAAeIAIAAQAJAAAAAJQAAAEgDADQgCACgEAAg");
	this.shape_507.setTransform(93.4,352.7);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#022B18").s().p("AgEBJIgighQgCgDAAgDIAAg9QAAgEACgCIAmgnQACgDAEAAIAbAAQAIAAAAAJQAAAEgCACQgDADgDAAIgYAAIggAhIAAA2IAYAZIAKgKIgVgWQgCgCAAgEQAAgEACgCQADgDADAAQAEAAABADIAcAcQADACAAAEQAAADgDADIgWAWQgCADgEAAQgDAAgCgDg");
	this.shape_508.setTransform(91,354.7);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#022B18").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_509.setTransform(96.5,355);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#022B18").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_510.setTransform(96.5,344.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_511.setTransform(99.4,365.8);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#022B18").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_512.setTransform(93.7,365.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_513.setTransform(96.6,363.2);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#022B18").s().p("Ag0AuIA0hbIA0Bbg");
	this.shape_514.setTransform(96.6,302);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#022B18").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_515.setTransform(96.6,309.3);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDACAAIAFACIACACIABACIAAABIAAADIAAABIgCADIgDACIgCABg");
	this.shape_516.setTransform(96.6,338.1);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#022B18").s().p("AgIBhQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQADgCACAAQAEAAACACQADADAAAEQAAADgDADQgCACgEAAQgCAAgDgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCgAgFAUQgDgCAAgEQAAgEADgCQADgDACAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAQgCAAgDgDgAgFgHQgDgCAAgEQAAgDADgDQADgDACAAQAEAAACADQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgCAAgDgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_517.setTransform(96.5,325.6);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#022B18").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_518.setTransform(96.5,313.1);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_519.setTransform(165.5,332);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_520.setTransform(155.6,345.3);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_521.setTransform(148,323.4);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_522.setTransform(164.2,359.3);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_523.setTransform(148,311);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDIADgCIABAAQAEgBADADIABABIABACIABACIAAACIgBACIgBABIgBABQgCADgEAAQgCAAgDgDg");
	this.shape_524.setTransform(146.6,336.6);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#022B18").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDADQgCADgEgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAJgBAAAIQAAADgDADQgCADgEAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAEABACACQADACAAAEQAAAEgDADQgCACgEAAQgCAAgDgCg");
	this.shape_525.setTransform(146.6,343);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#022B18").s().p("AAAAJQgCAAgDgDQgDgCAAgEQAAgCADgDQADgDAEABIADABIABABQADADAAACIAAACIgBABIgCADIgDACIgBABg");
	this.shape_526.setTransform(146.6,349.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#022B18").s().p("AgEAHIgBgBQgDgDAAgDQAAgDADgCIADgCIABgBQAEgBADAEQADACAAADQAAADgDADQgCADgEAAg");
	this.shape_527.setTransform(169,337.5);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#022B18").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgDgDgAgHAAQgBgDADgCQADgDACAAQAJAAAAAIQAAAJgJAAQgHAAAAgJgAgfAGQgCgCAAgEQAAgDACgCQADgDAEAAQAEAAACADQACACABADQgBADgCADQgCADgEAAQgEAAgDgDg");
	this.shape_528.setTransform(164,337.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_529.setTransform(159,337.5);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBIADAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_530.setTransform(156.5,328.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#022B18").s().p("AAHAAQAAgIAIAAQAJAAAAAIQAAAEgCACQgDADgEAAQgIAAAAgJgAgUAGQgDgCAAgEQAAgCADgDQADgDADAAQADAAADADQADADAAACQAAAEgDACQgDADgDAAQgDAAgDgDg");
	this.shape_531.setTransform(151.9,328.9);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#022B18").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_532.setTransform(147.3,328.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#022B18").s().p("AgBAJIgCgBIgBgBIgBgBIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIABgBIABgBIACgBIADAAIABABIACABIACACIABACIABACIAAABIgBACIgBACIgCACIgCABIgBABg");
	this.shape_533.setTransform(154,356);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#022B18").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAACADQAFAGgFAGQgCACgFAAQgDAAgCgCgAgFAGQgCgCAAgEQAAgDACgCQAGgGAFAGQAGAFgGAGQgDADgDAAQgBAAgEgDgAAPgOQgDgCABgEQgBgDADgDQADgCADAAQAEAAACACQACADABADQgBAEgCACQgCADgEAAQgDAAgDgDg");
	this.shape_534.setTransform(149.9,360.1);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_535.setTransform(145.7,364.3);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#022B18").s().p("AAHAyQgEAAgDgCQgBgDAAgEIAAgpQAAgDABgCQADgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh6AAQgIAAAAgJQAAgDACgDQADgCADAAICDAAQADAAADACQACADAAADIAABSQAAAEgCADQgDACgDAAg");
	this.shape_536.setTransform(159.8,344.9);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#022B18").s().p("AhiBtQgDgBgDgCQgDgCAAgEQAAgEADgDQADgCADAAIBhAAIBXhZIhZhZIguAvIAoApIAbgbQADgDADAAQAEAAADADQACACAAADQAAAEgCACIgiAiQgBACgFAAQgDAAgCgCIg2g1QgDgCAAgEQAAgDADgCIA7g8QADgDADABQADgBADADIBmBmQACADAAACQAAAEgCADIhhBhQgDACgDABg");
	this.shape_537.setTransform(156.5,323.4);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#022B18").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgGAGgFgGIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIghAgIBBBAQADACAAAEQAAAEgDACIhtBuQgCADgEAAQgDAAgDgDg");
	this.shape_538.setTransform(153.8,363.6);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_539.setTransform(120.7,332);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_540.setTransform(130.6,345.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#022B18").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_541.setTransform(138.2,323.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#022B18").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_542.setTransform(122,359.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#022B18").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_543.setTransform(138.2,311);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#022B18").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIACgCIACgBIACgBIABAAIACABIACABIABABQACACAAADQAAAEgCACQgCACgEABQgDgBgCgCg");
	this.shape_544.setTransform(139.6,336.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#022B18").s().p("AgIAfQAAgIAIAAQAIAAAAAIQAAAKgIgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQAAAJgIAAQgIAAAAgJgAgIgfQAAgJAIAAQAIAAAAAJQAAAJgIAAQgIAAAAgJg");
	this.shape_545.setTransform(139.6,343);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgCIAAgBQABgCACgEQACgCADAAQAEAAACACQACAEAAACIAAABIAAACIgCADQgCADgEgBQgDABgCgDg");
	this.shape_546.setTransform(139.6,349.4);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#022B18").s().p("AgFAGQgCgEgBgCIAAgBIABgBIACgEQACgCADAAQAEAAACACQADADgBADQABACgDAEIgBABIgFABQgDAAgCgCg");
	this.shape_547.setTransform(117.2,337.6);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#022B18").s().p("AARAAQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_548.setTransform(122.2,337.5);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#022B18").s().p("AgFAGQgDgDAAgDIAAgBIABgBIACgDQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgDAAgCgDg");
	this.shape_549.setTransform(127.2,337.5);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIAAgBIABgBIACgDIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_550.setTransform(129.7,328.9);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#022B18").s().p("AAJAGQgCgCAAgEQAAgIAJAAQAIAAAAAIQAAAJgIAAQgEAAgDgDgAgUAGQgDgCAAgEQAAgCADgDQADgDADAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_551.setTransform(134.3,328.9);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_552.setTransform(138.9,328.9);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#022B18").s().p("AgBAJIgBgBIgDgCIgBgBIgCgFIACgEIABgBIADgCIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_553.setTransform(132.2,356);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#022B18").s().p("AAOAbQgFgGAFgGQACgDAFAAQADAAACADQAHAGgHAGQgCACgDAAQgFAAgCgCgAgFAGQgDgCAAgEQAAgDADgCQAFgGAGAGQAFAFgFAGQgEADgCAAQgDAAgCgDgAgagOQgCgCgBgEQABgDACgDQACgCAEAAQADAAADACQADADgBADQABAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_554.setTransform(136.4,360.1);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#022B18").s().p("AgFAGIgCgDIgBgBIAAgCQABgDACgCQADgEADABIACABIACABIABABQACACABADQgBADgCADIgBABIgFACQgDAAgCgDg");
	this.shape_555.setTransform(140.5,364.3);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#022B18").s().p("AhBAyQgIAAAAgJIAAhSQAAgDACgDQADgCADAAICDAAQAIAAAAAIQAAAJgIAAIh6AAIAABBIAqAAIAAghQAAgDACgCQADgDAEAAQAHAAAAAIIAAApQAAAJgHAAg");
	this.shape_556.setTransform(126.4,344.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#022B18").s().p("AgBBtQgDgBgDgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgDACgDAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_557.setTransform(129.7,323.4);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#022B18").s().p("AARCUIhshtQgDgDAAgDQAAgEADgDIBAg/IggghQgCgCAAgEQAAgDACgDIBAhBQAHgGAGAGIBKBLQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCIhEhFIg0A1IAgAgQACAEAAADQAAADgCADIhBBAIBgBhIApgoIglgmIgWAXQgFAFgGgFQgDgDAAgDQAAgEADgDIAbgcQACgCAEAAQAEAAACACIAxAxQADADAAAEQAAADgDADIg0A0QgDADgEAAQgDAAgDgDg");
	this.shape_558.setTransform(132.4,363.5);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgNAaQgDgCAAgEIAAgnQAAgJAJAAIAPAAQAJAAAAAJQAAADgDADQgCACgEAAIgHAAIAAAfQAAAEgCACQgDADgDAAQgDAAgDgDg");
	this.shape_559.setTransform(187.2,381.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AAGBLQgEABgCgDIgmgmQgCgCAAgEIAAg+QAAgDACgDIAhghQADgDADAAQADAAADADIAWAWQAGAGgGAHIgcAcQgBACgEAAQgDAAgDgCQgCgDAAgDQAAgEACgDIAVgVIgKgLIgYAZIAAA2IAgAhIAYAAQAIAAAAAJQAAADgCADQgDADgDgBg");
	this.shape_560.setTransform(184.8,379.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#000000").s().p("AAAAUIAAgfIgHAAQgDAAgDgCQgDgDAAgDQAAgJAJAAIAPAAQAJAAAAAJIAAAnQAAAEgDACQgCADgEAAQgIAAAAgJg");
	this.shape_561.setTransform(193.4,381.7);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDgBgDQAAgJAJAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQADADgBAEQABADgDADQgGAFgGgFIgbgcQgCgDgBgDQABgEACgDIAXgWQACgDADAAQADAAACADIAiAhQADADgBADIAAA+QABADgDADIgmAmQgCADgDgBg");
	this.shape_562.setTransform(195.9,379.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#000000").s().p("AgFAyQgCgDgBgDIAAhXQABgIAHAAQAJAAAAAIIAABXQAAAIgJAAQgDAAgCgCg");
	this.shape_563.setTransform(190.3,379.3);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_564.setTransform(190.3,390.1);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_565.setTransform(187.5,368.6);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_566.setTransform(193.2,368.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_567.setTransform(190.3,371.2);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#000000").s().p("AgHAdQgDAAgDgCQgDgDAAgEQAAgDADgDQADgCADgBIAHAAIAAgeQAAgJAIAAQAEAAACADQADADAAADIAAAnQAAAEgDADQgCACgEAAg");
	this.shape_568.setTransform(193.4,352.7);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#000000").s().p("AgFBJIgXgWQgCgDgBgDQABgEACgCIAbgcQACgDAEAAQADAAADADQADACgBAEQABAEgDACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCgBgEQABgDACgDQADgDADAAIAcAAQADAAACADIAmAnQADACgBAEIAAA9QABADgDADIgiAhQgCADgDAAQgDAAgCgDg");
	this.shape_569.setTransform(195.9,354.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#000000").s().p("AgHAdQgDAAgDgCQgDgDAAgEIAAgnQAAgDADgDQADgDADAAQADAAADADQACADAAADIAAAeIAHAAQAEABACACQADADAAADQAAAEgDADQgCACgEAAg");
	this.shape_570.setTransform(187.2,352.7);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#000000").s().p("AgFBJIghgiQgCgCAAgEIAAg9QAAgEACgCIAmgnQACgCAEAAIAbAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAIgYAAIggAiIAAA2IAYAYIAKgKIgVgWQgCgCAAgEQAAgDACgDQADgCADAAQAEAAABACIAcAcQADADAAADQAAAEgDACIgWAXQgDADgDAAQgDAAgDgDg");
	this.shape_571.setTransform(184.8,354.7);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#000000").s().p("AgFAyQgCgCgBgEIAAhXQABgDACgDQACgCADgBQAJAAAAAJIAABXQAAAJgJAAQgDgBgCgCg");
	this.shape_572.setTransform(190.3,355);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_573.setTransform(190.3,344.2);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_574.setTransform(193.2,365.8);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_575.setTransform(187.5,365.8);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_576.setTransform(190.3,363.2);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#000000").s().p("Ag0AuIA0hbIA1Bbg");
	this.shape_577.setTransform(190.3,302);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_578.setTransform(190.3,309.3);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCAAgEQAAgCACgDQACgDADAAIAFACIABABIABABIABADIAAADIgBADIgCACIgCABIgBABg");
	this.shape_579.setTransform(190.3,338.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgIBhQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAJgJAAQgIAAAAgJgAgFBMQgDgDAAgDQAAgEADgDQACgCADAAQAEAAACACQADADAAAEQAAADgDADQgDACgDAAQgDAAgCgCgAgFAwQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCgAgFAUQgDgDAAgDQAAgEADgCQACgDADAAQADAAADADQADACAAAEQAAAEgDACQgCADgEAAQgDAAgCgDgAgFgHQgDgCAAgEQAAgDADgDQACgDADAAQAEAAACADQADADAAADQAAAEgDACQgDADgDAAQgDAAgCgDgAgIgpQAAgIAIAAQAJAAAAAIQAAAJgJAAQgIAAAAgJgAgFg+QgDgDAAgEQAAgDADgDQACgCADAAQADAAADACQADADAAADQAAAEgDADQgCACgEAAQgDAAgCgCgAgFhaQgDgDAAgDQAAgJAIAAQAJAAAAAJQAAADgDADQgDACgDAAQgDAAgCgCg");
	this.shape_580.setTransform(190.3,325.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIAAgBIACgDQADgDACAAQAEAAACADIACACIABACIAAABQAAAEgDACIgBABIgDABg");
	this.shape_581.setTransform(190.3,313.1);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#000000").s().p("AgOAaQgCgCAAgEIAAgnQAAgJAIAAIAQAAQAJAAAAAJQAAADgCADQgEACgDAAIgIAAIAAAfQAAAJgIAAQgDAAgDgDg");
	this.shape_582.setTransform(94.1,381.7);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AAFBLQgDABgCgDIgmgmQgCgDgBgDIAAg+QABgDACgDIAhghQADgDADAAQADAAADADIAWAWQACADAAAEQAAADgCADIgcAcQgEAFgHgFQgDgDAAgDQAAgEADgDIAVgVIgKgLIgYAZIAAA2IAhAhIAWAAQAJAAAAAJQAAADgCADQgDADgEgBg");
	this.shape_583.setTransform(91.7,379.7);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#000000").s().p("AACAaQgCgCAAgEIAAgfIgIAAQgDAAgDgCQgCgDAAgDQAAgJAIAAIAQAAQAJAAAAAJIAAAnQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_584.setTransform(100.3,381.7);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AggBLQgDABgDgDQgCgDAAgDQAAgJAIAAIAYAAIAgghIAAg2IgYgZIgKALIAVAVQACADAAAEQAAADgCADQgGAFgFgFIgcgcQgGgHAGgGIAWgWQADgDADAAQADAAACADIAiAhQACADAAADIAAA+QAAAEgCACIgnAmQgBADgEgBg");
	this.shape_585.setTransform(102.7,379.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#000000").s().p("AgFAyQgDgDAAgDIAAhXQAAgIAIAAQAJAAAAAIIAABXQAAADgDADQgCACgEAAQgCAAgDgCg");
	this.shape_586.setTransform(97.2,379.3);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_587.setTransform(97.2,390.1);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_588.setTransform(94.4,368.6);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_589.setTransform(100,368.6);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_590.setTransform(97.2,371.2);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#000000").s().p("AgIAdQgDAAgDgCQgCgDAAgEQAAgDACgDQADgCADgBIAIAAIAAgeQAAgDACgDQADgDADAAQAEAAADADQACADAAADIAAAnQAAAEgCADQgDACgEAAg");
	this.shape_591.setTransform(100.3,352.7);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#000000").s().p("AgGBJIgWgWQgCgDAAgDQAAgEACgCIAcgcQABgDAEAAQAEAAACADQACACAAAEQAAAEgCACIgVAWIAKAKIAYgZIAAg2IggghIgYAAQgDAAgDgDQgCgCAAgEQAAgDACgDQADgDADAAIAbAAQAEAAABADIAnAnQACACAAAEIAAA9QAAAEgCACIgiAhQgCADgDAAQgDAAgDgDg");
	this.shape_592.setTransform(102.7,354.7);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#000000").s().p("AgIAdQgDAAgDgCQgCgDAAgEIAAgnQAAgDACgDQADgDADAAQAIAAAAAJIAAAeIAIAAQAEABADACQACADAAADQAAAEgCADQgEACgDAAg");
	this.shape_593.setTransform(94.1,352.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#000000").s().p("AgFBJIghghQgCgDgBgDIAAg9QABgEACgCIAmgnQACgDADAAIAbAAQAEAAADADQACADAAADQAAAEgCACQgDADgEAAIgWAAIghAhIAAA2IAYAZIAKgKIgVgWQgDgCAAgEQAAgEADgCQADgDADAAQAEAAABADIAcAcQACACAAAEQAAADgCADIgWAWQgDADgDAAQgDAAgDgDg");
	this.shape_594.setTransform(91.7,354.7);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#000000").s().p("AgFAyQgDgCAAgEIAAhXQAAgDADgDQADgCACgBQAEABACACQADADAAADIAABXQAAAEgDACQgCACgEABQgCgBgDgCg");
	this.shape_595.setTransform(97.2,355);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#000000").s().p("AgeAAIAegeIAfAeIgfAfg");
	this.shape_596.setTransform(97.2,344.2);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_597.setTransform(100,365.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#000000").s().p("AgLAAIALgLIAMALIgMAMg");
	this.shape_598.setTransform(94.4,365.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_599.setTransform(97.2,363.2);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#000000").s().p("AgzAuIAzhbIA0Bbg");
	this.shape_600.setTransform(97.2,302);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#000000").s().p("AgRAAIARgRIASARIgSASg");
	this.shape_601.setTransform(97.2,309.3);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#000000").s().p("AAAAJQgCAAgDgDQgCgCAAgEQAAgCACgDQADgDACAAIAFACIACACIABACIAAABIAAADIAAABIgCADIgDACIgBABg");
	this.shape_602.setTransform(97.2,338.1);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#000000").s().p("AgHBhQgBgIAIAAQADAAADACQACADAAADQABAJgJAAQgIAAABgJgAgHBGQgBgJAIAAQADAAADACQACADAAAEQAAADgCADQgDACgDAAQgIAAABgIgAgHAqQgBgJAIAAQAJAAgBAJQAAADgCADQgDACgDAAQgIAAABgIgAgHAOQgBgJAIAAQADAAADADQACACAAAEQAAADgCADQgDADgDAAQgIAAABgJgAgHgNQgBgJAIAAQADAAADADQACADAAADQAAAEgCACQgDADgDAAQgIAAABgJgAgHgpQgBgIAIAAQAJAAgBAIQABAJgJAAQgIAAABgJgAgHhFQgBgIAIAAQADAAADACQACADAAADQAAAEgCADQgDACgDAAQgIAAABgJgAgHhgQgBgJAIAAQAJAAgBAJQAAADgCADQgDACgDAAQgIAAABgIg");
	this.shape_603.setTransform(97.2,325.6);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#000000").s().p("AAAAIQgDAAgCgCQgDgDABgEIABgCIABgCQADgDACAAQAEAAACADIACADIABABIAAABQAAADgDADIgBABIgDABg");
	this.shape_604.setTransform(97.2,313.1);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_605.setTransform(166.1,332);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_606.setTransform(156.3,345.3);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_607.setTransform(148.6,323.4);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_608.setTransform(164.8,359.3);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_609.setTransform(148.6,311);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQABgDACgCIABgBIACgBIABAAQAEgBADADIABABIABACIAAACIAAACIAAACIgBABIgBABQgDADgDAAQgDAAgCgDg");
	this.shape_610.setTransform(147.3,336.6);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#000000").s().p("AgIAfQABgDACgDQACgCADAAQADAAADACQADADgBADQABAEgDADQgDADgDgBQgIABAAgKgAgIAAQAAgIAIABQAIgBAAAIQABADgDADQgDADgDAAQgIAAAAgJgAgIgfQABgEACgCQACgCADgBQADABADACQADACgBAEQABAEgDADQgDACgDAAQgIAAAAgJg");
	this.shape_611.setTransform(147.3,343);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AAAAJQgDAAgCgDQgCgCgBgEQABgDACgCQADgDADABIAEABIABABQADADgBACIAAACIAAABIgCADIgDACIgCABg");
	this.shape_612.setTransform(147.3,349.3);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgEAHIgBgBQgCgCgBgEQABgDACgCIABgBIACgBIACgBQACgBAEAEQACACABADQgBADgCADQgCADgEAAg");
	this.shape_613.setTransform(169.7,337.5);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#000000").s().p("AATAGQgDgCAAgEQAAgDADgCQADgDADAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgDAAgDgDgAgFAGQgDgDAAgDQAAgDADgCQACgDADAAQAIAAAAAIQAAAJgIAAQgDAAgCgDgAghAAQAAgDADgCQACgDAEAAQADAAADADQACACAAADQAAADgCADQgDADgDAAQgJAAAAgJg");
	this.shape_614.setTransform(164.7,337.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#000000").s().p("AgFAGQgDgDAAgDQAAgDADgCQAFgGAGAGIABABIACAEQAAADgDADQgDADgDAAQgCAAgDgDg");
	this.shape_615.setTransform(159.6,337.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_616.setTransform(157.2,328.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAEgDACQgCADgEAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_617.setTransform(152.6,328.9);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#000000").s().p("AgFAGQgDgCAAgEQAAgCADgDQAFgGAGAGQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_618.setTransform(148,328.9);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AAAAJIgCgBIgDgCIgBgBIgBgCIAAgCIAAgBIAAgCIABgCIABgBIADgCIACgBIACAAIABABIACABIABABIACABIABAEIAAABIgBAEIgCABIgBABIgCABIgBABg");
	this.shape_619.setTransform(154.7,356);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#000000").s().p("AgZAbQgHgGAHgGQACgDADAAQAFAAABADQAHAGgHAGQgBACgFAAQgEAAgBgCgAgFAGQgGgGAGgFQAFgGAGAGQAGAFgGAGQgDADgCAAQgCAAgEgDgAAPgOQgCgCgBgEQABgDACgDQACgCAEAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_620.setTransform(150.5,360.1);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#000000").s().p("AgFAGQgCgCgBgEQABgDACgCQACgDADAAQAEAAACADQADACgBADQABACgDAEQgDADgDgBQgDABgCgDg");
	this.shape_621.setTransform(146.4,364.3);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#000000").s().p("AAHAyQgIAAAAgJIAAgpQAAgDACgCQACgDAEAAQADAAADADQACACAAADIAAAhIAqAAIAAhBIh5AAQgJAAAAgJQAAgDACgDQADgCAEAAICCAAQAIAAAAAIIAABSQAAAJgIAAg");
	this.shape_622.setTransform(160.5,344.9);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#000000").s().p("AhiBtQgIAAAAgJQAAgJAIAAIBhAAIBYhZIhahZIgvAvIApApIAbgbQADgDAEAAQADAAADADQACACAAADQAAAEgCACIgiAiQgCACgEAAQgDAAgDgCIg1g1QgCgCAAgEQAAgDACgCIA7g8QADgDADABQADgBACADIBnBmQACADAAACQAAAEgCADIhhBhQgEACgDABg");
	this.shape_623.setTransform(157.2,323.4);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgdCUIg1g1QgFgGAFgGIAygxQACgDAEAAQAEAAACADIAbAcQADACAAAEQAAAEgDACQgCADgEAAQgCAAgDgDIgWgWIglAlIAoApIBhhiIhBhAQgCgCAAgEQAAgDACgDIAgggIg0g1IhEBEQgGAHgHgHQgCgCAAgEQAAgDACgDIBLhLQADgCADAAQAEAAACACIBBBCQACACAAAEQAAADgCADIggAgIBABAQADACAAAEQAAAEgDACIhsBuQgDADgEAAQgDAAgDgDg");
	this.shape_624.setTransform(154.4,363.6);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_625.setTransform(121.4,332);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_626.setTransform(131.2,345.3);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#000000").s().p("AgWAAIAWgWIAXAWIgXAXg");
	this.shape_627.setTransform(138.9,323.4);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#000000").s().p("AgnAAIAngnIAoAnIgoAog");
	this.shape_628.setTransform(122.7,359.3);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#000000").s().p("AgfAAIAfgfIAgAfIggAgg");
	this.shape_629.setTransform(138.9,311);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#000000").s().p("AgFAGIgBgBIgBgCIgBgCIAAgBIABgCIABgCIABgBIADgCIABgBIADAAIACABIABABIABABQADACgBADQABAEgDACQgDACgDABQgCgBgDgCg");
	this.shape_630.setTransform(140.2,336.7);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#000000").s().p("AgFAmQgDgDAAgEQAAgDADgDQADgCACAAQAIAAAAAIQAAAKgIgBQgCABgDgDgAgFAGQgDgDAAgDQAAgIAIABQAIgBAAAIQAAAJgIAAQgCAAgDgDgAgFgYQgDgDAAgEQAAgEADgCQADgCACgBQAIAAAAAJQAAAJgIAAQgCAAgDgCg");
	this.shape_631.setTransform(140.2,343);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#000000").s().p("AgFAGIgCgDIgBgCIAAgBQAAgCADgEQADgCACAAQAEAAACACQADADgBADIAAABIAAACIgCADQgDADgDgBQgCABgDgDg");
	this.shape_632.setTransform(140.2,349.4);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgFAGQgDgEAAgCIAAgBIABgBIACgEQADgCACAAQAEAAACACQACACAAAEQAAADgCADIgBABIgFABQgCAAgDgCg");
	this.shape_633.setTransform(117.8,337.6);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#000000").s().p("AATAGQgCgDAAgDQAAgDACgCQADgDADAAQAJAAAAAIQAAAJgJAAQgDAAgDgDgAgHAAQAAgIAHAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgHAAAAgJgAgeAGQgDgDAAgDQAAgDADgCQACgDAEAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgEAAgCgDg");
	this.shape_634.setTransform(122.8,337.5);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#000000").s().p("AgFAGQgDgDAAgDIACgEIABgBQAFgGAGAGIABABIACAEQAAADgDADIgBABIgFACQgCAAgDgDg");
	this.shape_635.setTransform(127.9,337.5);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEIACgEIABgBIABgBIADgBQABAAAAgBQAAAAAAAAQABAAAAAAQAAABABAAIADABIABABIABABIACAEQAAAEgDACIgDACIgBABg");
	this.shape_636.setTransform(130.3,328.9);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#000000").s().p("AAJAGQgCgCAAgEQAAgCACgDQADgDADAAQAJAAAAAIQAAAEgDACQgCADgEAAQgDAAgDgDgAgXAAQAAgIAJAAQADAAADADQACADAAACQAAAEgCACQgDADgDAAQgJAAAAgJg");
	this.shape_637.setTransform(134.9,328.9);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#000000").s().p("AgBAJIgBgBIgDgCQgDgCAAgEQAAgCADgDIABgBIADgBQAEgBADADQADADAAACQAAAEgDACQgDADgDAAg");
	this.shape_638.setTransform(139.5,328.9);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#000000").s().p("AgBAJIgBgBIgCgBIgBgBIgBgBIgCgFIACgEIABgBIABgBIACgBIABgBIADAAIABABIADACQADACAAADQAAAEgDACIgDACIgBABg");
	this.shape_639.setTransform(132.8,356);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#000000").s().p("AAOAbQgFgGAFgGQADgDAEAAQADAAADADQAFAGgFAGQgCACgEAAQgFAAgCgCgAgGAGQgCgCAAgEQAAgDACgCQAGgGAGAGQAFAFgFAGQgDADgDAAQgCAAgEgDgAgagOQgDgCAAgEQAAgDADgDQACgCAEAAQAEAAACACQACADAAADQAAAEgCACQgCADgEAAQgEAAgCgDg");
	this.shape_640.setTransform(137,360.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgFAGIgCgDIgBgBIAAgCQAAgDADgCQADgEADABIADABIABABIABABQADACgBADQABAEgDACIgBABIgFACQgCAAgDgDg");
	this.shape_641.setTransform(141.1,364.3);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#000000").s().p("AhBAyQgIAAAAgJIAAhSQAAgDACgDQADgCADAAICCAAQAEAAADACQACADAAADQAAAJgJAAIh5AAIAABBIAqAAIAAghQAAgDACgCQADgDADAAQAIAAAAAIIAAApQAAAJgIAAg");
	this.shape_642.setTransform(127,344.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AAABtQgDgBgEgCIhhhhQgCgDAAgEQAAgCACgDIBnhmQABgDAEABQADgBADADIA7A8QADACAAADQAAAEgDACIg1A1QgCACgEAAQgEAAgCgCIgigiQgCgCAAgEQAAgDACgCQADgDAEAAQADAAADADIAbAbIApgpIgvgvIhaBZIBYBZIBhAAQAIAAAAAJQAAAJgIAAg");
	this.shape_643.setTransform(130.3,323.4);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#000000").s().p("AARCUIhshuQgDgCAAgEQAAgEADgCIBAhAIggggQgCgDAAgDQAAgEACgCIBBhCQACgCAEAAQADAAADACIBKBLQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDIhEhEIg0A1IAgAgQACADAAADQAAAEgCACIhBBAIBhBiIAogpIglglIgWAWQgCADgDAAQgEAAgCgDQgDgCAAgEQAAgEADgCIAbgcQACgDAEAAQAEAAACADIAxAxQADACAAAEQAAAEgDACIg0A1QgDADgDAAQgEAAgDgDg");
	this.shape_644.setTransform(133.1,363.6);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#105B00").s().p("AhuAaQgLAAgIgHQgHgIAAgLQAAgKAHgHQAIgIALAAIDdAAQALAAAHAIQAIAHAAAKQAAALgIAIQgHAHgLAAg");
	this.shape_645.setTransform(224.6,232);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#105B00").s().p("AhvAuQgTAAgNgOQgOgNAAgTQAAgRAOgOQANgNATAAIDfAAQATAAANANQAOAOAAARQAAATgOANQgNAOgTAAg");
	this.shape_646.setTransform(239.7,215.2);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#003944").s().p("AigAmQgEAAgEgDQgDgDAAgEIAAg3QAAgEADgDQAEgDAEAAIFCAAQAEAAADADQADADAAAEIAAA3QAAAEgDADQgDADgEAAg");
	this.shape_647.setTransform(181.5,219.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#003944").s().p("AgqAgQgNAAgKgJQgJgKAAgNQAAgMAJgKQAKgJANAAIBVAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAg");
	this.shape_648.setTransform(99.2,226.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#105B00").s().p("Ai8AnQgQAAgMgLQgLgMAAgQQAAgPALgMQAMgLAQAAIF4AAQAQAAAMALQAMAMAAAPQAAAQgMAMQgMALgQAAg");
	this.shape_649.setTransform(45.7,223.6);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#003944").s().p("AiBAkQgPAAgKgKQgLgLAAgPQAAgOALgLQAKgKAPAAIEDAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAg");
	this.shape_650.setTransform(93.3,212.3);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#003944").s().p("AhxAVQgIAAgHgGQgGgHAAgIQAAgIAGgGQAHgGAIAAIDjAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAg");
	this.shape_651.setTransform(134.2,219.7);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_652.setTransform(60.1,252.6);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_653.setTransform(65.6,258.1);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_654.setTransform(71.2,252.6);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_655.setTransform(65.6,247.1);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_656.setTransform(86.2,252.6);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_657.setTransform(91.7,258.1);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_658.setTransform(97.2,252.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_659.setTransform(91.7,247.1);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_660.setTransform(112.2,252.6);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_661.setTransform(117.7,258.1);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_662.setTransform(123.2,252.6);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_663.setTransform(117.7,247.1);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_664.setTransform(138.2,252.6);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#010C06").s().p("AhuA3IBuhtIBvBtg");
	this.shape_665.setTransform(143.8,258.1);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_666.setTransform(149.3,252.6);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#01160C").s().p("Ahug2IDdAAIhvBtg");
	this.shape_667.setTransform(143.8,247.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_668.setTransform(164.3,252.6);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_669.setTransform(169.8,258.1);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_670.setTransform(175.3,252.6);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_671.setTransform(169.8,247.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_672.setTransform(190.3,252.6);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_673.setTransform(195.8,258.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_674.setTransform(201.4,252.6);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_675.setTransform(195.8,247.1);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#01231C").s().p("Ag2htIBtBtIhtBug");
	this.shape_676.setTransform(216.4,252.6);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#010C06").s().p("AhtA3IBthtIBuBtg");
	this.shape_677.setTransform(221.9,258.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#01231C").s().p("Ag2AAIBthtIAADbg");
	this.shape_678.setTransform(227.4,252.6);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#01160C").s().p("Ahtg2IDbAAIhuBtg");
	this.shape_679.setTransform(221.9,247.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#00070B").s().p("AhMBXQggAAgYgYQgXgXAAggIAAgPQAAghAXgXQAYgXAgAAIDoAAIAACtg");
	this.shape_680.setTransform(193.2,352.9);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#00070B").s().p("Ai/BgQggAAgXgXQgXgYAAggIAAghQAAggAXgYQAXgXAgAAIHJAAIAEABIAAC+g");
	this.shape_681.setTransform(181.8,381.8);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#00070B").s().p("AhMCNQggAAgYgXQgXgXAAghIAAh7QAAggAXgYQAYgXAgAAIDoAAIAAEZg");
	this.shape_682.setTransform(193.2,428.2);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#00070B").s().p("AibBXIAAisIDoAAQAhAAAXAWQAXAYAAAhIAAANQAAAhgXAXQgXAXghABg");
	this.shape_683.setTransform(94.3,393.2);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#00070B").s().p("AkKBgIgDgBIAAi+IHMAAQAhAAAXAXQAXAYAAAgIAAAhQAAAggXAYQgXAXghAAg");
	this.shape_684.setTransform(105.7,364.3);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#00070B").s().p("AibCNIAAkZIDoAAQAhAAAXAXQAXAYAAAgIAAB7QAAAhgXAXQgXAXghAAg");
	this.shape_685.setTransform(94.3,317.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#00070B").s().p("AlJBhIAAjBIJEAAQAhAAAXAYQAXAXAAAhIAAAiQAAAggXAYQgXAXghAAg");
	this.shape_686.setTransform(111.7,294.2);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#010C06").s().p("EgKKAs6MAAAhZzIUVAAMAAABZzg");
	this.shape_687.setTransform(143.8,571.9);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#015141").s().p("AymBvQgJAAgGgGQgHgHAAgIIAAiyQAAgJAHgGQAGgHAJAAMAlOAAAQAIAAAHAHQAGAGAAAJIAACyQAAAIgGAHQgHAGgIAAg");
	this.shape_688.setTransform(143.7,221.7);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#01160C").s().p("AtEA9IAAh5IaJAAIAAB5g");
	this.shape_689.setTransform(143.8,278.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#022B18").s().p("AuwDGIAAmLIdhAAIAAGLg");
	this.shape_690.setTransform(143.8,252.6);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#49827F").s().p("EhqtA8AMAAAh3/MDVbAAAMAAAB3/g");
	this.shape_691.setTransform(683,384);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.instance_7}]}).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(683,384,1366,859.3);
// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Path.png?1533990479891", id:"Path"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1533990479891", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1533990479891", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js?1533990479891", id:"an.TextInput"}
	],
	preloads: []
};


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


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;