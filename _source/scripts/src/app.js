(function(window, undefined){
	"use strict";

	var Website = Website || {};

	Website = function(){

		var _self = this;
		var primaryNavBtn = '[data-styleguide-header__nav-control]';

		function addClass(el, className){
			if (el.classList){
			  el.classList.add(className);
			}else{
			  el.className += ' ' + className;
			}
		}

		function removeClass(el, className){
			if(el.classList) {
				el.classList.remove(className);
			} else {
				el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		}

		function hasClass(el, className){
			var hasClassName = false
			if (el.classList){
			  hasClassName = el.classList.contains(className);
			}else{
			  hasClassName =  new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
			}
			return hasClassName;
		}

		function init(){
			 addListeners();
		}

		function addEventListener(el, eventName, handler) {
			if (el.addEventListener) {
				el.addEventListener(eventName, handler);
			} else {
				el.attachEvent('on' + eventName, function(){
					handler.call(el);
				});
			}
		}

		function addListeners(){
			var navBtn = document.querySelectorAll(primaryNavBtn)[0];
			addEventListener(navBtn,'click', toggleNav);
		}

		function toggleNav(evt){
			var el = evt.srcElement;
			var isActive = hasClass(el, 'is-active');
			if(isActive){
				removeClass(el, 'is-active');
			}else{
				addClass(el, 'is-active');
			}
			

		}

		init();
	};

	var website = new Website();

})(window);