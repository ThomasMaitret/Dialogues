$(document).ready(function()
{
	$("#form").alpaca(
	{
		"data": JSONDATA,
		"schema": JSONSCHEMA,
		"options": JSONOPTIONS,
		"view": "bootstrap-edit",
		"postRender": function(control)
		{
			var lineLength = $(".lines .alpaca-container");
			for(var i = 0; i < lineLength.attr("data-alpaca-container-item-count"); i++)
			{
				var line = $(".line").parent();
				var persoInput = $(".lines div[data-alpaca-container-item-name='lines_" + i + "_perso'] input");
				var persoImage = $(".lines div[data-alpaca-container-item-name='lines_" + i + "_image'] input");
				if(persoInput.val() == "1")
				{
					persoInput.closest(line).removeClass("perso2").addClass("perso1");
				}
				else if(persoInput.val() == "2")
				{
					persoInput.closest(line).removeClass("perso1").addClass("perso2");
				};
				persoInput.on("change paste keyup", function()
				{
					if($(this).val() == "1")
					{
						$(this).closest(line).removeClass("perso2").addClass("perso1");
					}
					else if($(this).val() == "2")
					{
						$(this).closest(line).removeClass("perso1").addClass("perso2");
					}
				});
				persoImage.on("change paste keyup", function()
				{
					var i = $(this).val();
					$(".imagePerso img").attr("src", JSONDATA["sources"][i].src);
				});
			};

			//BACKGROUND
			(function()
			{
				var i = $(".background").find("input").val();
				var div = $("<br><div><label>Aperçu</label><br>");
				var img = $("<img>",
				{
					src: JSONDATA["sources"][i].src
				});
				img.appendTo(div);
				$(".background").append(div);
			})();

			$(".background").find("input").on("change paste keyup", function()
			{
				$(".background").first().find("img").attr("src", JSONDATA["sources"][$(this).val()].src);
			});

			//--------------------------------

			$(".line").each(function()
			{
				var div = $("<br><div><label>Aperçu</label><br>");
				var i = $(this).find(".imagePerso input").val();
				var img = $("<img>",
				{
					src: JSONDATA["sources"][i].src
				});
				img.appendTo(div);

				$(this).find(".imagePerso").append(div);
			});

			$(".personnageDiv").each(function()
			{
				var div = $("<div>");
				var i = $(this).find(".imageBouche input").val();
				var img = $("<img>",
				{
					src: JSONDATA["sources"][i].src
				});
				img.appendTo(div);
				$(this).find(".imageBouche").append(div);
			});
			$("img").addClass("img-responsive");

			$(".alpaca-container").sortable(
			{
				scroll: true
			});


			/* $("button").click(function()
			{
				setTimeout(function()
				{
					var lineLength = $(".lines .alpaca-container");
					for(var i = 0; i < lineLength.attr("data-alpaca-container-item-count"); i++)
					{
						var line = $(".line").parent();
						var persoInput = $(".lines div[data-alpaca-container-item-name='lines_" + i + "_perso'] input");
						var persoImage = $(".lines div[data-alpaca-container-item-name='lines_" + i + "_image'] input");
						if(persoInput.val() == "1")
						{
							persoInput.closest(line).removeClass("perso2").addClass("perso1");
						}
						else if(persoInput.val() == "2")
						{
							persoInput.closest(line).removeClass("perso1").addClass("perso2");
						};
					};
				}, 1000)
			}) */
		}
	});
});
