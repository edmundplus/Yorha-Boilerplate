webpackJsonp([2],{367:function(t,n,e){"use strict";function o(t,n){if(t===n||Object(m.is)(t,n))return!0;if("object"!==(void 0===t?"undefined":j()(t))||null===t||"object"!==(void 0===n?"undefined":j()(n))||null===n)return!1;var e=Object.keys(t||{}),o=Object.keys(n||{});if(e.length!==o.length)return!1;for(var r=Object.prototype.hasOwnProperty.bind(n),c=0;c<e.length;c++)if(!r(e[c])||!Object(m.is)(t[e[c]],n[e[c]]))return!1;return!0}function r(t,n,e){return!o(t.props,n)||!o(t.state,e)}function c(t,n){return r(this,t,n)}function i(t){t.prototype.shouldComponentUpdate=c}Object.defineProperty(n,"__esModule",{value:!0});var u,a=e(52),p=e.n(a),l=e(53),f=e.n(l),s=e(54),h=e.n(s),y=e(55),d=e.n(y),v=e(3),b=e.n(v),m=e(94),O=e(95),j=e.n(O),_=i,g=e(56),k=_(u=function(t){function n(t){return p()(this,n),h()(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t))}return d()(n,t),f()(n,[{key:"render",value:function(){var t=this.props.content;return b.a.createElement("div",null,t)}}]),n}(v.Component))||u;e.d(n,"default",function(){return P});var C,E,P=(C=Object(g.b)(function(t){return{compContent:{color:t.color.text}}}),_(E=C(E=function(t){function n(){var t,e,o,r;p()(this,n);for(var c=arguments.length,i=Array(c),u=0;u<c;u++)i[u]=arguments[u];return e=o=h()(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(i))),o.state={info:["component 1 content in yorha","component 2 content in yorha","component 3 content in yorha","component 4 content in yorha","component 5 content in yorha"]},r=e,h()(o,r)}return d()(n,t),f()(n,[{key:"render",value:function(){var t=this.state.info,n=this.props.styles;return b.a.createElement("div",null,b.a.createElement("div",Object(g.a)(n.compContent),t.map(function(t,n){return b.a.createElement(k,{key:n,content:t})})))}}]),n}(v.Component))||E)||E)}});