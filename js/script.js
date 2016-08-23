// JAVASCRIPT


// MAIN PAGE ---------------------------------------------------
$(function() {

	// when you click a button, the browser listens for the click event, and when it sees a click, it makes the main view hidden and corresponding clicked view visible 
	// PAGE TRANSITION JAVASCRIPT
	$('button').on('click', function(e) {
		var selectedButton = $(this).data('info');
		if (selectedButton === 'maintenance') {
			$('main')
				// .removeClass('show')
				// .addClass('hidden')
				.fadeOut(100);
			$('.' + selectedButton)
				// .removeClass('hidden')
				// .addClass('show')
				.fadeIn(100);
		} /* end of maintenance condition*/
		else if (selectedButton === 'cleaning') {
			$('main')
				// .removeClass('show')
				// .addClass('hidden')
				.fadeOut(100)
			$('.' + selectedButton)
				// .removeClass('hidden')
				// .addClass('show');
				.fadeIn(100);
		}/*end of cleaning condition*/
		else if (selectedButton === 'toolbox') {
			$('main')
				// .removeClass('show')
				// .addClass('hidden')
				.fadeOut(100)
			$('.' + selectedButton)
				// .removeClass('hidden')
				// .addClass('show');
				.slideDown(100);
		} /*end of toolbox section*/
	});


// RETURN TO MAIN PAGE ---------------------------------------

	//When you click on the cog, the current view disappears, and the home view appears.

	$('.gear-container').on('click', function(e) {
		var gearButton = $(this).data('info');
		if (gearButton === 'gear') {
			$('.secondaryView').fadeOut(100);
			$('main').fadeIn(100);
		}
	});

// BICYCLE MAINTENANCE DATA ------------------------------------

	var bikeParts = [
		{
			part: "main-frame",
			name: 'Frame',
			description: "The frame is the central hub of the bike, so it’s important to make sure it’s always in good shape. Check for dents, cracks, rust, and wear regularly. Wash off lube, grease, and debris regularly. If you want to preserve your finish, wax the frame every few months."
		},
		{
			part: "main-handlebar",
			name: 'Handlebars',
			description: "If the tape around your handlebars is coming loose or looking worn, pop the end plug off and re-wrap your bars with fresh tape. Wrap the tape around the bars in the direction that your hands roll. It’s also a good idea to check the bolts regularly  and make sure your handlebars move side-to-side smoothly."
		},
		{
			part: "main-brake",
			name: 'Brakes',
			description: "Worn brake pads can be a safety hazard! You’ll know it’s time for new brake pads if you can’t see the grooves anymore. Luckily, they’re cheap to replace and easy to fix with an allen key. It’s also important to regularly inspect your brake pads for embedded materials and the brake cables for fraying, breakage, or rust. Make sure the pads are making full contact with the rim when squeezed, and sit about 1/8 to 3/16 of an inch of clearance when released."
		},
		{
			part: "main-wheel",
			name: 'Wheels',
			description: "Turn your bike upside down and give your wheels a spin. If you see a wobble, it’s time to get your wheel trued. This requires special equipment so it’s best to go to a bike shop for truing. Inspect your wheels regularly for signs of wear such as worn sidewalls or cracks where the spokes touches the rim."
		},
		{
			part: "main-chain",
			name: 'Chain',
			description: "Did you know that your chain links can stretch? Use a chain checker to make sure that your chain isn’t too loose. Lift your back wheel off the ground and use a free hand to slowly rotate the pedal. Inspect the chain links for dirt, rust, or tight links that don’t bend easily when they pass through the derailleur. Listen for squeaking or unusual noises. Keep oil and grit out of your gear sprockets to extend chain life and Avoid over-lubricating your chain - this will actually attract more dirt and gunk."
		},
		{
			part: "main-derailleur",
			name: 'Derailleur',
			description: "Grit that builds up on the outside of a derailleur can get caught in the moving parts and cause premature wear. This will affect the derailleur's movement and can lead to sloppy shifting. Clean your derailleur at least once a month to keep it in tip top shape."
		},
		{
			part: "main-tire",
			name: 'Tires',
			description: "Poorly inflated tires are more prone to punctures so it’s important to check your tire pressure before every ride. If it feels low, fill your tire to the correct PSI (which is usually found on the side of your tire). Inspect your tread regularly and make sure there are no embedded materials that could give you a flat! If you have tubeless tires, make sure your sealant hasn’t dried out. Sealant should be removed and reapplied every 2 months."
		}
	]

	//listening for a click and then doing something
	$('.bikePoints').on('click', function(e) {
		//prevents page from refreshing

		e.preventDefault();
		console.log('clicked!');
		// when the user clicks on the parts button the description-container will appear with the corresponding information

		$('.description-container').fadeIn(100);


		//getting the clicked object and storing the data-parts value inside a new variable 
		var dataParts = $(this).data('point');
		//loop over our bikeParts array to find the matching data part
		for(var i = 0; i < bikeParts.length; i = i + 1){
			if(dataParts === bikeParts[i].part) {
				var bikeInfo = bikeParts[i].description;
				var bikeName = bikeParts[i].name;
				var displayInfo = $('<p>').text(bikeInfo);
				var displayName = $('<h3>').text(bikeName);
				// display info on the page!
	
				$('.description-contents').append(displayName, displayInfo);
			}
		}
	});
// escape lightbox in maintenance and cleaning views
	$('.escape').on('click', function() {
		// when the user clicks the 'X' the description-container will disappear
		$('.description-container').slideUp(500);
		// ...and its content will disappear (BUT NOT THE 'X'!)
		$('.description-contents').empty();
	}); 

// escape lighbox in toolbox view
	$('.escape').on('click', function() {
		// when the user clicks the 'X' the description-container will disappear
		$('.description-container').fadeOut(1000);
		// ...and its content will disappear (BUT NOT THE 'X'!)
		$('.selected-tool-image').empty();
		$('.selected-tool-description').empty();
	}); 

// BICYCLE CLEANING DATA --------------------------------------



	var bikeClean = [
		{
			part: "clean-frame",
			name: 'Frame',
			description: "Keeping your bike clean doesn’t require a fancy cleaning kit. All you need is a degreaser, a bucket of soapy water, a sponge, and a toothbrush. Use the degreaser to loosen grease that has built up on your frame. Let it sit for about five minutes, then wipe it down with soapy water, removing stubborn dirt and gunk with the toothbrush. Protect your frame with a wax finish to combat the corrosive effects of moisture and sweat."
		},
		{
			part: "clean-handlebar",
			name: 'Lubrication',
			description: "Invest in an eco-friendly lubricant and work it sparingly into any areas where metal touches metal. Wear latex gloves or wash your hands with soap and sugar to remove oil and lube from your hands after cleaning."
		},
		{
			part: "clean-brake",
			name: 'Brakes',
			description: "Clean your brake pads with an alcohol-based product or a dry cloth. Use a f scrub pad or a flat file to clear away gunk that builds up on the pad."
		},
		{
			part: "clean-wheel",
			name: 'Wheels',
			description: "Inspect your tread for excess debris that might cause a puncture during your ride."
		},
		{
			part: "clean-chain",
			name: 'Chain',
			description: "Run the chain through a damp cloth. If there’s lots of dirt trapped in the links, spray on some degreaser. Allow it to set, then brush the chain with a toothbrush and warm water, working your way into each link. This will get rid of excess gunk that builds up over time. You can also use a cloth in a flossing motion to get at dirt trapped in hard to reach spaces. Finally, spin the chain while applying lube sparingly. Shift your gears to spread the lube throughout the chain."
		},
		{
			part: "clean-derailleur",
			name: 'Derailleur',
			description: "Derailleurs quickly get clogged up with grease and grit, especially if you've been riding in the rain. Use a wet toothbrush to clean the derailleur and apply some degreaser. You can also use a toothbrush or screwdriver to gently remove trapped dirt from each sprocket."
		},
		{
			part: "clean-tire",
			name: 'Tire',
			description: "Consider investing in a mudguard to prevent your tires from kicking up extra mud and debris."
		}
	]


	//listening for a click and then doing something
	$('.bikeClean').on('click', function(e) {
		//prevents page from refreshing
		e.preventDefault();

		// when the user clicks on the parts button the description-container will appear with the corresponding information

		$('.description-container').fadeIn(1000);

		//getting the clicked object and storing the data-parts value inside a new variable 
		var dataClean = $(this).data('point');
		//loop over our bikeParts array to find the matching data part
		for(var i = 0; i < bikeClean.length; i = i + 1){
			if(dataClean === bikeClean[i].part) {
				var bikeInfo = bikeClean[i].description;
				var bikeName = bikeClean[i].name;
				var displayInfo = $('<p>').text(bikeInfo);
				var displayName = $('<h3>').text(bikeName);
				// display info on the page!
	
				$('.description-contents').append(displayName, displayInfo);
			}
		}
	});

// TOOLBOX VIEW -------------------------------

var bikeTool = [
	{
		part: "tool-allen",
		name: 'Allen Key',
		description: "An essential for any basic bicycle toolkit, the allen key helps you tweak most components on your bicycle.",
		image: 'images/whiteTools/allen-white.png'
	},
	{
		part: "tool-patch",
		name: 'Tire Patch Kit',
		description: "Don't let an unexpected puncture ruin your ride! Keep a kit on you at all times. For easy fixes make sure your kit includes a tire lever (or pack a butter knife).",
		image: "images/whiteTools/bandage-white.png"
	},
	{
		part: "tool-pump",
		name: 'Bike Pump',
		description: "Invest in a pump that displays the PSI so that your tires are always properly inflated. ",
		image: "images/whiteTools/pump-white.png"
	},
	{
		part: "tool-lube",
		name: 'Lubricant',
		description: "Don't use WD-40! Invest in an eco-friendly lubricant that will keep your bike (and the environment) in good shape.",
		image: "images/whiteTools/lube-white.png"
	},
	{
		part: "tool-brush",
		name: 'Toothbrush',
		description: "There's no need for a fancy brush. A toothbrush is ideal for getting grit out of your derailleur, chain, and hard-to-reach places.",
		image: "images/whiteTools/toothbrush-white.png"
	},
	{
		part: "tool-wrench",
		name: 'Wrench',
		description: "A universal bicycle wrench doesn't take up too much room and will help you manage all of the bolts on your bike.",
		image: "images/whiteTools/wrench-white.png"
	}
]


// when you click on toolbox, it will disappear and the tools will appear
	$('.bike-toolbox').on('click', function(e) {
			$('.bike-toolbox').fadeOut(500)
			$('.tool-container').fadeIn(500).css('display', 'flex');
	});

	// when you click on a tool a lightbox will appear with the icon and description
		//listening for a click and then doing something
	$('.bikeTool').on('click', function(e) {
		//prevents page from refreshing
		e.preventDefault();

		// when the user clicks on the tool icon the description-container will appear with the corresponding information

		$('.description-container').fadeIn(1000);

		//getting the clicked object and storing the data-parts value inside a new variable 
		var dataTool = $(this).data('point');
		//loop over our bikeParts array to find the matching data part
		for(var i = 0; i < bikeTool.length; i = i + 1){
			if(dataTool === bikeTool[i].part) {
				var bikeInfo = bikeTool[i].description;
				var bikeName = bikeTool[i].name;
				var bikeImage = bikeTool[i].image;

				var displayInfo = $('<p>').text(bikeInfo);
				var displayName = $('<h3>').text(bikeName);
				var displayImage = $('<img>').attr(
					'src', bikeImage);
				// display info on the page!
	
				$('.selected-tool-description').append(displayName, displayInfo);

				$('.selected-tool-image').append(displayImage);
			}
		}
	});

}); /*DOCUMENT READY ENDS*/


