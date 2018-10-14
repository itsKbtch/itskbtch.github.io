	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {
			triggerHook: "onLeave"
		}
	})
	new ScrollMagic.Scene({
		triggerElement: "#main"
	}).setPin("#main").addTo(controller);
	
	var columnList = ['todo', 'doing', 'done']
	
	var database = {
		getData: function() {
			if (typeof(Storage) !== "undefined") {
				var data;
				try {
					data = JSON.parse(localStorage.getItem('list')) || {};
				} catch (error) {
					data = {};
				}
				return data
			} else {
				alert("Sorry! No Web Storage support.")
				return {};
			}
		},
		setData: function(data) {
			localStorage.setItem('list', JSON.stringify(data));
		}
	}
	
	var list = database.getData();
	
	function addNote(column, body, color, pinned) {
		if (pinned) {
			var newNote = "<div class=\"note pinned " + color + "\"><div class=\"top\"></div><div class=\"body\"><p>" + body + "</p></div><div class=\"bot\"></div></div>";
		} else {
			var newNote = "<div class=\"note " + color + "\"><div class=\"top\"></div><div class=\"body\"><p>" + body + "</p></div><div class=\"bot\"></div></div>";
		}
		$(newNote).appendTo("." + column + " .content");
	}

	function deleteNote(item) {
		$(".modal-title").html("Delete")
		$(".modal-body").html(function() {
			//console.log(item)
			if (item.hasClass("pinned")) {
				return "This is a pinned note. If you delete this note, the pinned note will also be deleted. Are you sure you want to delete this note?"
			} else {
				return "Are you sure you want to delete this note?"
			}
		})
		$("#modal button.proceed").html("Yes")
		$("#modal").toggleClass("show")
		$("#modal button.proceed").on("click", function() {
			//console.log(item, $("#delete .note"))
			if (item.hasClass("pinned")) {
				$("#main .note").remove();
			}
			item.addClass("delete");
			$(".temp-placeholder").after(item).remove();
			var column = $(".content .note.delete").parent().attr("id");
			var notePosition = $(".content .note.delete").index();
			list[column].splice(notePosition, 1);
			database.setData(list);
			$(".content .note.delete").remove();
			$("#modal").removeClass("show");
			$("#modal button").off("click");
		})
		$("#modal button.cancel").on("click", function(){
			//console.log(item, $("#delete .note"))
			$(".temp-placeholder").after(item).remove();
			$("#modal").removeClass("show");
			$("#modal button").off("click");
		})
	}

	function pin(item) {
		item.clone().removeAttr("style").append($("<img src='UI/x-icon.png' id='xicon' onclick='unpinNote()' title='Unpin this note'>")).appendTo("#pin-placeholder");
		item.append($("<img src='UI/pin.png' id='pinicon' onclick='unpinNote()' title='Unpin this note'>"));
	}

	function pinNote(item) {
		if (item.hasClass("pinned")) {
			$(".modal-title").html("Pin")
			$(".modal-body").html("This note has already been pinned.")
			$("#modal button.proceed").css("display", "none")
			$("#modal").toggleClass("show")
			$("#modal button.cancel").on("click", function() {
				$(".temp-placeholder").after(item).remove();
				$("#modal").removeClass("show");
				$("#modal button.proceed").removeAttr("style");
				$("#modal button").off("click");
			})
		} else {
			$(".modal-title").html("Pin");
			$(".modal-body").html("Are you sure you want to pin this note? It will replace the previous pinned note.");
			$("#modal button.proceed").html("Yes");
			$("#modal").toggleClass("show");
			$("#modal button.proceed").on("click", function() {
				if($("#main .note").length>0) {
					var unpinColumn = $(".content .note.pinned").parent().attr("id");
					var unpinPosition = $(".content .pinned").index();
					list[unpinColumn][unpinPosition].pinned = false;
					database.setData(list);
					$("#main .note, .content #pinicon").remove();
					$(".content .note.pinned").removeClass("pinned");
				}
				//console.log(item, $("#pin .note"))
				item.addClass("pinned")
				pin(item)
				$(".temp-placeholder").after(item).remove();
				var column = $(".content .note.pinned").parent().attr("id");
				var notePosition = $(".content .pinned").index();
				list[column][notePosition].pinned = true;
				database.setData(list);
				$("#modal").removeClass("show");
				$("#modal button").off("click");
			})
			$("#modal button.cancel").on("click", function() {
				//console.log(item, $("#pin .note"))
				$(".temp-placeholder").after(item).remove();
				$("#modal").removeClass("show");
				$("#modal button").off("click");
			})
		}
	}
	
	function unpinNote() {
		$(".modal-title").html("Unpin")
		$(".modal-body").html("Are you sure you want to unpin this note?")
		$("#modal button.proceed").html("Yes")
		$("#modal").toggleClass("show")
		$("#modal button.proceed").on("click", function() {
			var unpinColumn = $(".content .note.pinned").parent().attr("id");
			var unpinPosition = $(".content .pinned").index();
			list[unpinColumn][unpinPosition].pinned = false;
			database.setData(list);
			$("#main .note, .content #pinicon").remove();
			$(".content .note.pinned").removeClass("pinned");
			$("#modal").removeClass("show");
			$("#modal button").off("click");
		})
		$("#modal button.cancel").on("click", function() {
			$("#modal").removeClass("show");
			$("#modal button").off("click");
		})
	}

	var txt = $('textarea'), hiddenDiv = $(document.createElement('div')), content = null;
	function resizeTextarea() {
		content = txt.val();
    	hiddenDiv.html(content + '<br> ');
    	txt.css('height', hiddenDiv.height() + "px");
	}
	
	$(function() { 
		for (i=0; i < columnList.length; i++) {
			if (!list[columnList[i]]) {list[columnList[i]] = []}
			list[columnList[i]].forEach(function(note) {
				addNote(columnList[i], note.content, note.color, note.pinned);
			})
		}
		pin($(".content .note.pinned"));
		
		$(".content").sortable({
      		connectWith: ".content, .tool",
			cursorAt: {left: 120, top: 20},
			start: function(event, ui) {
				ui.item.prevColumn = ui.item.parent().attr("id");
				ui.item.prevIndex = ui.item.index();
			},
			stop: function(event, ui) {
				var item = ui.item;
				var prevColumn = item.prevColumn;
				var prevIndex = item.prevIndex;
				var newColumn = item.parent().attr("id");
				var newIndex = item.index();
				var noteData = list[prevColumn][prevIndex];
				if (newColumn != "delete" && newColumn != "pin") {
					list[prevColumn].splice(prevIndex, 1);
					list[newColumn].splice(newIndex, 0, noteData);
					database.setData(list);
				}
			}
    	});

		$(".tool#delete").sortable({
			//connectWith: ".content",
			cancel: ".tool img, .tool .popup",
			receive: function(event, ui) {
					deleteNote(ui.item);
			},
			over: function(event, ui) {
					$(this).toggleClass("scale");
					$("<div class='temp-placeholder'></div>").insertAfter(ui.item);
			},
			out: function(event, ui) {
					$(this).toggleClass("scale");
					ui.item.parent().children(".temp-placeholder").remove();
			}
		})
		
		$(".tool#pin").sortable({
			//connectWith: ".content",
			cancel: ".tool img, .tool .popup",
			receive: function(event, ui) {
					pinNote(ui.item);
			},
			over: function(event, ui) {
					$(this).toggleClass("scale");
					$("<div class='temp-placeholder'></div>").insertAfter(ui.item);
			},
			out: function(event, ui) {
					$(this).toggleClass("scale");
					ui.item.parent().children(".temp-placeholder").remove();
			}
		})
		
  		txt.on('keyup', resizeTextarea);
		$("#addnote button.cancel").on("click", function() {
			$("#addnote").removeClass("show");
		})
		$("#addnote .colors input").on("change", function() {
			if ($(this).prop("checked")) {
				$(".preview-note").removeClass("blue yellow green").addClass($(this).val())
			}
		})
		$("#addnote .footer .proceed").on("click", function() {
			if ($("#addnote .columns #todo").prop("checked") != true && $("#addnote .columns #doing").prop("checked") != true && $("#addnote .columns #done").prop("checked") != true) {
				$(".modal-title").html("Error")
				$(".modal-body").html("You haven't chosen a column yet. You need to choose a column.")
				$("#modal button.proceed").css("display", "none")
				$("#modal").toggleClass("show")
				$("#modal button.cancel").on("click", function() {
					$("#modal").removeClass("show");
					$("#modal button.proceed").removeAttr("style");
					$("#modal button").off("click");
				})
			} else {
				if (txt.val() == "") {
					$(".modal-title").html("Error")
					$(".modal-body").html("There's nothing on your note!!")
					$("#modal button.proceed").css("display", "none")
					$("#modal").toggleClass("show")
					$("#modal button.cancel").on("click", function() {
						$("#modal").removeClass("show");
						$("#modal button.proceed").removeAttr("style");
						$("#modal button").off("click");
					})
				} else {
					var column, color;
					$("#addnote .columns input").each(function() {
						if($(this).prop("checked") == true) {
						column= $(this).val();
						}
					})
					$("#addnote .colors input").each(function() {
						if($(this).prop("checked") == true) {
						color= $(this).val();
						}
					})
					var dataNote = {
						content: content,
						color: color,
						pinned: false
					};
					if (!list[column]) {list[column] = []};
					list[column].push(dataNote);
					database.setData(list);
					addNote(column, content, color, false);
					$("#addnote").removeClass("show");
				}
			}
		})
		$(".tool#add").on("click", function() {
			$("#addnote #yellow").prop("checked", true).change();
			$("#addnote .columns input").prop("checked", false);
			$("#addnote").toggleClass("show");
			hiddenDiv.addClass("hiddenDiv").css("width", txt.width() + "px");
			txt.val("").css("overflow", "hidden");
  			$('.preview-note .body').append(hiddenDiv);
			resizeTextarea()
		})
  	});