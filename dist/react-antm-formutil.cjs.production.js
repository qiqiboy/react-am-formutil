"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("antd-mobile");var t=e(require("prop-types"));var a=require("react");var o=e(a);var c=require("react-formutil");var n=function(e,r){n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return n(e,r)};function i(e,r){n(e,r);function t(){this.constructor=e}e.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}var l=function(){l=Object.assign||function e(r){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var c in t)if(Object.prototype.hasOwnProperty.call(t,c))r[c]=t[c]}return r};return l.apply(this,arguments)};function s(e,r){var t={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0)t[a]=e[a];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,a=Object.getOwnPropertySymbols(e);o<a.length;o++)if(r.indexOf(a[o])<0)t[a[o]]=e[a[o]];return t}var u=r.List.Item;var f=1;var p=function(e){f=e};var v=r.Switch.name!=="Switch";function d(e){if(e){if(typeof e.type==="function"){var r=e.type;if(r.formutilType){return r.formutilType}if(v){return r}return r.displayName||r.name}else{return e.props.type||e.type}}}var m=v?r.Checkbox:"Checkbox";var y=v?r.Radio:"Radio";var h=v?r.PickerView:"PickerView";var b=v?r.DatePicker:"DatePicker";var k=v?r.Switch:"Switch";var P=v?r.Range:"Range";var _=v?r.Picker:"Picker";var O=v?r.ImagePicker:"ImagePicker";var g=v?r.InputItem:"InputItem";var w=v?r.TextareaItem:"TextareaItem";var E=v?r.Slider:"Slider";var I=v?r.Checkbox.CheckboxItem:"CheckboxItem";var j=v?r.Radio.RadioItem:"RadioItem";var x=v?r.Checkbox.AgreeItem:"AgreeItem";var C=function(e){i(n,e);function n(){return e!==null&&e.apply(this,arguments)||this}n.prototype.render=function(){var e=this.props;var t=e,n=t.children,i=t.className,p=t.label,v=t.errorLevel,C=v===void 0?f:v,T=s(t,["children","className","label","errorLevel"]);var N=a.Children.only(n);var R=d(N);switch(R){case m:case y:case k:case I:case j:case x:T.__TYPE__="checked";break;case"checked":case"array":case"object":case"number":case"empty":T.__TYPE__=R;break;default:T.__TYPE__="empty";break}return o.createElement(c.EasyField,l({},T,{passUtil:"$fieldutil",children:function(t){var c,n;var f=e.valuePropName,v=f===void 0?"value":f,d=e.changePropName,T=d===void 0?"onChange":d,S=e.focusPropName,$=S===void 0?"onFocus":S,q=e.blurPropName,L=q===void 0?"onBlur":q;var F=t.$fieldutil,A=T,Y=t[A],B=$,D=t[B],M=L,V=t[M],U=v,z=t[U],G=s(t,["$fieldutil",typeof A==="symbol"?A:A+"",typeof B==="symbol"?B:B+"",typeof M==="symbol"?M:M+"",typeof U==="symbol"?U:U+""]);var H=F.$invalid,J=F.$dirty,K=F.$touched,Q=F.$getFirstError,W=F.$focused;var X;switch(R){case m:case y:case k:case I:case j:case x:case"checked":var Z=e.checked,ee=Z===void 0?true:Z,re=e.unchecked,te=re===void 0?false:re;X={checked:z===ee,onChange:function(e){var r=e&&e.target?e.target.checked:e;Y(r?ee:te,e)}};break;case O:X={onChange:Y,files:z};break;default:X=(c={},c[T]=Y,c[v]=z,c);break}Object.assign(X,(n={},n[$]=D,n[L]=V,n));var ae;switch(C){case 0:ae=H&&J&&K;break;case 1:ae=H&&J;break;case 2:ae=H;break;default:ae=false;break}var oe={invalid:H,valid:!H,dirty:J,pristine:!J,touched:K,untouched:!K,focused:W};G.className=Object.keys(oe).filter(function(e){return oe[e]}).map(function(e){return"antm-formutil-"+e}).concat(i).filter(Boolean).join(" ");var ce=ae?{error:true}:{};switch(R){case g:case w:ce.onErrorClick=function(){r.Modal.alert("Error info",Q())};case I:case j:case x:case P:case E:case h:return a.cloneElement(N,l({},G,ce,X,{title:p,children:p}));case b:case _:return a.cloneElement(N,l({},X,{children:o.createElement(u,l({},G,ce),p)}));default:var ne=a.cloneElement(N,X);return p?o.createElement(u,l({},G,ce,{extra:ne}),p):o.createElement(u,l({},G,ce),ne)}}}))};n.propTypes=l({},u.propTypes,{label:t.any,errorLevel:t.oneOf([0,1,2,"off"]),children:t.element.isRequired});return n}(a.Component);Object.keys(c).forEach(function(e){Object.defineProperty(exports,e,{enumerable:true,get:function(){return c[e]}})});exports.FormItem=C;exports.setErrorLevel=p;
