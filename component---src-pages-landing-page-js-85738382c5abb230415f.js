(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(145),o=a(143),l=a.n(o),s=a(144),c=(a(183),function(){return r.a.createElement("div",{className:"lpi-header"},r.a.createElement(l.a,{to:"/"},r.a.createElement("div",{className:"logo-container"},r.a.createElement("img",{alt:"",className:"wordmark",src:"/logo/formico-wordmark.svg"}))),r.a.createElement("div",{className:"buttons"},r.a.createElement(s.a,{text:"Submit A Website",link:"https://formico.typeform.com/to/RhOpHk"}),r.a.createElement(s.a,{type:"secondary",text:"Subscribe",link:"https://formico.typeform.com/to/TNtQ6Y"})))}),u=(a(79),a(48),a(166)),p=a.n(u),f=(a(184),function(e){var t=e.title,a=e.url,n=e.categories,i=e.images,o=[];i&&(o=[{img:i.mobile,title:"Mobile"},{img:i.tablet,title:"Tablet"},{img:i.desktop,title:"Desktop"}].map(function(e,t){return r.a.createElement("li",{key:t,className:"preview-wrapper"},r.a.createElement("h4",null,e.title),r.a.createElement("div",{className:"preview"},r.a.createElement(p.a,{fluid:e.img})))}));var c="";return n&&(c=n.split(", ").map(function(e){return"#"+e+" "})),r.a.createElement("div",{className:"page"},r.a.createElement(l.a,{to:"/landing-page-inspiration",className:"back-button"},"< Back"),r.a.createElement("section",{className:"text-info"},r.a.createElement("h2",null,t),r.a.createElement("a",{className:"site-link",href:a},a),r.a.createElement("div",{className:"categories"},c)),r.a.createElement("ul",{className:"images-container"},o),r.a.createElement(s.a,{text:"Find a Developer",link:"/"}))}),d=a(153);t.default=function(e){var t=e.pageContext;return r.a.createElement(i.a,null,r.a.createElement("div",{className:"lpi-landing-page",style:{background:"#141433"}},r.a.createElement(c,null),r.a.createElement(f,{title:t.title,url:t.url,categories:t.categories,images:t.images}),r.a.createElement(d.a,null)))}},143:function(e,t,a){"use strict";var n=a(33);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(150)),i=n(a(151)),o=n(a(7)),l=n(a(49)),s=n(a(51)),c=n(a(4)),u=n(a(0)),p=a(15),f=a(152);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var m={activeClassName:c.default.string,activeStyle:c.default.object},v=function(e){function t(t){var a;a=e.call(this)||this,(0,s.default)((0,l.default)((0,l.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,l.default)((0,l.default)(a))),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,l=t.onClick,s=t.onMouseEnter,c=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),m=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),h=d(a);return u.default.createElement(p.Link,(0,i.default)({to:h,state:c,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return l&&l(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:c,replace:m})),!0}},v))},t}(u.default.Component);v.propTypes=(0,i.default)({},m,{innerRef:c.default.func,onClick:c.default.func,to:c.default.string.isRequired,replace:c.default.bool});var h=v;t.default=h;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},151:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},157:function(e,t,a){"use strict";a(158)("link",function(e){return function(t){return e(this,"a","href",t)}})},158:function(e,t,a){var n=a(6),r=a(16),i=a(27),o=/"/g,l=function(e,t,a,n){var r=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},183:function(e,t,a){},184:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-landing-page-js-85738382c5abb230415f.js.map