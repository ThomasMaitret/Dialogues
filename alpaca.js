! function(e, t)
{
	var n = !0;
	e && "undefined" != typeof e.umd && (n = e.umd), n && "object" == typeof exports ? module.exports = t(require("jquery"), require("handlebars"), require("bootstrap")) : n && "function" == typeof define && define.amd ? define("alpaca", ["jquery", "handlebars", "bootstrap"], t) : e.Alpaca = t(e.jQuery, e.Handlebars, e.Bootstrap)
}(this, function($, Handlebars, Bootstrap)
{
	return this.HandlebarsPrecompiled = this.HandlebarsPrecompiled ||
		{}, this.HandlebarsPrecompiled["web-display"] = this.HandlebarsPrecompiled["web-display"] ||
		{}, this.HandlebarsPrecompiled["web-display"]["container-array-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = '<script type="text/x-handlebars-template">\n\n    <div>\n        ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : n.helperMissing, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-array"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l, s = "\n            ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n\n"
			},
			2: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-object-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = '<script type="text/x-handlebars-template">\n\n    <div>\n        ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : n.helperMissing, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-object"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l, s = "\n            ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n\n"
			},
			2: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-table-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <tr>\n        ' + (null != (r = (n.itemField || t && t.itemField || n.helperMissing).call(null != t ? t :
				{}, "td",
				{
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </tr>\n\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-table"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return "                    <th>" + e.escapeExpression(e.lambda(null != (r = null != t ? t.value : t) ? r.title : r, t)) + "</th>\n"
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return "\n                " + (null != (r = (n.item || t && t.item || n.helperMissing).call(null != t ? t :
				{}, "tr",
				{
					name: "item",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = n.helperMissing,
					c = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
				return o = null != (o = n.arrayToolbar || (null != t ? t.arrayToolbar : t)) ? o : u, l = {
					name: "arrayToolbar",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.arrayToolbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (c += r), c + "\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n" + (null != (r = (n.eachProperty || t && t.eachProperty || u).call(s, null != (r = null != (r = null != t ? t.schema : t) ? r.items : r) ? r.properties : r,
				{
					name: "eachProperty",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n" + (null != (r = n.each.call(s, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </tbody>\n\n        </table>\n\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-tablerow-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = '<script type="text/x-handlebars-template">\n\n    <td>\n        ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : n.helperMissing, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n    </td>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["container-tablerow"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l, s = "            ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n"
			},
			2: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-merge-up">\n\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"].container = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return '        <legend class="' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' alpaca-container-label">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</legend>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="alpaca-helper ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="alpaca-icon-helper"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			8: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(4, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.container || (null != t ? t.container : t)) ? o : n.helperMissing, l = {
					name: "container",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.container || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-any"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (r = (n.str || t && t.str || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.data : t,
				{
					name: "str",
					hash:
					{},
					data: a
				})) ? r : "") + "</div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-checkbox"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (r = (n.str || t && t.str || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.data : t,
				{
					name: "str",
					hash:
					{},
					data: a
				})) ? r : "") + "</div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-hidden"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				return '<script type="text/x-handlebars-template">\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-image"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = n.helperMissing,
					s = "function",
					u = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-image-display">\n        <img id="' + u((r = null != (r = n.id || (null != t ? t.id : t)) ? r : l, typeof r === s ? r.call(o,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : r)) + '-image" src="' + u((r = null != (r = n.data || (null != t ? t.data : t)) ? r : l, typeof r === s ? r.call(o,
				{
					name: "data",
					hash:
					{},
					data: a
				}) : r)) + '">\n    </div>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-password"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (r = (n.disguise || t && t.disguise || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.data : t, "&bull;",
				{
					name: "disguise",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "</div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-radio"] = Handlebars.template(
		{
			1: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.value : t, null != o[1] ? o[1].data : o[1],
				{
					name: "compare",
					hash:
					{},
					fn: e.program(2, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			2: function(e, t, n, i, a)
			{
				var r, o;
				return "                " + (null != (o = null != (o = n.text || (null != t ? t.text : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "text",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (l = n.each.call(null != t ? t :
				{}, null != t ? t.selectOptions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "    </div>\n\n</script>\n"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-select"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n        ' + e.escapeExpression((r = null != (r = n.displayableText || (null != t ? t.displayableText : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "displayableText",
					hash:
					{},
					data: a
				}) : r)) + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-text"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o;
				return '<script type="text/x-handlebars-template">\n\n    <div>' + (null != (o = null != (o = n.data || (null != t ? t.data : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "data",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-textarea"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o;
				return '<script type="text/x-handlebars-template">\n\n    <p>\n        ' + (null != (o = null != (o = n.data || (null != t ? t.data : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "data",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n    </p>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"]["control-url"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'target="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.anchorTarget : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.anchorTitle : r, t))
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression((r = null != (r = n.data || (null != t ? t.data : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "data",
					hash:
					{},
					data: a
				}) : r))
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return "            " + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.anchorTitle : r, t)) + "\n"
			},
			9: function(e, t, n, i, a)
			{
				var r;
				return "            " + e.escapeExpression((r = null != (r = n.data || (null != t ? t.data : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "data",
					hash:
					{},
					data: a
				}) : r)) + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-control-url-anchor-wrapper">\n        <a href="' + e.escapeExpression((o = null != (o = n.data || (null != t ? t.data : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "data",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.anchorTarget : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' title="' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.anchorTitle : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.program(5, a, 0),
					data: a
				})) ? r : "") + '">\n' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.anchorTitle : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.program(9, a, 0),
					data: a
				})) ? r : "") + "        </a>\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"].control = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '        <label class="' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' alpaca-control-label" for="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</label>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				return ""
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.control || (null != t ? t.control : t)) ? o : n.helperMissing, l = {
					name: "control",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.control || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-display"].form = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			4: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '            <button data-key="' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = (n.compare || t && t.compare || s).call(l, null != t ? t.type : t, "submit",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = (n.compare || t && t.compare || s).call(l, null != t ? t.type : t, "reset",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' class="alpaca-form-button alpaca-form-button-' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + " " + c((o = null != (o = n.styles || (null != t ? t.styles : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "styles",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n.each.call(l, null != t ? t.value : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != t ? t.attributes : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</button>\n"
			},
			5: function(e, t, n, i, a)
			{
				return 'type="submit"'
			},
			7: function(e, t, n, i, a)
			{
				return 'type="reset"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			11: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return " " + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ';
				return o = null != (o = n.formItems || (null != t ? t.formItems : t)) ? o : n.helperMissing, l = {
					name: "formItems",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.formItems || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + '\n\n        <div class="alpaca-form-buttons-container">\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "        </div>\n\n    </form>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"] = this.HandlebarsPrecompiled["web-edit"] ||
		{}, this.HandlebarsPrecompiled["web-edit"]["container-array-actionbar"] = Handlebars.template(
		{
			1: function(e, t, n, i, a, r, o)
			{
				var l, s, u = e.escapeExpression,
					c = null != t ? t :
					{};
				return '        <button class="alpaca-array-actionbar-action ' + u(e.lambda(null != (l = null != (l = null != o[1] ? o[1].view : o[1]) ? l.styles : l) ? l.smallButton : l, t)) + '" data-alpaca-array-actionbar-action="' + u((s = null != (s = n.action || (null != t ? t.action : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(c,
				{
					name: "action",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n["if"].call(c, null != t ? t.iconClass : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "            " + (null != (l = n["if"].call(c, null != t ? t.label : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n        </button>\n"
			},
			2: function(e, t, n, i, a)
			{
				return '            <i class="' + e.escapeExpression(e.lambda(null != t ? t.iconClass : t, t)) + '"></i>\n'
			},
			4: function(e, t, n, i, a)
			{
				var r, o;
				return null != (o = null != (o = n.label || (null != t ? t.label : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "label",
					hash:
					{},
					data: a
				}) : o) ? r : ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing,
					d = "function",
					p = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-actionbar alpaca-array-actionbar-' + p((s = null != (s = n.actionbarStyle || (null != t ? t.actionbarStyle : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "actionbarStyle",
					hash:
					{},
					data: a
				}) : s)) + ' btn-group" data-alpaca-array-actionbar-parent-field-id="' + p((s = null != (s = n.parentFieldId || (null != t ? t.parentFieldId : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "parentFieldId",
					hash:
					{},
					data: a
				}) : s)) + '" data-alpaca-array-actionbar-field-id="' + p((s = null != (s = n.fieldId || (null != t ? t.fieldId : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "fieldId",
					hash:
					{},
					data: a
				}) : s)) + '" data-alpaca-array-actionbar-item-index="' + p((s = null != (s = n.itemIndex || (null != t ? t.itemIndex : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "itemIndex",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n.each.call(u, null != t ? t.actions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "    </div>\n\n</script>"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-array-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = n.helperMissing,
					c = "function",
					d = n.blockHelperMissing,
					p = '        <div class="pull-left">\n            ';
				return o = null != (o = n.arrayActionbar || (null != t ? t.arrayActionbar : t)) ? o : u, l = {
					name: "arrayActionbar",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = typeof o === c ? o.call(s, l) : o, n.arrayActionbar || (r = d.call(t, r, l)), null != r && (p += r), p += '\n        </div>\n        <div class="pull-right">\n            ', o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : u, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = typeof o === c ? o.call(s, l) : o, n.itemField || (r = d.call(t, r, l)), null != r && (p += r), p + '\n        </div>\n        <div class="clear"></div>\n'
			},
			2: function(e, t, n, i, a)
			{
				return ""
			},
			4: function(e, t, n, i, a)
			{
				var r;
				return null != (r = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.actionbarStyle : t, "right",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.program(7, a, 0),
					data: a
				})) ? r : ""
			},
			5: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = n.helperMissing,
					c = "function",
					d = n.blockHelperMissing,
					p = '            <div class="pull-left">\n                ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : u, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = typeof o === c ? o.call(s, l) : o, n.itemField || (r = d.call(t, r, l)), null != r && (p += r), p += '\n            </div>\n            <div class="pull-right">\n                ', o = null != (o = n.arrayActionbar || (null != t ? t.arrayActionbar : t)) ? o : u, l = {
					name: "arrayActionbar",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = typeof o === c ? o.call(s, l) : o, n.arrayActionbar || (r = d.call(t, r, l)), null != r && (p += r), p + '\n            </div>\n            <div class="alpaca-clear"></div>\n'
			},
			7: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = n.helperMissing,
					c = "            <div>\n\n" + (null != (r = (n.compare || t && t.compare || u).call(s, null != t ? t.actionbarStyle : t, "top",
					{
						name: "compare",
						hash:
						{},
						fn: e.program(8, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n                ";
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : u, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (c += r), c + "\n\n" + (null != (r = (n.compare || t && t.compare || u).call(s, null != t ? t.actionbarStyle : t, "bottom",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n            </div>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r, o, l, s = "                ";
				return o = null != (o = n.arrayActionbar || (null != t ? t.arrayActionbar : t)) ? o : n.helperMissing, l = {
					name: "arrayActionbar",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.arrayActionbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (r = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.actionbarStyle : t, "left",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.program(4, a, 0),
					data: a
				})) ? r : "") + "    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-array-toolbar"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return " btn-group"
			},
			3: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
					{},
					u = n.helperMissing;
				return "\n" + (null != (l = (n.compare || t && t.compare || u).call(s, null != o[1] ? o[1].toolbarStyle : o[1], "link",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(4, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n" + (null != (l = (n.compare || t && t.compare || u).call(s, null != o[1] ? o[1].toolbarStyle : o[1], "button",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n"
			},
			4: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '                <a href="#" class="alpaca-array-toolbar-action" data-alpaca-array-toolbar-action="' + e.escapeExpression((o = null != (o = n.action || (null != t ? t.action : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "action",
					hash:
					{},
					data: a
				}) : o)) + '">' + (null != (o = null != (o = n.label || (null != t ? t.label : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "label",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</a>\n"
			},
			6: function(e, t, n, i, a, r, o)
			{
				var l, s, u = e.escapeExpression,
					c = null != t ? t :
					{};
				return '                <button class="alpaca-array-toolbar-action ' + u(e.lambda(null != (l = null != (l = null != o[1] ? o[1].view : o[1]) ? l.styles : l) ? l.smallButton : l, t)) + '" data-alpaca-array-toolbar-action="' + u((s = null != (s = n.action || (null != t ? t.action : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(c,
				{
					name: "action",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n["if"].call(c, null != t ? t.iconClass : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "                    " + (null != (l = n["if"].call(c, null != t ? t.label : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(9, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n                </button>\n"
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '                    <i class="' + e.escapeExpression((r = null != (r = n.iconClass || (null != t ? t.iconClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "iconClass",
					hash:
					{},
					data: a
				}) : r)) + '"></i>\n'
			},
			9: function(e, t, n, i, a)
			{
				var r, o;
				return null != (o = null != (o = n.label || (null != t ? t.label : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "label",
					hash:
					{},
					data: a
				}) : o) ? r : ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing;
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-array-toolbar" data-alpaca-array-toolbar-field-id="' + e.escapeExpression((s = null != (s = n.id || (null != t ? t.id : t)) ? s : c, "function" == typeof s ? s.call(u,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : s)) + '" ' + (null != (l = (n.compare || t && t.compare || c).call(u, null != t ? t.toolbarStyle : t, "button",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + ">\n\n" + (null != (l = n.each.call(u, null != t ? t.actions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(3, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n    </div>\n\n</script>"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-array"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				var r, o, l, s = "\n            ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
				return o = null != (o = n.arrayToolbar || (null != t ? t.arrayToolbar : t)) ? o : n.helperMissing, l = {
					name: "arrayToolbar",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.arrayToolbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n" + (null != (r = n.each.call(s, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-object-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : n.helperMissing, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-object"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l, s = "\n            ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n\n"
			},
			2: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-table-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <tr>\n        ' + (null != (r = (n.itemField || t && t.itemField || n.helperMissing).call(null != t ? t :
				{}, "td",
				{
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </tr>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-table"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				return '                    <!-- hidden column storing sort order -->\n                    <th class="alpaca-table-reorder-index-header"></th>\n                    <!-- draggable -->\n                    <th class="alpaca-table-reorder-draggable-header"></th>\n'
			},
			5: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '                    <th data-header-id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != t ? t.hidden : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.title || (null != t ? t.title : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "title",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</th>\n"
			},
			6: function(e, t, n, i, a)
			{
				return 'class="alpaca-table-column-hidden"'
			},
			8: function(e, t, n, i, a)
			{
				return "                        <th>Actions</th>\n"
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return "\n                " + (null != (r = (n.item || t && t.item || n.helperMissing).call(null != t ? t :
				{}, "tr",
				{
					name: "item",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n        ';
				return o = null != (o = n.arrayToolbar || (null != t ? t.arrayToolbar : t)) ? o : n.helperMissing, l = {
					name: "arrayToolbar",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.arrayToolbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.dragRows : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n.each.call(s, null != t ? t.headers : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.showActionsColumn : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n" + (null != (r = n.each.call(s, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </tbody>\n\n        </table>\n\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-tablerow-item"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = '<script type="text/x-handlebars-template">\n\n    <td>\n        ';
				return o = null != (o = n.itemField || (null != t ? t.itemField : t)) ? o : n.helperMissing, l = {
					name: "itemField",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.itemField || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n    </td>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["container-tablerow"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return '\n            <!-- hidden sort order column -->\n            <div class="alpaca-table-reorder-index-cell"></div>\n\n            <!-- reorder draggable -->\n            <div class="alpaca-table-reorder-draggable-cell">\n                <i class="glyphicon glyphicon-menu-hamburger"></i>\n            </div>\n'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n["if"].call(null != t ? t :
				{}, null != t ? t.hidden : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.program(6, a, 0),
					data: a
				})) ? r : ""
			},
			4: function(e, t, n, i, a)
			{
				return ""
			},
			6: function(e, t, n, i, a)
			{
				var r, o, l, s = "                ";
				return o = null != (o = n.item || (null != t ? t.item : t)) ? o : n.helperMissing, l = {
					name: "item",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.item || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n"
			},
			8: function(e, t, n, i, a)
			{
				var r, o, l, s = '            <div class="alpaca-merge-up">\n                ';
				return o = null != (o = n.arrayActionbar || (null != t ? t.arrayActionbar : t)) ? o : n.helperMissing, l = {
					name: "arrayActionbar",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(null != t ? t :
				{}, l) : o, n.arrayActionbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (s += r), s + "\n            </div>\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-merge-up">\n\n        <!-- drag cell -->\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.dragRows : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n.each.call(o, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n        <!-- actions cell -->\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.showActionsColumn : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"].container = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return '        <legend class="' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' alpaca-container-label">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</legend>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="alpaca-helper ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="alpaca-icon-helper"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			8: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(4, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.container || (null != t ? t.container : t)) ? o : n.helperMissing, l = {
					name: "container",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.container || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-any"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" size="40" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-checkbox"] = Handlebars.template(
		{
			1: function(e, t, n, i, a, r, o)
			{
				var l;
				return "\n" + (null != (l = n.each.call(null != t ? t :
				{}, null != t ? t.checkboxOptions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(2, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n"
			},
			2: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing,
					d = "function",
					p = e.escapeExpression;
				return '\n            <div>\n\n                <label>\n\n                    <input type="checkbox" data-checkbox-index="' + p((s = null != (s = n.index || a && a.index) ? s : c, typeof s === d ? s.call(u,
				{
					name: "index",
					hash:
					{},
					data: a
				}) : s)) + '" data-checkbox-value="' + p((s = null != (s = n.value || (null != t ? t.value : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : s)) + '" ' + (null != (l = n["if"].call(u, null != (l = null != o[1] ? o[1].options : o[1]) ? l.readonly : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + " " + (null != (l = n["if"].call(u, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + " " + (null != (l = n.each.call(u, null != (l = null != o[1] ? o[1].options : o[1]) ? l.data : l,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "/>\n                    " + (null != (s = null != (s = n.text || (null != t ? t.text : t)) ? s : c, l = typeof s === d ? s.call(u,
				{
					name: "text",
					hash:
					{},
					data: a
				}) : s) ? l : "") + "\n\n                </label>\n            </div>\n\n"
			},
			3: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = n.helperMissing,
					s = "function",
					u = e.escapeExpression;
				return "data-" + u((r = null != (r = n.key || a && a.key) ? r : l, typeof r === s ? r.call(o,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + u((r = null != (r = n.value || (null != t ? t.value : t)) ? r : l, typeof r === s ? r.call(o,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return '\n        <div>\n\n            <label>\n\n                <input type="checkbox" ' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(o, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(o, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n                " + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.rightLabel : r, t)) ? r : "") + "\n            </label>\n\n        </div>\n\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l;
				return '<script type="text/x-handlebars-template">\n\n' + (null != (l = n["if"].call(null != t ? t :
				{}, null != (l = null != t ? t.options : t) ? l.multiple : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.program(9, a, 0, r, o),
					data: a
				})) ? l : "") + "\n</script>\n"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-ckeditor"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <textarea id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "id",
					hash:
					{},
					data: a
				}) : r)) + '" cols="80" rows="10">\n    </textarea>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-editor"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "id",
					hash:
					{},
					data: a
				}) : r)) + '" class="control-field-editor-el"></div>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-file"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <input type="file" id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-hidden"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <input type="hidden" id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-image"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + c((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '/>\n\n    <div class="alpaca-image-display">\n        <h5>Aperçu</h5>\n        <img id="' + c((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '-image" src="' + c((o = null != (o = n.data || (null != t ? t.data : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "data",
					hash:
					{},
					data: a
				}) : o)) + '">\n    </div>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-optiontree"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			11: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <div class="optiontree"></div>\n\n    <input type="' + c((o = null != (o = n.inputType || (null != t ? t.inputType : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "inputType",
					hash:
					{},
					data: a
				}) : o)) + '" id="' + c((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.attributes : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-password"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <input type="password" id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-radio"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '    <div class="radio">\n        <label>\n            <input type="radio" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' name="' + e.escapeExpression((o = null != (o = n.name || (null != t ? t.name : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "name",
					hash:
					{},
					data: a
				}) : o)) + '" value=""/>' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.noneLabel : r, t)) ? r : "") + "\n        </label>\n    </div>\n"
			},
			4: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			6: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = e.escapeExpression,
					d = n.helperMissing,
					p = "function";
				return '    <div class="radio">\n        <label>\n            <input type="radio" ' + (null != (l = n["if"].call(u, null != (l = null != o[1] ? o[1].options : o[1]) ? l.readonly : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + ' name="' + c(e.lambda(null != o[1] ? o[1].name : o[1], t)) + '" value="' + c((s = null != (s = n.value || (null != t ? t.value : t)) ? s : d, typeof s === p ? s.call(u,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : s)) + '" ' + (null != (l = n["if"].call(u, null != t ? t.selected : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "/>" + (null != (s = null != (s = n.text || (null != t ? t.text : t)) ? s : d, l = typeof s === p ? s.call(u,
				{
					name: "text",
					hash:
					{},
					data: a
				}) : s) ? l : "") + "\n        </label>\n    </div>\n"
			},
			7: function(e, t, n, i, a)
			{
				return 'checked="checked"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n' + (null != (l = n["if"].call(s, null != (l = null != t ? t.options : t) ? l.hideNone : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.program(3, a, 0, r, o),
					data: a
				})) ? l : "") + "\n" + (null != (l = n.each.call(s, null != t ? t.selectOptions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n</script>"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-select"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			3: function(e, t, n, i, a)
			{
				return 'multiple="multiple"'
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return "\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.hideNone : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.program(12, a, 0),
					data: a
				})) ? r : "") + "\n" + (null != (r = n.each.call(o, null != t ? t.selectOptions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(14, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n"
			},
			10: function(e, t, n, i, a)
			{
				return ""
			},
			12: function(e, t, n, i, a)
			{
				var r;
				return '        <option value="">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.noneLabel : r, t)) ? r : "") + "</option>\n"
			},
			14: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '        <option value="' + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '" ' + (null != (r = n["if"].call(l, null != t ? t.selected : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(15, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + e.escapeExpression((o = null != (o = n.text || (null != t ? t.text : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "text",
					hash:
					{},
					data: a
				}) : o)) + "</option>\n"
			},
			15: function(e, t, n, i, a)
			{
				return 'selected="selected"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <select id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.multiple : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">\n\n" + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.multiple : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.program(9, a, 0),
					data: a
				})) ? r : "") + "\n    </select>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-text"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			11: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <input type="' + c((o = null != (o = n.inputType || (null != t ? t.inputType : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "inputType",
					hash:
					{},
					data: a
				}) : o)) + '" id="' + c((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.attributes : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-textarea"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'rows="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.rows : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'cols="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.cols : r, t)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			9: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			11: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return "data-" + e.escapeExpression((o = null != (o = n.fieldId || (null != t ? t.fieldId : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "fieldId",
					hash:
					{},
					data: a
				}) : o)) + '="' + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <textarea id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.rows : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.cols : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"]["control-url"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <input type="text" id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"].control = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '        <label class="' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' alpaca-control-label" for="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</label>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				return ""
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			11: function(e, t, n, i, a)
			{
				var r;
				return '            <div class="alpaca-control-buttons-container">\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(12, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </div>\n"
			},
			12: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '                <button data-key="' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + '" type="' + c((o = null != (o = n.type || (null != t ? t.type : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "type",
					hash:
					{},
					data: a
				}) : o)) + '" class="alpaca-control-button alpaca-control-button-' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + " " + c((o = null != (o = n.styles || (null != t ? t.styles : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "styles",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n.each.call(l, null != t ? t.value : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(13, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</button>\n"
			},
			13: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = n.helperMissing,
					s = "function",
					u = e.escapeExpression;
				return u((r = null != (r = n.key || a && a.key) ? r : l, typeof r === s ? r.call(o,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + u((r = null != (r = n.value || (null != t ? t.value : t)) ? r : l, typeof r === s ? r.call(o,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : r)) + '" '
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.control || (null != t ? t.control : t)) ? o : n.helperMissing, l = {
					name: "control",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.control || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.renderButtons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"].form = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			4: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '                    <button data-key="' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + '" type="' + c((o = null != (o = n.type || (null != t ? t.type : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "type",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != t ? t.id : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' class="alpaca-form-button alpaca-form-button-' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + " " + c((o = null != (o = n.styles || (null != t ? t.styles : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "styles",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n.each.call(l, null != t ? t.value : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != t ? t.attributes : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</button>\n"
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "id",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			9: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return " " + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <form role="form">\n\n        ';
				return o = null != (o = n.formItems || (null != t ? t.formItems : t)) ? o : n.helperMissing, l = {
					name: "formItems",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.formItems || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + '\n\n        <div class="alpaca-form-buttons-container">\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "        </div>\n\n    </form>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"].message = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-message alpaca-message-' + (null != (o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '">\n        ' + (null != (o = null != (o = n.message || (null != t ? t.message : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "message",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["web-edit"].wizard = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return '        <div class="alpaca-wizard-nav">\n            <nav class="navbar navbar-default" role="navigation">\n                <div class="container-fluid alpaca-wizard-back">\n                    <ul class="nav navbar-nav">\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != t ? t.steps : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "                    </ul>\n                </div>\n            </nav>\n        </div>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '                        <li data-alpaca-wizard-step-index="' + e.escapeExpression((o = null != (o = n.index || a && a.index) ? o : s, typeof o === u ? o.call(l,
				{
					name: "index",
					hash:
					{},
					data: a
				}) : o)) + '">\n                            <div class="holder">\n                                <div class="title">' + (null != (o = null != (o = n.title || (null != t ? t.title : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "title",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '</div>\n                                <div class="description">' + (null != (o = null != (o = n.description || (null != t ? t.description : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "description",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '</div>\n                            </div>\n                            <div class="chevron"></div>\n                        </li>\n'
			},
			4: function(e, t, n, i, a)
			{
				return '        <div class="alpaca-wizard-progress-bar">\n            <div class="progress">\n                <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">\n                </div>\n            </div>\n        </div>\n'
			},
			6: function(e, t, n, i, a)
			{
				var r, o;
				return "            <h3>" + (null != (o = null != (o = n.wizardTitle || (null != t ? t.wizardTitle : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "wizardTitle",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</h3>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r, o;
				return "            <h4>" + (null != (o = null != (o = n.wizardDescription || (null != t ? t.wizardDescription : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "wizardDescription",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</h4>\n"
			},
			10: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.align : t, "left",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(11, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			11: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing,
					d = "function",
					p = e.escapeExpression;
				return '                        <button type="' + p((s = null != (s = n.type || (null != t ? t.type : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "type",
					hash:
					{},
					data: a
				}) : s)) + '" ' + (null != (l = n["if"].call(u, null != t ? t.id : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(12, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + ' class="' + p(e.lambda(null != (l = null != (l = null != o[1] ? o[1].view : o[1]) ? l.styles : l) ? l.button : l, t)) + '" data-alpaca-wizard-button-key="' + p((s = null != (s = n.key || a && a.key) ? s : c, typeof s === d ? s.call(u,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : s)) + '" ' + (null != (l = n.each.call(u, null != t ? t.attributes : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(14, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + ">" + (null != (s = null != (s = n.title || (null != t ? t.title : t)) ? s : c, l = typeof s === d ? s.call(u,
				{
					name: "title",
					hash:
					{},
					data: a
				}) : s) ? l : "") + "</button>\n"
			},
			12: function(e, t, n, i, a)
			{
				var r;
				return 'id="' + e.escapeExpression((r = null != (r = n.id || (null != t ? t.id : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "id",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			14: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return " " + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			16: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.align : t, "right",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(11, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-wizard">\n\n        <!-- nav bar -->\n' + (null != (l = n["if"].call(s, null != t ? t.showSteps : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n        <!-- wizard progress bar -->\n" + (null != (l = n["if"].call(s, null != t ? t.showProgressBar : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n" + (null != (l = n["if"].call(s, null != t ? t.wizardTitle : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + (null != (l = n["if"].call(s, null != t ? t.wizardDescription : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + '\n        <!-- wizard steps -->\n        <div class="alpaca-wizard-steps">\n\n        </div>\n\n        <!-- wizard buttons -->\n        <div class="alpaca-wizard-buttons">\n\n            <div class="pull-left">\n' + (null != (l = n.each.call(s, null != t ? t.buttons : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(10, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + '            </div>\n\n            <div class="pull-right">\n' + (null != (l = n.each.call(s, null != t ? t.buttons : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(16, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + '            </div>\n\n            <div style="clear:both"></div>\n\n        </div>\n\n    </div>\n\n</script>'
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"] = this.HandlebarsPrecompiled["bootstrap-display"] ||
		{}, this.HandlebarsPrecompiled["bootstrap-display"].container = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return '        <legend class="' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + 'alpaca-container-label">\n\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.collapsible : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n            " + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "\n\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.collapsible : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n        </legend>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t)) + " "
			},
			4: function(e, t, n, i, a)
			{
				return '            <span data-toggle="collapse">\n'
			},
			6: function(e, t, n, i, a)
			{
				return "            </span>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			9: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="alpaca-helper help-block ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			12: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(8, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.container || (null != t ? t.container : t)) ? o : n.helperMissing, l = {
					name: "container",
					hash:
					{},
					fn: e.program(12, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.container || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"]["control-radio"] = Handlebars.template(
		{
			1: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, null != t ? t.value : t, null != o[1] ? o[1].data : o[1],
				{
					name: "compare",
					hash:
					{},
					fn: e.program(2, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			2: function(e, t, n, i, a)
			{
				var r, o;
				return "                " + (null != (o = null != (o = n.text || (null != t ? t.text : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "text",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n' + (null != (l = n.each.call(null != t ? t :
				{}, null != t ? t.selectOptions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "    </div>\n\n</script>\n"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"]["control-select"] = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r;
				return '<script type="text/x-handlebars-template">\n\n    <div>\n        ' + e.escapeExpression((r = null != (r = n.displayableText || (null != t ? t.displayableText : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "displayableText",
					hash:
					{},
					data: a
				}) : r)) + "\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload-partial-download"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '        <td></td>\n        <td class="name">\n            <span>' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</span>\n        </td>\n        <td class="size">\n            <span>' + l(o(null != (r = null != t ? t.file : t) ? r.size : r, t)) + '</span>\n        </td>\n        <td class="error" colspan="2">\n            Error:\n            ' + l(o(null != (r = null != t ? t.file : t) ? r.error : r, t)) + "\n        </td>\n"
			},
			3: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '        <td class="preview">\n' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '        </td>\n        <td class="name">\n            <a href="' + l(o(null != (r = null != t ? t.file : t) ? r.url : r, t)) + '" title="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '" data-gallery="' + l(o(null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r, t)) + 'gallery" download="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '">' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</a>\n        </td>\n        <td class="size"><span>' + l(o(null != (r = null != t ? t.file : t) ? r.size : r, t)) + '</span></td>\n        <td colspan="2"></td>\n'
			},
			4: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '            <a href="' + l(o(null != (r = null != t ? t.file : t) ? r.url : r, t)) + '" title="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '" data-gallery="gallery" download="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '">\n                <img src="' + l(o(null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r, t)) + '">\n            </a>\n'
			},
			6: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = n.each.call(null != t ? t :
				{}, null != t ? t.buttons : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			7: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = n["if"].call(null != t ? t :
				{}, null != t ? t.isDelete : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0, r, o),
					inverse: e.program(10, a, 0, r, o),
					data: a
				})) ? l : ""
			},
			8: function(e, t, n, i, a, r, o)
			{
				var l, s = e.escapeExpression;
				return '                        <button class="delete btn btn-danger" data-file-index="' + s(e.lambda(null != o[1] ? o[1].fileIndex : o[1], t)) + '" data-button-key="' + s((l = null != (l = n.key || (null != t ? t.key : t)) ? l : n.helperMissing, "function" == typeof l ? l.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : l)) + '">\n                            <i class="glyphicon glyphicon-trash glyphicon-white"></i>\n                        </button>\n'
			},
			10: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing,
					d = "function",
					p = e.escapeExpression;
				return '                        <button class="' + p((s = null != (s = n.key || (null != t ? t.key : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : s)) + " btn " + p((s = null != (s = n.buttonClass || (null != t ? t.buttonClass : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "buttonClass",
					hash:
					{},
					data: a
				}) : s)) + '" data-file-index="' + p(e.lambda(null != o[1] ? o[1].fileIndex : o[1], t)) + '" data-button-key="' + p((s = null != (s = n.key || (null != t ? t.key : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n["if"].call(u, null != t ? t.iconClass : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + (null != (l = n["if"].call(u, null != t ? t.label : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(13, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "                        </button>\n"
			},
			11: function(e, t, n, i, a)
			{
				var r;
				return '                                <i class="' + e.escapeExpression((r = null != (r = n.iconClass || (null != t ? t.iconClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "iconClass",
					hash:
					{},
					data: a
				}) : r)) + '"></i>\n'
			},
			13: function(e, t, n, i, a)
			{
				var r;
				return "                                " + e.escapeExpression((r = null != (r = n.label || (null != t ? t.label : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "label",
					hash:
					{},
					data: a
				}) : r)) + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <tr class="template-download">\n' + (null != (l = n["if"].call(s, null != (l = null != t ? t.file : t) ? l.error : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.program(3, a, 0, r, o),
					data: a
				})) ? l : "") + "        <td>\n" + (null != (l = n["if"].call(s, null != t ? t.buttons : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "        </td>\n    </tr>\n\n</script>"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload-partial-upload"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return '        <td class="preview">\n            <span class="fade"></span>\n        </td>\n'
			},
			3: function(e, t, n, i, a)
			{
				return "        <td></td>\n"
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return '        <td class="error" colspan="2"><span class="label label-important">Error</span> ' + e.escapeExpression(e.lambda(null != (r = null != t ? t.file : t) ? r.error : r, t)) + "</td>\n"
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.file : t) ? r.valid : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.program(15, a, 0),
					data: a
				})) ? r : ""
			},
			8: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return(null != (r = (n.compare || t && t.compare || n.helperMissing).call(o, a && a.index, 0,
				{
					name: "compare",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '            <td class="start">\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.autoUpload : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.program(13, a, 0),
					data: a
				})) ? r : "") + "            </td>\n"
			},
			9: function(e, t, n, i, a)
			{
				return '                <td>\n                    <div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\n                        <div class="progress-bar" style="width:0%;"></div>\n                    </div>\n                </td>\n'
			},
			11: function(e, t, n, i, a)
			{
				return ""
			},
			13: function(e, t, n, i, a)
			{
				return '                <button class="btn btn-primary"> \\\n                    <i class="glyphicon glyphicon-upload glyphicon-white"></i>\n                    <span>Start</span>\n                </button>\n'
			},
			15: function(e, t, n, i, a)
			{
				var r;
				return '            <td></td>\n            <td class="cancel">\n' + (null != (r = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, a && a.index, 0,
				{
					name: "compare",
					hash:
					{},
					fn: e.program(16, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </td>\n"
			},
			16: function(e, t, n, i, a)
			{
				return '                <button class="btn btn-warning">\n                    <i class="glyphicon glyphicon-ban-circle glyphicon-white"></i>\n                    <span>Cancel</span>\n                </button>\n'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = e.lambda,
					s = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <tr class="template-upload">\n\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.showUploadPreview : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.program(3, a, 0),
					data: a
				})) ? r : "") + '\n        <td class="name"><span>' + s(l(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</span></td>\n        <td class="size"><span>' + s(l(null != (r = null != t ? t.file : t) ? r.size : r, t)) + "</span></td>\n\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.file : t) ? r.error : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.program(7, a, 0),
					data: a
				})) ? r : "") + "        <td></td>\n    </tr>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"]["control-upload"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression((r = null != (r = n.cssClasses || (null != t ? t.cssClasses : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "cssClasses",
					hash:
					{},
					data: a
				}) : r))
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return "                        <thead>\n                            <tr>\n" + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.showUploadPreview : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.program(6, a, 0),
					data: a
				})) ? r : "") + '                                <td>Name</td>\n                                <td>Size</td>\n                                <td colspan="2"></td><!-- error or start or progress indicator -->\n                                <td>Actions</td>\n                            </tr>\n                        </thead>\n'
			},
			4: function(e, t, n, i, a)
			{
				return "                                    <td>Thumbnail</td>\n"
			},
			6: function(e, t, n, i, a)
			{
				return "                                    <td></td>\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = e.escapeExpression,
					u = n.helperMissing,
					c = "function";
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-fileupload-container ' + (null != (r = n["if"].call(l, null != t ? t.cssClasses : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n        <div class="container-fluid">\n            <div class="row alpaca-fileupload-chooserow">\n                <div class="col-md-12">\n                    <div class="btn-group">\n                        <span class="' + s(e.lambda(null != (r = null != (r = null != t ? t.view : t) ? r.styles : r) ? r.button : r, t)) + ' fileinput-button">\n                            <i class="glyphicon glyphicon-upload"></i>\n                            <span class="fileupload-add-button">' + s((o = null != (o = n.chooseButtonLabel || (null != t ? t.chooseButtonLabel : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "chooseButtonLabel",
					hash:
					{},
					data: a
				}) : o)) + '</span>\n                            <input class="alpaca-fileupload-input" type="file" name="' + s((o = null != (o = n.name || (null != t ? t.name : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "name",
					hash:
					{},
					data: a
				}) : o)) + '_files">\n                            <input class="alpaca-fileupload-input-hidden" type="hidden" name="' + s((o = null != (o = n.name || (null != t ? t.name : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "name",
					hash:
					{},
					data: a
				}) : o)) + '_files_hidden">\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="row alpaca-fileupload-well">\n                <div class="col-md-12 fileupload-active-zone">\n                    <table class="table table-striped">\n' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.showHeaders : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '                        <tbody class="files">\n                        </tbody>\n                    </table>\n                    <p align="center" class="dropzone-message">' + s((o = null != (o = n.dropZoneMessage || (null != t ? t.dropZoneMessage : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "dropZoneMessage",
					hash:
					{},
					data: a
				}) : o)) + '</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-12">\n                    <div id="progress" class="progress">\n                        <div class="progress-bar progress-bar-success"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"].control = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '        <label class="' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' control-label alpaca-control-label" for="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</label>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				return ""
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="help-block ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.control || (null != t ? t.control : t)) ? o : n.helperMissing, l = {
					name: "control",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.control || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-display"].message = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o;
				return '<script type="text/x-handlebars-template">\n\n    <div class="help-block">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;' + (null != (o = null != (o = n.message || (null != t ? t.message : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "message",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"] = this.HandlebarsPrecompiled["bootstrap-edit"] ||
		{}, this.HandlebarsPrecompiled["bootstrap-edit"]["container-grid"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return " btn-group"
			},
			3: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
					{},
					u = n.helperMissing;
				return "\n" + (null != (l = (n.compare || t && t.compare || u).call(s, null != (l = null != o[1] ? o[1].options : o[1]) ? l.toolbarStyle : l, "link",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(4, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n" + (null != (l = (n.compare || t && t.compare || u).call(s, null != (l = null != o[1] ? o[1].options : o[1]) ? l.toolbarStyle : l, "button",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n"
			},
			4: function(e, t, n, i, a)
			{
				var r = e.lambda,
					o = e.escapeExpression;
				return '                <a href="#" class="alpaca-array-toolbar-action" data-array-toolbar-action="' + o(r(null != t ? t.action : t, t)) + '">' + o(r(null != t ? t.label : t, t)) + "</a>\n"
			},
			6: function(e, t, n, i, a, r, o)
			{
				var l, s, u = e.escapeExpression,
					c = null != t ? t :
					{};
				return '                <button class="alpaca-array-toolbar-action ' + u(e.lambda(null != (l = null != (l = null != o[1] ? o[1].view : o[1]) ? l.styles : l) ? l.button : l, t)) + '" data-array-toolbar-action="' + u((s = null != (s = n.action || (null != t ? t.action : t)) ? s : n.helperMissing, "function" == typeof s ? s.call(c,
				{
					name: "action",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n["if"].call(c, null != t ? t.iconClass : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "                    " + (null != (l = n["if"].call(c, null != t ? t.label : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(9, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "\n                </button>\n"
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '                    <i class="' + e.escapeExpression((r = null != (r = n.iconClass || (null != t ? t.iconClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "iconClass",
					hash:
					{},
					data: a
				}) : r)) + '"></i>\n'
			},
			9: function(e, t, n, i, a)
			{
				var r, o;
				return null != (o = null != (o = n.label || (null != t ? t.label : t)) ? o : n.helperMissing, r = "function" == typeof o ? o.call(null != t ? t :
				{},
				{
					name: "label",
					hash:
					{},
					data: a
				}) : o) ? r : ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <div>\n\n        <div class="alpaca-array-toolbar" ' + (null != (l = (n.compare || t && t.compare || n.helperMissing).call(s, null != (l = null != t ? t.options : t) ? l.toolbarStyle : l, "button",
				{
					name: "compare",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + ">\n\n" + (null != (l = n.each.call(s, null != t ? t.arrayToolbarActions : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(3, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + '\n        </div>\n\n        <div class="alpaca-container-grid-holder"></div>\n\n    </div>\n\n</script>'
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"]["container-table"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return ""
			},
			3: function(e, t, n, i, a)
			{
				return '                    <!-- hidden column storing sort order -->\n                    <th class="alpaca-table-reorder-index-header"></th>\n                    <!-- draggable -->\n                    <th class="alpaca-table-reorder-draggable-header"></th>\n'
			},
			5: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '                    <th data-header-id="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != t ? t.hidden : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.title || (null != t ? t.title : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "title",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</th>\n"
			},
			6: function(e, t, n, i, a)
			{
				return 'class="alpaca-table-column-hidden"'
			},
			8: function(e, t, n, i, a)
			{
				return "                        <th>Actions</th>\n"
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return "\n                " + (null != (r = (n.item || t && t.item || n.helperMissing).call(null != t ? t :
				{}, "tr",
				{
					name: "item",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div class="table-responsive">\n\n        ';
				return o = null != (o = n.arrayToolbar || (null != t ? t.arrayToolbar : t)) ? o : n.helperMissing, l = {
					name: "arrayToolbar",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.arrayToolbar || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n        <table>\n\n            <!-- table headers -->\n            <thead>\n                <tr>\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.dragRows : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n.each.call(s, null != t ? t.headers : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.showActionsColumn : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "                </tr>\n            </thead>\n\n            <!-- table body -->\n            <tbody>\n" + (null != (r = n.each.call(s, null != t ? t.items : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </tbody>\n\n        </table>\n\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"].container = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return '        <legend class="' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + 'alpaca-container-label">\n\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.collapsible : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n            " + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "\n\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.collapsible : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n        </legend>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t)) + " "
			},
			4: function(e, t, n, i, a)
			{
				return '            <span data-toggle="collapse">\n'
			},
			6: function(e, t, n, i, a)
			{
				return "            </span>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			9: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="alpaca-helper help-block ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="alpaca-icon-16 glyphicon glyphicon-info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			12: function(e, t, n, i, a)
			{
				return ""
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div>\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(8, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.container || (null != t ? t.container : t)) ? o : n.helperMissing, l = {
					name: "container",
					hash:
					{},
					fn: e.program(12, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.container || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n    </div>\n\n</script>\n"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"]["control-colorpicker"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return '    <div class="input-group">\n'
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return 'placeholder="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.placeholder : r, t)) + '"'
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return 'size="' + e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.size : r, t)) + '"'
			},
			7: function(e, t, n, i, a)
			{
				return 'readonly="readonly"'
			},
			9: function(e, t, n, i, a)
			{
				var r;
				return 'name="' + e.escapeExpression((r = null != (r = n.name || (null != t ? t.name : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "name",
					hash:
					{},
					data: a
				}) : r)) + '"'
			},
			11: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return "data-" + o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			13: function(e, t, n, i, a)
			{
				var r, o = e.escapeExpression;
				return o((r = null != (r = n.key || a && a.key) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + o(e.lambda(t, t)) + '"'
			},
			15: function(e, t, n, i, a)
			{
				return '        <span class="input-group-addon"><i></i></span>\n        </div>\n'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.component : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '\n        <input type="' + c((o = null != (o = n.inputType || (null != t ? t.inputType : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "inputType",
					hash:
					{},
					data: a
				}) : o)) + '" id="' + c((o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.placeholder : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.size : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.readonly : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n["if"].call(l, null != t ? t.name : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.data : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + " " + (null != (r = n.each.call(l, null != (r = null != t ? t.options : t) ? r.attributes : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(13, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "/>\n\n" + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.component : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(15, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-download"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '        <td></td>\n        <td class="name">\n            <span>' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</span>\n        </td>\n        <td class="size">\n            <span>' + l(o(null != (r = null != t ? t.file : t) ? r.size : r, t)) + '</span>\n        </td>\n        <td class="error" colspan="2">\n            Error:\n            ' + l(o(null != (r = null != t ? t.file : t) ? r.error : r, t)) + "\n        </td>\n"
			},
			3: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '        <td class="preview">\n' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '        </td>\n        <td class="name">\n            <a href="' + l(o(null != (r = null != t ? t.file : t) ? r.url : r, t)) + '" title="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '" data-gallery="' + l(o(null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r, t)) + 'gallery" download="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '">' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</a>\n        </td>\n        <td class="size"><span>' + l(o(null != (r = null != t ? t.file : t) ? r.size : r, t)) + '</span></td>\n        <td colspan="2"></td>\n'
			},
			4: function(e, t, n, i, a)
			{
				var r, o = e.lambda,
					l = e.escapeExpression;
				return '            <a href="' + l(o(null != (r = null != t ? t.file : t) ? r.url : r, t)) + '" title="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '" data-gallery="gallery" download="' + l(o(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '">\n                <img src="' + l(o(null != (r = null != t ? t.file : t) ? r.thumbnailUrl : r, t)) + '">\n            </a>\n'
			},
			6: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = n.each.call(null != t ? t :
				{}, null != t ? t.buttons : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : ""
			},
			7: function(e, t, n, i, a, r, o)
			{
				var l;
				return null != (l = n["if"].call(null != t ? t :
				{}, null != t ? t.isDelete : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0, r, o),
					inverse: e.program(10, a, 0, r, o),
					data: a
				})) ? l : ""
			},
			8: function(e, t, n, i, a, r, o)
			{
				var l, s = e.escapeExpression;
				return '                        <button class="delete btn btn-danger" data-file-index="' + s(e.lambda(null != o[1] ? o[1].fileIndex : o[1], t)) + '" data-button-key="' + s((l = null != (l = n.key || (null != t ? t.key : t)) ? l : n.helperMissing, "function" == typeof l ? l.call(null != t ? t :
				{},
				{
					name: "key",
					hash:
					{},
					data: a
				}) : l)) + '">\n                            <i class="glyphicon glyphicon-trash glyphicon-white"></i>\n                        </button>\n'
			},
			10: function(e, t, n, i, a, r, o)
			{
				var l, s, u = null != t ? t :
					{},
					c = n.helperMissing,
					d = "function",
					p = e.escapeExpression;
				return '                        <button class="' + p((s = null != (s = n.key || (null != t ? t.key : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : s)) + " btn " + p((s = null != (s = n.buttonClass || (null != t ? t.buttonClass : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "buttonClass",
					hash:
					{},
					data: a
				}) : s)) + '" data-file-index="' + p(e.lambda(null != o[1] ? o[1].fileIndex : o[1], t)) + '" data-button-key="' + p((s = null != (s = n.key || (null != t ? t.key : t)) ? s : c, typeof s === d ? s.call(u,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : s)) + '">\n' + (null != (l = n["if"].call(u, null != t ? t.iconClass : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + (null != (l = n["if"].call(u, null != t ? t.label : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(13, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "                        </button>\n"
			},
			11: function(e, t, n, i, a)
			{
				var r;
				return '                                <i class="' + e.escapeExpression((r = null != (r = n.iconClass || (null != t ? t.iconClass : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "iconClass",
					hash:
					{},
					data: a
				}) : r)) + '"></i>\n'
			},
			13: function(e, t, n, i, a)
			{
				var r;
				return "                                " + e.escapeExpression((r = null != (r = n.label || (null != t ? t.label : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "label",
					hash:
					{},
					data: a
				}) : r)) + "\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a, r, o)
			{
				var l, s = null != t ? t :
				{};
				return '<script type="text/x-handlebars-template">\n\n    <tr class="template-download">\n' + (null != (l = n["if"].call(s, null != (l = null != t ? t.file : t) ? l.error : l,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0, r, o),
					inverse: e.program(3, a, 0, r, o),
					data: a
				})) ? l : "") + "        <td>\n" + (null != (l = n["if"].call(s, null != t ? t.buttons : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0, r, o),
					inverse: e.noop,
					data: a
				})) ? l : "") + "        </td>\n    </tr>\n\n</script>"
			},
			useData: !0,
			useDepths: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload-partial-upload"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				return '        <td class="preview">\n            <span class="fade"></span>\n        </td>\n'
			},
			3: function(e, t, n, i, a)
			{
				return "        <td></td>\n"
			},
			5: function(e, t, n, i, a)
			{
				var r;
				return '        <td class="error" colspan="2"><span class="label label-important">Error</span> ' + e.escapeExpression(e.lambda(null != (r = null != t ? t.file : t) ? r.error : r, t)) + "</td>\n"
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.file : t) ? r.valid : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.program(15, a, 0),
					data: a
				})) ? r : ""
			},
			8: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
				{};
				return(null != (r = (n.compare || t && t.compare || n.helperMissing).call(o, a && a.index, 0,
				{
					name: "compare",
					hash:
					{},
					fn: e.program(9, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '            <td class="start">\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.autoUpload : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.program(13, a, 0),
					data: a
				})) ? r : "") + "            </td>\n"
			},
			9: function(e, t, n, i, a)
			{
				return '                <td>\n                    <div class="progress progress-success progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">\n                        <div class="progress-bar" style="width:0%;"></div>\n                    </div>\n                </td>\n'
			},
			11: function(e, t, n, i, a)
			{
				return ""
			},
			13: function(e, t, n, i, a)
			{
				return '                <button class="btn btn-primary"> \\\n                    <i class="glyphicon glyphicon-upload glyphicon-white"></i>\n                    <span>Start</span>\n                </button>\n'
			},
			15: function(e, t, n, i, a)
			{
				var r;
				return '            <td></td>\n            <td class="cancel">\n' + (null != (r = (n.compare || t && t.compare || n.helperMissing).call(null != t ? t :
				{}, a && a.index, 0,
				{
					name: "compare",
					hash:
					{},
					fn: e.program(16, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </td>\n"
			},
			16: function(e, t, n, i, a)
			{
				return '                <button class="btn btn-warning">\n                    <i class="glyphicon glyphicon-ban-circle glyphicon-white"></i>\n                    <span>Cancel</span>\n                </button>\n'
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = e.lambda,
					s = e.escapeExpression;
				return '<script type="text/x-handlebars-template">\n\n    <tr class="template-upload">\n\n' + (null != (r = n["if"].call(o, null != (r = null != t ? t.options : t) ? r.showUploadPreview : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.program(3, a, 0),
					data: a
				})) ? r : "") + '\n        <td class="name"><span>' + s(l(null != (r = null != t ? t.file : t) ? r.name : r, t)) + '</span></td>\n        <td class="size"><span>' + s(l(null != (r = null != t ? t.file : t) ? r.size : r, t)) + "</span></td>\n\n" + (null != (r = n["if"].call(o, null != (r = null != t ? t.file : t) ? r.error : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(5, a, 0),
					inverse: e.program(7, a, 0),
					data: a
				})) ? r : "") + "        <td></td>\n    </tr>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"]["control-upload"] = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression((r = null != (r = n.cssClasses || (null != t ? t.cssClasses : t)) ? r : n.helperMissing, "function" == typeof r ? r.call(null != t ? t :
				{},
				{
					name: "cssClasses",
					hash:
					{},
					data: a
				}) : r))
			},
			3: function(e, t, n, i, a)
			{
				var r;
				return "                        <thead>\n                            <tr>\n" + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.showUploadPreview : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.program(6, a, 0),
					data: a
				})) ? r : "") + '                                <td>Name</td>\n                                <td>Size</td>\n                                <td colspan="2"></td><!-- error or start or progress indicator -->\n                                <td>Actions</td>\n                            </tr>\n                        </thead>\n'
			},
			4: function(e, t, n, i, a)
			{
				return "                                    <td>Thumbnail</td>\n"
			},
			6: function(e, t, n, i, a)
			{
				return "                                    <td></td>\n"
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = e.escapeExpression,
					u = n.helperMissing,
					c = "function";
				return '<script type="text/x-handlebars-template">\n\n    <div class="alpaca-fileupload-container ' + (null != (r = n["if"].call(l, null != t ? t.cssClasses : t,
				{
					name: "if",
					hash:
					{},
					fn: e.program(1, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n        <div class="container-fluid">\n            <div class="row alpaca-fileupload-chooserow">\n                <div class="col-md-12">\n                    <div class="btn-group">\n                        <span class="' + s(e.lambda(null != (r = null != (r = null != t ? t.view : t) ? r.styles : r) ? r.button : r, t)) + ' fileinput-button">\n                            <i class="glyphicon glyphicon-upload"></i>\n                            <span class="fileupload-add-button">' + s((o = null != (o = n.chooseButtonLabel || (null != t ? t.chooseButtonLabel : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "chooseButtonLabel",
					hash:
					{},
					data: a
				}) : o)) + '</span>\n                            <input class="alpaca-fileupload-input" type="file" name="' + s((o = null != (o = n.name || (null != t ? t.name : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "name",
					hash:
					{},
					data: a
				}) : o)) + '_files">\n                            <input class="alpaca-fileupload-input-hidden" type="hidden" name="' + s((o = null != (o = n.name || (null != t ? t.name : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "name",
					hash:
					{},
					data: a
				}) : o)) + '_files_hidden">\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <div class="row alpaca-fileupload-well">\n                <div class="col-md-12 fileupload-active-zone">\n                    <table class="table table-striped">\n' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.showHeaders : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(3, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '                        <tbody class="files">\n                        </tbody>\n                    </table>\n                    <p align="center" class="dropzone-message">' + s((o = null != (o = n.dropZoneMessage || (null != t ? t.dropZoneMessage : t)) ? o : u, typeof o === c ? o.call(l,
				{
					name: "dropZoneMessage",
					hash:
					{},
					data: a
				}) : o)) + '</p>\n                </div>\n            </div>\n            <div class="row">\n                <div class="col-md-12">\n                    <div id="progress" class="progress">\n                        <div class="progress-bar progress-bar-success"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</script>'
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"].control = Handlebars.template(
		{
			1: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
				{};
				return '        <label class="' + (null != (r = n["if"].call(l, null != (r = null != t ? t.options : t) ? r.labelClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(2, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ' control-label alpaca-control-label" for="' + e.escapeExpression((o = null != (o = n.id || (null != t ? t.id : t)) ? o : n.helperMissing, "function" == typeof o ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o)) + '">' + (null != (r = e.lambda(null != (r = null != t ? t.options : t) ? r.label : r, t)) ? r : "") + "</label>\n"
			},
			2: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.labelClass : r, t))
			},
			4: function(e, t, n, i, a)
			{
				return ""
			},
			6: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(7, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			7: function(e, t, n, i, a)
			{
				var r;
				return '        <p class="help-block ' + (null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.helperClass : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(8, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + '">\n            <i class="glyphicon glyphicon-info-sign"></i>\n            ' + (null != (r = e.lambda(t, t)) ? r : "") + "\n        </p>\n"
			},
			8: function(e, t, n, i, a)
			{
				var r;
				return e.escapeExpression(e.lambda(null != (r = null != t ? t.options : t) ? r.helperClass : r, t))
			},
			10: function(e, t, n, i, a)
			{
				var r;
				return null != (r = n["if"].call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(11, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : ""
			},
			11: function(e, t, n, i, a)
			{
				var r;
				return '            <div class="alpaca-control-buttons-container">\n' + (null != (r = n.each.call(null != t ? t :
				{}, null != (r = null != t ? t.options : t) ? r.buttons : r,
				{
					name: "each",
					hash:
					{},
					fn: e.program(12, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "            </div>\n"
			},
			12: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function",
					c = e.escapeExpression;
				return '                <button data-key="' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + '" type="' + c((o = null != (o = n.type || (null != t ? t.type : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "type",
					hash:
					{},
					data: a
				}) : o)) + '" class="alpaca-control-button alpaca-control-button-' + c((o = null != (o = n.key || a && a.key) ? o : s, typeof o === u ? o.call(l,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : o)) + " " + c((o = null != (o = n.styles || (null != t ? t.styles : t)) ? o : s, typeof o === u ? o.call(l,
				{
					name: "styles",
					hash:
					{},
					data: a
				}) : o)) + '" ' + (null != (r = n.each.call(l, null != t ? t.value : t,
				{
					name: "each",
					hash:
					{},
					fn: e.program(13, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + ">" + (null != (o = null != (o = n.value || (null != t ? t.value : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "</button>\n"
			},
			13: function(e, t, n, i, a)
			{
				var r, o = null != t ? t :
					{},
					l = n.helperMissing,
					s = "function",
					u = e.escapeExpression;
				return u((r = null != (r = n.key || a && a.key) ? r : l, typeof r === s ? r.call(o,
				{
					name: "key",
					hash:
					{},
					data: a
				}) : r)) + '="' + u((r = null != (r = n.value || (null != t ? t.value : t)) ? r : l, typeof r === s ? r.call(o,
				{
					name: "value",
					hash:
					{},
					data: a
				}) : r)) + '" '
			},
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l, s = null != t ? t :
					{},
					u = '<script type="text/x-handlebars-template">\n\n    <div class="form-group">\n\n' + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.label : r,
					{
						name: "if",
						hash:
						{},
						fn: e.program(1, a, 0),
						inverse: e.noop,
						data: a
					})) ? r : "") + "\n        ";
				return o = null != (o = n.control || (null != t ? t.control : t)) ? o : n.helperMissing, l = {
					name: "control",
					hash:
					{},
					fn: e.program(4, a, 0),
					inverse: e.noop,
					data: a
				}, r = "function" == typeof o ? o.call(s, l) : o, n.control || (r = n.blockHelperMissing.call(t, r, l)), null != r && (u += r), u + "\n\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.helpers : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(6, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n" + (null != (r = n["if"].call(s, null != (r = null != t ? t.options : t) ? r.renderButtons : r,
				{
					name: "if",
					hash:
					{},
					fn: e.program(10, a, 0),
					inverse: e.noop,
					data: a
				})) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}), this.HandlebarsPrecompiled["bootstrap-edit"].message = Handlebars.template(
		{
			compiler: [7, ">= 4.0.0"],
			main: function(e, t, n, i, a)
			{
				var r, o, l = null != t ? t :
					{},
					s = n.helperMissing,
					u = "function";
				return '<script type="text/x-handlebars-template">\n\n    <div class="help-block alpaca-message alpaca-message-' + (null != (o = null != (o = n.id || (null != t ? t.id : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "id",
					hash:
					{},
					data: a
				}) : o) ? r : "") + '">\n        <i class="glyphicon glyphicon-exclamation-sign"></i>&nbsp;' + (null != (o = null != (o = n.message || (null != t ? t.message : t)) ? o : s, r = typeof o === u ? o.call(l,
				{
					name: "message",
					hash:
					{},
					data: a
				}) : o) ? r : "") + "\n    </div>\n\n</script>"
			},
			useData: !0
		}),
		function(e, t)
		{
			e.Base = t()
		}(this, function()
		{
			var e = "function",
				t = "object",
				n = "string",
				i = !1,
				a = ["constructor", "toString", "valueOf"],
				r = a.length,
				o = /\bbase\b/,
				l = function() {},
				s = {
					toSource: null,
					base: l
				},
				u = function() {};
			return u.extend = function(n, a)
			{
				var r = u.prototype.extend;
				i = !0;
				var o = new this;
				r.call(o, n), o.base = s.base, i = !1;
				var l = o.constructor,
					c = o.constructor = function()
					{
						i || (this && (this._constructing || this.constructor === c) ? (this._constructing = !0, l.apply(this, arguments), this._constructing = !1) : arguments.length && u.cast.apply(c, arguments))
					};
				return r.call(c, this), c.ancestor = this, c.prototype = o, c.valueOf = function(e)
				{
					return e === t ? c : l.valueOf()
				}, r.call(c, a), typeof c.init === e && c.init(), c
			}, u.prototype.extend = function(l, c)
			{
				if(typeof l === n && arguments.length > 1)
				{
					var d = this[l];
					if(d && typeof c === e && (!d.valueOf || d.valueOf() !== c.valueOf()) && o.test(c))
					{
						var p = c.valueOf();
						c = function()
						{
							var e, t = this.base || s.base;
							return this.base = d, e = 0 === arguments.length ? p.call(this) : p.apply(this, arguments), this.base = t, e
						}, c.valueOf = function(e)
						{
							return e === t ? c : p
						}, c.toString = u.toString
					}
					this[l] = c
				}
				else if(l)
				{
					var h = u.prototype.extend;
					i || typeof this === e || (h = this.extend || h);
					for(var f, m = i ? 0 : 1; r > m; m++) f = a[m], l[f] !== s[f] && h.call(this, f, l[f]);
					for(f in l) s[f] || h.call(this, f, l[f])
				}
				return this
			}, u = u.extend(
			{
				base: s.base
			},
			{
				ancestor: Object,
				version: "1.1",
				cast: function()
				{
					for(var t, n, i = 0, a = arguments.length; a > i; i++) n = arguments[i], t = n.extend || u.prototype.extend, typeof n === e ? (t = n.prototype.extend || u.prototype.extend, t.call(n.prototype, this.prototype), t.call(n, this), n.ancestor = this) : t.call(n, this.prototype);
					return this
				},
				implement: function()
				{
					for(var e = 0; e < arguments.length; e++) this.cast.call(arguments[e], this);
					return this
				},
				toString: function()
				{
					return this.valueOf() + ""
				}
			})
		}),
		function(e)
		{
			var t = function()
			{
				var n = t.makeArray(arguments);
				if(0 === n.length) return t.throwDefaultError("You must supply at least one argument.  This argument can either be a DOM element against which Alpaca will generate a form or it can be a function name.  See http://www.alpacajs.org for more details.");
				var i = n[0];
				i && t.isString(i) && (i = e("#" + i));
				var a = null,
					r = null,
					o = null,
					l = null,
					s = null,
					u = null,
					c = null,
					d = null,
					p = !1,
					h = {},
					f = null,
					m = null,
					g = null,
					v = null,
					b = function(n, a)
					{
						var r = null,
							o = e(n).attr("data-alpaca-field-id");
						if(o)
						{
							var l = t.fieldInstances[o];
							l && (r = l)
						}
						if(!r)
						{
							var s = e(n).attr("data-alpaca-form-id");
							if(s)
							{
								var u = e(n).find(":first");
								if(u.length > 0)
								{
									var c = e(u[0]).attr("data-alpaca-field-id");
									if(c)
									{
										var d = t.fieldInstances[c];
										d && (r = d)
									}
								}
							}
						}
						if(!r && !a)
						{
							var p = e(i).find(":first");
							if(p.length > 0)
							{
								var h = b(p[0], !0);
								h && (r = h)
							}
						}
						if(!r && !a)
						{
							var f = e(i).parent();
							if(f)
							{
								var m = b(f, !0);
								m && (r = m)
							}
						}
						return r
					},
					y = ["get", "exists", "destroy"],
					w = n.length > 1 && t.isString(n[1]) && y.indexOf(n[1]) > -1,
					E = b(i);
				if(E || w)
				{
					if(w)
					{
						var x = n[1];
						return "get" === x ? E : "exists" === x ? !!E : "destroy" === x ? void(E && E.destroy()) : t.throwDefaultError("Unknown special function: " + x)
					}
					return E
				}
				var F = null;
				if(1 === n.length)
				{
					var C = e(i).text();
					F = JSON.parse(C), e(i).html("")
				}
				else F = t.isObject(n[1]) ? n[1] : t.isFunction(n[1]) ? n[1]() :
				{
					data: n[1]
				};
				if(!F) return t.throwDefaultError("Unable to determine Alpaca configuration");
				if(a = F.data, r = F.schema, o = F.options, l = F.view, s = F.render, F.callback && (s = F.callback), u = F.postRender, c = F.error, d = F.connector, f = F.dataSource, m = F.schemaSource, g = F.optionsSource, v = F.viewSource, F.ui && (h.ui = F.ui), F.type && (h.type = F.type), t.isEmpty(F.notTopLevel) || (p = F.notTopLevel), t.isEmpty(c) && (c = t.defaultErrorCallback), !d || !d.connect)
				{
					var T = "default",
						S = {};
					t.isString(d) ? T = d : t.isObject(d) && d.id && (T = d.id, d.config && (S = d.config));
					var k = t.getConnectorClass(T);
					k || (k = t.getConnectorClass("default")), d = new k(T, S)
				}
				var A = d;
				if(p)
				{
					var O = t.getConnectorClass("default");
					A = new O("default")
				}
				o || (o = {});
				var I = function(e)
					{
						e.parent || (e.hideInitValidationError || e.refreshValidationState(!0), "view" !== e.view.type && t.fieldApplyFieldAndChildren(e, function(e)
						{
							e.hideInitValidationError = !1
						}))
					},
					M = function(e)
					{
						e.parent || (e.observableScope = t.generateId()), e.parent || t.fireReady(e), t.isUndefined(o.focus) && !e.parent && (o.focus = t.defaultFocus), o && o.focus ? window.setTimeout(function()
						{
							var t = function(e)
							{
								e.suspendBlurFocus = !0, e.focus(), e.suspendBlurFocus = !1
							};
							if(o.focus)
							{
								if(e.isControlField && e.isAutoFocusable()) t(e);
								else if(e.isContainerField)
									if(o.focus === !0) e.children && e.children.length > 0 && t(e);
									else if("string" == typeof o.focus)
								{
									var n = e.getControlByPath(o.focus);
									n && n.isControlField && n.isAutoFocusable() && t(n)
								}
								I(e)
							}
						}, 500) : I(e), u && u(e)
					};
				A.loadAll(
				{
					data: a,
					schema: r,
					options: o,
					view: l,
					dataSource: f,
					schemaSource: m,
					optionsSource: g,
					viewSource: v
				}, function(e, n, u, p)
				{
					return e = e ? e : a, u = u ? u : r, n = n ? n : o, p = p ? p : l, t.isEmpty(e) && t.isEmpty(u) && (t.isEmpty(n) || t.isEmpty(n.type)) && (e = "", t.isEmpty(n) ? n = "text" : o && t.isObject(o) && (n.type = "text")), n.view && (p = n.view), t.init(i, e, n, u, p, h, s, M, d, c)
				}, function(e)
				{
					return c(e), null
				})
			};
			t.Fields = {}, t.Connectors = {}, t.Extend = e.extend, t.Create = function()
				{
					var t = Array.prototype.slice.call(arguments);
					return t.unshift(
					{}), e.extend.apply(this, t)
				}, t.Extend(t,
				{
					makeArray: function(e)
					{
						return Array.prototype.slice.call(e)
					},
					isFunction: function(e)
					{
						return "[object Function]" === Object.prototype.toString.call(e)
					},
					isString: function(e)
					{
						return "string" == typeof e
					},
					isObject: function(e)
					{
						return !t.isUndefined(e) && "[object Object]" === Object.prototype.toString.call(e)
					},
					isPlainObject: function(t)
					{
						return e.isPlainObject(t)
					},
					isNumber: function(e)
					{
						return "number" == typeof e
					},
					isArray: function(e)
					{
						return e instanceof Array
					},
					isBoolean: function(e)
					{
						return "boolean" == typeof e
					},
					isUndefined: function(e)
					{
						return "undefined" == typeof e
					},
					trim: function(e)
					{
						var n = e;
						return n && t.isString(n) && (n = n.replace(/^\s+|\s+$/g, "")), n
					},
					safeDomParse: function(n)
					{
						if(n && t.isString(n))
						{
							n = t.trim(n);
							var i = null;
							try
							{
								i = e(n)
							}
							catch(a)
							{
								n = "<div>" + n + "</div>", i = e(n).children()
							}
							return i
						}
						return n
					},
					isEmpty: function(e, n)
					{
						var i = this;
						if(t.isUndefined(e)) return !0;
						if(null === e) return !0;
						if(e && t.isObject(e))
						{
							var a = i.countProperties(e, n);
							if(0 === a) return !0
						}
						return !1
					},
					countProperties: function(e, n)
					{
						var i = 0;
						if(e && t.isObject(e))
							for(var a in e) e.hasOwnProperty(a) && (n ? i++ : "function" != typeof e[a] && i++);
						return i
					},
					copyOf: function(n)
					{
						var i = n;
						if(t.isArray(n))
						{
							i = [];
							for(var a = 0; a < n.length; a++) i.push(t.copyOf(n[a]))
						}
						else if(t.isObject(n))
						{
							if(n instanceof Date) return new Date(n.getTime());
							if(n instanceof RegExp) return new RegExp(n);
							if(n.nodeType && "cloneNode" in n) i = n.cloneNode(!0);
							else if(e.isPlainObject(n))
							{
								i = {};
								for(var r in n) n.hasOwnProperty(r) && (i[r] = t.copyOf(n[r]))
							}
						}
						return i
					},
					copyInto: function(e, t)
					{
						for(var n in t) t.hasOwnProperty(n) && !this.isFunction(this[n]) && (e[n] = t[n])
					},
					cloneObject: function(e)
					{
						return t.copyOf(e)
					},
					spliceIn: function(e, t, n)
					{
						return e.substring(0, t) + n + e.substring(t, e.length)
					},
					compactArray: function(e)
					{
						var t, n = [],
							i = e.length;
						for(t = 0; i > t; t++) lang.isNull(e[t]) || lang.isUndefined(e[t]) || n.push(e[t]);
						return n
					},
					removeAccents: function(e)
					{
						return e.replace(/[àáâãäå]/g, "a").replace(/[èéêë]/g, "e").replace(/[ìíîï]/g, "i").replace(/[òóôõö]/g, "o").replace(/[ùúûü]/g, "u").replace(/[ýÿ]/g, "y").replace(/[ñ]/g, "n").replace(/[ç]/g, "c").replace(/[œ]/g, "oe").replace(/[æ]/g, "ae")
					},
					indexOf: function(e, n, i)
					{
						var a, r = n.length;
						for(t.isFunction(i) || (i = function(e, t)
							{
								return e === t
							}), a = 0; r > a; a++)
							if(i.call(
								{}, e, n[a])) return a;
						return -1
					},
					uniqueIdCounter: 0,
					defaultLocale: "en_US",
					defaultFocus: !0,
					defaultSort: function(e, t)
					{
						return e.text > t.text ? 1 : e.text < t.text ? -1 : 0
					},
					setDefaultLocale: function(e)
					{
						this.defaultLocale = e
					},
					defaultSchemaFieldMapping:
					{},
					registerDefaultSchemaFieldMapping: function(e, t)
					{
						e && t && (this.defaultSchemaFieldMapping[e] = t)
					},
					defaultFormatFieldMapping:
					{},
					registerDefaultFormatFieldMapping: function(e, t)
					{
						e && t && (this.defaultFormatFieldMapping[e] = t)
					},
					getSchemaType: function(e)
					{
						var n = null;
						return t.isEmpty(e) ? n = "string" : t.isArray(e) ? n = "array" : t.isObject(e) ? n = "object" : t.isString(e) ? n = "string" : t.isNumber(e) ? n = "number" : t.isBoolean(e) && (n = "boolean"), n || "object" != typeof e || (n = "object"), n
					},
					guessOptionsType: function(e)
					{
						var n = null;
						return n = e && "undefined" != typeof e["enum"] ? e["enum"].length > 3 ? "select" : "radio" : t.defaultSchemaFieldMapping[e.type], e.format && t.defaultFormatFieldMapping[e.format] && (n = t.defaultFormatFieldMapping[e.format]), n
					},
					views:
					{},
					generateViewId: function()
					{
						return "view-" + this.generateId()
					},
					registerView: function(e)
					{
						var n = e.id;
						if(!n) return t.throwDefaultError("Cannot register view with missing view id: " + n);
						var i = this.views[n];
						if(i) t.mergeObject(i, e);
						else
						{
							this.views[n] = e, e.templates || (e.templates = {});
							for(var a = t.TemplateEngineRegistry.ids(), r = 0; r < a.length; r++)
							{
								var o = a[r],
									l = t.TemplateEngineRegistry.find(o);
								if(l)
									for(var s = l.findCacheKeys(n), u = 0; u < s.length; u++)
									{
										var c = t.splitCacheKey(s[u]);
										e.templates[c.templateId] = {
											type: o,
											template: !0,
											cacheKey: s[u]
										}
									}
							}
						}
					},
					getNormalizedView: function(e)
					{
						return this.normalizedViews[e]
					},
					lookupNormalizedView: function(e, t)
					{
						var n = null;
						for(var i in this.normalizedViews)
						{
							var a = this.normalizedViews[i];
							if(a.ui === e && a.type === t)
							{
								n = i;
								break
							}
						}
						return n
					},
					registerTemplate: function(e, n, i)
					{
						i || (i = "base"), this.views[i] || (this.views[i] = {}, this.views[i].id = i), this.views[i].templates || (this.views[i].templates = {}), this.views[i].templates[e] = n, t.countProperties(t.normalizedViews) > 0 && (t.normalizedViews = {})
					},
					registerTemplates: function(e, t)
					{
						for(var n in e) this.registerTemplate(n, e[n], t)
					},
					registerMessage: function(e, t, n)
					{
						n || (n = "base"), this.views[n] || (this.views[n] = {}, this.views[n].id = n), this.views[n].messages || (this.views[n].messages = {}), this.views[n].messages[e] = t
					},
					registerMessages: function(e, t)
					{
						for(var n in e) e.hasOwnProperty(n) && this.registerMessage(n, e[n], t)
					},
					defaultDateFormat: "MM/DD/YYYY",
					defaultTimeFormat: "HH:mm:ss",
					regexps:
					{
						email: /^[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+(?:\.[a-z0-9!\#\$%&'\*\-\/=\?\+\-\^_`\{\|\}~]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,6}$/i,
						url: /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(\:[0-9]{1,5})?(\/.*)?$/i,
						"intranet-url": /^(http|https|ftp):\/\/[a-z0-9]+([\-\.]{1}[a-z0-9]+)*(\:[0-9]{1,5})?(\/.*)?$/i,
						password: /^[0-9a-zA-Z\x20-\x7E]*$/,
						date: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d\d$/,
						integer: /^([\+\-]?([1-9]\d*)|0)$/,
						number: /^([\+\-]?((([0-9]+(\.)?)|([0-9]*\.[0-9]+))([eE][+-]?[0-9]+)?))$/,
						phone: /^(\D?(\d{3})\D?\D?(\d{3})\D?(\d{4}))?$/,
						ipv4: /^(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)(?:\.(?:1\d?\d?|2(?:[0-4]\d?|[6789]|5[0-5]?)?|[3-9]\d?|0)){3}$/,
						"zipcode-five": /^(\d{5})?$/,
						"zipcode-nine": /^(\d{5}(-\d{4})?)?$/,
						whitespace: /^\s+$/
					},
					fieldInstances:
					{},
					fieldClassRegistry:
					{},
					registerFieldClass: function(e, t)
					{
						this.fieldClassRegistry[e] = t
					},
					getFieldClass: function(e)
					{
						return this.fieldClassRegistry[e]
					},
					getFieldClassType: function(e)
					{
						for(var t in this.fieldClassRegistry)
							if(this.fieldClassRegistry.hasOwnProperty(t) && this.fieldClassRegistry[t] === e) return t;
						return null
					},
					connectorClassRegistry:
					{},
					registerConnectorClass: function(e, t)
					{
						this.connectorClassRegistry[e] = t
					},
					getConnectorClass: function(e)
					{
						return this.connectorClassRegistry[e]
					},
					replaceAll: function(e, t, n)
					{
						return e.replace(new RegExp(t, "g"), n)
					},
					element: function(t, n, i, a)
					{
						var r = e("<" + t + "/>");
						if(n && r.attr(n), i && r.css(i), a)
							for(var o in a) r.addClass(o)
					},
					elementFromTemplate: function(n, i)
					{
						var a = n;
						if(i)
							for(var r in i) a = t.replaceAll(a, "${" + r + "}", i[r]);
						return e(a)
					},
					generateId: function()
					{
						return t.uniqueIdCounter++, "alpaca" + t.uniqueIdCounter
					},
					later: function(t, n, i, a, r)
					{
						t = t || 0, n = n ||
						{};
						var o, l, s = i,
							u = e.makeArray(a);
						if("string" == typeof i && (s = n[i]), !s) throw {
							name: "TypeError",
							message: "The function is undefined."
						};
						return o = function()
						{
							s.apply(n, u)
						}, l = r ? setInterval(o, t) : setTimeout(o, t),
						{
							id: l,
							interval: r,
							cancel: function()
							{
								this.interval ? clearInterval(l) : clearTimeout(l)
							}
						}
					},
					endsWith: function(e, t)
					{
						return -1 !== e.indexOf(t, e.length - t.length)
					},
					startsWith: function(e, t)
					{
						return e.substr(0, t.length) === t
					},
					isUri: function(e)
					{
						return t.isString(e) && (t.startsWith(e, "http://") || t.startsWith(e, "https://") || t.startsWith(e, "/") || t.startsWith(e, "./") || t.startsWith(e, "../"))
					},
					traverseObject: function(e, n, i)
					{
						t.isString(n) && (n = n.split("."));
						var a = null,
							r = e,
							o = null;
						do o = n.shift(), i && o === i && (o = n.shift()), t.isEmpty(r[o]) ? n = [] : (r = r[o], 0 === n.length && (a = r)); while (n.length > 0);
						return a
					},
					each: function(e, n)
					{
						if(t.isArray(e))
							for(var i = 0; i < e.length; i++) n.apply(e[i]);
						else if(t.isObject(e))
							for(var a in e) n.apply(e[a])
					},
					merge: function(e, n, i)
					{
						e || (e = {});
						for(var a in n)
						{
							var r = !0;
							i && (r = i(a)), r && (t.isEmpty(n[a]) ? e[a] = n[a] : t.isObject(n[a]) ? (e[a] || (e[a] = {}), e[a] = t.merge(e[a], n[a])) : e[a] = n[a]);
						}
						return e
					},
					mergeObject: function(e, t)
					{
						return e || (e = {}), t || (t = {}), this.mergeObject2(t, e), e
					},
					mergeObject2: function(n, i)
					{
						var a = t.isArray,
							r = t.isObject,
							o = t.isUndefined,
							l = t.copyOf,
							s = function(t, n)
							{
								return a(t) ? a(n) && e.each(t, function(e)
								{
									n.push(l(t[e]))
								}) : r(t) ? r(n) && e.each(t, function(e)
								{
									o(n[e]) ? n[e] = l(t[e]) : n[e] = s(t[e], n[e])
								}) : n = l(t), n
							};
						return s(n, i), i
					},
					substituteTokens: function(e, n)
					{
						if(!t.isEmpty(e))
							for(var i = 0; i < n.length; i++)
							{
								var a = "{" + i + "}",
									r = e.indexOf(a);
								if(r > -1)
								{
									var o = e.substring(0, r) + n[i] + e.substring(r + 3);
									e = o
								}
							}
						return e
					},
					compareObject: function(e, t)
					{
						return equiv(e, t)
					},
					compareArrayContent: function(t, n)
					{
						var i = t && n && t.length === n.length;
						if(i)
							for(var a = t.length - 1; a >= 0; a--)
							{
								var r = t[a];
								if(e.inArray(r, n) < 0) return !1
							}
						return i
					},
					testRegex: function(e, t)
					{
						var n = new RegExp(e);
						return n.test(t)
					},
					isValEmpty: function(n, i)
					{
						var a = !1;
						return t.isEmpty(n, i) ? a = !0 : (t.isString(n) && "" === n && (a = !0), t.isObject(n) && e.isEmptyObject(n) && (a = !0), t.isArray(n) && 0 === n.length && (a = !0)), a
					},
					init: function(e, n, i, a, r, o, l, s, u, c)
					{
						var d = this;
						if(t.isObject(r))
						{
							var p = r.id;
							p || (r.id = this.generateViewId());
							var h = r.parent;
							h || (r.parent = "bootstrap-edit"), this.registerView(r), r = r.id
						}
						this.compile(function(p)
						{
							if(p.errors && p.errors.length > 0)
							{
								for(var h = [], f = 0; f < p.errors.length; f++)
								{
									var m = p.errors[f].view,
										g = p.errors[f].cacheKey,
										v = p.errors[f].err,
										b = "The template with cache key: " + g + " for view: " + m + " failed to compile";
									v && v.message && (b += ", message: " + v.message, h.push(v.message)), v && (b += ", err: " + JSON.stringify(v)), t.logError(b), delete d.normalizedViews[m], delete d.views[m]
								}
								return t.throwErrorWithCallback("View compilation failed, cannot initialize Alpaca. " + h.join(", "), c)
							}
							d._init(e, n, i, a, r, o, l, s, u, c)
						}, c)
					},
					_init: function(n, i, a, r, o, l, s, u, c, d)
					{
						var p = this,
							h = t.defaultView || null,
							f = null;
						e.mobile && !h && (h = "jquerymobile");
						var m = "function" == typeof e.fn.modal;
						m && !h && (h = "bootstrap");
						var g = "undefined" != typeof e.ui;
						if(g && !h && (h = "jqueryui"), h && (f = i ? "edit" : "create"), !o)
						{
							var v = l.ui,
								b = l.type;
							v || (h || (h = t.defaultUI), h && (v = h)), v && (b || (b = f ? f : "edit"), t.logDebug("No view provided but found request for UI: " + v + " and type: " + b), o = this.lookupNormalizedView(v, b), o ? t.logDebug("Found view: " + o) : t.logDebug("No view found for UI: " + v + " and type: " + b))
						}
						if(!o) return t.throwErrorWithCallback("A view was not specified and could not be automatically determined.", d);
						if(t.isString(o) && !this.normalizedViews[o]) return t.throwErrorWithCallback("The desired view: " + o + " could not be loaded.  Please make sure it is loaded and not misspelled.", d);
						var y = t.createFieldInstance(n, i, a, r, o, c, d);
						if(y)
						{
							e(n).addClass("alpaca-field-rendering"), e(n).addClass("alpaca-hidden"), t.fieldInstances[y.getId()] = y, y.allFieldInstances = function()
							{
								return t.fieldInstances
							}, t.isEmpty(s) && (s = y.view.render), t.isEmpty(u) && (u = y.view.postRender);
							var w = function()
							{
								y.parent || y.getFieldEl().addClass("alpaca-" + p.getNormalizedView(o).type), y.parent || y.getFieldEl().addClass("alpaca-top"), e(n).removeClass("alpaca-field-rendering"), e(n).removeClass("alpaca-hidden"), y._oldFieldEl && e(y._oldFieldEl).remove(), u(y)
							};
							t.isEmpty(s) ? y.render(function()
							{
								w()
							}) : s(y, function()
							{
								w()
							}), y.callback = s, y.renderedCallback = u
						}
					},
					createFieldInstance: function(e, n, i, a, r, o, l)
					{
						if(t.isValEmpty(i, !0) && (i = {}), t.isValEmpty(a, !0) && (a = {}), i && t.isString(i))
						{
							var s = i;
							i = {}, i.type = s
						}
						i.type || (a.type || (a.type = t.getSchemaType(n)), a.type || (n && t.isArray(n) ? a.type = "array" : a.type = "object"), i.type = t.guessOptionsType(a));
						var u = t.getFieldClass(i.type);
						return u ? new u(e, n, i, a, r, o, l) : (l(
						{
							message: "Unable to find field class for type: " + i.type,
							reason: "FIELD_INSTANTIATION_ERROR"
						}), null)
					},
					parseJSON: function(t)
					{
						return t ? e.parseJSON(t) : null
					},
					compile: function(n, i)
					{
						var a = this,
							r = {
								errors: [],
								count: 0,
								successCount: 0
							},
							o = function(e)
							{
								if(0 === r.errors.length)
									for(var t in e) a.normalizedViews[t] = e[t];
								n(r)
							},
							l = function(e, t, n, i, a)
							{
								var l = n.id;
								r.count++, t ? r.errors.push(
								{
									view: l,
									cacheKey: i,
									err: t
								}) : r.successCount++, r.count == a && o(e)
							},
							s = function(n, i, a, r, o, s, u)
							{
								var c = t.makeCacheKey(i.id, a, r, o),
									d = "text/x-handlebars-template";
								if(s && t.isObject(s) && (d = s.type, s.cacheKey && (c = s.cacheKey), s = s.template), s && "string" == typeof s)
								{
									var p = s.toLowerCase();
									if(t.isUri(p));
									else if(!s || 0 !== s.indexOf("#") && 0 !== s.indexOf("."))
									{
										if(s)
										{
											var h = i.templates[s];
											h && (s = h)
										}
									}
									else
									{
										var f = e(s);
										d = e(f).attr("type"), s = e(f).html()
									}
								}
								if(!d)
								{
									t.logError("Engine type was empty");
									var m = new Error("Engine type was empty");
									return void l(n, m, i, c, u)
								}
								var g = t.TemplateEngineRegistry.find(d);
								if(!g)
								{
									t.logError("Cannot find template engine for type: " + type);
									var m = new Error("Cannot find template engine for type: " + type);
									return void l(n, m, i, c, u)
								}
								if(s === !0)
								{
									if(g.isCached(c)) return void l(n, null, i, c, u);
									var v = "View configuration for view: " + i.id + " claims to have precompiled template for cacheKey: " + c + " but it could not be found";
									return t.logError(v), void l(n, new Error(v), i, c, u)
								}
								return g.isCached(c) ? void l(n, null, i, c, u) : void g.compile(c, s, function(e)
								{
									l(n, e, i, c, u)
								})
							},
							u = function(e)
							{
								var t = [];
								for(var n in e)
								{
									var i = e[n];
									if(i.templates)
										for(var a in i.templates)
										{
											var r = i.templates[a];
											t.push(function(e, t, n, i, a, r)
											{
												return function(o)
												{
													s(e, t, n, i, a, r, o)
												}
											}(e, i, "view", i.id, a, r))
										}
									if(i.fields)
										for(var o in i.fields)
											if(i.fields[o].templates)
												for(var a in i.fields[o].templates)
												{
													var r = i.fields[o].templates[a];
													t.push(function(e, t, n, i, a, r)
													{
														return function(o)
														{
															s(e, t, n, i, a, r, o)
														}
													}(e, i, "field", o, a, r))
												}
									if(i.layout && i.layout.template)
									{
										var r = i.layout.template;
										t.push(function(e, t, n, i, a, r)
										{
											return function(o)
											{
												s(e, t, n, i, a, r, o)
											}
										}(e, i, "layout", "layout", "layoutTemplate", r))
									}
									if(i.globalTemplate)
									{
										var r = i.globalTemplate;
										t.push(function(e, t, n, i, a, r)
										{
											return function(o)
											{
												s(e, t, n, i, a, r, o)
											}
										}(e, i, "global", "global", "globalTemplate", r))
									}
								}
								for(var l = t.length, u = 0; u < t.length; u++) t[u](l)
							},
							c = function()
							{
								var e = {},
									n = 0;
								t.normalizedViews || (t.normalizedViews = {}), a.normalizedViews = t.normalizedViews;
								for(var r in a.views)
									if(!t.normalizedViews[r])
									{
										var l = new t.NormalizedView(r);
										if(!l.normalize(a.views)) return t.throwErrorWithCallback("View normalization failed, cannot initialize Alpaca.  Please check the error logs.", i);
										e[r] = l, n++
									}
								n > 0 ? u(e) : o(e)
							};
						c()
					},
					getTemplateDescriptor: function(e, n, i)
					{
						var a = null,
							r = null,
							o = null;
						if(e.templates && e.templates[n])
						{
							o = t.makeCacheKey(e.id, "view", e.id, n);
							var l = e.templates[n];
							t.isObject(l) && l.cacheKey && (o = l.cacheKey)
						}
						if(i && i.path)
						{
							var s = i.path;
							if(e && e.fields && s && s.length > 1)
							{
								var u = function(i, a, r)
									{
										if(a != i.length)
										{
											var o = i.slice(),
												l = !1,
												s = i[a],
												c = s.indexOf("[");
											c > -1 && (s = s.substring(0, c), l = !0), o[a] = s;
											var d = o.join("/");
											if(e.fields[d] && e.fields[d].templates && e.fields[d].templates[n])
											{
												var p = t.makeCacheKey(e.id, "field", d, n);
												p && r.push(
												{
													path: d,
													cacheKey: p
												})
											}
											u(i, a + 1, r), l && u(o, a + 1, r)
										}
									},
									c = s.split("/"),
									d = [];
								u(c, 0, d), d.length > 0 && (o = d[0].cacheKey)
							}
						}
						if("globalTemplate" !== n && "global" !== n || (o = t.makeCacheKey(e.id, "global", "global", "globalTemplate")), "layoutTemplate" !== n && "layout" !== n || (o = t.makeCacheKey(e.id, "layout", "layout", "layoutTemplate")), o)
						{
							for(var p = t.TemplateEngineRegistry.ids(), h = 0; h < p.length; h++)
							{
								var f = p[h],
									m = t.TemplateEngineRegistry.find(f);
								if(m.isCached(o))
								{
									r = f;
									break
								}
							}
							r && (a = {
								engine: r,
								cacheKey: o
							})
						}
						return a
					},
					tmpl: function(e, n)
					{
						var i = t.tmplHtml(e, n);
						return t.safeDomParse(i)
					},
					tmplHtml: function(e, n)
					{
						n || (n = {});
						var i = e.engine,
							a = t.TemplateEngineRegistry.find(i);
						if(!a) return t.throwDefaultError("Cannot find template engine for type: " + i);
						var r = e.cacheKey,
							o = a.execute(r, n, function(e)
							{
								var n = JSON.stringify(e);
								return e.message && (n = e.message), t.throwDefaultError("The compiled template: " + r + " failed to execute: " + n)
							});
						return o
					}
				}), t.DEBUG = 0, t.INFO = 1, t.WARN = 2, t.ERROR = 3, t.logLevel = t.WARN, t.logDebug = function(e)
				{
					t.log(t.DEBUG, e)
				}, t.logInfo = function(e)
				{
					t.log(t.INFO, e)
				}, t.logWarn = function(e)
				{
					t.log(t.WARN, e)
				}, t.logError = function(e)
				{
					t.log(t.ERROR, e)
				}, t.LOG_METHOD_MAP = {
					0: "debug",
					1: "info",
					2: "warn",
					3: "error"
				}, t.log = function(e, n)
				{
					if(t.logLevel <= e)
					{
						var i = t.LOG_METHOD_MAP[e];
						"undefined" != typeof console && console[i] && ("debug" === i ? console.debug(n) : "info" === i ? console.info(n) : "warn" === i ? console.warn(n) : "error" === i ? console.error(n) : console.log(n))
					}
				}, t.checked = function(e, n)
				{
					return t.attrProp(e, "checked", n)
				}, t.disabled = function(e, n)
				{
					return t.attrProp(e, "disabled", n)
				}, t.attrProp = function(t, n, i)
				{
					return "undefined" != typeof i && (e(t).prop ? e(t).prop(n, i) : i ? e(t).attr(n, i) : e(t).removeAttr(n)), e(t).prop ? e(t).prop(n) : e(t).attr(n)
				}, t.loadRefSchemaOptions = function(e, n, i, a)
				{
					var r = [],
						o = {},
						l = function(n, i, a)
						{
							return function(r)
							{
								if(i)
									if("#" === i) a.schema = n, r();
									else if(0 === i.indexOf("#/"))
								{
									i = i.substring(2);
									for(var o = i.split("/"), l = n, s = 0; s < o.length; s++)
									{
										var u = o[s];
										if(l[u]) l = l[u];
										else if(l.properties && l.properties[u]) l = l.properties[u];
										else
										{
											if(!l.definitions || !l.definitions[u])
											{
												l = null;
												break
											}
											l = l.definitions[u]
										}
									}
									a.schema = l, r()
								}
								else if(0 === i.indexOf("#"))
								{
									var c = t.resolveSchemaReference(n, i);
									c && (a.schema = c), r()
								}
								else
								{
									var d = t.pathParts(i);
									e.connector.loadReferenceSchema(d.path, function(e)
									{
										if(d.id)
										{
											var n = t.resolveSchemaReference(e, d.id);
											n && (a.schema = n)
										}
										else a.schema = e;
										r()
									}, function(e)
									{
										r()
									})
								}
								else r()
							}
						};
					r.push(l(e.schema, n, o));
					var s = function(n, i, a)
					{
						return function(r)
						{
							if(i)
								if("#" === i) a.options = n, r();
								else if(0 === i.indexOf("#/"))
							{
								i = i.substring(2);
								for(var o = i.split("/"), l = n, s = 0; s < o.length; s++)
								{
									var u = o[s];
									if(l[u]) l = l[u];
									else if(l.fields && l.fields[u]) l = l.fields[u];
									else
									{
										if(!l.definitions || !l.definitions[u])
										{
											l = null;
											break
										}
										l = l.definitions[u]
									}
								}
								a.options = l, r()
							}
							else if(0 === i.indexOf("#"))
							{
								var c = t.resolveOptionsReference(n, i);
								c && (a.options = c), r()
							}
							else
							{
								var d = t.pathParts(i);
								e.connector.loadReferenceOptions(d.path, function(e)
								{
									if(d.id)
									{
										var n = t.resolveOptionsReference(e, d.id);
										n && (a.options = n)
									}
									else a.options = e;
									r()
								}, function(e)
								{
									r()
								})
							}
							else r()
						}
					};
					r.push(s(e.options, i, o)), t.series(r, function()
					{
						a(o.schema, o.options)
					})
				}, t.DEFAULT_ERROR_CALLBACK = function(e)
				{
					if(e && e.message) throw t.logError(JSON.stringify(e)), new Error("Alpaca caught an error with the default error handler: " + JSON.stringify(e))
				}, t.defaultErrorCallback = t.DEFAULT_ERROR_CALLBACK, t.throwDefaultError = function(e)
				{
					e && t.isObject(e) && (e = JSON.stringify(e));
					var n = {
						message: e
					};
					t.defaultErrorCallback(n)
				}, t.throwErrorWithCallback = function(e, n)
				{
					e && t.isObject(e) && (e = JSON.stringify(e));
					var i = {
						message: e
					};
					n ? n(i) : t.defaultErrorCallback(i)
				}, t.resolveSchemaReference = function(e, n)
				{
					if(e.id === n || "#" + e.id === n) return e;
					if(e.properties)
						for(var i in e.properties)
						{
							var a = e.properties[i],
								r = t.resolveSchemaReference(a, n);
							if(r) return r
						}
					else if(e.items)
					{
						var a = e.items,
							r = t.resolveSchemaReference(a, n);
						if(r) return r
					}
					return null
				}, t.resolveOptionsReference = function(e, n)
				{
					if(e.id === n || "#" + e.id === n) return e;
					if(e.fields)
						for(var i in e.fields)
						{
							var a = e.fields[i],
								r = t.resolveOptionsReference(a, n);
							if(r) return r
						}
					else if(e.items)
					{
						var a = e.items,
							r = t.resolveOptionsReference(a, n);
						if(r) return r
					}
					return null
				}, e.alpaca = window.Alpaca = t, e.fn.alpaca = function()
				{
					var n = t.makeArray(arguments),
						i = [].concat(this, n),
						a = t.apply(this, i);
					return "undefined" == typeof a && (a = e(this)), a
				}, e.fn.outerHTML = function(t)
				{
					return t ? e("<div></div>").append(this).html() : e("<div></div>").append(this.clone()).html()
				}, e.fn.swapWith = function(t)
				{
					return this.each(function()
					{
						var n = e(t).clone(),
							i = e(this).clone();
						e(t).replaceWith(i), e(this).replaceWith(n)
					})
				}, e.fn.attrProp = function(n, i)
				{
					return t.attrProp(e(this), n, i)
				}, e.event.special.destroyed = {
					remove: function(e)
					{
						e.handler && e.handler()
					}
				}, t.pathParts = function(e)
				{
					if("string" != typeof e) return e;
					var n = e,
						i = null,
						a = n.indexOf("#");
					a > -1 && (i = n.substring(a + 1), n = n.substring(0, a)), t.endsWith(n, "/") && (n = n.substring(0, n.length - 1));
					var r = {};
					return r.path = n, i && (r.id = i), r
				}, t.resolveField = function(e, n)
				{
					var i = null;
					if("string" == typeof n)
						if(0 === n.indexOf("#/") && propertyId.length > 2);
						else if("#" === n || "#/" === n) i = e;
					else if(0 === n.indexOf("#"))
					{
						for(var a = e; a.parent;) a = a.parent;
						var r = n.substring(1);
						i = t.resolveFieldByReference(a, r)
					}
					else i = e.childrenByPropertyId[n];
					return i
				}, t.resolveFieldByReference = function(e, n)
				{
					if(e.schema && e.schema.id == n) return e;
					if(e.children && e.children.length > 0)
						for(var i = 0; i < e.children.length; i++)
						{
							var a = e.children[i],
								r = t.resolveFieldByReference(a, n);
							if(r) return r
						}
					return null
				}, t.anyEquality = function(e, n)
				{
					var i = {};
					if("object" == typeof e || t.isArray(e))
						for(var a in e) i[e[a]] = !0;
					else i[e] = !0;
					var r = !1;
					if("object" == typeof n || t.isArray(n))
						for(var a in n)
						{
							var o = n[a];
							if(i[o])
							{
								r = !0;
								break
							}
						}
					else r = i[n];
					return r
				}, t.series = t.serial = function(e, t)
				{
					async.series(e, function()
					{
						t()
					})
				}, t.parallel = function(e, t)
				{
					async.parallel(e, function()
					{
						t()
					})
				}, t.nextTick = function(e)
				{
					async.nextTick(function()
					{
						e()
					})
				}, t.compileValidationContext = function(e, t)
				{
					var n = [],
						i = e;
					do i.isValidationParticipant() || (i = null), i && n.push(i), i && (i = i.parent); while (i);
					n.reverse();
					var a = [],
						r = function(e, t, n)
						{
							if(!e || 0 === e.length) return n();
							var i = e[0],
								a = {};
							a.id = i.getId(), a.field = i, a.path = i.path;
							var o = i.isValid();
							i.isContainer() && (o = i.isValid(!0)), a.before = o;
							var l = function(e, n, i)
							{
								var a = e._previouslyValidated;
								e.validate(), e._validateCustomValidator(function()
								{
									var r = e.isValid();
									e.isContainer() && (r = e.isValid(!0)), n.after = r, n.validated = !1, n.invalidated = !1, !o && r ? n.validated = !0 : o && !r ? n.invalidated = !0 : a || r || (n.invalidated = !0), n.container = e.isContainer(), n.valid = n.after, t.push(n), i()
								})
							};
							if(e.length > 1)
							{
								var s = e.slice(0);
								s.shift(), r(s, t, function()
								{
									l(i, a, function()
									{
										n()
									})
								})
							}
							else l(i, a, function()
							{
								n()
							})
						};
					r(n, a, function()
					{
						t(a)
					})
				}, t.updateValidationStateForContext = function(e, n)
				{
					for(var i = 0; i < n.length; i++)
					{
						var a = n[i],
							r = a.field;
						if(r.getFieldEl().removeClass("alpaca-invalid alpaca-invalid-hidden alpaca-valid"), r.fireCallback("clearValidity"), a.valid) r.getFieldEl().addClass("alpaca-field-valid"), r.fireCallback("valid");
						else if(!r.options.readonly || t.showReadOnlyInvalidState)
						{
							var o = !1;
							r.hideInitValidationError && (o = !0), r.fireCallback("invalid", o), r.getFieldEl().addClass("alpaca-invalid"), o && r.getFieldEl().addClass("alpaca-invalid-hidden")
						}
						else t.logWarn("The field (id=" + r.getId() + ", title=" + r.getTitle() + ", path=" + r.path + ") is invalid and also read-only");
						if(a.validated ? t.later(25, this, function()
							{
								r.trigger("validated")
							}) : a.invalidated && t.later(25, this, function()
							{
								r.trigger("invalidated")
							}), r.options.showMessages && !r.initializing && (!r.options.readonly || t.showReadOnlyInvalidState))
						{
							var l = [];
							for(var s in r.validation) r.validation[s].status || l.push(
							{
								id: s,
								message: r.validation[s].message
							});
							r.displayMessage(l, r.valid)
						}
					}
				}, t.fieldApplyFieldAndChildren = function(e, n)
				{
					if(n(e), e.children && e.children.length > 0)
						for(var i = 0; i < e.children.length; i++) t.fieldApplyFieldAndChildren(e.children[i], n)
				}, t.replaceAll = function(e, t, n)
				{
					return e.replace(new RegExp(t, "g"), n)
				}, t.asArray = function(e)
				{
					if(!t.isArray(e))
					{
						var n = [];
						return n.push(e), n
					}
					return e
				},
				function()
				{
					function e(e)
					{
						var t = !1;
						return function()
						{
							if(t) throw new Error("Callback was already called.");
							t = !0, e.apply(i, arguments)
						}
					}

					function t(e)
					{
						return e.constructor === String ? "string" : e.constructor === Boolean ? "boolean" : e.constructor === Number ? isNaN(e) ? "nan" : "number" : "undefined" == typeof e ? "undefined" : null === e ? "null" : e instanceof Array ? "array" : e instanceof Date ? "date" : e instanceof RegExp ? "regexp" : "object" == typeof e ? "object" : e instanceof Function ? "function" : void 0
					}

					function n(e, n, i)
					{
						var a = t(e);
						return a ? "function" === t(n[a]) ? n[a].apply(n, i) : n[a] : void 0
					}
					var i, a, r = {};
					i = this, null != i && (a = i.async), r.noConflict = function()
					{
						return i.async = a, r
					};
					var o = function(e, t)
						{
							if(e.forEach) return e.forEach(t);
							for(var n = 0; n < e.length; n += 1) t(e[n], n, e)
						},
						l = function(e, t)
						{
							if(e.map) return e.map(t);
							var n = [];
							return o(e, function(e, i, a)
							{
								n.push(t(e, i, a))
							}), n
						},
						s = function(e, t, n)
						{
							return e.reduce ? e.reduce(t, n) : (o(e, function(e, i, a)
							{
								n = t(n, e, i, a)
							}), n)
						},
						u = function(e)
						{
							if(Object.keys) return Object.keys(e);
							var t = [];
							for(var n in e) e.hasOwnProperty(n) && t.push(n);
							return t
						};
					"undefined" != typeof process && process.nextTick ? (r.nextTick = process.nextTick, "undefined" != typeof setImmediate ? r.setImmediate = function(e)
					{
						setImmediate(e)
					} : r.setImmediate = r.nextTick) : "function" == typeof setImmediate ? (r.nextTick = function(e)
					{
						setImmediate(e)
					}, r.setImmediate = r.nextTick) : (r.nextTick = function(e)
					{
						setTimeout(e, 0)
					}, r.setImmediate = r.nextTick), r.each = function(t, n, i)
					{
						if(i = i || function() {}, !t.length) return i();
						var a = 0;
						o(t, function(r)
						{
							n(r, e(function(e)
							{
								e ? (i(e), i = function() {}) : (a += 1, a >= t.length && i(null))
							}))
						})
					}, r.forEach = r.each, r.eachSeries = function(e, t, n)
					{
						if(n = n || function() {}, !e.length) return n();
						var i = 0,
							a = function()
							{
								t(e[i], function(t)
								{
									t ? (n(t), n = function() {}) : (i += 1, i >= e.length ? n(null) : a())
								})
							};
						a()
					}, r.forEachSeries = r.eachSeries, r.eachLimit = function(e, t, n, i)
					{
						var a = c(t);
						a.apply(null, [e, n, i])
					}, r.forEachLimit = r.eachLimit;
					var c = function(e)
						{
							return function(t, n, i)
							{
								if(i = i || function() {}, !t.length || 0 >= e) return i();
								var a = 0,
									r = 0,
									o = 0;
								! function l()
								{
									if(a >= t.length) return i();
									for(; e > o && r < t.length;) r += 1, o += 1, n(t[r - 1], function(e)
									{
										e ? (i(e), i = function() {}) : (a += 1, o -= 1, a >= t.length ? i() : l())
									})
								}()
							}
						},
						d = function(e)
						{
							return function()
							{
								var t = Array.prototype.slice.call(arguments);
								return e.apply(null, [r.each].concat(t))
							}
						},
						p = function(e, t)
						{
							return function()
							{
								var n = Array.prototype.slice.call(arguments);
								return t.apply(null, [c(e)].concat(n))
							}
						},
						h = function(e)
						{
							return function()
							{
								var t = Array.prototype.slice.call(arguments);
								return e.apply(null, [r.eachSeries].concat(t))
							}
						},
						f = function(e, t, n, i)
						{
							var a = [];
							t = l(t, function(e, t)
							{
								return {
									index: t,
									value: e
								}
							}), e(t, function(e, t)
							{
								n(e.value, function(n, i)
								{
									a[e.index] = i, t(n)
								})
							}, function(e)
							{
								i(e, a)
							})
						};
					r.map = d(f), r.mapSeries = h(f), r.mapLimit = function(e, t, n, i)
					{
						return m(t)(e, n, i)
					};
					var m = function(e)
					{
						return p(e, f)
					};
					r.reduce = function(e, t, n, i)
					{
						r.eachSeries(e, function(e, i)
						{
							n(t, e, function(e, n)
							{
								t = n, i(e)
							})
						}, function(e)
						{
							i(e, t)
						})
					}, r.inject = r.reduce, r.foldl = r.reduce, r.reduceRight = function(e, t, n, i)
					{
						var a = l(e, function(e)
						{
							return e
						}).reverse();
						r.reduce(a, t, n, i)
					}, r.foldr = r.reduceRight;
					var g = function(e, t, n, i)
					{
						var a = [];
						t = l(t, function(e, t)
						{
							return {
								index: t,
								value: e
							}
						}), e(t, function(e, t)
						{
							n(e.value, function(n)
							{
								n && a.push(e), t()
							})
						}, function(e)
						{
							i(l(a.sort(function(e, t)
							{
								return e.index - t.index
							}), function(e)
							{
								return e.value
							}))
						})
					};
					r.filter = d(g), r.filterSeries = h(g), r.select = r.filter, r.selectSeries = r.filterSeries;
					var v = function(e, t, n, i)
					{
						var a = [];
						t = l(t, function(e, t)
						{
							return {
								index: t,
								value: e
							}
						}), e(t, function(e, t)
						{
							n(e.value, function(n)
							{
								n || a.push(e), t()
							})
						}, function(e)
						{
							i(l(a.sort(function(e, t)
							{
								return e.index - t.index
							}), function(e)
							{
								return e.value
							}))
						})
					};
					r.reject = d(v), r.rejectSeries = h(v);
					var b = function(e, t, n, i)
					{
						e(t, function(e, t)
						{
							n(e, function(n)
							{
								n ? (i(e), i = function() {}) : t()
							})
						}, function(e)
						{
							i()
						})
					};
					r.detect = d(b), r.detectSeries = h(b), r.some = function(e, t, n)
					{
						r.each(e, function(e, i)
						{
							t(e, function(e)
							{
								e && (n(!0), n = function() {}), i()
							})
						}, function(e)
						{
							n(!1)
						})
					}, r.any = r.some, r.every = function(e, t, n)
					{
						r.each(e, function(e, i)
						{
							t(e, function(e)
							{
								e || (n(!1), n = function() {}), i()
							})
						}, function(e)
						{
							n(!0)
						})
					}, r.all = r.every, r.sortBy = function(e, t, n)
					{
						r.map(e, function(e, n)
						{
							t(e, function(t, i)
							{
								t ? n(t) : n(null,
								{
									value: e,
									criteria: i
								})
							})
						}, function(e, t)
						{
							if(e) return n(e);
							var i = function(e, t)
							{
								var n = e.criteria,
									i = t.criteria;
								return i > n ? -1 : n > i ? 1 : 0
							};
							n(null, l(t.sort(i), function(e)
							{
								return e.value
							}))
						})
					}, r.auto = function(e, t)
					{
						t = t || function() {};
						var n = u(e);
						if(!n.length) return t(null);
						var i = {},
							a = [],
							l = function(e)
							{
								a.unshift(e)
							},
							c = function(e)
							{
								for(var t = 0; t < a.length; t += 1)
									if(a[t] === e) return void a.splice(t, 1)
							},
							d = function()
							{
								o(a.slice(0), function(e)
								{
									e()
								})
							};
						l(function()
						{
							u(i).length === n.length && (t(null, i), t = function() {})
						}), o(n, function(n)
						{
							var a = e[n] instanceof Function ? [e[n]] : e[n],
								p = function(e)
								{
									var a = Array.prototype.slice.call(arguments, 1);
									if(a.length <= 1 && (a = a[0]), e)
									{
										var l = {};
										o(u(i), function(e)
										{
											l[e] = i[e]
										}), l[n] = a, t(e, l), t = function() {}
									}
									else i[n] = a, r.setImmediate(d)
								},
								h = a.slice(0, Math.abs(a.length - 1)) || [],
								f = function()
								{
									return s(h, function(e, t)
									{
										return e && i.hasOwnProperty(t)
									}, !0) && !i.hasOwnProperty(n)
								};
							if(f()) a[a.length - 1](p, i);
							else
							{
								var m = function()
								{
									f() && (c(m), a[a.length - 1](p, i))
								};
								l(m)
							}
						})
					}, r.waterfall = function(e, t)
					{
						if(t = t || function() {}, e.constructor !== Array)
						{
							var n = new Error("First argument to waterfall must be an array of functions");
							return t(n)
						}
						if(!e.length) return t();
						var i = function(e)
						{
							return function(n)
							{
								if(n) t.apply(null, arguments), t = function() {};
								else
								{
									var a = Array.prototype.slice.call(arguments, 1),
										o = e.next();
									o ? a.push(i(o)) : a.push(t), r.setImmediate(function()
									{
										e.apply(null, a)
									})
								}
							}
						};
						i(r.iterator(e))()
					};
					var y = function(e, t, n)
					{
						if(n = n || function() {}, t.constructor === Array) e.map(t, function(e, t)
						{
							e && e(function(e)
							{
								var n = Array.prototype.slice.call(arguments, 1);
								n.length <= 1 && (n = n[0]), t.call(null, e, n)
							})
						}, n);
						else
						{
							var i = {};
							e.each(u(t), function(e, n)
							{
								t[e](function(t)
								{
									var a = Array.prototype.slice.call(arguments, 1);
									a.length <= 1 && (a = a[0]), i[e] = a, n(t)
								})
							}, function(e)
							{
								n(e, i)
							})
						}
					};
					r.parallel = function(e, t)
					{
						y(
						{
							map: r.map,
							each: r.each
						}, e, t)
					}, r.parallelLimit = function(e, t, n)
					{
						y(
						{
							map: m(t),
							each: c(t)
						}, e, n)
					}, r.series = function(e, t)
					{
						if(t = t || function() {}, e.constructor === Array) r.mapSeries(e, function(e, t)
						{
							e && e(function(e)
							{
								var n = Array.prototype.slice.call(arguments, 1);
								n.length <= 1 && (n = n[0]), t.call(null, e, n)
							})
						}, t);
						else
						{
							var n = {};
							r.eachSeries(u(e), function(t, i)
							{
								e[t](function(e)
								{
									var a = Array.prototype.slice.call(arguments, 1);
									a.length <= 1 && (a = a[0]), n[t] = a, i(e)
								})
							}, function(e)
							{
								t(e, n)
							})
						}
					}, r.iterator = function(e)
					{
						var t = function(n)
						{
							var i = function()
							{
								return e.length && e[n].apply(null, arguments), i.next()
							};
							return i.next = function()
							{
								return n < e.length - 1 ? t(n + 1) : null
							}, i
						};
						return t(0)
					}, r.apply = function(e)
					{
						var t = Array.prototype.slice.call(arguments, 1);
						return function()
						{
							return e.apply(null, t.concat(Array.prototype.slice.call(arguments)))
						}
					};
					var w = function(e, t, n, i)
					{
						var a = [];
						e(t, function(e, t)
						{
							n(e, function(e, n)
							{
								a = a.concat(n || []), t(e)
							})
						}, function(e)
						{
							i(e, a)
						})
					};
					r.concat = d(w), r.concatSeries = h(w), r.whilst = function(e, t, n)
					{
						e() ? t(function(i)
						{
							return i ? n(i) : void r.whilst(e, t, n)
						}) : n()
					}, r.doWhilst = function(e, t, n)
					{
						e(function(i)
						{
							return i ? n(i) : void(t() ? r.doWhilst(e, t, n) : n())
						})
					}, r.until = function(e, t, n)
					{
						e() ? n() : t(function(i)
						{
							return i ? n(i) : void r.until(e, t, n)
						})
					}, r.doUntil = function(e, t, n)
					{
						e(function(i)
						{
							return i ? n(i) : void(t() ? n() : r.doUntil(e, t, n))
						})
					}, r.queue = function(t, n)
					{
						function i(e, t, i, a)
						{
							t.constructor !== Array && (t = [t]), o(t, function(t)
							{
								var o = {
									data: t,
									callback: "function" == typeof a ? a : null
								};
								i ? e.tasks.unshift(o) : e.tasks.push(o), e.saturated && e.tasks.length === n && e.saturated(), r.setImmediate(e.process)
							})
						}
						void 0 === n && (n = 1);
						var a = 0,
							l = {
								tasks: [],
								concurrency: n,
								saturated: null,
								empty: null,
								drain: null,
								push: function(e, t)
								{
									i(l, e, !1, t)
								},
								unshift: function(e, t)
								{
									i(l, e, !0, t)
								},
								process: function()
								{
									if(a < l.concurrency && l.tasks.length)
									{
										var n = l.tasks.shift();
										l.empty && 0 === l.tasks.length && l.empty(), a += 1;
										var i = function()
											{
												a -= 1, n.callback && n.callback.apply(n, arguments), l.drain && l.tasks.length + a === 0 && l.drain(), l.process()
											},
											r = e(i);
										t(n.data, r)
									}
								},
								length: function()
								{
									return l.tasks.length
								},
								running: function()
								{
									return a
								}
							};
						return l
					}, r.cargo = function(e, t)
					{
						var n = !1,
							i = [],
							a = {
								tasks: i,
								payload: t,
								saturated: null,
								empty: null,
								drain: null,
								push: function(e, n)
								{
									e.constructor !== Array && (e = [e]), o(e, function(e)
									{
										i.push(
										{
											data: e,
											callback: "function" == typeof n ? n : null
										}), a.saturated && i.length === t && a.saturated()
									}), r.setImmediate(a.process)
								},
								process: function s()
								{
									if(!n)
									{
										if(0 === i.length) return void(a.drain && a.drain());
										var r = "number" == typeof t ? i.splice(0, t) : i.splice(0),
											u = l(r, function(e)
											{
												return e.data
											});
										a.empty && a.empty(), n = !0, e(u, function()
										{
											n = !1;
											var e = arguments;
											o(r, function(t)
											{
												t.callback && t.callback.apply(null, e)
											}), s()
										})
									}
								},
								length: function()
								{
									return i.length
								},
								running: function()
								{
									return n
								}
							};
						return a
					};
					var E = function(e)
					{
						return function(t)
						{
							var n = Array.prototype.slice.call(arguments, 1);
							t.apply(null, n.concat([function(t)
							{
								var n = Array.prototype.slice.call(arguments, 1);
								"undefined" != typeof console && (t ? console.error && console.error(t) : console[e] && o(n, function(t)
								{
									console[e](t)
								}))
							}]))
						}
					};
					r.log = E("log"), r.dir = E("dir"), r.memoize = function(e, t)
					{
						var n = {},
							i = {};
						t = t || function(e)
						{
							return e
						};
						var a = function()
						{
							var a = Array.prototype.slice.call(arguments),
								r = a.pop(),
								o = t.apply(null, a);
							o in n ? r.apply(null, n[o]) : o in i ? i[o].push(r) : (i[o] = [r], e.apply(null, a.concat([function()
							{
								n[o] = arguments;
								var e = i[o];
								delete i[o];
								for(var t = 0, a = e.length; a > t; t++) e[t].apply(null, arguments)
							}])))
						};
						return a.memo = n, a.unmemoized = e, a
					}, r.unmemoize = function(e)
					{
						return function()
						{
							return(e.unmemoized || e).apply(null, arguments)
						}
					}, r.times = function(e, t, n)
					{
						for(var i = [], a = 0; e > a; a++) i.push(a);
						return r.map(i, t, n)
					}, r.timesSeries = function(e, t, n)
					{
						for(var i = [], a = 0; e > a; a++) i.push(a);
						return r.mapSeries(i, t, n)
					}, r.compose = function()
					{
						var e = Array.prototype.reverse.call(arguments);
						return function()
						{
							var t = this,
								n = Array.prototype.slice.call(arguments),
								i = n.pop();
							r.reduce(e, n, function(e, n, i)
							{
								n.apply(t, e.concat([function()
								{
									var e = arguments[0],
										t = Array.prototype.slice.call(arguments, 1);
									i(e, t)
								}]))
							}, function(e, n)
							{
								i.apply(t, [e].concat(n))
							})
						}
					};
					var x = function(e, t)
					{
						var n = function()
						{
							var n = this,
								i = Array.prototype.slice.call(arguments),
								a = i.pop();
							return e(t, function(e, t)
							{
								e.apply(n, i.concat([t]))
							}, a)
						};
						if(arguments.length > 2)
						{
							var i = Array.prototype.slice.call(arguments, 2);
							return n.apply(this, i)
						}
						return n
					};
					r.applyEach = d(x), r.applyEachSeries = h(x), r.forever = function(e, t)
					{
						function n(i)
						{
							if(i)
							{
								if(t) return t(i);
								throw i
							}
							e(n)
						}
						n()
					}, i.async = r;
					i.equiv = function()
					{
						var e, i = [],
							a = function()
							{
								function n(e, t)
								{
									return e instanceof t.constructor || t instanceof e.constructor ? t == e : t === e
								}
								return {
									string: n,
									"boolean": n,
									number: n,
									"null": n,
									undefined: n,
									nan: function(e)
									{
										return isNaN(e)
									},
									date: function(e, n)
									{
										return "date" === t(e) && n.valueOf() === e.valueOf()
									},
									regexp: function(e, n)
									{
										return "regexp" === t(e) && n.source === e.source && n.global === e.global && n.ignoreCase === e.ignoreCase && n.multiline === e.multiline
									},
									"function": function()
									{
										var e = i[i.length - 1];
										return e !== Object && "undefined" != typeof e
									},
									array: function(n, i)
									{
										var a, r;
										if("array" !== t(n)) return !1;
										if(r = i.length, r !== n.length) return !1;
										for(a = 0; r > a; a++)
											if(!e(i[a], n[a])) return !1;
										return !0
									},
									object: function(t, n)
									{
										var a, r = !0,
											o = [],
											l = [];
										if(n.constructor !== t.constructor) return !1;
										i.push(n.constructor);
										for(a in n) o.push(a), e(n[a], t[a]) || (r = !1);
										i.pop();
										for(a in t) l.push(a);
										return r && e(o.sort(), l.sort())
									}
								}
							}();
						return e = function()
						{
							var e = Array.prototype.slice.apply(arguments);
							return e.length < 2 ? !0 : function(e, i)
							{
								return e === i ? !0 : null === e || null === i || "undefined" == typeof e || "undefined" == typeof i || t(e) !== t(i) ? !1 : n(e, a, [i, e])
							}(e[0], e[1]) && arguments.callee.apply(this, e.splice(1, e.length - 1))
						}
					}()
				}(), t.MARKER_CLASS_CONTROL_FIELD = "alpaca-marker-control-field", t.MARKER_CLASS_CONTAINER_FIELD = "alpaca-marker-container-field", t.MARKER_CLASS_CONTAINER_FIELD_ITEM = "alpaca-marker-control-field-item", t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY = "data-alpaca-container-field-item-key", t.MARKER_CLASS_FORM_ITEMS_FIELD = "alpaca-marker-form-items-field", t.CLASS_CONTAINER = "alpaca-container", t.CLASS_CONTROL = "alpaca-control", t.MARKER_CLASS_INSERT = "alpaca-marker-insert", t.MARKER_DATA_INSERT_KEY = "data-alpaca-marker-insert-key", t.MARKER_CLASS_ARRAY_TOOLBAR = "alpaca-marker-array-field-toolbar", t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID = "data-alpaca-array-field-toolbar-field-id", t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR = "alpaca-marker-array-field-item-actionbar", t.MARKER_DATA_ARRAY_ITEM_KEY = "data-alpaca-marker-array-field-item-key", t.MARKER_DATA_ARRAY_ITEM_PARENT_FIELD_ID = "data-alpaca-marker-array-field-item-parent-field-id", t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD = "alpaca-marker-container-field-item-field", t.makeCacheKey = function(e, t, n, i)
				{
					return e + ":" + t + ":" + n + ":" + i
				}, t.splitCacheKey = function(e)
				{
					var t = {},
						n = e.indexOf(":"),
						i = e.lastIndexOf(":");
					t.viewId = e.substring(0, n), t.templateId = e.substring(i + 1);
					var a = e.substring(n + 1, i),
						r = a.indexOf(":");
					return t.scopeType = a.substring(0, r), t.scopeId = a.substring(r + 1), t
				}, t.createEmptyDataInstance = function(e)
				{
					return e ? "object" === e.type ?
					{} : "array" === e.type ? [] : "number" === e.type ? -1 : "boolean" === e.type ? !1 : "" : ""
				}, t.animatedSwap = function(t, n, i, a)
				{
					"function" == typeof i && (a = i, i = 500);
					var r = function(t, n, i, a)
					{
						var r = e(t),
							o = e(n),
							l = r.offset(),
							s = o.offset(),
							u = r.clone(),
							c = o.clone(),
							d = s.top + o.height() - l.top,
							p = 0,
							h = 0,
							f = s.left + o.width() - l.left,
							m = 0,
							g = 0;
						r.css("opacity", 0), o.css("opacity", 0), u.insertAfter(r).css(
						{
							position: "absolute",
							width: r.outerWidth(),
							height: r.outerHeight()
						}).offset(l).css("z-index", "999"), c.insertAfter(o).css(
						{
							position: "absolute",
							width: o.outerWidth(),
							height: o.outerHeight()
						}).offset(s).css("z-index", "999"), l.top !== s.top && (p = d - r.height()), h = d - o.height(), l.left !== s.left && (m = f - r.width()), g = f - o.width(), u.animate(
						{
							top: "+=" + p + "px",
							left: "+=" + m + "px"
						}, i, function()
						{
							o.css("opacity", 1), e(this).remove()
						}), c.animate(
						{
							top: "-=" + h + "px",
							left: "-=" + g + "px"
						}, i, function()
						{
							r.css("opacity", 1), e(this).remove()
						}), window.setTimeout(function()
						{
							u.remove(), c.remove(), a()
						}, i + 1)
					};
					r(t, n, i, a)
				}, t.animatedMove = function(t, n, i, a)
				{
					"function" == typeof i && (a = i, i = 500);
					var r = function(t, n, i, a)
					{
						var r = e(t),
							o = e(n),
							l = r.offset(),
							s = o.offset(),
							u = r.clone(),
							c = s.top + o.height() - l.top,
							d = 0,
							p = 0,
							h = s.left + o.width() - l.left,
							f = 0,
							m = 0;
						r.css("opacity", 0), o.css("opacity", 0), u.insertAfter(r).css(
						{
							position: "absolute",
							width: r.outerWidth(),
							height: r.outerHeight()
						}).offset(l).css("z-index", "999"), l.top !== s.top && (d = c - r.height()), p = c - o.height(), l.left !== s.left && (f = h - r.width()), m = h - o.width(), u.animate(
						{
							top: "+=" + d + "px",
							left: "+=" + f + "px"
						}, i, function()
						{
							o.css("opacity", 1), e(this).remove()
						}), window.setTimeout(function()
						{
							u.remove(), a()
						}, i + 1)
					};
					r(t, n, i, a)
				}, t.fireReady = function(e)
				{
					if(e.children && e.children.length > 0)
						for(var n = 0; n < e.children.length; n++) t.fireReady(e.children[n]);
					e.trigger("ready")
				}, t.readCookie = function(e)
				{
					function t(e)
					{
						for(var t = e + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++)
						{
							for(var a = n[i];
								" " == a.charAt(0);) a = a.substring(1, a.length);
							if(0 == a.indexOf(t)) return a.substring(t.length, a.length)
						}
						return null
					}
					var n = null;
					return "undefined" != typeof document && (n = t(e)), n
				}, t.safeSetObjectArray = function(e, t, n)
				{
					"undefined" == typeof e[t] || null === e[t] ? e[t] = [] : e[t].length = 0;
					for(var i = 0; i < n.length; i++) e[t].push(n[i])
				}, t.inArray = function(t, n)
				{
					return e.inArray(n, t) > -1
				}, t.indexOf = function(t, n)
				{
					return e.inArray(n, t)
				}, t.moment = function()
				{
					if(t._moment || window.moment && (t._moment = window.moment), !t._moment) throw new Error("The moment.js library has not been included, cannot produce moment object");
					return t._moment.call(this, arguments)
				}, t.CSRF_TOKEN = null, t.CSRF_COOKIE_NAMES = ["CSRF-TOKEN", "XSRF-TOKEN"], t.CSRF_HEADER_NAME = "X-CSRF-TOKEN", t.defaultToolbarSticky = void 0, t.showReadOnlyInvalidState = !1
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.listenerId = function()
			{
				var e = 0;
				return function()
				{
					return "listener-" + e++
				}
			}(), t.subscribe = function()
			{
				var e = t.makeArray(arguments),
					n = null,
					i = null,
					a = null;
				if(2 == e.length ? (n = "global", i = e.shift(), a = e.shift()) : (n = e.shift(), i = e.shift(), a = e.shift()), i && t.isObject(i) && (i = i.path), !i) return t.logError("Missing observable subscribe id: " + i), null;
				var r = a._lfid;
				r || (r = t.listenerId(), a._lfid = r);
				var o = function(e)
				{
					return function()
					{
						return a.apply(e, arguments)
					}
				}(this);
				o._lfid = a._lfid;
				var l = t.ScopedObservables.get(n),
					s = l.observable(i);
				return s.subscribe(r, o),
				{
					scope: n,
					id: i,
					listenerId: r
				}
			}, t.unsubscribe = function()
			{
				var e = t.makeArray(arguments),
					n = null,
					i = null,
					a = null;
				2 == e.length ? (n = "global", i = e.shift(), a = e.shift()) : 3 == e.length && (n = e.shift(), i = e.shift(), a = e.shift());
				var r = a;
				if(t.isFunction(r) && (r = r._lfid), i && t.isObject(i) && (i = i.path), !i) return t.logError("Missing observable id: " + i), null;
				var o = t.ScopedObservables.get(n),
					l = o.observable(i);
				return l.unsubscribe(r),
				{
					scope: n,
					id: i,
					listenerId: r
				}
			}, t.observable = function()
			{
				var e, n, i = t.makeArray(arguments);
				if(1 == i.length ? (e = "global", n = i.shift()) : 2 == i.length && (e = i.shift(), n = i.shift()), n && t.isObject(n) && (n = n.path), n)
				{
					var a = t.ScopedObservables.get(e);
					observable = a.observable(n)
				}
				else t.logError("Missing observable id: " + JSON.stringify(i));
				return observable
			}, t.clearObservable = function()
			{
				var e, n, i = t.makeArray(arguments);
				1 == i.length ? (e = "global", n = i.shift()) : 2 == i.length && (e = i.shift(), n = i.shift()), n && t.isObject(n) && (n = n.path), n || t.logError("Missing observable id: " + JSON.stringify(i));
				var a = t.ScopedObservables.get(e),
					r = a.observable(n);
				r.clear()
			}, t.dependentObservable = function()
			{
				var e = null,
					n = null,
					i = null,
					a = t.makeArray(arguments);
				if(2 == a.length) e = "global", n = a.shift(), i = a.shift();
				else
				{
					if(3 != a.length) return void t.error("Wrong number of arguments");
					e = a.shift(), n = a.shift(), i = a.shift()
				}
				n && t.isObject(n) && (n = n.path), n || t.logError("Missing observable id: " + JSON.stringify(a));
				var r = t.ScopedObservables.get(e);
				return r.dependentObservable(n, i)
			}
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Observables = Base.extend(
			{
				constructor: function(e)
				{
					this.base(), this.scope = e, this.observables = {}
				},
				observable: function(e, n)
				{
					if(!this.observables[e])
					{
						var i = new t.Observable(this.scope, e);
						n && i.set(n), this.observables[e] = i
					}
					return this.observables[e]
				},
				dependentObservable: function(e, n)
				{
					var i = this;
					if(!this.observables[e])
					{
						var a = this.observable(e),
							r = new t.Observables(this.scope);
						r.observable = function(e, t)
						{
							var n = i.observable(e, t);
							return n.markDependentOnUs(a), n
						};
						var o = function()
						{
							return n.call(r)
						};
						a.setValueFunction(o)
					}
					return this.observables[e]
				},
				observables: function()
				{
					return this.observables
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Observable = Base.extend(
			{
				constructor: function(t, n)
				{
					this.base(), this.id = t + "-" + n, this.value = null, this.subscribers = {}, this.dependentOnUs = {}, this.notifySubscribers = function(t)
					{
						var n = this;
						e.each(this.subscribers, function(e, i)
						{
							i(n.value, t)
						})
					}, this.notifyDependents = function(t)
					{
						e.each(this.dependentOnUs, function(e, t)
						{
							t.onDependencyChange()
						})
					}, this.valueFunction = null
				},
				setValueFunction: function(e)
				{
					this.valueFunction = e, this.onDependencyChange()
				},
				subscribe: function(e, t)
				{
					this.isSubscribed(e) || (this.subscribers[e] = t)
				},
				unsubscribe: function(e)
				{
					delete this.subscribers[e]
				},
				isSubscribed: function(e)
				{
					return !!this.subscribers[e]
				},
				markDependentOnUs: function(e)
				{
					this.dependentOnUs[e.id] = e
				},
				onDependencyChange: function()
				{
					var e = this.get();
					if(this.valueFunction)
					{
						var t = this.valueFunction();
						e != t && this.set(t)
					}
				},
				set: function(e)
				{
					var t = this.value;
					this.value = e, this.notifyDependents(t), this.notifySubscribers(t)
				},
				get: function(e)
				{
					var t = this.value;
					return t || (t = e), t
				},
				clear: function()
				{
					var e = this.value;
					delete this.value, this.notifyDependents(e), this.notifySubscribers(e)
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.ScopedObservables = {}, t.ScopedObservables.map = {}, t.ScopedObservables.get = function(e)
			{
				return t.ScopedObservables.map[e] || (t.ScopedObservables.map[e] = new t.Observables(e)), t.ScopedObservables.map[e]
			}
		}(jQuery),
		function()
		{
			Alpaca.TemplateEngineRegistry = function()
			{
				var e = {};
				return {
					register: function(t, n)
					{
						e[t] = n, n.init()
					},
					find: function(t)
					{
						var n = null;
						if(e[t]) n = e[t];
						else
							for(var i in e)
								for(var a = e[i].supportedMimetypes(), r = 0; r < a.length; r++)
									if(t.toLowerCase() === a[r].toLowerCase())
									{
										n = e[i];
										break
									} return n
					},
					ids: function()
					{
						var t = [];
						for(var n in e) t.push(n);
						return t
					}
				}
			}()
		}(),
		function(e)
		{
			Alpaca.AbstractTemplateEngine = Base.extend(
			{
				constructor: function(t)
				{
					this.base(), this.id = t, this.cleanup = function(t)
					{
						return t && 1 === e(t).length && "script" === e(t)[0].nodeName.toLowerCase() ? e(t).html() : t
					}
				},
				compile: function(t, n, i)
				{
					var a = this,
						r = "html";
					if(Alpaca.isString(n))
					{
						var o = n.toLowerCase();
						Alpaca.isUri(o) ? r = "uri" : 0 !== n.indexOf("#") && 0 !== n.indexOf(".") && 0 !== n.indexOf("[") || (r = "selector")
					}
					if("selector" === r) a._compile(t, n, function(e)
					{
						i(e)
					});
					else if("uri" === r)
					{
						var l = a.fileExtension(),
							s = n; - 1 === s.indexOf("." + l) && (s += "." + l), e.ajax(
						{
							url: s,
							dataType: "html",
							success: function(e, n, r)
							{
								e = a.cleanup(e), a._compile(t, e, function(e)
								{
									i(e)
								})
							},
							error: function(e, t)
							{
								i(
								{
									message: e.responseText,
									xhr: e,
									code: t
								}, null)
							}
						})
					}
					else if("html" === r)
					{
						var u = n;
						u instanceof jQuery && (u = e(u).outerHTML()), a._compile(t, u, function(e)
						{
							i(e)
						})
					}
					else i(new Error("Template engine cannot determine how to handle type: " + r))
				},
				_compile: function(e, t, n)
				{
					Alpaca.isEmpty(t) && (t = ""), t = Alpaca.trim(t), 0 === t.toLowerCase().indexOf("<script") || (t = "<script type='" + this.supportedMimetypes()[0] + "'>" + t + "</script>"), Alpaca.logDebug("Compiling template: " + this.id + ", cacheKey: " + e + ", template: " + t), this.doCompile(e, t, n)
				},
				doCompile: function(e, t, n) {},
				execute: function(e, t, n)
				{
					Alpaca.logDebug("Executing template for cache key: " + e);
					var i = this.doExecute(e, t, n);
					return i = this.cleanup(i)
				},
				doExecute: function(e, t, n)
				{
					return null
				},
				fileExtension: function()
				{
					return "html"
				},
				supportedMimetypes: function()
				{
					return []
				},
				isCached: function(e)
				{
					return !1
				},
				findCacheKeys: function(e)
				{
					return []
				}
			})
		}(jQuery),
		function($, Handlebars, HandlebarsPrecompiled)
		{
			var COMPILED_TEMPLATES = {},
				helpers = {};
			helpers.compare = function(e, t, n)
			{
				if(arguments.length < 3) throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
				var i = n.hash.operator || "==",
					a = {
						"==": function(e, t)
						{
							return e == t
						},
						"===": function(e, t)
						{
							return e === t
						},
						"!=": function(e, t)
						{
							return e != t
						},
						"!==": function(e, t)
						{
							return e !== t
						},
						"<": function(e, t)
						{
							return t > e
						},
						">": function(e, t)
						{
							return e > t
						},
						"<=": function(e, t)
						{
							return t >= e
						},
						">=": function(e, t)
						{
							return e >= t
						},
						"typeof": function(e, t)
						{
							return typeof e == t
						}
					};
				if(!a[i]) throw new Error("Handlerbars Helper 'compare' doesn't know the operator " + i);
				var r = a[i](e, t);
				return r ? n.fn(this) : n.inverse(this)
			}, helpers.ifnot = function(e, t)
			{
				return e ? t.inverse(this) : t.fn(this)
			}, helpers.times = function(e, t)
			{
				for(var n = "", i = 0; e > i; ++i) n += t.fn(i);
				return n
			}, helpers.control = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_CONTROL_FIELD + "'></div>"
			}, helpers.container = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD + "'></div>"
			}, helpers.item = function(e, t)
			{
				return Alpaca.isObject(e) && (t = e, e = "div"), "<" + e + " class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD_ITEM + "' " + Alpaca.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY + "='" + this.name + "'></" + e + ">"
			}, helpers.itemField = function(e, t)
			{
				return Alpaca.isObject(e) && (t = e, e = "div"), "<" + e + " class='" + Alpaca.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD + "'></" + e + ">"
			}, helpers.formItems = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_FORM_ITEMS_FIELD + "'></div>"
			}, helpers.insert = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_INSERT + "' " + Alpaca.MARKER_DATA_INSERT_KEY + "='" + e + "'></div>"
			}, helpers.str = function(e)
			{
				return e === !1 ? "false" : e === !0 ? "true" : 0 === e ? "0" : "undefined" == typeof e ? "" : null === e ? "" : Alpaca.isString(e) ? e : Alpaca.isNumber(e) ? e : Alpaca.isObject(e) ? JSON.stringify(e, null, "  ") : Alpaca.isArray(e) ? JSON.stringify(e, null, "  ") : e
			}, helpers.arrayToolbar = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_ARRAY_TOOLBAR + "' " + Alpaca.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + this.id + "'></div>"
			}, helpers.arrayActionbar = function(e)
			{
				return "<div class='" + Alpaca.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "' " + Alpaca.MARKER_DATA_ARRAY_ITEM_KEY + "='" + this.name + "' " + Alpaca.MARKER_DATA_ARRAY_ITEM_PARENT_FIELD_ID + "='" + this.parentFieldId + "'></div>"
			}, Handlebars.registerHelper("arrayToolbar", helpers.arrayToolbar), Handlebars.registerHelper("arrayActionbar", helpers.arrayActionbar), Handlebars.registerHelper("setIndex", function(e)
			{
				this.index = Number(e)
			}), Handlebars.registerHelper("eachProperty", function(e, t)
			{
				var n = "";
				for(var i in e) n += t.fn(
				{
					key: i,
					value: e[i]
				});
				return n
			}), Handlebars.registerHelper("uploadErrorMessage", function(e)
			{
				var t = e;
				return 1 === e ? t = "File exceeds upload_max_filesize" : 2 === e ? t = "File exceeds MAX_FILE_SIZE" : 3 === e ? t = "File was only partially uploaded" : 4 === e ? t = "No File was uploaded" : 5 === e ? t = "Missing a temporary folder" : 6 === e ? t = "Failed to write file to disk" : 7 === e ? t = "File upload stopped by extension" : "maxFileSize" === e ? t = "File is too big" : "minFileSize" === e ? t = "File is too small" : "acceptFileTypes" === e ? t = "Filetype not allowed" : "maxNumberOfFiles" === e ? t = "Max number of files exceeded" : "uploadedBytes" === e ? t = "Uploaded bytes exceed file size" : "emptyResult" === e && (t = "Empty file upload result"), t
			}), Handlebars.registerHelper("disguise", function(e, t)
			{
				for(var n = "", i = 0; i < e.length; i++) n += t;
				return n
			}), Handlebars.registerHelper("compare", helpers.compare), Handlebars.registerHelper("control", helpers.control), Handlebars.registerHelper("container", helpers.container), Handlebars.registerHelper("item", helpers.item), Handlebars.registerHelper("itemField", helpers.itemField), Handlebars.registerHelper("formItems", helpers.formItems), Handlebars.registerHelper("times", helpers.times), Handlebars.registerHelper("str", helpers.str), Handlebars.registerHelper("with", function(e, t)
			{
				return t.fn(e)
			}), Handlebars.registerHelper("ifnot", helpers.ifnot);
			var partials = {};
			Alpaca.HandlebarsTemplateEngine = Alpaca.AbstractTemplateEngine.extend(
			{
				fileExtension: function()
				{
					return "html"
				},
				supportedMimetypes: function()
				{
					return ["text/x-handlebars-template", "text/x-handlebars-tmpl"]
				},
				init: function()
				{
					if(HandlebarsPrecompiled)
						for(var e in HandlebarsPrecompiled)
						{
							var t = HandlebarsPrecompiled[e];
							for(var n in t)
							{
								var i = t[n];
								if("function" == typeof i)
								{
									var a = Alpaca.makeCacheKey(e, "view", e, n);
									COMPILED_TEMPLATES[a] = i
								}
							}
						}
				},
				doCompile: function(cacheKey, html, callback)
				{
					var self = this,
						template = null;
					try
					{
						var functionString = Handlebars.precompile(html);
						template = eval("(" + functionString + ")"), template = Handlebars.template(template), COMPILED_TEMPLATES[cacheKey] = template
					}
					catch(e)
					{
						return void callback(e)
					}
					callback()
				},
				doExecute: function(e, t, n)
				{
					var i = COMPILED_TEMPLATES[e];
					if(!i) return void n(new Error("Could not find handlebars cached template for key: " + e));
					var a = null;
					try
					{
						a = i(t)
					}
					catch(r)
					{
						return n(r), null
					}
					return a
				},
				isCached: function(e)
				{
					return !!COMPILED_TEMPLATES[e]
				},
				findCacheKeys: function(e)
				{
					var t = [];
					for(var n in COMPILED_TEMPLATES) 0 === n.indexOf(e + ":") && t.push(n);
					return t
				}
			}), Alpaca.TemplateEngineRegistry.register("handlebars", new Alpaca.HandlebarsTemplateEngine("handlebars"))
		}(jQuery, "undefined" != typeof Handlebars ? Handlebars : window.Handlebars, "undefined" != typeof HandlebarsPrecompiled ? HandlebarsPrecompiled : window.HandlebarsPrecompiled),
		function(e)
		{
			var t = e.alpaca;
			t.NormalizedView = Base.extend(
			{
				constructor: function(e)
				{
					this.id = e
				},
				normalize: function(e)
				{
					var n = e[this.id];
					if(!n) return t.logError("View compilation failed - view not found: " + this.id), !1;
					for(var i = [], a = n; a;)
					{
						i.push(a);
						var r = a.parent;
						if(r)
						{
							var o = e[a.parent];
							if(!o) return t.logError("View compilation failed - cannot find parent view: " + r + " for view: " + a.id), !1;
							a = o
						}
						else a = null
					}
					i = i.reverse();
					for(var l = function(e, n, i)
						{
							var a = n[i],
								r = e[i];
							t.isUndefined(r) || t.isUndefined(a) || t.logDebug("View property: " + i + " already has value: " + r + " and overwriting to: " + a), t.isUndefined(a) || (e[i] = a)
						}, s = function(e, n, i)
						{
							var a = n[i],
								r = e[i];
							t.isUndefined(r) || t.isUndefined(a) || t.logDebug("View property: " + i + " already has function, overwriting"), t.isUndefined(a) || (e[i] = a)
						}, u = function(e, n, i)
						{
							var a = n[i];
							a && (e[i] || (e[i] = {}), t.mergeObject2(a, e[i]))
						}, c = 0; c < i.length; c++)
					{
						var d = i[c];
						l(this, d, "type"), l(this, d, "ui"), l(this, d, "displayReadonly"), l(this, d, "locale"), s(this, d, "render"), s(this, d, "postRender"), u(this, d, "templates"), u(this, d, "fields"), u(this, d, "layout"), u(this, d, "styles"), u(this, d, "callbacks"), u(this, d, "messages"), l(this, d, "horizontal"), l(this, d, "collapsible"), l(this, d, "legendStyle"), l(this, d, "toolbarStyle"), l(this, d, "buttonStyle"), l(this, d, "toolbarSticky"), l(this, d, "globalTemplate"), u(this, d, "wizard")
					}
					return t.logDebug("View compilation complete for view: " + this.id), t.logDebug("Final view: "), t.logDebug(JSON.stringify(this, null, "   ")), !0
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.RuntimeView = Base.extend(
			{
				constructor: function(e, t)
				{
					this.field = t, this.setView(e)
				},
				setView: function(e)
				{
					e || (e = "web-edit");
					var n = t.getNormalizedView(e);
					if(!n) throw new Error("Runtime view for view id: " + e + " could not find a normalized view");
					for(var i in n) n.hasOwnProperty(i) && (this[i] = n[i])
				},
				getWizard: function()
				{
					return this.getViewParam("wizard")
				},
				getGlobalTemplateDescriptor: function()
				{
					return this.getTemplateDescriptor("globalTemplate")
				},
				getLayout: function()
				{
					var e = this;
					return {
						templateDescriptor: this.getTemplateDescriptor("layoutTemplate", e),
						bindings: this.getViewParam(["layout", "bindings"], !0)
					}
				},
				getTemplateDescriptor: function(e, n)
				{
					return t.getTemplateDescriptor(this, e, n)
				},
				getMessage: function(e, n)
				{
					n || (n = t.defaultLocale);
					var i = this.getViewParam(["messages", n, e]);
					return t.isEmpty(i) && (i = this.getViewParam(["messages", e])), i
				},
				getViewParam: function(e, n)
				{
					var i = this.field.path;
					if(this.fields && this.fields[i])
					{
						var a = this._getConfigVal(this.fields[i], e);
						if(!t.isEmpty(a)) return a
					}
					if(i && -1 !== i.indexOf("[") && -1 !== i.indexOf("]"))
					{
						var r = i.replace(/\[\d+\]/g, "[*]");
						if(this.fields && this.fields[r])
						{
							var a = this._getConfigVal(this.fields[r], e);
							if(!t.isEmpty(a)) return a
						}
					}
					if(i && -1 !== i.indexOf("[") && -1 !== i.indexOf("]"))
					{
						var r = i.replace(/\[\d+\]/g, "");
						if(this.fields && this.fields[r])
						{
							var a = this._getConfigVal(this.fields[r], e);
							if(!t.isEmpty(a)) return a
						}
					}
					return !t.isEmpty(n) && n && "/" !== this.field.path ? null : this._getConfigVal(this, e)
				},
				_getConfigVal: function(e, n)
				{
					if(t.isArray(n))
						for(var i = 0; i < n.length && !t.isEmpty(e); i++) e = e[n[i]];
					else t.isEmpty(e) || (e = e[n]);
					return e
				},
				fireCallback: function(e, t, n, i, a, r, o)
				{
					this.callbacks && this.callbacks[t] && this.callbacks[t].call(e, n, i, a, r, o)
				},
				applyStyle: function(t, n)
				{
					var i = n;
					i && i.getFieldEl && (i = i.getFieldEl()), i && this.styles && this.styles[t] && e(i).addClass(this.styles[t])
				},
				getStyle: function(e)
				{
					return this.styles[e] ? this.styles[e] : ""
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Field = Base.extend(
			{
				constructor: function(e, n, i, a, r, o, l)
				{
					var s = this;
					this.initializing = !0, this.domEl = e, this.parent = null, this.data = n, this.options = i, this.schema = a, this.connector = o, this.errorCallback = function(e)
					{
						l ? l(e) : t.defaultErrorCallback.call(s, e)
					}, this.singleLevelRendering = !1, this.view = new t.RuntimeView(r, this);
					var u = !1;
					this.options || (this.options = {}, u = !0), this.id = this.options.id, this.type = this.options.type, this.id || (this.id = t.generateId());
					var c = !1;
					if(this.schema || (this.schema = {}, c = !0), this.options.label || null === this.schema.title || (this.options.label = this.schema.title), this.options.helpers || (this.options.helpers = []), this.options.helper)
					{
						if(t.isArray(this.options.helper))
							for(var d = 0; d < this.options.helper.length; d++) this.options.helpers.push(this.options.helper[d]);
						else this.options.helpers.push(this.options.helper);
						delete this.options.helper
					}
					t.isEmpty(this.options.readonly) && !t.isEmpty(this.schema.readonly) && (this.options.readonly = this.schema.readonly), t.isValEmpty(this.data) && !t.isEmpty(this.schema["default"]) && (this.data = this.schema["default"], this.showingDefaultData = !0), this.path = "/", this.validation = {}, this._events = {}, this.isDisplayOnly = function()
					{
						return "view" === s.view.type || "display" == s.view.type
					}, this.schema && this.schema.id && 0 === this.schema.id.indexOf("#") && (this.schema.id = this.schema.id.substring(1)), this._previouslyValidated = !1, this.updateObservable = function()
					{
						this.data ? this.observable(this.path).set(this.data) : this.observable(this.path).clear()
					}, this.getObservableScope = function()
					{
						for(var e = this; !e.isTop();) e = e.parent;
						var t = e.observableScope;
						return t || (t = "global"), t
					}, this.ensureProperType = function(e)
					{
						var n = this,
							i = function(e, n)
							{
								return t.isString(e) ? "number" === n ? e = parseFloat(e) : "integer" === n ? e = parseInt(e) : "boolean" === n && (e = "" !== e && "false" !== e.toLowerCase()) : t.isNumber(e) && ("string" === n ? e = "" + e : "boolean" === n && (e = -1 !== e && 0 !== e)), e
							};
						if("undefined" != typeof e)
							if(t.isArray(e))
								for(var a = 0; a < e.length; a++) n.schema.items && n.schema.items.type && (e[a] = i(e[a], n.schema.items.type));
							else(t.isString(e) || t.isNumber(e)) && n.schema.type && (e = i(e, n.schema.type));
						return e
					}, this.onConstruct()
				},
				onConstruct: function() {},
				isTop: function()
				{
					return !this.parent
				},
				getTemplateDescriptorId: function()
				{
					throw new Error("Template descriptor ID was not specified")
				},
				initTemplateDescriptor: function()
				{
					var e = this,
						n = this.view.getTemplateDescriptor(this.getTemplateDescriptorId(), this),
						i = this.view.getGlobalTemplateDescriptor(),
						a = this.view.getLayout(),
						r = !1;
					this.isTop() && (i ? (this.setTemplateDescriptor(i), this.singleLevelRendering = !0, r = !0) : a && a.templateDescriptor && (this.setTemplateDescriptor(a.templateDescriptor), r = !0)), !r && n && this.setTemplateDescriptor(n);
					var o = this.getTemplateDescriptor();
					return o ? void 0 : t.throwErrorWithCallback("Unable to find template descriptor for field: " + e.getFieldType())
				},
				setup: function()
				{
					this.initializing || (this.data = this.getValue()), this.initTemplateDescriptor(), t.isUndefined(this.schema.required) && (this.schema.required = !1), t.isUndefined(this.options.validate) && (this.options.validate = !0), t.isUndefined(this.options.disabled) && (this.options.disabled = !1), t.isUndefined(this.options.showMessages) && (this.options.showMessages = !0)
				},
				setupField: function(e)
				{
					e()
				},
				on: function(e, n)
				{
					return t.logDebug("Adding listener for event: " + e), this._events[e] || (this._events[e] = []), this._events[e].push(n), this
				},
				off: function(e)
				{
					this._events[e] && (this._events[e].length = 0)
				},
				triggerWithPropagation: function(e, t, n)
				{
					if("string" == typeof t && (n = t, t = null), n || (n = "up"), "up" === n) this.trigger.call(this, e, t), this.parent && this.parent.triggerWithPropagation.call(this.parent, e, t, n);
					else if("down" === n)
					{
						if(this.children && this.children.length > 0)
							for(var i = 0; i < this.children.length; i++)
							{
								var a = this.children[i];
								a.triggerWithPropagation.call(a, e, t, n)
							}
						this.trigger.call(this, e, t)
					}
					else if("both" === n)
					{
						if(this.children && this.children.length > 0)
							for(var i = 0; i < this.children.length; i++)
							{
								var a = this.children[i];
								a.triggerWithPropagation.call(a, e, t, "down")
							}
						this.trigger.call(this, e, t), this.parent && this.parent.triggerWithPropagation.call(this.parent, e, t, "up")
					}
				},
				trigger: function(e, n, i, a, r)
				{
					var o = this._events[e];
					if(o)
						for(var l = 0; l < o.length; l++)
						{
							var s = o[l],
								u = null;
							if("function" == typeof s)
							{
								t.logDebug("Firing event: " + e);
								try
								{
									u = s.call(this, n, i, a, r)
								}
								catch(c)
								{
									t.logDebug("The event handler caught an exception: " + e), t.logDebug(c)
								}
							}
						}
				},
				bindData: function()
				{
					t.isEmpty(this.data) || this.setValue(this.data)
				},
				render: function(e, n)
				{
					var i = this;
					e && (t.isString(e) || t.isObject(e)) ? this.view.setView(e) : t.isEmpty(n) && t.isFunction(e) && (n = e), null === this.options.label && this.propertyId && (this.options.label = this.propertyId), this.options.name && (this.name = this.options.name), this.calculateName(), this.setup(), this.setupField(function()
					{
						i._render(function()
						{
							i.trigger("render"), n()
						})
					})
				},
				calculateName: function()
				{
					if(!this.name || this.name && this.nameCalculated)
						if(this.parent && this.parent.name && this.path)
						{
							var e = this.path.substring(this.path.lastIndexOf("/") + 1); - 1 !== e.indexOf("[") && -1 !== e.indexOf("]") && (e = e.substring(e.indexOf("[") + 1, e.indexOf("]"))), e && (this.name = this.parent.name + "_" + e, this.nameCalculated = !0)
						}
					else this.path && (this.name = this.path.replace(/\//g, "").replace(/\[/g, "_").replace(/\]/g, ""), this.nameCalculated = !0)
				},
				_render: function(n)
				{
					var i = this;
					if(i.options.form && t.isObject(i.options.form))
					{
						i.options.form.viewType = this.view.type;
						var a = i.form;
						a || (a = new t.Form(i.domEl, this.options.form, i.view.id, i.connector, i.errorCallback)), a.render(function(a)
						{
							var r = e("<div></div>");
							i._processRender(r, function()
							{
								a.formFieldsContainer.before(i.field), a.formFieldsContainer.remove(), a.topControl = i, i.view.type && "view" !== i.view.type && a.initEvents(), i.form = a;
								i.postRender(function()
								{
									i.initializing = !1, i.form.afterInitialize(), e(i.field).bind("destroyed", function(e)
									{
										i.form.destroy()
									}), n && t.isFunction(n) && n(i)
								})
							})
						})
					}
					else this._processRender(i.domEl, function()
					{
						i.postRender(function()
						{
							i.initializing = !1, n && t.isFunction(n) && n(i)
						})
					})
				},
				_processRender: function(e, t)
				{
					var n = this;
					n.renderField(e, function()
					{
						n.fireCallback("field"), n.renderFieldElements(function()
						{
							t()
						})
					})
				},
				renderFieldDomElement: function(e)
				{
					var n = this.getTemplateDescriptor();
					return t.tmpl(n,
					{
						id: this.getId(),
						options: this.options,
						schema: this.schema,
						data: e,
						view: this.view,
						path: this.path,
						name: this.name
					})
				},
				renderField: function(t, n)
				{
					var i = this,
						a = this.data;
					this.isDisplayOnly() && "object" == typeof a && (a = JSON.stringify(a));
					var r = i.renderFieldDomElement(a);
					if(e(r).length > 0)
					{
						for(var o = null, l = 0; l < e(r).length; l++)
						{
							var s = e(r)[l].nodeName;
							if(s && (s = s.toLowerCase(), "div" === s || "span" === s))
							{
								o = e(e(r)[l]);
								break
							}
						}
						o || (o = e(e(r).last())), o && (r = o)
					}
					this.field = r, this.field.appendTo(t), n()
				},
				renderFieldElements: function(e)
				{
					e()
				},
				updateDOMElement: function()
				{
					this.field.attr("data-alpaca-field-path", this.getPath()), this.field.attr("data-alpaca-field-name", this.getName()), this.field.removeAttr("name")
				},
				postRender: function(n)
				{
					var i = this;
					if(this.field.addClass("alpaca-field"), this.field.addClass("alpaca-field-" + this.getFieldType()), this.field.attr("data-alpaca-field-id", this.getId()), this.updateDOMElement(), "view" !== this.view.type)
					{
						this.isRequired() ? (e(this.field).addClass("alpaca-required"), i.fireCallback("required")) : (e(this.field).addClass("alpaca-optional"), i.fireCallback("optional"));
						var a = function()
						{
							t.disabled(e("input", i.field), !0), t.disabled(e("select", i.field), !0), t.disabled(e(":radio", i.field), !0), t.disabled(e(":checkbox", i.field), !0), e(":radio", i.field).off().click(function(e)
							{
								return e.preventDefault(), e.stopImmediatePropagation(), !1
							}), e(".radio label", i.field).off().click(function(e)
							{
								return e.preventDefault(), e.stopImmediatePropagation(), !1
							}), e("input", i.field).off().click(function(e)
							{
								return e.preventDefault(), e.stopImmediatePropagation(), !1
							}), i.disable && i.disable()
						};
						this.options.readonly && (e(this.field).addClass("alpaca-readonly"), e("input", this.field).attr("readonly", "readonly"), a(), i.fireCallback("readonly")), this.options.disabled && (e(this.field).addClass("alpaca-disabled"), a(), i.fireCallback("disabled"));
						var r = function(e, n)
						{
							if(n)
							{
								var i = 0,
									a = null;
								if(t.isArray(n))
									for(i = 0; i < n.length; i++) e.addClass(n[i]);
								else if(n.indexOf(",") > -1)
									for(a = n.split(","), i = 0; i < a.length; i++) e.addClass(a[i]);
								else if(n.indexOf(" ") > -1)
									for(a = n.split(" "), i = 0; i < a.length; i++) e.addClass(a[i]);
								else e.addClass(n)
							}
						};
						r(this.field, this.options.fieldClass), this.options.disabled && (this.disable(), i.fireCallback("disable")), this.view.type && "edit" === this.view.type ? this.bindData() : this.showingDefaultData && this.bindData(), "create" === this.view.type && t.logDebug("Skipping data binding for field: " + this.id + " since view mode is 'create'"), this.view.type && "view" !== this.view.type && this.initEvents()
					}
					this.options.hidden && this.field.hide();
					var o = "create" === this.view.type && !this.refreshed;
					this.hideInitValidationError = t.isValEmpty(this.options.hideInitValidationError) ? o : this.options.hideInitValidationError, this.view.displayReadonly || e(this.field).find(".alpaca-readonly").hide(), this.options.postRender ? this.options.postRender.call(this, function()
					{
						n()
					}) : n()
				},
				refresh: function(n)
				{
					var i = this,
						a = i.data = i.getValue(),
						r = i.domEl,
						o = i.field,
						l = e("<div></div>");
					e(o).before(l), i.domEl = e("<div style='display: none'></div>"), i.field = void 0, i.control = void 0, i.container = void 0, i.form = void 0, e(o).find("button").prop("disabled", !0), this.initializing = !0, i.setup(), i.setupField(function()
					{
						i._render(function()
						{
							e(l).before(i.field), i.domEl = r;
							var s = e(o).attr("class");
							s && e.each(s.split(" "), function(t, n)
							{
								n && 0 === !n.indexOf("alpaca-") && e(i.field).addClass(n)
							}), e(o).hide(), e(l).remove(), i.refreshed = !0, "undefined" != typeof a && (t.isObject(a) || t.isArray(a)) && i.setValue(a), t.fireReady(i), n && n.call(i), e(o).remove(void 0,
							{
								nodestroy: !0
							})
						})
					})
				},
				applyStyle: function(e, t)
				{
					this.view.applyStyle(e, t)
				},
				fireCallback: function(e, t, n, i, a, r)
				{
					this.view.fireCallback(this, e, t, n, i, a, r)
				},
				getFieldEl: function()
				{
					return this.field
				},
				getId: function()
				{
					return this.id
				},
				getParent: function()
				{
					return this.parent
				},
				getPath: function()
				{
					return this.path
				},
				getName: function()
				{
					return this.name
				},
				isTopLevel: function()
				{
					return t.isEmpty(this.parent)
				},
				top: function()
				{
					for(var e = this; e.parent;) e = e.parent;
					return e
				},
				getValue: function()
				{
					var e = this,
						t = this.data;
					return t = e.ensureProperType(t)
				},
				setValue: function(e)
				{
					this.data = e, this.updateObservable(), this.triggerUpdate(), this.isDisplayOnly() && !this.initializing && (this.top && this.top() && this.top().initializing || this.refresh())
				},
				setDefault: function() {},
				getTemplateDescriptor: function()
				{
					return this.templateDescriptor
				},
				setTemplateDescriptor: function(e)
				{
					this.templateDescriptor = e
				},
				displayMessage: function(n, i)
				{
					var a = this;
					n && t.isObject(n) && (n = [n]), n && t.isString(n) && (n = [
					{
						id: "custom",
						message: n
					}]), e(this.getFieldEl()).children(".alpaca-message").remove(), n && n.length > 0 && this.options.maxMessages && t.isNumber(this.options.maxMessages) && this.options.maxMessages > -1 && (n = n.slice(0, this.options.maxMessages)), a.fireCallback("removeMessages"), n && n.length > 0 && e.each(n, function(n, i)
					{
						var r = !1;
						a.hideInitValidationError && (r = !0);
						var o = a.view.getTemplateDescriptor("message");
						if(o)
						{
							var l = t.tmpl(o,
							{
								id: i.id,
								message: i.message,
								view: a.view
							});
							l.addClass("alpaca-message"), r && l.addClass("alpaca-message-hidden"), e(a.getFieldEl()).append(l)
						}
						a.fireCallback("addMessage", n, i.id, i.message, r)
					})
				},
				refreshValidationState: function(e, n)
				{
					var i = this,
						a = [],
						r = [],
						o = function(e, n)
						{
							return function(i)
							{
								t.nextTick(function()
								{
									t.compileValidationContext(e, function(e)
									{
										n.push(e), i()
									})
								})
							}
						};
					if(e)
					{
						var l = function(e, t)
						{
							if(e.isValidationParticipant())
							{
								if(e.children && e.children.length > 0)
									for(var n = 0; n < e.children.length; n++) l(e.children[n], t);
								r.push(o(e, t))
							}
						};
						l(this, a)
					}
					r.push(o(this, a)), t.series(r, function(e)
					{
						for(var r = {}, o = [], l = 0; l < a.length; l++)
							for(var s = a[l], u = o.length, c = 0; c < s.length; c++)
							{
								var d = s[c],
									p = r[d.id];
								if(p) d.validated && !p.invalidated && (p.validated = !0, p.invalidated = !1, p.valid = d.valid), d.invalidated && (p.invalidated = !0, p.validated = !1, p.valid = d.valid);
								else
								{
									var h = {};
									h.id = d.id, h.path = d.path, h.domEl = d.domEl, h.field = d.field, h.validated = d.validated, h.invalidated = d.invalidated, h.valid = d.valid, o.splice(u, 0, h), r[h.id] = h
								}
							}
						o.reverse(), i.hideInitValidationError || t.updateValidationStateForContext(i.view, o), n && n()
					})
				},
				getMessage: function(e)
				{
					return this.view.getMessage(e, this.view.locale)
				},
				validate: function(e)
				{
					var n = !0;
					if(!this.initializing && this.options.validate)
					{
						if(this.children && e)
							for(var i = 0; i < this.children.length; i++)
							{
								var a = this.children[i];
								a.isValidationParticipant() && a.validate(e)
							}
						if(n = this.handleValidate(), !n && t.logLevel == t.DEBUG)
						{
							var r = [];
							for(var o in this.validation) this.validation[o].status || r.push(this.validation[o].message);
							t.logDebug("Validation failure for field (id=" + this.getId() + ", path=" + this.path + "), messages: " + JSON.stringify(r))
						}
					}
					return this._previouslyValidated = !0, n
				},
				handleValidate: function()
				{
					var e = this.validation,
						n = this._validateOptional();
					return e.notOptional = {
						message: n ? "" : this.getMessage("notOptional"),
						status: n
					}, n = this._validateDisallow(), e.disallowValue = {
						message: n ? "" : t.substituteTokens(this.getMessage("disallowValue"), [this.schema.disallow.join(", ")]),
						status: n
					}, e.notOptional.status && e.disallowValue.status
				},
				_validateCustomValidator: function(e)
				{
					var n = this;
					this.options.validator && t.isFunction(this.options.validator) ? this.options.validator.call(this, function(t)
					{
						n.validation.custom = t, e()
					}) : e()
				},
				_validateOptional: function()
				{
					return this.isRequired() && this.isEmpty() ? !1 : !this.options.disallowOnlyEmptySpaces || !t.testRegex(t.regexps.whitespace, this.getValue())
				},
				_validateDisallow: function()
				{
					if(!t.isValEmpty(this.schema.disallow))
					{
						var n = this.getValue(),
							i = this.schema.disallow;
						if(t.isArray(i))
						{
							var a = !0;
							return e.each(i, function(e, i)
							{
								(t.isObject(n) || t.isArray(n) && t.isString(i)) && (i = t.parseJSON(i)), t.compareObject(n, i) && (a = !1)
							}), a
						}
						return(t.isObject(n) || t.isArray(n) && t.isString(i)) && (i = t.parseJSON(i)), !t.compareObject(n, i)
					}
					return !0
				},
				triggerUpdate: function()
				{
					e(this.field).trigger("fieldupdate")
				},
				disable: function() {},
				enable: function() {},
				isDisabled: function()
				{
					return !1
				},
				isEnabled: function()
				{
					return !this.isDisabled()
				},
				focus: function(e)
				{
					e && e(this)
				},
				destroy: function()
				{
					t.observable(this.path).clear(), t && t.fieldInstances && t.fieldInstances[this.getId()] && delete t.fieldInstances[this.getId()], e(this.field).remove()
				},
				show: function()
				{
					this.options && this.options.hidden || (e(this.field).css(
					{
						display: ""
					}), this.onShow(), this.fireCallback("show"))
				},
				onShow: function() {},
				hide: function()
				{
					e(this.field).css(
					{
						display: "none"
					}), this.onHide(), this.fireCallback("hide")
				},
				onHide: function() {},
				isValidationParticipant: function()
				{
					return this.isShown()
				},
				isShown: function()
				{
					return !this.isHidden()
				},
				isVisible: function()
				{
					return !this.isHidden()
				},
				isHidden: function()
				{
					return "none" === e(this.field).css("display")
				},
				print: function()
				{
					this.getFieldEl().printArea && this.getFieldEl().printArea()
				},
				onDependentReveal: function() {},
				onDependentConceal: function() {},
				reload: function()
				{
					this.initializing = !0, t.isEmpty(this.callback) ? this.render(this.renderedCallback) : this.callback(this, this.renderedCallback)
				},
				clear: function()
				{
					var e = null;
					this.data && (e = this.data), this.setValue(e)
				},
				isEmpty: function()
				{
					return t.isValEmpty(this.getValue())
				},
				isValid: function(t)
				{
					if(t && this.children)
						for(var n = 0; n < this.children.length; n++)
						{
							var i = this.children[n];
							if(i.isValidationParticipant() && !i.isValid(t)) return !1
						}
					if(e.isEmptyObject(this.validation)) return !0;
					for(var a in this.validation)
						if(!this.validation[a].status) return !1;
					return !0
				},
				initEvents: function()
				{
					var n = this;
					this.field && (this.field.mouseover(function(e)
					{
						n.onMouseOver.call(n, e), n.trigger("mouseover", e)
					}), this.field.mouseout(function(e)
					{
						n.onMouseOut.call(n, e), n.trigger("mouseout", e)
					}), e.each(this.options, function(e, i)
					{
						if(t.startsWith(e, "onField") && t.isFunction(i))
						{
							var a = e.substring(7).toLowerCase();
							n.field.on(a, function(e)
							{
								i.call(n, e)
							})
						}
					}), this.options && this.options.events && e.each(this.options.events, function(e, i)
					{
						t.isFunction(i) && ("render" === e || "ready" === e || "blur" === e || "focus" === e ? n.on(e, function(e, t, a, r)
						{
							i.call(n, e, t, a, r)
						}) : n.field.on(e, function(e)
						{
							i.call(n, e)
						}))
					}))
				},
				onFocus: function(t)
				{
					e(this.field).removeClass("alpaca-field-empty"), e(this.field).addClass("alpaca-field-focused")
				},
				onBlur: function(t)
				{
					var n = e(this.field).hasClass("alpaca-field-focused");
					e(this.field).removeClass("alpaca-field-focused"), n && this.refreshValidationState(), e(this.field).trigger("fieldblur")
				},
				onChange: function(e)
				{
					this.data = this.getValue(), this.updateObservable(), this.triggerUpdate()
				},
				onMouseOver: function(e) {},
				onMouseOut: function(e) {},
				getControlByPath: function(e)
				{
					var n = null;
					if(e)
					{
						0 === e.indexOf("/") && (e = e.substring(1)), t.endsWith(e, "/") && (e = e.substring(0, e.length - 1));
						for(var i = this, a = e.split("/"), r = 0; r < a.length; r++)
						{
							var o = a[r],
								l = o,
								s = -1,
								u = o.indexOf("[");
							if(u >= 0)
							{
								var c = o.indexOf("]", u + 1);
								c >= 0 && (s = parseInt(o.substring(u + 1, c)), l = o.substring(0, u))
							}
							l && (i = i.childrenByPropertyId[l], s > -1 && (i = i.children[s]))
						}
						n = i
					}
					return n
				},
				getControlsByFieldType: function(e)
				{
					var t = [];
					if(e)
					{
						var n = function(e, t, i)
						{
							for(var a = 0; a < e.children.length; a++) e.children[a].getFieldType() === t && i.push(e.children[a]), e.children[a].isContainer() && n(e.children[a], t, i)
						};
						n(this, e, t)
					}
					return t
				},
				getControlsBySchemaType: function(e)
				{
					var t = [];
					if(e)
					{
						var n = function(e, t, i)
						{
							for(var a = 0; a < e.children.length; a++) e.children[a].getType() === t && i.push(e.children[a]), e.children[a].isContainer() && n(e.children[a], t, i)
						};
						n(this, e, t)
					}
					return t
				},
				subscribe: function()
				{
					var e = t.makeArray(arguments);
					return e.unshift(this.getObservableScope()), t.subscribe.apply(this, e)
				},
				unsubscribe: function()
				{
					var e = t.makeArray(arguments);
					return e.unshift(this.getObservableScope()), t.unsubscribe.apply(this, e)
				},
				observable: function()
				{
					var e = t.makeArray(arguments);
					return e.unshift(this.getObservableScope()), t.observable.apply(this, e)
				},
				clearObservable: function()
				{
					var e = t.makeArray(arguments);
					return e.unshift(this.getObservableScope()), t.clearObservable.apply(this, e)
				},
				dependentObservable: function()
				{
					var e = t.makeArray(arguments);
					return e.unshift(this.getObservableScope()), t.dependentObservable.apply(this, e)
				},
				getType: function() {},
				getFieldType: function()
				{
					return ""
				},
				getBaseFieldType: function()
				{
					var e = null,
						t = this.constructor.ancestor.prototype;
					return t && t.getFieldType && (e = t.getFieldType()), e
				},
				isContainer: function()
				{
					return !1
				},
				isRequired: function()
				{
					var e = !1;
					if("boolean" == typeof this.schema.required && (e = this.schema.required), this.parent && this.parent.schema.required && t.isArray(this.parent.schema.required))
					{
						var n = this.parent.schema.required;
						if(n)
							for(var i = 0; i < n.length; i++)
								if(n[i] === this.propertyId)
								{
									e = !0;
									break
								}
					}
					return e
				},
				getTitle: function() {},
				getDescription: function() {},
				getSchemaOfSchema: function()
				{
					var e = {
						title: this.getTitle(),
						description: this.getDescription(),
						type: "object",
						properties:
						{
							title:
							{
								title: "Title",
								description: "Short description of the property.",
								type: "string"
							},
							description:
							{
								title: "Description",
								description: "Detailed description of the property.",
								type: "string"
							},
							readonly:
							{
								title: "Readonly",
								description: "Indicates that the field is read-only.  A read-only field cannot have it's value changed.  Read-only fields render in a grayed-out or disabled control.  If the field is rendered using a view with the <code>displayReadonly</code> attribute set to false, the read-only field will not appear.",
								type: "boolean",
								"default": !1
							},
							required:
							{
								title: "Required",
								description: "Indicates whether the field's value is required.  If set to true, the field must take on a valid value and cannnot be left empty or unassigned.",
								type: "boolean",
								"default": !1
							},
							"default":
							{
								title: "Default",
								description: "The default value to be assigned for this property.  If the data for the field is empty or not provided, this default value will be plugged in for you.  Specify a default value when you want to pre-populate the field's value ahead of time.",
								type: "any"
							},
							type:
							{
								title: "Type",
								description: "Data type of the property.",
								type: "string",
								readonly: !0
							},
							format:
							{
								title: "Format",
								description: "Data format of the property.",
								type: "string"
							},
							disallow:
							{
								title: "Disallowed Values",
								description: "List of disallowed values for the property.",
								type: "array"
							},
							dependencies:
							{
								title: "Dependencies",
								description: "List of property dependencies.",
								type: "array"
							}
						}
					};
					return this.getType && !t.isValEmpty(this.getType()) && (e.properties.type["default"] = this.getType(),
						e.properties.type["enum"] = [this.getType()]), e
				},
				getOptionsForSchema: function()
				{
					return {
						fields:
						{
							title:
							{
								helper: "Field short description",
								type: "text"
							},
							description:
							{
								helper: "Field detailed description",
								type: "textarea"
							},
							readonly:
							{
								helper: "Field will be read only if checked",
								rightLabel: "This field is read-only",
								type: "checkbox"
							},
							required:
							{
								helper: "Field value must be set if checked",
								rightLabel: "This field is required",
								type: "checkbox"
							},
							"default":
							{
								helper: "Field default value",
								type: "textarea"
							},
							type:
							{
								helper: "Field data type",
								type: "text"
							},
							format:
							{
								type: "select",
								dataSource: function(e)
								{
									for(var n in t.defaultFormatFieldMapping) this.selectOptions.push(
									{
										value: n,
										text: n
									});
									e()
								}
							},
							disallow:
							{
								helper: "Disallowed values for the field",
								itemLabel: "Value",
								type: "array"
							},
							dependencies:
							{
								helper: "Field Dependencies",
								multiple: !0,
								size: 3,
								type: "select",
								dataSource: function(e, t)
								{
									if(e.parent && e.parent.schemaParent && e.parent.schemaParent.parent)
										for(var n in e.parent.schemaParent.parent.childrenByPropertyId) n != e.parent.schemaParent.propertyId && e.selectOptions.push(
										{
											value: n,
											text: n
										});
									t && t()
								}
							}
						}
					}
				},
				getSchemaOfOptions: function()
				{
					var e = {
						title: "Options for " + this.getTitle(),
						description: this.getDescription() + " (Options)",
						type: "object",
						properties:
						{
							form:
							{},
							id:
							{
								title: "Field Id",
								description: "Unique field id. Auto-generated if not provided.",
								type: "string"
							},
							type:
							{
								title: "Field Type",
								description: "Field type.",
								type: "string",
								"default": this.getFieldType(),
								readonly: !0
							},
							validate:
							{
								title: "Validation",
								description: "Field validation is required if true.",
								type: "boolean",
								"default": !0
							},
							showMessages:
							{
								title: "Show Messages",
								description: "Display validation messages if true.",
								type: "boolean",
								"default": !0
							},
							disabled:
							{
								title: "Disabled",
								description: "Field will be disabled if true.",
								type: "boolean",
								"default": !1
							},
							readonly:
							{
								title: "Readonly",
								description: "Field will be readonly if true.",
								type: "boolean",
								"default": !1
							},
							hidden:
							{
								title: "Hidden",
								description: "Field will be hidden if true.",
								type: "boolean",
								"default": !1
							},
							label:
							{
								title: "Label",
								description: "Field label.",
								type: "string"
							},
							helper:
							{
								title: "Helper",
								description: "Field help message.",
								type: "string"
							},
							helpers:
							{
								title: "Helpers",
								description: "An array of field help messages.  Each message will be displayed on it's own line.",
								type: "array",
								items:
								{
									type: "string"
								}
							},
							fieldClass:
							{
								title: "CSS class",
								description: "Specifies one or more CSS classes that should be applied to the dom element for this field once it is rendered.  Supports a single value, comma-delimited values, space-delimited values or values passed in as an array.",
								type: "string"
							},
							hideInitValidationError:
							{
								title: "Hide Initial Validation Errors",
								description: "Hide initial validation errors if true.",
								type: "boolean",
								"default": !1
							},
							focus:
							{
								title: "Focus",
								description: "If true, the initial focus for the form will be set to the first child element (usually the first field in the form).  If a field name or path is provided, then the specified child field will receive focus.  For example, you might set focus to 'name' (selecting the 'name' field) or you might set it to 'client/name' which picks the 'name' field on the 'client' object.",
								type: "checkbox",
								"default": !0
							},
							optionLabels:
							{
								title: "Enumerated Value Labels",
								description: "An array of string labels for items in the enum array",
								type: "array"
							},
							view:
							{
								title: "Override of the view for this field",
								description: "Allows for this field to be rendered with a different view (such as 'display' or 'create')",
								type: "string"
							}
						}
					};
					return this.isTopLevel() ? e.properties.form = {
						title: "Form",
						description: "Options for rendering the FORM tag.",
						type: "object",
						properties:
						{
							attributes:
							{
								title: "Form Attributes",
								description: "List of attributes for the FORM tag.",
								type: "object",
								properties:
								{
									id:
									{
										title: "Id",
										description: "Unique form id. Auto-generated if not provided.",
										type: "string"
									},
									action:
									{
										title: "Action",
										description: "Form submission endpoint",
										type: "string"
									},
									method:
									{
										title: "Method",
										description: "Form submission method",
										"enum": ["post", "get"],
										type: "string"
									},
									rubyrails:
									{
										title: "Ruby On Rails",
										description: "Ruby on Rails Name Standard",
										"enum": ["true", "false"],
										type: "string"
									},
									name:
									{
										title: "Name",
										description: "Form name",
										type: "string"
									},
									focus:
									{
										title: "Focus",
										description: "Focus Setting",
										type: "any"
									}
								}
							},
							buttons:
							{
								title: "Form Buttons",
								description: "Configuration for form-bound buttons",
								type: "object",
								properties:
								{
									submit:
									{
										type: "object",
										title: "Submit Button",
										required: !1
									},
									reset:
									{
										type: "object",
										title: "Reset button",
										required: !1
									}
								}
							},
							toggleSubmitValidState:
							{
								title: "Toggle Submit Valid State",
								description: "Toggle the validity state of the Submit button",
								type: "boolean",
								"default": !0
							}
						}
					} : delete e.properties.form, e
				},
				getOptionsForOptions: function()
				{
					var e = {
						type: "object",
						fields:
						{
							id:
							{
								type: "text",
								readonly: !0
							},
							type:
							{
								type: "text"
							},
							validate:
							{
								rightLabel: "Enforce validation",
								type: "checkbox"
							},
							showMessages:
							{
								rightLabel: "Show validation messages",
								type: "checkbox"
							},
							disabled:
							{
								rightLabel: "Disable this field",
								type: "checkbox"
							},
							hidden:
							{
								type: "checkbox",
								rightLabel: "Hide this field"
							},
							label:
							{
								type: "text"
							},
							helper:
							{
								type: "textarea"
							},
							helpers:
							{
								type: "array",
								items:
								{
									type: "textarea"
								}
							},
							fieldClass:
							{
								type: "text"
							},
							hideInitValidationError:
							{
								rightLabel: "Hide initial validation errors",
								type: "checkbox"
							},
							focus:
							{
								type: "checkbox",
								rightLabel: "Auto-focus first child field"
							},
							optionLabels:
							{
								type: "array",
								items:
								{
									type: "text"
								}
							},
							view:
							{
								type: "text"
							}
						}
					};
					return this.isTopLevel() && (e.fields.form = {
						type: "object",
						fields:
						{
							attributes:
							{
								type: "object",
								fields:
								{
									id:
									{
										type: "text",
										readonly: !0
									},
									action:
									{
										type: "text"
									},
									method:
									{
										type: "select"
									},
									name:
									{
										type: "text"
									}
								}
							}
						}
					}), e
				}
			}), t.registerMessages(
			{
				disallowValue: "{0} are disallowed values.",
				notOptional: "This field is not optional."
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.ControlField = t.Field.extend(
			{
				onConstruct: function()
				{
					var t = this;
					this.isControlField = !0, this._getControlVal = function(n)
					{
						var i = null;
						return this.control && (i = e(this.control).val(), n && (i = t.ensureProperType(i))), i
					}
				},
				setup: function()
				{
					var e = this;
					this.base();
					var n = e.resolveControlTemplateType();
					if(!n) return t.throwErrorWithCallback("Unable to find template descriptor for control: " + e.getFieldType());
					if(this.controlDescriptor = this.view.getTemplateDescriptor("control-" + n, e), "undefined" == typeof this.options.renderButtons && (this.options.renderButtons = !0), this.options.buttons)
						for(var i in this.options.buttons) this.options.buttons[i].label && (this.options.buttons[i].value = this.options.buttons[i].label), this.options.buttons[i].title && (this.options.buttons[i].value = this.options.buttons[i].title), this.options.buttons[i].type || (this.options.buttons[i].type = "button"), this.options.buttons[i].styles || (this.options.buttons[i].styles = this.view.styles.button)
				},
				getControlEl: function()
				{
					return this.control
				},
				resolveControlTemplateType: function()
				{
					var e = this,
						t = !1,
						n = null,
						i = this;
					do
						if(i.getFieldType)
						{
							var a = this.view.getTemplateDescriptor("control-" + i.getFieldType(), e);
							a ? (n = i.getFieldType(), t = !0) : i = i.constructor.ancestor.prototype
						}
					else t = !0;
					while(!t);
					return n
				},
				onSetup: function() {},
				isAutoFocusable: function()
				{
					return !0
				},
				getTemplateDescriptorId: function()
				{
					return "control"
				},
				renderFieldElements: function(n)
				{
					var i = this;
					this.control = e(this.field).find("." + t.MARKER_CLASS_CONTROL_FIELD), this.control.removeClass(t.MARKER_CLASS_CONTROL_FIELD), i.prepareControlModel(function(e)
					{
						i.beforeRenderControl(e, function()
						{
							i.renderControl(e, function(a)
							{
								a && (i.control.replaceWith(a), i.control = a, i.control.addClass(t.CLASS_CONTROL)), i.fireCallback("control"), i.afterRenderControl(e, function()
								{
									n()
								})
							})
						})
					})
				},
				prepareControlModel: function(e)
				{
					var t = {};
					t.id = this.getId(), t.name = this.name, t.options = this.options, t.schema = this.schema, t.data = this.data, t.required = this.isRequired(), t.view = this.view, e(t)
				},
				beforeRenderControl: function(e, t)
				{
					t()
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					i.firstUpdateObservableFire || "undefined" == typeof i.data || null == i.data || (i.firstUpdateObservableFire = !0, i.updateObservable()), e(this.getFieldEl()).find(".alpaca-control-button").each(function()
					{
						e(this).click(function(t)
						{
							e(this).attr("button-pushed", !0)
						});
						var t = e(this).attr("data-key");
						if(t)
						{
							var n = i.options.buttons[t];
							n && n.click && e(this).click(function(e, t)
							{
								return function(n)
								{
									n.preventDefault(), t.call(e, n)
								}
							}(i, n.click))
						}
					}), n()
				},
				renderControl: function(e, n)
				{
					var i = null;
					this.controlDescriptor && (i = t.tmpl(this.controlDescriptor, e)), n(i)
				},
				postRender: function(e)
				{
					this.base(function()
					{
						e()
					})
				},
				updateDOMElement: function()
				{
					this.base(), this.control.attr("name", this.getName())
				},
				setDefault: function()
				{
					var e = t.isEmpty(this.schema["default"]) ? "" : this.schema["default"];
					this.setValue(e)
				},
				getValue: function()
				{
					var e = this,
						t = this.base();
					return this.isDisplayOnly() || (t = e.getControlValue()), t = e.ensureProperType(t)
				},
				getControlValue: function()
				{
					return this._getControlVal(!0)
				},
				_validateEnum: function()
				{
					if(!this.getEnum()) return !0;
					var e = this.getValue();
					return !this.isRequired() && t.isValEmpty(e) ? !0 : t.inArray(this.getEnum(), e)
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateEnum(),
						a = this.getEnum(),
						r = this.getOptionLabels();
					return r && r.length > 0 && (a = r), n.invalidValueOfEnum = {
						message: i ? "" : t.substituteTokens(this.getMessage("invalidValueOfEnum"), [a.join(", "), this.getValue()]),
						status: i
					}, e && n.invalidValueOfEnum.status
				},
				initEvents: function()
				{
					this.base(), this.control && this.control.length > 0 && this.initControlEvents()
				},
				initControlEvents: function()
				{
					var e = this,
						t = this.control;
					t.click(function(t)
					{
						e.onClick.call(e, t), e.trigger("click", t)
					}), t.change(function(t)
					{
						setTimeout(function()
						{
							e.onChange.call(e, t), e.triggerWithPropagation("change", t)
						}, 200)
					}), t.focus(function(t)
					{
						if(e.wasFocused = !0, !e.suspendBlurFocus)
						{
							var n = e.onFocus.call(e, t);
							return n !== !1 && (n = e.trigger("focus", t)), n
						}
					}), t.blur(function(t)
					{
						if(e.wasBlurred = !0, !e.suspendBlurFocus)
						{
							var n = e.onBlur.call(e, t);
							return n !== !1 && (n = e.trigger("blur", t)), n
						}
					}), t.keypress(function(t)
					{
						var n = e.onKeyPress.call(e, t);
						return n !== !1 && (n = e.trigger("keypress", t)), n
					}), t.keyup(function(t)
					{
						var n = e.onKeyUp.call(e, t);
						return n !== !1 && (n = e.trigger("keyup", t)), n
					}), t.keydown(function(t)
					{
						var n = e.onKeyDown.call(e, t);
						return n !== !1 && (n = e.trigger("keydown", t)), n
					})
				},
				onKeyPress: function(e)
				{
					var t = this,
						n = !1;
					if(t.view.type && "edit" === t.view.type)
					{
						var i = this.isValid();
						i || (n = !0)
					}
					else if(t.view.type && "create" === t.view.type)
					{
						var i = this.isValid();
						!i && t.wasBlurred && (n = !0)
					}
					n && window.setTimeout(function()
					{
						t.refreshValidationState()
					}, 50)
				},
				onKeyDown: function(e) {},
				onKeyUp: function(e) {},
				onClick: function(e) {},
				disable: function()
				{
					this.options.readonly || (this.base(), this.control && this.control.length > 0 && e(this.control).prop("disabled", !0))
				},
				enable: function()
				{
					this.options.readonly || (this.base(), this.control && this.control.length > 0 && e(this.control).prop("disabled", !1))
				},
				isDisabled: function()
				{
					return e(this.control).prop("disabled")
				},
				getEnum: function()
				{
					var e = null;
					return this.schema && this.schema["enum"] && (e = this.schema["enum"]), e
				},
				setEnum: function(e)
				{
					t.safeSetObjectArray(this.schema, "enum", e)
				},
				getOptionLabels: function()
				{
					var e = null;
					return this.options && this.options.optionLabels && (e = this.options.optionLabels), e
				},
				setOptionLabels: function(e)
				{
					t.safeSetObjectArray(this.options, "optionLabels", e)
				},
				sortEnum: function()
				{
					var e = this.getEnum();
					if(e && e.length > 0)
					{
						for(var n = this.getOptionLabels(), i = [], a = 0; a < e.length; a++)
						{
							var r = e[a],
								o = e[a];
							n && n.length >= a + 1 && (o = n[a]), i.push(
							{
								value: r,
								text: o
							})
						}
						this.sortSelectableOptions(i);
						for(var l = [], s = [], a = 0; a < i.length; a++) l.push(i[a].value), t.isArray(n) && s.push(i[a].text);
						this.setEnum(l), this.setOptionLabels(s)
					}
				},
				sortSelectableOptions: function(e)
				{
					var n = this;
					if(n.options.sort !== !1)
					{
						var i = t.defaultSort;
						n.options.sort && "function" == typeof n.options.sort && (i = n.options.sort), e.sort(i)
					}
				},
				invokeDataSource: function(n, i, a)
				{
					var r = this,
						o = function(e)
						{
							var t = this;
							return e ? a(e) : void t.afterLoadDataSourceOptions(n, i, function(e, n)
							{
								return e ? a(e) : (t.sortSelectableOptions(n), void a(null, n))
							})
						}.bind(r);
					if(t.isFunction(r.options.dataSource)) r.options.dataSource.call(r, function(e)
					{
						if(t.isArray(e))
						{
							for(var i = 0; i < e.length; i++) "string" == typeof e[i] ? n.push(
							{
								text: e[i],
								value: e[i]
							}) : t.isObject(e[i]) && n.push(e[i]);
							o()
						}
						else if(t.isObject(e))
						{
							for(var a in e) n.push(
							{
								text: a,
								value: e[a]
							});
							o()
						}
						else o()
					});
					else if(t.isUri(r.options.dataSource))
					{
						var l = r.view.locale,
							s = "" + r.options.dataSource;
						l && (s += -1 === s.indexOf("?") ? "?" : "&", s += "locale=" + l), e.ajax(
						{
							url: s,
							type: "get",
							dataType: "json",
							success: function(i)
							{
								var a = i;
								r.options.dsTransformer && t.isFunction(r.options.dsTransformer) && (a = r.options.dsTransformer(a)), a && (t.isObject(a) ? (e.each(a, function(e, t)
								{
									n.push(
									{
										value: e,
										text: t
									})
								}), o()) : t.isArray(a) && (e.each(a, function(e, t)
								{
									n.push(
									{
										value: t.value,
										text: t.text
									})
								}), o()))
							},
							error: function(e, t, n)
							{
								r.errorCallback(
								{
									message: "Unable to load data from uri : " + r.options.dataSource,
									stage: "DATASOURCE_LOADING_ERROR",
									details:
									{
										jqXHR: e,
										textStatus: t,
										errorThrown: n
									}
								})
							}
						})
					}
					else if(t.isArray(r.options.dataSource))
					{
						for(var u = r.options.dataSource, c = 0; c < u.length; c++) "string" == typeof u[c] ? n.push(
						{
							text: u[c],
							value: u[c]
						}) : t.isObject(u[c]) && n.push(u[c]);
						o()
					}
					else if(t.isObject(r.options.dataSource))
						if(r.options.dataSource.connector)
						{
							var d = r.connector;
							if(t.isObject(r.options.dataSource.connector))
							{
								var p = r.options.dataSource.connector.id,
									h = r.options.dataSource.connector.config;
								h || (h = {});
								var f = t.getConnectorClass(p);
								f && (d = new f(p, h))
							}
							var m = r.options.dataSource.config;
							m || (m = {}), d.loadDataSource(m, function(e)
							{
								for(var i = 0; i < e.length; i++) "string" == typeof e[i] ? n.push(
								{
									text: e[i],
									value: e[i]
								}) : t.isObject(e[i]) && n.push(e[i]);
								o()
							})
						}
					else
					{
						for(var g in r.options.dataSource) n.push(
						{
							text: r.options.dataSource[g],
							value: g
						});
						o()
					}
					else a()
				},
				afterLoadDataSourceOptions: function(e, t, n)
				{
					n(null, e)
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							"enum":
							{
								title: "Enumerated Values",
								description: "List of specific values for this property",
								type: "array"
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							"enum":
							{
								itemLabel: "Value",
								type: "array"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							name:
							{
								title: "Field Name",
								description: "Field Name.",
								type: "string"
							},
							sort:
							{
								title: "Sort Function",
								description: "Defines an f(a,b) sort function for the array of enumerated values [{text, value}].  This is used to sort enum and optionLabels as well as results that come back from any data sources (for select and radio controls).  By default the items are sorted alphabetically.   Don't apply any sorting if false.",
								type: "function"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							name:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidValueOfEnum: "This field should have one of the values in {0}.  Current value is: {1}"
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.ContainerField = t.Field.extend(
			{
				onConstruct: function()
				{
					this.isContainerField = !0
				},
				isContainer: function()
				{
					return !0
				},
				getContainerEl: function()
				{
					return this.container
				},
				getTemplateDescriptorId: function()
				{
					return "container"
				},
				resolveContainerTemplateType: function()
				{
					var e = !1,
						t = null,
						n = this;
					do
						if(n.getFieldType)
						{
							var i = this.view.getTemplateDescriptor("container-" + n.getFieldType(), this);
							i ? (t = n.getFieldType(), e = !0) : n = n.constructor.ancestor.prototype
						}
					else e = !0;
					while(!e);
					return t
				},
				resolveContainerItemTemplateType: function()
				{
					var e = !1,
						t = null,
						n = this;
					do
						if(n.getFieldType)
						{
							var i = this.view.getTemplateDescriptor("container-" + n.getFieldType() + "-item", this);
							i ? (t = n.getFieldType(), e = !0) : n = n.constructor.ancestor.prototype
						}
					else e = !0;
					while(!e);
					return t
				},
				setup: function()
				{
					var e = this;
					this.base();
					var n = e.resolveContainerTemplateType();
					if(!n) return t.throwErrorWithCallback("Unable to find template descriptor for container: " + e.getFieldType());
					this.containerDescriptor = this.view.getTemplateDescriptor("container-" + n, e);
					var i = !1;
					t.isEmpty(this.view.collapsible) || (i = this.view.collapsible), t.isEmpty(this.options.collapsible) || (i = this.options.collapsible), this.options.collapsible = i;
					var a = "button";
					t.isEmpty(this.view.legendStyle) || (a = this.view.legendStyle), t.isEmpty(this.options.legendStyle) || (a = this.options.legendStyle), this.options.legendStyle = a, this.lazyLoading = !1, t.isEmpty(this.options.lazyLoading) || (this.lazyLoading = this.options.lazyLoading, this.lazyLoading && (this.options.collapsed = !0)), this.children = [], this.childrenById = {}, this.childrenByPropertyId = {}
				},
				destroy: function()
				{
					this.form && (this.form.destroy(!0), delete this.form), t.each(this.children, function()
					{
						this.destroy()
					}), this.base()
				},
				renderFieldElements: function(n)
				{
					var i = this;
					this.container = e(this.field).find("." + t.MARKER_CLASS_CONTAINER_FIELD), this.container.removeClass(t.MARKER_CLASS_CONTAINER_FIELD), i.prepareContainerModel(function(e)
					{
						i.beforeRenderContainer(e, function()
						{
							i.renderContainer(e, function(a)
							{
								a && (i.container.replaceWith(a), i.container = a, i.container.addClass(t.CLASS_CONTAINER)), i.view.horizontal ? i.container.addClass("alpaca-horizontal") : i.container.addClass("alpaca-vertical"), i.fireCallback("container"), i.afterRenderContainer(e, function()
								{
									n()
								})
							})
						})
					})
				},
				prepareContainerModel: function(e)
				{
					var t = this,
						n = {
							id: this.getId(),
							name: this.name,
							schema: this.schema,
							options: this.options,
							view: this.view
						};
					t.createItems(function(t)
					{
						t || (t = []);
						for(var i = 0; i < t.length; i++) t[i].containerItemEl || (t[i].containerItemEl = t[i].getFieldEl());
						n.items = t, e(n)
					})
				},
				beforeRenderContainer: function(e, t)
				{
					t()
				},
				renderContainer: function(e, n)
				{
					var i = null;
					this.containerDescriptor && (i = t.tmpl(this.containerDescriptor, e)), n(i)
				},
				afterRenderContainer: function(e, t)
				{
					var n = this;
					n.beforeApplyCreatedItems(e, function()
					{
						n.applyCreatedItems(e, function()
						{
							n.afterApplyCreatedItems(e, function()
							{
								t()
							})
						})
					})
				},
				postRender: function(e)
				{
					this.base(function()
					{
						e()
					})
				},
				initEvents: function()
				{
					this.base()
				},
				createItems: function(e)
				{
					e()
				},
				beforeApplyCreatedItems: function(e, t)
				{
					t()
				},
				applyCreatedItems: function(n, i)
				{
					var a = this,
						r = null;
					if(a.isTopLevel() && a.view.getLayout() && (r = a.view.getLayout().bindings, !r && a.view.getLayout().templateDescriptor && n.items.length > 0))
					{
						r = {};
						for(var o = 0; o < n.items.length; o++)
						{
							var l = n.items[o].name;
							r[l] = "[data-alpaca-layout-binding='" + l + "']"
						}
					}
					n.items.length > 0 ? (e(a.container).addClass("alpaca-container-has-items"), e(a.container).attr("data-alpaca-container-item-count", n.items.length)) : (e(a.container).removeClass("alpaca-container-has-items"), e(a.container).removeAttr("data-alpaca-container-item-count"));
					for(var o = 0; o < n.items.length; o++)
					{
						var s = n.items[o],
							u = e(a.container).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM + "[" + t.MARKER_DATA_CONTAINER_FIELD_ITEM_KEY + "='" + s.name + "']");
						if(r)
						{
							var c = r[s.name];
							if(c)
							{
								var d = e(c, a.field);
								if(0 == d.length) try
								{
									d = e("#" + c, a.field)
								}
								catch(p)
								{}
								d.length > 0 && (s.domEl = e("<div></div>"), e(s.domEl).addClass("alpaca-layout-binding-holder"), e(s.domEl).attr("alpaca-layout-binding-field-name", s.name), d.append(s.domEl), s.domEl.append(s.containerItemEl))
							}
							e(u).remove()
						}
						else
						{
							var d = e(u).parent();
							e(u).replaceWith(s.containerItemEl), s.domEl = d
						}
						e(s.containerItemEl).addClass("alpaca-container-item"), 0 === o && e(s.containerItemEl).addClass("alpaca-container-item-first"), o + 1 === n.items.length && e(s.containerItemEl).addClass("alpaca-container-item-last"), e(s.containerItemEl).attr("data-alpaca-container-item-index", o), e(s.containerItemEl).attr("data-alpaca-container-item-name", s.name), e(s.containerItemEl).attr("data-alpaca-container-item-parent-field-id", a.getId()), a.registerChild(s, o)
					}
					a.options.collapsible && a.fireCallback("collapsible"), a.triggerUpdate(), i()
				},
				afterApplyCreatedItems: function(e, t)
				{
					t()
				},
				registerChild: function(e, n)
				{
					t.isEmpty(n) ? this.children.push(e) : this.children.splice(n, 0, e), this.childrenById[e.getId()] = e, e.propertyId && (this.childrenByPropertyId[e.propertyId] = e), e.parent = this
				},
				unregisterChild: function(e)
				{
					var n = this.children[e];
					n && (t.isEmpty(e) || this.children.splice(e, 1), delete this.childrenById[n.getId()], n.propertyId && delete this.childrenByPropertyId[n.propertyId], n.parent = null)
				},
				updateDOMElement: function()
				{
					var t = this;
					this.base(), t.children.length > 0 ? (e(t.getContainerEl()).addClass("alpaca-container-has-items"), e(t.getContainerEl()).attr("data-alpaca-container-item-count", t.children.length)) : (e(t.getContainerEl()).removeClass("alpaca-container-has-items"), e(t.getContainerEl()).removeAttr("data-alpaca-container-item-count"));
					for(var n = 0; n < t.children.length; n++)
					{
						var i = t.children[n];
						i.path || ("array" === i.schema.type ? i.path = t.path + "[" + n + "]" : i.path = t.path + "/" + i.propertyId), i.calculateName(), e(i.containerItemEl).removeClass("alpaca-container-item-first"), e(i.containerItemEl).removeClass("alpaca-container-item-last"), e(i.containerItemEl).removeClass("alpaca-container-item-index"), e(i.containerItemEl).removeClass("alpaca-container-item-key"), e(i.containerItemEl).addClass("alpaca-container-item"), 0 === n && e(i.containerItemEl).addClass("alpaca-container-item-first"), n + 1 === t.children.length && e(i.containerItemEl).addClass("alpaca-container-item-last"), e(i.containerItemEl).attr("data-alpaca-container-item-index", n), e(i.containerItemEl).attr("data-alpaca-container-item-name", i.name), e(i.containerItemEl).attr("data-alpaca-container-item-parent-field-id", t.getId()), t.updateChildDOMWrapperElement(n, i), i.updateDOMElement()
					}
				},
				updateChildDOMWrapperElement: function(e, t) {},
				handleRepositionDOMRefresh: function()
				{
					var e = this;
					e.getParent() ? e.getParent().updateDOMElement() : e.updateDOMElement()
				},
				onDependentReveal: function()
				{
					for(var e = 0; e < this.children.length; e++) this.children[e].onDependentReveal()
				},
				onDependentConceal: function()
				{
					for(var e = 0; e < this.children.length; e++) this.children[e].onDependentConceal()
				},
				focus: function(t)
				{
					var n = this;
					if(this.isDisplayOnly()) return void(t && t());
					this.base();
					var i = -1,
						a = [],
						r = this.getContainerEl();
					this.form && (r = this.form.getFormEl()), e(r).find(".alpaca-container-item[data-alpaca-container-item-parent-field-id='" + this.getId() + "']").each(function()
					{
						var t = e(this).attr("data-alpaca-container-item-index");
						a.push(n.children[t])
					});
					for(var o = 0; o < a.length; o++)
						if(a[o] && !a[o].isValid(!0) && a[o].isControlField && a[o].isAutoFocusable() && !a[o].options.readonly)
						{
							i = o;
							break
						} - 1 === i && a.length > 0 && (i = 0), i > -1 && (a[i].focus(), t && t(a[i]))
				},
				disable: function()
				{
					if(!this.options.readonly)
					{
						this.base();
						for(var e = 0; e < this.children.length; e++) this.children[e].disable()
					}
				},
				enable: function()
				{
					if(!this.options.readonly)
					{
						this.base();
						for(var e = 0; e < this.children.length; e++) this.children[e].enable()
					}
				},
				getValue: function()
				{
					var e = this,
						t = e.getContainerValue();
					return t
				},
				getContainerValue: function()
				{
					return null
				},
				firstChild: function()
				{
					var e = null;
					return this.children.length > 0 && (e = this.children[0]), e
				},
				lastChild: function()
				{
					var e = null;
					return this.children.length > 0 && (e = this.children[this.children.length - 1]), e
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							lazyLoading:
							{
								title: "Lazy Loading",
								description: "Child fields will only be rendered when the fieldset is expanded if this option is set true.",
								type: "boolean",
								"default": !1
							},
							collapsible:
							{
								title: "Collapsible",
								description: "Field set is collapsible if true.",
								type: "boolean",
								"default": !1
							},
							collapsed:
							{
								title: "Collapsed",
								description: "Field set is initially collapsed if true.",
								type: "boolean",
								"default": !1
							},
							legendStyle:
							{
								title: "Legend Style",
								description: "Field set legend style.",
								type: "string",
								"enum": ["button", "link"],
								"default": "button"
							},
							animate:
							{
								title: "Animate movements and transitions",
								description: "Up and down transitions will be animated",
								type: "boolean",
								"default": !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							lazyLoading:
							{
								rightLabel: "Lazy loading child fields ?",
								helper: "Lazy loading will be enabled if checked.",
								type: "checkbox"
							},
							collapsible:
							{
								rightLabel: "Field set collapsible ?",
								helper: "Field set is collapsible if checked.",
								type: "checkbox"
							},
							collapsed:
							{
								rightLabel: "Field set initially collapsed ?",
								description: "Field set is initially collapsed if checked.",
								type: "checkbox"
							},
							legendStyle:
							{
								type: "select"
							},
							animate:
							{
								rightLabel: "Animate movements and transitions",
								type: "checkbox"
							}
						}
					})
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Form = Base.extend(
			{
				constructor: function(e, n, i, a, r)
				{
					if(this.domEl = e, this.parent = null, this.connector = a, this.errorCallback = r, this.options = n, this.options.attributes ? this.attributes = this.options.attributes : this.attributes = {}, this.options.buttons)
					{
						this.options.buttons.submit && (this.options.buttons.submit.type || (this.options.buttons.submit.type = "submit"), this.options.buttons.submit.name || (this.options.buttons.submit.name = "submit"), this.options.buttons.submit.value || (this.options.buttons.submit.value = "Submit")), this.options.buttons.reset && (this.options.buttons.reset.type || (this.options.buttons.reset.type = "reset"), this.options.buttons.reset.name || (this.options.buttons.reset.name = "reset"), this.options.buttons.reset.value || (this.options.buttons.reset.value = "Reset"));
						for(var o in this.options.buttons) this.options.buttons[o].label && (this.options.buttons[o].value = this.options.buttons[o].label), this.options.buttons[o].title && (this.options.buttons[o].value = this.options.buttons[o].title), this.options.buttons[o].type || (this.options.buttons[o].type = "button")
					}
					this.attributes.id ? this.id = this.attributes.id : (this.id = t.generateId(), this.attributes.id = this.id), this.options.buttons && this.options.buttons.submit && t.isUndefined(this.options.toggleSubmitValidState) && (this.options.toggleSubmitValidState = !0), this.viewType = n.viewType, this.view = new t.RuntimeView(i, this);
					for(var o in this.options.buttons) this.options.buttons[o].styles || (this.options.buttons[o].styles = this.view.styles.button)
				},
				render: function(e)
				{
					var t = this;
					this.processRender(this.domEl, function()
					{
						t.form.appendTo(t.domEl), t.form.addClass("alpaca-form"), t.fireCallback("form"), e(t)
					})
				},
				afterInitialize: function()
				{
					var e = this;
					e.options.toggleSubmitValidState && e.adjustSubmitButtonState()
				},
				isFormValid: function()
				{
					this.topControl.validate(!0);
					var e = this.topControl.isValid(!0);
					return e
				},
				isValid: function()
				{
					return this.isFormValid()
				},
				validate: function(e)
				{
					return this.topControl.validate(e)
				},
				enableSubmitButton: function()
				{
					if(e(".alpaca-form-button-submit").attrProp("disabled", !1), e.mobile) try
					{
						e(".alpaca-form-button-submit").button("refresh")
					}
					catch(t)
					{}
				},
				disableSubmitButton: function()
				{
					if(e(".alpaca-form-button-submit").attrProp("disabled", !0), e.mobile) try
					{
						e(".alpaca-form-button-submit").button("refresh")
					}
					catch(t)
					{}
				},
				adjustSubmitButtonState: function()
				{
					this.disableSubmitButton(), this.isFormValid() && this.enableSubmitButton()
				},
				processRender: function(n, i)
				{
					var a = this;
					if(this.formDescriptor = this.view.getTemplateDescriptor("form"), !this.formDescriptor) return t.throwErrorWithCallback("Could not find template descriptor: form");
					var r = t.tmpl(this.formDescriptor,
					{
						id: this.getId(),
						options: this.options,
						view: this.view
					});
					r.appendTo(n), this.form = r, this.formFieldsContainer = e(this.form).find("." + t.MARKER_CLASS_FORM_ITEMS_FIELD), this.formFieldsContainer.removeClass(t.MARKER_CLASS_FORM_ITEMS_FIELD), t.isEmpty(this.form.attr("id")) && this.form.attr("id", this.getId() + "-form-outer"), t.isEmpty(this.form.attr("data-alpaca-form-id")) && this.form.attr("data-alpaca-form-id", this.getId()), e(n).find("form").attr(this.attributes), this.buttons = {}, e(n).find(".alpaca-form-button").each(function()
					{
						e(this).click(function(t)
						{
							e(this).attr("button-pushed", !0)
						});
						var t = e(this).attr("data-key");
						if(t)
						{
							var n = a.options.buttons[t];
							n && n.click && e(this).click(function(e, t)
							{
								return function(n)
								{
									n.preventDefault(), t.call(e, n)
								}
							}(a, n.click))
						}
					}), i()
				},
				getId: function()
				{
					return this.id
				},
				getType: function()
				{
					return this.type
				},
				getParent: function()
				{
					return this.parent
				},
				getValue: function()
				{
					return this.topControl.getValue()
				},
				setValue: function(e)
				{
					this.topControl.setValue(e)
				},
				initEvents: function()
				{
					var t = this,
						n = e(this.domEl).find("form"),
						i = this.getValue();
					e(n).submit(i, function(e)
					{
						return t.onSubmit(e, t)
					}), this.options.toggleSubmitValidState && (e(t.topControl.getFieldEl()).bind("fieldupdate", function()
					{
						t.adjustSubmitButtonState()
					}), e(t.topControl.getFieldEl()).bind("fieldkeyup", function()
					{
						t.adjustSubmitButtonState()
					}), e(t.topControl.getFieldEl()).bind("fieldblur", function()
					{
						t.adjustSubmitButtonState()
					}))
				},
				getButtonEl: function(t)
				{
					return e(this.domEl).find(".alpaca-form-button-" + t)
				},
				onSubmit: function(e, n)
				{
					if(!this.isFormValid()) return e.stopPropagation(), this.refreshValidationState(!0), !1;
					if(this.submitHandler)
					{
						e.stopPropagation();
						var i = this.submitHandler(e, n);
						return t.isUndefined(i) && (i = !1), i
					}
				},
				registerSubmitHandler: function(e)
				{
					t.isFunction(e) && (this.submitHandler = e)
				},
				refreshValidationState: function(e, t)
				{
					this.topControl.refreshValidationState(e, t)
				},
				disable: function()
				{
					this.topControl.disable()
				},
				enable: function()
				{
					this.topControl.enable()
				},
				focus: function(e)
				{
					this.topControl.focus(function(t)
					{
						e && e(t)
					})
				},
				destroy: function(e)
				{
					this.getFormEl().remove(), !e && this.parent && this.parent.destroy()
				},
				show: function()
				{
					this.getFormEl().css(
					{
						display: ""
					})
				},
				hide: function()
				{
					this.getFormEl().css(
					{
						display: "none"
					})
				},
				clear: function(e)
				{
					this.topControl.clear(e)
				},
				isEmpty: function()
				{
					return this.topControl.isEmpty()
				},
				fireCallback: function(e, t, n, i, a, r)
				{
					this.view.fireCallback(this, e, t, n, i, a, r)
				},
				getFormEl: function()
				{
					return this.form
				},
				submit: function()
				{
					this.form.submit()
				},
				ajaxSubmit: function(n)
				{
					var i = this;
					n || (n = {}), n.url = i.options.attributes.action, n.type = i.options.attributes.method, n.data || (n.data = this.getValue()), n.dataType || (n.dataType = "json"), n.headers || (n.headers = {});
					var a = i.determineCsrfToken();
					return a && (n.headers[t.CSRF_HEADER_NAME] = a), e.ajax(n)
				},
				determineCsrfToken: function()
				{
					var e = t.CSRF_TOKEN;
					if(!e)
						for(var n = 0; n < t.CSRF_COOKIE_NAMES.length; n++)
						{
							var i = t.CSRF_COOKIE_NAMES[n],
								a = t.readCookie(i);
							if(a)
							{
								e = a;
								break
							}
						}
					return e
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca,
				n = 36e5;
			t.Connector = Base.extend(
			{
				constructor: function(e, a)
				{
					this.id = e, this.config = a, this.isUri = function(e)
					{
						return !t.isEmpty(e) && t.isUri(e)
					}, this.cache = new i("URL", !0, n)
				},
				connect: function(e, t)
				{
					e()
				},
				loadTemplate: function(e, n, i)
				{
					t.isEmpty(e) ? i(
					{
						message: "Empty data source.",
						reason: "TEMPLATE_LOADING_ERROR"
					}) : t.isUri(e) ? this.loadUri(e, !1, function(e)
					{
						n && t.isFunction(n) && n(e)
					}, function(e)
					{
						i && t.isFunction(i) && i(e)
					}) : n(e)
				},
				loadData: function(e, t, n, i)
				{
					return this._handleLoadJsonResource(e, n, i)
				},
				loadSchema: function(e, t, n, i)
				{
					return this._handleLoadJsonResource(e, n, i)
				},
				loadOptions: function(e, t, n, i)
				{
					return this._handleLoadJsonResource(e, n, i)
				},
				loadView: function(e, t, n, i)
				{
					return this._handleLoadJsonResource(e, n, i)
				},
				loadAll: function(e, n, i)
				{
					var a = this,
						r = function()
						{
							var r = e.dataSource,
								o = e.schemaSource,
								l = e.optionsSource,
								s = e.viewSource;
							o || "string" != typeof e.schema || (o = e.schema), l || "string" != typeof e.options || (l = e.options), s || "string" != typeof e.view || (s = e.view);
							var u = {},
								c = 0,
								d = 0,
								p = function()
								{
									c === d && n && t.isFunction(n) && n(u.data, u.options, u.schema, u.view)
								},
								h = function(e)
								{
									i && t.isFunction(i) && i(e)
								};
							if(r && d++, o && d++, l && d++, s && d++, 0 === d) return void p();
							var f = function(e, n, i)
							{
								u[e] = n, i && ("object" == typeof u[e] && "object" == typeof i ? t.mergeObject(u[e], i) : u[e] = i)
							};
							r && a.loadData(r, e, function(t)
							{
								f("data", e.data, t), c++, p()
							}, h), o && a.loadSchema(o, e, function(t)
							{
								f("schema", e.schema, t), c++, p()
							}, h), l && a.loadOptions(l, e, function(t)
							{
								f("options", e.options, t), c++, p()
							}, h), s && a.loadView(s, e, function(t)
							{
								f("view", e.view, t), c++, p()
							}, h)
						},
						o = function(e)
						{
							i && t.isFunction(i) && i(e)
						};
					a.connect(r, o)
				},
				loadJson: function(e, t, n)
				{
					this.loadUri(e, !0, t, n)
				},
				buildAjaxConfig: function(e, t)
				{
					var n = {
						url: e,
						type: "get"
					};
					return t ? n.dataType = "json" : n.dataType = "text", n
				},
				loadUri: function(n, i, a, r)
				{
					var o = this,
						l = o.buildAjaxConfig(n, i);
					l.success = function(e)
					{
						o.cache.put(n, e), a && t.isFunction(a) && a(e)
					}, l.error = function(e, i, a)
					{
						r && t.isFunction(r) && r(
						{
							message: "Unable to load data from uri : " + n,
							stage: "DATA_LOADING_ERROR",
							details:
							{
								jqXHR: e,
								textStatus: i,
								errorThrown: a
							}
						})
					};
					var s = o.cache.get(n);
					s !== !1 && a && t.isFunction(a) ? a(s) : e.ajax(l)
				},
				loadReferenceSchema: function(e, t, n)
				{
					return this._handleLoadJsonResource(e, t, n)
				},
				loadReferenceOptions: function(e, t, n)
				{
					return this._handleLoadJsonResource(e, t, n)
				},
				_handleLoadJsonResource: function(e, t, n)
				{
					this.isUri(e) ? this.loadJson(e, function(e)
					{
						t(e)
					}, n) : t(e)
				},
				loadDataSource: function(e, t, n)
				{
					return this._handleLoadDataSource(e, t, n)
				},
				_handleLoadDataSource: function(e, n, i)
				{
					var a = e;
					return t.isObject(a) && (a = e.url), this._handleLoadJsonResource(a, n, i)
				}
			}), t.registerConnectorClass("default", t.Connector);
			var i = function(e, t, n)
			{
				switch(t ? this.on = !0 : this.on = !1, null != n && (this.defaultLifetime = n), this.type = e, this.type)
				{
					case "URL":
						this.put = this.put_url;
						break;
					case "GET":
						this.put = this.put_GET
				}
			};
			i.prototype.on = !1, i.prototype.type = void 0, i.prototype.defaultLifetime = 18e5, i.prototype.items = {}, i.prototype.put_url = function(e, t, n)
			{
				null == n && (n = this.defaultLifetime);
				var i = this.make_key(e);
				return this.items[i] = {}, this.items[i].key = i, this.items[i].url = e, this.items[i].response = t, this.items[i].expire = (new Date).getTime() + n, !0
			}, i.prototype.put_GET = function(e, t, n, i)
			{
				null == i && (i = this.defaultLifetime);
				var a = this.make_key(e, [t]);
				return this.items[a] = {}, this.items[a].key = a, this.items[a].url = e, this.items[a].data = t, this.items[a].response = n, this.items[a].expire = (new Date).getTime() + i, !0
			}, i.prototype.get = function(e, t)
			{
				var n = this.make_key(e, t);
				return null == this.items[n] ? !1 : this.items[n].expire < (new Date).getTime() ? !1 : this.items[n].response
			}, i.prototype.make_key = function(e, t)
			{
				var n = e;
				switch(this.type)
				{
					case "URL":
						break;
					case "GET":
						n += this.stringify(t[0])
				}
				return n
			}, i.prototype.flush = function()
			{
				return cache.items = {}, !0
			}, i.prototype.stringify = function(e, t, n)
			{
				var i;
				if(gap = "", indent = "", "number" == typeof n)
					for(i = 0; n > i; i += 1) indent += " ";
				else "string" == typeof n && (indent = n);
				if(rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
				return this.str("",
				{
					"": e
				})
			}, i.prototype.quote = function(e)
			{
				var t = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
				return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e)
				{
					var t = meta[e];
					return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
				}) + '"' : '"' + e + '"'
			}, i.prototype.str = function(e, t)
			{
				var n, i, a, r, o, l = gap,
					s = t[e];
				switch(s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)), "function" == typeof rep && (s = rep.call(t, e, s)), typeof s)
				{
					case "string":
						return this.quote(s);
					case "number":
						return isFinite(s) ? String(s) : "null";
					case "boolean":
					case "null":
						return String(s);
					case "object":
						if(!s) return "null";
						if(gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(s))
						{
							for(r = s.length, n = 0; r > n; n += 1) o[n] = this.str(n, s) || "null";
							return a = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + l + "]" : "[" + o.join(",") + "]", gap = l, a
						}
						if(rep && "object" == typeof rep)
							for(r = rep.length, n = 0; r > n; n += 1) i = rep[n], "string" == typeof i && (a = this.str(i, s), a && o.push(this.quote(i) + (gap ? ": " : ":") + a));
						else
							for(i in s) Object.hasOwnProperty.call(s, i) && (a = this.str(i, s), a && o.push(this.quote(i) + (gap ? ": " : ":") + a));
						return a = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + l + "}" : "{" + o.join(",") + "}", gap = l, a
				}
			}
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.CloudCmsConnector = t.Connector.extend(
			{
				connect: function(e, n)
				{
					var i = this,
						a = function(t, a)
						{
							return t ? void n(t) : (a && (i.branch = Chain(a), i.bindHelperFunctions(i.branch)), void e())
						};
					t.globalContext && t.globalContext.branch ? a(null, t.globalContext.branch) : (i.branch = null, i.doConnect(function(e, t)
					{
						a(e, t)
					}))
				},
				doConnect: function(e)
				{
					this.config.key || (this.config.key = "default"), Gitana.connect(this.config, function(t)
					{
						return t ? void e(t) : void(this.getDriver().getOriginalConfiguration().loadAppHelper ? this.datastore("content").readBranch("master").then(function()
						{
							e(null, this)
						}) : e())
					})
				},
				bindHelperFunctions: function(e)
				{
					e.loadAlpacaSchema || (e.loadAlpacaSchema = function(t, n, i)
					{
						var a = function()
							{
								return e.getUri() + "/alpaca/schema"
							},
							r = {};
						return r.id = t, this.chainGetResponse(this, a, r).then(function(e)
						{
							i.call(this, null, e)
						})
					}), e.loadAlpacaOptions || (e.loadAlpacaOptions = function(t, n, i)
					{
						var a = function()
							{
								return e.getUri() + "/alpaca/options"
							},
							r = {};
						return r.schemaId = n.schemaSource, r.id = t, this.chainGetResponse(this, a, r).then(function(e)
						{
							i.call(this, null, e)
						})
					}), e.loadAlpacaData || (e.loadAlpacaData = function(t, n, i)
					{
						var a = function()
							{
								return e.getUri() + "/alpaca/data"
							},
							r = {};
						return r.id = t, this.chainGetResponse(this, a, r).then(function(e)
						{
							i.call(this, null, e)
						})
					}), e.loadAlpacaDataSource || (e.loadAlpacaDataSource = function(n, i, a)
					{
						var r = {};
						i && t.copyInto(r, i);
						var o = function()
						{
							return e.getUri() + "/alpaca/datasource"
						};
						return this.chainPostResponse(this, o, r, n).then(function(e)
						{
							a.call(this, null, e.datasource)
						})
					})
				},
				loadData: function(e, t, n, i)
				{
					var a = this;
					return a.branch ? void a.branch.loadAlpacaData(e, t, function(e, t)
					{
						if(e) return void i(e);
						var a = null;
						t && (a = JSON.parse(JSON.stringify(t))), n(a)
					}) : this.base(e, t, n, i)
				},
				loadSchema: function(e, t, n, i)
				{
					var a = this;
					return a.branch ? void a.branch.loadAlpacaSchema(e, t, function(e, t)
					{
						return e ? i(e) : void n(t)
					}) : this.base(e, t, n, i)
				},
				loadOptions: function(e, n, i, a)
				{
					var r = this;
					return r.branch ? void r.branch.loadAlpacaOptions(e, n, function(e, n)
					{
						return e ? a(e) : (n || (n = {}), n.form.buttons = {
							submit:
							{
								title: "Submit",
								click: function(e)
								{
									var t = this,
										n = this.getValue();
									n || (n = {});
									var i = this.ajaxSubmit(
									{
										xhrFields:
										{
											withCredentials: !0
										},
										crossDomain: !0,
										processData: !1,
										data: JSON.stringify(n),
										contentType: "application/json; charset=utf-8"
									});
									i.done(function()
									{
										t.topControl.trigger("formSubmitSuccess")
									}), i.fail(function()
									{
										t.topControl.trigger("formSubmitFail")
									})
								}
							}
						}, "undefined" == typeof n.focus && (n.focus = t.defaultFocus), n.form.attributes.action = r.config.baseURL + n.form.attributes.action, void i(n))
					}) : this.base(e, n, i, a)
				},
				loadReferenceSchema: function(e, t, n)
				{
					var i = this;
					if(0 === e.indexOf("qname://"))
					{
						var a = e.substring(8).split("/");
						e = a[0] + ":" + a[1]
					}
					if(0 === e.toLowerCase().indexOf("http://") || 0 === e.toLowerCase().indexOf("https://")) return this._handleLoadJsonResource(e, t, n);
					var r = null;
					return i.loadSchema(e, r, t, n)
				},
				loadReferenceOptions: function(e, t, n)
				{
					var i = this;
					if(0 === e.toLowerCase().indexOf("http://") || 0 === e.toLowerCase().indexOf("https://")) return this._handleLoadJsonResource(e, t, n);
					var a = null;
					if(0 === e.indexOf("qname://"))
					{
						var r = e.substring(8).split("/");
						if(r.length > 2) return a = {}, a.schemaSource = r[0] + ":" + r[1], e = r[2], i.loadOptions(e, a, t, n)
					}
					t(null)
				},
				loadDataSource: function(e, t, n)
				{
					var i = this;
					if(!i.branch) return this.base(e, t, n);
					var a = e.pagination;
					return delete e.pagination, i.branch.loadAlpacaDataSource(e, a, function(e, i)
					{
						return e ? void n(e) : void t(i)
					})
				}
			}), t.registerConnectorClass("cloudcms", t.CloudCmsConnector)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TextField = t.ControlField.extend(
			{
				getFieldType: function()
				{
					return "text"
				},
				setup: function()
				{
					this.base(), this.inputType || (this.inputType = "text"), this.options.inputType && (this.inputType = this.options.inputType), this.options.data || (this.options.data = {}), this.options.attributes || (this.options.attributes = {}), "undefined" == typeof this.options.allowOptionalEmpty && (this.options.allowOptionalEmpty = !0), this.options.autocomplete && "string" == typeof this.options.autocomplete && ("on" === this.options.autocomplete.toLowerCase() ? this.options.autocomplete = !0 : "true" === this.options.autocomplete.toLowerCase() ? this.options.autocomplete = !0 : "yes" === this.options.autocomplete.toLowerCase() ? this.options.autocomplete = !0 : this.options.autocomplete = !1), "undefined" == typeof this.options.autocomplete && (this.options.autocomplete = !1), "undefined" == typeof this.options.disallowEmptySpaces && (this.options.disallowEmptySpaces = !1), "undefined" == typeof this.options.disallowOnlyEmptySpaces && (this.options.disallowOnlyEmptySpaces = !1)
				},
				destroy: function()
				{
					this.base(), this.control && this.control.typeahead && this.options.typeahead && e(this.control).typeahead("destroy")
				},
				postRender: function(e)
				{
					var t = this;
					this.base(function()
					{
						t.control && (t.applyAutocomplete(), t.applyMask(), t.applyTypeAhead(), t.updateMaxLengthIndicator()), e()
					})
				},
				applyAutocomplete: function()
				{
					var t = this;
					"undefined" != typeof t.options.autocomplete && (e(t.field).addClass("alpaca-autocomplete"), e(t.control).attr("autocomplete", t.options.autocomplete ? "on" : "off"), t.fireCallback("autocomplete"))
				},
				applyMask: function()
				{
					var e = this;
					e.control.mask && e.options.maskString && e.control.mask(e.options.maskString)
				},
				applyTypeAhead: function()
				{
					var n = this;
					if(n.control.typeahead && n.options.typeahead && !t.isEmpty(n.options.typeahead))
					{
						var i = n.options.typeahead.config;
						i || (i = {});
						var a = n.options.typeahead.datasets;
						a || (a = {}), a.name || (a.name = n.getId());
						var r = n.options.typeahead.events;
						if(r || (r = {}), !a.init && ("local" === a.type || "remote" === a.type || "prefetch" === a.type))
						{
							var o = {
								datumTokenizer: function(e)
								{
									var t = "";
									for(var n in e)(e.hasOwnProperty(n) || e[n]) && (t += " " + e[n]);
									return Bloodhound.tokenizers.whitespace(t)
								},
								queryTokenizer: Bloodhound.tokenizers.whitespace
							};
							if("local" === a.type)
							{
								var l = [];
								if("function" == typeof a.source) o.local = a.source;
								else
								{
									for(var s = 0; s < a.source.length; s++)
									{
										var u = a.source[s];
										"string" == typeof u && (u = {
											value: u
										}), l.push(u)
									}
									o.local = l
								}
								a.local && (o.local = a.local)
							}
							"prefetch" === a.type && (o.prefetch = {
								url: a.source
							}, a.filter && (o.prefetch.filter = a.filter)), "remote" === a.type && (o.remote = {
								url: a.source
							}, a.filter && (o.remote.filter = a.filter), a.replace && (o.remote.replace = a.replace)), e.each(a, function(e, t)
							{
								"type" !== e && "source" !== e && "filter" !== e && "replace" !== e && "local" !== e && "templates" !== e && (o[e] = t)
							});
							var c = new Bloodhound(o);
							c.initialize(), a.source = c.ttAdapter(), a.init = !0
						}
						if(a.templates)
							for(var d in a.templates)
							{
								var p = a.templates[d];
								"string" == typeof p && (a.templates[d] = Handlebars.compile(p))
							}
						e(n.control).typeahead(i, a), e(n.control).on("typeahead:autocompleted", function(t, i)
						{
							n.setValue(i.value), e(n.control).change()
						}), e(n.control).on("typeahead:selected", function(t, i)
						{
							n.setValue(i.value), e(n.control).change()
						}), r && (r.autocompleted && e(n.control).on("typeahead:autocompleted", function(e, t)
						{
							r.autocompleted(e, t)
						}), r.selected && e(n.control).on("typeahead:selected", function(e, t)
						{
							r.selected(e, t)
						}));
						var h = e(n.control);
						e(n.control).change(function()
						{
							var t = e(this).val(),
								n = e(h).typeahead("val");
							n !== t && e(h).typeahead("val", n)
						}), e(n.field).find("span.twitter-typeahead").first().css("display", "block"), e(n.field).find("span.twitter-typeahead input.tt-input").first().css("background-color", "")
					}
				},
				prepareControlModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						n.inputType = t.inputType, e(n)
					})
				},
				updateMaxLengthIndicator: function()
				{
					var n = this,
						i = !1,
						a = "";
					if(!t.isEmpty(n.schema.maxLength) && n.options.showMaxLengthIndicator)
					{
						var r = n.getValue() || "",
							o = n.schema.maxLength - r.length;
						o >= 0 ? a = "You have " + o + " characters remaining" : (a = "Your message is too long by " + -1 * o + " characters", i = !0);
						var l = e(n.field).find(".alpaca-field-text-max-length-indicator");
						0 === l.length && (l = e("<p class='alpaca-field-text-max-length-indicator'></p>"), e(n.control).after(l)), e(l).html(a), e(l).removeClass("err"), i && e(l).addClass("err")
					}
				},
				getControlValue: function()
				{
					var t = this,
						n = this._getControlVal(!0);
					if(t.control.mask && t.options.maskString)
					{
						var i = e(this.control).data(e.mask.dataName);
						i && (n = i(), n = t.ensureProperType(n))
					}
					return n
				},
				setValue: function(e)
				{
					this.control && this.control.length > 0 && (t.isEmpty(e) ? this.control.val("") : this.control.val(e)), this.base(e), this.updateMaxLengthIndicator()
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validatePattern();
					return n.invalidPattern = {
						message: i ? "" : t.substituteTokens(this.getMessage("invalidPattern"), [this.schema.pattern]),
						status: i
					}, i = this._validateMaxLength(), n.stringTooLong = {
						message: i ? "" : t.substituteTokens(this.getMessage("stringTooLong"), [this.schema.maxLength]),
						status: i
					}, i = this._validateMinLength(), n.stringTooShort = {
						message: i ? "" : t.substituteTokens(this.getMessage("stringTooShort"), [this.schema.minLength]),
						status: i
					}, e && n.invalidPattern.status && n.stringTooLong.status && n.stringTooShort.status
				},
				_validatePattern: function()
				{
					if(this.schema.pattern)
					{
						var e = this.getValue();
						if("" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
						if(t.isEmpty(e) && (e = ""), "string" == typeof e && !e.match(this.schema.pattern)) return !1
					}
					return !0
				},
				_validateMinLength: function()
				{
					if(!t.isEmpty(this.schema.minLength))
					{
						var e = this.getValue();
						if(e !== e && (e = ""), "" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
						if(t.isEmpty(e) && (e = ""), ("" + e).length < this.schema.minLength) return !1
					}
					return !0
				},
				_validateMaxLength: function()
				{
					if(!t.isEmpty(this.schema.maxLength))
					{
						var e = this.getValue();
						if("" === e && this.options.allowOptionalEmpty && !this.isRequired()) return !0;
						if(t.isEmpty(e) && (e = ""), ("" + e).length > this.schema.maxLength) return !1
					}
					return !0
				},
				focus: function(t)
				{
					if(this.control && this.control.length > 0)
					{
						var n = e(this.control).get(0);
						try
						{
							var i = n.value ? n.value.length : 0;
							n.selectionStart = i, n.selectionEnd = i
						}
						catch(a)
						{}
						n.focus(), t && t(this)
					}
				},
				getType: function()
				{
					return "string"
				},
				onKeyPress: function(e)
				{
					var n = this;
					if(9 !== e.keyCode && 37 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 40 !== e.keyCode)
					{
						if(8 === e.keyCode)
						{
							if(!t.isEmpty(n.schema.minLength) && (n.options.constrainLengths || n.options.constrainMinLength))
							{
								var i = n.getValue() || "";
								i.length <= n.schema.minLength && (e.preventDefault(), e.stopImmediatePropagation())
							}
						}
						else if(!t.isEmpty(n.schema.maxLength) && (n.options.constrainLengths || n.options.constrainMaxLength))
						{
							var i = n.getValue() || "";
							i.length >= n.schema.maxLength && (e.preventDefault(), e.stopImmediatePropagation())
						}
						32 === e.keyCode && n.options.disallowEmptySpaces && (e.preventDefault(), e.stopImmediatePropagation())
					}
				},
				onKeyUp: function(t)
				{
					var n = this;
					n.updateMaxLengthIndicator(), e(this.field).trigger("fieldkeyup")
				},
				getTitle: function()
				{
					return "Single-Line Text"
				},
				getDescription: function()
				{
					return "Text field for single-line text."
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							minLength:
							{
								title: "Minimal Length",
								description: "Minimal length of the property value.",
								type: "number"
							},
							maxLength:
							{
								title: "Maximum Length",
								description: "Maximum length of the property value.",
								type: "number"
							},
							pattern:
							{
								title: "Pattern",
								description: "Regular expression for the property value.",
								type: "string"
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							"default":
							{
								helper: "Field default value",
								type: "text"
							},
							minLength:
							{
								type: "integer"
							},
							maxLength:
							{
								type: "integer"
							},
							pattern:
							{
								type: "text"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							size:
							{
								title: "Field Size",
								description: "Field size.",
								type: "number",
								"default": 40
							},
							maskString:
							{
								title: "Mask Expression",
								description: "Expression for the field mask. Field masking will be enabled if not empty.",
								type: "string"
							},
							placeholder:
							{
								title: "Field Placeholder",
								description: "Field placeholder.",
								type: "string"
							},
							typeahead:
							{
								title: "Type Ahead",
								description: "Provides configuration for the $.typeahead plugin if it is available.  For full configuration options, see: https://github.com/twitter/typeahead.js"
							},
							allowOptionalEmpty:
							{
								title: "Allow Optional Empty",
								description: "Allows this non-required field to validate when the value is empty"
							},
							inputType:
							{
								title: "HTML5 Input Type",
								description: "Allows for the override of the underlying HTML5 input type.  If not specified, an assumed value is provided based on the kind of input control (i.e. 'text', 'date', 'email' and so forth)",
								type: "string"
							},
							data:
							{
								title: "Data attributes for the underlying DOM input control",
								description: "Allows you to specify a key/value map of data attributes that will be added as DOM attribuets for the underlying input control.  The data attributes will be added as data-{name}='{value}'.",
								type: "object"
							},
							autocomplete:
							{
								title: "HTML autocomplete attribute for the underlying DOM input control",
								description: "Allows you to specify the autocomplete attribute for the underlying input control whether or not field should have autocomplete enabled.",
								type: "string"
							},
							disallowEmptySpaces:
							{
								title: "Disallow Empty Spaces",
								description: "Whether to disallow the entry of empty spaces in the text",
								type: "boolean",
								"default": !1
							},
							disallowOnlyEmptySpaces:
							{
								title: "Disallow Only Empty Spaces",
								description: "Whether to disallow the entry of only empty spaces in the text",
								type: "boolean",
								"default": !1
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							size:
							{
								type: "integer"
							},
							maskString:
							{
								helper: "a - an alpha character;9 - a numeric character;* - an alphanumeric character",
								type: "text"
							},
							typeahead:
							{
								type: "object"
							},
							allowOptionalEmpty:
							{
								type: "checkbox"
							},
							inputType:
							{
								type: "text"
							},
							data:
							{
								type: "object"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidPattern: "This field should have pattern {0}",
				stringTooShort: "This field should contain at least {0} numbers or characters",
				stringTooLong: "This field should contain at most {0} numbers or characters"
			}), t.registerFieldClass("text", t.Fields.TextField), t.registerDefaultSchemaFieldMapping("string", "text")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TextAreaField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "textarea"
				},
				setup: function()
				{
					this.base(), this.options.rows || (this.options.rows = 5), this.options.cols || (this.options.cols = 40)
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateWordCount();
					return n.wordLimitExceeded = {
						message: i ? "" : t.substituteTokens(this.getMessage("wordLimitExceeded"), [this.options.wordlimit]),
						status: i
					}, e && n.wordLimitExceeded.status
				},
				_validateWordCount: function()
				{
					if(this.options.wordlimit && this.options.wordlimit > -1)
					{
						var e = this.data;
						if(e)
						{
							var t = e.split(" ").length;
							if(t > this.options.wordlimit) return !1
						}
					}
					return !0
				},
				getTitle: function()
				{
					return "Multi-Line Text"
				},
				getDescription: function()
				{
					return "Textarea field for multiple line text."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							rows:
							{
								title: "Rows",
								description: "Number of rows",
								type: "number",
								"default": 5
							},
							cols:
							{
								title: "Columns",
								description: "Number of columns",
								type: "number",
								"default": 40
							},
							wordlimit:
							{
								title: "Word Limit",
								description: "Limits the number of words allowed in the text area.",
								type: "number",
								"default": -1
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							rows:
							{
								type: "integer"
							},
							cols:
							{
								type: "integer"
							},
							wordlimit:
							{
								type: "integer"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				wordLimitExceeded: "The maximum word limit of {0} has been exceeded."
			}), t.registerFieldClass("textarea", t.Fields.TextAreaField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.CheckBoxField = t.ControlField.extend(
			{
				getFieldType: function()
				{
					return "checkbox"
				},
				setup: function()
				{
					var n = this;
					if(n.base(), "undefined" == typeof n.options.multiple && ("array" === n.schema.type ? n.options.multiple = !0 : "undefined" != typeof n.schema["enum"] && (n.options.multiple = !0)), n.options.multiple)
					{
						if(n.checkboxOptions = [], n.getEnum())
						{
							n.sortEnum();
							var i = n.getOptionLabels();
							e.each(n.getEnum(), function(e, a)
							{
								var r = a;
								i && (t.isEmpty(i[e]) ? t.isEmpty(i[a]) || (r = i[a]) : r = i[e]), n.checkboxOptions.push(
								{
									value: a,
									text: r
								})
							})
						}
						n.options.datasource && !n.options.dataSource && (n.options.dataSource = n.options.datasource, delete n.options.datasource), "undefined" == typeof n.options.useDataSourceAsEnum && (n.options.useDataSourceAsEnum = !0)
					}
					else this.options.rightLabel || (this.options.rightLabel = "")
				},
				prepareControlModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						t.checkboxOptions && (n.checkboxOptions = t.checkboxOptions), e(n)
					})
				},
				getEnum: function()
				{
					var e = this.base();
					return e || this.schema && this.schema.items && this.schema.items["enum"] && (e = this.schema.items["enum"]), e
				},
				getOptionLabels: function()
				{
					var e = this.base();
					return e || this.options && this.options.items && this.options.items.optionLabels && (e = this.options.items.optionLabels), e
				},
				onClick: function(e)
				{
					this.refreshValidationState()
				},
				beforeRenderControl: function(e, t)
				{
					var n = this;
					this.base(e, function()
					{
						n.options.dataSource ? (n.options.multiple = !0, n.checkboxOptions || (e.checkboxOptions = n.checkboxOptions = []), n.checkboxOptions.length = 0, n.invokeDataSource(n.checkboxOptions, e, function(e)
						{
							if(n.options.useDataSourceAsEnum)
							{
								for(var i = [], a = [], r = 0; r < n.checkboxOptions.length; r++) i.push(n.checkboxOptions[r].value), a.push(n.checkboxOptions[r].text);
								n.setEnum(i), n.setOptionLabels(a)
							}
							t()
						})) : t()
					})
				},
				postRender: function(t)
				{
					var n = this;
					this.base(function()
					{
						if(n.data && "undefined" != typeof n.data && n.setValue(n.data), n.options.multiple && (e(n.getFieldEl()).find("input:checkbox").prop("checked", !1), n.data))
						{
							var i = n.data;
							if("string" == typeof n.data)
							{
								i = n.data.split(",");
								for(var a = 0; a < i.length; a++) i[a] = e.trim(i[a])
							}
							for(var r in i) e(n.getFieldEl()).find('input:checkbox[data-checkbox-value="' + i[r] + '"]').prop("checked", !0)
						}
						e(n.getFieldEl()).find("input:checkbox").change(function(e)
						{
							n.triggerWithPropagation("change")
						}), t()
					})
				},
				getControlValue: function()
				{
					var n = this,
						i = null;
					if(n.options.multiple)
					{
						for(var a = [], r = 0; r < n.checkboxOptions.length; r++)
						{
							var o = e(n.getFieldEl()).find("input[data-checkbox-index='" + r + "']");
							if(t.checked(o))
							{
								var l = e(o).attr("data-checkbox-value");
								a.push(l)
							}
						}
						"array" === n.schema.type ? i = a : "string" === n.schema.type && (i = a.join(","))
					}
					else
					{
						var s = e(n.getFieldEl()).find("input");
						i = s.length > 0 ? t.checked(e(s[0])) : !1
					}
					return i
				},
				setValue: function(n)
				{
					var i = this,
						a = function(n)
						{
							t.isString(n) && (n = "true" === n);
							var a = e(i.getFieldEl()).find("input");
							a.length > 0 && t.checked(e(a[0]), n)
						},
						r = function(a)
						{
							"string" == typeof a && (a = a.split(","));
							for(var r = 0; r < a.length; r++) a[r] = t.trim(a[r]);
							t.checked(e(i.getFieldEl()).find("input[data-checkbox-value]"), !1);
							for(var o = 0; o < a.length; o++)
							{
								var l = e(i.getFieldEl()).find('input[data-checkbox-value="' + a[o] + '"]');
								l.length > 0 && t.checked(e(l[0]), n)
							}
						},
						o = !1;
					i.options.multiple ? "string" == typeof n ? (r(n), o = !0) : t.isArray(n) && (r(n), o = !0) : "boolean" == typeof n ? (a(n), o = !0) : "string" == typeof n && (a(n), o = !0), !o && n && t.logError("CheckboxField cannot set value for schema.type=" + i.schema.type + " and value=" + n), this.base(n)
				},
				_validateEnum: function()
				{
					var e = this;
					if(!e.options.multiple) return !0;
					var n = e.getValue();
					return !e.isRequired() && t.isValEmpty(n) ? !0 : ("string" == typeof n && (n = n.split(",")), t.anyEquality(n, e.getEnum()))
				},
				disable: function()
				{
					e(this.control).find("input").each(function()
					{
						e(this).disabled = !0, e(this).prop("disabled", !0)
					})
				},
				enable: function()
				{
					e(this.control).find("input").each(function()
					{
						e(this).disabled = !1, e(this).prop("disabled", !1)
					})
				},
				getType: function()
				{
					return "boolean"
				},
				getTitle: function()
				{
					return "Checkbox Field"
				},
				getDescription: function()
				{
					return "Checkbox Field for boolean (true/false), string ('true', 'false' or comma-delimited string of values) or data array."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							rightLabel:
							{
								title: "Option Label",
								description: "Optional right-hand side label for single checkbox field.",
								type: "string"
							},
							multiple:
							{
								title: "Multiple",
								description: "Whether to render multiple checkboxes for multi-valued type (such as an array or a comma-delimited string)",
								type: "boolean"
							},
							dataSource:
							{
								title: "Option DataSource",
								description: "Data source for generating list of options.  This can be a string or a function.  If a string, it is considered to be a URI to a service that produces a object containing key/value pairs or an array of elements of structure {'text': '', 'value': ''}.  This can also be a function that is called to produce the same list.",
								type: "string"
							},
							useDataSourceAsEnum:
							{
								title: "Use Data Source as Enumerated Values",
								description: "Whether to constrain the field's schema enum property to the values that come back from the data source.",
								type: "boolean",
								"default": !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							rightLabel:
							{
								type: "text"
							},
							multiple:
							{
								type: "checkbox"
							},
							dataSource:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerFieldClass("checkbox", t.Fields.CheckBoxField), t.registerDefaultSchemaFieldMapping("boolean", "checkbox")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.FileField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "file"
				},
				setValue: function(e)
				{
					this.data = e, this.data = e, this.updateObservable(), this.triggerUpdate()
				},
				getControlValue: function()
				{
					return this.data
				},
				onChange: function(e)
				{
					this.base(e), this.options.selectionHandler && this.processSelectionHandler(e.target.files)
				},
				processSelectionHandler: function(e)
				{
					if(e && e.length > 0 && "undefined" != typeof FileReader)
					{
						var t = [],
							n = 0,
							i = new FileReader;
						i.onload = function()
						{
							var i = this;
							return function(a)
							{
								var r = a.target.result;
								t.push(r), n++, n === e.length && i.options.selectionHandler.call(i, e, t)
							}
						}.call(this);
						for(var a = 0; a < e.length; a++) i.readAsDataURL(e[a])
					}
				},
				getTitle: function()
				{
					return "File Field"
				},
				getDescription: function()
				{
					return "Field for uploading files."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							selectionHandler:
							{
								title: "Selection Handler",
								description: "Function that should be called when files are selected.  Requires HTML5.",
								type: "boolean",
								"default": !1
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							selectionHandler:
							{
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerFieldClass("file", t.Fields.FileField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ListField = t.ControlField.extend(
			{
				setup: function()
				{
					var n = this;
					if(n.base(), n.selectOptions = [], n.getEnum())
					{
						n.sortEnum();
						var i = n.getOptionLabels();
						e.each(n.getEnum(), function(e, a)
						{
							var r = a;
							i && (t.isEmpty(i[e]) ? t.isEmpty(i[a]) || (r = i[a]) : r = i[e]), n.selectOptions.push(
							{
								value: a,
								text: r
							})
						})
					}
					if(n.isRequired() && !n.data && n.options.removeDefaultNone === !0)
					{
						var a = n.getEnum();
						a && a.length > 0 && (n.data = a[0])
					}
					n.options.datasource && !n.options.dataSource && (n.options.dataSource = n.options.datasource, delete n.options.datasource), "undefined" == typeof n.options.useDataSourceAsEnum && (n.options.useDataSourceAsEnum = !0)
				},
				prepareControlModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						"undefined" == typeof t.options.noneLabel && (t.options.noneLabel = t.getMessage("noneLabel")), "undefined" == typeof t.options.hideNone && ("undefined" != typeof t.options.removeDefaultNone ? t.options.hideNone = t.options.removeDefaultNone : t.options.hideNone = t.isRequired()), e(n)
					})
				},
				beforeRenderControl: function(e, t)
				{
					var n = this,
						i = function()
						{
							for(var e = n.convertToScalarValue(n.data), i = 0; i < n.selectOptions.length; i++)
								if(e === n.selectOptions[i].value)
								{
									n.selectOptions[i].selected = !0;
									break
								}
							t()
						};
					this.base(e, function()
					{
						n.options.dataSource ? (n.selectOptions.length = 0, n.invokeDataSource(n.selectOptions, e, function()
						{
							if(n.options.useDataSourceAsEnum)
							{
								for(var e = [], t = [], a = 0; a < n.selectOptions.length; a++) e.push(n.selectOptions[a].value), t.push(n.selectOptions[a].text);
								n.setEnum(e), n.setOptionLabels(t)
							}
							i()
						})) : i()
					})
				},
				convertToScalarValue: function(e)
				{
					return e
				},
				convertToDataValue: function(e, t)
				{
					t(null, e)
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							"enum":
							{
								title: "Enumeration",
								description: "List of field value options",
								type: "array",
								required: !0
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							dataSource:
							{
								title: "Option Datasource",
								description: "Datasource for generating list of options.  This can be a string or a function.  If a string, it is considered to be a URI to a service that produces a object containing key/value pairs or an array of elements of structure {'text': '', 'value': ''}.  This can also be a function that is called to produce the same list.",
								type: "string"
							},
							removeDefaultNone:
							{
								title: "Remove Default None",
								description: "If true, the default 'None' option will not be shown.",
								type: "boolean",
								"default": !1
							},
							noneLabel:
							{
								title: "None Label",
								description: "The label to use for the 'None' option in a list (select, radio or otherwise).",
								type: "string",
								"default": "None"
							},
							hideNone:
							{
								title: "Hide None",
								description: "Whether to hide the None option from a list (select, radio or otherwise).  This will be true if the field is required and false otherwise.",
								type: "boolean",
								"default": !1
							},
							useDataSourceAsEnum:
							{
								title: "Use Data Source as Enumerated Values",
								description: "Whether to constrain the field's schema enum property to the values that come back from the data source.",
								type: "boolean",
								"default": !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							dataSource:
							{
								type: "text"
							},
							removeDefaultNone:
							{
								type: "checkbox",
								rightLabel: "Remove Default None"
							},
							noneLabel:
							{
								type: "text"
							},
							hideNone:
							{
								type: "checkbox",
								rightLabel: "Hide the 'None' option from the list"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				noneLabel: "None"
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.RadioField = t.Fields.ListField.extend(
			{
				getFieldType: function()
				{
					return "radio"
				},
				setup: function()
				{
					this.base(), this.options.name ? this.name = this.options.name : this.name || (this.name = this.getId() + "-name"), t.isUndefined(this.options.emptySelectFirst) && (this.options.emptySelectFirst = !1), t.isUndefined(this.options.vertical) && (this.options.vertical = !0)
				},
				getControlValue: function()
				{
					var t = this,
						n = null;
					return e(this.control).find(":checked").each(function()
					{
						n = e(this).val(), n = t.ensureProperType(n)
					}), n
				},
				setValue: function(n)
				{
					var i = this;
					e(this.control).find("input").each(function()
					{
						t.checked(e(this), null)
					}), "undefined" != typeof n && t.checked(e(i.control).find('input[value="' + n + '"]'), "checked"), this.options.emptySelectFirst && 0 === e(this.control).find("input:checked").length && t.checked(e(i.control).find("input:radio").first(), "checked"), this.base(n)
				},
				initControlEvents: function()
				{
					var t = this;
					t.base();
					var n = e(this.control).find("input");
					n.focus(function(e)
					{
						t.suspendBlurFocus || (t.onFocus.call(t, e), t.trigger("focus", e))
					}), n.blur(function(e)
					{
						t.suspendBlurFocus || (t.onBlur.call(t, e), t.trigger("blur", e))
					})
				},
				prepareControlModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						n.selectOptions = t.selectOptions, n.removeDefaultNone = t.options.removeDefaultNone, e(n)
					})
				},
				afterRenderControl: function(n, i)
				{
					var a = this;
					this.base(n, function()
					{
						a.options.emptySelectFirst && a.selectOptions && a.selectOptions.length > 0 && (a.data = a.selectOptions[0].value, 0 === e("input:radio:checked", a.control).length && t.checked(e(a.control).find('input:radio[value="' + a.data + '"]'), "checked")), a.options.vertical ? e(a.control).css("display", "block") : e(a.control).css("display", "inline-block"), i()
					})
				},
				updateDOMElement: function()
				{
					this.base(), e(this.control).find("input:radio").attr("name", this.getName())
				},
				onClick: function(t)
				{
					var n = this,
						i = n.getValue();
					this.base(t);
					var a = e(t.currentTarget).find("input").val();
					"undefined" != typeof a && (n.setValue(a), n.refreshValidationState(), i !== a && n.trigger("change"))
				},
				disable: function()
				{
					this.base(), this.getFieldEl().addClass("disabled")
				},
				enable: function()
				{
					this.base(), this.getFieldEl().removeClass("disabled")
				},
				getTitle: function()
				{
					return "Radio Group Field"
				},
				getDescription: function()
				{
					return "Radio Group Field with list of options."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							name:
							{
								title: "Field name",
								description: "Field name.",
								type: "string"
							},
							emptySelectFirst:
							{
								title: "Empty Select First",
								description: "If the data is empty, then automatically select the first item in the list.",
								type: "boolean",
								"default": !1
							},
							vertical:
							{
								title: "Position the radio selector items vertically",
								description: "By default, radio controls are stacked vertically.  Set to false if you'd like radio controls to lay out horizontally.",
								type: "boolean",
								"default": !0
							}
						}
					})
				}
			}), t.registerFieldClass("radio", t.Fields.RadioField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.SelectField = t.Fields.ListField.extend(
			{
				getFieldType: function()
				{
					return "select"
				},
				setup: function()
				{
					var t = this;
					this.base(), t.schema.type && "array" === t.schema.type && (t.options.multiple = !0), t.options.multiple && e.fn.multiselect && "undefined" == typeof t.options.hideNone && (t.options.hideNone = !0), this.schema.items && this.schema.items.maxItems && "undefined" == typeof this.schema.maxItems && (this.schema.maxItems = this.schema.items.maxItems, delete this.schema.items.maxItems), this.schema.items && this.schema.items.minItems && "undefined" == typeof this.schema.minItems && (this.schema.minItems = this.schema.items.minItems, delete this.schema.items.minItems), !t.options.multiselect && e.fn.multiselect && (t.options.multiselect = {}), t.options.multiselect && "undefined" == typeof t.options.multiselect.disableIfEmpty && (t.options.multiselect.disableIfEmpty = !0)
				},
				getValue: function()
				{
					var e = this;
					return "object" === e.schema.type ? this.data : this.base()
				},
				setValue: function(e)
				{
					var n = this,
						i = n.convertToScalarValue(e),
						a = n.convertToScalarValue(n.getValue());
					if(t.isArray(e)) t.compareArrayContent(i, a) || (!t.isEmpty(i) && this.control && this.control.val(i), this.base(e));
					else
					{
						var r = !1;
						t.isEmpty(i) && t.isEmpty(a) ? r = !0 : i !== a && (r = !0), r && (n.control && "undefined" != typeof i && null !== i && n.control.val(i), this.base(e))
					}
				},
				getEnum: function()
				{
					if(this.schema)
					{
						if(this.schema["enum"]) return this.schema["enum"];
						if(this.schema.type && "array" === this.schema.type && this.schema.items && this.schema.items["enum"]) return this.schema.items["enum"]
					}
				},
				initControlEvents: function()
				{
					var e = this;
					if(e.base(), e.options.multiple)
					{
						var t = this.control.parent().find("button.multiselect");
						t.focus(function(t)
						{
							e.suspendBlurFocus || (e.onFocus.call(e, t), e.trigger("focus", t))
						}), t.blur(function(t)
						{
							e.suspendBlurFocus || (e.onBlur.call(e, t), e.trigger("blur", t))
						})
					}
				},
				prepareControlModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						n.selectOptions = t.selectOptions, e(n)
					})
				},
				beforeRenderControl: function(e, n)
				{
					this.base(e, function()
					{
						for(var i = [], a = {}, r = 0; r < e.selectOptions.length; r++) a[e.selectOptions[r].value] = e.selectOptions[r].text;
						if(t.isArray(e.data))
							for(var r = 0; r < e.data.length; r++)
							{
								var o = a[e.data[r]];
								o && i.push(o)
							}
						else
						{
							var o = a[e.data];
							o && i.push(o)
						}
						e.displayableText = i.join(", "), n()
					})
				},
				afterRenderControl: function(n, i)
				{
					var a = this;
					this.base(n, function()
					{
						if(t.isUndefined(a.data) && a.options.emptySelectFirst && a.selectOptions && a.selectOptions.length > 0 && (a.data = a.selectOptions[0].value),
							a.data && a.setValue(a.data), a.options.multiple && e.fn.multiselect && !a.isDisplayOnly())
						{
							var n = null;
							n = a.options.multiselect ? a.options.multiselect :
							{}, n.nonSelectedText || (n.nonSelectedText = "None", a.options.noneLabel && (n.nonSelectedText = a.options.noneLabel)), e(a.getControlEl()).multiselect(n)
						}
						i()
					})
				},
				_validateEnum: function()
				{
					var n = this;
					if(this.schema["enum"])
					{
						var i = this.data;
						if(!this.isRequired() && t.isValEmpty(i)) return !0;
						if(this.options.multiple)
						{
							var a = !0;
							return i || (i = []), t.isArray(i) || t.isObject(i) || (i = [i]), e.each(i, function(e, i)
							{
								var r = n.convertToScalarValue(i),
									o = t.inArray(n.schema["enum"], r);
								o || (a = !1)
							}), a
						}
						t.isArray(i) && (i = i[0]);
						var r = n.convertToScalarValue(i);
						return t.inArray(this.schema["enum"], r)
					}
					return !0
				},
				onChange: function(e)
				{
					var t = this,
						n = t.getControlValue();
					t.convertToDataValue(n, function(e, i)
					{
						t.data = i, t.control.val(n), t.updateObservable(), t.triggerUpdate(), t.refreshValidationState()
					})
				},
				_validateMinItems: function()
				{
					return !(this.schema.minItems && this.schema.minItems >= 0 && e(":selected", this.control).length < this.schema.minItems)
				},
				_validateMaxItems: function()
				{
					return !(this.schema.maxItems && this.schema.maxItems >= 0 && e(":selected", this.control).length > this.schema.maxItems)
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateMaxItems();
					return n.tooManyItems = {
						message: i ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.maxItems]),
						status: i
					}, i = this._validateMinItems(), n.notEnoughItems = {
						message: i ? "" : t.substituteTokens(this.getMessage("notEnoughItems"), [this.schema.minItems]),
						status: i
					}, e && n.tooManyItems.status && n.notEnoughItems.status
				},
				focus: function(t)
				{
					if(this.control && this.control.length > 0)
					{
						var n = e(this.control).get(0);
						n.focus(), t && t(this)
					}
				},
				disable: function()
				{
					var t = this;
					this.base(), t.options.multiselect && e(t.getControlEl()).multiselect("disable")
				},
				enable: function()
				{
					var t = this;
					this.base(), t.options.multiselect && e(t.getControlEl()).multiselect("enable")
				},
				getTitle: function()
				{
					return "Select Field"
				},
				getDescription: function()
				{
					return "Select Field"
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							multiple:
							{
								title: "Mulitple Selection",
								description: "Allow multiple selection if true.",
								type: "boolean",
								"default": !1
							},
							size:
							{
								title: "Displayed Options",
								description: "Number of options to be shown.",
								type: "number"
							},
							emptySelectFirst:
							{
								title: "Empty Select First",
								description: "If the data is empty, then automatically select the first item in the list.",
								type: "boolean",
								"default": !1
							},
							multiselect:
							{
								title: "Multiselect Plugin Settings",
								description: "Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect",
								type: "any"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							multiple:
							{
								rightLabel: "Allow multiple selection ?",
								helper: "Allow multiple selection if checked",
								type: "checkbox"
							},
							size:
							{
								type: "integer"
							},
							emptySelectFirst:
							{
								type: "checkbox",
								rightLabel: "Empty Select First"
							},
							multiselect:
							{
								type: "object",
								rightLabel: "Multiselect plugin properties - http://davidstutz.github.io/bootstrap-multiselect"
							}
						}
					})
				}
			}), t.registerFieldClass("select", t.Fields.SelectField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.NumberField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					this.base(), "undefined" == typeof this.options.numericEntry && (this.options.numericEntry = !1)
				},
				getFieldType: function()
				{
					return "number"
				},
				postRender: function(e)
				{
					var t = this;
					this.base(function()
					{
						t.control && t.on("keypress", function(e)
						{
							var n = e.charCode || e.keyCode || 0,
								i = !0;
							return t.options.numericEntry && (i = i && n >= 48 && 57 >= n), i || (e.preventDefault(), e.stopImmediatePropagation()), i
						}), e()
					})
				},
				getControlValue: function()
				{
					var e = this._getControlVal(!0);
					return "undefined" == typeof e || "" == e ? e : parseFloat(e)
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateNumber();
					return n.stringNotANumber = {
						message: i ? "" : this.getMessage("stringNotANumber"),
						status: i
					}, i = this._validateDivisibleBy(), n.stringDivisibleBy = {
						message: i ? "" : t.substituteTokens(this.getMessage("stringDivisibleBy"), [this.schema.divisibleBy]),
						status: i
					}, i = this._validateMaximum(), n.stringValueTooLarge = {
						message: "",
						status: i
					}, i || (this.schema.exclusiveMaximum ? n.stringValueTooLarge.message = t.substituteTokens(this.getMessage("stringValueTooLargeExclusive"), [this.schema.maximum]) : n.stringValueTooLarge.message = t.substituteTokens(this.getMessage("stringValueTooLarge"), [this.schema.maximum])), i = this._validateMinimum(), n.stringValueTooSmall = {
						message: "",
						status: i
					}, i || (this.schema.exclusiveMinimum ? n.stringValueTooSmall.message = t.substituteTokens(this.getMessage("stringValueTooSmallExclusive"), [this.schema.minimum]) : n.stringValueTooSmall.message = t.substituteTokens(this.getMessage("stringValueTooSmall"), [this.schema.minimum])), i = this._validateMultipleOf(), n.stringValueNotMultipleOf = {
						message: "",
						status: i
					}, i || (n.stringValueNotMultipleOf.message = t.substituteTokens(this.getMessage("stringValueNotMultipleOf"), [this.schema.multipleOf])), e && n.stringNotANumber.status && n.stringDivisibleBy.status && n.stringValueTooLarge.status && n.stringValueTooSmall.status && n.stringValueNotMultipleOf.status && n.invalidPattern.status && n.stringTooLong.status && n.stringTooShort.status
				},
				_validateOptional: function()
				{
					return this.isDisplayOnly() || !this.isRequired() || !t.isValEmpty(e(this.control).val())
				},
				_validateNumber: function()
				{
					var e = this._getControlVal();
					if("number" == typeof e && (e = "" + e), t.isValEmpty(e)) return !0;
					var n = t.testRegex(t.regexps.number, e);
					if(!n) return !1;
					var i = this.getValue();
					return !isNaN(i)
				},
				_validateDivisibleBy: function()
				{
					var e = this.getValue();
					return !(!t.isEmpty(this.schema.divisibleBy) && e % this.schema.divisibleBy !== 0)
				},
				_validateMaximum: function()
				{
					var e = this.getValue();
					if(!t.isEmpty(this.schema.maximum))
					{
						if(e > this.schema.maximum) return !1;
						if(!t.isEmpty(this.schema.exclusiveMaximum) && e == this.schema.maximum && this.schema.exclusiveMaximum) return !1
					}
					return !0
				},
				_validateMinimum: function()
				{
					var e = this.getValue();
					if(!t.isEmpty(this.schema.minimum))
					{
						if(e < this.schema.minimum) return !1;
						if(!t.isEmpty(this.schema.exclusiveMinimum) && e == this.schema.minimum && this.schema.exclusiveMinimum) return !1
					}
					return !0
				},
				_validateMultipleOf: function()
				{
					var e = this.getValue();
					return t.isEmpty(this.schema.multipleOf) || !e || 0 === this.schema.multipleOf
				},
				getType: function()
				{
					return "number"
				},
				onKeyPress: function(e)
				{
					var n = this;
					if(9 !== e.keyCode && 37 !== e.keyCode && 38 !== e.keyCode && 39 !== e.keyCode && 40 !== e.keyCode)
					{
						if(8 === e.keyCode)
						{
							if(!t.isEmpty(n.schema.minLength) && (n.options.constrainLengths || n.options.constrainMinLength))
							{
								var i = n.getValue() || "";
								t.isNumber(i) && (i = i.toString()), i.length <= n.schema.minLength && (e.preventDefault(), e.stopImmediatePropagation())
							}
						}
						else if(!t.isEmpty(n.schema.maxLength) && (n.options.constrainLengths || n.options.constrainMaxLength))
						{
							var i = n.getValue() || "";
							t.isNumber(i) && (i = i.toString()), i.length >= n.schema.maxLength && (e.preventDefault(), e.stopImmediatePropagation())
						}
						32 === e.keyCode && n.options.disallowEmptySpaces && (e.preventDefault(), e.stopImmediatePropagation())
					}
				},
				onKeyUp: function(t)
				{
					var n = this;
					n.updateMaxLengthIndicator(), e(this.field).trigger("fieldkeyup")
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							multipleOf:
							{
								title: "Multiple Of",
								description: "Property value must be a multiple of the multipleOf schema property such that division by this value yields an interger (mod zero).",
								type: "number"
							},
							minimum:
							{
								title: "Minimum",
								description: "Minimum value of the property.",
								type: "number"
							},
							maximum:
							{
								title: "Maximum",
								description: "Maximum value of the property.",
								type: "number"
							},
							exclusiveMinimum:
							{
								title: "Exclusive Minimum",
								description: "Property value can not equal the number defined by the minimum schema property.",
								type: "boolean",
								"default": !1
							},
							exclusiveMaximum:
							{
								title: "Exclusive Maximum",
								description: "Property value can not equal the number defined by the maximum schema property.",
								type: "boolean",
								"default": !1
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							multipleOf:
							{
								title: "Multiple Of",
								description: "The value must be a integral multiple of the property",
								type: "number"
							},
							minimum:
							{
								title: "Minimum",
								description: "Minimum value of the property",
								type: "number"
							},
							maximum:
							{
								title: "Maximum",
								description: "Maximum value of the property",
								type: "number"
							},
							exclusiveMinimum:
							{
								rightLabel: "Exclusive minimum ?",
								helper: "Field value must be greater than but not equal to this number if checked",
								type: "checkbox"
							},
							exclusiveMaximum:
							{
								rightLabel: "Exclusive Maximum ?",
								helper: "Field value must be less than but not equal to this number if checked",
								type: "checkbox"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							numericEntry:
							{
								title: "Numeric Entry",
								description: "Whether to constrain data entry key presses to numeric values (0-9)",
								type: "boolean",
								"default": !1
							}
						}
					})
				},
				getTitle: function()
				{
					return "Number Field"
				},
				getDescription: function()
				{
					return "Field for float numbers."
				}
			}), t.registerMessages(
			{
				stringValueTooSmall: "The minimum value for this field is {0}",
				stringValueTooLarge: "The maximum value for this field is {0}",
				stringValueTooSmallExclusive: "Value of this field must be greater than {0}",
				stringValueTooLargeExclusive: "Value of this field must be less than {0}",
				stringDivisibleBy: "The value must be divisible by {0}",
				stringNotANumber: "This value is not a number.",
				stringValueNotMultipleOf: "This value is not a multiple of {0}"
			}), t.registerFieldClass("number", t.Fields.NumberField), t.registerDefaultSchemaFieldMapping("number", "number")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ArrayField = t.ContainerField.extend(
			{
				getFieldType: function()
				{
					return "array"
				},
				setup: function()
				{
					var n = this;
					this.base();
					var i = n.resolveContainerItemTemplateType();
					if(!i) return t.throwErrorWithCallback("Unable to find template descriptor for container item: " + n.getFieldType());
					this.containerItemTemplateDescriptor = n.view.getTemplateDescriptor("container-" + i + "-item", n), this.options.toolbarStyle || (this.options.toolbarStyle = t.isEmpty(this.view.toolbarStyle) ? "button" : this.view.toolbarStyle), this.options.toolbarStyle || (this.options.toolbarStyle = "button"), this.options.actionbarStyle || (this.options.actionbarStyle = t.isEmpty(this.view.actionbarStyle) ? "top" : this.view.actionbarStyle), this.options.actionbarStyle || (this.options.actionbarStyle = "top"), this.schema.items || (this.schema.items = {}), this.options.items || (this.options.items = {}), this.schema.items && this.schema.items.maxItems && "undefined" == typeof this.schema.maxItems && (this.schema.maxItems = this.schema.items.maxItems, delete this.schema.items.maxItems), this.schema.items && this.schema.items.minItems && "undefined" == typeof this.schema.minItems && (this.schema.minItems = this.schema.items.minItems, delete this.schema.items.minItems), this.schema.items && this.schema.items.uniqueItems && "undefined" == typeof this.schema.uniqueItems && (this.schema.uniqueItems = this.schema.items.uniqueItems, delete this.schema.items.uniqueItems), this.options.rubyrails = !1, this.parent && this.parent.options && this.parent.options.form && this.parent.options.form.attributes && (t.isEmpty(this.parent.options.form.attributes.rubyrails) || (this.options.rubyrails = !0));
					var a = t.defaultToolbarSticky;
					if(t.isEmpty(this.view.toolbarSticky) || (a = this.view.toolbarSticky), t.isEmpty(this.options.toolbarSticky) || (a = this.options.toolbarSticky), this.options.toolbarSticky = a, "undefined" == typeof n.options.hideToolbarWithChildren && (n.options.hideToolbarWithChildren = !0), this.schema.items && this.schema.uniqueItems && t.mergeObject(this.options,
						{
							forceRevalidation: !0
						}), "undefined" == typeof this.data && (this.data = []), null == this.data && (this.data = []), "" == this.data && (this.data = []), t.isString(this.data)) try
					{
						var r = t.parseJSON(this.data);
						if(!t.isArray(r) && !t.isObject(r)) return void t.logWarn("ArrayField parsed string data but it was not an array: " + this.data);
						this.data = r
					}
					catch(o)
					{
						this.data = [this.data]
					}
					if(!t.isArray(this.data) && !t.isObject(this.data)) return void t.logWarn("ArrayField data is not an array: " + JSON.stringify(this.data, null, "  "));
					var l = function(e, t, i)
						{
							var a = n.findAction(e, t);
							a || (a = {
								core: !0
							}, e.push(a));
							for(var r in i) a[r] || (a[r] = i[r])
						},
						s = function(e, t)
						{
							var n = 0;
							do "undefined" == typeof e[n].enabled && (e[n].enabled = !0), t || delete e[n].label, e[n].enabled ? n++ : e.splice(n, 1); while (n < e.length);
							e.sort(function(e, t)
							{
								return e.core && !t.core ? -1 : !e.core && t.core ? 1 : 0
							})
						};
					if(n.toolbar = {}, n.options.toolbar)
						for(var u in n.options.toolbar) n.toolbar[u] = t.copyOf(n.options.toolbar[u]);
					if("undefined" == typeof n.toolbar.showLabels && (n.toolbar.showLabels = !0), n.toolbar.actions || (n.toolbar.actions = []), l(n.toolbar.actions, "add",
						{
							label: n.getMessage("addItemButtonLabel"),
							action: "add",
							iconClass: n.view.getStyle("addIcon"),
							click: function(e, t)
							{
								n.handleToolBarAddItemClick(function(e) {})
							}
						}), s(n.toolbar.actions, n.toolbar.showLabels), n.actionbar = {}, n.options.actionbar)
						for(var c in n.options.actionbar) n.actionbar[c] = t.copyOf(n.options.actionbar[c]);
					"undefined" == typeof n.actionbar.showLabels && (n.actionbar.showLabels = !1), n.actionbar.actions || (n.actionbar.actions = []), l(n.actionbar.actions, "add",
					{
						label: n.getMessage("addButtonLabel"),
						action: "add",
						iconClass: n.view.getStyle("addIcon"),
						click: function(e, t, i)
						{
							n.handleActionBarAddItemClick(i, function(e) {})
						}
					}), l(n.actionbar.actions, "remove",
					{
						label: n.getMessage("removeButtonLabel"),
						action: "remove",
						iconClass: n.view.getStyle("removeIcon"),
						click: function(e, t, i)
						{
							n.handleActionBarRemoveItemClick(i, function(e) {})
						}
					}), l(n.actionbar.actions, "up",
					{
						label: n.getMessage("upButtonLabel"),
						action: "up",
						iconClass: n.view.getStyle("upIcon"),
						click: function(e, t, i)
						{
							n.handleActionBarMoveItemUpClick(i, function() {})
						}
					}), l(n.actionbar.actions, "down",
					{
						label: n.getMessage("downButtonLabel"),
						action: "down",
						iconClass: n.view.getStyle("downIcon"),
						click: function(e, t, i)
						{
							n.handleActionBarMoveItemDownClick(i, function() {})
						}
					}), s(n.actionbar.actions, n.actionbar.showLabels);
					var d = this.data.length,
						p = e.extend(!0,
						{}, this.data);
					p.length = d, this.data = Array.prototype.slice.call(p)
				},
				setValue: function(e)
				{
					var n = this;
					if(e && t.isArray(e))
					{
						var i = 0;
						do
							if(i < n.children.length)
							{
								var a = n.children[i];
								e.length > i ? (a.setValue(e[i]), i++) : n.removeItem(i)
							}
						while (i < n.children.length);
						i < e.length && n.resolveItemSchemaOptions(function(a, r, o)
						{
							if(a || t.logDebug("Unable to resolve schema for item: " + i), o) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), n.errorCallback);
							for(var l = []; i < e.length;)
							{
								var s = function(e, i)
								{
									return function(o)
									{
										n.addItem(e, a, r, i[e], function()
										{
											t.nextTick(function()
											{
												o()
											})
										})
									}
								}(i, e);
								l.push(s), i++
							}
							t.series(l, function() {})
						})
					}
				},
				getContainerValue: function()
				{
					if(0 === this.children.length && !this.isRequired()) return [];
					for(var e = [], t = 0; t < this.children.length; t++)
					{
						var n = this.children[t].getValue();
						n !== n && (n = void 0), "undefined" != typeof n && e.push(n)
					}
					return e
				},
				createItems: function(e)
				{
					var n = this,
						i = [];
					n.data && n.data.length > 0 ? n.resolveItemSchemaOptions(function(a, r, o)
					{
						if(o) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), n.errorCallback);
						for(var l = [], s = 0; s < n.data.length; s++)
						{
							var u = n.data[s],
								c = function(e, t)
								{
									return function(o)
									{
										n.createItem(e, a, r, t, function(e)
										{
											i.push(e), o()
										})
									}
								}(s, u);
							l.push(c)
						}
						t.nextTick(function()
						{
							t.series(l, function(t)
							{
								e(i)
							})
						})
					}) : e(i)
				},
				createItem: function(n, i, a, r, o)
				{
					var l = this;
					if(l._validateEqualMaxItems())
					{
						var s = e("<div></div>");
						s.alpaca(
						{
							data: r,
							options: a,
							schema: i,
							view: this.view.id ? this.view.id : this.view,
							connector: this.connector,
							error: function(e)
							{
								l.destroy(), l.errorCallback.call(l, e)
							},
							notTopLevel: !0,
							render: function(e, t)
							{
								e.parent = l, e.path = l.path + "[" + n + "]", e.render(null, function()
								{
									t && t()
								})
							},
							postRender: function(n)
							{
								var i = t.tmpl(l.containerItemTemplateDescriptor,
									{
										id: l.getId(),
										name: n.name,
										parentFieldId: l.getId(),
										actionbarStyle: l.options.actionbarStyle,
										view: l.view,
										data: r
									}),
									a = e(i).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD);
								return 0 === a.length && e(i).hasClass(t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD) && (a = e(i)), 0 === a.length ? void l.errorCallback.call(l,
								{
									message: "Cannot find insertion point for field: " + l.getId()
								}) : (e(a).before(n.getFieldEl()), e(a).remove(), n.containerItemEl = i, t.fieldApplyFieldAndChildren(n, function(e)
								{
									e.hideInitValidationError = !1
								}), t.isFunction(l.options.items.postRender) && l.options.items.postRender.call(n, a), void(o && o(n)))
							}
						})
					}
				},
				resolveItemSchemaOptions: function(e)
				{
					var n, i = this,
						a = function(t, n, a)
						{
							i.options.readonly && (n.readonly = !0), e(t, n, a)
						};
					!n && i.options && i.options.fields && i.options.fields.item && (n = i.options.fields.item), !n && i.options && i.options.items && (n = i.options.items);
					var r;
					if(i.schema && i.schema.items && (r = i.schema.items), r && r.$ref)
					{
						var o = r.$ref,
							l = r.$ref;
						n.$ref && (l = n.$ref);
						for(var s = this, u = [s]; s.parent;) s = s.parent, u.push(s);
						var c = r,
							d = n;
						t.loadRefSchemaOptions(s, o, l, function(e, n)
						{
							for(var i = 0, r = 0; r < u.length; r++) u[r].schema && (u[r].schema.id === o || u[r].schema.id === "#" + o ? i++ : u[r].schema.$ref === o && i++);
							var l = i > 10,
								s = {};
							c && t.mergeObject(s, c), e && t.mergeObject(s, e), delete s.id;
							var p = {};
							d && t.mergeObject(p, d), n && t.mergeObject(p, n), t.nextTick(function()
							{
								a(s, p, l)
							})
						})
					}
					else t.nextTick(function()
					{
						a(r, n)
					})
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateUniqueItems();
					return n.valueNotUnique = {
						message: i ? "" : this.getMessage("valueNotUnique"),
						status: i
					}, i = this._validateMaxItems(), n.tooManyItems = {
						message: i ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.maxItems]),
						status: i
					}, i = this._validateMinItems(), n.notEnoughItems = {
						message: i ? "" : t.substituteTokens(this.getMessage("notEnoughItems"), [this.schema.minItems]),
						status: i
					}, e && n.valueNotUnique.status && n.tooManyItems.status && n.notEnoughItems.status
				},
				_validateEqualMaxItems: function()
				{
					return !(this.schema.maxItems && this.schema.maxItems >= 0 && this.getSize() >= this.schema.maxItems)
				},
				_validateEqualMinItems: function()
				{
					return !(this.schema.minItems && this.schema.minItems >= 0 && this.getSize() <= this.schema.minItems)
				},
				_validateMinItems: function()
				{
					return !(this.schema.minItems && this.schema.minItems >= 0 && this.getSize() < this.schema.minItems)
				},
				_validateMaxItems: function()
				{
					return !(this.schema.maxItems && this.schema.maxItems >= 0 && this.getSize() > this.schema.maxItems)
				},
				_validateUniqueItems: function()
				{
					if(this.schema.items && this.schema.uniqueItems)
						for(var e = {}, t = 0; t < this.children.length; t++)
						{
							var n = this.children[t].getValue();
							if(n || (n = ""), e[n]) return !1;
							e[n] = !0
						}
					return !0
				},
				findAction: function(t, n)
				{
					var i = null;
					return e.each(t, function(e, t)
					{
						t.action === n && (i = t)
					}), i
				},
				postRender: function(e)
				{
					var t = this;
					this.base(function()
					{
						t.updateToolbars(), e()
					})
				},
				getSize: function()
				{
					return this.children.length
				},
				updateDOMElement: function()
				{
					this.updatePathAndName(), this.base()
				},
				updatePathAndName: function()
				{
					var n = function(i)
					{
						i.children && e.each(i.children, function(a, r)
						{
							i.prePath && t.startsWith(r.path, i.prePath) && (r.prePath = r.path, r.path = r.path.replace(i.prePath, i.path)), i.preName && t.startsWith(r.name, i.preName) && (r.preName = r.name, r.name = r.name.replace(i.preName, i.name), r.field && e(r.field).attr("name", r.name)), n(r)
						})
					};
					this.children && this.children.length > 0 && e.each(this.children, function(t, i)
					{
						var a = i.path.lastIndexOf("/"),
							r = i.path.substring(a + 1);
						r.indexOf("[") < 0 && r.indexOf("]") < 0 && (r = r.substring(r.indexOf("[") + 1, r.indexOf("]"))), r !== t && (i.prePath = i.path, i.path = i.path.substring(0, a) + "/[" + t + "]"), i.nameCalculated && (i.preName = i.name, i.parent && i.parent.name && i.path ? i.name = i.parent.name + "_" + t : i.path && (i.name = i.path.replace(/\//g, "").replace(/\[/g, "_").replace(/\]/g, "")), this.parent.options.rubyrails ? e(i.field).attr("name", i.parent.name) : e(i.field).attr("name", i.name)), i.prePath || (i.prePath = i.path), n(i)
					})
				},
				updateToolbars: function()
				{
					var t = this;
					if("display" !== this.view.type && !this.schema.readonly)
					{
						t.toolbar && (t.fireCallback("arrayToolbar", !0), t.fireCallback("arrayToolbar")), t.actionbar && (t.fireCallback("arrayActionbars", !0), t.fireCallback("arrayActionbars"));
						var n = e(this.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='" + t.getId() + "']");
						if(this.children.length > 0 && t.options.hideToolbarWithChildren ? e(n).hide() : (e(n).show(), e(n).find("[data-alpaca-array-toolbar-action]").each(function()
							{
								var n = e(this).attr("data-alpaca-array-toolbar-action"),
									i = t.findAction(t.toolbar.actions, n);
								i && e(this).off().click(function(e)
								{
									e.preventDefault(), i.click.call(t, n, i)
								})
							})), "undefined" == typeof this.options.toolbarSticky || null === this.options.toolbarSticky)
						{
							var i = this.getFieldEl().find(".alpaca-container-item[data-alpaca-container-item-parent-field-id='" + t.getId() + "']");
							e(i).each(function(n)
							{
								var i = e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "'][data-alpaca-array-actionbar-item-index='" + n + "']");
								i && i.length > 0 && (e(this).hover(function()
								{
									e(i).show()
								}, function()
								{
									e(i).hide()
								}), e(i).hide())
							})
						}
						else this.options.toolbarSticky ? e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']").css("display", "inline-block") : this.options.toolbarSticky || e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']").hide();
						var a = e(t.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-parent-field-id='" + t.getId() + "']");
						e(a).each(function()
						{
							var n = e(this).attr("data-alpaca-array-actionbar-item-index");
							"string" == typeof n && (n = parseInt(n, 10)), e(this).children("[data-alpaca-array-actionbar-action]").each(function()
							{
								var i = e(this).attr("data-alpaca-array-actionbar-action"),
									a = t.findAction(t.actionbar.actions, i);
								a && e(this).off().click(function(e)
								{
									e.preventDefault(), a.click.call(t, i, a, n)
								})
							}), t._validateEqualMaxItems() ? (e(this).children("[data-alpaca-array-toolbar-action='add']").each(function(n)
							{
								e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
							}), e(this).children("[data-alpaca-array-actionbar-action='add']").each(function(n)
							{
								e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
							})) : (e(this).children("[data-alpaca-array-toolbar-action='add']").each(function(n)
							{
								e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
							}), e(this).children("[data-alpaca-array-actionbar-action='add']").each(function(n)
							{
								e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
							})), t._validateEqualMinItems() ? e(this).children("[data-alpaca-array-actionbar-action='remove']").each(function(n)
							{
								e(this).removeClass("alpaca-button-disabled"), t.fireCallback("enableButton", this)
							}) : e(this).children("[data-alpaca-array-actionbar-action='remove']").each(function(n)
							{
								e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
							})
						}), e(a).first().children("[data-alpaca-array-actionbar-action='up']").each(function()
						{
							e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
						}), e(a).last().children("[data-alpaca-array-actionbar-action='down']").each(function()
						{
							e(this).addClass("alpaca-button-disabled"), t.fireCallback("disableButton", this)
						})
					}
				},
				doResolveItemContainer: function()
				{
					var t = this;
					return e(t.container)
				},
				handleToolBarAddItemClick: function(e)
				{
					var n = this;
					n.resolveItemSchemaOptions(function(i, a, r)
					{
						if(r) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(i), n.errorCallback);
						var o = n.children.length,
							l = t.createEmptyDataInstance(i);
						n.addItem(o, i, a, l, function(t)
						{
							e && e(t)
						})
					})
				},
				handleActionBarAddItemClick: function(e, n)
				{
					var i = this;
					i.resolveItemSchemaOptions(function(a, r, o)
					{
						if(o) return t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(a), i.errorCallback);
						var l = i.getValue(),
							s = t.createEmptyDataInstance(a);
						i.addItem(e + 1, a, r, s, function(t)
						{
							l.splice(e + 1, 0, t.getValue()), i.setValue(l), n && n(t)
						})
					})
				},
				handleActionBarRemoveItemClick: function(e, t)
				{
					var n = this;
					n.removeItem(e, function()
					{
						t && t()
					})
				},
				handleActionBarMoveItemUpClick: function(e, t)
				{
					var n = this;
					n.swapItem(e, e - 1, n.options.animate, function()
					{
						t && t()
					})
				},
				handleActionBarMoveItemDownClick: function(e, t)
				{
					var n = this;
					n.swapItem(e, e + 1, n.options.animate, function()
					{
						t && t()
					})
				},
				doAddItem: function(n, i, a)
				{
					var r = this,
						o = r.doResolveItemContainer();
					if(0 === n) e(o).append(i.containerItemEl);
					else
					{
						var l = o.children("[data-alpaca-container-item-index='" + (n - 1) + "']");
						l && l.length > 0 && l.after(i.containerItemEl)
					}
					r.doAfterAddItem(i, function(e)
					{
						t.fireReady(i), a(e)
					})
				},
				doAfterAddItem: function(e, t)
				{
					t()
				},
				addItem: function(e, t, n, i, a)
				{
					var r = this;
					r._validateEqualMaxItems() && r.createItem(e, t, n, i, function(t)
					{
						r.registerChild(t, e), r.doAddItem(e, t, function()
						{
							r.handleRepositionDOMRefresh(), r.updateToolbars(), r.refreshValidationState(), r.trigger("add", t), r.triggerUpdate(), a && a(t)
						})
					})
				},
				doRemoveItem: function(e, t)
				{
					var n = this,
						i = n.doResolveItemContainer();
					i.children(".alpaca-container-item[data-alpaca-container-item-index='" + e + "']").remove(), n.doAfterRemoveItem(e, function(e)
					{
						t(e)
					})
				},
				doAfterRemoveItem: function(e, t)
				{
					t()
				},
				removeItem: function(e, t)
				{
					var n = this;
					this._validateEqualMinItems() && (n.unregisterChild(e), n.doRemoveItem(e, function()
					{
						n.handleRepositionDOMRefresh(), n.updateToolbars(), n.refreshValidationState(), n.trigger("remove", e), n.triggerUpdate(), t && t()
					}))
				},
				moveItem: function(n, i, a, r)
				{
					var o = this;
					if("function" == typeof a && (r = a, a = o.options.animate), "undefined" == typeof a && (a = o.options.animate ? o.options.animate : !0), "string" == typeof n && (n = parseInt(n, 10)), "string" == typeof i && (i = parseInt(i, 10)), 0 > i && (i = 0), i >= o.children.length && (i = o.children.length - 1), -1 !== i && n !== i)
					{
						var l = o.children[i];
						if(l)
						{
							var s = function()
								{
									var e = i;
									i > n && e--;
									var t = o.children.splice(n, 1)[0];
									o.children.splice(e, 0, t), o.data = o.getValue(), o.refresh(function()
									{
										o.refreshValidationState(), o.triggerUpdate(), o.trigger("move"), r && r()
									})
								},
								u = 0;
							if(a && (u = 500), u > 0)
							{
								var c = o.getId(),
									d = o.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + n + "'][data-alpaca-container-item-parent-field-id='" + c + "']"),
									p = o.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + i + "'][data-alpaca-container-item-parent-field-id='" + c + "']"),
									h = e("<div class='tempMarker1'></div>");
								d.before(h);
								var f = e("<div class='tempMarker2'></div>");
								p.before(f), t.animatedMove(d, p, u, function()
								{
									s()
								})
							}
							else s()
						}
					}
				},
				swapItem: function(n, i, a, r)
				{
					var o = this;
					if("function" == typeof a && (r = a, a = o.options.animate), "undefined" == typeof a && (a = o.options.animate ? o.options.animate : !0), "string" == typeof n && (n = parseInt(n, 10)), "string" == typeof i && (i = parseInt(i, 10)), 0 > i && (i = 0), i >= o.children.length && (i = o.children.length - 1), -1 !== i && n !== i)
					{
						var l = o.children[i];
						if(l)
						{
							var s = function()
								{
									var e = o.children[n],
										t = o.children[i];
									o.children[n] = t, o.children[i] = e, o.data = o.getValue(), o.refresh(function()
									{
										o.refreshValidationState(), o.triggerUpdate(), o.trigger("move"), r && r()
									})
								},
								u = 0;
							if(a && (u = 500), u > 0)
							{
								var c = o.getId(),
									d = o.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + n + "'][data-alpaca-container-item-parent-field-id='" + c + "']"),
									p = o.getContainerEl().find(".alpaca-container-item[data-alpaca-container-item-index='" + i + "'][data-alpaca-container-item-parent-field-id='" + c + "']"),
									h = e("<div class='tempMarker1'></div>");
								d.before(h);
								var f = e("<div class='tempMarker2'></div>");
								p.before(f), t.animatedSwap(d, p, u, function()
								{
									s()
								})
							}
							else s()
						}
					}
				},
				getType: function()
				{
					return "array"
				},
				getTitle: function()
				{
					return "Array Field"
				},
				getDescription: function()
				{
					return "Field for list of items with same data type or structure."
				},
				getSchemaOfSchema: function()
				{
					var e = {
						properties:
						{
							items:
							{
								title: "Array Items",
								description: "Schema for array items.",
								type: "object"
							},
							minItems:
							{
								title: "Minimum Items",
								description: "Minimum number of items.",
								type: "number"
							},
							maxItems:
							{
								title: "Maximum Items",
								description: "Maximum number of items.",
								type: "number"
							},
							uniqueItems:
							{
								title: "Items Unique",
								description: "Item values should be unique if true.",
								type: "boolean",
								"default": !1
							}
						}
					};
					return this.children && this.children[0] && t.merge(e.properties.items.properties, this.children[0].getSchemaOfSchema()), t.merge(this.base(), e)
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							items:
							{
								type: "object"
							},
							minItems:
							{
								type: "integer"
							},
							maxItems:
							{
								type: "integer"
							},
							uniqueItems:
							{
								type: "checkbox"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					var e = {
						properties:
						{
							toolbarSticky:
							{
								title: "Sticky Toolbar",
								description: "If true, the array item toolbar will always be enabled.  If false, the toolbar is always disabled.  If undefined or null, the toolbar will appear when hovered over.",
								type: "boolean",
								"default": void 0
							},
							toolbarStyle:
							{
								title: "Toolbar Style",
								description: "The kind of top-level toolbar to render for the array field.  Either 'button' or 'link'.",
								type: "string",
								"default": "button"
							},
							actionbarStyle:
							{
								title: "Actionbar Style",
								description: "The kind of actionbar to render for each item in the array.  Either 'top', 'bottom', 'left', or 'right'.",
								type: "string",
								"default": "top"
							},
							toolbar:
							{
								type: "object",
								title: "Toolbar Configuration",
								properties:
								{
									showLabels:
									{
										type: "boolean",
										"default": !0,
										title: "Whether to show labels next to actions"
									},
									actions:
									{
										type: "array",
										title: "Toolbar Actions Configuration",
										items:
										{
											action:
											{
												type: "string",
												title: "Action Key"
											},
											label:
											{
												type: "string",
												title: "Action Label"
											},
											iconClass:
											{
												type: "string",
												title: "Action CSS Classes for Icon"
											},
											click:
											{
												type: "function",
												title: "Action Click Handler"
											},
											enabled:
											{
												type: "boolean",
												title: "Whether to enable the action",
												"default": !0
											}
										}
									}
								}
							},
							actionbar:
							{
								type: "object",
								properties:
								{
									showLabels:
									{
										type: "boolean",
										"default": !1,
										title: "Whether to show labels next to actions"
									},
									actions:
									{
										type: "array",
										title: "Actions Bar Actions Configuration",
										items:
										{
											action:
											{
												type: "string",
												title: "Action Key"
											},
											label:
											{
												type: "string",
												title: "Action Label"
											},
											iconClass:
											{
												type: "string",
												title: "Action CSS Classes for Icon"
											},
											click:
											{
												type: "function",
												title: "Action Click Handler"
											},
											enabled:
											{
												type: "boolean",
												title: "Whether to enable the action",
												"default": !0
											}
										}
									}
								}
							},
							hideToolbarWithChildren:
							{
								type: "boolean",
								title: "Hide Toolbar with Children",
								description: "Indicates whether to hide the top toolbar when child elements are available.",
								"default": !0
							}
						}
					};
					return this.children && this.children[0] && t.merge(e.properties.items.properties, this.children[0].getSchemaOfSchema()), t.merge(this.base(), e)
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							toolbarSticky:
							{
								type: "checkbox"
							},
							items:
							{
								type: "object",
								fields:
								{}
							}
						}
					})
				}
			}), t.registerMessages(
			{
				notEnoughItems: "The minimum number of items is {0}",
				tooManyItems: "The maximum number of items is {0}",
				valueNotUnique: "Values are not unique",
				notAnArray: "This value is not an Array"
			}), t.registerFieldClass("array", t.Fields.ArrayField), t.registerDefaultSchemaFieldMapping("array", "array"), t.registerMessages(
			{
				addItemButtonLabel: "Add New Item",
				addButtonLabel: "Add",
				removeButtonLabel: "Remove",
				upButtonLabel: "Up",
				downButtonLabel: "Down"
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ObjectField = t.ContainerField.extend(
			{
				getFieldType: function()
				{
					return "object"
				},
				setup: function()
				{
					var e = this;
					this.base();
					var n = e.resolveContainerItemTemplateType();
					if(!n)
					{
						e.resolveContainerItemTemplateType();
						return t.throwErrorWithCallback("Unable to find template descriptor for container item: " + e.getFieldType())
					}
					if(this.containerItemTemplateDescriptor = e.view.getTemplateDescriptor("container-" + n + "-item", e), !t.isEmpty(this.data) && "" !== this.data && !t.isObject(this.data))
					{
						if(!t.isString(this.data)) return;
						try
						{
							if(this.data = t.parseJSON(this.data), !t.isObject(this.data)) return void t.logWarn("ObjectField parsed data but it was not an object: " + JSON.stringify(this.data))
						}
						catch(i)
						{
							return
						}
					}
				},
				setValue: function(e)
				{
					if(e || (e = {}), t.isObject(e))
					{
						var n = {};
						for(var i in this.childrenById)
						{
							var a = this.childrenById[i].propertyId;
							n[a] = this.childrenById[i]
						}
						var r = {};
						for(var o in e) e.hasOwnProperty(o) && (r[o] = e[o]);
						for(var a in r)
						{
							var l = n[a];
							l && (l.setValue(r[a]), delete n[a], delete r[a])
						}
						for(var a in n)
						{
							var l = n[a];
							l.setValue(null)
						}
					}
				},
				getContainerValue: function()
				{
					if(0 === this.children.length && !this.isRequired()) return {};
					for(var e = {}, n = 0; n < this.children.length; n++)
					{
						var i = this.children[n].propertyId,
							a = this.children[n].getValue();
						if(a !== a && (a = void 0), "undefined" != typeof a && this.determineAllDependenciesValid(i))
						{
							var r = null;
							"boolean" == typeof a ? r = !!a : t.isArray(a) || t.isObject(a) || t.isNumber(a) ? r = a : (a || 0 === a) && (r = a), null !== r && (e[i] = r)
						}
					}
					return e
				},
				afterRenderContainer: function(e, n)
				{
					var i = this;
					this.base(e, function()
					{
						if(i.isTopLevel() && i.view)
						{
							i.wizardConfigs = i.view.getWizard(), "undefined" != typeof i.wizardConfigs && (i.wizardConfigs && i.wizardConfigs !== !0 || (i.wizardConfigs = {}));
							var e = i.view.getLayout().templateDescriptor;
							i.wizardConfigs && t.isObject(i.wizardConfigs) && (!e || i.wizardConfigs.bindings ? i.autoWizard() : i.wizard())
						}
						n()
					})
				},
				createItems: function(e)
				{
					var n = this,
						i = [],
						a = {};
					for(var r in n.data) a[r] = r;
					var o = n.data;
					n.schema && n.schema.properties && (o = n.schema.properties);
					var l = function()
						{
							var n = [];
							for(var r in a) n.push(r);
							n.length > 0 && t.logDebug("There were " + n.length + " extra data keys that were not part of the schema " + JSON.stringify(n)), e(i)
						},
						s = [];
					for(var u in o)
					{
						var c = null;
						n.data && n.data.hasOwnProperty(u) && (c = n.data[u]);
						var d = function(e, a, r)
						{
							return function(o)
							{
								n.resolvePropertySchemaOptions(e, function(l, s, u)
								{
									return u ? t.throwErrorWithCallback("Circular reference detected for schema: " + JSON.stringify(l), n.errorCallback) : (l || t.logDebug("Unable to resolve schema for property: " + e), void n.createItem(e, l, s, a, null, function(t)
									{
										i.push(t), delete r[e], o()
									}))
								})
							}
						}(u, c, a);
						s.push(d)
					}
					t.nextTick(function()
					{
						t.series(s, function(e)
						{
							for(var t = !1, n = 0; n < i.length; n++)
								if("undefined" != typeof i[n].options.order)
								{
									t = !0;
									break
								}
							t && i.sort(function(e, t)
							{
								var n = e.options.order;
								n || (n = 0);
								var i = t.options.order;
								return i || (i = 0), n - i
							}), l()
						})
					})
				},
				createItem: function(n, i, a, r, o, l)
				{
					var s = this,
						u = e("<div></div>");
					u.alpaca(
					{
						data: r,
						options: a,
						schema: i,
						view: this.view.id ? this.view.id : this.view,
						connector: this.connector,
						error: function(e)
						{
							s.destroy(), s.errorCallback.call(s, e)
						},
						notTopLevel: !0,
						render: function(e, t)
						{
							e.parent = s, e.propertyId = n, "/" !== s.path ? e.path = s.path + "/" + n : e.path = s.path + n, e.render(null, function()
							{
								t && t()
							})
						},
						postRender: function(n)
						{
							var i = t.tmpl(s.containerItemTemplateDescriptor,
								{
									id: s.getId(),
									name: n.name,
									parentFieldId: s.getId(),
									actionbarStyle: s.options.actionbarStyle,
									view: s.view,
									data: r
								}),
								a = e(i).find("." + t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD);
							return 0 === a.length && e(i).hasClass(t.MARKER_CLASS_CONTAINER_FIELD_ITEM_FIELD) && (a = e(i)), 0 === a.length ? void s.errorCallback.call(s,
							{
								message: "Cannot find insertion point for field: " + s.getId()
							}) : (e(a).before(n.getFieldEl()), e(a).remove(), n.containerItemEl = i, t.fieldApplyFieldAndChildren(n, function(e)
							{
								e.hideInitValidationError = !1
							}), void(l && l(n)))
						}
					})
				},
				resolvePropertySchemaOptions: function(e, n)
				{
					var i = this,
						a = function(e, t, a)
						{
							i.options.readonly && (t.readonly = !0), n(e, t, a)
						},
						r = null;
					i.schema && i.schema.properties && i.schema.properties[e] && (r = i.schema.properties[e]);
					var o = {};
					if(i.options && i.options.fields && i.options.fields[e] && (o = i.options.fields[e]), r && r.$ref)
					{
						var l = r.$ref,
							s = r.$ref;
						o.$ref && (s = o.$ref);
						for(var u = this, c = [u]; u.parent;) u = u.parent, c.push(u);
						var d = r,
							p = o;
						t.loadRefSchemaOptions(u, l, s, function(e, n)
						{
							for(var i = 0, r = 0; r < c.length; r++) c[r].schema && (c[r].schema.id === l || c[r].schema.id === "#" + l ? i++ : c[r].schema.$ref === l && i++);
							var o = i > 1,
								s = {};
							d && t.mergeObject(s, d), e && t.mergeObject(s, e), d && d.id && (s.id = d.id);
							var u = {};
							p && t.mergeObject(u, p), n && t.mergeObject(u, n), t.nextTick(function()
							{
								a(s, u, o)
							})
						})
					}
					else t.nextTick(function()
					{
						a(r, o)
					})
				},
				applyCreatedItems: function(e, t)
				{
					var n = this;
					this.base(e, function()
					{
						var i = function(a)
						{
							if(a === e.items.length) return void t();
							var r = e.items[a],
								o = r.propertyId;
							n.showOrHidePropertyBasedOnDependencies(o), n.bindDependencyFieldUpdateEvent(o), n.refreshDependentFieldStates(o), i(a + 1)
						};
						i(0)
					})
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateMaxProperties();
					return n.tooManyProperties = {
						message: i ? "" : t.substituteTokens(this.getMessage("tooManyProperties"), [this.schema.maxProperties]),
						status: i
					}, i = this._validateMinProperties(), n.tooFewProperties = {
						message: i ? "" : t.substituteTokens(this.getMessage("tooManyItems"), [this.schema.minProperties]),
						status: i
					}, e && n.tooManyProperties.status && n.tooFewProperties.status
				},
				_validateMaxProperties: function()
				{
					if("undefined" == typeof this.schema.maxProperties) return !0;
					var e = this.schema.maxProperties,
						t = 0;
					for(var n in this.data) t++;
					return e >= t
				},
				_validateMinProperties: function()
				{
					if("undefined" == typeof this.schema.minProperties) return !0;
					var e = this.schema.minProperties,
						t = 0;
					for(var n in this.data) t++;
					return t >= e
				},
				showOrHidePropertyBasedOnDependencies: function(e)
				{
					var n = this,
						i = this.childrenByPropertyId[e];
					if(!i) return t.throwErrorWithCallback("Missing property: " + e, n.errorCallback);
					var a = this.determineAllDependenciesValid(e);
					a ? (i.show(), i.onDependentReveal()) : (i.hide(), i.onDependentConceal()), i.getFieldEl().trigger("fieldupdate")
				},
				getChildDependencies: function(e)
				{
					var t = null;
					if(this.schema.dependencies && (t = this.schema.dependencies[e]), !t)
					{
						var n = this.childrenByPropertyId[e];
						n && (t = n.schema.dependencies)
					}
					return t
				},
				getChildConditionalDependencies: function(e)
				{
					var t = null,
						n = this.childrenByPropertyId[e];
					return n && (t = n.options.dependencies), t
				},
				determineAllDependenciesValid: function(n)
				{
					var i = this,
						a = this.childrenByPropertyId[n];
					if(!a) return t.throwErrorWithCallback("Missing property: " + n, i.errorCallback);
					var r = i.getChildDependencies(n);
					if(!r) return !0;
					var o = !0;
					return t.isString(r) ? o = i.determineSingleDependencyValid(n, r) : t.isArray(r) && e.each(r, function(e, t)
					{
						o = o && i.determineSingleDependencyValid(n, t)
					}), o
				},
				bindDependencyFieldUpdateEvent: function(n)
				{
					var i = this,
						a = this.childrenByPropertyId[n];
					if(!a) return t.throwErrorWithCallback("Missing property: " + n, i.errorCallback);
					var r = i.getChildDependencies(n);
					if(!r) return !0;
					var o = function(e, n)
					{
						var r = t.resolveField(i, n);
						r && (r.getFieldEl().bind("fieldupdate", function(e, t, n, a)
						{
							return function(t)
							{
								i.showOrHidePropertyBasedOnDependencies(n), e.getFieldEl().trigger("fieldupdate")
							}
						}(a, r, e, n)), r.getFieldEl().trigger("fieldupdate"))
					};
					t.isString(r) ? o(n, r) : t.isArray(r) && e.each(r, function(e, t)
					{
						o(n, t)
					})
				},
				refreshDependentFieldStates: function(n)
				{
					var i = this,
						a = this.childrenByPropertyId[n];
					if(!a) return t.throwErrorWithCallback("Missing property: " + n, i.errorCallback);
					var r = i.getChildDependencies(n);
					if(!r) return !0;
					var o = function(e)
					{
						var n = t.resolveField(i, e);
						n && n.getFieldEl().trigger("fieldupdate")
					};
					t.isString(r) ? o(r) : t.isArray(r) && e.each(r, function(e, t)
					{
						o(t)
					})
				},
				determineSingleDependencyValid: function(e, n)
				{
					var i = this,
						a = t.resolveField(i, n);
					if(!a) return !1;
					var r = a.data,
						o = !1,
						l = this.getChildConditionalDependencies(e);
					if(l && 0 !== l.length)
					{
						"boolean" !== a.getType() || r || (r = !1);
						var s = l[n];
						!t.isEmpty(s) && t.isFunction(s) ? o = s.call(this, r) : (o = !0, t.isArray(s) ? t.anyEquality(r, s) || (o = !1) : t.isEmpty(s) || t.anyEquality(s, r) || (o = !1))
					}
					else o = "boolean" !== a.getType() || this.childrenByPropertyId[e].options.dependencies || r ? !t.isValEmpty(a.data) : !1;
					return a && a.isHidden() && (o = !1), o
				},
				getIndex: function(e)
				{
					if(t.isEmpty(e)) return -1;
					for(var n = 0; n < this.children.length; n++)
					{
						var i = this.children[n].propertyId;
						if(i == e) return n
					}
					return -1
				},
				addItem: function(e, t, n, i, a, r)
				{
					var o = this;
					this.createItem(e, t, n, i, a, function(e)
					{
						var t = null;
						if(a && o.childrenById[a])
							for(var n = 0; n < o.children.length; n++)
								if(o.children[n].getId() == a)
								{
									t = n;
									break
								}
						o.registerChild(e, null != t ? t + 1 : 0), o.doAddItem(t, e), o.handleRepositionDOMRefresh(), o.refreshValidationState(!0, function()
						{
							o.trigger("add", e), o.triggerUpdate(), e.triggerWithPropagation.call(e, "ready", "down"), r && r()
						})
					})
				},
				doAddItem: function(n, i)
				{
					var a = this;
					if(n)
					{
						var r = a.getContainerEl().children("[data-alpaca-container-item-index='" + n + "']");
						r && r.length > 0 && r.after(i.containerItemEl)
					}
					else e(a.container).prepend(i.containerItemEl);
					a.doAfterAddItem(i, function()
					{
						t.fireReady(i)
					})
				},
				doAfterAddItem: function(e, t)
				{
					t()
				},
				doResolveItemContainer: function()
				{
					var t = this;
					return e(t.container)
				},
				removeItem: function(t, n)
				{
					var i = this,
						a = this.childrenByPropertyId[t];
					a ? (this.children = e.grep(this.children, function(e, n)
					{
						return e.propertyId !== t
					}), delete this.childrenByPropertyId[t], delete this.childrenById[a.getId()], i.doRemoveItem(a), this.refreshValidationState(!0, function()
					{
						i.handleRepositionDOMRefresh(), i.trigger("remove", a), i.triggerUpdate(), n && n()
					})) : n()
				},
				doRemoveItem: function(e)
				{
					var t = this,
						n = t.doResolveItemContainer();
					n.children(".alpaca-container-item[data-alpaca-container-item-name='" + e.name + "']").remove(), e.destroy()
				},
				wizard: function()
				{
					var n = this,
						i = this.wizardConfigs.steps;
					i || (i = []);
					var a = this.wizardConfigs.title,
						r = this.wizardConfigs.description,
						o = this.wizardConfigs.buttons;
					o || (o = {}), o.previous || (o.previous = {}), o.previous.title || (o.previous.title = "Previous"), o.previous.align || (o.previous.align = "left"), o.previous.type || (o.previous.type = "button"), o.next || (o.next = {}), o.next.title || (o.next.title = "Next"), o.next.align || (o.next.align = "right"), o.next.type || (o.next.type = "button"), this.wizardConfigs.hideSubmitButton || (o.submit || (o.submit = {}), o.submit.title || (o.submit.title = "Submit"), o.submit.align || (o.submit.align = "right"), o.submit.type || (o.submit.type = "button"));
					for(var l in o) o[l].type || (o[l].type = "button");
					var s = this.wizardConfigs.showSteps;
					"undefined" == typeof s && (s = !0);
					var u = this.wizardConfigs.showProgressBar,
						c = this.wizardConfigs.validation;
					"undefined" == typeof c && (c = !0);
					var a = e(this.field).attr("data-alpaca-wizard-title"),
						r = e(this.field).attr("data-alpaca-wizard-description"),
						d = e(this.field).attr("data-alpaca-wizard-validation");
					"undefined" != typeof d && (c = !!d);
					var p = e(this.field).attr("data-alpaca-wizard-show-steps");
					"undefined" != typeof p && (s = !!p);
					var h = e(this.field).attr("data-alpaca-wizard-show-progress-bar");
					"undefined" != typeof h && (u = !!h);
					var f = e(this.field).find("[data-alpaca-wizard-role='step']");
					0 == i.length && f.each(function(t)
					{
						var n = {},
							a = e(this).attr("data-alpaca-wizard-step-title");
						"undefined" != typeof a && (n.title = a), n.title || (n.title = "Step " + t);
						var r = e(this).attr("data-alpaca-wizard-step-description");
						"undefined" != typeof r && (n.description = r), n.description || (n.description = "Step " + t), i.push(n)
					}), "undefined" == typeof u && i.length > 1 && (u = !0);
					var m = {};
					m.wizardTitle = a, m.wizardDescription = r, m.showSteps = s, m.performValidation = c, m.steps = i, m.buttons = o, m.schema = n.schema, m.options = n.options, m.data = n.data, m.showProgressBar = u, m.markAllStepsVisited = this.wizardConfigs.markAllStepsVisited, m.view = n.view;
					var g = n.view.getTemplateDescriptor("wizard", n);
					if(g)
					{
						var v = t.tmpl(g, m);
						e(n.field).append(v);
						var b = e(v).find(".alpaca-wizard-nav"),
							y = e(v).find(".alpaca-wizard-steps"),
							w = e(v).find(".alpaca-wizard-buttons"),
							E = e(v).find(".alpaca-wizard-progress-bar");
						e(y).append(f),
							function(i, a, r, o)
							{
								var l = 0,
									s = e(r).find("[data-alpaca-wizard-button-key='previous']"),
									u = e(r).find("[data-alpaca-wizard-button-key='next']"),
									c = e(r).find("[data-alpaca-wizard-button-key='submit']"),
									d = function()
									{
										if(o.showSteps)
										{
											if(o.visits || (o.visits = {}), o.markAllStepsVisited)
												for(var t = e(i).find("[data-alpaca-wizard-step-index]"), n = 0; n < t.length; n++) o.visits[n] = !0;
											o.visits[l] = !0;
											var t = e(i).find("[data-alpaca-wizard-step-index]");
											e(t).removeClass("disabled"), e(t).removeClass("completed"), e(t).removeClass("active"), e(t).removeClass("visited");
											for(var n = 0; n < t.length; n++) l > n ? e(i).find("[data-alpaca-wizard-step-index='" + n + "']").addClass("completed") : n === l ? e(i).find("[data-alpaca-wizard-step-index='" + n + "']").addClass("active") : o.visits && o.visits[n] || e(i).find("[data-alpaca-wizard-step-index='" + n + "']").addClass("disabled"), o.visits && o.visits[n] && e(i).find("[data-alpaca-wizard-step-index='" + n + "']").addClass("visited")
										}
										if(o.showProgressBar)
										{
											var r = l + 1,
												d = o.steps.length + 1,
												p = parseInt(r / d * 100, 10) + "%";
											e(E).find(".progress-bar").attr("aria-valuemax", d), e(E).find(".progress-bar").attr("aria-valuenow", r), e(E).find(".progress-bar").css("width", p)
										}
										s.hide(), u.hide(), c.hide(), 1 == o.steps.length ? c.show() : o.steps.length > 1 && (l > 0 && s.show(), u.show(), 0 == l ? u.show() : l == o.steps.length - 1 && (u.hide(), c.show())), e(a).find("[data-alpaca-wizard-role='step']").hide(), e(e(a).find("[data-alpaca-wizard-role='step']")[l]).show()
									},
									p = function(i, r)
									{
										if(!o.performValidation) return void r(!0);
										var s = [],
											u = e(e(a).find("[data-alpaca-wizard-role='step']")[l]);
										e(u).find(".alpaca-field").each(function()
										{
											var t = e(this).attr("data-alpaca-field-id");
											if(t)
											{
												var i = n.childrenById[t];
												i && s.push(i)
											}
										});
										for(var c = [], d = 0; d < s.length; d++) c.push(function(e)
										{
											return function(t)
											{
												e.refreshValidationState(!0, function()
												{
													t()
												})
											}
										}(s[d]));
										t.series(c, function()
										{
											for(var e = !0, t = 0; t < s.length; t++) e = e && s[t].isValid(!0);
											var a = o.buttons[i];
											a && a.validate ? a.validate.call(n, function(t)
											{
												e = e && t, r(e)
											}) : r(e)
										})
									};
								e(s).click(function(e)
								{
									if(e.preventDefault(), l >= 1)
									{
										var t = o.buttons.previous;
										t && t.click && t.click.call(n, e), l--, d()
									}
								}), e(u).click(function(e)
								{
									e.preventDefault(), l + 1 <= o.steps.length - 1 && p("next", function(t)
									{
										if(t)
										{
											var i = o.buttons.next;
											i && i.click && i.click.call(n, e), l++, d()
										}
										else window.setTimeout(function()
										{
											n.focus(function(e) {})
										}, 250)
									})
								}), e(c).click(function(e)
								{
									e.preventDefault(), l === o.steps.length - 1 && p("submit", function(t)
									{
										if(t)
										{
											var i = o.buttons.submit;
											i && (i.click ? i.click.call(n, e) : n.form && n.form.submit())
										}
										else window.setTimeout(function()
										{
											n.focus(function(e) {})
										}, 250)
									})
								}), e(r).find("[data-alpaca-wizard-button-key]").each(function()
								{
									var t = e(this).attr("data-alpaca-wizard-button-key");
									if("submit" != t && "next" != t && "previous" != t)
									{
										var i = o.buttons[t];
										i && i.click && e(this).click(function(e)
										{
											return function(t)
											{
												e.click.call(n, t)
											}
										}(i))
									}
								}), e(i).find("[data-alpaca-wizard-step-index]").click(function(t)
								{
									t.preventDefault();
									var n = e(this).attr("data-alpaca-wizard-step-index");
									n && (n = parseInt(n, 10), (n == l || o.visits && o.visits[n]) && (l > n ? (l = n, d()) : n > l && p(null, function(e)
									{
										e && (l = n, d())
									})))
								}), n.on("moveToStep", function(e)
								{
									var t = e.index,
										n = e.skipValidation;
									"undefined" != typeof t && t <= o.steps.length - 1 && (n ? (l = t, d()) : p(null, function(e)
									{
										e && (l = t, d())
									}))
								}), n.on("advanceOrSubmit", function(t)
								{
									p(null, function(t)
									{
										t && (l === o.steps.length - 1 ? e(c).click() : e(u).click())
									})
								}), d()
							}(b, y, w, m)
					}
				},
				autoWizard: function()
				{
					var t = this.wizardConfigs.bindings;
					t || (t = {});
					for(var n in this.childrenByPropertyId) t.hasOwnProperty(n) || (t[n] = 1);
					var i = !0;
					e(this.field).find("[data-alpaca-wizard-role='step']").length > 0 && (i = !1);
					var a = 1,
						r = [];
					do {
						r = [];
						for(var n in t) t[n] === a && this.childrenByPropertyId && this.childrenByPropertyId[n] && r.push(this.childrenByPropertyId[n]);
						if(r.length > 0)
						{
							var o = null;
							i ? (o = e('<div data-alpaca-wizard-role="step"></div>'), e(this.field).append(o)) : o = e(e(this.field).find("[data-alpaca-wizard-role='step']")[a - 1]);
							for(var l = !1, s = 0; s < r.length; s++)
								if("undefined" != typeof r[s].options.order)
								{
									l = !0;
									break
								}
							l && r.sort(function(e, t)
							{
								var n = e.options.order;
								n || (n = 0);
								var i = t.options.order;
								return i || (i = 0), n - i
							});
							for(var s = 0; s < r.length; s++) e(o).append(r[s].containerItemEl);
							a++
						}
					} while (r.length > 0);
					this.wizard(), 0 === e(this.container).children().length && e(this.container).css("display", "none")
				},
				getType: function()
				{
					return "object"
				},
				moveItem: function(n, i, a, r)
				{
					var o = this;
					if("function" == typeof a && (r = a, a = o.options.animate), "undefined" == typeof a && (a = o.options.animate ? o.options.animate : !0), "string" == typeof n && (n = parseInt(n, 10)), "string" == typeof i && (i = parseInt(i, 10)), 0 > i && (i = 0), i >= o.children.length && (i = o.children.length - 1), -1 !== i)
					{
						var l = o.children[i];
						if(l)
						{
							var s = o.getContainerEl().children("[data-alpaca-container-item-index='" + n + "']"),
								u = o.getContainerEl().children("[data-alpaca-container-item-index='" + i + "']"),
								c = e("<div class='tempMarker1'></div>");
							s.before(c);
							var d = e("<div class='tempMarker2'></div>");
							u.before(d);
							var p = function()
							{
								for(var t = [], a = 0; a < o.children.length; a++) a === n ? t[a] = o.children[i] : a === i ? t[a] = o.children[n] : t[a] = o.children[a];
								o.children = t, c.replaceWith(u), d.replaceWith(s), o.handleRepositionDOMRefresh(), e(s).find("[data-alpaca-array-actionbar-item-index='" + n + "']").attr("data-alpaca-array-actionbar-item-index", i), e(u).find("[data-alpaca-array-actionbar-item-index='" + i + "']").attr("data-alpaca-array-actionbar-item-index", n), o.refreshValidationState(), o.triggerUpdate(), o.trigger("move"), r && r()
							};
							a ? t.animatedSwap(s, u, 500, function()
							{
								p()
							}) : p()
						}
					}
				},
				getTitle: function()
				{
					return "Object Field"
				},
				getDescription: function()
				{
					return "Object field for containing other fields"
				},
				getSchemaOfSchema: function()
				{
					var e = {
							properties:
							{
								properties:
								{
									title: "Properties",
									description: "List of child properties.",
									type: "object"
								},
								maxProperties:
								{
									type: "number",
									title: "Maximum Number Properties",
									description: "The maximum number of properties that this object is allowed to have"
								},
								minProperties:
								{
									type: "number",
									title: "Minimum Number of Properties",
									description: "The minimum number of properties that this object is required to have"
								}
							}
						},
						n = e.properties.properties;
					if(n.properties = {}, this.children)
						for(var i = 0; i < this.children.length; i++)
						{
							var a = this.children[i].propertyId;
							n.properties[a] = this.children[i].getSchemaOfSchema(), n.properties[a].title = a + " :: " + n.properties[a].title
						}
					return t.merge(this.base(), e)
				},
				getSchemaOfOptions: function()
				{
					var e = t.merge(this.base(),
						{
							properties:
							{},
							order:
							{
								type: "number",
								title: "Order",
								description: "Allows for optional specification of the index of this field in the properties array."
							}
						}),
						n = {
							properties:
							{
								fields:
								{
									title: "Field Options",
									description: "List of options for child fields.",
									type: "object"
								}
							}
						},
						i = n.properties.fields;
					if(i.properties = {}, this.children)
						for(var a = 0; a < this.children.length; a++)
						{
							var r = this.children[a].propertyId;
							i.properties[r] = this.children[a].getSchemaOfOptions(), i.properties[r].title = r + " :: " + i.properties[r].title
						}
					return t.merge(e, n)
				}
			}), t.registerMessages(
			{
				tooManyProperties: "The maximum number of properties ({0}) has been exceeded.",
				tooFewProperties: "There are not enough properties ({0} are required)"
			}), t.registerFieldClass("object", t.Fields.ObjectField), t.registerDefaultSchemaFieldMapping("object", "object")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.AnyField = t.ControlField.extend(
			{
				getFieldType: function()
				{
					return "any"
				},
				setup: function()
				{
					this.base()
				},
				getControlValue: function()
				{
					return this._getControlVal(!0)
				},
				setValue: function(e)
				{
					t.isEmpty(e) ? this.control.val("") : this.control.val(e), this.base(e)
				},
				disable: function()
				{
					this.control.disabled = !0
				},
				enable: function()
				{
					this.control.disabled = !1
				},
				focus: function(e)
				{
					this.control.focus(), e && e(this)
				},
				getType: function()
				{
					return "any"
				},
				getTitle: function()
				{
					return "Any Field"
				},
				getDescription: function()
				{
					return "Any field."
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{}
					})
				}
			}), t.registerFieldClass("any", t.Fields.AnyField), t.registerDefaultSchemaFieldMapping("any", "any")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.HiddenField = t.ControlField.extend(
			{
				getFieldType: function()
				{
					return "hidden"
				},
				setup: function()
				{
					this.base()
				},
				getControlValue: function()
				{
					return this._getControlVal(!0)
				},
				setValue: function(e)
				{
					t.isEmpty(e) ? this.getControlEl().val("") : this.getControlEl().val(e), this.base(e)
				},
				getType: function()
				{
					return "string"
				},
				getTitle: function()
				{
					return "Hidden"
				},
				getDescription: function()
				{
					return "Field for a hidden HTML input"
				}
			}), t.registerFieldClass("hidden", t.Fields.HiddenField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.AddressField = t.Fields.ObjectField.extend(
			{
				getFieldType: function()
				{
					return "address"
				},
				setup: function()
				{
					this.base(), this.data && this.data.street || (this.data = {
						street: ["", ""]
					}), this.schema = {
						title: "Home Address",
						type: "object",
						properties:
						{
							street:
							{
								title: "Street",
								type: "array",
								items:
								{
									type: "string",
									maxLength: 30
								},
								minItems: 0,
								maxItems: 3
							},
							city:
							{
								title: "City",
								type: "string"
							},
							state:
							{
								title: "State",
								type: "string",
								"enum": ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
							},
							zip:
							{
								title: "Zip Code",
								type: "string",
								pattern: /^(\d{5}(-\d{4})?)?$/
							}
						}
					}, t.merge(this.options,
					{
						fields:
						{
							zip:
							{
								maskString: "99999",
								size: 5
							},
							state:
							{
								optionLabels: ["ALABAMA", "ALASKA", "AMERICAN SAMOA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "DISTRICT OF COLUMBIA", "FEDERATED STATES OF MICRONESIA", "FLORIDA", "GEORGIA", "GUAM", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARSHALL ISLANDS", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "NORTHERN MARIANA ISLANDS", "OHIO", "OKLAHOMA", "OREGON", "PALAU", "PENNSYLVANIA", "PUERTO RICO", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGIN ISLANDS", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN", "WYOMING"]
							}
						}
					}), t.isEmpty(this.options.addressValidation) && (this.options.addressValidation = !0)
				},
				isContainer: function()
				{
					return !1
				},
				getAddress: function()
				{
					var t = this.getValue();
					"view" === this.view.type && (t = this.data);
					var n = "";
					return t && (t.street && e.each(t.street, function(e, t)
					{
						n += t + " "
					}), t.city && (n += t.city + " "), t.state && (n += t.state + " "), t.zip && (n += t.zip)), n
				},
				afterRenderContainer: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						var t = i.getContainerEl();
						if(e(t).addClass("alpaca-addressfield"), i.options.addressValidation && !i.isDisplayOnly())
						{
							e('<div style="clear:both;"></div>').appendTo(t);
							var a = e('<div class="alpaca-form-button">Show Google Map</div>').appendTo(t);
							a.button && a.button(
							{
								text: !0
							}), a.click(function()
							{
								if(google && google.maps)
								{
									var t = new google.maps.Geocoder,
										n = i.getAddress();
									t && t.geocode(
									{
										address: n
									}, function(t, n)
									{
										if(n === google.maps.GeocoderStatus.OK)
										{
											var a = i.getId() + "-map-canvas";
											0 === e("#" + a).length && e("<div id='" + a + "' class='alpaca-field-address-mapcanvas'></div>").appendTo(i.getFieldEl());
											var r = new google.maps.Map(document.getElementById(i.getId() + "-map-canvas"),
											{
												zoom: 10,
												center: t[0].geometry.location,
												mapTypeId: google.maps.MapTypeId.ROADMAP
											});
											new google.maps.Marker(
											{
												map: r,
												position: t[0].geometry.location
											})
										}
										else i.displayMessage("Geocoding failed: " + n)
									})
								}
								else i.displayMessage("Google Map API is not installed.")
							}).wrap("<small/>"), i.options.showMapOnLoad && a.click()
						}
						n()
					})
				},
				getType: function()
				{
					return "any"
				},
				getTitle: function()
				{
					return "Address"
				},
				getDescription: function()
				{
					return "Standard US Address with Street, City, State and Zip. Also comes with support for Google map."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							validateAddress:
							{
								title: "Address Validation",
								description: "Enable address validation if true",
								type: "boolean",
								"default": !0
							},
							showMapOnLoad:
							{
								title: "Whether to show the map when first loaded",
								type: "boolean"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							validateAddress:
							{
								helper: "Address validation if checked",
								rightLabel: "Enable Google Map for address validation?",
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerFieldClass("address", t.Fields.AddressField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.CKEditorField = t.Fields.TextAreaField.extend(
			{
				getFieldType: function()
				{
					return "ckeditor"
				},
				setup: function()
				{
					this.data || (this.data = ""), this.base(), "undefined" == typeof this.options.ckeditor && (this.options.ckeditor = {})
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						!i.isDisplayOnly() && i.control && "undefined" != typeof CKEDITOR && i.on("ready", function()
						{
							i.editor || (i.editor = CKEDITOR.replace(e(i.control)[0], i.options.ckeditor), i.initCKEditorEvents())
						}), e(i.control).bind("destroyed", function()
						{
							if(i.editor)
							{
								i.editor.removeAllListeners();
								try
								{
									i.editor.destroy(!1)
								}
								catch(e)
								{}
								i.editor = null
							}
						}), n()
					})
				},
				initCKEditorEvents: function()
				{
					var e = this;
					e.editor && (e.editor.on("click", function(t)
					{
						e.onClick.call(e, t), e.trigger("click", t)
					}), e.editor.on("change", function(t)
					{
						e.onChange(), e.triggerWithPropagation("change", t)
					}), e.editor.on("blur", function(t)
					{
						e.onBlur(), e.trigger("blur", t)
					}), e.editor.on("focus", function(t)
					{
						e.onFocus.call(e, t), e.trigger("focus", t)
					}), e.editor.on("key", function(t)
					{
						e.onKeyPress.call(e, t), e.trigger("keypress", t)
					}))
				},
				setValue: function(e)
				{
					var t = this;
					this.base(e), t.editor && t.editor.setData(e)
				},
				getControlValue: function()
				{
					var e = this,
						t = null;
					return e.editor && (t = e.editor.getData()), t
				},
				destroy: function()
				{
					var e = this;
					e.editor && (e.editor.destroy(), e.editor = null), this.base()
				},
				getTitle: function()
				{
					return "CK Editor"
				},
				getDescription: function()
				{
					return "Provides an instance of a CK Editor control for use in editing HTML."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							ckeditor:
							{
								title: "CK Editor options",
								description: "Use this entry to provide configuration options to the underlying CKEditor plugin.",
								type: "any"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							ckeditor:
							{
								type: "any"
							}
						}
					})
				}
			}), t.registerFieldClass("ckeditor", t.Fields.CKEditorField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ColorField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					var t = this;
					this.spectrumAvailable = !1, t.isDisplayOnly() || "undefined" == typeof e.fn.spectrum || (this.spectrumAvailable = !0), "undefined" == typeof this.options.spectrum && t.spectrumAvailable && (this.inputType = "color"), this.base(), t.spectrumAvailable && ("undefined" == typeof this.options.spectrum && (this.options.spectrum = {}), "undefined" == typeof this.options.spectrum.showInput && (this.options.spectrum.showInput = !0), "undefined" == typeof this.options.spectrum.showPalette && (this.options.spectrum.showPalette = !0), "undefined" == typeof this.options.spectrum.preferredFormat && (this.options.spectrum.preferredFormat = "hex3"), "undefined" == typeof this.options.spectrum.clickoutFiresChange && (this.options.spectrum.clickoutFiresChange = !0))
				},
				getFieldType: function()
				{
					return "color"
				},
				getType: function()
				{
					return "string"
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						i.spectrumAvailable && i.control && (setTimeout(function()
						{
							e(i.control[0]).spectrum(e.extend(
							{
								color: i.data
							}, i.options.spectrum))
						}, 100), e(i.control).on("change.spectrum", function(e, t)
						{
							var n = i.convertTinyColor(t);
							i.setValue(n)
						})), n()
					})
				},
				convertTinyColor: function(e)
				{
					return e.toHexString()
				},
				getTitle: function()
				{
					return "Color Field"
				},
				getDescription: function()
				{
					return "A color picker for selecting hexadecimal color values"
				}
			}), t.registerFieldClass("color", t.Fields.ColorField), t.registerDefaultSchemaFieldMapping("color", "color")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ColorPickerField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					var t = this;
					this.simpleColorPickerAvailable = !1, t.isDisplayOnly() || "undefined" == typeof e.fn.colorpicker || (this.simpleColorPickerAvailable = !0), "undefined" != typeof this.options.colorpicker || t.simpleColorPickerAvailable || (this.inputType = "color"), this.base(), "undefined" == typeof this.options.colorpicker && (this.options.colorpicker = {}), t.data && (t.options.colorpicker.color = t.data)
				},
				getFieldType: function()
				{
					return "colorpicker"
				},
				getType: function()
				{
					return "string"
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						i.simpleColorPickerAvailable && i.control && (setTimeout(function()
						{
							e(i.control[0]).colorpicker(i.options.colorpicker)
						}, 100), e(i.control).on("changeColor.colorpicker", function(e)
						{
							i.setValue(e.color.toHex())
						})), n()
					})
				},
				getTitle: function()
				{
					return "Color Picker Field"
				},
				getDescription: function()
				{
					return "A color picker for selecting hexadecimal color values"
				}
			}), t.registerFieldClass("colorpicker", t.Fields.ColorPickerField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.CountryField = t.Fields.SelectField.extend(
			{
				getFieldType: function()
				{
					return "country"
				},
				setup: function()
				{
					t.isUndefined(this.options.capitalize) && (this.options.capitalize = !1), this.schema["enum"] = [], this.options.optionLabels = [];
					var e = this.getMessage("countries");
					if(e)
						for(var n in e)
						{
							this.schema["enum"].push(n);
							var i = e[n];
							this.options.capitalize && (i = i.toUpperCase()), this.options.optionLabels.push(i)
						}
					this.base()
				},
				getTitle: function()
				{
					return "Country Field"
				},
				getDescription: function()
				{
					return "Provides a dropdown selector of countries keyed by their ISO3 code.  The names of the countries are read from the I18N bundle for the current locale."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							capitalize:
							{
								title: "Capitalize",
								description: "Whether the values should be capitalized",
								type: "boolean",
								"default": !1,
								readonly: !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							capitalize:
							{
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerFieldClass("country", t.Fields.CountryField), t.registerDefaultFormatFieldMapping("country", "country")
		}(jQuery),
		function(e)
		{
			var t = function()
				{
					var e = {
						up: Math.ceil,
						down: function(e)
						{
							return ~~e
						},
						nearest: Math.round
					};
					return function(t)
					{
						return e[t]
					}
				}(),
				n = e.alpaca;
			n.Fields.CurrencyField = n.Fields.TextField.extend(
			{
				constructor: function(e, t, n, i, a, r, o)
				{
					n = n ||
					{};
					var l = this.getSchemaOfPriceFormatOptions().properties;
					for(var s in l)
					{
						var u = l[s];
						s in n || (n[s] = u["default"] || void 0)
					}
					"undefined" != typeof t && (t = "" + parseFloat(t).toFixed(n.centsLimit)), this.base(e, t, n, i, a, r, o)
				},
				getFieldType: function()
				{
					return "currency"
				},
				afterRenderControl: function(t, n)
				{
					var i = this,
						a = this.getControlEl();
					this.base(t, function()
					{
						e(a).priceFormat(i.options), n()
					})
				},
				getControlValue: function()
				{
					var n = this.getControlEl(),
						i = e(n).is("input") ? n.val() : n.html();
					if(this.options.unmask || "none" !== this.options.round)
					{
						var a = function()
						{
							var e = "";
							for(var t in i)
							{
								var n = i[t];
								isNaN(n) ? n === this.options.centsSeparator && (e += ".") : e += n
							}
							return parseFloat(e)
						}.bind(this)();
						if("none" !== this.options.round && (a = t(this.options.round)(a), !this.options.unmask))
						{
							for(var r = [], o = "" + a, l = 0, s = 0; l < i.length; l++) isNaN(i[l]) ? r.push(i[l]) : r.push(o[s++] || 0);
							return r.join("")
						}
						return a
					}
					return i
				},
				getTitle: function()
				{
					return "Currency Field"
				},
				getDescription: function()
				{
					return "Provides an automatically formatted and configurable input for entering currency amounts."
				},
				getSchemaOfPriceFormatOptions: function()
				{
					return {
						properties:
						{
							allowNegative:
							{
								title: "Allow Negative",
								description: "Determines if negative numbers are allowed.",
								type: "boolean",
								"default": !1
							},
							centsLimit:
							{
								title: "Cents Limit",
								description: "The limit of fractional digits.",
								type: "number",
								"default": 2,
								minimum: 0
							},
							centsSeparator:
							{
								title: "Cents Separator",
								description: "The separator between whole and fractional amounts.",
								type: "text",
								"default": "."
							},
							clearPrefix:
							{
								title: "Clear Prefix",
								description: "Determines if the prefix is cleared on blur.",
								type: "boolean",
								"default": !1
							},
							clearSuffix:
							{
								title: "Clear Suffix",
								description: "Determines if the suffix is cleared on blur.",
								type: "boolean",
								"default": !1
							},
							insertPlusSign:
							{
								title: "Plus Sign",
								description: "Determines if a plus sign should be inserted for positive values.",
								type: "boolean",
								"default": !1
							},
							limit:
							{
								title: "Limit",
								description: "A limit of the length of the field.",
								type: "number",
								"default": void 0,
								minimum: 0
							},
							prefix:
							{
								title: "Prefix",
								description: "The prefix if any for the field.",
								type: "text",
								"default": "$"
							},
							round:
							{
								title: "Round",
								description: "Determines if the field is rounded. (Rounding is done when getValue is called and is not reflected in the UI)",
								type: "string",
								"enum": ["up", "down", "nearest", "none"],
								"default": "none"
							},
							suffix:
							{
								title: "Suffix",
								description: "The suffix if any for the field.",
								type: "text",
								"default": ""
							},
							thousandsSeparator:
							{
								title: "Thousands Separator",
								description: "The separator between thousands.",
								type: "string",
								"default": ","
							},
							unmask:
							{
								title: "Unmask",
								description: "If true then the resulting value for this field will be unmasked.  That is, the resulting value will be a float instead of a string (with the prefix, suffix, etc. removed).",
								type: "boolean",
								"default": !0
							}
						}
					}
				},
				getSchemaOfOptions: function()
				{
					return n.merge(this.base(), this.getSchemaOfPriceFormatOptions())
				},
				getOptionsForOptions: function()
				{
					return n.merge(this.base(),
					{
						fields:
						{
							allowNegative:
							{
								type: "checkbox"
							},
							centsLimit:
							{
								type: "number"
							},
							centsSeparator:
							{
								type: "text"
							},
							clearPrefix:
							{
								type: "checkbox"
							},
							clearSuffix:
							{
								type: "checkbox"
							},
							insertPlusSign:
							{
								type: "checkbox"
							},
							limit:
							{
								type: "number"
							},
							prefix:
							{
								type: "text"
							},
							round:
							{
								type: "select"
							},
							suffix:
							{
								type: "text"
							},
							thousandsSeparator:
							{
								type: "string"
							},
							unmask:
							{
								type: "checkbox"
							}
						}
					})
				}
			}), n.registerFieldClass("currency", n.Fields.CurrencyField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.DateField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "date"
				},
				getDefaultFormat: function()
				{
					return t.defaultDateFormat
				},
				getDefaultExtraFormats: function()
				{
					return []
				},
				setup: function()
				{
					var e = this;
					if(this.base(), e.options.picker || (e.options.picker = {}), "undefined" == typeof e.options.picker.useCurrent && (e.options.picker.useCurrent = !1), e.options.picker.format && (e.options.dateFormat = e.options.picker.format), e.options.dateFormat || (e.options.dateFormat = e.getDefaultFormat()), e.options.picker.format || (e.options.picker.format = e.options.dateFormat), e.options.picker.locale || (e.options.picker.locale = t.defaultLocale), e.options.picker.dayViewHeaderFormat || (e.options.picker.dayViewHeaderFormat = "MMMM YYYY"), !e.options.picker.extraFormats)
					{
						var n = e.getDefaultExtraFormats();
						n && (e.options.picker.extraFormats = n)
					}
					"undefined" == typeof e.options.manualEntry && (e.options.manualEntry = !1)
				},
				onKeyPress: function(e)
				{
					return this.options.manualEntry ? (e.preventDefault(), void e.stopImmediatePropagation()) : void this.base(e);
				},
				onKeyDown: function(e)
				{
					return this.options.manualEntry ? (e.preventDefault(), void e.stopImmediatePropagation()) : void this.base(e)
				},
				beforeRenderControl: function(e, t)
				{
					this.field.css("position", "relative"), t()
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						"display" !== i.view.type && e.fn.datetimepicker && (i.getControlEl().datetimepicker(i.options.picker), i.picker = i.getControlEl().data("DateTimePicker"), i.picker && i.options.dateFormat && i.picker.format(i.options.dateFormat), i.picker && (i.options.dateFormat = i.picker.format()), i.getFieldEl().on("dp.change", function(e)
						{
							setTimeout(function()
							{
								i.onChange.call(i, e), i.triggerWithPropagation("change", e)
							}, 250)
						}), i.data && i.picker.date(i.data)), n()
					})
				},
				setManualEntry: function(e)
				{
					this.options.manualEntry = e
				},
				getDate: function()
				{
					var e = this,
						t = null;
					try
					{
						t = e.picker ? e.picker.date() ? e.picker.date()._d : null : new Date(this.getValue())
					}
					catch(n)
					{
						console.error(n)
					}
					return t
				},
				date: function()
				{
					return this.getDate()
				},
				onChange: function(e)
				{
					this.base(), this.refreshValidationState()
				},
				isAutoFocusable: function()
				{
					return !1
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateDateFormat();
					return n.invalidDate = {
						message: i ? "" : t.substituteTokens(this.getMessage("invalidDate"), [this.options.dateFormat]),
						status: i
					}, e && n.invalidDate.status
				},
				_validateDateFormat: function()
				{
					var e = this,
						n = !0;
					if(e.options.dateFormat)
					{
						var i = e.getValue();
						if(i || e.isRequired())
						{
							var a = [];
							if(a.push(e.options.dateFormat), e.options.picker && e.options.picker.extraFormats)
								for(var r = 0; r < e.options.picker.extraFormats.length; r++) a.push(e.options.picker.extraFormats[r]);
							for(var r = 0; r < a.length; r++) n = n || t.moment(i, e.options.dateFormat, !0).isValid()
						}
					}
					return n
				},
				setValue: function(e)
				{
					var n = this;
					this.base(e), this.picker && t.moment(e, n.options.dateFormat, !0).isValid() && this.picker.date(e)
				},
				destroy: function()
				{
					this.base(), this.picker = null
				},
				getTitle: function()
				{
					return "Date Field"
				},
				getDescription: function()
				{
					return "Date Field"
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							format:
							{
								title: "Format",
								description: "Property data format",
								type: "string",
								"default": "date",
								"enum": ["date"],
								readonly: !0
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							dateFormat:
							{
								title: "Date Format",
								description: "Date format (using moment.js format)",
								type: "string"
							},
							picker:
							{
								title: "DatetimePicker options",
								description: "Options that are supported by the <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>.",
								type: "any"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							dateFormat:
							{
								type: "text"
							},
							picker:
							{
								type: "any"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidDate: "Invalid date for format {0}"
			}), t.registerFieldClass("date", t.Fields.DateField), t.registerDefaultFormatFieldMapping("date", "date")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.DatetimeField = t.Fields.DateField.extend(
			{
				getFieldType: function()
				{
					return "datetime"
				},
				getDefaultFormat: function()
				{
					return t.defaultDateFormat + " " + t.defaultTimeFormat
				},
				getDefaultExtraFormats: function()
				{
					return [t.defaultDateFormat + " hh:mm:ss a", t.defaultDateFormat + " HH:mm", t.defaultDateFormat]
				},
				setup: function()
				{
					this.base()
				},
				getTitle: function()
				{
					return "Datetime Field"
				},
				getDescription: function()
				{
					return "Datetime Field based on <a href='http://eonasdan.github.io/bootstrap-datetimepicker/'>Bootstrap DateTime Picker</a>."
				}
			}), t.registerFieldClass("datetime", t.Fields.DatetimeField), t.registerDefaultFormatFieldMapping("datetime", "datetime"), t.registerDefaultFormatFieldMapping("date-time", "datetime")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.EditorField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "editor"
				},
				setup: function()
				{
					var e = this;
					this.base(), e.options.aceTheme || (e.options.aceTheme = "ace/theme/chrome"), e.options.aceMode || (e.options.aceMode = "ace/mode/json"), "undefined" == typeof e.options.beautify && (e.options.beautify = !0), e.options.beautify && this.data && ("ace/mode/json" === e.options.aceMode && (t.isObject(this.data) ? this.data = JSON.stringify(this.data, null, "    ") : t.isString(this.data) && (this.data = JSON.stringify(JSON.parse(this.data), null, "    "))), "ace/mode/html" === e.options.aceMode && "undefined" != typeof html_beautify && (this.data = html_beautify(this.data)), "ace/mode/css" === e.options.aceMode && "undefined" != typeof css_beautify && (this.data = css_beautify(this.data)), "ace/mode/javascript" === e.options.aceMode && "undefined" != typeof js_beautify && (this.data = js_beautify(this.data))), "ace/mode/json" === e.options.aceMode && (this.data && "{}" !== this.data || (this.data = "{\n	\n}"))
				},
				afterRenderControl: function(n, i)
				{
					var a = this;
					this.base(n, function()
					{
						if(a.control)
						{
							var n = a.options.aceHeight;
							n && e(a.control).css("height", n);
							var r = a.options.aceWidth;
							r || (r = "100%"), e(a.control).css("width", r)
						}
						var o = e(a.control)[0];
						if(!ace && window.ace && (ace = window.ace), ace)
						{
							a.editor = ace.edit(o), a.editor.setOptions(
							{
								maxLines: 1 / 0
							}), a.editor.getSession().setUseWrapMode(!0);
							var l = a.options.aceTheme;
							a.editor.setTheme(l);
							var s = a.options.aceMode;
							if(a.editor.getSession().setMode(s), a.editor.renderer.setHScrollBarAlwaysVisible(!1), a.editor.setShowPrintMargin(!1), a.editor.setValue(a.data), a.editor.clearSelection(), a.editor.getSession().getUndoManager().reset(), a.options.aceFitContentHeight)
							{
								var u = function()
								{
									var t = !1;
									0 === a.editor.renderer.lineHeight && (t = !0, a.editor.renderer.lineHeight = 16);
									var n = a.editor.getSession().getScreenLength() * a.editor.renderer.lineHeight + a.editor.renderer.scrollBar.getWidth();
									e(a.control).height(n.toString() + "px"), a.editor.resize(), t && window.setTimeout(function()
									{
										a.editor.clearSelection()
									}, 100)
								};
								u(), a.editor.getSession().on("change", u)
							}
							a.schema.readonly && a.editor.setReadOnly(!0), e(o).bind("destroyed", function()
							{
								a.editor && (a.editor.destroy(), a.editor = null)
							})
						}
						else t.logError("Editor Field is missing the 'ace' Cloud 9 Editor");
						i()
					})
				},
				destroy: function()
				{
					this.editor && (this.editor.destroy(), this.editor = null), this.base()
				},
				getEditor: function()
				{
					return this.editor
				},
				handleValidate: function()
				{
					var e = this.base(),
						n = this.validation,
						i = this._validateWordCount();
					n.wordLimitExceeded = {
						message: i ? "" : t.substituteTokens(this.getMessage("wordLimitExceeded"), [this.options.wordlimit]),
						status: i
					};
					var a = this._validateEditorAnnotations();
					return n.editorAnnotationsExist = {
						message: a ? "" : this.getMessage("editorAnnotationsExist"),
						status: a
					}, e && n.wordLimitExceeded.status && n.editorAnnotationsExist.status
				},
				_validateEditorAnnotations: function()
				{
					if(this.editor)
					{
						var e = this.editor.getSession().getAnnotations();
						if(e && e.length > 0) return !1
					}
					return !0
				},
				_validateWordCount: function()
				{
					if(this.options.wordlimit && this.options.wordlimit > -1)
					{
						var e = this.editor.getValue();
						if(e)
						{
							var t = e.split(" ").length;
							if(t > this.options.wordlimit) return !1
						}
					}
					return !0
				},
				onDependentReveal: function()
				{
					this.editor && this.editor.resize()
				},
				setValue: function(e)
				{
					var n = this;
					this.editor && ("object" == n.schema.type && t.isObject(e) && (e = JSON.stringify(e, null, "    ")), this.editor.setValue(e), n.editor.clearSelection()), this.base(e)
				},
				getControlValue: function()
				{
					var e = null;
					return this.editor && (e = this.editor.getValue()), "object" == this.schema.type && (e = e ? JSON.parse(e) :
					{}), e
				},
				getTitle: function()
				{
					return "Editor"
				},
				getDescription: function()
				{
					return "Editor"
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							aceTheme:
							{
								title: "ACE Editor Theme",
								description: "Specifies the theme to set onto the editor instance",
								type: "string",
								"default": "ace/theme/twilight"
							},
							aceMode:
							{
								title: "ACE Editor Mode",
								description: "Specifies the mode to set onto the editor instance",
								type: "string",
								"default": "ace/mode/javascript"
							},
							aceWidth:
							{
								title: "ACE Editor Height",
								description: "Specifies the width of the wrapping div around the editor",
								type: "string",
								"default": "100%"
							},
							aceHeight:
							{
								title: "ACE Editor Height",
								description: "Specifies the height of the wrapping div around the editor",
								type: "string",
								"default": "300px"
							},
							aceFitContentHeight:
							{
								title: "ACE Fit Content Height",
								description: "Configures the ACE Editor to auto-fit its height to the contents of the editor",
								type: "boolean",
								"default": !1
							},
							wordlimit:
							{
								title: "Word Limit",
								description: "Limits the number of words allowed in the text area.",
								type: "number",
								"default": -1
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							aceTheme:
							{
								type: "text"
							},
							aceMode:
							{
								type: "text"
							},
							wordlimit:
							{
								type: "integer"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				wordLimitExceeded: "The maximum word limit of {0} has been exceeded.",
				editorAnnotationsExist: "The editor has errors in it that must be corrected"
			}), t.registerFieldClass("editor", t.Fields.EditorField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.EmailField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "email"
				},
				setup: function()
				{
					this.inputType = "email", this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.email)
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidEmail")), e
				},
				getTitle: function()
				{
					return "Email Field"
				},
				getDescription: function()
				{
					return "Email Field."
				},
				getSchemaOfSchema: function()
				{
					var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.email;
					return t.merge(this.base(),
					{
						properties:
						{
							pattern:
							{
								title: "Pattern",
								description: "Field Pattern in Regular Expression",
								type: "string",
								"default": e,
								"enum": [e],
								readonly: !0
							},
							format:
							{
								title: "Format",
								description: "Property data format",
								type: "string",
								"default": "email",
								"enum": ["email"],
								readonly: !0
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidEmail: "Invalid Email address e.g. info@cloudcms.com"
			}), t.registerFieldClass("email", t.Fields.EmailField), t.registerDefaultFormatFieldMapping("email", "email")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.GridField = t.Fields.ArrayField.extend(
			{
				getFieldType: function()
				{
					return "grid"
				},
				setup: function()
				{
					this.base(), "undefined" == typeof this.options.grid && (this.options.grid = {})
				},
				afterRenderContainer: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						var t = [],
							a = [];
						for(var r in i.options.fields)
						{
							var o = i.options.fields[r],
								l = r;
							o.label && (l = o.label), a.push(l)
						}
						t.push(a);
						for(var s = 0; s < i.data.length; s++)
						{
							var u = [];
							for(var c in i.data[s]) u.push(i.data[s][c]);
							t.push(u)
						}
						var d = e(i.container).find(".alpaca-container-grid-holder"),
							p = i.options.grid;
						p.data = t, e(d).handsontable(p), n()
					})
				},
				getType: function()
				{
					return "array"
				},
				getTitle: function()
				{
					return "Grid Field"
				},
				getDescription: function()
				{
					return "Renders array items into a grid"
				}
			}), t.registerFieldClass("grid", t.Fields.GridField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ImageField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "image"
				},
				getTitle: function()
				{
					return "Image Field"
				},
				getDescription: function()
				{
					return "Image Field."
				}
			}), t.registerFieldClass("image", t.Fields.ImageField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.IntegerField = t.Fields.NumberField.extend(
			{
				getFieldType: function()
				{
					return "integer"
				},
				getControlValue: function()
				{
					var e = this.base();
					return "undefined" == typeof e || "" == e ? e : parseInt(e, 10)
				},
				onChange: function(e)
				{
					this.base(), this.slider && this.slider.slider("value", this.getValue())
				},
				postRender: function(n)
				{
					var i = this;
					this.base(function()
					{
						i.options.slider && (t.isEmpty(i.schema.maximum) || t.isEmpty(i.schema.minimum) || i.control && (i.control.after('<div id="slider"></div>'), i.slider = e("#slider", i.control.parent()).slider(
						{
							value: i.getValue(),
							min: i.schema.minimum,
							max: i.schema.maximum,
							slide: function(e, t)
							{
								i.setValue(t.value), i.refreshValidationState()
							}
						}))), n()
					})
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation,
						n = this._validateInteger();
					return t.stringNotANumber = {
						message: n ? "" : this.getMessage("stringNotAnInteger"),
						status: n
					}, e
				},
				_validateInteger: function()
				{
					var e = this._getControlVal();
					if("number" == typeof e && (e = "" + e), t.isValEmpty(e)) return !0;
					var n = t.testRegex(t.regexps.integer, e);
					if(!n) return !1;
					var i = this.getValue();
					return !isNaN(i)
				},
				getType: function()
				{
					return "integer"
				},
				getTitle: function()
				{
					return "Integer Field"
				},
				getDescription: function()
				{
					return "Field for integers."
				},
				getSchemaOfSchema: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							minimum:
							{
								title: "Minimum",
								description: "Minimum value of the property.",
								type: "integer"
							},
							maximum:
							{
								title: "Maximum",
								description: "Maximum value of the property.",
								type: "integer"
							},
							divisibleBy:
							{
								title: "Divisible By",
								description: "Property value must be divisible by this number.",
								type: "integer"
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							minimum:
							{
								helper: "Minimum value of the field.",
								type: "integer"
							},
							maximum:
							{
								helper: "Maximum value of the field.",
								type: "integer"
							},
							divisibleBy:
							{
								helper: "Property value must be divisible by this number.",
								type: "integer"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							slider:
							{
								title: "Slider",
								description: "Generate jQuery UI slider control with the field if true.",
								type: "boolean",
								"default": !1
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							slider:
							{
								rightLabel: "Slider control ?",
								helper: "Generate slider control if selected.",
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				stringNotAnInteger: "This value is not an integer."
			}), t.registerFieldClass("integer", t.Fields.IntegerField), t.registerDefaultSchemaFieldMapping("integer", "integer")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.IPv4Field = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "ipv4"
				},
				setup: function()
				{
					this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.ipv4)
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidIPv4")), e
				},
				getTitle: function()
				{
					return "IP Address Field"
				},
				getDescription: function()
				{
					return "IP Address Field."
				},
				getSchemaOfSchema: function()
				{
					var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.ipv4;
					return t.merge(this.base(),
					{
						properties:
						{
							pattern:
							{
								title: "Pattern",
								description: "Field Pattern in Regular Expression",
								type: "string",
								"default": e,
								readonly: !0
							},
							format:
							{
								title: "Format",
								description: "Property data format",
								type: "string",
								"enum": ["ip-address"],
								"default": "ip-address",
								readonly: !0
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidIPv4: "Invalid IPv4 address, e.g. 192.168.0.1"
			}), t.registerFieldClass("ipv4", t.Fields.IPv4Field), t.registerDefaultFormatFieldMapping("ip-address", "ipv4")
		}(jQuery),
		function(e)
		{
			function t(e)
			{
				if("string" == typeof e.data)
				{
					var t = e.handler,
						n = e.data.toLowerCase().split(" ");
					e.handler = function(e)
					{
						if(this === e.target || !/textarea|select/i.test(e.target.nodeName) && "text" !== e.target.type)
						{
							var i = "keypress" !== e.type && jQuery.hotkeys.specialKeys[e.which],
								a = String.fromCharCode(e.which).toLowerCase(),
								r = "",
								o = {};
							e.altKey && "alt" !== i && (r += "alt+"), e.ctrlKey && "ctrl" !== i && (r += "ctrl+"), e.metaKey && !e.ctrlKey && "meta" !== i && (r += "meta+"), e.shiftKey && "shift" !== i && (r += "shift+"), i ? o[r + i] = !0 : (o[r + a] = !0, o[r + jQuery.hotkeys.shiftNums[a]] = !0, "shift+" === r && (o[jQuery.hotkeys.shiftNums[a]] = !0));
							for(var l = 0, s = n.length; s > l; l++)
								if(o[n[l]]) return t.apply(this, arguments)
						}
					}
				}
			}
			var n = e.alpaca;
			n.Fields.JSONField = n.Fields.TextAreaField.extend(
			{
				getFieldType: function()
				{
					return "json"
				},
				setValue: function(e)
				{
					(n.isObject(e) || "object" == typeof e) && (e = JSON.stringify(e, null, 3)), this.base(e)
				},
				getControlValue: function()
				{
					var e = this.base();
					return e && n.isString(e) && (e = JSON.parse(e)), e
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation,
						n = this._validateJSON();
					return t.stringNotAJSON = {
						message: n.status ? "" : this.getMessage("stringNotAJSON") + " " + n.message,
						status: n.status
					}, e && t.stringNotAJSON.status
				},
				_validateJSON: function()
				{
					var e = this.control.val();
					if(n.isValEmpty(e)) return {
						status: !0
					};
					try
					{
						var t = JSON.parse(e);
						return this.setValue(JSON.stringify(t, null, 3)),
						{
							status: !0
						}
					}
					catch(i)
					{
						return {
							status: !1,
							message: i.message
						}
					}
				},
				afterRenderControl: function(e, t)
				{
					var n = this;
					this.base(e, function()
					{
						n.control && (n.control.bind("keypress", function(e)
						{
							var t = e.keyCode || e.wich;
							34 === t && n.control.insertAtCaret('"'), 123 === t && n.control.insertAtCaret("}"), 91 === t && n.control.insertAtCaret("]")
						}), n.control.bind("keypress", "Ctrl+l", function()
						{
							n.getFieldEl().removeClass("alpaca-field-focused"), n.refreshValidationState()
						}), n.control.attr("title", "Type Ctrl+L to format and validate the JSON string.")), t()
					})
				},
				getTitle: function()
				{
					return "JSON Editor"
				},
				getDescription: function()
				{
					return "Editor for JSON objects with basic validation and formatting."
				}
			}), n.registerMessages(
			{
				stringNotAJSON: "This value is not a valid JSON string."
			}), n.registerFieldClass("json", n.Fields.JSONField), e.fn.insertAtCaret = function(e)
			{
				return this.each(function()
				{
					if(document.selection) this.focus(), sel = document.selection.createRange(), sel.text = e, this.focus();
					else if(this.selectionStart || "0" == this.selectionStart)
					{
						var t = this.selectionStart,
							n = this.selectionEnd,
							i = this.scrollTop;
						this.value = this.value.substring(0, t) + e + this.value.substring(n, this.value.length), this.focus(), this.selectionStart = t, this.selectionEnd = t, this.scrollTop = i
					}
					else this.value += e, this.focus()
				})
			}, jQuery.hotkeys = {
				version: "0.8",
				specialKeys:
				{
					8: "backspace",
					9: "tab",
					13: "return",
					16: "shift",
					17: "ctrl",
					18: "alt",
					19: "pause",
					20: "capslock",
					27: "esc",
					32: "space",
					33: "pageup",
					34: "pagedown",
					35: "end",
					36: "home",
					37: "left",
					38: "up",
					39: "right",
					40: "down",
					45: "insert",
					46: "del",
					96: "0",
					97: "1",
					98: "2",
					99: "3",
					100: "4",
					101: "5",
					102: "6",
					103: "7",
					104: "8",
					105: "9",
					106: "*",
					107: "+",
					109: "-",
					110: ".",
					111: "/",
					112: "f1",
					113: "f2",
					114: "f3",
					115: "f4",
					116: "f5",
					117: "f6",
					118: "f7",
					119: "f8",
					120: "f9",
					121: "f10",
					122: "f11",
					123: "f12",
					144: "numlock",
					145: "scroll",
					191: "/",
					224: "meta"
				},
				shiftNums:
				{
					"`": "~",
					1: "!",
					2: "@",
					3: "#",
					4: "$",
					5: "%",
					6: "^",
					7: "&",
					8: "*",
					9: "(",
					0: ")",
					"-": "_",
					"=": "+",
					";": ": ",
					"'": '"',
					",": "<",
					".": ">",
					"/": "?",
					"\\": "|"
				}
			}, jQuery.each(["keydown", "keyup", "keypress"], function()
			{
				jQuery.event.special[this] = {
					add: t
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.LowerCaseField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "lowercase"
				},
				setup: function()
				{
					this.base(), this.data && (this.data = this.data.toLowerCase())
				},
				setValue: function(e)
				{
					if(!e) return this.base(e);
					var t = e.toLowerCase();
					t != this.getValue() && this.base(t)
				},
				onKeyPress: function(e)
				{
					this.base(e);
					var n = this;
					t.later(25, this, function()
					{
						var e = n.getValue();
						n.setValue(e)
					})
				},
				getTitle: function()
				{
					return "Lowercase Text"
				},
				getDescription: function()
				{
					return "Text field for lowercase text."
				}
			}), t.registerFieldClass("lowercase", t.Fields.LowerCaseField), t.registerDefaultFormatFieldMapping("lowercase", "lowercase")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.MapField = t.Fields.ArrayField.extend(
			{
				getFieldType: function()
				{
					return "map"
				},
				getType: function()
				{
					return "object"
				},
				setup: function()
				{
					if(this.data && t.isObject(this.data))
					{
						var n = [];
						e.each(this.data, function(e, i)
						{
							var a = t.copyOf(i);
							a._key = e, n.push(a)
						}), this.data = n
					}
					this.base(), t.mergeObject(this.options,
					{
						forceRevalidation: !0
					}), t.isEmpty(this.data)
				},
				getContainerValue: function()
				{
					if(0 !== this.children.length || this.isRequired())
					{
						for(var e = {}, t = 0; t < this.children.length; t++)
						{
							var n = this.children[t].getValue(),
								i = n._key;
							i && (delete n._key, e[i] = n)
						}
						return e
					}
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation,
						n = this._validateMapKeysNotEmpty();
					t.keyMissing = {
						message: n ? "" : this.getMessage("keyMissing"),
						status: n
					};
					var i = this._validateMapKeysUnique();
					return t.keyNotUnique = {
						message: i ? "" : this.getMessage("keyNotUnique"),
						status: i
					}, e && t.keyMissing.status && t.keyNotUnique.status
				},
				_validateMapKeysNotEmpty: function()
				{
					for(var e = !0, t = 0; t < this.children.length; t++)
					{
						var n = this.children[t].getValue(),
							i = n._key;
						if(!i)
						{
							e = !1;
							break
						}
					}
					return e
				},
				_validateMapKeysUnique: function()
				{
					for(var e = !0, t = {}, n = 0; n < this.children.length; n++)
					{
						var i = this.children[n].getValue(),
							a = i._key;
						t[a] && (e = !1), t[a] = a
					}
					return e
				},
				getTitle: function()
				{
					return "Map Field"
				},
				getDescription: function()
				{
					return "Field for objects with key/value pairs that share the same schema for values."
				}
			}), t.registerFieldClass("map", t.Fields.MapField), t.registerMessages(
			{
				keyNotUnique: "Keys of map field are not unique.",
				keyMissing: "Map contains an empty key."
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.OptionTreeField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "optiontree"
				},
				setup: function()
				{
					var e = this;
					this.base(), this.options.tree || (this.options.tree = {}), this.options.tree.selectors || (this.options.tree.selectors = {}), this.options.tree.order || (this.options.tree.order = []);
					for(var n in this.options.tree.selectors)
					{
						if(!this.options.tree.selectors[n].schema) return void t.logError("OptionTree selector for: " + n + " is missing schema");
						this.options.tree.selectors[n].options || (this.options.tree.selectors[n].options = {})
					}
					this.options.tree.data || (this.options.tree.data = []);
					for(var i = 0; i < this.options.tree.data.length; i++)
					{
						var a = this.options.tree.data[i];
						if(a.attributes)
							for(var n in a.attributes) this.options.tree.selectors[n] || (this.options.tree.selectors[n] = {}), this.options.tree.selectors[n].label || (this.options.tree.selectors[n].options.noneLabel = "Choose..."), this.options.tree.selectors[n].type || (this.options.tree.selectors[n].options.type = "select")
					}
					if(!e.options.tree.order)
					{
						e.options.tree.order = [];
						for(var n in e.options.tree.selectors) e.options.tree.order.push(e.options.tree.selectors[n])
					}
					"undefined" == typeof e.options.tree.horizontal && (e.options.tree.horizontal = !0), this.locationValueLists = {}, this.locationValues = {};
					for(var i = 0; i < e.options.tree.data.length; i++)
						if(e.options.tree.data[i].attributes)
						{
							var r = "root";
							for(var n in e.options.tree.data[i].attributes)
							{
								var o = e.options.tree.data[i].attributes[n],
									l = this.locationValueLists[r];
								l || (l = [], this.locationValueLists[r] = l);
								for(var s = !1, u = 0; u < l.length; u++)
									if(l[u].value === o)
									{
										s = !0;
										break
									}
								s || l.push(
								{
									text: o,
									value: o
								}), r.length > 0 && (r += "~"), r += n + "=" + o
							}
							this.locationValues[r] = e.options.tree.data[i].value
						}
					this.currentAttributes = {}, this.controls = {}
				},
				toLocation: function(e)
				{
					var t = "root";
					for(var n in e)
					{
						var i = e[n];
						t.length > 0 && (t += "~"), t += n + "=" + i
					}
					return t
				},
				existsLocationWithPrefix: function(e)
				{
					var t = !1;
					for(var n in this.locationValueLists)
						if(n.indexOf(e) > -1)
						{
							t = !0;
							break
						}
					return t
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					i.optionTreeHolder = e(i.field).find(".optiontree"), i.options.tree.horizontal && e(i.field).addClass("optiontree-horizontal"), this.base(t, function()
					{
						i.refreshOptionTreeControls(function()
						{
							n()
						})
					})
				},
				refreshOptionTreeControls: function(n)
				{
					var i = this;
					for(var a in i.controls) i.controls[a].hide();
					for(var r = 0, o = 0; o < i.options.tree.order.length; o++)
					{
						var l = i.options.tree.order[o];
						"undefined" != typeof i.currentAttributes[l] && null !== i.currentAttributes[l] && "" !== i.currentAttributes[l] && r++
					}
					var s = "root",
						u = [],
						c = 0,
						o = 0;
					do {
						if(o < i.options.tree.order.length)
						{
							var l = i.options.tree.order[o],
								d = o == i.options.tree.order.length - 1 || i.existsLocationWithPrefix(s + "~" + l + "=");
							if(d)
								if(r >= c)
								{
									if(i.controls[l]) i.controls[l].show(), s += "~" + l + "=" + i.currentAttributes[l];
									else
									{
										var p = i.options.tree.selectors[l],
											h = o + 1 === i.options.tree.order.length,
											f = function(t, n, a, r, o, l)
											{
												return function(s)
												{
													var u = a.schema,
														c = a.options;
													c || (c = {}), c.type || (c.type = "select"), "select" === c.type && (c.dataSource = function(e)
													{
														var t = i.toLocation(i.currentAttributes),
															n = i.locationValueLists[t];
														e(n)
													});
													var d = e("<div class='optiontree-selector'></div>");
													e(d).alpaca(
													{
														schema: u,
														options: c,
														postRender: function(a)
														{
															r[n] = a, e(o).append(d), a.selectorId = n, a.on("change", function()
															{
																var e = this.selectorId;
																i.currentAttributes[e] = this.getValue();
																for(var n = 0; n < i.options.tree.order.length; n++)
																	if(n > t)
																	{
																		var e = i.options.tree.order[n];
																		delete i.currentAttributes[e], r[e] && (r[e].destroy(), delete r[e])
																	}
																if(l)
																{
																	for(var a = null, n = 0; n < i.options.tree.data.length; n++)
																	{
																		var o = !0,
																			s = i.options.tree.data[n].attributes;
																		for(var u in i.currentAttributes)
																			if(s[u] !== i.currentAttributes[u])
																			{
																				o = !1;
																				break
																			}
																		o && (a = i.options.tree.data[n].value)
																	}
																	a && i.setValue(a)
																}
																i.refreshOptionTreeControls()
															}), a.show(), s()
														}
													})
												}
											}(o, l, p, i.controls, i.optionTreeHolder, h);
										u.push(f), s += "~" + l + "=" + i.currentAttributes[l]
									}
									c++
								}
							else i.controls[l] && (i.controls[l].destroy(), delete i.controls[l]);
							else i.controls[l] && (i.controls[l].destroy(), delete i.controls[l])
						}
						o++
					} while (o < i.options.tree.order.length);
					t.series(u, function()
					{
						n && n()
					})
				},
				getType: function()
				{
					return "any"
				},
				getTitle: function()
				{
					return "Option Tree"
				},
				getDescription: function()
				{
					return "Option Tree"
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							tree:
							{
								type: "object",
								properties:
								{
									options:
									{
										type: "object"
									},
									order:
									{
										type: "array",
										items:
										{
											type: "string"
										}
									},
									data:
									{
										type: "array",
										items:
										{
											type: "object",
											properties:
											{
												value:
												{
													type: "any"
												},
												attributes:
												{
													type: "object"
												}
											}
										}
									},
									horizontal:
									{
										type: "boolean"
									}
								}
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{}
					})
				}
			}), t.registerFieldClass("optiontree", t.Fields.OptionTreeField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.PasswordField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "password"
				},
				setup: function()
				{
					this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.password)
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidPassword")), e
				},
				getTitle: function()
				{
					return "Password Field"
				},
				getDescription: function()
				{
					return "Password Field."
				},
				getSchemaOfSchema: function()
				{
					var e = this.schema && this.schema.pattern ? this.schema.pattern : /^[0-9a-zA-Z\x20-\x7E]*$/;
					return t.merge(this.base(),
					{
						properties:
						{
							pattern:
							{
								title: "Pattern",
								description: "Field Pattern in Regular Expression",
								type: "string",
								"default": this.schema.pattern,
								"enum": [e],
								readonly: !0
							},
							format:
							{
								title: "Format",
								description: "Property data format",
								type: "string",
								"default": "password",
								"enum": ["password"],
								readonly: !0
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidPassword: "Invalid Password"
			}), t.registerFieldClass("password", t.Fields.PasswordField), t.registerDefaultFormatFieldMapping("password", "password")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.PersonalNameField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "personalname"
				},
				setValue: function(e)
				{
					if(!e) return this.base(e);
					for(var t = "", n = 0; n < e.length; n++) t += 0 === n ? e.charAt(n).toUpperCase() : " " === e.charAt(n - 1) || "-" === e.charAt(n - 1) || "'" === e.charAt(n - 1) ? e.charAt(n).toUpperCase() : e.charAt(n);
					t != this.getValue() && this.base(t)
				},
				onKeyPress: function(e)
				{
					this.base(e);
					var n = this;
					t.later(25, this, function()
					{
						var e = n.getValue();
						n.setValue(e)
					})
				},
				getTitle: function()
				{
					return "Personal Name"
				},
				getDescription: function()
				{
					return "Text Field for personal name with captical letter for first letter & after hyphen, space or apostrophe."
				}
			}), t.registerFieldClass("personalname", t.Fields.PersonalNameField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.PhoneField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					this.inputType = "tel", this.base(), this.schema.pattern || (this.schema.pattern = t.regexps.phone), t.isEmpty(this.options.maskString) && (this.options.maskString = "(999) 999-9999")
				},
				postRender: function(e)
				{
					this.base(function()
					{
						e()
					})
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidPhone")), e
				},
				getFieldType: function()
				{
					return "phone"
				},
				getTitle: function()
				{
					return "Phone Field"
				},
				getDescription: function()
				{
					return "Phone Field."
				},
				getSchemaOfSchema: function()
				{
					var e = this.schema && this.schema.pattern ? this.schema.pattern : t.regexps.phone;
					return t.merge(this.base(),
					{
						properties:
						{
							pattern:
							{
								title: "Pattern",
								description: "Field Pattern in Regular Expression",
								type: "string",
								"default": e,
								"enum": [e],
								readonly: !0
							},
							format:
							{
								title: "Format",
								description: "Property data format",
								type: "string",
								"default": "phone",
								"enum": ["phone"],
								readonly: !0
							}
						}
					})
				},
				getOptionsForSchema: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							maskString:
							{
								title: "Field Mask String",
								description: "Expression for field mask",
								type: "string",
								"default": "(999) 999-9999"
							}
						}
					})
				}
			}), t.registerMessages(
			{
				invalidPhone: "Invalid Phone Number, e.g. (123) 456-9999"
			}), t.registerFieldClass("phone", t.Fields.PhoneField), t.registerDefaultFormatFieldMapping("phone", "phone")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.PickAColorField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					var t = this;
					this.pickAColorFieldAvailable = !1, t.isDisplayOnly() || "undefined" == typeof e.fn.pickAColor || (this.pickAColorFieldAvailable = !0), "undefined" != typeof this.options.pickacolor || t.pickAColorFieldAvailable || (this.inputType = "color"), this.base(), "undefined" == typeof this.options.pickacolor && (this.options.pickacolor = {
						showSpectrum: !0,
						showSavedColors: !0,
						saveColorsPerElement: !1,
						fadeMenuToggle: !0,
						showAdvanced: !0,
						showBasicColors: !0,
						showHexInput: !0,
						allowBlank: !0,
						inlineDropdown: !1
					}), "undefined" == typeof this.options.colors && (this.options.colors = {
						white: "#ffffff",
						clouds: "#ecf0f1",
						red: "#c0392b",
						orange: "#e67e22",
						yellow: "#f1c40f",
						green: "#27ae60",
						blue: "#2980b9",
						purple: "#8e44ad",
						dark: "#34495e",
						black: "#000000",
						brown: "#bb9977"
					}), this.options.pickacolor && "undefined" == typeof this.options.pickacolor.basicColors && (this.options.pickacolor.basicColors = this.options.colors), "undefined" == typeof this.options.pickacolor.inlineDropdown && (this.options.pickacolor.inlineDropdown = !1)
				},
				getFieldType: function()
				{
					return "pickacolor"
				},
				getType: function()
				{
					return "string"
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						i.control && i.pickAColorFieldAvailable && i.options.pickacolor && (i.data && e(i.control).attr("value", i.data), e(i.control).addClass("pick-a-color"), e(i.control).pickAColor(i.options.pickacolor), e(i.control).on("change", function(t)
						{
							i.setValue(e(this).val())
						})), n()
					})
				},
				getTitle: function()
				{
					return "Pick-A-Color Field"
				},
				getDescription: function()
				{
					return "A color picker for selecting hexadecimal color values"
				}
			}), t.registerFieldClass("pickacolor", t.Fields.PickAColorField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.SearchField = t.Fields.TextField.extend(
			{
				setup: function()
				{
					this.inputType = "search", this.base(), this.options.attributes.results = 5
				},
				getFieldType: function()
				{
					return "search"
				},
				getType: function()
				{
					return "string"
				},
				getTitle: function()
				{
					return "Search Field"
				},
				getDescription: function()
				{
					return "A search box field"
				}
			}), t.registerFieldClass("search", t.Fields.SearchField), t.registerDefaultSchemaFieldMapping("search", "search")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.usHoldings = {}, t.usHoldings.territories = {
				"American Samoa": "AS",
				"District Of Columbia": "DC",
				"Federated States Of Micronesia": "FM",
				Guam: "GU",
				"Marshall Islands": "MH",
				"Northern Mariana Islands": "MP",
				Palau: "PW",
				"Puerto Rico": "PR",
				"Virgin Islands": "VI"
			}, t.usHoldings.states = {
				Alabama: "AL",
				Alaska: "AK",
				Arizona: "AZ",
				Arkansas: "AR",
				California: "CA",
				Colorado: "CO",
				Connecticut: "CT",
				Delaware: "DE",
				Florida: "FL",
				Georgia: "GA",
				Hawaii: "HI",
				Idaho: "ID",
				Illinois: "IL",
				Indiana: "IN",
				Iowa: "IA",
				Kansas: "KS",
				Kentucky: "KY",
				Louisiana: "LA",
				Maine: "ME",
				Maryland: "MD",
				Massachusetts: "MA",
				Michigan: "MI",
				Minnesota: "MN",
				Mississippi: "MS",
				Missouri: "MO",
				Montana: "MT",
				Nebraska: "NE",
				Nevada: "NV",
				"New Hampshire": "NH",
				"New Jersey": "NJ",
				"New Mexico": "NM",
				"New York": "NY",
				"North Carolina": "NC",
				"North Dakota": "ND",
				Ohio: "OH",
				Oklahoma: "OK",
				Oregon: "OR",
				Pennsylvania: "PA",
				"Rhode Island": "RI",
				"South Carolina": "SC",
				"South Dakota": "SD",
				Tennessee: "TN",
				Texas: "TX",
				Utah: "UT",
				Vermont: "VT",
				Virginia: "VA",
				Washington: "WA",
				"West Virginia": "WV",
				Wisconsin: "WI",
				Wyoming: "WY"
			}, t.Fields.StateField = t.Fields.SelectField.extend(
			{
				getFieldType: function()
				{
					return "state"
				},
				setup: function()
				{
					t.isUndefined(this.options.capitalize) && (this.options.capitalize = !1), t.isUndefined(this.options.includeStates) && (this.options.includeStates = !0), t.isUndefined(this.options.includeTerritories) && (this.options.includeTerritories = !0), t.isUndefined(this.options.format) && (this.options.format = "name"), "name" === this.options.format || "code" === this.options.format || (t.logError("The configured state format: " + this.options.format + " is not a legal value [name, code]"), this.options.format = "name");
					var e = t.retrieveUSHoldings(this.options.includeStates, this.options.includeTerritories, "code" === this.options.format, this.options.capitalize);
					this.schema["enum"] = e.keys, this.options.optionLabels = e.values, this.base()
				},
				getTitle: function()
				{
					return "State Field"
				},
				getDescription: function()
				{
					return "Provides a dropdown selector of states and/or territories in the United States, keyed by their two-character code."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							format:
							{
								title: "Format",
								description: "How to represent the state values in the selector",
								type: "string",
								"default": "name",
								"enum": ["name", "code"],
								readonly: !0
							},
							capitalize:
							{
								title: "Capitalize",
								description: "Whether the values should be capitalized",
								type: "boolean",
								"default": !1,
								readonly: !0
							},
							includeStates:
							{
								title: "Include States",
								description: "Whether to include the states of the United States",
								type: "boolean",
								"default": !0,
								readonly: !0
							},
							includeTerritories:
							{
								title: "Include Territories",
								description: "Whether to include the territories of the United States",
								type: "boolean",
								"default": !0,
								readonly: !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							},
							capitalize:
							{
								type: "checkbox"
							},
							includeStates:
							{
								type: "checkbox"
							},
							includeTerritories:
							{
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerFieldClass("state", t.Fields.StateField), t.registerDefaultFormatFieldMapping("state", "state"), t.retrieveUSHoldings = function()
			{
				return function(n, i, a, r)
				{
					var o = {
							keys: [],
							values: []
						},
						l = e.extend(
						{}, n ? t.usHoldings.states :
						{}, i ? t.usHoldings.territories :
						{}),
						s = Object.keys(l);
					s.sort();
					for(var u in s)
					{
						var c = s[u],
							d = l[c],
							p = a ? d : c;
						r && (p = p.toUpperCase()), o.keys.push(d), o.values.push(p)
					}
					return o
				}
			}()
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.SummernoteField = t.Fields.TextAreaField.extend(
			{
				getFieldType: function()
				{
					return "summernote"
				},
				setup: function()
				{
					this.data || (this.data = ""), this.base(), "undefined" == typeof this.options.summernote && (this.options.summernote = {
						height: null,
						minHeight: null,
						maxHeight: null,
						focus: !0
					})
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						!i.isDisplayOnly() && i.control && e.fn.summernote && i.on("ready", function()
						{
							e(i.control).summernote(i.options.summernote)
						}), e(i.control).bind("destroyed", function()
						{
							try
							{
								e(i.control).summernote("destroy")
							}
							catch(t)
							{}
						}), n()
					})
				},
				getTitle: function()
				{
					return "Summernote Editor"
				},
				getDescription: function()
				{
					return "Provides an instance of a Summernote Editor control for use in editing HTML."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							summernote:
							{
								title: "Summernote Editor options",
								description: "Use this entry to provide configuration options to the underlying Summernote plugin.",
								type: "any"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							summernote:
							{
								type: "any"
							}
						}
					})
				}
			}), t.registerFieldClass("summernote", t.Fields.SummernoteField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TableField = t.Fields.ArrayField.extend(
			{
				setup: function()
				{
					var n = this;
					n.options || (n.options = {}), "undefined" == typeof n.options.animate && (n.options.animate = !1), "undefined" == typeof this.options.toolbarSticky && (this.options.toolbarSticky = !0), this.base(), this.options.items.type || (this.options.items.type = "tablerow"), this.options.datatable && (this.options.datatables = this.options.datatable), "undefined" == typeof this.options.datatables && (this.options.datatables = {
						paging: !1,
						lengthChange: !1,
						info: !1,
						searching: !1,
						ordering: !0
					}, "undefined" == typeof this.options.dragRows && (this.options.dragRows = !1), this.options.readonly && (this.options.dragRows = !1), this.isDisplayOnly() && (this.options.dragRows = !1)), "undefined" == typeof this.options.showActionsColumn && (this.options.showActionsColumn = !0, this.options.readonly && (this.options.showActionsColumn = !1), this.isDisplayOnly() && (this.options.showActionsColumn = !1)), this.options.datatables.columns = [], e.fn.dataTableExt && !e.fn.DataTable.ext.type.search.alpaca && (e.fn.DataTable.ext.order.alpaca = function(e, t)
					{
						n.data = n.getValue();
						var i = null,
							a = 0;
						for(var r in n.schema.items.properties)
						{
							if(a === t)
							{
								i = r;
								break
							}
							a++
						}
						var o = [];
						if(n.data)
							for(var l = 0; l < n.data.length; l++) o.push(n.data[l][i]);
						return o.sort(), o
					}, e.fn.dataTableExt.afnFiltering.push(function(n, i, a, r, o)
					{
						var l = e(n.nTableWrapper).find(".dataTables_filter input[type='search']").val();
						if(!l) return !0;
						l = "" + l, l = e.trim(l), l = l.toLowerCase();
						for(var s = !1, u = 0; u < r.length; u++)
						{
							var c = r[u];
							if(c)
							{
								var d = c.indexOf("data-alpaca-field-id=");
								if(d > -1)
								{
									var p = e(c).attr("data-alpaca-field-id"),
										h = t.fieldInstances[p].getValue();
									if(h && (h = "" + h, h = h.toLowerCase(), h.indexOf(l) > -1))
									{
										s = !0;
										break
									}
								}
							}
						}
						return s
					}))
				},
				getFieldType: function()
				{
					return "table"
				},
				prepareContainerModel: function(e)
				{
					var t = this;
					t.base(function(n)
					{
						if(n.headers = [], t.schema.items && t.schema.items.properties)
							for(var i in t.schema.items.properties)
							{
								var a = {};
								a.id = i, a.title = t.schema.items.properties[i].title, a.hidden = !1, t.options.items && t.options.items.fields && t.options.items.fields[i] && (t.options.items.fields[i].label && (a.title = t.options.items.fields[i].label), "hidden" === t.options.items.fields[i].type && (a.hidden = !0)), n.headers.push(a)
							}
						e(n)
					})
				},
				afterRenderContainer: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						i.cleanupDomInjections();
						var t = e(this.container).find("table");
						if(i.applyStyle("table", t), i.options.datatables && e.fn.DataTable)
						{
							i.options.dragRows && (i.options.datatables.columns.push(
							{
								orderable: !1,
								name: "dragRowsIndex",
								hidden: !0
							}), i.options.datatables.columns.push(
							{
								orderable: !1,
								name: "dragRowsDraggable"
							}));
							for(var a in i.schema.items.properties)
							{
								var r = {
									orderable: !0,
									orderDataType: "alpaca"
								};
								i.options.datatables.columns.push(r)
							}
							i.options.showActionsColumn && i.options.datatables.columns.push(
							{
								orderable: !1,
								name: "actions"
							}), i.options.dragRows && (i.options.datatables.rowReorder = {
								selector: "tr td.alpaca-table-reorder-draggable-cell",
								dataSrc: 0,
								snapX: !0,
								update: !0
							}), i.off("ready"), i.on("ready", function()
							{
								i._dt && (i._dt.destroy(), i._dt = void 0);
								var t = e(i.container).find("table");
								i._dt = e(t).DataTable(i.options.datatables), i._dt.on("row-reorder", function(e, t, n)
								{
									i._dt._disableAlpacaHandlers || t.length > 0 && t[0].oldPosition !== t[0].newPosition && (i._dt._disableAlpacaHandlers = !0, i.moveItem(t[0].oldPosition, t[0].newPosition, !1, function() {}))
								}), e(i.container).bind("destroyed", function()
								{
									i._dt && (i._dt.destroy(), i._dt = void 0)
								}), i._dt.on("order", function(e, t, n, a)
								{
									if(!i._dt._disableAlpacaHandlers)
									{
										if(!i._dt._originalChildren)
										{
											i._dt._originalChildren = [];
											for(var r = 0; r < i.children.length; r++) i._dt._originalChildren.push(i.children[r])
										}
										for(var o = [], l = 0; l < t.aiDisplay.length; l++)
										{
											var s = t.aiDisplay[l];
											o.push(i._dt._originalChildren[s])
										}
										i.children = o, i._dt._disableAlpacaHandlers = !1
									}
								})
							})
						}
						e(t).find("thead > tr > th[data-header-id]").each(function()
						{
							var t = e(this).attr("data-header-id"),
								n = i.schema.items.properties[t],
								a = null;
							i.options.items.fields && i.options.items.fields[t] && (a = i.options.items.fields[t]), n.required || a && a.required ? i.fireCallback("tableHeaderRequired", n, a, this) : i.fireCallback("tableHeaderOptional", n, a, this)
						}), n()
					}.bind(i))
				},
				cleanupDomInjections: function()
				{
					var n = function(t)
					{
						var n = e(t).parent(),
							i = e(t).children(),
							a = e(t).attr("class").split(/\s+/);
						e.each(a, function(t, i)
						{
							"alpaca-merge-up" === i || e(n).addClass(i)
						}), e.each(e(t)[0].attributes, function()
						{
							this.name && 0 === this.name.indexOf("data-") && e(n).attr(this.name, this.value)
						}), i.length > 0 ? e(t).replaceWith(i) : e(t).remove()
					};
					this.getFieldEl().find("tr > .alpaca-field").each(function()
					{
						n(this)
					}), this.getFieldEl().find("tr > .alpaca-container").each(function()
					{
						n(this)
					});
					var i = this.getFieldEl().find("." + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR);
					i.length > 0 && i.each(function()
					{
						var t = e("<td class='actionbar' nowrap='nowrap'></td>");
						e(this).before(t), e(t).append(this)
					});
					var a = this.getFieldEl().find(".alpaca-table-reorder-draggable-cell");
					a.length > 0 && a.each(function()
					{
						var t = e("<td class='alpaca-table-reorder-draggable-cell'></td>");
						e(this).before(t), e(t).append(e(this).children()), e(this).remove()
					});
					var r = this.getFieldEl().find(".alpaca-table-reorder-index-cell");
					r.length > 0 && r.each(function(t)
					{
						var n = e("<td class='alpaca-table-reorder-index-cell'>" + t + "</td>");
						e(this).before(n), e(this).remove()
					}), this.getFieldEl().find(".alpaca-merge-up").each(function()
					{
						n(this)
					})
				},
				doResolveItemContainer: function()
				{
					var t = this;
					return e(t.container).find("table tbody")
				},
				doAfterAddItem: function(t, n)
				{
					var i = this;
					i.data = i.getValue(), i.cleanupDomInjections();
					var a = i.options.datatables && e.fn.DataTable;
					if(i.options.dragRows || a && 1 === i.data.length) i.refresh(function()
					{
						n()
					});
					else
					{
						if(i._dt)
						{
							var r = i.field.find("[data-alpaca-field-path='" + t.path + "']");
							i._dt.row.add(r)
						}
						n()
					}
				},
				doAfterRemoveItem: function(t, n)
				{
					var i = this;
					i.data = i.getValue(), i.cleanupDomInjections();
					var a = i.options.datatables && e.fn.DataTable;
					i.options.dragRows || a && 0 === i.data.length ? i.refresh(function()
					{
						n()
					}) : (i._dt && i._dt.rows(t).remove(), n())
				},
				getType: function()
				{
					return "array"
				},
				getTitle: function()
				{
					return "Table Field"
				},
				getDescription: function()
				{
					return "Renders array items into a table"
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							datatables:
							{
								title: "DataTables Configuration",
								description: "Optional configuration to be passed to the underlying DataTables Plugin.",
								type: "object"
							},
							showActionsColumn:
							{
								title: "Show Actions Column",
								"default": !0,
								description: "Whether to show or hide the actions column.",
								type: "boolean"
							},
							dragRows:
							{
								title: "Drag Rows",
								"default": !1,
								description: "Whether to enable the dragging of rows via a draggable column.  This requires DataTables and the DataTables Row Reorder Plugin.",
								type: "boolean"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							datatables:
							{
								type: "object"
							},
							showActionsColumn:
							{
								type: "checkbox"
							},
							dragRows:
							{
								type: "checkbox"
							}
						}
					})
				}
			}), t.registerFieldClass("table", t.Fields.TableField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TableRowField = t.Fields.ObjectField.extend(
			{
				prepareContainerModel: function(e)
				{
					var t = this;
					this.base(function(n)
					{
						n.options.showActionsColumn = t.parent.options.showActionsColumn, n.options.dragRows = t.parent.options.dragRows;
						for(var i = 0; i < n.items.length; i++) "hidden" === n.items[i].options.type && (n.items[i].hidden = !0);
						e(n)
					})
				},
				getFieldType: function()
				{
					return "tablerow"
				},
				getType: function()
				{
					return "object"
				},
				getTitle: function()
				{
					return "Table Row Field"
				},
				getDescription: function()
				{
					return "Renders object items into a table row"
				}
			}), t.registerFieldClass("tablerow", t.Fields.TableRowField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TagField = t.Fields.LowerCaseField.extend(
			{
				getFieldType: function()
				{
					return "tag"
				},
				setup: function()
				{
					this.base(), this.options.separator || (this.options.separator = ",")
				},
				getControlValue: function()
				{
					var e = this.base();
					return "" === e ? [] : e.split(this.options.separator)
				},
				setValue: function(e)
				{
					return "" !== e ? e ? void this.base(e.join(this.options.separator)) : this.base("") : void 0
				},
				onBlur: function(t)
				{
					this.base(t);
					var n = this.getValue(),
						i = [];
					e.each(n, function(e, t)
					{
						"" !== t.trim() && i.push(t.trim())
					}), this.setValue(i)
				},
				getTitle: function()
				{
					return "Tag Field"
				},
				getDescription: function()
				{
					return "Text field for entering list of tags separated by delimiter."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							separator:
							{
								title: "Separator",
								description: "Separator used to split tags.",
								type: "string",
								"default": ","
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							separator:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerFieldClass("tag", t.Fields.TagField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TimeField = t.Fields.DateField.extend(
			{
				getFieldType: function()
				{
					return "time"
				},
				getDefaultFormat: function()
				{
					return t.defaultTimeFormat
				},
				setup: function()
				{
					this.base()
				},
				getTitle: function()
				{
					return "Time Field"
				},
				getDescription: function()
				{
					return "Time Field"
				}
			}), t.registerMessages(
			{
				invalidTime: "Invalid time"
			}), t.registerFieldClass("time", t.Fields.TimeField), t.registerDefaultFormatFieldMapping("time", "time")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TinyMCEField = t.Fields.TextAreaField.extend(
			{
				getFieldType: function()
				{
					return "tinymce"
				},
				setup: function()
				{
					var e = this;
					this.data || (this.data = ""), e.options.toolbar || (e.options.toolbar = "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"), this.base()
				},
				setValue: function(e)
				{
					var t = this;
					this.base(e), t.editor && t.editor.setContent(e)
				},
				getControlValue: function()
				{
					var e = this,
						t = null;
					return e.editor && (t = e.editor.getContent()), t
				},
				initTinyMCEEvents: function()
				{
					var e = this;
					e.editor && (e.editor.on("click", function(t)
					{
						e.onClick.call(e, t), e.trigger("click", t)
					}), e.editor.on("change", function(t)
					{
						e.onChange(), e.triggerWithPropagation("change", t)
					}), e.editor.on("blur", function(t)
					{
						e.onBlur(), e.trigger("blur", t)
					}), e.editor.on("focus", function(t)
					{
						e.onFocus.call(e, t), e.trigger("focus", t)
					}), e.editor.on("keypress", function(t)
					{
						e.onKeyPress.call(e, t), e.trigger("keypress", t)
					}), e.editor.on("keyup", function(t)
					{
						e.onKeyUp.call(e, t), e.trigger("keyup", t)
					}), e.editor.on("keydown", function(t)
					{
						e.onKeyDown.call(e, t), e.trigger("keydown", t)
					}))
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						!i.isDisplayOnly() && i.control && "undefined" != typeof tinyMCE && i.on("ready", function()
						{
							if(!i.editor)
							{
								var t = e(i.control)[0].id;
								tinyMCE.init(
								{
									init_instance_callback: function(e)
									{
										i.editor = e, i.initTinyMCEEvents()
									},
									selector: "#" + t,
									toolbar: i.options.toolbar
								})
							}
						}), n()
					})
				},
				destroy: function()
				{
					var e = this;
					e.editor && (e.editor.remove(), e.editor = null), this.base()
				},
				getTitle: function()
				{
					return "TinyMCE Editor"
				},
				getDescription: function()
				{
					return "Provides an instance of a TinyMCE control for use in editing HTML."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							toolbar:
							{
								title: "TinyMCE toolbar options",
								description: "Toolbar options for TinyMCE plugin.",
								type: "string"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							toolbar:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerFieldClass("tinymce", t.Fields.TinyMCEField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.TokenField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "token"
				},
				setup: function()
				{
					this.base(), this.options.separator || (this.options.separator = ","), "undefined" == typeof this.options.tokenfield && (this.options.tokenfield = {}), "undefined" == typeof this.options.tokenfield.showAutocompleteOnFocus && (this.options.tokenfield.showAutocompleteOnFocus = !0)
				},
				getControlValue: function()
				{
					return this.base()
				},
				setValue: function(e)
				{
					this.base(e)
				},
				onBlur: function(e)
				{
					this.base(e)
				},
				afterRenderControl: function(t, n)
				{
					var i = this;
					this.base(t, function()
					{
						!i.isDisplayOnly() && i.control && "undefined" != typeof e.fn.tokenfield && i.on("ready", function(t, n)
						{
							e(t.control).tokenfield(n)
						}(i, i.options.tokenfield)), n()
					})
				},
				getTitle: function()
				{
					return "Token Field"
				},
				getDescription: function()
				{
					return "Token field for entering list of tokens separated by delimiter."
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							separator:
							{
								title: "Separator",
								description: "Separator used to split tokens.",
								type: "string",
								"default": ","
							},
							tokenfield:
							{
								title: "Token Field options",
								description: "Settings to pass into the underlying bootstrap-tokenfield control",
								type: "object",
								"default": void 0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							separator:
							{
								type: "text"
							}
						}
					})
				}
			}), t.registerFieldClass("token", t.Fields.TokenField)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.UploadField = t.ControlField.extend(
				{
					constructor: function(n, i, a, r, o, l)
					{
						var s = this;
						this.base(n, i, a, r, o, l), this.isArrayType = function()
						{
							return "array" === s.schema.type
						}, this.isObjectType = function()
						{
							return "object" === s.schema.type
						}, this.wrapTemplate = function(n)
						{
							return function(i)
							{
								for(var a = i.files, r = i.formatFileSize, o = i.options, l = [], u = 0; u < a.length; u++)
								{
									var c = {};
									c.options = s.options, c.file = t.cloneObject(a[u]), c.size = r(c.size), c.buttons = s.options.buttons, c.view = s.view, c.fileIndex = u;
									var d = t.tmpl(s.view.getTemplateDescriptor(n), c, s);
									l.push(d[0])
								}
								return l = e(l), e(l).each(function()
								{
									o.fileupload && o.fileupload.autoUpload && e(this).find("button.start").css("display", "none"), s.handleWrapRow(this, o), e(this).find("button.delete").on("click", function()
									{
										var t = e(d).find("button.delete"),
											n = e(t).attr("data-file-index"),
											i = a[n];
										if(s.onFileDelete.call(s, d, t, i), s.isArrayType())
										{
											var r = s.getValueAsArray();
											r.splice(n, 1), s.setValueAsArray(r)
										}
										else s.isObjectType() && s.setValueAsArray([]);
										s.triggerWithPropagation("change"), setTimeout(function()
										{
											s.refreshUIState()
										}, 200)
									})
								}), e(l)
							}
						}
					},
					getFieldType: function()
					{
						return "upload"
					},
					setup: function()
					{
						var e = this;
						this.base(), e.options.renderButtons = !1, e.options.buttons || (e.options.buttons = []), e.options.hideDeleteButton || e.options.buttons.push(
						{
							key: "delete",
							isDelete: !0
						}), "undefined" == typeof e.options.showUploadPreview && (e.options.showUploadPreview = !0), "undefined" == typeof e.options.showHeaders && (e.options.showHeaders = !0), e.data || (e.data = []), e.data && t.isObject(e.data) && (e.data = [e.data]), e.options.upload || (e.options.upload = {}), "undefined" == typeof e.options.maxNumberOfFiles && "undefined" != typeof e.options.upload.maxNumberOfFiles && (e.options.maxNumberOfFiles = e.options.upload.maxNumberOfFiles), "undefined" == typeof e.options.maxNumberOfFiles && (e.options.maxNumberOfFiles = 1, e.isArrayType() && (e.options.maxNumberOfFiles = -1)), e.isObjectType() && (e.options.maxNumberOfFiles = 1), e.options.multiple === !1 && (e.options.maxNumberOfFiles = 1), (e.options.maxNumberOfFiles > 1 || -1 === e.options.maxNumberOfFiles) && (e.options.multiple = !0), e.options.upload.maxNumberOfFiles = 9999, e.options.maxNumberOfFiles > 0 && (e.options.upload.maxNumberOfFiles = e.options.maxNumberOfFiles), "undefined" == typeof e.options.maxFileSize && (e.options.upload.maxFileSize ? e.options.maxFileSize = e.options.upload.maxFileSize : e.options.maxFileSize = -1, e.options.maxFileSize && (e.options.upload.maxFileSize = e.options.maxFileSize)), "undefined" == typeof e.options.fileTypes && (e.options.upload.acceptFileTypes ? e.options.fileTypes = e.options.upload.acceptFileTypes : e.options.fileTypes = null, e.options.fileTypes && (e.options.upload.acceptFileTypes = e.options.fileTypes)), e.options.errorHandler || (e.options.errorHandler = function(e)
						{
							alert(e.join("\n"))
						});
						var n = e.determineCsrfToken();
						n && (e.options.upload || (e.options.upload = {}), e.options.upload.headers || (e.options.upload.headers = {}), e.options.upload.headers[t.CSRF_HEADER_NAME] = n)
					},
					determineCsrfToken: function()
					{
						var e = t.CSRF_TOKEN;
						if(!e)
							for(var n = 0; n < t.CSRF_COOKIE_NAMES.length; n++)
							{
								var i = t.CSRF_COOKIE_NAMES[n],
									a = t.readCookie(i);
								if(a)
								{
									e = a;
									break
								}
							}
						return e
					},
					prepareControlModel: function(e)
					{
						var t = this;
						t.base(function(n)
						{
							n.chooseButtonLabel = t.options.chooseButtonLabel, n.chooseButtonLabel || (n.chooseButtonLabel = t.getMessage("chooseFiles"), 1 === t.options.maxNumberOfFiles && (n.chooseButtonLabel = t.getMessage("chooseFile"))), n.dropZoneMessage = t.options.dropZoneMessage, n.dropZoneMessage || (n.dropZoneMessage = t.getMessage("dropZoneMultiple"), 1 === n.options.maxNumberOfFiles && (n.dropZoneMessage = t.getMessage("dropZoneSingle"))), n.selectFromExistingMessage = t.options.selectFromExistingMessage, n.selectFromExistingMessage || (n.selectFromExistingMessage = t.getMessage("selectFromExistingMultiple"), 1 === n.options.maxNumberOfFiles && (n.selectFromExistingMessage = t.getMessage("selectFromExistingSingle"))), e(n)
						})
					},
					afterRenderControl: function(t, n)
					{
						var i = this;
						this.base(t, function()
						{
							i.handlePostRender(function()
							{
								i.isDisplayOnly() && (e(i.control).find("button").hide(), e(i.control).find(".btn").hide(), e(i.control).find(".alpaca-fileupload-chooserow").hide(), e(i.control).find(".dropzone-message").hide()), n()
							})
						})
					},
					getUploadTemplate: function()
					{
						return this.wrapTemplate("control-upload-partial-upload")
					},
					getDownloadTemplate: function()
					{
						return this.wrapTemplate("control-upload-partial-download")
					},
					handleBeforeFileUploadSubmit: function(e) {},
					handlePostRender: function(t)
					{
						var n = this,
							i = this.control,
							a = {};
						if(a.dataType = "json", a.uploadTemplateId = null, a.uploadTemplate = this.getUploadTemplate(), a.downloadTemplateId = null, a.downloadTemplate = this.getDownloadTemplate(), a.filesContainer = e(i).find(".files"), a.dropZone = e(i).find(".fileupload-active-zone"), a.url = "/", a.method = "post", a.showUploadPreview = n.options.showUploadPreview, n.options.upload)
							for(var r in n.options.upload) a[r] = n.options.upload[r];
						n.options.multiple && e(i).find(".alpaca-fileupload-input").attr("multiple", !0), n.options.name && e(i).find(".alpaca-fileupload-input").attr("name", n.options.name), e(i).find(".progress").css("display", "none"), a.progressall = function(t, n)
						{
							var a = !1;
							if(n.loaded < n.total && (a = !0), a)
							{
								e(i).find(".progress").css("display", "block");
								var r = parseInt(n.loaded / n.total * 100, 10);
								e("#progress .progress-bar").css("width", r + "%")
							}
							else e(i).find(".progress").css("display", "none")
						}, a.add = function(e, t)
						{
							var i = [],
								a = 0;
							do {
								var r = !1;
								if(a < t.files.length)
								{
									if(n.options.fileTypes)
									{
										var o = n.options.fileTypes;
										"string" == typeof n.options.fileTypes && (o = new RegExp(n.options.fileTypes)), o.test(t.files[a].type) || (i.push("Not an accepted file type: " + t.files[a].type), r = !0)
									}
									n.options.maxFileSize > -1 && t.files[a].size > n.options.maxFileSize && (i.push("Filesize is too big: " + t.files[a].size), r = !0)
								}
								r ? a++ : a++
							} while (a < t.files.length);
							i.length > 0 ? n.options.errorHandler(i) : t.submit()
						}, n.applyConfiguration(a);
						var o = n.fileUpload = e(i).find(".alpaca-fileupload-input").fileupload(a);
						o.bindFirst("fileuploaddone", function(e, t)
						{
							var i = n.options.enhanceFiles;
							i ? i(a, t) : n.enhanceFiles(a, t), t.files = t.result.files, setTimeout(function()
							{
								n.refreshValidationState(!0), n.refreshUIState()
							}, 250)
						}), o.bindFirst("fileuploadsubmit", function(t, i)
						{
							n.options.properties && e.each(i.files, function(e, t)
							{
								for(var a in n.options.properties)
								{
									var r = "property" + e + "__" + a,
										o = n.options.properties[a];
									o = n.applyTokenSubstitutions(o, e, t), i.formData || (i.formData = {}), i.formData[r] = o
								}
							}), n.options.parameters && e.each(i.files, function(e, t)
							{
								for(var a in n.options.parameters)
								{
									var r = "param" + e + "__" + a,
										o = n.options.parameters[a];
									o = n.applyTokenSubstitutions(o, e, t), i.formData || (i.formData = {}), i.formData[r] = o
								}
							}), n.handleBeforeFileUploadSubmit(i), n.options.beforeFileUploadSubmitHandler && n.options.beforeFileUploadSubmitHandler.call(n, i)
						}), o.bind("fileuploaddone", function(e, t)
						{
							var i = n.getValueAsArray(),
								a = function(e)
								{
									return e === t.files.length ? void n.setValueAsArray(i) : void n.convertFileToDescriptor(t.files[e], function(t, n)
									{
										n && i.push(n), a(e + 1)
									})
								};
							a(0)
						}), o.bind("fileuploadfail", function(e, t)
						{
							t.errorThrown && n.onUploadFail(t)
						}), o.bind("fileuploadalways", function(e, t)
						{
							n.refreshUIState()
						}), n.applyBindings(o, i), n.preload(o, i, function(a)
						{
							if(a)
							{
								var r = e(n.control).find(".alpaca-fileupload-input");
								e(r).fileupload("option", "done").call(r, e.Event("done"),
								{
									result:
									{
										files: a
									}
								}), n.afterPreload(o, i, a, function()
								{
									t()
								})
							}
							else t()
						}), "undefined" != typeof document && e(document).bind("drop dragover", function(e)
						{
							e.preventDefault()
						})
					},
					handleWrapRow: function(e, t) {},
					applyTokenSubstitutions: function(e, t, n)
					{
						var i = {
								index: t,
								name: n.name,
								size: n.size,
								url: n.url,
								thumbnailUrl: n.thumbnailUrl
							},
							a = -1,
							r = 0;
						do
							if(a = e.indexOf("{", r), a > -1)
							{
								var o = e.indexOf("}", a);
								if(o > -1)
								{
									var l = e.substring(a + car.length, o),
										s = i[l];
									s && (e = e.substring(0, a) + s + e.substring(o + 1)), r = o + 1
								}
							}
						while (a > -1);
						return e
					},
					applyConfiguration: function(e) {},
					applyBindings: function(e) {},
					convertFileToDescriptor: function(e, t)
					{
						var n = {
							id: e.id,
							name: e.name,
							size: e.size,
							url: e.url,
							thumbnailUrl: e.thumbnailUrl,
							deleteUrl: e.deleteUrl,
							deleteType: e.deleteType
						};
						t(null, n)
					},
					convertDescriptorToFile: function(e, t)
					{
						var n = {
							id: e.id,
							name: e.name,
							size: e.size,
							url: e.url,
							thumbnailUrl: e.thumbnailUrl,
							deleteUrl: e.deleteUrl,
							deleteType: e.deleteType
						};
						t(null, n)
					},
					enhanceFiles: function(e, t) {},
					preload: function(e, t, n)
					{
						var i = this,
							a = [],
							r = i.getValueAsArray(),
							o = function(e)
							{
								return e == r.length ? n(a) : void i.convertDescriptorToFile(r[e], function(t, n)
								{
									n && a.push(n), o(e + 1)
								})
							};
						o(0)
					},
					afterPreload: function(e, t, n, i)
					{
						var a = this;
						a.refreshUIState(), i()
					},
					getControlValue: function()
					{
						return this.data
					},
					getValue: function()
					{
						var e = this.data;
						return this.isObjectType() && (e = this.data && this.data.length > 0 ? this.data[0] : void 0), e
					},
					setValue: function(e)
					{
						e ? t.isArray(e) ? this.data = e : t.isObject(e) && (this.data = [e]) : this.data = [], this.updateObservable(), this.triggerUpdate()
					},
					getValueAsArray: function()
					{
						return this.data || []
					},
					setValueAsArray: function(e)
					{
						var t = this;
						if(t.isArrayType()) t.setValue(e);
						else if(t.isObjectType())
						{
							var n = null;
							e && e.length > 0 && (n = e[0]), t.setValue(n)
						}
					},
					reload: function(t)
					{
						var n = this,
							i = this.getValueAsArray(),
							a = [],
							r = function(o)
							{
								if(o === i.length)
								{
									var l = e(n.control).find(".alpaca-fileupload-input");
									return e(l).fileupload("option", "done").call(l, e.Event("done"),
									{
										result:
										{
											files: a
										}
									}), n.refreshValidationState(), t()
								}
								n.convertDescriptorToFile(i[o], function(e, t)
								{
									t && a.push(t), r(o + 1)
								})
							};
						r(0)
					},
					plugin: function()
					{
						var t = this;
						return e(t.control).find(".alpaca-fileupload-input").data().blueimpFileupload
					},
					refreshUIState: function()
					{
						var e = this,
							t = e.plugin();
						if(t)
						{
							var n = e.options.maxNumberOfFiles; - 1 === n ? e.refreshButtons(!0) : t.options.getNumberOfFiles && t.options.getNumberOfFiles() >= n ? e.refreshButtons(!1) : e.refreshButtons(!0)
						}
					},
					refreshButtons: function(t)
					{
						var n = this;
						e(n.control).find(".btn.fileinput-button").prop("disabled", !0), e(n.control).find(".btn.fileinput-button").attr("disabled", "disabled"), e(n.control).find(".fileupload-active-zone p.dropzone-message").css("display", "none"), t && (e(n.control).find(".btn.fileinput-button").prop("disabled", !1), e(n.control).find(".btn.fileinput-button").attr("disabled", null), e(n.control).find(".fileupload-active-zone p.dropzone-message").css("display", "block"))
					},
					onFileDelete: function(n, i, a)
					{
						var r = this,
							o = a.deleteUrl,
							l = a.deleteType,
							s = {
								method: l,
								url: o,
								headers:
								{}
							},
							u = r.determineCsrfToken();
						u && (s.headers[t.CSRF_HEADER_NAME] = u), e.ajax(s)
					},
					onUploadFail: function(e)
					{
						var t = this;
						t.options.errorHandler && t.options.errorHandler.call(t, [e.errorThrown]);
						for(var n = 0; n < e.files.length; n++) e.files[n].error = e.errorThrown
					},
					disable: function()
					{
						e(this.field).find(".fileinput-button").prop("disabled", !0), e(this.field).find(".fileinput-button").attr("disabled", "disabled"), e(this.field).find(".alpaca-fileupload-well").css("visibility", "hidden")
					},
					enable: function()
					{
						e(this.field).find(".fileinput-button").prop("disabled", !1), e(this.field).find(".fileinput-button").removeAttr("disabled"), e(this.field).find(".alpaca-fileupload-well").css("visibility", "visible")
					},
					getTitle: function()
					{
						return "Upload Field"
					},
					getDescription: function()
					{
						return "Provides an upload field with support for thumbnail preview"
					},
					getType: function()
					{
						return "array"
					},
					getSchemaOfOptions: function()
					{
						return t.merge(this.base(),
						{
							properties:
							{
								maxNumberOfFiles:
								{
									title: "Maximum Number of Files",
									description: "The maximum number of files to allow to be uploaded.  If greater than zero, the maximum number will be constrained.  If -1, then no limit is imposed.",
									type: "number",
									"default": 1
								},
								maxFileSize:
								{
									title: "Maximum File Size (in bytes)",
									description: "The maximum file size allowed per upload.  If greater than zero, the maximum file size will be limited to the given size in bytes.  If -1, then no limit is imposed.",
									type: "number",
									"default": -1
								},
								fileTypes:
								{
									title: "File Types",
									description: "A regular expression limiting the file types that can be uploaded based on filename",
									type: "string"
								},
								multiple:
								{
									title: "Multiple",
									description: "Whether to allow multiple file uploads.  If maxNumberOfFiles is not specified, multiple will toggle between 1 and unlimited.",
									type: "boolean",
									"default": !1
								},
								showUploadPreview:
								{
									title: "Show Upload Preview",
									description: "Whether to show thumbnails for uploaded assets (requires preview support)",
									type: "boolean",
									"default": !0
								},
								errorHandler:
								{
									title: "Error Handler",
									description: "Optional function handler to be called when one or more files fails to upload.  This function is responsible for parsing the underlying xHR request and populating the error message state.",
									type: "function"
								}
							}
						})
					}
				}), t.registerFieldClass("upload", t.Fields.UploadField), t.registerMessages(
				{
					chooseFile: "Choose File...",
					chooseFiles: "Choose Files...",
					dropZoneSingle: "Click the Choose button or Drag and Drop a file here to upload...",
					dropZoneMultiple: "Click the Choose button or Drag and Drop files here to upload..."
				}),
				function(e)
				{
					function t(t)
					{
						return l ? t.data("events") : e._data(t[0]).events
					}

					function n(e, n, i)
					{
						var a = t(e),
							r = a[n];
						if(!l)
						{
							var o = i ? r.splice(r.delegateCount - 1, 1)[0] : r.pop();
							return void r.splice(i ? 0 : r.delegateCount || 0, 0, o)
						}
						i ? a.live.unshift(a.live.pop()) : r.unshift(r.pop())
					}

					function i(t, i, a)
					{
						var r = i.split(/\s+/);
						t.each(function()
						{
							for(var t = 0; t < r.length; ++t)
							{
								var i = e.trim(r[t]).match(/[^\.]+/i)[0];
								n(e(this), i, a)
							}
						})
					}
					var a = e.fn.jquery.split("."),
						r = parseInt(a[0]),
						o = parseInt(a[1]),
						l = 1 > r || 1 === r && 7 > o;
					e.fn.bindFirst = function()
					{
						var t = e.makeArray(arguments),
							n = t.shift();
						return n && (e.fn.bind.apply(this, arguments), i(this, n)), this
					}
				}(e)
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.UpperCaseField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "uppercase"
				},
				setup: function()
				{
					this.base(), this.data && (this.data = this.data.toUpperCase())
				},
				setValue: function(e)
				{
					if(!e) return this.base(e);
					var n = null;
					e && t.isString(e) && (n = e.toUpperCase()), n != this.getValue() && this.base(n)
				},
				onKeyPress: function(e)
				{
					this.base(e);
					var n = this;
					t.later(25, this, function()
					{
						var e = n.getValue();
						n.setValue(e)
					})
				},
				getTitle: function()
				{
					return "Uppercase Text"
				},
				getDescription: function()
				{
					return "Text field for uppercase text."
				}
			}), t.registerFieldClass("uppercase", t.Fields.UpperCaseField), t.registerDefaultFormatFieldMapping("uppercase", "uppercase")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.URLField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "url"
				},
				setup: function()
				{
					this.inputType = "url", this.base(), "undefined" == typeof this.options.allowIntranet && (this.options.allowIntranet = !1), this.options.allowIntranet ? this.schema.pattern = t.regexps["intranet-url"] : this.schema.pattern = t.regexps.url, this.schema.format = "uri"
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || (t.invalidPattern.message = this.getMessage("invalidURLFormat")), e
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							allowIntranet:
							{
								title: "Allow intranet",
								description: "Allows URLs with unqualified hostnames"
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							allowIntranet:
							{
								type: "checkbox"
							}
						}
					})
				},
				getTitle: function()
				{
					return "URL Field"
				},
				getDescription: function()
				{
					return "Provides a text control with validation for an internet web address."
				}
			}), t.registerMessages(
			{
				invalidURLFormat: "The URL provided is not a valid web address."
			}), t.registerFieldClass("url", t.Fields.URLField), t.registerDefaultFormatFieldMapping("url", "url")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.Fields.ZipcodeField = t.Fields.TextField.extend(
			{
				getFieldType: function()
				{
					return "zipcode"
				},
				setup: function()
				{
					this.base(), this.options.format = this.options.format ? this.options.format : "nine", "nine" === this.options.format ? this.schema.pattern = t.regexps["zipcode-nine"] : "five" === this.options.format ? this.schema.pattern = t.regexps["zipcode-five"] : (t.logError("The configured zipcode format: " + this.options.format + " is not a legal value [five, nine]"), this.options.format = "nine", this.schema.pattern = t.regexps["zipcode-nine"]), "nine" === this.options.format ? this.options.maskString = "99999-9999" : "five" === this.options.format && (this.options.maskString = "99999")
				},
				handleValidate: function()
				{
					var e = this.base(),
						t = this.validation;
					return t.invalidPattern.status || ("nine" === this.options.format ? t.invalidPattern.message = this.getMessage("invalidZipcodeFormatNine") : "five" === this.options.format && (t.invalidPattern.message = this.getMessage("invalidZipcodeFormatFive"))), e
				},
				getSchemaOfOptions: function()
				{
					return t.merge(this.base(),
					{
						properties:
						{
							format:
							{
								title: "Format",
								description: "How to represent the zipcode field",
								type: "string",
								"default": "five",
								"enum": ["five", "nine"],
								readonly: !0
							}
						}
					})
				},
				getOptionsForOptions: function()
				{
					return t.merge(this.base(),
					{
						fields:
						{
							format:
							{
								type: "text"
							}
						}
					})
				},
				getTitle: function()
				{
					return "Zipcode Field"
				},
				getDescription: function()
				{
					return "Provides a five or nine-digital US zipcode control with validation."
				}
			}), t.registerMessages(
			{
				invalidZipcodeFormatFive: "Invalid Five-Digit Zipcode (#####)",
				invalidZipcodeFormatNine: "Invalid Nine-Digit Zipcode (#####-####)"
			}), t.registerFieldClass("zipcode", t.Fields.ZipcodeField), t.registerDefaultFormatFieldMapping("zipcode", "zipcode")
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				title: "Abstract base view",
				messages:
				{
					countries:
					{
						afg: "Afghanistan",
						ala: "Aland Islands",
						alb: "Albania",
						dza: "Algeria",
						asm: "American Samoa",
						and: "Andorra",
						ago: "Angola",
						aia: "Anguilla",
						ata: "Antarctica",
						atg: "Antigua and Barbuda",
						arg: "Argentina",
						arm: "Armenia",
						abw: "Aruba",
						aus: "Australia",
						aut: "Austria",
						aze: "Azerbaijan",
						bhs: "Bahamas",
						bhr: "Bahrain",
						bgd: "Bangladesh",
						brb: "Barbados",
						blr: "Belarus",
						bel: "Belgium",
						blz: "Belize",
						ben: "Benin",
						bmu: "Bermuda",
						btn: "Bhutan",
						bol: "Bolivia",
						bih: "Bosnia and Herzegovina",
						bwa: "Botswana",
						bvt: "Bouvet Island",
						bra: "Brazil",
						iot: "British Indian Ocean Territory",
						brn: "Brunei Darussalam",
						bgr: "Bulgaria",
						bfa: "Burkina Faso",
						bdi: "Burundi",
						khm: "Cambodia",
						cmr: "Cameroon",
						can: "Canada",
						cpv: "Cape Verde",
						cym: "Cayman Islands",
						caf: "Central African Republic",
						tcd: "Chad",
						chl: "Chile",
						chn: "China",
						cxr: "Christmas Island",
						cck: "Cocos (Keeling), Islands",
						col: "Colombia",
						com: "Comoros",
						cog: "Congo",
						cod: "Congo, the Democratic Republic of the",
						cok: "Cook Islands",
						cri: "Costa Rica",
						hrv: "Croatia",
						cub: "Cuba",
						cyp: "Cyprus",
						cze: "Czech Republic",
						civ: "Cote d'Ivoire",
						dnk: "Denmark",
						dji: "Djibouti",
						dma: "Dominica",
						dom: "Dominican Republic",
						ecu: "Ecuador",
						egy: "Egypt",
						slv: "El Salvador",
						gnq: "Equatorial Guinea",
						eri: "Eritrea",
						est: "Estonia",
						eth: "Ethiopia",
						flk: "Falkland Islands (Malvinas),",
						fro: "Faroe Islands",
						fji: "Fiji",
						fin: "Finland",
						fra: "France",
						guf: "French Guiana",
						pyf: "French Polynesia",
						atf: "French Southern Territories",
						gab: "Gabon",
						gmb: "Gambia",
						geo: "Georgia",
						deu: "Germany",
						gha: "Ghana",
						gib: "Gibraltar",
						grc: "Greece",
						grl: "Greenland",
						grd: "Grenada",
						glp: "Guadeloupe",
						gum: "Guam",
						gtm: "Guatemala",
						ggy: "Guernsey",
						gin: "Guinea",
						gnb: "Guinea-Bissau",
						guy: "Guyana",
						hti: "Haiti",
						hmd: "Heard Island and McDonald Islands",
						vat: "Holy See (Vatican City State),",
						hnd: "Honduras",
						hkg: "Hong Kong",
						hun: "Hungary",
						isl: "Iceland",
						ind: "India",
						idn: "Indonesia",
						irn: "Iran, Islamic Republic of",
						irq: "Iraq",
						irl: "Ireland",
						imn: "Isle of Man",
						isr: "Israel",
						ita: "Italy",
						jam: "Jamaica",
						jpn: "Japan",
						jey: "Jersey",
						jor: "Jordan",
						kaz: "Kazakhstan",
						ken: "Kenya",
						kir: "Kiribati",
						prk: "Korea, Democratic People's Republic of",
						kor: "Korea, Republic of",
						kwt: "Kuwait",
						kgz: "Kyrgyzstan",
						lao: "Lao People's Democratic Republic",
						lva: "Latvia",
						lbn: "Lebanon",
						lso: "Lesotho",
						lbr: "Liberia",
						lby: "Libyan Arab Jamahiriya",
						lie: "Liechtenstein",
						ltu: "Lithuania",
						lux: "Luxembourg",
						mac: "Macao",
						mkd: "Macedonia, the former Yugoslav Republic of",
						mdg: "Madagascar",
						mwi: "Malawi",
						mys: "Malaysia",
						mdv: "Maldives",
						mli: "Mali",
						mlt: "Malta",
						mhl: "Marshall Islands",
						mtq: "Martinique",
						mrt: "Mauritania",
						mus: "Mauritius",
						myt: "Mayotte",
						mex: "Mexico",
						fsm: "Micronesia, Federated States of",
						mda: "Moldova, Republic of",
						mco: "Monaco",
						mng: "Mongolia",
						mne: "Montenegro",
						msr: "Montserrat",
						mar: "Morocco",
						moz: "Mozambique",
						mmr: "Myanmar",
						nam: "Namibia",
						nru: "Nauru",
						npl: "Nepal",
						nld: "Netherlands",
						ant: "Netherlands Antilles",
						ncl: "New Caledonia",
						nzl: "New Zealand",
						nic: "Nicaragua",
						ner: "Niger",
						nga: "Nigeria",
						niu: "Niue",
						nfk: "Norfolk Island",
						mnp: "Northern Mariana Islands",
						nor: "Norway",
						omn: "Oman",
						pak: "Pakistan",
						plw: "Palau",
						pse: "Palestinian Territory, Occupied",
						pan: "Panama",
						png: "Papua New Guinea",
						pry: "Paraguay",
						per: "Peru",
						phl: "Philippines",
						pcn: "Pitcairn",
						pol: "Poland",
						prt: "Portugal",
						pri: "Puerto Rico",
						qat: "Qatar",
						rou: "Romania",
						rus: "Russian Federation",
						rwa: "Rwanda",
						reu: "Reunion",
						blm: "Saint Barthelemy",
						shn: "Saint Helena",
						kna: "Saint Kitts and Nevis",
						lca: "Saint Lucia",
						maf: "Saint Martin (French part)",
						spm: "Saint Pierre and Miquelon",
						vct: "Saint Vincent and the Grenadines",
						wsm: "Samoa",
						smr: "San Marino",
						stp: "Sao Tome and Principe",
						sau: "Saudi Arabia",
						sen: "Senegal",
						srb: "Serbia",
						syc: "Seychelles",
						sle: "Sierra Leone",
						sgp: "Singapore",
						svk: "Slovakia",
						svn: "Slovenia",
						slb: "Solomon Islands",
						som: "Somalia",
						zaf: "South Africa",
						sgs: "South Georgia and the South Sandwich Islands",
						esp: "Spain",
						lka: "Sri Lanka",
						sdn: "Sudan",
						sur: "Suriname",
						sjm: "Svalbard and Jan Mayen",
						swz: "Swaziland",
						swe: "Sweden",
						che: "Switzerland",
						syr: "Syrian Arab Republic",
						twn: "Taiwan, Province of China",
						tjk: "Tajikistan",
						tza: "Tanzania, United Republic of",
						tha: "Thailand",
						tls: "Timor-Leste",
						tgo: "Togo",
						tkl: "Tokelau",
						ton: "Tonga",
						tto: "Trinidad and Tobago",
						tun: "Tunisia",
						tur: "Turkey",
						tkm: "Turkmenistan",
						tca: "Turks and Caicos Islands",
						tuv: "Tuvalu",
						uga: "Uganda",
						ukr: "Ukraine",
						are: "United Arab Emirates",
						gbr: "United Kingdom",
						usa: "United States",
						umi: "United States Minor Outlying Islands",
						ury: "Uruguay",
						uzb: "Uzbekistan",
						vut: "Vanuatu",
						ven: "Venezuela",
						vnm: "Viet Nam",
						vgb: "Virgin Islands, British",
						vir: "Virgin Islands, U.S.",
						wlf: "Wallis and Futuna",
						esh: "Western Sahara",
						yem: "Yemen",
						zmb: "Zambia",
						zwe: "Zimbabwe"
					},
					empty: "",
					required: "This field is required",
					valid: "",
					invalid: "This field is invalid",
					months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
					timeUnits:
					{
						SECOND: "seconds",
						MINUTE: "minutes",
						HOUR: "hours",
						DAY: "days",
						MONTH: "months",
						YEAR: "years"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					cs_CZ:
					{
						required: "Toto pole je vyžadováno",
						invalid: "Toto pole je neplatné",
						months: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"],
						timeUnits:
						{
							SECOND: "sekundy",
							MINUTE: "minuty",
							HOUR: "hodiny",
							DAY: "dny",
							MONTH: "měsíce",
							YEAR: "roky"
						},
						invalidValueOfEnum: "Toto pole musí obsahovat jednu hodnotu z {0}. Aktuální hodnota je: {1}",
						notOptional: "Toto pole není volitelné",
						disallowValue: "{0} jsou zakázané hodnoty.",
						notEnoughItems: "Minimální počet položek je {0}",
						tooManyItems: "Maximální počet položek je {0}",
						valueNotUnique: "Hodnoty nejsou unikátní",
						notAnArray: "Tato hodnota není pole",
						addItemButtonLabel: "Přidat novou položku",
						addButtonLabel: "Přidat",
						removeButtonLabel: "Odebrat",
						upButtonLabel: "Nahoru",
						downButtonLabel: "Dolů",
						noneLabel: "Žádný",
						stringValueTooSmall: "Minimální hodnota tohoto pole je {0}",
						stringValueTooLarge: "Maximální hodnota tohoto pole je {0}",
						stringValueTooSmallExclusive: "Hodnota tohoto pole musí být větší než {0}",
						stringValueTooLargeExclusive: "Hodnota tohoto pole musí být menší než {0}",
						stringDivisibleBy: "Hodnota musí být dělitelná {0}",
						stringNotANumber: "Hodnota není číslo.",
						stringValueNotMultipleOf: "Číslo není násobkem {0}",
						tooManyProperties: "Maximální počet vlastností ({0}) byl překročen.",
						tooFewProperties: "Není dostatek vlastností (je požadováno {0})",
						wordLimitExceeded: "Maximální počet slov ({0}) byl překročen.",
						invalidPattern: "Toto pole má mít vzor {0}",
						stringTooShort: "Toto pole musí obsahovat nejmeně {0} znaků",
						stringTooLong: "Toto pole musí obsahovat maximálně {0} znaků",
						invalidDate: "Nesprávné datum pro formát {0}",
						editorAnnotationsExist: "Editor má v sobě chyby, které musí být opraveny",
						invalidEmail: "Chybná e-mailová adresa, př.: info@cloudcms.com",
						stringNotAnInteger: "Tato hodnota není číslo.",
						invalidIPv4: "Chybná IPv4 adresa, ex: 192.168.0.1",
						stringNotAJSON: "Tato hodnota není platný JSON text.",
						keyMissing: "Mapa obsahuje prázdný klíč.",
						keyNotUnique: "Klíče nejsou jedinečné.",
						invalidPassword: "Špatné heslo",
						invalidPhone: "Špatné telefonní číslo, př.: (123) 456-9999",
						chooseFile: "Vyberte soubor...",
						chooseFiles: "Vyberte soubory...",
						dropZoneSingle: "Vyberte soubor nebo jej přetáhněte sem pro nahrání...",
						dropZoneMultiple: "Vyberte soubory nebo je přetáhněte sem pro nahrání...",
						invalidURLFormat: "Uvedená URL není platna webová adresa.",
						invalidZipcodeFormatFive: "Chybné poštovní směrovací číslo (#####)",
						invalidZipcodeFormatNine: "Chybné devíti-místné poštovní směrovací číslo (#####-####)"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					de_AT:
					{
						required: "Eingabe erforderlich",
						invalid: "Eingabe invalid",
						months: ["Jänner", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
						timeUnits:
						{
							SECOND: "Sekunden",
							MINUTE: "Minuten",
							HOUR: "Stunden",
							DAY: "Tage",
							MONTH: "Monate",
							YEAR: "Jahre"
						},
						notOptional: "Dieses Feld ist nicht optional",
						disallowValue: "Diese Werte sind nicht erlaubt: {0}",
						invalidValueOfEnum: "Diese Feld sollte einen der folgenden Werte enthalten: {0}. [{1}]",
						notEnoughItems: "Die Mindestanzahl von Elementen ist {0}",
						tooManyItems: "Die Maximalanzahl von Elementen ist {0}",
						valueNotUnique: "Diese Werte sind nicht eindeutig",
						notAnArray: "Keine Liste von Werten",
						invalidDate: "Falsches Datumsformat: {0}",
						invalidEmail: "Ungültige e-Mail Adresse, z.B.: info@cloudcms.com",
						stringNotAnInteger: "Eingabe ist keine Ganz Zahl.",
						invalidIPv4: "Ungültige IPv4 Adresse, z.B.: 192.168.0.1",
						stringValueTooSmall: "Die Mindestanzahl von Zeichen ist {0}",
						stringValueTooLarge: "Die Maximalanzahl von Zeichen ist {0}",
						stringValueTooSmallExclusive: "Die Anzahl der Zeichen muss größer sein als {0}",
						stringValueTooLargeExclusive: "Die Anzahl der Zeichen muss kleiner sein als {0}",
						stringDivisibleBy: "Der Wert muss durch {0} dividierbar sein",
						stringNotANumber: "Die Eingabe ist keine Zahl",
						invalidPassword: "Ungültiges Passwort.",
						invalidPhone: "Ungültige Telefonnummer, z.B.: (123) 456-9999",
						invalidPattern: "Diese Feld stimmt nicht mit folgender Vorgabe überein {0}",
						stringTooShort: "Dieses Feld sollte mindestens {0} Zeichen enthalten",
						stringTooLong: "Dieses Feld sollte höchstens {0} Zeichen enthalten"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					de_DE:
					{
						required: "Eingabe erforderlich",
						invalid: "Eingabe ungültig",
						months: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
						timeUnits:
						{
							SECOND: "Sekunden",
							MINUTE: "Minuten",
							HOUR: "Stunden",
							DAY: "Tage",
							MONTH: "Monate",
							YEAR: "Jahre"
						},
						notOptional: "Dieses Feld ist nicht optional",
						disallowValue: "Diese Werte sind nicht erlaubt: {0}",
						invalidValueOfEnum: "Diese Feld sollte einen der folgenden Werte enthalten: {0}. [{1}]",
						notEnoughItems: "Die Mindestanzahl von Elementen ist {0}",
						tooManyItems: "Die Maximalanzahl von Elementen ist {0}",
						valueNotUnique: "Diese Werte sind nicht eindeutig",
						notAnArray: "Keine Liste von Werten",
						invalidDate: "Falsches Datumsformat: {0}",
						invalidEmail: "Keine gültige E-Mail Adresse",
						stringNotAnInteger: "Keine Ganze Zahl",
						invalidIPv4: "Ungültige IPv4 Adresse",
						stringValueTooSmall: "Die kleinstmögliche Zahl ist {0}",
						stringValueTooLarge: "Die grösstmögliche Zahl ist {0}",
						stringValueTooSmallExclusive: "Die kleinstmögliche Zahl muss größer sein als {0}",
						stringValueTooLargeExclusive: "Die grösstmögliche Zahl muss kleiner sein als {0}",
						stringDivisibleBy: "Der Wert muss durch {0} dividierbar sein",
						stringNotANumber: "Die Eingabe ist keine Zahl",
						invalidPassword: "Ungültiges Passwort",
						invalidPhone: "Ungültige Telefonnummer",
						invalidPattern: "Diese Feld stimmt nicht mit folgender Vorgabe überein {0}",
						stringTooShort: "Dieses Feld sollte mindestens {0} Zeichen enthalten",
						stringTooLong: "Dieses Feld sollte höchstens {0} Zeichen enthalten"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					el_GR:
					{
						required: "Υποχρεωτικό",
						invalid: "Λάθος",
						months: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"],
						timeUnits:
						{
							SECOND: "Δευτερόλεπτα",
							MINUTE: "Λεπτά",
							HOUR: "Ώρες",
							DAY: "Μέρες",
							MONTH: "Μήνες",
							YEAR: "Χρόνια"
						},
						notOptional: "Αυτό το πεδίο δεν είναι προαιρετικό",
						disallowValue: "Μη επιτρεπτή τιμή: {0}",
						invalidValueOfEnum: "Το πεδίο πρέπει να περιέχει μία από τις ακόλουθες τιμές: {0}. [{1}]",
						notEnoughItems: "Ο ελάχιστος αριθμός εγγραφών είναι {0}",
						tooManyItems: "Ο μέγιστος αριθμός εγγραφών είναι {0}",
						valueNotUnique: "Οι τιμές δεν είναι μοναδικές",
						notAnArray: "Δεν υπάρχουν εγγραφές",
						invalidDate: "Λάθος μορφή ημερομηνίας: {0}",
						invalidEmail: "Μη έγκυρο email",
						stringNotAnInteger: "Δεν είναι ακέραιος",
						invalidIPv4: "Μη έγκυρη IPv4 διεύθυνση",
						stringValueTooSmall: "Το ελάχιστο πλήθος χαρακτήρων είναι {0}",
						stringValueTooLarge: "Το μέγιστο πλήθος χαρακτήρων είναι {0}",
						stringValueTooSmallExclusive: "Απαιτούνται περισσότεροι χαρακτήες από {0}",
						stringValueTooLargeExclusive: "Απαιτούνται λιγότεροι χαρακτήρες από {0}",
						stringDivisibleBy: "Η τιμή πρέπει να είναι πολλαπλάσιο του {0}",
						stringNotANumber: "Η τιμή δεν είναι αριθμός",
						invalidPassword: "Μη έγκυρο password",
						invalidPhone: "Μη έγκυρος αριθμός τηλεφώνου",
						invalidPattern: "Αυτό το πεδίο δεν έχει την απαιτούμενη μορφή {0}",
						stringTooShort: "Το πεδίο πρέπει να έχει τουλάχιστον {0} χαρακτήρες",
						stringTooLong: "Το πεδίο μπορεί να έχει το πολύ {0} χαρακτήρες"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					es_ES:
					{
						required: "Este campo es obligatorio",
						invalid: "Este campo es inválido",
						months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
						timeUnits:
						{
							SECOND: "segundos",
							MINUTE: "minutos",
							HOUR: "horas",
							DAY: "días",
							MONTH: "meses",
							YEAR: "años"
						},
						notOptional: "Este campo no es opcional.",
						disallowValue: "{0} son los valores rechazados.",
						invalidValueOfEnum: "Este campo debe tener uno de los valores adentro {0}. [{1}]",
						notEnoughItems: "El número mínimo de artículos es {0}",
						tooManyItems: "El número máximo de artículos es {0}",
						valueNotUnique: "Los valores no son únicos",
						notAnArray: "Este valor no es un arsenal",
						invalidDate: "Fecha inválida para el formato {0}",
						invalidEmail: "Email address inválido, ex: info@cloudcms.com",
						stringNotAnInteger: "Este valor no es un número entero.",
						invalidIPv4: "Dirección inválida IPv4, ex: 192.168.0.1",
						stringValueTooSmall: "El valor mínimo para este campo es {0}",
						stringValueTooLarge: "El valor máximo para este campo es {0}",
						stringValueTooSmallExclusive: "El valor de este campo debe ser mayor que {0}",
						stringValueTooLargeExclusive: "El valor de este campo debe ser menos que {0}",
						stringDivisibleBy: "El valor debe ser divisible cerca {0}",
						stringNotANumber: "Este valor no es un número.",
						invalidPassword: "Contraseña inválida",
						invalidPhone: "Número de teléfono inválido, ex: (123) 456-9999",
						invalidPattern: "Este campo debe tener patrón {0}",
						stringTooShort: "Este campo debe contener por lo menos {0} números o caracteres",
						stringTooLong: "Este campo debe contener a lo más {0} números o caracteres",
						noneLabel: "Ninguno",
						addItemButtonLabel: "Añadir",
						addButtonLabel: "Añadir",
						removeButtonLabel: "Quitar",
						upButtonLabel: "Arriba",
						downButtonLabel: "Abajo"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					fi_FI:
					{
						required: "Kenttä on pakollinen",
						invalid: "Syöte on virheellinen",
						months: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"],
						timeUnits:
						{
							SECOND: "sekuntia",
							MINUTE: "minuuttia",
							HOUR: "tuntia",
							DAY: "päivää",
							MONTH: "kuukautta",
							YEAR: "vuotta"
						},
						notOptional: "Tämä kenttä on pakollinen",
						disallowValue: "Seuraavat syötteet eivät ole sallittuja: {0}",
						invalidValueOfEnum: "Kentän pitää sisältää yksi seuraavista arvoista: {0}. [{1}]",
						notEnoughItems: "Pienin sallittu määrä arvoja on {0}",
						tooManyItems: "Suurin sallittu määrä arvoja on {0}",
						valueNotUnique: "Syötetyt arvot eivät ole uniikkeja",
						notAnArray: "Syöte ei ole lista",
						invalidDate: "Virheellinen päivämäärämuoto: {0}",
						invalidEmail: "Virheellinen sähköpostiosoite",
						stringNotAnInteger: "Arvo ei ole kokonaisluku",
						invalidIPv4: "Virheellinen IPv4-osoite",
						stringValueTooSmall: "Pienin sallittu arvo on {0}",
						stringValueTooLarge: "Suurin sallittu arvo on {0}",
						stringValueTooSmallExclusive: "Arvon pitää olla suurempi kuin {0}",
						stringValueTooLargeExclusive: "Arvon pitää olla pienempi kuin {0}",
						stringDivisibleBy: "Luvun pitää olla jaollinen luvulla {0}",
						stringNotANumber: "Syöte ei ole luku",
						invalidPassword: "Virheellinen salasana",
						invalidPhone: "Virheellinen puhelinnumero",
						invalidPattern: "Syötteen täytyy olla seuraavassa muodossa: {0}",
						stringTooShort: "Syötteen minimipituus on {0} merkkiä",
						stringTooLong: "Syötteen maksimipituus on {0} merkkiä"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					fr_FR:
					{
						required: "Ce champ est requis",
						invalid: "Ce champ est invalide",
						months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
						timeUnits:
						{
							SECOND: "secondes",
							MINUTE: "minutes",
							HOUR: "heures",
							DAY: "jours",
							MONTH: "mois",
							YEAR: "années"
						},
						notOptional: "Ce champ n'est pas optionnel.",
						disallowValue: "{0} sont des valeurs interdites.",
						invalidValueOfEnum: "Ce champ doit prendre une des valeurs suivantes : {0}. [{1}]",
						notEnoughItems: "Le nombre minimum d'éléments est {0}",
						tooManyItems: "Le nombre maximum d'éléments est {0}",
						valueNotUnique: "Les valeurs sont uniques",
						notAnArray: "Cette valeur n'est pas une liste",
						invalidDate: "Cette date ne correspond pas au format {0}",
						invalidEmail: "Adresse de courriel invalide, ex: info@cloudcms.com",
						stringNotAnInteger: "Cette valeur n'est pas un nombre entier.",
						invalidIPv4: "Adresse IPv4 invalide, ex: 192.168.0.1",
						stringValueTooSmall: "La valeur minimale pour ce champ est {0}",
						stringValueTooLarge: "La valeur maximale pour ce champ est {0}",
						stringValueTooSmallExclusive: "La valeur doit-être supérieure à {0}",
						stringValueTooLargeExclusive: "La valeur doit-être inférieure à {0}",
						stringDivisibleBy: "La valeur doit-être divisible par {0}",
						stringNotANumber: "Cette valeur n'est pas un nombre.",
						invalidPassword: "Mot de passe invalide",
						invalidPhone: "Numéro de téléphone invalide, ex: (123) 456-9999",
						invalidPattern: "Ce champ doit correspondre au motif {0}",
						stringTooShort: "Ce champ doit contenir au moins {0} caractères",
						stringTooLong: "Ce champ doit contenir au plus {0} caractères"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					hr_HR:
					{
						required: "Polje je obavezno",
						invalid: "Pogrešna vrijednost",
						months: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"],
						timeUnits:
						{
							SECOND: "sekunda",
							MINUTE: "minuta",
							HOUR: "sati",
							DAY: "dan",
							MONTH: "mjesec",
							YEAR: "godina"
						},
						notOptional: "Polje nije opciono.",
						disallowValue: "{0} vrijednost nije dozvoljena.",
						invalidValueOfEnum: "Moguće vrijednosti : {0}. [{1}]",
						notEnoughItems: "Odaberite najmanje {0}",
						tooManyItems: "Odaberite najviše {0}",
						valueNotUnique: "Vrijednost nije jedinstvena",
						notAnArray: "Vrijednost nije popis",
						invalidDate: "Datum nije u formatu {0}",
						invalidEmail: "E-mail adresa nije u ispravnom formatu, npr: ime.prezime@internet.com",
						stringNotAnInteger: "Vrijednost nije cijeli broj.",
						invalidIPv4: "IPv4 adresa nije ispravna, npr: 192.168.0.1",
						stringValueTooSmall: "Vrijednost je ispod dopuštenog {0}",
						stringValueTooLarge: "Vrijednost je iznad dopuštenog {0}",
						stringValueTooSmallExclusive: "Vrijednost mora biti veća od {0}",
						stringValueTooLargeExclusive: "Vrijednost mora biti manja od {0}",
						stringDivisibleBy: "Vrijednost mora biti djeljiva sa {0}",
						stringNotANumber: "Vrijednost nije broj.",
						invalidPassword: "Neispravna lozinka",
						invalidPhone: "Telefon nije ispravan, npr: (123) 456-9999",
						invalidPattern: "Pogrešan uzorak {0}",
						stringTooShort: "Polje mora imati namjanje {0} znakova",
						stringTooLong: "Polje mora imati najviše {0} znakova"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					it_IT:
					{
						required: "Questo campo è obbligatorio",
						invalid: "Questo campo è invalido",
						months: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
						timeUnits:
						{
							SECOND: "secondi",
							MINUTE: "minuti",
							HOUR: "ore",
							DAY: "giorni",
							MONTH: "mesi",
							YEAR: "anni"
						},
						notOptional: "Questo campo non è opzionale",
						disallowValue: "{0} sono valori invalidi",
						invalidValueOfEnum: "Questo campo deve avere uno dei seguenti valori {0} (valore attuale: {1})",
						notEnoughItems: "Il numero minimo di elementi richiesti è {0}",
						tooManyItems: "Il numero massimo di elementi ammessi è {0}",
						valueNotUnique: "I valori non sono univoci",
						notAnArray: "Questo valore non è di tipo array",
						invalidDate: "Data invalida per il formato {0}",
						invalidEmail: "Indirizzo email invalido, si attendono valori del tipo: info@cloudcms.com",
						stringNotAnInteger: "Questo valore non è un numero intero",
						invalidIPv4: "Indirizzo IPv4 invalido, si attendono valori del tipo: 192.168.0.1",
						stringValueTooSmall: "Il valore minimo per questo campo è {0}",
						stringValueTooLarge: "Il valore massimo per questo campo è {0}",
						stringValueTooSmallExclusive: "Il valore di questo campo deve essere maggiore di {0}",
						stringValueTooLargeExclusive: "Il valore di questo campo deve essere minore di {0}",
						stringDivisibleBy: "Il valore di questo campo deve essere divisibile per {0}",
						stringNotANumber: "Questo valore non è un numero",
						invalidPassword: "Password invalida",
						invalidPhone: "Numero di telefono invalido, si attendono valori del tipo: (123) 456-9999",
						invalidPattern: "Questo campo deve avere la seguente struttura: {0}",
						stringTooShort: "Questo campo non deve contenere meno di {0} caratteri",
						stringTooLong: "Questo campo non deve contenere più di {0} caratteri",
						noneLabel: "Nessuno",
						addItemButtonLabel: "Aggiungi",
						addButtonLabel: "Aggiungi",
						removeButtonLabel: "Rimuovi",
						upButtonLabel: "Su",
						downButtonLabel: "Giù"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					ja_JP:
					{
						required: "この項目は必須です",
						invalid: "この項目は正しい値ではありません",
						months: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
						timeUnits:
						{
							SECOND: "秒",
							MINUTE: "分",
							HOUR: "時",
							DAY: "日",
							MONTH: "月",
							YEAR: "年"
						},
						notOptional: "この項目は任意の回答項目ではありません",
						disallowValue: "{0} は禁止されている値です",
						invalidValueOfEnum: "この項目は {0} の中から選ばなければなりません。現在の値は {1} です",
						notEnoughItems: "項目数は {0} 以上必要です",
						tooManyItems: "項目数は {0} 以下でなければなりません",
						valueNotUnique: "値が一意ではありません",
						notAnArray: "この項目の値が配列でありません",
						stringValueTooSmall: "この項目の最小値は {0} です",
						stringValueTooLarge: "この項目の最大値は {0} です",
						stringValueTooSmallExclusive: "この項目の値は {0} より小さくなければなりません",
						stringValueTooLargeExclusive: "この項目の値は {0} より大きくなければなりません",
						stringDivisibleBy: "値は {0} によって割り切れなければなりません",
						stringNotANumber: "この項目の値が数値ではありません",
						stringValueNotMultipleOf: "値が {0} の倍数ではありません",
						stringNotAnInteger: "この項目の値が整数ではありません",
						stringNotAJSON: "値が正しい JSON 形式の文字列ではありません",
						stringTooShort: "この項目は {0} 文字以上必要です",
						stringTooLong: "この項目は {0} 文字以下でなければなりません",
						invalidTime: "時間が正しくありません",
						invalidDate: "日付が {0} ではありません",
						invalidEmail: "メールアドレスが正しくありません。例えば info@cloudcms.com のような形式です",
						invalidIPv4: "IPv4 アドレスが正しくありません。例えば 192.168.0.1 のような形式です",
						invalidPassword: "パスワードが正しくありません",
						invalidPhone: "電話番号が正しくありません。例えば (123) 456-9999 のような形式です",
						invalidPattern: "この項目は {0} のパターンでなければなりません",
						invalidURLFormat: "URL が正しい形式ではありません",
						keyMissing: "地図が空のキーを含んでいます",
						keyNotUnique: "地図のキーが一意ではありません",
						ObjecttooFewProperties: "プロパティが足りません ({0} が必要です)",
						tooManyProperties: "プロパティ ({0}) の最大数を超えています",
						wordLimitExceeded: "{0} の単語数の制限を超えています",
						editorAnnotationsExist: "エディタが修正すべきエラーを報告しています",
						invalidZipcodeFormatFive: "5桁の Zipcode (#####) ではありません",
						invalidZipcodeFormatNine: "9桁の Zipcode (#####-####) ではありません"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					nb_NO:
					{
						required: "Feltet er obligatorisk",
						invalid: "Verdien er ugyldig",
						months: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"],
						timeUnits:
						{
							SECOND: "Sekunder",
							MINUTE: "Minutter",
							HOUR: "Timer",
							DAY: "Dager",
							MONTH: "Måneder",
							YEAR: "År"
						},
						notOptional: "Dette feltet er obligatorisk",
						disallowValue: "Denne verdien er ikke tillatt: {0}",
						invalidValueOfEnum: "Feltet må inneholde en av følgende verdier: {0}. Nåværende verdi er: {1}",
						notEnoughItems: "Det minste tillatte antallet elementer er {0}",
						tooManyItems: "Det største tillatte antallet elementer er {0}",
						valueNotUnique: "Verdiene er ikke unike",
						notAnArray: "Ikke en liste av verdier",
						invalidDate: "Ugyldig datoformat: {0}",
						invalidEmail: "Ugyldig e-postadresse",
						stringNotAnInteger: "Verdien er ikke et heltall",
						invalidIPv4: "Ugyldig IPv4-adresse",
						stringValueTooSmall: "Den minste tillatte verdien er {0}",
						stringValueTooLarge: "Den største tillatte verdien er {0}",
						stringValueTooSmallExclusive: "Verdien må være større enn {0}",
						stringValueTooLargeExclusive: "Verdien må være mindre enn {0}",
						stringDivisibleBy: "Tallet må være delbart med {0}",
						stringNotANumber: "Verdien er ikke et tall",
						invalidPassword: "Ugyldig passord",
						invalidPhone: "Ugyldig telefonnummer",
						invalidPattern: "Feltet må være i følgende format: {0}",
						stringTooShort: "Dette feltet må minst inneholde {0} tegn",
						stringTooLong: "Dette feltet kan maks inneholde {0} tegn"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					nl_BE:
					{
						required: "Dit veld is verplicht",
						invalid: "Dit veld is ongeldig",
						months: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "July", "Augustus", "September", "Oktober", "November", "December"],
						timeUnits:
						{
							SECOND: "seconden",
							MINUTE: "minuten",
							HOUR: "uren",
							DAY: "dagen",
							MONTH: "maanden",
							YEAR: "jaren"
						},
						notOptional: "Dit veld is niet optioneel.",
						disallowValue: "{0} zijn verboden waarden.",
						invalidValueOfEnum: "Dit veld moet één van volgende bevatten : {0}. [{1}]",
						notEnoughItems: "Het minimum aantal elementen is {0}",
						tooManyItems: "Het maximum aantal elementen is {0}",
						valueNotUnique: "De waarden zijn uniek",
						notAnArray: "Deze waarde is geen lijst",
						invalidDate: "De datum komt niet overeen met formaat {0}",
						invalidEmail: "Ongeldig e-mailadres, vb.: info@cloudcms.com",
						stringNotAnInteger: "Deze waarde is geen geheel getal.",
						invalidIPv4: "Ongeldig IPv4 adres, vb.: 192.168.0.1",
						stringValueTooSmall: "De minimale waarde voor dit veld is {0}",
						stringValueTooLarge: "De maximale waarde voor dit veld is {0}",
						stringValueTooSmallExclusive: "De waarde moet groter zijn dan {0}",
						stringValueTooLargeExclusive: "De waarde moet kleiner zijn dan {0}",
						stringDivisibleBy: "De waarde moet deelbaar zijn door {0}",
						stringNotANumber: "Deze waarde is geen getal.",
						invalidPassword: "Ongeldig wachtwoord",
						invalidPhone: "Ongeldig telefoonnummer, vb: (123) 456-9999",
						invalidPattern: "Dit veld moet overeenkomen met patroon {0}",
						stringTooShort: "Dit veld moet minstens {0} tekens bevatten",
						stringTooLong: "Dit veld moet minder dan {0} tekens bevatten"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					pl_PL:
					{
						required: "To pole jest wymagane",
						invalid: "To pole jest nieprawidłowe",
						months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
						timeUnits:
						{
							SECOND: "sekundy",
							MINUTE: "minuty",
							HOUR: "godziny",
							DAY: "dni",
							MONTH: "miesiące",
							YEAR: "lata"
						},
						notOptional: "To pole nie jest opcjonalne",
						disallowValue: "Ta wartość nie jest dozwolona: {0}",
						invalidValueOfEnum: "To pole powinno zawierać jedną z następujących wartości: {0}. [{1}]",
						notEnoughItems: "Minimalna liczba elementów wynosi {0}",
						tooManyItems: "Maksymalna liczba elementów wynosi {0}",
						valueNotUnique: "Te wartości nie są unikalne",
						notAnArray: "Ta wartość nie jest tablicą",
						invalidDate: "Niepoprawny format daty: {0}",
						invalidEmail: "Niepoprawny adres email, n.p.: info@cloudcms.com",
						stringNotAnInteger: "Ta wartość nie jest liczbą całkowitą",
						invalidIPv4: "Niepoprawny adres IPv4, n.p.: 192.168.0.1",
						stringValueTooSmall: "Minimalna wartość dla tego pola wynosi {0}",
						stringValueTooLarge: "Maksymalna wartość dla tego pola wynosi {0}",
						stringValueTooSmallExclusive: "Wartość dla tego pola musi być większa niż {0}",
						stringValueTooLargeExclusive: "Wartość dla tego pola musi być mniejsza niż {0}",
						stringDivisibleBy: "Wartość musi być podzielna przez {0}",
						stringNotANumber: "Wartość nie jest liczbą",
						invalidPassword: "Niepoprawne hasło",
						invalidPhone: "Niepoprawny numer telefonu, n.p.: (123) 456-9999",
						invalidPattern: "To pole powinno mieć format {0}",
						stringTooShort: "To pole powinno zawierać co najmniej {0} znaków",
						stringTooLong: "To pole powinno zawierać najwyżej {0} znaków"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					pt_BR:
					{
						required: "Este campo é obrigatório",
						invalid: "Este campo é inválido",
						months: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
						timeUnits:
						{
							SECOND: "segundos",
							MINUTE: "minutos",
							HOUR: "horas",
							DAY: "dias",
							MONTH: "meses",
							YEAR: "anos"
						},
						notOptional: "Este campo não é opcional.",
						disallowValue: "{0} são valores proibidas.",
						invalidValueOfEnum: "Este campo deve ter um dos seguintes valores: {0}. [{1}]",
						notEnoughItems: "O número mínimo de elementos é {0}",
						tooManyItems: "O número máximo de elementos é {0}",
						valueNotUnique: "Os valores não são únicos",
						notAnArray: "Este valor não é uma lista",
						invalidDate: "Esta data não tem o formato {0}",
						invalidEmail: "Endereço de email inválida, ex: info@cloudcms.com",
						stringNotAnInteger: "Este valor não é um número inteiro.",
						invalidIPv4: "Endereço IPv4 inválida, ex: 192.168.0.1",
						stringValueTooSmall: "O valor mínimo para este campo é {0}",
						stringValueTooLarge: "O valor máximo para este campo é {0}",
						stringValueTooSmallExclusive: "O valor deste campo deve ser maior que {0}",
						stringValueTooLargeExclusive: "O valor deste campo deve ser menor que {0}",
						stringDivisibleBy: "O valor deve ser divisível por {0}",
						stringNotANumber: "Este valor não é um número.",
						invalidPassword: "Senha inválida",
						invalidPhone: "Número de telefone inválido, ex: (123) 456-9999",
						invalidPattern: "Este campo deve ter o padrão {0}",
						stringTooShort: "Este campo deve incluir pelo menos {0} caracteres",
						stringTooLong: "Este campo pode incluir no máximo {0} caracteres"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					sv_SE:
					{
						required: "Fältet är obligatoriskt",
						invalid: "Värdet är felaktigt",
						months: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"],
						timeUnits:
						{
							SECOND: "sekunder",
							MINUTE: "minuter",
							HOUR: "timmar",
							DAY: "dagar",
							MONTH: "månader",
							YEAR: "år"
						},
						notOptional: "Detta fält är obligatoriskt",
						disallowValue: "Dessa värden är inte tillåtna: {0}",
						invalidValueOfEnum: "Fältet måste innehålla ett av följande värden: {0}. [{1}]",
						notEnoughItems: "Det minsta tillåtna antalet element är {0}",
						tooManyItems: "Det största tillåtna antalet element är {0}",
						valueNotUnique: "Värdena är inte unika",
						notAnArray: "Inte en lista av värden",
						invalidDate: "Felaktigt format för datum: {0}",
						invalidEmail: "Ogiltig e-postadress",
						stringNotAnInteger: "Värdet är inte ett heltal",
						invalidIPv4: "Ogiltig IPv4-adress",
						stringValueTooSmall: "Det minsta tillåtna värdet är {0}",
						stringValueTooLarge: "Det största tillåtna värdet är {0}",
						stringValueTooSmallExclusive: "Värdet måste vara större än {0}",
						stringValueTooLargeExclusive: "Värdet måste vara mindre än {0}",
						stringDivisibleBy: "Talet måste vara delbart med {0}",
						stringNotANumber: "Värdet är inte ett tal",
						invalidPassword: "Ogiltigt lösenord",
						invalidPhone: "Ogiltigt telefonnummer",
						invalidPattern: "Fältet måste vara i följande format: {0}",
						stringTooShort: "Detta fält måste innehålla minst {0} tecken",
						stringTooLong: "Detta fält får innehålla högst {0} tecken"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca;
			t.registerView(
			{
				id: "base",
				messages:
				{
					zh_CN:
					{
						required: "&#27492;&#22495;&#24517;&#39035;",
						invalid: "&#27492;&#22495;&#19981;&#21512;&#26684;",
						months: ["&#19968;&#26376;", "&#20108;&#26376;", "&#19977;&#26376;", "&#22235;&#26376;", "&#20116;&#26376;", "&#20845;&#26376;", "&#19971;&#26376;", "&#20843;&#26376;", "&#20061;&#26376;", "&#21313;&#26376;", "&#21313;&#19968;&#26376;", "&#21313;&#20108;&#26376;"],
						timeUnits:
						{
							SECOND: "&#31186;",
							MINUTE: "&#20998;",
							HOUR: "&#26102;",
							DAY: "&#26085;",
							MONTH: "&#26376;",
							YEAR: "&#24180;"
						},
						notOptional: "&#27492;&#22495;&#38750;&#20219;&#36873;",
						disallowValue: "&#38750;&#27861;&#36755;&#20837;&#21253;&#25324; {0}.",
						invalidValueOfEnum: "&#20801;&#35768;&#36755;&#20837;&#21253;&#25324; {0}. [{1}]",
						notEnoughItems: "&#26368;&#23567;&#20010;&#25968; {0}",
						tooManyItems: "&#26368;&#22823;&#20010;&#25968; {0}",
						valueNotUnique: "&#36755;&#20837;&#20540;&#19981;&#29420;&#29305;",
						notAnArray: "&#19981;&#26159;&#25968;&#32452;",
						invalidDate: "&#26085;&#26399;&#26684;&#24335;&#22240;&#35813;&#26159; {0}",
						invalidEmail: "&#20234;&#22969;&#20799;&#26684;&#24335;&#19981;&#23545;, ex: info@cloudcms.com",
						stringNotAnInteger: "&#19981;&#26159;&#25972;&#25968;.",
						invalidIPv4: "&#19981;&#26159;&#21512;&#27861;IP&#22320;&#22336;, ex: 192.168.0.1",
						stringValueTooSmall: "&#26368;&#23567;&#20540;&#26159; {0}",
						stringValueTooLarge: "&#26368;&#22823;&#20540;&#26159; {0}",
						stringValueTooSmallExclusive: "&#20540;&#24517;&#39035;&#22823;&#20110; {0}",
						stringValueTooLargeExclusive: "&#20540;&#24517;&#39035;&#23567;&#20110; {0}",
						stringDivisibleBy: "&#20540;&#24517;&#39035;&#33021;&#34987; {0} &#25972;&#38500;",
						stringNotANumber: "&#19981;&#26159;&#25968;&#23383;.",
						invalidPassword: "&#38750;&#27861;&#23494;&#30721;",
						invalidPhone: "&#38750;&#27861;&#30005;&#35805;&#21495;&#30721;, ex: (123) 456-9999",
						invalidPattern: "&#27492;&#22495;&#39035;&#26377;&#26684;&#24335; {0}",
						stringTooShort: "&#27492;&#22495;&#33267;&#23569;&#38271;&#24230; {0}",
						stringTooLong: "&#27492;&#22495;&#26368;&#22810;&#38271;&#24230; {0}"
					}
				}
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca,
				n = {};
			n.field = function() {}, n.control = function() {}, n.container = function() {}, n.form = function() {}, n.required = function() {}, n.optional = function() {}, n.readonly = function() {}, n.disabled = function() {}, n.enabled = function() {}, n.clearValidity = function() {}, n.invalid = function(e) {}, n.valid = function() {}, n.addMessage = function(e, t, n, i) {}, n.removeMessages = function() {}, n.enableButton = function(e) {}, n.disableButton = function(e) {}, n.arrayToolbar = function(n)
			{
				var i = this;
				if(n)
				{
					var a = e(i.getFieldEl()).find(".alpaca-array-toolbar[data-alpaca-array-toolbar-field-id='" + i.getId() + "']");
					if(a.length > 0)
					{
						var r = e("<div class='" + t.MARKER_CLASS_ARRAY_TOOLBAR + "' " + t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + i.getId() + "'></div>");
						a.before(r), a.remove()
					}
				}
				else
				{
					var r = e(i.getContainerEl()).find("." + t.MARKER_CLASS_ARRAY_TOOLBAR + "[" + t.MARKER_DATA_ARRAY_TOOLBAR_FIELD_ID + "='" + i.getId() + "']");
					if(r.length > 0)
					{
						var o = i.view.getTemplateDescriptor("container-array-toolbar", i);
						if(o)
						{
							var l = t.tmpl(o,
							{
								actions: i.toolbar.actions,
								id: i.getId(),
								toolbarStyle: i.options.toolbarStyle,
								view: i.view
							});
							e(r).before(l), e(r).remove()
						}
					}
				}
			}, n.arrayActionbars = function(n)
			{
				for(var i = this, a = 0; a < i.children.length; a++)
				{
					var r = i.children[a],
						o = r.getId();
					if(n)
					{
						var l = e(i.getFieldEl()).find(".alpaca-array-actionbar[data-alpaca-array-actionbar-field-id='" + o + "']");
						if(l.length > 0)
						{
							var s = e("<div class='" + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "' " + t.MARKER_DATA_ARRAY_ITEM_KEY + "='" + r.name + "'></div>");
							l.before(s), l.remove()
						}
					}
					else
					{
						var s = e(i.getFieldEl()).find("." + t.MARKER_CLASS_ARRAY_ITEM_ACTIONBAR + "[" + t.MARKER_DATA_ARRAY_ITEM_KEY + "='" + r.name + "']");
						if(s.length > 0)
						{
							var u = i.view.getTemplateDescriptor("container-array-actionbar", i);
							if(u)
							{
								var c = t.tmpl(u,
								{
									actions: i.actionbar.actions,
									name: r.name,
									parentFieldId: i.getId(),
									fieldId: r.getId(),
									itemIndex: a,
									actionbarStyle: i.options.actionbarStyle,
									view: i.view
								});
								e(s).before(c), e(s).remove()
							}
						}
					}
				}
			}, n.autocomplete = function() {};
			var i = {};
			i.button = "", i.smallButton = "", i.addIcon = "", i.removeIcon = "", i.upIcon = "", i.downIcon = "", i.expandedIcon = "", i.collapsedIcon = "", i.table = "", t.registerView(
			{
				id: "web-display",
				parent: "base",
				type: "display",
				ui: "web",
				title: "Default HTML5 display view",
				displayReadonly: !0,
				templates:
				{},
				callbacks: n,
				styles: i,
				horizontal: !1
			}), t.registerView(
			{
				id: "web-display-horizontal",
				parent: "web-display",
				horizontal: !0
			}), t.registerView(
			{
				id: "web-edit",
				parent: "base",
				type: "edit",
				ui: "web",
				title: "Default HTML5 edit view",
				displayReadonly: !0,
				templates:
				{},
				callbacks: n,
				styles: i,
				horizontal: !1
			}), t.registerView(
			{
				id: "web-edit-horizontal",
				parent: "web-edit",
				horizontal: !0
			}), t.registerView(
			{
				id: "web-create",
				parent: "web-edit",
				type: "create",
				title: "Default HTML5 create view",
				displayReadonly: !1,
				templates:
				{},
				horizontal: !1
			}), t.registerView(
			{
				id: "web-create-horizontal",
				parent: "web-create",
				horizontal: !0
			})
		}(jQuery),
		function(e)
		{
			var t = e.alpaca,
				n = {};
			n.button = "btn btn-default", n.smallButton = "btn btn-default btn-sm", n.addIcon = "glyphicon glyphicon-plus", n.removeIcon = "glyphicon glyphicon-remove", n.upIcon = "glyphicon glyphicon-chevron-up", n.downIcon = "glyphicon glyphicon-chevron-down", n.expandedIcon = "glyphicon glyphicon-circle-arrow-down", n.collapsedIcon = "glyphicon glyphicon-circle-arrow-right", n.table = "table table-striped table-bordered table-hover";
			var i = {};
			i.required = function()
			{
				var t = this.getFieldEl(),
					n = e(t).find("label.alpaca-control-label");
				e('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(n)
			}, i.invalid = function()
			{
				this.isControlField && e(this.getFieldEl()).addClass("has-error")
			}, i.valid = function()
			{
				e(this.getFieldEl()).removeClass("has-error")
			}, i.control = function()
			{
				var t = this.getFieldEl(),
					n = this.getControlEl();
				if(e(t).find("input").addClass("form-control"), e(t).find("textarea").addClass("form-control"), e(t).find("select").addClass("form-control"), e(t).find("input[type=checkbox]").removeClass("form-control"), e(t).find("input[type=file]").removeClass("form-control"), e(t).find("input[type=radio]").removeClass("form-control"), "color" === this.inputType && e(t).find("input").removeClass("form-control"), e(t).find("input[type=checkbox]").parent().parent().addClass("checkbox"), e(t).find("input[type=radio]").parent().parent().addClass("radio"), e(t).parents("form").hasClass("form-inline") && (e(t).find("input[type=checkbox]").parent().addClass("checkbox-inline"), e(t).find("input[type=radio]").parent().addClass("radio-inline")), e(t).find("label.alpaca-control-label").addClass("control-label"), this.view.horizontal)
				{
					e(t).find("label.alpaca-control-label").addClass("col-sm-3");
					var i = e("<div></div>");
					i.addClass("col-sm-9"), e(n).after(i), i.append(n), e(t).append("<div style='clear:both;'></div>")
				}
			}, i.container = function()
			{
				var t = this.getContainerEl();
				this.view.horizontal && e(t).addClass("form-horizontal")
			}, i.form = function()
			{
				this.getFormEl()
			}, i.enableButton = function(t)
			{
				e(t).removeAttr("disabled")
			}, i.disableButton = function(t)
			{
				e(t).attr("disabled", "disabled")
			}, i.collapsible = function()
			{
				var n = this.getFieldEl(),
					i = e(n).find("legend").first(),
					a = e("[data-toggle='collapse']", i);
				if(e(a).length > 0)
				{
					var r = this.getContainerEl(),
						o = e(r).attr("id");
					o || (o = t.generateId(), e(r).attr("id", o)), e(r).addClass("collapse"), this.options.collapsed || e(r).addClass("in"), e(a).attr("data-target") || e(a).attr("data-target", "#" + o), e(a).mouseover(function(t)
					{
						e(this).css("cursor", "pointer")
					})
				}
			}, i.tableHeaderRequired = function(t, n, i)
			{
				e('<span class="alpaca-icon-required glyphicon glyphicon-star"></span>').prependTo(i)
			}, i.tableHeaderOptional = function(e, t, n) {}, t.registerView(
			{
				id: "bootstrap-display",
				parent: "web-display",
				type: "display",
				ui: "bootstrap",
				title: "Display View for Bootstrap 3",
				displayReadonly: !0,
				callbacks: i,
				styles: n,
				templates:
				{}
			}), t.registerView(
			{
				id: "bootstrap-display-horizontal",
				parent: "bootstrap-display",
				horizontal: !0
			}), t.registerView(
			{
				id: "bootstrap-edit",
				parent: "web-edit",
				type: "edit",
				ui: "bootstrap",
				title: "Edit View for Bootstrap 3",
				displayReadonly: !0,
				callbacks: i,
				styles: n,
				templates:
				{}
			}), t.registerView(
			{
				id: "bootstrap-edit-horizontal",
				parent: "bootstrap-edit",
				horizontal: !0
			}), t.registerView(
			{
				id: "bootstrap-create",
				parent: "bootstrap-edit",
				title: "Create View for Bootstrap 3",
				type: "create",
				displayReadonly: !1
			}), t.registerView(
			{
				id: "bootstrap-create-horizontal",
				parent: "bootstrap-create",
				horizontal: !0
			})
		}(jQuery), Alpaca.defaultView = "bootstrap", Alpaca
});
