!function(e){e.selectator=function(t,i){var s={prefix:"selectator_",height:"auto",useDimmer:!1,useSearch:!0,showAllOptionsOnFocus:!1,selectFirstOptionOnSearch:!0,keepOpen:!1,searchCallback:function(){},labels:{search:"Search..."}},a=this;a.settings={};var n=e(t),o=null,r=null,l=null,d=null,c=null,p=void 0===n.attr("multiple"),h=!p,u=!0,f={backspace:8,tab:9,enter:13,shift:16,ctrl:17,alt:18,capslock:20,escape:27,pageup:33,pagedown:34,end:35,home:36,left:37,up:38,right:39,down:40};a.init=function(){if(a.settings=e.extend({},s,i),a.settings.useDimmer&&0===e("#"+a.settings.prefix+"dimmer").length){var t=e(document.createElement("div"));t.attr("id",a.settings.prefix+"dimmer"),t.hide(),e(document.body).prepend(t)}n.addClass("selectator"),o=e(document.createElement("div")),void 0!==n.attr("id")&&o.attr("id",a.settings.prefix+n.attr("id")),o.addClass(a.settings.prefix+"element "+(h?"multiple ":"single ")+"options-hidden"),a.settings.useSearch||o.addClass("disable_search"),o.css({/*width:n.css("width"),minHeight:n.css("height"),*/padding:n.css("padding"),"flex-grow":n.css("flex-grow"),position:"relative"}),"element"===a.settings.height&&o.css({height:n.outerHeight()+"px"}),d=e(document.createElement("span")),d.addClass(a.settings.prefix+"textlength"),d.css({position:"absolute",visibility:"hidden"}),o.append(d),r=e(document.createElement("div")),r.addClass(a.settings.prefix+"chosen_items"),o.append(r),l=e(document.createElement("input")),l.addClass(a.settings.prefix+"input"),l.attr("tabindex",n.attr("tabindex")),a.settings.useSearch?p?l.attr("placeholder",a.settings.labels.search):l.width(20):(l.attr("readonly",!0),l.css({width:"0px",height:"0px",overflow:"hidden",border:0,padding:0,position:"absolute"})),l.attr("autocomplete","false"),o.append(l),c=e(document.createElement("ul")),c.addClass(a.settings.prefix+"options"),o.append(c),n.after(o),n.hide(),"undefined"!=typeof Scrollator&&c.scrollator({zIndex:1001,customClass:"ease_preventOverlay"}),n.change(function(){v()}),o.on("focus",function(e){l.focus(),l.trigger("focus")}),o.on("mousedown",function(e){if(e.preventDefault(),l.focus(),l.trigger("focus"),l[0].setSelectionRange)l[0].setSelectionRange(l.val().length,l.val().length);else if(l[0].createTextRange){var t=l[0].createTextRange();t.collapse(!0),t.moveEnd("character",l.val().length),t.moveStart("character",l.val().length),t.select()}}),o.on("mouseup",function(e){}),o.on("click",function(e){l.focus(),l.trigger("focus")}),o.on("dblclick",function(e){l.select(),l.trigger("focus")}),l.on("click",function(e){}),l.on("dblclick",function(e){}),l.on("keydown",function(e){var t=e.keyCode||e.which,i=null,s=null;switch(t){case f.up:e.preventDefault(),b(),i=c.find(".active"),0!==i.length?(s=i.prevUntil("."+a.settings.prefix+"option:visible").add(i).first().prev("."+a.settings.prefix+"option:visible"),i.removeClass("active"),s.addClass("active")):c.find("."+a.settings.prefix+"option").filter(":visible").last().addClass("active"),_();break;case f.down:e.preventDefault(),b(),i=c.find(".active"),0!==i.length?(s=i.nextUntil("."+a.settings.prefix+"option:visible").add(i).last().next("."+a.settings.prefix+"option:visible"),i.removeClass("active"),s.addClass("active")):c.find("."+a.settings.prefix+"option").filter(":visible").first().addClass("active"),_();break;case f.escape:e.preventDefault();break;case f.enter:e.preventDefault(),i=c.find(".active"),0!==i.length?y():""!==l.val()&&a.settings.searchCallback(l.val()),g();break;case f.backspace:a.settings.useSearch?(""===l.val()&&h&&(n.find("option:selected").last()[0].selected=!1,n.trigger("change"),v()),g()):e.preventDefault();break;default:g()}}),l.on("keyup",function(e){e.preventDefault(),e.stopPropagation();var t=e.which;switch(t){case f.escape:w();break;case f.enter:a.settings.keepOpen||w();break;case f.left:case f.right:case f.up:case f.down:case f.tab:case f.shift:break;default:C()}!o.hasClass("options-hidden")||t!==f.left&&t!==f.right&&t!==f.up&&t!==f.down||b(),g()}),l.on("focus",function(e){o.addClass("focused"),(p||a.settings.showAllOptionsOnFocus||!a.settings.useSearch)&&b()}),l.on("blur",function(e){o.removeClass("focused"),w()}),o.delegate("."+a.settings.prefix+"option","mouseover",function(t){var i=c.find(".active");i.removeClass("active");var s=e(this);s.addClass("active")}),o.delegate("."+a.settings.prefix+"option","mousedown",function(e){e.preventDefault(),e.stopPropagation()}),o.delegate("."+a.settings.prefix+"option","mouseup",function(e){y()}),o.delegate("."+a.settings.prefix+"option","click",function(e){e.stopPropagation()}),m(),v()};var g=function(){if(d.text(l.val()),h){var e=d.width()>o.width()-30?o.width()-30:d.width()+30;l.css({width:e+"px"})}},v=function(){r.empty(),n.find("option").each(function(){var t=e(this);if(this.selected){var i=e(document.createElement("div"));if(i.addClass(a.settings.prefix+"chosen_item"),i.addClass(a.settings.prefix+"value_"+t.val().replace(/\W/g,"")),void 0!==t.attr("class")&&i.addClass(t.attr("class")),void 0!==t.data("left")){var s=e(document.createElement("div"));s.addClass(a.settings.prefix+"chosen_item_left").html(t.attr("data-left")),i.append(s)}if(void 0!==t.data("right")){var o=e(document.createElement("div"));o.addClass(a.settings.prefix+"chosen_item_right").html(t.attr("data-right")),i.append(o)}var l=e(document.createElement("div"));if(l.addClass(a.settings.prefix+"chosen_item_title").html(t.html()),i.append(l),void 0!==t.data("subtitle")){var d=e(document.createElement("div"));d.addClass(a.settings.prefix+"chosen_item_subtitle").html(t.attr("data-subtitle")),i.append(d)}var c=e(document.createElement("div"));c.data("source_option_element",this),c.addClass(a.settings.prefix+"chosen_item_remove"),c.on("mousedown",function(e){}),c.on("mouseup",function(t){e(this).data("source_option_element").selected=!1,n.trigger("change"),C(),v()}),c.html("X"),i.append(c),r.append(i)}})},m=function(){c.empty();var t=[];n.children().each(function(){if("optgroup"===e(this).prop("tagName").toLowerCase()){var i=e(this);if(0!==i.children("option").length){var s=[];i.children("option").each(function(){s.push({type:"option",text:e(this).html(),element:this})}),t.push({type:"group",text:i.attr("label"),options:s,element:i})}}else t.push({type:"option",text:e(this).html(),element:this})}),e(t).each(function(){if("group"===this.type){var t=e(document.createElement("li"));t.addClass(a.settings.prefix+"group"),void 0!==e(this.element).attr("class")&&t.addClass(e(this.element).attr("class")),t.html(e(this.element).attr("label")),c.append(t),e(this.options).each(function(){var e=x.call(this.element,!0);c.append(e)})}else{var i=x.call(this.element,!1);c.append(i)}}),C()},x=function(t){var i=e(document.createElement("li"));if(i.data("source_option_element",this),i.addClass(a.settings.prefix+"option"),i.addClass(a.settings.prefix+"value_"+e(this).val().replace(/\W/g,"")),t&&i.addClass(a.settings.prefix+"group_option"),this.selected&&i.addClass("active"),void 0!==e(this).attr("class")&&i.addClass(e(this).attr("class")),void 0!==e(this).data("left")){var s=e(document.createElement("div"));s.addClass(a.settings.prefix+"option_left").html(e(this).attr("data-left")),i.append(s)}if(void 0!==e(this).data("right")){var n=e(document.createElement("div"));n.addClass(a.settings.prefix+"option_right").html(e(this).attr("data-right")),i.append(n)}var o=e(document.createElement("div"));if(o.addClass(a.settings.prefix+"option_title").html(e(this).html()),i.append(o),void 0!==e(this).data("subtitle")){var r=e(document.createElement("div"));r.addClass(a.settings.prefix+"option_subtitle").html(e(this).attr("data-subtitle")),i.append(r)}return i},C=function(){var t=""===l.val().replace(/\s/g,"");u=!1;var i=l.val().toLowerCase();c.find("."+a.settings.prefix+"option").each(function(){var s=e(this),n=s.data("source_option_element");n.selected&&!p||(!a.settings.useSearch||!t&&-1===e(n).html().toLowerCase().indexOf(i))&&a.settings.useSearch?s.hide():(s.show(),u=u?u:!0)}),c.find("."+a.settings.prefix+"group").each(function(){var t=e(this),i=!1;t.nextUntil("."+a.settings.prefix+"group").each(function(){var t=e(this);return"none"!=t.css("display")?(i=!0,!1):void 0}),i?t.show():t.hide()}),b(),h&&(c.find(".active").removeClass("active"),t||c.find("."+a.settings.prefix+"option").filter(":visible").first().addClass("active"))},b=function(){l.is(":focus")&&(u||p)?(o.removeClass("options-hidden").addClass("options-visible"),a.settings.useDimmer&&e("#"+a.settings.prefix+"dimmer").show(),setTimeout(function(){c.css("top",o.outerHeight()+(h?0:l.outerHeight())-1+"px"),"undefined"!=typeof Scrollator&&c.data("scrollator").show()},1),_()):w()},w=function(){o.removeClass("options-visible").addClass("options-hidden"),"undefined"!=typeof Scrollator&&c.data("scrollator").hide(),a.settings.useDimmer&&e("#"+a.settings.prefix+"dimmer").hide()},_=function(){var e=c.find("."+a.settings.prefix+"option.active");e.length>0&&c.scrollTop(c.scrollTop()+e.position().top-c.height()/2+e.height()/2)},y=function(){var e=c.find(".active");e.data("source_option_element").selected=!0,n.trigger("change"),l.val(""),C(),v(),a.settings.keepOpen||w()};a.refresh=function(){v()},a.destroy=function(){o.remove(),e.removeData(t,"selectator"),n.show(),0===e("."+a.settings.prefix+"element").length&&e("#"+a.settings.prefix+"dimmer").remove()},a.init()},e.fn.selectator=function(t){return t=void 0!==t?t:{},this.each(function(){if("object"==typeof t){if(void 0===e(this).data("selectator")){var i=new e.selectator(this,t);e(this).data("selectator",i)}}else e(this).data("selectator")[t]?e(this).data("selectator")[t].apply(this,Array.prototype.slice.call(arguments,1)):e.error("Method "+t+" does not exist in $.selectator")})}}(jQuery),jQuery(function(){jQuery(".selectator").each(function(){var e=jQuery(this),t={};jQuery.each(e.data(),function(e,i){"selectator"==e.substring(0,10)&&(t[e.substring(10,11).toLowerCase()+e.substring(11)]=i)}),e.selectator(t)})});