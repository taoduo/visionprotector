/*javascript for the timer, inside the frame*/
class Timer {
	constructor(context) {
		this.context = context;
	};
}
$(window).load(function() {
	var timer = new Timer($('#timer'));
	//adjust the timer position within the frame
	$('#timer').offset({
		top:($(window).height() - $('#timer').height()) / 2,
		left:($(window).width() - $('#timer').width()) / 2
	});
});
