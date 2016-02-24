// GENERIC PUBLISHER OBJECT
var publisher = {
	subscribers: {
		any: [] // event type: subscribers
	},
	subscribe: function (fn, type) {
		type = type || 'any';
		if (typeof this.subscribers[type] === "undefined") {
			this.subscribers[type] = [];
		} //  it seems like this is some kinde of reset of type
			this.subscribers[type].push(fn);
	},
	unsubscribe: function (fn, type) {
		this.visitSubscribers('unsubscribe', fn, type);
	},
	publish: function (publication, type) {
		this.visitSubscribers('publish', publication, type);
	},
	visitSubscribers: function (action, arg, type) {
		var pubtype = type || 'any',
			subscribers = this.subscribers[pubtype],
			i,
			max = subscribers.length;

		for (i = 0; i < max; i += 1) {
			if (action === 'publish') {
				subscribers[i](arg);
			} else {
				if (subscribers[i] === arg) {
					subscribers.splice(i, 1);
				}
			}
		}
	}
};

// MAKE OBJECT INTO PUBLISHER
function makePublisher(o) {
	var i;
	for (i in publisher) {
		if (publisher.hasOwnProperty(i) && typeof publisher[i] === "function") {
			o[i] = publisher[i];
			// the for loop makes sure we only copy over
			// own functions and not take form o.prototype
			// and the key is mapped to the function in o
			// on the next line
			// you could write it o[newKey] = publisher[theKeysFunction]
		}
	}
	o.subscribers = {
		any: []
	};
}


// IMPLEMENT PAPER OBJECT; PUBLISH DAILY AND MONTHLY PAPERS

var paper = {
	daily: function() {
		this.publish("big news today");
	},
	monthly: function() {
		this.publish("interesting analysis", "monthly");
	}
};

// MAKE PAPER INTO PUBLISHER

makePublisher(paper);


// SUBSCRIBER OBJECT

var joe = {
	drinkCoffee: function(paper) {
		console.log('\nJust read' + paper);
	},
	sundayPreNap: function(monthly) {
		console.log('\nAbout to fall asleep reading this ' + monthly);
	} 
};

// PAPER SUBSCRIBES JOE
// As you see, joe provides a method to be called for the default “any” event 
// and another method to be called when the “monthly” type of event occurs. 

paper.subscribe(joe.drinkCoffee);
paper.subscribe(joe.sundayPreNap, 'monthly');

// FIRE SOME EVENTS
paper.daily();
paper.daily();

paper.monthly();


// MAKE JOE A PUBLISHER

makePublisher(joe);

joe.tweet = function (msg) {
	this.publish(msg);
}; 

paper.readTweets = function(tweet) {
	console.log('Call big meeting! Someone ' + tweet);
};

joe.subscribe(paper.readTweets);

joe.tweet("hated the paper today");