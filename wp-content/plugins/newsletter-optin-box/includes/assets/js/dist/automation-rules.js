(()=>{var t,e,n={4217:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("select",{staticStyle:{width:"100%"}},[t._t("default")],2)};i._withStripped=!0;var o=n(6714),a=function(t,e,n,i,o,a,r,s){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=[],u._compiled=!0),l)if(u.functional){u._injectStyles=l;var d=u.render;u.render=function(t,e){return l.call(e),d(t,e)}}else{var c=u.beforeCreate;u.beforeCreate=c?[].concat(c,l):[l]}return{exports:t,options:u}}(n.n(o)(),i);a.options.__file="includes/assets/js/src/partials/noptin-select.vue";const r=a.exports,s=new Vue({components:{"noptin-select":r},el:"#noptin-automation-rule-editor",data:jQuery.extend(!0,{},noptinRules),methods:{saveRule:function(){var t=jQuery;t(this.$el).fadeTo("fast",.33),t(this.$el).find(".save-automation-rule").css({visibility:"visible"});var e={id:this.rule_id,action_settings:this.action_settings,trigger_settings:this.trigger_settings,action:"noptin_save_automation_rule",_ajax_nonce:noptinRules.nonce};jQuery("#wp-noptinemailbody-wrap").length&&(tinyMCE.get("noptinemailbody")?this.action_settings.email_content=tinyMCE.get("noptinemailbody").getContent():this.action_settings.email_content=t("#noptinemailbody").val());var n=this.error,i=this.saved,o=this.$el;t(this.$el).find(".noptin-save-saved").hide(),t(this.$el).find(".noptin-save-error").hide(),jQuery.post(noptinRules.ajaxurl,e).done((function(){t(o).find(".noptin-save-saved").show().html("<p>".concat(i,"</p>"))})).fail((function(){t(o).find(".noptin-save-error").show().html("<p>".concat(n,"</p>"))})).always((function(){t(o).fadeTo("fast",1).find(".save-automation-rule").css({visibility:"hidden"})}))}},mounted:function(){}})},6714:t=>{t.exports={props:["value","tags"],mounted:function(){var t=this,e="yes"==this.tags;jQuery(this.$el).select2({width:"resolve",tags:e}).val(this.value).trigger("change.select2").on("change",(function(e){t.$emit("input",jQuery(e.currentTarget).val())}))},watch:{value:function(t){jQuery(this.$el).val(t).trigger("change.select2")}},destroyed:function(){jQuery(this.$el).off().select2("destroy")}}}},i={};function o(t){var e=i[t];if(void 0!==e)return e.exports;var a=i[t]={exports:{}};return n[t](a,a.exports,o),a.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t=jQuery,e=function(){var e=t(".noptin-automation-rule-trigger-hidden").val(),n=t(".noptin-automation-rule-action-hidden").val();e&&n?t(".noptin-automation-rule-create").prop("disabled",!1).removeClass("button-secondary").addClass("button-primary"):t(".noptin-automation-rule-create").prop("disabled",!0).removeClass("button-primary").addClass("button-secondary")},t("#noptin-automation-rule-editor .noptin-automation-rule-trigger").ddslick({width:400,onSelected:function(n){var i=n.selectedData.value;t(".noptin-automation-rule-trigger-hidden").val(i),e()}}),t("#noptin-automation-rule-editor .noptin-automation-rule-action").ddslick({width:400,onSelected:function(n){var i=n.selectedData.value;t(".noptin-automation-rule-action-hidden").val(i),e()}}),t("#noptin-automation-rule-editor.edit-automation-rule").length&&o(4217).Z})();