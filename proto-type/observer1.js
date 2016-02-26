var modelData = function () {
	this.subscribers = [ fn1 ,fn2, fn3 ];
	
	this.subscribe = function (fn) {
		this.subscribers.push(fn);
	}
	this.update = function () {
		var i, 
			max = subscribers.length;

		for (i = 0; i < max; i += 1) {
			this.subscribers[i]();
		}
	}
};
