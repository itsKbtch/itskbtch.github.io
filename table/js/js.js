function sort(n, order) {
		$('.descend').css('opacity', '1');
		$('.ascend').css('opacity', '1');
		var A=$('tbody tr td:nth-child(' + n + ')').sort(function(a,b) {
					if (a.innerText.toLowerCase()>b.innerText.toLowerCase()) {return 1};
					if (a.innerText.toLowerCase()<b.innerText.toLowerCase()) {return -1};
					if (a.innerText.toLowerCase()==b.innerText.toLowerCase()) {return 0}
				});
		switch (order.attr('order')) {
			case '0':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				break;
			case '1':
				for (i=0; i<A.length; i++) {$(A[i]).parent().prependTo($('tbody'))}
				order.attr('order','2');
				order.find('.ascend').css('opacity', '0');
				order.find('.descend').css('opacity', '1');
				break;
			case '2':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				order.find('.ascend').css('opacity', '1');
				break;
		}
	}
	function sortYear(n, order) {
		$('.descend').css('opacity', '1');
		$('.ascend').css('opacity', '1');
		var A=$('tbody tr td:nth-child(' + n + ')').sort(function(a,b) {
					if (Number(a.innerText.slice(0,4)>Number(b.innerText.slice(0,4)))) {return 1};
					if (Number(a.innerText.slice(0,4)<Number(b.innerText.slice(0,4)))) {return -1};
					if (Number(a.innerText.slice(0,4)==Number(b.innerText.slice(0,4)))) {return 0}
				});
		switch (order.attr('order')) {
			case '0':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				break;
			case '1':
				for (i=0; i<A.length; i++) {$(A[i]).parent().prependTo($('tbody'))}
				order.attr('order','2');
				order.find('.ascend').css('opacity', '0');
				order.find('.descend').css('opacity', '1');
				break;
			case '2':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				order.find('.ascend').css('opacity', '1');
				break;
		}
	}
	function sortNumber(n, order) {
		$('.descend').css('opacity', '1');
		$('.ascend').css('opacity', '1');
		var A=$('tbody tr td:nth-child(' + n + ')').sort(function(a,b) {
					if (Number(a.innerText.replace(/,|\$/g,''))>Number(b.innerText.replace(/,|\$/g,''))) {return 1};
					if (Number(a.innerText.replace(/,|\$/g,''))<Number(b.innerText.replace(/,|\$/g,''))) {return -1};
					if (Number(a.innerText.replace(/,|\$/g,''))==Number(b.innerText.replace(/,|\$/g,''))) {return 0}
				});
		switch (order.attr('order')) {
			case '0':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				break;
			case '1':
				for (i=0; i<A.length; i++) {$(A[i]).parent().prependTo($('tbody'))}
				order.attr('order','2');
				order.find('.ascend').css('opacity', '0');
				order.find('.descend').css('opacity', '1');
				break;
			case '2':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				order.find('.ascend').css('opacity', '1');
				break;
		}
	}
	function sortNumberth(n, order) {
		$('.descend').css('opacity', '1');
		$('.ascend').css('opacity', '1');
		var A=$('tbody tr th:nth-child(' + n + ')').sort(function(a,b) {
					if (Number(a.innerText.replace(/,|\$/g,''))>Number(b.innerText.replace(/,|\$/g,''))) {return 1};
					if (Number(a.innerText.replace(/,|\$/g,''))<Number(b.innerText.replace(/,|\$/g,''))) {return -1};
					if (Number(a.innerText.replace(/,|\$/g,''))==Number(b.innerText.replace(/,|\$/g,''))) {return 0}
				});
		switch (order.attr('order')) {
			case '0':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				break;
			case '1':
				for (i=0; i<A.length; i++) {$(A[i]).parent().prependTo($('tbody'))}
				order.attr('order','2');
				order.find('.ascend').css('opacity', '0');
				order.find('.descend').css('opacity', '1');
				break;
			case '2':
				for (i=0; i<A.length; i++) {$(A[i]).parent().appendTo($('tbody'))}
				order.attr('order','1');
				order.find('.descend').css('opacity', '0');
				order.find('.ascend').css('opacity', '1');
				break;
		}
	}