			function input(a) {
				if (ans == true) {
					$("#screen2")[0].value = "";
					$("#screen2")[0].value = $("#screen2")[0].value + a.innerText;
					ans = false;
					} else {
						$("#screen2")[0].value = $("#screen2")[0].value + a.innerText;
						}
			}
			function inputC(a) {
				if($("#screen2")[0].value != "" && $("#screen2")[0].value.includes(".") == false){
					input(a);
				}
			}
			function inputPi() {
				$("#screen2")[0].value = Math.PI;
				ans=true;
			}
			function del() {
				$("#screen2")[0].value = "";
				ans = false;
			}
			function delA() {
				$("#screen1")[0].value = "";
				$("#screen2")[0].value = "";
				ans = false;
				powCheck= false;
			}
			function cal(a) {
				if (powCheck != true) {
				if($("#screen2")[0].value != ""){
					if ($("#screen2")[0].value.startsWith("-")){
						$("#screen1")[0].value =$("#screen1")[0].value+"("+  $("#screen2")[0].value+ ") " + a.innerText + " ";
				$("#screen2")[0].value="";
					} else {
						$("#screen1")[0].value =$("#screen1")[0].value+  $("#screen2")[0].value+ " " + a.innerText + " ";
						$("#screen2")[0].value="";
					}
				} else {
					if ($("#screen1")[0].value != ""){
					$("#screen1")[0].value =$("#screen1")[0].value.substr(0, $("#screen1")[0].value.length - 2) + a.innerText + " "; }
				}
				} else {
					if ($("#screen2")[0].value != "") {
						$("#screen1")[0].value =$("#screen1")[0].value+ $("#screen2")[0].value+ ") " + a.innerText + " ";
						$("#screen2")[0].value="";
						powCheck= false;
					}
				}
			}
			function calMinus(a) {
				if($("#screen2")[0].value != ""){
					if ($("#screen2")[0].value.startsWith("-") == false) {
						$("#screen2")[0].value = "-" + $("#screen2")[0].value;
					} else {
						$("#screen2")[0].value = $("#screen2")[0].value.slice(1);
					}
				}
			}
			var ans;
			function equal() {
					if($("#screen2")[0].value != ""){
						if (powCheck==true){
							var result = ($("#screen1")[0].value + $("#screen2")[0].value + ")").replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
							try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
							$("#screen2")[0].value = eval(result);
							$("#screen1")[0].value = "";
							ans = true;
							powCheck = false;
						} else {
							var result = ($("#screen1")[0].value + "(" + $("#screen2")[0].value + ")").replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
							try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
							$("#screen2")[0].value = eval(result);
							$("#screen1")[0].value = "";
							ans = true;}
					} else {
						var result = ($("#screen1")[0].value + 0).replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
						result = result.replace(/\s/gi,"");
						try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
						$("#screen2")[0].value = eval(result);
						$("#screen1")[0].value = "";
						ans = true;
						}
			} 
			function fact() {
				if ($("#screen2")[0].value != "") {
				var n=$("#screen2")[0].value;
				var l;
				if (Number.isInteger(Number(n))==true && Number(n)>=0) {
						for (l=1, i=1; i <= Number(n); i++) {
						l=l*i;
						}
						$("#screen2")[0].value = l;
						ans = true;
					} else {
						alert ("Math Error");
					}
				}
			}
			function pow(a) {
				if ($("#screen2")[0].value != "") {
					if ($("#screen2")[0].value != "-"){
						$("#screen2")[0].value = Math.pow(Number($("#screen2")[0].value), a);
						ans = true;
					} else {
						alert ("Math Error");
					}
				}
			}
			var powCheck;
			function powC() {
				if($("#screen2")[0].value != "" && powCheck != true){
					if ($("#screen2")[0].value != "-"){
						$("#screen1")[0].value =$("#screen1")[0].value+ "Math.pow("+ $("#screen2")[0].value+ ",";
						$("#screen2")[0].value="";
						powCheck=true;
					} else {
						alert ("Math Error");
					}
				}
			}
			function exp() {
				if ($("#screen2")[0].value != "") {
						$("#screen2")[0].value = Math.exp(Number($("#screen2")[0].value));
						ans=true;
					} 
				}
			function log() {
				if ($("#screen2")[0].value != "") {
					if (Number($("#screen2")[0].value) > 0) {
						$("#screen2")[0].value = Math.log(Number($("#screen2")[0].value));
						ans=true;
					} else {
						alert("Math Error");
					}
				}
			}
			function sqrt() {
				if ($("#screen2")[0].value != "") {
				if (/*Number.isInteger(Number($("#screen2")[0].value)) && */Number($("#screen2")[0].value) >= 0) {
				$("#screen2")[0].value = Math.sqrt(Number($("#screen2")[0].value));
				ans=true;
				} else {
					alert("Math Error");
				}}
			}
			function percent() {
				if ($("#screen2")[0].value != "") {
						$("#screen2")[0].value = Number($("#screen2")[0].value)/100;
						ans=true;
					}
			}
			function sin() {
				if ($("#screen2")[0].value != "") {
						$("#screen2")[0].value = Math.sin(Number($("#screen2")[0].value));
						ans=true;
					}
			}
			function cos() {
				if ($("#screen2")[0].value != "") {
						$("#screen2")[0].value = Math.cos(Number($("#screen2")[0].value));
						ans=true;
					}
			}
			function tan() {
				if ($("#screen2")[0].value != "") {
						$("#screen2")[0].value = Math.tan(Number($("#screen2")[0].value));
						ans=true;
					}
			}
			function change() {
				var i=Number($('link').attr('href').substr($('link').attr('href').search(".css")-1, 1));
				if (i<1) {
					i=i+1;
				} else {
					i=0;
				}
				$('link').attr('href', "css/style" + i +".css");
			}