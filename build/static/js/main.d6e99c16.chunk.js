(this.webpackJsonpnoticiasreact=this.webpackJsonpnoticiasreact||[]).push([[0],{14:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),o=t.n(c),i=(t(14),t(6)),l=t.n(i),s=t(1),u=t(2),m=t(4),p=t(3),v=t(5),d=function(e){var a=e.titulo;return r.a.createElement("nav",{className:"nav-wrapper light-blue darken-3"},r.a.createElement("a",{href:"#!",className:"brand-logo center"},a))},h=function(e){var a=e.noticia,t=a.title,n=a.urlToImage,c=a.url,o=a.description,i=a.source,l=n?r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:n,alt:t}),r.a.createElement("span",{className:"card-title"},i.name)):null;return r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card"},l,r.a.createElement("div",{className:"card-content"},r.a.createElement("h3",null,t),r.a.createElement("p",null,o)),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"waves-effect waves-light btn"},"Ver M\xe1s"))))},E=function(e){var a=e.noticias;return r.a.createElement("div",{className:"row"},a.map((function(e){return r.a.createElement(h,{key:e.url,noticia:e})})))},f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={categoria:"general"},t.cambiarCategoria=function(e){t.setState({categoria:e.target.value},(function(){t.props.consultarApi(t.state.categoria)}))},t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"buscador row"},r.a.createElement("div",{className:"col s12 m8 offset-m2"},r.a.createElement("form",null,r.a.createElement("h2",null,"Busca una categor\xeda"),r.a.createElement("div",{className:"input-field col s12 m8"},r.a.createElement("select",{onChange:this.cambiarCategoria},r.a.createElement("option",{value:"general"},"General"),r.a.createElement("option",{value:"health"},"Salud"),r.a.createElement("option",{value:"science"},"Ciencia"),r.a.createElement("option",{value:"sports"},"Deportes"),r.a.createElement("option",{value:"tecnology"},"Tecnolog\xeda"),r.a.createElement("option",{value:"business"},"Negocios"),r.a.createElement("option",{value:"entertainment"},"Entretenimiento"))))))}}]),a}(n.Component),g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(r)))).state={noticias:[]},t.consultarApi=function(){var e,a,n,r,c=arguments;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"general",a="\n    https://newsapi.org/v2/top-headlines?country=mx&category=".concat(e,"&apiKey=56813720afda45abb35c34c4c5c4d736"),o.next=4,l.a.awrap(fetch(a));case 4:return n=o.sent,o.next=7,l.a.awrap(n.json());case 7:r=o.sent,t.setState({noticias:r.articles});case 9:case"end":return o.stop()}}))},t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){this.consultarApi()}},{key:"render",value:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d,{titulo:"Noticias React API"}),r.a.createElement("div",{className:"container white contenedor-noticias"},r.a.createElement(f,{consultarApi:this.consultarApi}),r.a.createElement(E,{noticias:this.state.noticias})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.d6e99c16.chunk.js.map