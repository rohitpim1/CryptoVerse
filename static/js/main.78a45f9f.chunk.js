(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{224:function(e,t,c){},363:function(e,t,c){},365:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c(31),r=c.n(s),i=(c(224),c(32)),l=c(37),o=c(368),j=c(370),d=c(377),h=c(6),b=c(374),u=c(213),x=c(376),O=c(378),p=c(379),m=c(380),v=c(381),g=c(382),y=c(383),f=c.p+"static/media/cryptocurrency.1548aced.png",N=c(2),C=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),r=Object(h.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(!0),C=Object(h.a)(d,2),w=C[0],k=C[1];return Object(n.useEffect)((function(){var e=function(){return o(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){k(!(i<=768))}),[i]),Object(N.jsxs)("div",{className:"nav-container",children:[Object(N.jsxs)("div",{className:"logo-container",children:[Object(N.jsx)(b.a,{src:f,size:"large"}),Object(N.jsx)(j.a.Title,{level:2,className:"logo",children:Object(N.jsx)(l.b,{to:"/",children:"Cryptoverse"})}),Object(N.jsx)(u.a,{className:"menu-control-container",onClick:function(){return k(!w)},children:Object(N.jsx)(O.a,{})})]}),w&&Object(N.jsxs)(x.a,{theme:"dark",children:[Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(p.a,{}),onClick:function(){return a(!c)},children:Object(N.jsx)(l.b,{to:"/",children:"Home"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(m.a,{}),onClick:function(){return a(!c)},children:Object(N.jsx)(l.b,{to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(v.a,{}),onClick:function(){return a(!c)},children:Object(N.jsx)(l.b,{to:"/exchanges",children:"Exchanges"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(g.a,{}),onClick:function(){return a(!c)},children:Object(N.jsx)(l.b,{to:"/news",children:"News"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(y.a,{}),onClick:function(){return a(!c)},children:Object(N.jsx)(l.b,{to:"/about",children:"Who We Are"})})]})]})},w=c(36),k=c.n(w),S=c(98),T=c(59),A=c(371),P=c(133),E=c(46),I={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"d1e9d7ba8amsh5b8c24c71f7a394p170aa4jsndae8a6d5fc15"},M=function(e){return{url:e,headers:I}},F=Object(P.a)({reducerPath:"cryptoApi",baseQuery:Object(E.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return M("/coins?limit=".concat(e))}}),getExchanges:e.query({query:function(){return M("/exchanges")}}),getCryptoDetails:e.query({query:function(e){return M("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return M("coin/".concat(t,"/history/").concat(c))}})}}}),q=F.useGetCryptosQuery,V=F.useGetCryptoDetailsQuery,D=F.useGetExchangesQuery,H=F.useGetCryptoHistoryQuery,L=c(373),U=c(369),$=c(367),Q=function(){return Object(N.jsx)("div",{className:"loader",children:Object(N.jsx)($.a,{})})},z=function(e){var t=e.simplified,c=q(t?10:100),a=c.data,s=c.isFetching,r=Object(n.useState)([]),i=Object(h.a)(r,2),o=i[0],d=i[1],b=Object(n.useState)(""),u=Object(h.a)(b,2),x=u[0],O=u[1];return Object(n.useEffect)((function(){var e,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(x.toLowerCase())}));d(t)}),[a,x]),s?Object(N.jsx)(Q,{}):(console.log(o),Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"head",children:Object(N.jsx)(j.a.Title,{level:2,className:"heading",style:{textAlign:"center"},children:"Crypto Currency"})}),!t&&Object(N.jsx)("div",{className:"search-crypto",children:Object(N.jsx)(L.a,{placeholder:"Search Cryptocurrency",onChange:function(e){return O(e.target.value)}})}),Object(N.jsx)(S.a,{gutter:[32,32],className:"crypto-card-container",children:null===o||void 0===o?void 0:o.map((function(e){return Object(N.jsx)(T.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(N.jsx)(l.b,{to:"/crypto/".concat(e.id),children:Object(N.jsxs)(U.a,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},title:"".concat(e.rank,". ").concat(e.name),extra:Object(N.jsx)("img",{className:"crypto-image",src:e.iconUrl,alt:"crypto"}),hoverable:!0,children:[Object(N.jsxs)("p",{children:["Price: ",k()(e.price)]}),Object(N.jsxs)("p",{children:["Market Cap: ",k()(e.marketCap)]}),Object(N.jsxs)("p",{children:["Daily Change: ",k()(e.change),"%"]})]})})},e.id)}))})]}))},G=c(372),B=c(205),R=c.n(B),W={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"d1e9d7ba8amsh5b8c24c71f7a394p170aa4jsndae8a6d5fc15"},J=Object(P.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(E.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:W}}})}}}),Z=J.useGetCryptoNewsQuery,_=j.a.Text,K=j.a.Title,X=G.a.Option,Y="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",ee=function(e){var t,c,a=e.simplified,s=Object(n.useState)("Cryptocurrency"),r=Object(h.a)(s,2),i=(r[0],r[1]),l=q(100).data,o=Z({newsCategory:"Cryptocurrency",count:a?6:12}).data;return(null===o||void 0===o?void 0:o.value)?Object(N.jsxs)(S.a,{gutter:[24,24],children:[!a&&Object(N.jsx)(T.a,{span:24,children:Object(N.jsxs)(G.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return i(e)},filterOption:function(e,t){return t.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(N.jsx)(X,{value:"Cryptocurency",children:"Cryptocurrency"}),null===l||void 0===l||null===(t=l.data)||void 0===t||null===(c=t.coins)||void 0===c?void 0:c.map((function(e){return Object(N.jsx)(X,{value:e.name,children:e.name})}))]})}),o.value.map((function(e,t){var c,a,n,s,r,i;return Object(N.jsx)(T.a,{xs:24,sm:12,lg:8,children:Object(N.jsx)(U.a,{hoverable:!0,className:"news-card",children:Object(N.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(N.jsxs)("div",{className:"news-image-container",children:[Object(N.jsx)(K,{className:"news-title",level:4,children:e.name}),Object(N.jsx)("img",{style:{maxWidth:"200px",height:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||Y,alt:"news"})]}),Object(N.jsx)("p",{children:e.description.length>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(N.jsxs)("div",{className:"provider-container",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(b.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(r=s.thumbnail)||void 0===r?void 0:r.contentUrl)||Y,alt:""}),Object(N.jsx)(_,{className:"provider-name",children:null===(i=e.provider[0])||void 0===i?void 0:i.name})]}),Object(N.jsx)(_,{children:R()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(N.jsx)(Q,{})},te=j.a.Title,ce=function(){var e,t=q(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"head",children:Object(N.jsx)(te,{level:2,className:"heading",style:{textAlign:"center"},children:"Global Crypto Statistics"})}),Object(N.jsxs)(S.a,{style:{textAlign:"center",marginTop:"50px",border:"2px dotted black",padding:"15px",background:"#e6f7ff"},children:[Object(N.jsx)(T.a,{span:12,className:"globalCrypto",children:Object(N.jsx)(A.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(N.jsx)(T.a,{span:12,className:"globalCrypto1",children:Object(N.jsx)(A.a,{title:"Total Exchanges",value:k()(n.totalExchanges)})}),Object(N.jsx)(T.a,{span:12,className:"globalCrypto2",children:Object(N.jsx)(A.a,{title:"Total Market Cap",value:k()(n.totalMarketCap)})}),Object(N.jsx)(T.a,{span:12,className:"globalCrypto3",children:Object(N.jsx)(A.a,{title:"Total 24h Volume",value:k()(n.total24hVolume)})}),Object(N.jsx)(T.a,{span:12,className:"globalCrypto4",children:Object(N.jsx)(A.a,{title:"Total Markets",value:k()(n.totalMarkets)})})]}),Object(N.jsx)("div",{className:"home-heading-container",children:Object(N.jsx)(te,{level:4,className:"home-title",children:"Top 10 Cryptocurrencies"})}),Object(N.jsx)(z,{simplified:!0}),Object(N.jsx)("div",{className:"home-heading-container1",children:Object(N.jsx)(te,{level:5,className:"show-more",children:Object(N.jsx)(l.b,{to:"/cryptocurrencies",className:"showmore",children:"show more"})})}),Object(N.jsx)("div",{className:"home-heading-container",children:Object(N.jsx)(te,{level:4,className:"home-title",children:"Latest Crypto News"})}),Object(N.jsx)(ee,{simplified:!0}),Object(N.jsx)("div",{className:"home-heading-container1",children:Object(N.jsx)(te,{level:5,className:"show-more",children:Object(N.jsx)(l.b,{to:"/news",className:"showmore",children:"show more"})})})]})},ae=c(136),ne=(c(323),c(214)),se=j.a.Title,re=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],r=[],i=0;i<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);i+=1){var l,o,j;s.push(null===c||void 0===c||null===(j=c.data)||void 0===j?void 0:j.history[i].price)}for(var d=0;d<(null===c||void 0===c||null===(h=c.data)||void 0===h||null===(b=h.history)||void 0===b?void 0:b.length);d+=1){var h,b,u;r.push(new Date(null===c||void 0===c||null===(u=c.data)||void 0===u?void 0:u.history[d].timestamp).toLocaleDateString())}var x={labels:r,datasets:[{label:"Price In USD",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(S.a,{className:"chart-header",children:Object(N.jsxs)(T.a,{className:"price-container",children:[Object(N.jsxs)(se,{level:5,className:"price-change",children:["Change:",null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(N.jsxs)(se,{level:5,className:"current-price",children:["Current ",n," Price: $ ",a]})]})}),Object(N.jsx)(ne.a,{data:x,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},ie=c(384),le=c(385),oe=c(386),je=c(387),de=c(138),he=c(388),be=c(217),ue=j.a.Title,xe=j.a.Text,Oe=G.a.Option,pe=function(){var e,t,c=Object(i.f)().coinId,a=Object(n.useState)("7d"),s=Object(h.a)(a,2),r=s[0],l=s[1],o=V(c),j=o.data,d=o.isFetching,b=H({coinId:c,timeperiod:r}).data,u=null===j||void 0===j||null===(e=j.data)||void 0===e?void 0:e.coin;if(d)return Object(N.jsx)(Q,{});var x=[{title:"Price to USD",value:"$ ".concat(u.price&&k()(u.price)),icon:Object(N.jsx)(ie.a,{})},{title:"Rank",value:u.rank,icon:Object(N.jsx)(le.a,{})},{title:"24h Volume",value:"$ ".concat(u.volume&&k()(u.volume)),icon:Object(N.jsx)(oe.a,{})},{title:"Market Cap",value:"$ ".concat(u.marketCap&&k()(u.marketCap)),icon:Object(N.jsx)(ie.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(k()(u.allTimeHigh.price)),icon:Object(N.jsx)(je.a,{})}],O=[{title:"Number Of Markets",value:u.numberOfMarkets,icon:Object(N.jsx)(m.a,{})},{title:"Number Of Exchanges",value:u.numberOfExchanges,icon:Object(N.jsx)(v.a,{})},{title:"Aprroved Supply",value:u.approvedSupply?Object(N.jsx)(de.a,{}):Object(N.jsx)(he.a,{}),icon:Object(N.jsx)(be.a,{})},{title:"Total Supply",value:"$ ".concat(k()(u.totalSupply)),icon:Object(N.jsx)(be.a,{})},{title:"Circulating Supply",value:"$ ".concat(k()(u.circulatingSupply)),icon:Object(N.jsx)(be.a,{})}];return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)(T.a,{className:"coin-detail-container",children:[Object(N.jsxs)(T.a,{className:"coin-heading-container",children:[Object(N.jsxs)(ue,{level:2,className:"coin-name",children:[u.name," (",u.slug,")"]}),Object(N.jsxs)("p",{children:[u.name," live price in USD View Statistics, Market cap and Supply."]})]}),Object(N.jsx)(G.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Time Period",onChange:function(e){return l(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(N.jsx)(Oe,{children:e},e)}))}),Object(N.jsx)(re,{coinHistory:b,currentPrice:k()(u.price),coinName:u.name}),Object(N.jsxs)(T.a,{className:"stats-container",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(N.jsxs)(ue,{level:3,className:"coin-details-heading",children:[u.name," Value Statistics"]}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",u.name,", such as the base and quote currency, the rank, and trading volume."]})]}),x.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(N.jsxs)(T.a,{className:"coin-stats",children:[Object(N.jsxs)(T.a,{className:"coin-stats-name",children:[Object(N.jsx)(xe,{children:t}),Object(N.jsx)(xe,{children:c})]}),Object(N.jsx)(xe,{className:"stats",children:a})]})}))]}),Object(N.jsxs)(T.a,{className:"other-stats-info",children:[Object(N.jsxs)(T.a,{className:"coin-value-statistics-heading",children:[Object(N.jsx)(ue,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",u.name,", such as the base and quote currency, and trading volume. "]})]}),O.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(N.jsxs)(T.a,{className:"coin-stats",children:[Object(N.jsxs)(T.a,{className:"coin-stats-name",children:[Object(N.jsx)(xe,{children:t}),Object(N.jsx)(xe,{children:c})]}),Object(N.jsx)(xe,{className:"stats",children:a})]})}))]})]}),Object(N.jsxs)(T.a,{className:"coin-desc-link",children:[Object(N.jsxs)(S.a,{className:"coin-desc",children:[Object(N.jsxs)(ue,{level:3,className:"coin-details-heading",children:["What is ",u.name,"?"]}),Object(ae.a)(u.description)]}),Object(N.jsxs)(T.a,{className:"coin-links",children:[Object(N.jsxs)(ue,{level:3,className:"coin-details-heading",children:[u.name," Links"]}),null===(t=u.links)||void 0===t?void 0:t.map((function(e){return Object(N.jsxs)(S.a,{className:"coin-link",children:[Object(N.jsx)(ue,{level:5,className:"link-name",children:e.type}),Object(N.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})})},me=c(375),ve=j.a.Text,ge=me.a.Panel,ye=function(){var e,t=D(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("div",{className:"head",children:Object(N.jsx)(j.a.Title,{level:2,className:"heading",style:{textAlign:"center"},children:"Exchanges"})}),Object(N.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"20px"},children:Object(N.jsx)(j.a.Title,{level:3,style:{textAlign:"center"},children:"Here you will get know about all the listed exchanges along with there Trade Volume and Markets."})}),Object(N.jsxs)(S.a,{children:[Object(N.jsx)(T.a,{span:6,style:{textAlign:"center"},children:"Exchanges"}),Object(N.jsx)(T.a,{span:6,style:{textAlign:"center"},children:"24h Trade Volume"}),Object(N.jsx)(T.a,{span:6,style:{textAlign:"center"},children:"Markets"}),Object(N.jsx)(T.a,{span:6,style:{textAlign:"center"},children:"Change"})]}),Object(N.jsx)(S.a,{children:n.map((function(e){return Object(N.jsx)(T.a,{span:24,children:Object(N.jsx)(me.a,{children:Object(N.jsx)(ge,{showArrow:!1,header:Object(N.jsxs)(S.a,{children:[Object(N.jsxs)(T.a,{span:6,children:[Object(N.jsx)(ve,{children:Object(N.jsx)("strong",{children:e.rank})}),Object(N.jsx)(b.a,{className:"exchange-image",src:e.iconUrl}),Object(N.jsx)(ve,{children:Object(N.jsx)("strong",{children:e.name})})]}),Object(N.jsxs)(T.a,{span:6,style:{textAlign:"center"},children:["$",k()(e.volume)]}),Object(N.jsxs)(T.a,{span:6,style:{textAlign:"center"},children:["$",k()(e.numberOfMarkets)]}),Object(N.jsxs)(T.a,{span:6,style:{textAlign:"center"},children:["$",k()(e.marketShare)]})]},e.id),children:Object(ae.a)(e.description||"")},e.id)})})}))})]})},fe=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(S.a,{className:"about",children:Object(N.jsxs)(T.a,{xs:10,sm:12,lg:10,md:10,children:[Object(N.jsx)(j.a.Title,{level:2,style:{textAlign:"center",paddingTop:"20px"},children:"About Us"}),Object(N.jsxs)(j.a.Paragraph,{className:"abtParagraph",style:{textAlign:"center",fontSize:"1.3rem"},children:[Object(N.jsx)("span",{style:{color:"red",fontSize:"30px"},children:'"'}),"Hello, I am ",Object(N.jsx)("span",{className:"abt",children:"Rohit Pimpalkar(freelancer)"}),", Basic idea Behind developing these application is ",Object(N.jsx)("br",{}),"to provide information in more precious way to the people who are interested in Crypto Currency.",Object(N.jsx)("br",{}),Object(N.jsx)("span",{className:"abt",children:"CryptoVerse"})," is like a one stop for all Crypto lovers, where you can get all the information",Object(N.jsx)("br",{}),"regarding Crypto Currency. Here on these application you will get know about all exchanges with ",Object(N.jsx)("br",{}),"there Totol Market Cap, 24H Volume, Total Cryptocurrencies, Total Market, Total Exchanges, and",Object(N.jsx)("br",{}),"news along with live udates and in depth details of all the crypto Currencies along with ",Object(N.jsx)("br",{}),"statistics and graph.",Object(N.jsx)("span",{style:{color:"red",fontSize:"30px"},children:'"'})]}),Object(N.jsx)(j.a.Paragraph,{style:{textAlign:"center",paddingBottom:"30px"},children:"Developed By : Rohit Pimpalkar (FreeLancer) Contact : rohitpimpalkar052@gmail.com"})]})})})},Ne=(c(363),function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"navbar",children:Object(N.jsx)(C,{})}),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)(o.a,{children:Object(N.jsx)("div",{className:"routes",children:Object(N.jsxs)(i.c,{children:[Object(N.jsx)(i.a,{exact:!0,path:"/",children:Object(N.jsx)(ce,{})}),Object(N.jsx)(i.a,{exact:!0,path:"/exchanges",children:Object(N.jsx)(ye,{})}),Object(N.jsx)(i.a,{exact:!0,path:"/cryptocurrencies",children:Object(N.jsx)(z,{})}),Object(N.jsx)(i.a,{exact:!0,path:"/crypto/:coinId",children:Object(N.jsx)(pe,{})}),Object(N.jsx)(i.a,{exact:!0,path:"/news",children:Object(N.jsx)(ee,{})}),Object(N.jsx)(i.a,{exact:!0,path:"/about",children:Object(N.jsx)(fe,{})})]})})}),Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsxs)(j.a.Title,{level:5,style:{color:"white",textAlign:"center"},children:["Cryptoverse ",Object(N.jsx)("br",{}),"All rights reserved"]}),Object(N.jsxs)(d.b,{children:[Object(N.jsx)(l.b,{to:"/",children:"Home"}),Object(N.jsx)(l.b,{to:"/exchanges",children:"Exchanges"}),Object(N.jsx)(l.b,{to:"/news",children:"News"})]})]})]})]})}),Ce=c(44),we=c(7),ke=c(14),Se=Object(ke.a)({reducer:(a={},Object(we.a)(a,F.reducerPath,F.reducer),Object(we.a)(a,J.reducerPath,J.reducer),a)});c(364);r.a.render(Object(N.jsx)(l.a,{children:Object(N.jsx)(Ce.a,{store:Se,children:Object(N.jsx)(Ne,{})})}),document.getElementById("root"))}},[[365,1,2]]]);
//# sourceMappingURL=main.78a45f9f.chunk.js.map