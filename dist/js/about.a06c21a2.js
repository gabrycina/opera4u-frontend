(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0724":function(t,e,c){"use strict";c("7658")},"092c":function(t,e,c){},"0b5d":function(t,e,c){},"107c":function(t,e,c){var n=c("d039");t.exports=n((function(){var t=RegExp("(?<a>b)","string".charAt(5));return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"129f":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"14c3":function(t,e,c){var n=c("c6b6"),a=c("9263");t.exports=function(t,e){var c=t.exec;if("function"===typeof c){var r=c.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"1bc1":function(t,e,c){"use strict";c("8284")},"2afc":function(t,e,c){"use strict";c("092c")},3901:function(t,e,c){"use strict";c("0b5d")},"439d":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23");Object(n["z"])("data-v-248a47c3");var a={class:"about"},r=Object(n["h"])("h1",{id:"title"},"Artists",-1),i=Object(n["h"])("option",{value:""},"Pick a Category",-1),s=["value"],o={class:"divider"},l={class:"pt10 pb3 text-left ole",style:{"font-weight":"300","word-wrap":"break-word"}},u={key:0,class:"text-center xs12 px5"},b=Object(n["h"])("h1",{class:"pa12",style:{color:"#868686","font-weight":"300",opacity:".5"}}," No Artists in this Category ",-1),d=[b],j={class:"cardImage xs12"},f=["src"],O={class:"title2 pt4"};function h(t,e,c,b,h,g){var p=Object(n["E"])("w-divider"),m=Object(n["E"])("w-flex"),v=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["g"])("div",a,[r,Object(n["h"])("div",null,[Object(n["R"])(Object(n["h"])("select",{"onUpdate:modelValue":e[0]||(e[0]=function(t){return h.selected=t}),class:"py3 pl8 input"},[i,(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(h.categories,(function(t){return Object(n["w"])(),Object(n["g"])("option",{value:t.displayName,key:t.id},Object(n["I"])(t.displayName),9,s)})),128))],512),[[n["M"],h.selected]])]),(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(g.filteredCategories,(function(t){return Object(n["w"])(),Object(n["g"])("div",{key:t.id},[Object(n["h"])("div",o,[Object(n["h"])("h1",l,Object(n["I"])(t.displayName),1),Object(n["k"])(p),Object(n["k"])(m,{class:"row wrap"},{default:Object(n["Q"])((function(){return[0==t.artists.length?(Object(n["w"])(),Object(n["g"])("section",u,d)):Object(n["f"])("",!0),(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(t.artists,(function(t){return Object(n["w"])(),Object(n["g"])("section",{class:"lg3 md3 xs12 py5 px5",key:t.id},[Object(n["k"])(v,{to:{name:"Artist",params:{id:t.id}}},{default:Object(n["Q"])((function(){return[Object(n["k"])(m,{class:"column align-center"},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",j,[Object(n["h"])("img",{src:h.baseUrl+t.avatar.url},null,8,f)]),Object(n["h"])("p",O,[Object(n["h"])("b",null,Object(n["I"])(t.name),1)])]})),_:2},1024)]})),_:2},1032,["to"])])})),128))]})),_:2},1024)])])})),128))])}Object(n["x"])();var g=c("1da1"),p=(c("96cf"),c("d3b7"),c("4de4"),{title:"Opera4u - Our Artists",name:"Artists",data:function(){return{categories:[],selected:"",search:"",pdf:{},baseUrl:"http://localhost:1337"}},components:{},methods:{fetchCategories:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/categories",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,t.categories=c,console.log(t.categories);case 5:case"end":return e.stop()}}),e)})))()},selectCategory:function(t){for(var e=this.selected.length,c=0;c<e;c++)c===t?this.selected[t]=!this.selected[t]:this.selected[c]=!1},fetchPdf:function(){var t=this;return Object(g["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/all-artists",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,t.pdf=c,console.log(t.pdf);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchCategories(),this.fetchPdf()},computed:{filteredCategories:function(){var t=this;return""==this.selected?this.categories:this.categories.filter((function(e){return t.selected===e.displayName}))}}});c("2afc");p.render=h,p.__scopeId="data-v-248a47c3";e["default"]=p},"466d":function(t,e,c){"use strict";var n=c("d784"),a=c("825a"),r=c("50c4"),i=c("1d80"),s=c("8aa5"),o=c("14c3");n("match",(function(t,e,c){return[function(e){var c=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,c):new RegExp(e)[t](String(c))},function(t){var n=c(e,this,t);if(n.done)return n.value;var i=a(this),l=String(t);if(!i.global)return o(i,l);var u=i.unicode;i.lastIndex=0;var b,d=[],j=0;while(null!==(b=o(i,l))){var f=String(b[0]);d[j]=f,""===f&&(i.lastIndex=s(l,r(i.lastIndex),u)),j++}return 0===j?null:d}]}))},5884:function(t,e,c){"use strict";c.r(e);c("ac1f"),c("841c");var n=c("7a23");Object(n["z"])("data-v-3c3c2cc4");var a=Object(n["h"])("h1",null,"News",-1),r={id:"container"},i={class:"card-link",href:"#"},s={class:"blog-card"},o=["src"],l={class:"article-details"},u={class:"post-title"},b={class:"post-description"};function d(t,e,c,d,j,f){var O=Object(n["E"])("router-link"),h=Object(n["E"])("w-flex");return Object(n["w"])(),Object(n["g"])("div",null,[a,Object(n["R"])(Object(n["h"])("input",{class:"input",placeholder:"Search by title","onUpdate:modelValue":e[0]||(e[0]=function(t){return j.search=t})},null,512),[[n["N"],j.search]]),Object(n["k"])(h,{class:"column pt10 align-center"},{default:Object(n["Q"])((function(){return[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(f.filteredNews,(function(t){return Object(n["w"])(),Object(n["g"])("div",{key:t.id},[Object(n["k"])(O,{to:{name:"NewsArticle",params:{id:t.id}}},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",r,[Object(n["h"])("a",i,[Object(n["h"])("article",s,[Object(n["h"])("img",{class:"post-image",src:"".concat(j.baseUrl+t.image.url)},null,8,o),Object(n["h"])("div",l,[Object(n["h"])("h3",u,Object(n["I"])(t.title),1),Object(n["h"])("p",b,Object(n["I"])(t.body),1)])])])])]})),_:2},1032,["to"])])})),128))]})),_:1})])}Object(n["x"])();var j=c("1da1"),f=(c("96cf"),c("d3b7"),c("4e82"),c("4de4"),c("466d"),{title:"Opera4u - News",name:"News",data:function(){return{news:[],search:"",baseUrl:"http://localhost:1337",imageProps:{lazy:!0,ratio:.75}}},methods:{fetchNews:function(){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/news-articles",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,c.sort((function(t,e){return new Date(e.date)-new Date(t.date)})),t.news=c,console.log(t.news);case 6:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchNews()},computed:{filteredNews:function(){var t=this;return this.news.filter((function(e){return e.title.match(t.search)}))}}});c("5a61");f.render=d,f.__scopeId="data-v-3c3c2cc4";e["default"]=f},"5a61":function(t,e,c){"use strict";c("dc45")},"5ad6":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23");Object(n["z"])("data-v-3de4b74d");var a={key:0,class:"container"},r={key:0,class:"cardImage xs12"},i=["src"],s={id:"copy",class:"pt2 pl2 text-left"},o=Object(n["h"])("h3",{class:"gradientText pt4"},"Email",-1),l=["href"],u={id:"contactText",style:{"white-space":"nowrap"}},b={key:0,class:"text-left title1"},d={class:"text"},j={class:"container"},f=Object(n["h"])("h1",{class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}},[Object(n["h"])("b",null," Managed Artist ")],-1),O={class:"managedArtists"},h={key:0},g={class:"my1 active"},p={key:1},m={class:"my1 inactive"};function v(t,e,c,v,w,x){var k=Object(n["E"])("font-awesome-icon"),y=Object(n["E"])("w-flex"),_=Object(n["E"])("w-divider"),E=Object(n["E"])("read-more"),I=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["e"])(y,{class:"column xs12"},{default:Object(n["Q"])((function(){return[w.agent!={}?(Object(n["w"])(),Object(n["g"])("section",a,[Object(n["k"])(y,{class:Object(n["r"])([t.isMobileHelper()?"column":"row"])},{default:Object(n["Q"])((function(){return[Object(n["k"])(y,{class:"column xs12 md1 lg1 text-left mb12 "},{default:Object(n["Q"])((function(){return[w.agent.avatar?(Object(n["w"])(),Object(n["g"])("div",r,[Object(n["h"])("img",{src:w.baseUrl+w.agent.avatar.url},null,8,i)])):Object(n["f"])("",!0),Object(n["h"])("p",s,"Photo by @"+Object(n["I"])(w.agent.name),1),o,Object(n["h"])("a",{href:"mailto:"+w.agent.email},[Object(n["k"])(y,{class:"row contactContainer mt2 mb4 justify-space-evenly align-center"},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",null,[Object(n["k"])(k,{class:"black mx3",icon:"envelope"})]),Object(n["h"])("h1",u,Object(n["I"])(w.agent.name),1),Object(n["k"])(k,{class:"black ml3",icon:"chevron-down",rotation:"270"})]})),_:1})],8,l)]})),_:1}),Object(n["k"])(y,{class:"column xs12 md5 lg5"},{default:Object(n["Q"])((function(){return[w.agent?(Object(n["w"])(),Object(n["g"])("div",b,[Object(n["h"])("h1",null,Object(n["I"])(w.agent.name),1),Object(n["h"])("h2",d,Object(n["I"])(w.agent.role),1),Object(n["k"])(_,{class:"my3"}),Object(n["k"])(y,{class:"row justify-start mb3"},{default:Object(n["Q"])((function(){return[w.agent.bioEnglish?(Object(n["w"])(),Object(n["g"])("div",{key:0,class:Object(n["r"])(["button",["en"==w.bioSelected?"button__active":"button__inactive"]]),onClick:e[0]||(e[0]=function(t){return x.changeActiveBio("en")})}," EN ",2)):Object(n["f"])("",!0),w.agent.bioGerman?(Object(n["w"])(),Object(n["g"])("div",{key:1,class:Object(n["r"])(["button ml3",["de"==w.bioSelected?"button__active":"button__inactive"]]),onClick:e[1]||(e[1]=function(t){return x.changeActiveBio("de")})}," DE ",2)):Object(n["f"])("",!0),w.agent.bioItalian?(Object(n["w"])(),Object(n["g"])("div",{key:2,class:Object(n["r"])(["button ml3",["it"==w.bioSelected?"button__active":"button__inactive"]]),onClick:e[2]||(e[2]=function(t){return x.changeActiveBio("it")})}," IT ",2)):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])("b",null,[Object(n["k"])(E,{class:"text","more-str":"Read More",text:w.bio,link:"#","less-str":"Read Less","max-chars":380},null,8,["text"])])])):Object(n["f"])("",!0)]})),_:1})]})),_:1},8,["class"])])):Object(n["f"])("",!0),Object(n["h"])("section",j,[f,Object(n["k"])(_),Object(n["h"])("div",O,[Object(n["k"])(y,{style:{"max-height":"20rem"},class:"column wrap mt4 justify-start align-start"},{default:Object(n["Q"])((function(){return[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(w.agent.artists,(function(t){return Object(n["w"])(),Object(n["g"])("div",{key:t},[t.avatar&&t.bioEnglish?(Object(n["w"])(),Object(n["g"])("div",h,[Object(n["k"])(I,{to:{name:"Artist",params:{id:t.id}}},{default:Object(n["Q"])((function(){return[Object(n["h"])("h1",g,Object(n["I"])(t.name),1)]})),_:2},1032,["to"])])):(Object(n["w"])(),Object(n["g"])("div",p,[Object(n["h"])("h1",m,Object(n["I"])(t.name),1)]))])})),128))]})),_:1})])])]})),_:1})}Object(n["x"])();var w=c("1da1"),x=(c("96cf"),c("d3b7"),{name:"Agent",props:["id"],data:function(){return{agent:{},baseUrl:"http://localhost:1337",bio:"",bioSelected:"en",reload:0,windowWidth:window.innerWidth}},methods:{onResize:function(){this.windowWidth=window.innerWidth},changeActiveBio:function(t){this.bioSelected=t,"en"==this.bioSelected?this.bio=this.agent.bioEnglish:"it"==this.bioSelected?this.bio=this.agent.bioItalian:this.bio=this.agent.bioGerman},fetchAgent:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/agents?id="+t.id,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,t.agent=c[0],console.log(t.agent);case 5:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},created:function(){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchAgent();case 2:t.changeActiveBio("en");case 3:case"end":return e.stop()}}),e)})))()}});c("1bc1");x.render=v,x.__scopeId="data-v-3de4b74d";e["default"]=x},"69ac":function(t,e,c){},7658:function(t,e,c){},8284:function(t,e,c){},"841c":function(t,e,c){"use strict";var n=c("d784"),a=c("825a"),r=c("1d80"),i=c("129f"),s=c("14c3");n("search",(function(t,e,c){return[function(e){var c=r(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,c):new RegExp(e)[t](String(c))},function(t){var n=c(e,this,t);if(n.done)return n.value;var r=a(this),o=String(t),l=r.lastIndex;i(l,0)||(r.lastIndex=0);var u=s(r,o);return i(r.lastIndex,l)||(r.lastIndex=l),null===u?-1:u.index}]}))},"8aa5":function(t,e,c){"use strict";var n=c("6547").charAt;t.exports=function(t,e,c){return e+(c?n(t,e).length:1)}},9263:function(t,e,c){"use strict";var n=c("ad6d"),a=c("9f7f"),r=c("5692"),i=c("7c73"),s=c("69f3").get,o=c("fce3"),l=c("107c"),u=RegExp.prototype.exec,b=r("native-string-replace",String.prototype.replace),d=u,j=function(){var t=/a/,e=/b*/g;return u.call(t,"a"),u.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),f=a.UNSUPPORTED_Y||a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],h=j||O||f||o||l;h&&(d=function(t){var e,c,a,r,o,l,h,g=this,p=s(g),m=p.raw;if(m)return m.lastIndex=g.lastIndex,e=d.call(m,t),g.lastIndex=m.lastIndex,e;var v=p.groups,w=f&&g.sticky,x=n.call(g),k=g.source,y=0,_=t;if(w&&(x=x.replace("y",""),-1===x.indexOf("g")&&(x+="g"),_=String(t).slice(g.lastIndex),g.lastIndex>0&&(!g.multiline||g.multiline&&"\n"!==t[g.lastIndex-1])&&(k="(?: "+k+")",_=" "+_,y++),c=new RegExp("^(?:"+k+")",x)),O&&(c=new RegExp("^"+k+"$(?!\\s)",x)),j&&(a=g.lastIndex),r=u.call(w?c:g,_),w?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=g.lastIndex,g.lastIndex+=r[0].length):g.lastIndex=0:j&&r&&(g.lastIndex=g.global?r.index+r[0].length:a),O&&r&&r.length>1&&b.call(r[0],c,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r&&v)for(r.groups=l=i(null),o=0;o<v.length;o++)h=v[o],l[h[0]]=r[h[1]];return r}),t.exports=d},"99af":function(t,e,c){"use strict";var n=c("23e7"),a=c("d039"),r=c("e8b5"),i=c("861d"),s=c("7b0b"),o=c("50c4"),l=c("8418"),u=c("65f0"),b=c("1dde"),d=c("b622"),j=c("2d00"),f=d("isConcatSpreadable"),O=9007199254740991,h="Maximum allowed index exceeded",g=j>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),p=b("concat"),m=function(t){if(!i(t))return!1;var e=t[f];return void 0!==e?!!e:r(t)},v=!g||!p;n({target:"Array",proto:!0,forced:v},{concat:function(t){var e,c,n,a,r,i=s(this),b=u(i,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?i:arguments[e],m(r)){if(a=o(r.length),d+a>O)throw TypeError(h);for(c=0;c<a;c++,d++)c in r&&l(b,d,r[c])}else{if(d>=O)throw TypeError(h);l(b,d++,r)}return b.length=d,b}})},"9bbd":function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23");Object(n["z"])("data-v-9141f9d0");var a={key:0,class:"container"},r={key:0,class:"cardImage xs12"},i=["src"],s={id:"copy",class:"pt2 pl2 text-left"},o=Object(n["h"])("h3",{class:"gradientText pt4"},"Contact",-1),l={key:0,class:"contact"},u=["src"],b={id:"contactText",style:{"white-space":"nowrap"}},d=["href"],j=["href"],f=["href"],O={class:"mt2 mb12 text"},h={key:0,class:"text-left title1"},g={class:"text"},p={class:"container"},m=Object(n["h"])("h1",{class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}},[Object(n["h"])("b",null," Gallery ")],-1),v={class:"container"},w={class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}},x={class:"newsTitle text-left"},k={class:"xs8 text-left newsBody"},y={class:"container"},_=Object(n["h"])("h1",{class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}},[Object(n["h"])("b",null," Press ")],-1),E={class:"container"},I=Object(n["h"])("h1",{class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}},[Object(n["h"])("b",null," Disography ")],-1),R={key:0},A={class:"cardImage xs12 text-center"},C=["src"],Q={class:"gradientText pt4"};function T(t,e,c,T,N,S){var U=Object(n["E"])("font-awesome-icon"),z=Object(n["E"])("w-flex"),B=Object(n["E"])("router-link"),P=Object(n["E"])("w-divider"),G=Object(n["E"])("read-more"),L=Object(n["E"])("vue-carousel"),W=Object(n["E"])("HorizontalCard"),M=Object(n["E"])("vue-horizontal");return Object(n["w"])(),Object(n["e"])(z,{class:"column xs12"},{default:Object(n["Q"])((function(){return[N.artist!={}?(Object(n["w"])(),Object(n["g"])("section",a,[Object(n["k"])(z,{class:Object(n["r"])([t.isMobileHelper()?"column":"row"])},{default:Object(n["Q"])((function(){return[Object(n["k"])(z,{class:"column xs12 md1 lg1 text-left"},{default:Object(n["Q"])((function(){return[N.artist.avatar?(Object(n["w"])(),Object(n["g"])("div",r,[Object(n["h"])("img",{src:N.baseUrl+N.artist.avatar.url},null,8,i)])):Object(n["f"])("",!0),Object(n["h"])("p",s,"Photo by @"+Object(n["I"])(N.artist.name),1),o,N.artist.agent?(Object(n["w"])(),Object(n["e"])(B,{key:1,to:{name:"Agent",params:{id:N.artist.agent[0].id}}},{default:Object(n["Q"])((function(){return[Object(n["k"])(z,{class:"row contactContainer mt2 mb4 justify-space-evenly align-center"},{default:Object(n["Q"])((function(){return[N.artist.agent[0].avatar?(Object(n["w"])(),Object(n["g"])("div",l,[Object(n["h"])("img",{style:{"object-fit":"cover"},src:N.baseUrl+N.artist.agent[0].avatar.url},null,8,u)])):Object(n["f"])("",!0),Object(n["h"])("h1",b,Object(n["I"])(N.artist.agent[0].name),1),Object(n["k"])(U,{class:"black ml3",icon:"chevron-down",rotation:"270"})]})),_:1})]})),_:1},8,["to"])):Object(n["f"])("",!0),Object(n["k"])(P,{class:"mr12"}),Object(n["k"])(z,{class:"row mt2"},{default:Object(n["Q"])((function(){return[N.artist.facebookLink?(Object(n["w"])(),Object(n["g"])("a",{key:0,style:{color:"inherit"},href:N.artist.facebookLink,target:"_blank"},[Object(n["k"])(U,{class:"black",icon:["fab","facebook"]})],8,d)):Object(n["f"])("",!0),N.artist.instagramLink?(Object(n["w"])(),Object(n["g"])("a",{key:1,style:{color:"inherit"},href:N.artist.instagramLink,target:"_blank"},[Object(n["k"])(U,{class:"black ml2",icon:["fab","instagram"]})],8,j)):Object(n["f"])("",!0),N.artist.youtubeLink?(Object(n["w"])(),Object(n["g"])("a",{key:2,style:{color:"inherit"},href:N.artist.youtubeLink,target:"_blank"},[Object(n["k"])(U,{class:"black ml2",icon:["fab","youtube"]})],8,f)):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])("p",O,Object(n["I"])(N.artist.artistWebsite),1)]})),_:1}),Object(n["k"])(z,{class:"column xs12 md5 lg5"},{default:Object(n["Q"])((function(){return[N.artist.category?(Object(n["w"])(),Object(n["g"])("div",h,[Object(n["h"])("h1",null,Object(n["I"])(N.artist.name),1),Object(n["h"])("h2",g,Object(n["I"])(N.artist.category[0].displayName),1),Object(n["k"])(P,{class:"my3"}),Object(n["k"])(z,{class:"row justify-start mb3"},{default:Object(n["Q"])((function(){return[N.artist.bioEnglish?(Object(n["w"])(),Object(n["g"])("div",{key:0,class:Object(n["r"])(["button",["en"==N.bioSelected?"button__active":"button__inactive"]]),onClick:e[0]||(e[0]=function(t){return S.changeActiveBio("en")})}," EN ",2)):Object(n["f"])("",!0),N.artist.bioGerman?(Object(n["w"])(),Object(n["g"])("div",{key:1,class:Object(n["r"])(["button ml3",["de"==N.bioSelected?"button__active":"button__inactive"]]),onClick:e[1]||(e[1]=function(t){return S.changeActiveBio("de")})}," DE ",2)):Object(n["f"])("",!0),N.artist.bioItalian?(Object(n["w"])(),Object(n["g"])("div",{key:2,class:Object(n["r"])(["button ml3",["it"==N.bioSelected?"button__active":"button__inactive"]]),onClick:e[2]||(e[2]=function(t){return S.changeActiveBio("it")})}," IT ",2)):Object(n["f"])("",!0)]})),_:1}),Object(n["h"])("b",null,[Object(n["k"])(G,{class:"text","more-str":"Read More",text:N.bio,link:"#","less-str":"Read Less","max-chars":380},null,8,["text"])])])):Object(n["f"])("",!0)]})),_:1})]})),_:1},8,["class"])])):Object(n["f"])("",!0),Object(n["h"])("section",p,[m,Object(n["k"])(P),Object(n["k"])(z,{class:"column mt10 carousel"},{default:Object(n["Q"])((function(){return[(Object(n["w"])(),Object(n["g"])("div",{key:N.reload},[Object(n["k"])(L,{data:N.data,"indicator-type":"disc"},null,8,["data"])]))]})),_:1})]),Object(n["h"])("section",v,[Object(n["h"])("h1",w,[Object(n["h"])("b",null," News on "+Object(n["I"])(N.artist.name),1)]),Object(n["k"])(P),Object(n["k"])(z,{class:"column mt10"},{default:Object(n["Q"])((function(){return[Object(n["k"])(M,{responsive:""},{default:Object(n["Q"])((function(){return[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(N.artist.news_articles,(function(t){return Object(n["w"])(),Object(n["g"])("section",{class:"lg6 md6 xs12",key:t},[Object(n["k"])(B,{to:{name:"NewsArticle",params:{id:t.id}}},{default:Object(n["Q"])((function(){return[Object(n["k"])(W,{image:"".concat(N.baseUrl+t.image.url),"image-props":N.imageProps,"no-border":""},{default:Object(n["Q"])((function(){return[Object(n["k"])(z,{class:"pl5 row justify-start"},{default:Object(n["Q"])((function(){return[Object(n["k"])(z,{class:"column"},{default:Object(n["Q"])((function(){return[Object(n["h"])("h2",x,Object(n["I"])(t.title),1),Object(n["h"])("div",k,[Object(n["h"])("p",null,Object(n["I"])(t.body),1)])]})),_:2},1024)]})),_:2},1024)]})),_:2},1032,["image","image-props"])]})),_:2},1032,["to"])])})),128))]})),_:1})]})),_:1})]),Object(n["h"])("section",y,[_,Object(n["k"])(P),Object(n["k"])(z,{class:"column mt10",style:{"margin-left":"15vw","margin-right":"15vw"}},{default:Object(n["Q"])((function(){return[(Object(n["w"])(),Object(n["g"])("div",{key:N.reload},[Object(n["k"])(L,{data:N.press,"indicator-type":"disc"},null,8,["data"])]))]})),_:1})]),Object(n["h"])("section",E,[I,Object(n["k"])(P),Object(n["k"])(z,{class:"column mt10"},{default:Object(n["Q"])((function(){return[N.artist.discographies?(Object(n["w"])(),Object(n["g"])("div",R,[(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(N.artist.discographies,(function(t){return Object(n["w"])(),Object(n["g"])("section",{class:"lg3 md3 xs12 px5",key:t},[Object(n["h"])("a",null,[Object(n["k"])(z,{class:"column align-center"},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",A,[Object(n["h"])("img",{src:N.baseUrl+t.diskImage.url},null,8,C),Object(n["h"])("p",Q,Object(n["I"])(t.label),1)])]})),_:2},1024)])])})),128))])):Object(n["f"])("",!0)]})),_:1})])]})),_:1})}Object(n["x"])();var N=c("1da1"),S=(c("96cf"),c("d3b7"),c("99af"),c("de74")),U=c("e7cd"),z={name:"Artist",props:["id"],data:function(){return{artist:{},baseUrl:"http://localhost:1337",bio:"",bioSelected:"en",data:[],press:[],reload:0,imageProps:{ratio:.3},windowWidth:window.innerWidth}},components:{VueHorizontal:S["a"],HorizontalCard:U["a"]},methods:{onResize:function(){this.windowWidth=window.innerWidth},changeActiveBio:function(t){this.bioSelected=t,"en"==this.bioSelected?this.bio=this.artist.bioEnglish:"it"==this.bioSelected?this.bio=this.artist.bioItalian:this.bio=this.artist.bioGerman},fetchArtist:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){var c,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/artists?id="+t.id,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:for(c=e.sent,t.artist=c[0],t.bio=t.artist.bioEnglish,n=0;n<t.artist.gallery.length;n++)t.data.push("<div class='carousel__item'><img style='width: 100%; height: 100%;' class='carousel__image' src='".concat(t.baseUrl+t.artist.gallery[n].url,"' alt='' /></div>"));for(a=0;a<t.artist.presses.length;a++)t.press.push("<w-flex class='column justify-center'><a style='color: inherit;' href='//".concat(t.artist.presses[a].articleLink,"' target='_blank'><i>").concat(t.artist.presses[a].quoteFromReview,"</i></a><p class='pt3'><b>").concat(t.artist.presses[a].author,"</b></p></w-flex>"));t.reload++,console.log(t.data),console.log(t.artist);case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.$nextTick((function(){window.addEventListener("resize",t.onResize)}))},created:function(){var t=this;return Object(N["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchArtist();case 2:t.changeActiveBio("en");case 3:case"end":return e.stop()}}),e)})))()}};c("3901");z.render=T,z.__scopeId="data-v-9141f9d0";e["default"]=z},"9f7f":function(t,e,c){var n=c("d039"),a=function(t,e){return RegExp(t,e)};e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,c){"use strict";var n=c("23e7"),a=c("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,c){"use strict";var n=c("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},beda:function(t,e,c){"use strict";c.r(e);var n=c("7a23");Object(n["z"])("data-v-8eb3df96");var a={key:0},r={class:"mx10"},i={class:"pt5 mx10"};function s(t,e,c,s,o,l){var u=Object(n["E"])("w-flex"),b=Object(n["E"])("FeaturedArtists");return o.loading?(Object(n["w"])(),Object(n["g"])("div",a,[Object(n["k"])(u,{class:"pt12 pb6 px10 px5 row justify-center"},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",{id:"post-image",style:Object(n["s"])({background:"url("+o.baseUrl+o.article.image.url+")50% 50% no-repeat"})},null,4)]})),_:1}),Object(n["k"])(u,{class:"column justify-center align-center"},{default:Object(n["Q"])((function(){return[Object(n["h"])("h1",r,Object(n["I"])(o.article.title),1),Object(n["h"])("p",i,Object(n["I"])(o.article.body),1),Object(n["k"])(b,{artists:o.article.artists},null,8,["artists"])]})),_:1})])):Object(n["f"])("",!0)}Object(n["x"])();var o=c("1da1"),l=(c("96cf"),c("d3b7"),c("e584")),u={title:"Opera4u - News",name:"NewsArticle",props:["id"],components:{FeaturedArtists:l["a"]},data:function(){return{loading:!1,article:{},baseUrl:"http://localhost:1337"}},methods:{fetchArticle:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/news-articles?id="+t.id,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,t.article=c[0],console.log(t.article);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.fetchArticle();case 2:t.loading=!0;case 3:case"end":return e.stop()}}),e)})))()}};c("fedc");u.render=s,u.__scopeId="data-v-8eb3df96";e["default"]=u},d784:function(t,e,c){"use strict";c("ac1f");var n=c("6eeb"),a=c("9263"),r=c("d039"),i=c("b622"),s=c("9112"),o=i("species"),l=RegExp.prototype;t.exports=function(t,e,c,u){var b=i(t),d=!r((function(){var e={};return e[b]=function(){return 7},7!=""[t](e)})),j=d&&!r((function(){var e=!1,c=/a/;return"split"===t&&(c={},c.constructor={},c.constructor[o]=function(){return c},c.flags="",c[b]=/./[b]),c.exec=function(){return e=!0,null},c[b](""),!e}));if(!d||!j||c){var f=/./[b],O=e(b,""[t],(function(t,e,c,n,r){var i=e.exec;return i===a||i===l.exec?d&&!r?{done:!0,value:f.call(e,c,n)}:{done:!0,value:t.call(c,e,n)}:{done:!1}}));n(String.prototype,t,O[0]),n(l,b,O[1])}u&&s(l[b],"sham",!0)}},dc45:function(t,e,c){},ef4c:function(t,e,c){"use strict";c.r(e);c("b0c0");var n=c("7a23");Object(n["z"])("data-v-6c111469");var a=Object(n["h"])("div",{class:"container"},[Object(n["h"])("h1",{id:"title"},"Our Agency"),Object(n["h"])("p",{class:"headline my5"},[Object(n["j"])(" Opera4u has "),Object(n["h"])("b",null,"years"),Object(n["j"])(" of professional experience and industry knowledge as an opera and concert agency. ")]),Object(n["h"])("p",{class:"headline mb5"},[Object(n["j"])(" It offers "),Object(n["h"])("b",null,"well-known"),Object(n["j"])(" opera singers, conductors and directors. ")]),Object(n["h"])("p",{class:"headline"},[Object(n["j"])(" The promotion of young talents to the stars of tomorrow is "),Object(n["h"])("span",{style:{color:"#770a00"}},[Object(n["h"])("b",null,"our passion.")])])],-1),r={class:"divider"},i=Object(n["h"])("h1",{class:"pt10 pb3 text-left ole",style:{"font-weight":"300"}}," Our Team ",-1),s={key:0,class:"text-center xs12 px5"},o=Object(n["h"])("h1",{class:"pa12",style:{color:"#868686","font-weight":"300",opacity:".5"}}," No Team Members Added Yet ",-1),l=[o],u={class:"cardImage xs12"},b=["src"],d={class:"title2 pt4 name"};function j(t,e,c,o,j,f){var O=Object(n["E"])("w-flex"),h=Object(n["E"])("w-divider"),g=Object(n["E"])("router-link");return Object(n["w"])(),Object(n["g"])("div",null,[Object(n["k"])(O,{class:"row justify-center xs12"},{default:Object(n["Q"])((function(){return[a]})),_:1}),Object(n["h"])("div",r,[i,Object(n["k"])(h),Object(n["k"])(O,{class:"row wrap"},{default:Object(n["Q"])((function(){return[0==j.team.length?(Object(n["w"])(),Object(n["g"])("section",s,l)):Object(n["f"])("",!0),(Object(n["w"])(!0),Object(n["g"])(n["a"],null,Object(n["C"])(j.team,(function(t){return Object(n["w"])(),Object(n["g"])("section",{class:"lg3 md3 xs12 py5 px5",key:t.id},[Object(n["k"])(g,{to:{name:"Agent",params:{id:t.id}}},{default:Object(n["Q"])((function(){return[Object(n["k"])(O,{class:"column"},{default:Object(n["Q"])((function(){return[Object(n["h"])("div",u,[Object(n["h"])("img",{src:j.baseUrl+t.avatar.url},null,8,b)]),Object(n["h"])("p",d,[Object(n["h"])("b",null,Object(n["I"])(t.name),1)])]})),_:2},1024)]})),_:2},1032,["to"])])})),128))]})),_:1})])])}Object(n["x"])();var f=c("1da1"),O=(c("96cf"),c("d3b7"),{title:"Opera4u - About Us",name:"About",data:function(){return{baseUrl:"http://localhost:1337",team:[]}},methods:{fetchTeam:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:1337/agents",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()}));case 2:c=e.sent,t.team=c,console.log(t.team);case 5:case"end":return e.stop()}}),e)})))()}},created:function(){this.fetchTeam()}});c("0724");O.render=j,O.__scopeId="data-v-6c111469";e["default"]=O},fce3:function(t,e,c){var n=c("d039");t.exports=n((function(){var t=RegExp(".","string".charAt(0));return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},fedc:function(t,e,c){"use strict";c("69ac")}}]);
//# sourceMappingURL=about.a06c21a2.js.map