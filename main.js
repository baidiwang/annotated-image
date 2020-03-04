$("body").on("click", ".dot:not(.active)", function (e) {
	e.preventDefault();

	const this_dot = e.target;

	const $this_dot = $(this_dot).closest(".dot");

	console.log("I'm working!");

	$this_dot.addClass("active") //Only Class can be recongized.
});

$("body").on("click", ".dot.active .close", function (e) {
	e.preventDefault();

	const this_dot = e.target;

	const $this_dot = $(this_dot).closest(".dot");

	console.log("I'm working!");

	$this_dot.removeClass("active") //Only Class can be recongized.
});