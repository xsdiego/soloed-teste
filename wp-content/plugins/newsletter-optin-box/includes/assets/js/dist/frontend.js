(()=>{var n={3342:n=>{var t={is_showing:!1,classes:{popup:"noptin-popup",content:"noptin-popup-content",overlay:"noptin-popup-overlay",close:"noptin-popup-close",closing:"noptin-popup-closing",open:"noptin-popup-open",opening:"noptin-popup-opening",opened:"noptin-popup-opened"},el:"",content:"",open:function(n){var t=this;this.is_showing=!0,this.el=jQuery("<div></div>").addClass("".concat(this.classes.popup," ").concat(this.classes.opening)),this.el.append('<div class="'.concat(this.classes.overlay,'"></div>')),this.el.append('<div class="'.concat(this.classes.content,'"></div>')),this.content=this.el.find(".".concat(this.classes.content)).html(jQuery(n).prop("outerHTML")),this.el.on("click",(function(n){t.content.is(n.target)||0!==t.content.has(n.target).length||t.close()})),this.el.on("click",".".concat(this.classes.close),(function(){t.close()})),this.el.appendTo("body"),jQuery("body").addClass(this.classes.open),this.el.removeClass(this.classes.opening).addClass(this.classes.opened)},replaceContent:function(n){if(!this.is_showing)return!1;this.content.html(jQuery(n).prop("outerHTML"))},close:function(){var n=this;if(!this.is_showing)return!0;this.is_showing=!1,this.el.removeClass(this.classes.opened).addClass(this.classes.closing),this.transitionThen(this.content,(function(){jQuery(n.el).remove(),jQuery("body").removeClass(n.classes.open)}))},transitionThen:function(n,t){var i="none"!=n.css("transition")||"none"!=n.css("-webkit-transition"),o=!("none"==n.css("animation-name")&&"none"==n.css("-webkit-animation-name")||"0s"==n.css("animation-duration")&&"0s"==n.css("-webkit-animation-duration")),e=!1,s=function(){e||(t(),e=!0)};o?n.one("webkitAnimationEnd animationend",s):i?n.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",s):s(),setTimeout(s,300)}};jQuery(window).on("keyup",(function(n){27===n.keyCode&&t.close()})),n.exports=t},3096:(n,t,i)=>{var o="Expected a function",e=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,p="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,l="object"==typeof self&&self&&self.Object===Object&&self,u=p||l||Function("return this")(),f=Object.prototype.toString,d=Math.max,m=Math.min,h=function(){return u.Date.now()};function g(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==f.call(n)}(n))return NaN;if(g(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=g(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(e,"");var i=r.test(n);return i||a.test(n)?c(n.slice(2),i?2:8):s.test(n)?NaN:+n}n.exports=function(n,t,i){var e=!0,s=!0;if("function"!=typeof n)throw new TypeError(o);return g(i)&&(e="leading"in i?!!i.leading:e,s="trailing"in i?!!i.trailing:s),function(n,t,i){var e,s,r,a,c,p,l=0,u=!1,f=!1,w=!0;if("function"!=typeof n)throw new TypeError(o);function y(t){var i=e,o=s;return e=s=void 0,l=t,a=n.apply(o,i)}function b(n){return l=n,c=setTimeout(T,t),u?y(n):a}function _(n){var i=n-p;return void 0===p||i>=t||i<0||f&&n-l>=r}function T(){var n=h();if(_(n))return k(n);c=setTimeout(T,function(n){var i=t-(n-p);return f?m(i,r-(n-l)):i}(n))}function k(n){return c=void 0,w&&e?y(n):(e=s=void 0,a)}function j(){var n=h(),i=_(n);if(e=arguments,s=this,p=n,i){if(void 0===c)return b(p);if(f)return c=setTimeout(T,t),y(p)}return void 0===c&&(c=setTimeout(T,t)),a}return t=v(t)||0,g(i)&&(u=!!i.leading,r=(f="maxWait"in i)?d(v(i.maxWait)||0,t):r,w="trailing"in i?!!i.trailing:w),j.cancel=function(){void 0!==c&&clearTimeout(c),l=0,e=p=s=c=void 0},j.flush=function(){return void 0===c?a:k(h())},j}(n,t,{leading:e,maxWait:t,trailing:s})}}},t={};function i(o){var e=t[o];if(void 0!==e)return e.exports;var s=t[o]={exports:{}};return n[o](s,s.exports,i),s.exports}i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),function(n){"use strict";var t=i(3096),o=function(){return"key"+Math.random().toString(36).replace(/[^a-z]+/g,"")},e=i(3342),s={subscribed:!1,hidePopup:function(){e.close()},logFormView:function(t){n.post(noptin.ajaxurl,{action:"noptin_log_form_impression",_wpnonce:noptin.nonce,form_id:t})},displayPopup:function(t,i){if(n(t).closest(".noptin-optin-main-wrapper").hasClass("noptin-slide_in-main-wrapper"))return this.displaySlideIn(t,i);if(i||!e.is_showing&&!this.subscribed){this.logFormView(n(t).find("input[name=noptin_form_id]").val()),e.is_showing?e.replaceContent(n(t).closest(".noptin-popup-main-wrapper")):e.open(n(t).closest(".noptin-popup-main-wrapper"));var o=n(t).find("input[name=noptin_form_id]").val();void 0!==n(t).data("once-per-session")?localStorage.setItem("noptinFormDisplayed"+o,(new Date).getTime()):sessionStorage.setItem("noptinFormDisplayed"+o,"1")}},displaySlideIn:function(t,i){!i&&this.subscribed||(this.logFormView(n(t).find("input[name=noptin_form_id]").val()),n(t).addClass("noptin-showing"))}},r={immeadiate:function(){s.displayPopup(this)},before_leave:function(){var t=this,i=o(),e=null;n(document).on("mouseleave."+i,(function(o){o.clientY>0||(e=setTimeout((function(){s.displayPopup(t),n(document).off("mouseleave."+i),n(document).off("mouseenter."+i)}),200))})),n(document).on("mouseenter."+i,(function(n){e&&(clearTimeout(e),e=null)}))},on_scroll:function(){var i=this,e=o(),r=parseInt(n(this).data("on-scroll"));n(window).on("scroll."+e,t((function(){n(window).scrollTop()/(n(document).height()-n(window).height())*100>r&&(s.displayPopup(i),n(window).off("scroll."+e))}),500))},after_delay:function(){var t=this,i=1e3*parseInt(n(this).data("after-delay"));setTimeout((function(){s.displayPopup(t)}),i)},after_comment:function(){n("#commentform").on("submit",(function(n){}))},after_click:function(){var t=n(this).data("after-click"),i=this;t&&n("body").on("click",t,(function(n){n.preventDefault(),s.displayPopup(i,!0)}))}};function a(t){n(t).prepend('<label style="display: none;"><input type="checkbox" name="noptin_confirm_submit"/>Are you sure?</label>'),n("body").on("submit",t,(function(t){var i=this;t.preventDefault(),n(this).fadeTo(600,.5).find(".noptin_feedback_success, .noptin_feedback_error").empty().hide();var o={},e=n(this).serializeArray();jQuery.each(e,(function(n,t){o[t.name]=t.value})),o.action="noptin_new_subscriber",o._wpnonce=noptin.nonce,o.conversion_page=window.location.href,n.post(noptin.ajaxurl,o).done((function(t,o,e){if("string"!=typeof t){try{"function"==typeof gtag?gtag("event","subscribe",{method:"Noptin Form"}):"function"==typeof ga&&ga("send","event","Noptin Form","Subscribe","Noptin")}catch(n){console.error(n.message)}if(s.subscribed=!0,"redirect"!=t.action){var r=n(i).find(".noptin_form_redirect").val();r?window.location=r:"msg"==t.action&&(n(i).html('<div class="noptin-big noptin-padded">'+t.msg+"</div>"),n(i).css({display:"flex",justifyContent:"center"}),setTimeout((function(){n(i).closest(".noptin-showing").removeClass("noptin-showing")}),2e3))}else window.location=t.redirect}else n(i).find(".noptin_feedback_error").text(t).show()})).fail((function(){n(i).find(".noptin_feedback_error").text("Could not establish a connection to the server.").show()})).always((function(){n(i).fadeTo(600,1)}))}))}n(".noptin-popup-main-wrapper .noptin-optin-form-wrapper").each((function(){var t=n(this).data("trigger"),i=n(this).find("input[name=noptin_form_id]").val();if(void 0!==n(this).data("once-per-session")&&"after_click"!=t){if(i){var o=localStorage.getItem("noptinFormDisplayed"+i),e=(new Date).getTime();if(o&&e-o<6048e5)return!0;localStorage.removeItem("noptinFormDisplayed"+i)}}else if(i&&"after_click"!=t&&sessionStorage.getItem("noptinFormDisplayed"+i))return;r[t]&&r[t].call(this)})),n(".noptin-slide_in-main-wrapper .noptin-optin-form-wrapper").each((function(){var t=n(this).data("trigger");r[t]&&r[t].call(this)})),n(document).ready((function(){n(document).on("click",".noptin-showing .noptin-popup-close",(function(t){n(this).closest(".noptin-showing").removeClass("noptin-showing")}))})),a(".noptin-optin-form-wrapper form"),n(".wp-block-noptin-email-optin form, .noptin-email-optin-widget form").find("input[type=email]").attr("name","email"),a(".wp-block-noptin-email-optin form, .noptin-email-optin-widget form"),n(document).on("click",".noptin-mark-as-existing-subscriber",(function(t){var i=function(n){var t=new Date;t.setTime(t.getTime()+2592e6);var i="expires="+t.toUTCString();document.cookie="".concat(n,"=1;").concat(i,";path=").concat(noptin.cookie_path)};noptin.cookie&&i(noptin.cookie),i("noptin_email_subscribed"),n(this).closest(".noptin-showing").removeClass("noptin-showing"),e.close(),s.subscribed=!0}))}(jQuery)})();