"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[248],{1248:function(e,s,t){t.r(s),t.d(s,{default:function(){return p}});var r=t(9439),i=t(2791),a=t(1087),n=t(7689),o=t(7596),c=(t(5462),t(1243)),l=t(9098),d=t(1941),h="MoviesDetails_movieContainer__rdbiK",u="MoviesDetails_linkBack__ayhPM",m="MoviesDetails_imgMovie__-fTe9",v="MoviesDetails_linkList__zQnDZ",g="MoviesDetails_linkItem__n9yke",f=t(184),p=function(){var e,s,t=(0,i.useState)(""),p=(0,r.Z)(t,2),j=p[0],_=p[1],x=(0,i.useState)(""),k=(0,r.Z)(x,2),y=k[0],w=k[1],b=(0,n.UO)().movieId,C=(0,i.useRef)(!0),M=(0,n.TH)(),O=(0,i.useState)(""),S=(0,r.Z)(O,2),D=S[0],Z=S[1];(0,i.useEffect)((function(){c.Z.get("https://api.themoviedb.org/3/movie/".concat(b,"?api_key=302af559a68ff45fc409dd542a8f2629&language=en-US")).then((function(e){return _(e.data)})).catch((function(e){console.log(e.message),Z("error"),o.Am.error("".concat(e.message),{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}))}),[b]),(0,i.useMemo)((function(){if(C.current)C.current=!1;else{var e=j.poster_path,s=j.title,t=j.release_date,r=j.vote_average,i=j.genres,a=j.overview,n=(0,l.Z)((0,d.Z)(t,"yyyy-mm-dd",new Date),"yyyy");w({img:e?"https://image.tmdb.org/t/p/w500/".concat(e):"https://full-hd.info/komediya/kenny-1/kenny-1.jpg",date:n,userScore:r,genres:i.map((function(e){return" ".concat(e.name)})),overview:a,title:s})}}),[j,C]);var N=null!==(e=null===(s=M.state)||void 0===s?void 0:s.from)&&void 0!==e?e:"/movies",U=y.img,B=y.date,H=y.userScore,I=y.genres,L=y.overview,P=y.title;return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(a.rU,{className:u,to:N,children:"Back to search"}),(0,f.jsxs)("div",{className:h,children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{className:m,src:U,alt:P})}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[P," (",B,")"]}),(0,f.jsxs)("p",{children:["User Score: ",H]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:L}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:I})]})]}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{className:v,children:[(0,f.jsx)(a.rU,{className:g,to:"cast",state:{from:N},children:"Cast"}),(0,f.jsx)(a.rU,{className:g,to:"reviews",state:{from:N},children:"Reviews"})]})]}),(0,f.jsx)(i.Suspense,{fallback:(0,f.jsx)("div",{children:"Loading..."}),children:(0,f.jsx)(n.j3,{})}),"error"===D&&(0,f.jsx)(o.Ix,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"})]})}}}]);
//# sourceMappingURL=248.a23b3b21.chunk.js.map