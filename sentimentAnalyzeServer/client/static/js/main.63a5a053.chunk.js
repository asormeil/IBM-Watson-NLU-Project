(this.webpackJsonpsentimentanalyzeclient=this.webpackJsonpsentimentanalyzeclient||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(1),s=n.n(i),c=n(8),r=n.n(c),a=(n(14),n(2)),o=n(3),u=n(5),l=n(4),b=(n(7),n(15),n(9)),j=n(0),d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("table",{className:"table table-bordered",children:Object(j.jsx)("tbody",{children:Object.entries(this.props.emotions).map((function(t){var e=Object(b.a)(t,2),n=e[0],i=e[1];return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:n}),Object(j.jsx)("td",{children:i})]},n)}))})})})}}]),n}(s.a.Component),m=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var i=arguments.length,s=new Array(i),c=0;c<i;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).state={innercomp:Object(j.jsx)("textarea",{rows:"4",cols:"50",id:"textinput"}),mode:"text",sentimentOutput:[],sentiment:!0},t.renderOutput=function(e){var n=1,i="url";"text"===e&&(i="text",n=4),t.setState({innercomp:Object(j.jsx)("textarea",{rows:n,cols:"50",id:"textinput"}),mode:i,sentimentOutput:[],sentiment:!0})},t.sendForSentimentAnalysis=function(){t.setState({sentiment:!0});var e=".",n=t.state.mode;e=e+"/"+n+"/sentiment?"+n+"="+document.getElementById("textinput").value,fetch(e).then((function(e){e.json().then((function(e){t.setState({sentimentOutput:e.label});var n=e.label,i="white";switch(n){case"positive":i="green";break;case"negative":i="red";break;default:i="yellow"}n=Object(j.jsx)("div",{style:{color:i,fontSize:20},children:n}),t.setState({sentimentOutput:n})}))}))},t.sendForEmotionAnalysis=function(){t.setState({sentiment:!1});var e=".",n=t.state.mode;e=e+"/"+n+"/emotion?"+n+"="+document.getElementById("textinput").value,fetch(e).then((function(e){e.json().then((function(e){t.setState({sentimentOutput:Object(j.jsx)(d,{emotions:e})})}))}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("button",{className:"btn btn-info",onClick:function(){t.renderOutput("text")},children:"Text"}),Object(j.jsx)("button",{className:"btn btn-dark",onClick:function(){t.renderOutput("url")},children:"URL"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),this.state.innercomp,Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"btn-primary",onClick:this.sendForSentimentAnalysis,children:"Analyze Sentiment"}),Object(j.jsx)("button",{className:"btn-primary",onClick:this.sendForEmotionAnalysis,children:"Analyze Emotion"}),Object(j.jsx)("br",{}),this.state.sentimentOutput]})}}]),n}(s.a.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,i=e.getFID,s=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),i(t),s(t),c(t),r(t)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),O()},7:function(t,e,n){}},[[17,1,2]]]);
//# sourceMappingURL=main.63a5a053.chunk.js.map