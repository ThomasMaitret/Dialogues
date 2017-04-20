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
			};
			$("img").addClass("img-responsive");
			var imagePersonnage = $(".imagePerso img")
			imagePersonnage.attr("src", "img/ContentGars.png");
			$(".imageBouche img").attr("src", "img/bouche.png");
			$(".background img").attr("src", "img/background.png").css("width", "60%");
		}
	});
});
