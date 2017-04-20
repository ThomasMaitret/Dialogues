JSONDATA = {
	"paramCSS":
	{},
	"sources": [
	{
		"id": 0,
		"src": "img/NormalFille.png"
	},
	{
		"id": 1,
		"src": "img/NormalGars.png"
	},
	{
		"id": 2,
		"src": "img/ContentFille.png"
	},
	{
		"id": 3,
		"src": "img/ContentGars.png"
	},
	{
		"id": 4,
		"src": "img/background.png"
	},
	{
		"id": 5,
		"src": "img/bouche.png"
	},
	{
		"id": 6,
		"src": "img/prof_1.png"
	}],
	"characters": [
	{
		"id": 0,
		"default": 6,
		"mouth":
		{
			"positions":
			{
				"x": 0,
				"y": 0
			},
			"nbImg": 4,
			"imageId": 5
		},
		"defaultName": "Joe"
	},
	{
		"id": 1,
		"defaultName": "Interlocutrice",
		"default": 0,
		"mouth":
		{
			"positions":
			{
				"x": 0,
				"y": 0
			},
			"nbImg": 4,
			"imageId": 5
		}
	},
	{
		"id": 2,
		"defaultName": "L'Homme Vraiment Perdu",
		"default": 1,
		"mouth":
		{
			"positions":
			{
				"x": 0,
				"y": 0
			},
			"nbImg": 4,
			"imageId": 5
		}
	}],
	"background": 4,
	"lines": [
	{
		"id": 0,
		"text": "Sed ut perspiciatis unde omnis iste natus error sit voluptate",
		"perso": 1,
		"animation": "bounceIn",
		"name": "L'Homme Perdu"
	},
	{
		"id": 1,
		"text": "Oui, allo, bonjour. Je vous appelle parce que je me suis baladé dans le désert et je me suis perdu.",
		"perso": 2,
		"image": 1,
		"animation": "bounceIn",
		"name": "L'Homme Perdu"
	},
	{
		"id": 2,
		"text": "Humm... oui ce problème est récurrent....",
		"perso": 1,
		"animation": "bounce",
		"name": "L'Homme Perdu"
	},
	{
		"id": 3,
		"text": "Bah écoutez, passez une bonne journée !",
		"perso": 1,
		"animation": "bounceOut",
		"name": "L'Homme Perdu"
	},
	{
		"id": 4,
		"text": "Merci ! Au revoir !",
		"perso": 2,
		"image": 3,
		"animation": "bounceOut",
		"name": "L'Homme perdu"
	}]
};

//=============================================================

JSONSCHEMA = {
	"type": "object",
	"properties":
	{
		"paramCSS":
		{
			"type": "object",
			"title": "ParamCSS"
		},
		"sources":
		{
			"type": "array",
			"title": "Sources",
			"items":
			{
				"type": "object",
				"properties":
				{
					"id":
					{
						"type": "integer",
						"minimum": 0
					},
					"src":
					{
						"type": "string"
					}
				}
			}
		},
		"background":
		{
			"type": "integer",
			"minimum": 0,
			"title": "Arriere-plan"
		},
		"characters":
		{
			"type": "array",
			"title": "Liste des personnages",
			"items":
			{
				"type": "object",
				"fieldClass": "personnage",
				"properties":
				{
					"id":
					{
						"type": "integer",
						"minimum": 0,
						"title": "Id du personnage"
					},
					"defaultName":
					{
						"title": "Nom par défaut",
						"type": "string"
					},
					"mouth":
					{
						"title": "Image-bouche",
						"type": "object",
						"properties":
						{
							"imageId":
							{
								"title": "Image utilisée",
								"type": "integer",
								"minimum": 0
							},
							"positions":
							{
								"type": "object",
								"title": "Position de l'image",
								"properties":
								{
									"x":
									{
										"type": "number",
										"title": "Position x",
										"minimum": 0
									},
									"y":
									{
										"type": "number",
										"title": "Position y",
										"minimum": 0
									}
								}
							},
							"nbImg":
							{
								"title": "Nombre d'images",
								"type": "integer",
								"minimum": 0
							}
						}
					}
				}
			}
		},
		"lines":
		{
			"type": "array",
			"title": "Répliques",
			"items":
			{
				"type": "object",
				"properties":
				{
					"text":
					{
						"type": "string",
						"title": "Texte"
					},
					"perso":
					{
						"type": "integer",
						"minimum": 0,
						"title": "Personnage"
					},
					"image":
					{
						"type": "integer",
						"minimum": 0,
						"title": "Image"
					},
					"animation":
					{
						"type": "string",
						"title": "Animation"
					},
					"name":
					{
						"type": "string",
						"title": "Nom"
					}
				}
			}
		}
	}
};

//====================================================

JSONOPTIONS = {
	"fields":
	{
		"paramCSS":
		{
			"hidden": "true"
		},
		"sources":
		{
			"hidden": "true"
		},
		"background":
		{
			"fieldClass": "background",
			"type": "image",
			"label": "Image"
		},
		"characters":
		{
			"items":
			{
				"fieldClass": "personnageDiv",
				"fields":
				{
					"id":
					{
						"hidden": "true"
					},
					"mouth":
					{
						"fields":
						{
							"nbImg":
							{
								"hidden": "true"
							},
							"imageId":
							{
								"fieldClass": "imageBouche",
								"type": "image",
								"label": "Image"
							}
						}
					}
				}
			}
		},
		"lines":
		{
			"fieldClass": "lines",
			"items":
			{
				"fieldClass": "line",
				"fields":
				{
					"image":
					{
						"fieldClass": "imagePerso",
						"type": "image"
					},
					"perso":
					{
						"fieldClass": "perso"
					}
				}
			}
		}
	},
	"form":
	{
		"attributes":
		{
			"action": "http://httpbin.org/post",
			"method": "post"
		},
		"buttons":
		{
			"submit":
			{
				"title": "Valider",
				"click": function()
				{
					var value = this.getValue();
					alert(JSON.stringify(value, null, "  "));
				}
			}
		}
	}
};
