/**
 * elastiStack.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
;
(function (window) {

  'use strict';

  function extend(a, b) {
    for (var key in b) {
      if (b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // support
  var is3d = !!getStyleProperty('perspective'),
    supportTransitions = Modernizr.csstransitions,
    // transition end event name
    transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[Modernizr.prefixed('transition')];

  function ElastiStack(el, options) {
    this.container = el;
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  function setTransformStyle(el, tval) {
    el.style.WebkitTransform = tval;
    el.style.msTransform = tval;
    el.style.transform = tval;
  }

  ElastiStack.prototype.options = {
    // distDragBack: if the user stops dragging the image in a area that does not exceed [distDragBack]px for either x or y then the image goes back to the stack 
    distDragBack: 100,
    // distDragMax: if the user drags the image in a area that exceeds [distDragMax]px for either x or y then the image moves away from the stack 
    distDragMax: 450,
    // callback
    onUpdateStack: function (current) {
      return false;
    }
  };

  ElastiStack.prototype._init = function () {
    // items
    this.items = [].slice.call(this.container.children);
    // total items
    this.itemsCount = this.items.length;
    // current item's index (the one on the top of the stack)
    this.current = 0;
    // set initial styles
    this._setStackStyle();
    // return if no items or only one
    if (this.itemsCount <= 1) return;
    // add dragging capability
    this._initDragg();
    // init drag events
    this._initEvents();

  };

  ElastiStack.prototype._initEvents = function () {
    var self = this;
    this.draggie.on('dragStart', function (i, e, p) {
      self._onDragStart(i, e, p);
    });
    this.draggie.on('dragMove', function (i, e, p) {
      self._onDragMove(i, e, p);
    });
    this.draggie.on('dragEnd', function (i, e, p) {
      self._onDragEnd(i, e, p);
    });
  };

  ElastiStack.prototype._setStackStyle = function () {
    var item1 = this._firstItem(),
      item2 = this._secondItem(),
      item3 = this._thirdItem();

    if (item1) {
      item1.style.opacity = 1;
      item1.style.zIndex = 4;
      item1.style["background-color"] = "#fff";
      setTransformStyle(item1, is3d ? 'translate3d(0,0,0px)' : 'translate(0,0)');
      item1.childNodes[1].childNodes[1].style.opacity = "0.8"
      item1.childNodes[1].childNodes[1].style.width = "85%"
	  item1.childNodes[1].childNodes[1].style["font-size"] = "1.7rem";
      item1.childNodes[1].childNodes[1].style["line-height"] = "60px"
	  
      // item1.style.width="80%"

      // console.log(item1.childNodes[1].childNodes[1])

      // item1.setAttribute("id", "item1Cont");
      // var item1Cont = document.getElementById("item1Cont");
      // var item1Cont_h5 = item1Cont.getElementsByTagName("h5")[0];
      // console.log(item1Cont_h5)
      // item1Cont_h5.style.width = "80%";

    }

    if (item2) {
      item2.style.opacity = 1;
      item2.style.zIndex = 3;
      item2.style["background-color"] = "#fff";

      setTransformStyle(item2, is3d ? 'translate3d(0,-50px,-10px)' : 'translate(0,0)');
      item2.childNodes[1].childNodes[1].style.opacity = "0.6";
      item2.childNodes[1].childNodes[1].style.width = "70%";
      item2.childNodes[1].childNodes[1].style["font-size"] = "1.5rem"
      item2.style["background-color"] = "#e7e8eb";
	  item2.childNodes[1].childNodes[1].style["line-height"] = "45px";
	  item2.childNodes[1].childNodes[1].childNodes[1].width = "11%";
	  item2.childNodes[1].childNodes[1].childNodes[1].top = "11%";
	//   console.log(])
      // item2.style.width="60%"
      // item2.setAttribute("id", "item2Cont");
      // var item2Cont = document.getElementById("item2Cont");
      // var item2Cont_h5 = item2Cont.getElementsByTagName("h5")[0];
      // item2Cont_h5.style.width = "60%";
    }

    if (item3) {
      item3.style["background-color"] = "#e7e8eb";

      item3.style.opacity = 1;
      item3.style.zIndex = 2;
      setTransformStyle(item3, is3d ? 'translate3d(0,-100px,-20px)' : 'translate(0,0)');
      item3.childNodes[1].childNodes[1].style.opacity = "0.4"
      // item3.style.width="40%"
      item3.childNodes[1].childNodes[1].style["font-size"] = "1.2rem"

	  item3.childNodes[1].childNodes[1].style.width = "55%";
      item3.childNodes[1].childNodes[1].style["line-height"] = "40px"
	  
      // item3.setAttribute("id", "item3Cont");
      // var item3Cont = document.getElementById("item3Cont");
      // var item3Cont_h5 = item3Cont.getElementsByTagName("h5")[0];
      // item3Cont_h5.style.width = "40%";
    }
  };

  ElastiStack.prototype._moveAway = function (instance) {
    // disable drag
    this._disableDragg();

    // add class "animate"
    classie.add(instance.element, 'animate');

    // calculate how much to translate in the x and y axis
    var tVal = this._getTranslateVal(instance);

    // apply it	
    setTransformStyle(instance.element, is3d ? 'translate3d(' + tVal.x + 'px,' + tVal.y + 'px, 0px)' : 'translate(' + tVal.x + 'px,' + tVal.y + 'px)');

    // item also fades out
    instance.element.style.opacity = 0;

    // other items move back to stack
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    if (item2) {
      classie.add(item2, 'move-back');
      classie.add(item2, 'animate');
      setTransformStyle(item2, is3d ? 'translate3d(0,-50px,-10px)' : 'translate(0,0)');
	  
      item2.style.zIndex = -1;

    }
    if (item3) {
      classie.add(item3, 'move-back');
      classie.add(item3, 'animate');
      setTransformStyle(item3, is3d ? 'translate3d(0,-100px,-20px)' : 'translate(0,0)');
	  item2.style.zIndex = -1;
	  
    }

    // after transition ends..
    var self = this,
      onEndTransFn = function () {
        instance.element.removeEventListener(transEndEventName, onEndTransFn);

        // reset first item
        setTransformStyle(instance.element, is3d ? 'translate3d(0,0,-100px)' : 'translate(0,0,0)');
        instance.element.style.left = instance.element.style.top = '0px';
        instance.element.style.zIndex = -1;
        classie.remove(instance.element, 'animate');

        // reorder stack
        self.current = self.current < self.itemsCount - 1 ? self.current + 1 : 0;
        // new front items
        var item1 = self._firstItem(),
          item2 = self._secondItem(),
          item3 = self._thirdItem();

        // reset transition timing function
        classie.remove(item1, 'move-back');
        if (item2) classie.remove(item2, 'move-back');
        if (item3) classie.remove(item3, 'move-back');

        setTimeout(function () {
          // the upcoming one will animate..
          classie.add(self._lastItem(), 'animate');
          // reset style
          self._setStackStyle();
        }, 25);

        // add dragging capability
        self._initDragg();

        // init drag events on new current item
        self._initEvents();

        // callback
        self.options.onUpdateStack(self.current);
      };

    if (supportTransitions) {
      instance.element.addEventListener(transEndEventName, onEndTransFn);
    } else {
      onEndTransFn.call();
    }
  };

  ElastiStack.prototype._moveBack = function (instance) {
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    classie.add(instance.element, 'move-back');
    classie.add(instance.element, 'animate');
    setTransformStyle(instance.element, is3d ? 'translate3d(0,0,0)' : 'translate(0,0)');
    instance.element.style.left = '0px';
    instance.element.style.top = '0px';

    if (item2) {
      classie.add(item2, 'move-back');
      classie.add(item2, 'animate');
      setTransformStyle(item2, is3d ? 'translate3d(0,-50px,-10px)' : 'translate(0,0)');

    }
    if (item3) {
      classie.add(item3, 'move-back');
      classie.add(item3, 'animate');
      setTransformStyle(item3, is3d ? 'translate3d(0,-100px,-20px)' : 'translate(0,0)');
    }
  };

  ElastiStack.prototype._onDragStart = function (instance, event, pointer) {
    // remove transition classes if any
    var item2 = this._secondItem(),
      item3 = this._thirdItem();

    classie.remove(instance.element, 'move-back');
    classie.remove(instance.element, 'animate');

    if (item2) {
      classie.remove(item2, 'move-back');
      classie.remove(item2, 'animate');

    }
    if (item3) {
      classie.remove(item3, 'move-back');
      classie.remove(item3, 'animate');
    }
  };

  ElastiStack.prototype._onDragMove = function (instance, event, pointer) {
    if (this._outOfBounds(instance)) {
      this._moveAway(instance);
      console.log(123)
    } else {
      // the second and third items also move
      var item2 = this._secondItem(),
        item3 = this._thirdItem();
      if (item2) {
        setTransformStyle(item2, is3d ? 'translate3d(' + (instance.position.x * .6) + 'px,' + (instance.position.y * .6) + 'px, -60px)' : 'translate(' + (instance.position.x * .6) + 'px,' + (instance.position.y * .6) + 'px)');

      }
      if (item3) {
        setTransformStyle(item3, is3d ? 'translate3d(' + (instance.position.x * .3) + 'px,' + (instance.position.y * .3) + 'px, -120px)' : 'translate(' + (instance.position.x * .3) + 'px,' + (instance.position.y * .3) + 'px)');
      }
    }
  };

  ElastiStack.prototype._onDragEnd = function (instance, event, pointer) {
    if (this._outOfBounds(instance)) return;
    if (this._outOfSight(instance)) {
      this._moveAway(instance);
    } else {
      this._moveBack(instance);
    }
  };

  ElastiStack.prototype._initDragg = function () {
    this.draggie = new Draggabilly(this.items[this.current]);
  };

  ElastiStack.prototype._disableDragg = function () {
    this.draggie.disable();
  };

  // returns true if x or y is bigger than distDragMax
  ElastiStack.prototype._outOfBounds = function (el) {
    return Math.abs(el.position.x) > this.options.distDragMax || Math.abs(el.position.y) > this.options.distDragMax;
  };

  // returns true if x or y is bigger than distDragBack
  ElastiStack.prototype._outOfSight = function (el) {
    return Math.abs(el.position.x) > this.options.distDragBack || Math.abs(el.position.y) > this.options.distDragBack;
  };

  ElastiStack.prototype._getTranslateVal = function (el) {
    var h = Math.sqrt(Math.pow(el.position.x, 2) + Math.pow(el.position.y, 2)),
      a = Math.asin(Math.abs(el.position.y) / h) / (Math.PI / 180),
      hL = h + this.options.distDragBack,
      dx = Math.cos(a * (Math.PI / 180)) * hL,
      dy = Math.sin(a * (Math.PI / 180)) * hL,
      tx = dx - Math.abs(el.position.x),
      ty = dy - Math.abs(el.position.y);

    return {
      x: el.position.x > 0 ? tx : tx * -1,
      y: el.position.y > 0 ? ty : ty * -1
    }
  };

  // returns the first item in the stack
  ElastiStack.prototype._firstItem = function () {
    return this.items[this.current];
  };

  // returns the second item in the stack
  ElastiStack.prototype._secondItem = function () {
    if (this.itemsCount >= 2) {
      return this.current + 1 < this.itemsCount ? this.items[this.current + 1] : this.items[Math.abs(this.itemsCount - (this.current + 1))];
    }
  };

  // returns the third item in the stack
  ElastiStack.prototype._thirdItem = function () {
    if (this.itemsCount >= 3) {
      return this.current + 2 < this.itemsCount ? this.items[this.current + 2] : this.items[Math.abs(this.itemsCount - (this.current + 2))];
    }
  };

  // returns the last item (of the first three) in the stack
  ElastiStack.prototype._lastItem = function () {
    if (this.itemsCount >= 3) {
      return this._thirdItem();
    } else {
      return this._secondItem();
    }
  };

  // add to global namespace
  window.ElastiStack = ElastiStack;

})(window);
