// *** JS starts here ***

// function gets called upon page load
$( document ).ready(function() {
    //console.log( "Sphypermedia page load success!" );
    prepare_page_load();

    // All button listeners need to be here.
    // If you put them in functions attached to other button listeners,
    // You'll have duplicate button listeners and that's bad
    $('#see-nick-profile').click(function() {
		prepareNickPage();
	});
    $('#see-derrick-profile').click(function() {
		prepareDerrickPage();
	});
});

// Initial page setup
function prepare_page_load() {

	hide_all();
	$('#slides').fadeIn('slow');
	//$('#fixed-background-image').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
	//window.scrollTo(0, 100); // scroll to top of the page -- xcoordinate,ycoordinate

	// Setting up the button listeners

		// Sphypermedia Navbar Logo Listener
		$('#sphypermedia-navbar-logo').click(function() {
			//window.scrollTo(0, 100); // xcoordinate,ycoordinate
			$('#navbar-home-li').addClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').removeClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_home();
		});

		// Home navbar button listener
		$('#navbar-home-button').click(function() {
			//window.scrollTo(0, 100); // xcoordinate,ycoordinate
			$('#navbar-home-li').addClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').removeClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_home();
		});

		// About navbar button listener
		$('#navbar-about-button').click(function() {
			$('#navbar-home-li').removeClass('active');
			$('#navbar-about-li').addClass('active');
			$('#navbar-team-li').removeClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_about();
		});

		// Team navbar button listener
		$('#navbar-team-button').click(function() {
			$('#navbar-home-li').removeClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').addClass('active');
			$('#navbar-connect-li').removeClass('active');
			show_team();
		});

		// Connect navbar button listener
		$('#navbar-connect-button').click(function() {
			$('#navbar-home-li').removeClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').removeClass('active');
			$('#navbar-connect-li').addClass('active');
			show_connect();
		});

		// Team carousel button listener
		// Team navbar button listener
		$('#carousel-team-button').click(function() {
			$('#navbar-home-li').removeClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').addClass('active');
			$('#navbar-connect-li').removeClass('active')
			show_team();
		});

		// Learn More carousel button listener
		// Team navbar button listener
		$('#carousel-learn-more-button').click(function() {
			$('#navbar-home-li').removeClass('active');
			$('#navbar-about-li').removeClass('active');
			$('#navbar-team-li').addClass('active');
			$('#navbar-connect-li').removeClass('active')
			show_about();
		});

		/*// Mouse-Ovr event so that if the user hovers their mouse over the slides, it goes to the first one
		$( "#slides" ).mousemove(function(event) {
		  	// Set first slide to be the active one
			$("#carousel-slide1").addClass("active");
			$("#carousel-slide2").removeClass("active");
			$("#carousel-slide3").removeClass("active");
			$("#slide1").addClass("active");
			$("#slide2").removeClass("active");
			$("#slide3").removeClass("active");
		});*/

}

function show_home(){
	hide_all();
	$('#slides').fadeIn('slow');
	//window.scrollTo(0, 100); // xcoordinate,ycoordinate
	$('#footer-section').fadeIn('slow');

	// Set first slide to be the active one
	$("#carousel-slide1").addClass("active");
	$("#carousel-slide2").removeClass("active");
	$("#carousel-slide3").removeClass("active");
	$("#slide1").addClass("active");
	$("#slide2").removeClass("active");
	$("#slide3").removeClass("active");
}

function show_about() {
	hide_all();
	$('#about-section').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
}

function show_team(){
	hide_all();
	$('#meet-the-team-div').fadeIn('slow');
	$('#footer-section').fadeIn('slow');
}

function show_connect(){
	hide_all();
	$('#footer-section').fadeIn('slow');
}

// If you add a div to index.html, add it to the list..
// NOTE: Excludes navbar and footer section
function hide_all() {
	//window.scrollTo(0, 0); // scroll to top of the page -- xcoordinate,ycoordinate
	$('#slides').hide();
	$('#about-section').hide();
	$('#meet-the-team-div').hide();
	$('#profile').hide();
	$('#footer-section').hide();
}