(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{216:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(208),s=a(77),l=a.n(s),o=a(207),d=(a(236),function(){return i.a.createElement("div",{className:"lpi-header"},i.a.createElement(l.a,{to:"/"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{alt:"",className:"wordmark",src:"/logo/formico-wordmark.svg"}))),i.a.createElement("div",{className:"buttons"},i.a.createElement(o.a,{text:"Submit A Website",link:"https://formico.typeform.com/to/RhOpHk"}),i.a.createElement(o.a,{type:"secondary",text:"Subscribe",link:"https://formico.typeform.com/to/TNtQ6Y"})))}),c=(a(27),a(223)),u=a.n(c),f=(a(237),function(e){var t=e.title,a=e.url,r=e.categories,n=e.images,s=[];n&&(s=[{img:n.mobile,title:"Mobile"},{img:n.tablet,title:"Tablet"},{img:n.desktop,title:"Desktop"}].map((function(e,t){return i.a.createElement("li",{key:t,className:"preview-wrapper"},i.a.createElement("h4",null,e.title),i.a.createElement("div",{className:"preview"},i.a.createElement(u.a,{fluid:e.img})))})));var d="";return r&&(d=r.split(", ").map((function(e){return"#"+e+" "}))),i.a.createElement("div",{className:"page"},i.a.createElement(l.a,{to:"/landing-page-inspiration",className:"back-button"},"< Back"),i.a.createElement("section",{className:"text-info"},i.a.createElement("h2",null,t),i.a.createElement("a",{className:"site-link",href:a},a),i.a.createElement("div",{className:"categories"},d)),i.a.createElement("ul",{className:"images-container"},s),i.a.createElement(o.a,{text:"Find a Developer",link:"/"}))}),g=a(209);t.default=function(e){var t=e.pageContext;return i.a.createElement(n.a,null,i.a.createElement("div",{className:"lpi-landing-page",style:{background:"#141433"}},i.a.createElement(d,null),i.a.createElement(f,{title:t.title,url:t.url,categories:t.categories,images:t.images}),i.a.createElement(g.a,null)))}},223:function(e,t,a){"use strict";a(13),a(11),a(5),a(58),a(144),a(224);var r=a(22);t.__esModule=!0,t.default=void 0;var i,n=r(a(86)),s=r(a(81)),l=r(a(145)),o=r(a(146)),d=r(a(0)),c=r(a(46)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(N,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},N=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,g=e.draggable,p=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,onClick:u,ref:t,loading:f,draggable:g,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,k=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,o.default)({opacity:O?1:0,transition:R?"opacity "+b+"ms":"none"},l),z="boolean"==typeof h?"lightgray":h,T={transitionDelay:b+"ms"},x=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&T,{},l,{},f),P={title:t,alt:this.state.isVisible?"":a,style:x,className:g,itemProp:S};if(p){var j=p,W=j[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),z&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&T)}),W.base64&&d.default.createElement(I,{src:W.base64,spreadProps:P,imageVariants:j,generateSources:w}),W.tracedSVG&&d.default.createElement(I,{src:W.tracedSVG,spreadProps:P,imageVariants:j,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(j),d.default.createElement(N,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:k,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:k},W,{imageVariants:j}))}}))}if(m){var M=m,q=M[0],G=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},z&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:z,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},R&&T)}),q.base64&&d.default.createElement(I,{src:q.base64,spreadProps:P,imageVariants:M,generateSources:w}),q.tracedSVG&&d.default.createElement(I,{src:q.tracedSVG,spreadProps:P,imageVariants:M,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(M),d.default.createElement(N,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:S,loading:k,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,o.default)({alt:a,title:t,loading:k},q,{imageVariants:M}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:R,sizes:V,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([V,c.default.arrayOf(V)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var z=O;t.default=z},224:function(e,t,a){"use strict";a(148)("fixed",(function(e){return function(){return e(this,"tt","","")}}))}}]);
//# sourceMappingURL=component---src-pages-landing-page-js-9662938c8f3c48005956.js.map