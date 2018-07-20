			function input(a) {
				if (ans == true) {
					document.getElementById("screen2").value = "";
					document.getElementById("screen2").value = document.getElementById("screen2").value + a.innerText;
					ans = false;
					} else {
						document.getElementById("screen2").value = document.getElementById("screen2").value + a.innerText;
						}
			}
			function inputC(a) {
				if(document.getElementById("screen2").value != "" && document.getElementById("screen2").value.includes(".") == false){
					input(a);
				}
			}
			function inputPi() {
				document.getElementById("screen2").value = Math.PI;
				ans=true;
			}
			function del() {
				document.getElementById("screen2").value = "";
				ans = false;
			}
			function delA() {
				document.getElementById("screen1").value = "";
				document.getElementById("screen2").value = "";
				ans = false;
				powCheck= false;
			}
			function cal(a) {
				if (powCheck != true) {
				if(document.getElementById("screen2").value != ""){
					if (document.getElementById("screen2").value.startsWith("-")){
						document.getElementById("screen1").value =document.getElementById("screen1").value+"("+  document.getElementById("screen2").value+ ") " + a.innerText + " ";
				document.getElementById("screen2").value="";
					} else {
						document.getElementById("screen1").value =document.getElementById("screen1").value+  document.getElementById("screen2").value+ " " + a.innerText + " ";
						document.getElementById("screen2").value="";
					}
				} else {
					if (document.getElementById("screen1").value != ""){
					document.getElementById("screen1").value =document.getElementById("screen1").value.substr(0, document.getElementById("screen1").value.length - 2) + a.innerText + " "; }
				}
				} else {
					if (document.getElementById("screen2").value != "") {
						document.getElementById("screen1").value =document.getElementById("screen1").value+ document.getElementById("screen2").value+ ") " + a.innerText + " ";
						document.getElementById("screen2").value="";
						powCheck= false;
					}
				}
			}
			function calMinus(a) {
				if(document.getElementById("screen2").value != "" && document.getElementById("screen2").value.startsWith("-") == false){
					document.getElementById("screen2").value = "-" + document.getElementById("screen2").value;
					}
			}
			var ans;
			function equal() {
					if(document.getElementById("screen2").value != ""){
						if (powCheck==true){
							var result = (document.getElementById("screen1").value + document.getElementById("screen2").value + ")").replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
							try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
							document.getElementById("screen2").value = eval(result);
							document.getElementById("screen1").value = "";
							ans = true;
							powCheck = false;
						} else {
							var result = (document.getElementById("screen1").value + "(" + document.getElementById("screen2").value + ")").replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
							try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
							document.getElementById("screen2").value = eval(result);
							document.getElementById("screen1").value = "";
							ans = true;}
					} else {
						var result = (document.getElementById("screen1").value + 0).replace(/x|÷/gi, function (x) {switch (x) {case "x": return "*"; break; case "÷": return "/"; break;}});
						result = result.replace(/\s/gi,"");
						try {eval(result);} catch (e) {if(typeof e != "number"){alert ("Math Error");}}
						document.getElementById("screen2").value = eval(result);
						document.getElementById("screen1").value = "";
						ans = true;
						}
			} 
			function fact() {
				if (document.getElementById("screen2").value != "") {
				var n=document.getElementById("screen2").value;
				var l;
				if (Number.isInteger(Number(n))==true && Number(n)>=0) {
						for (l=1, i=1; i <= Number(n); i++) {
						l=l*i;
						}
						document.getElementById("screen2").value = l;
						ans = true;
					} else {
						alert ("Math Error");
					}
				}
			}
			function pow(a) {
				if (document.getElementById("screen2").value != "") {
					if (document.getElementById("screen2").value != "-"){
						document.getElementById("screen2").value = Math.pow(Number(document.getElementById("screen2").value), a);
						ans = true;
					} else {
						alert ("Math Error");
					}
				}
			}
			var powCheck;
			function powC() {
				if(document.getElementById("screen2").value != "" && powCheck != true){
					if (document.getElementById("screen2").value != "-"){
						document.getElementById("screen1").value =document.getElementById("screen1").value+ "Math.pow("+ document.getElementById("screen2").value+ ",";
						document.getElementById("screen2").value="";
						powCheck=true;
					} else {
						alert ("Math Error");
					}
				}
			}
			function exp() {
				if (document.getElementById("screen2").value != "") {
						document.getElementById("screen2").value = Math.exp(Number(document.getElementById("screen2").value));
						ans=true;
					} 
				}
			function log() {
				if (document.getElementById("screen2").value != "") {
					if (Number(document.getElementById("screen2").value) > 0) {
						document.getElementById("screen2").value = Math.log(Number(document.getElementById("screen2").value));
						ans=true;
					} else {
						alert("Math Error");
					}
				}
			}
			function sqrt() {
				if (document.getElementById("screen2").value != "") {
				if (Number.isInteger(Number(document.getElementById("screen2").value)) && Number(document.getElementById("screen2").value) >= 0) {
				document.getElementById("screen2").value = Math.sqrt(Number(document.getElementById("screen2").value));
				ans=true;
				} else {
					alert("Math Error");
				}}
			}
			function percent() {
				if (document.getElementById("screen2").value != "") {
						document.getElementById("screen2").value = Number(document.getElementById("screen2").value)/100;
						ans=true;
					}
			}
			function sin() {
				if (document.getElementById("screen2").value != "") {
						document.getElementById("screen2").value = Math.sin(Number(document.getElementById("screen2").value));
						ans=true;
					}
			}
			function cos() {
				if (document.getElementById("screen2").value != "") {
						document.getElementById("screen2").value = Math.cos(Number(document.getElementById("screen2").value));
						ans=true;
					}
			}
			function tan() {
				if (document.getElementById("screen2").value != "") {
						document.getElementById("screen2").value = Math.tan(Number(document.getElementById("screen2").value));
						ans=true;
					}
			}