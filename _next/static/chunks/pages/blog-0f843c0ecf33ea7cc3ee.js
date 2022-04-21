(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{2851:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var s=t(5893),n=t(1664);function a(e){var r=e.children;return(0,s.jsx)("div",{className:"px-2 py-1 bg-".concat({JavaScript:"yellow",CSS:"blue",Python:"green",PHP:"purple",Ruby:"red"}[r],"-600 text-gray-100 font-bold rounded"),children:(0,s.jsx)(n.default,{href:"/blog/category/".concat(r.toLowerCase()),children:r})})}},7905:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var s=t(5893),n=t(1664);function a(e){var r=e.categories;return(0,s.jsxs)("div",{className:"w-full p-5 bg-white rounded-lg shadow-md mt-6",children:[(0,s.jsx)("h3",{className:"text-2xl bg-gray-800 text-white p-3 rounded",children:"Blog Categories"}),(0,s.jsx)("ul",{className:"divide-y divide-gray-300",children:r.map((function(e,r){return(0,s.jsx)(n.default,{href:"/blog/category/".concat(e.toLowerCase()),children:(0,s.jsx)("li",{className:"p-4 cursor-pointer hover:bg-gray-50",children:e})},r)}))})]})}},6483:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var s=t(5893),n=t(9008),a=t(1664),l=t(5675);function c(){return(0,s.jsx)("header",{className:"bg-gray-900 text-gray-100 shadow w-full",children:(0,s.jsxs)("div",{className:"container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center",children:[(0,s.jsx)(a.default,{href:"/",children:(0,s.jsxs)("a",{className:"flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0",children:[(0,s.jsx)(l.default,{src:"/images/logo.png",width:40,height:40,alt:"logo"}),(0,s.jsx)("span",{className:"ml-3 text-xl",children:"Eqan Ahmad | Blogs"})]})}),(0,s.jsxs)("nav",{className:"flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto",children:[(0,s.jsx)(a.default,{href:"/blog",children:(0,s.jsx)("a",{className:"mx-5 cursor-pointer uppercase hover:text-indigo-300",children:"Blog"})}),(0,s.jsx)(a.default,{href:"/about",children:(0,s.jsx)("a",{className:"mx-5 cursor-pointer uppercase hover:text-indigo-300",children:"About"})})]})]})})}var i=t(7757),o=t.n(i),d=t(2137),u=t(7294),x=t(9583),h=t(3035);function m(e){var r=e.results;return 0===r.length?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("div",{className:"absolute top-20 right-0 md:right-10 z-10 border-4 border-gray-500 bg-white text-black w-full md:w-6/12 rounded-2xl",children:(0,s.jsxs)("div",{className:"p-10",children:[(0,s.jsxs)("h2",{className:"text-3xl mb-3",children:[r.length," Results"]}),r.map((function(e,r){return(0,s.jsx)(h.Z,{post:e,compact:!0},r)}))]})})}function f(){var e=(0,u.useState)(""),r=e[0],t=e[1],n=(0,u.useState)([]),a=n[0],l=n[1];return(0,u.useEffect)((function(){(function(){var e=(0,d.Z)(o().mark((function e(){var t,s,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=4;break}l([]),e.next=12;break;case 4:return e.next=6,fetch("/api/search?q=".concat(r));case 6:return t=e.sent,e.next=9,t.json();case 9:s=e.sent,n=s.results,l(n);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r]),(0,s.jsxs)("div",{className:"relative bg-gray-600 p-4",children:[(0,s.jsx)("div",{className:"container mx-auto flex items-center justify-center md:justify-end",children:(0,s.jsx)("div",{className:"relative text-gray-600 w-72",children:(0,s.jsxs)("form",{children:[(0,s.jsx)("input",{type:"search",name:"search",id:"search",className:"bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none w-72",value:r,onChange:function(e){return t(e.target.value)},placeholder:"Search Posts..."}),(0,s.jsx)(x.U41,{className:"absolute top-0 right-0 text-black mt-3 mr-4"})]})})}),(0,s.jsx)(m,{results:a})]})}function g(e){var r=e.title,t=e.keywords,a=e.description,l=e.children;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:r}),(0,s.jsx)("meta",{name:"keywords",content:t}),(0,s.jsx)("meta",{name:"description",content:a}),(0,s.jsx)("link",{rel:"icon",href:"".concat("/blogs","/images/logo.png")})]}),(0,s.jsx)(c,{}),(0,s.jsx)(f,{}),(0,s.jsx)("main",{className:"container mx-auto my-7",children:l})]})}g.defaultProps={title:"Eqan Ahmad | Blogs",keywords:"development, coding, programming",description:"My personal research and projects blogs."}},3035:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var s=t(5893),n=t(1664),a=t(5675),l=t(2851);function c(e){var r=e.post,t=e.compact;return(0,s.jsxs)("div",{className:"w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6",children:[!t&&(0,s.jsx)(a.default,{src:r.frontmatter.cover_image,alt:"",height:420,width:600,className:"mb-4 rounded"}),(0,s.jsxs)("div",{className:"flex justify-between items-center",children:[(0,s.jsx)("span",{className:"font-light text-gray-600",children:r.frontmatter.date}),(0,s.jsx)(l.Z,{children:r.frontmatter.category})]}),(0,s.jsxs)("div",{className:"mt-2",children:[(0,s.jsx)(n.default,{href:"/blog/".concat(r.slug),children:(0,s.jsx)("a",{className:"text-2xl text-gray-700 font-bold hover:underline",children:r.frontmatter.title})}),(0,s.jsx)("p",{className:"mt-2 text-gray-600",children:r.frontmatter.excerpt})]}),!t&&(0,s.jsxs)("div",{className:"flex justify-between items-center mt-6",children:[(0,s.jsx)(n.default,{href:"/blog/".concat(r.slug),children:(0,s.jsx)("a",{className:"text-gray-900 hover:text-blue-600",children:"Read More"})}),(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("img",{src:r.frontmatter.author_image,alt:"",className:"mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"}),(0,s.jsx)("h3",{className:"text-gray-700 font-bold",children:r.frontmatter.author})]})]})]})}},5979:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return n}});var s=t(4821),n=!0;r.default=s.default},4821:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return o},default:function(){return d}});var s=t(5893),n=t(6483),a=t(3035),l=t(1664);function c(e){var r=e.currentPage,t=e.numPages,n=1===r,a=r===t,c="/blog/page/".concat(r-1),i="/blog/page/".concat(r+1);return 1===t?(0,s.jsx)(s.Fragment,{}):(0,s.jsx)("div",{className:"mt-6",children:(0,s.jsxs)("ul",{className:"flex pl-0 list-none my-2",children:[!n&&(0,s.jsx)(l.default,{href:c,children:(0,s.jsx)("li",{className:"relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer",children:"Previous"})}),Array.from({length:t},(function(e,r){return(0,s.jsx)(l.default,{href:"/blog/page/".concat(r+1),children:(0,s.jsx)("li",{className:"relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer",children:r+1})},"page-".concat(r))})),!a&&(0,s.jsx)(l.default,{href:i,children:(0,s.jsx)("li",{className:"relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer",children:"Next"})})]})})}var i=t(7905),o=!0;function d(e){var r=e.posts,t=e.numPages,l=e.currentPage,o=e.categories;return(0,s.jsx)(n.Z,{children:(0,s.jsxs)("div",{className:"flex justify-between flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"w-3/4 mr-10",children:[(0,s.jsx)("h1",{className:"text-5xl border-b-4 p-5 font-bold",children:"Blog"}),(0,s.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-5",children:r.map((function(e,r){return(0,s.jsx)(a.Z,{post:e},r)}))}),(0,s.jsx)(c,{currentPage:l,numPages:t})]}),(0,s.jsx)("div",{className:"w-1/4",children:(0,s.jsx)(i.Z,{categories:o})})]})})}},677:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(5979)}])}},function(e){e.O(0,[774,445,351,310],(function(){return r=677,e(e.s=r);var r}));var r=e.O();_N_E=r}]);