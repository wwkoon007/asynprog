var Observable = Rx.Observable;

var button = document.getElementById('btn');
/*
var handler = function(e) {
	alert('clicked');
	button.removeEventListener('click', handler);
};

button.addEventListener('click', handler);
*/

var clicks = Observable.fromEvent(button, 'click');

// console.dir(clicks);

var subscription =
	clicks.forEach(
		function onNext(e) {
			console.log(typeof e);
			console.log(e.target.id);
			console.log(e.clientX, e.clientY);
			console.log('clicked');
			//subscription.dispose();
		},
		function onError(error) {
			console.log('ERROR!');
		},
		function onCompleted() {
			console.log("done");
		});

