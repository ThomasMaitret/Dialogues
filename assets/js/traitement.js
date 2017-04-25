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
				var persoImage = $(".lines div[data-alpaca-container-item-name='lines_" + i + "_image'] select");
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
				persoImage.on("change", function()
				{
					var v = $(this).val();
					$(this).parent().find("img").attr("src", JSONDATA["sources"][v].src);
				});
			};

			//BACKGROUND
			(function()
			{
				var i = $(".background").find("select").val();
				var div = $("<br><div><label>Aperçu</label><br>");
				var img = $("<img>",
				{
					src: JSONDATA["sources"][i].src
				});
				img.appendTo(div);
				$(".background").append(div);
			})();

			$(".background").find("select").on("change", function()
			{
				$(".background").first().find("img").attr("src", JSONDATA["sources"][$(this).val()].src);
			});

			//--------------------------------

			$(".line").each(function()
			{
				var div = $("<br><div><label>Aperçu</label><br>");
				var i = $(this).find(".imagePerso select").val();
				var img = $("<img>",
				{
					src: JSONDATA["sources"][i].src
				});
				img.appendTo(div);

				$(this).find(".imagePerso").append(div);

				createCross().appendTo($(this));
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
				createCross().appendTo($(this));
			});
			$("img").addClass("img-responsive");

			$(".line").closest(".alpaca-container").sortable(
			{
				scrollSpeed: 10,
				containment: ".alpaca-container",
				axis: "y",
				revert: true
			});

			$(".closeButton").each(function()
			{
				$(this).click(function(e)
				{
					e.preventDefault();
					$(this).closest(".alpaca-container-item")
						.fadeOut(50, function()
						{
							$(this).remove();
						});
				});
			});

			var addItemButton = "<button class='btn btn-default add-item'><span class='glyphicon glyphicon-plus'></span>&nbsp;Ajouter un nouvel élement</button>"
			$(".personnageDiv").closest(".alpaca-container:last-child").append(addItemButton);
			$(".lines").last(".line").append(addItemButton);
		}
	});
});

function createCross()
{
	var cross = $("<button>",
	{
		class: "btn btn-danger btn-small closeButton"
	});
	cross.append($("<i>",
	{
		class: "glyphicon glyphicon-remove"
	}));

	return cross;
}
