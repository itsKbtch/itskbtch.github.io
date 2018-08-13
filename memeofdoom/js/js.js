		var card= ["1", "2", "3", "4", "5", "6", "7", "9", "10"];
		var currentCard= null;
		var time;
		var remainingTime;
		var run;
		var count= 0;
		function shuffle(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		}
		function flip(card) {
			$(card).toggleClass("clicked");
			$(card).css('pointer-events', 'none');
			document.getElementById('flip').play();
			if (!currentCard) {
				currentCard= $(card);
			} else {
				if (currentCard.attr('data-name') == $(card).attr('data-name')) {
						$('.card').css('pointer-events', 'none');
						setTimeout(function(){
							currentCard.css('opacity', '0');
							$(card).css('opacity', '0');
							document.getElementById('matched').play();
							$('.card').css('pointer-events', 'auto');
							count++;
							if (count == 9) {
								$('body').append('<div id="end"><div class="win"><img src="img/cool.gif"><h1>YOU WON</h1><h2 onclick="again()">PLAY AGAIN</h2></div></div>');
								document.getElementById('music').pause();
								document.getElementById('music').currentTime = 0;
								document.getElementById('win').play();
							}
							currentCard= null;
						}, 500)
					} else {
						$('.card').css('pointer-events', 'none');
						setTimeout(function(){
							$(card).toggleClass("clicked");
							currentCard.toggleClass("clicked");
							document.getElementById('wrong').play();
							$('.card').css('pointer-events', 'auto');
							currentCard= null;
						}, 500)
					}
			}
		}
		function start() {
			$('#ready').toggleClass('active');
			document.getElementById('readysound').play();
			setTimeout(function() {
				$('#ready').toggleClass('active');
				document.getElementById('music').play();
				var run= setInterval(function() {
					remainingTime-= 0.1;
					var progress= remainingTime/time*100;
					$(".bar").css('width', progress + '%');
					if (remainingTime <= 0) {
						clearInterval(run);
						$('body').append('<div id="end"><div class="lose"><img src="img/bar.png"><h1>YOU\'RE DOOMED</h1><h2 onclick="again()">PLAY AGAIN</h2></div></div>');
						document.getElementById('music').pause();
						document.getElementById('music').currentTime = 0;
						document.getElementById('doom').play();
						}
					if (count == 9) {
						clearInterval(run);
						}
				}, 100)
			}, 4000)
			
		}
		function difficulty(x) {
			time= x;
			remainingTime= time;
			$('.card').on("click", function(){flip(this)});
			$('#opening').css('display', 'none');
			start();
		}
		function flipDoom(card) {
			$(card).toggleClass("clicked");
			$(card).css('pointer-events', 'none');
			document.getElementById('flip').play();
			if (!currentCard) {
				currentCard= $(card);
			} else {
				if (currentCard.attr('data-name') == $(card).attr('data-name')) {
						$('.card').css('pointer-events', 'none');
						setTimeout(function(){
							currentCard.css('display', 'none');
							$(card).css('display', 'none');
							document.getElementById('matched').play();
							$('.card').css('pointer-events', 'auto');
							count++;
							if (count == 9) {
								clearInterval(run);
								$('body').append('<div id="end"><div class="win"><img src="img/cool.gif"><h1>YOU WON</h1><h2 onclick="again()">PLAY AGAIN</h2></div></div>');
								document.getElementById('win').play();
							}
							currentCard= null;
						}, 500)
					} else {
						$('.card').css('pointer-events', 'none');
						setTimeout(function(){
							$(card).toggleClass("clicked");
							currentCard.toggleClass("clicked");
							document.getElementById('wrong').play();
							$('.card').css('pointer-events', 'auto');
							currentCard= null;
						}, 500)
					}
			}
		}
		function doom(x) {
			time= x;
			remainingTime= time;
			$('.card').on("click", function(){flipDoom(this)});
			$('#opening').css('display', 'none');
			start();
		}
		function again() {
			$('.card').remove();
			$('#end').remove();
			$('.card').css('display', 'block');
			$('.card').css('opacity', '1');
			$('#opening').css('display', 'block');
			$(".bar").css('width', '100%');
			card= shuffle(card);
			for (i=0; i<card.length; i++) {
			$(".grid").append('<div class="card" data-name='+ card[i] +'><div class="front"><img src="img/'+ card[i] +'.jpg"></div><div class="back"><img src="img/back.jpg"></div></div>');
			}
			count= 0;
			currentCard= null;
		}
		$(function() {
			card= card.concat(card);
			card= shuffle(card);
			for (i=0; i<card.length; i++) {
			$(".grid").append('<div class="card" data-name='+ card[i] +'><div class="front"><img src="img/'+ card[i] +'.jpg"></div><div class="back"><img src="img/back.jpg"></div></div>');
			}
			$('.easy').on('click', function(){difficulty(60)});
			$('.hard').on('click', function(){difficulty(30)});
			$('.doom').on('click', function(){doom(30)});
		})
		window.addEventListener("load", function() {
        $('#load').toggleClass('loaded');
    	});