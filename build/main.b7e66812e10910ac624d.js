(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1kfM":function(e,n,t){var r=t("mp5j");e.exports=(r.default||r).template({1:function(e,n,t,r,a){var o,l=null!=n?n:e.nullContext||{},i=e.hooks.helperMissing,s="function",c=e.escapeExpression;return'<li class="gallery-item">\r\n    <div class="photo-card">\r\n        <img src="'+c(typeof(o=null!=(o=t.webformatURL||(null!=n?n.webformatURL:n))?o:i)===s?o.call(l,{name:"webformatURL",hash:{},data:a,loc:{start:{line:4,column:18},end:{line:4,column:34}}}):o)+'" alt="There was a picure" />\r\n\r\n        <div class="stats">\r\n            <p class="stats-item">\r\n                <i class="material-icons">thumb_up</i>\r\n                '+c(typeof(o=null!=(o=t.likes||(null!=n?n.likes:n))?o:i)===s?o.call(l,{name:"likes",hash:{},data:a,loc:{start:{line:9,column:16},end:{line:9,column:25}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">visibility</i>\r\n                '+c(typeof(o=null!=(o=t.views||(null!=n?n.views:n))?o:i)===s?o.call(l,{name:"views",hash:{},data:a,loc:{start:{line:13,column:16},end:{line:13,column:25}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">comment</i>\r\n                '+c(typeof(o=null!=(o=t.comments||(null!=n?n.comments:n))?o:i)===s?o.call(l,{name:"comments",hash:{},data:a,loc:{start:{line:17,column:16},end:{line:17,column:28}}}):o)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">cloud_download</i>\r\n                '+c(typeof(o=null!=(o=t.downloads||(null!=n?n.downloads:n))?o:i)===s?o.call(l,{name:"downloads",hash:{},data:a,loc:{start:{line:21,column:16},end:{line:21,column:29}}}):o)+"\r\n            </p>\r\n        </div>\r\n    </div>\r\n</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(e,n,t,r,a){var o;return null!=(o=t.each.call(null!=n?n:e.nullContext||{},null!=n?n.hits:n,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:26,column:9}}}))?o:""},useData:!0})},L1EO:function(e,n,t){},QfWi:function(e,n,t){"use strict";t.r(n);t("L1EO"),t("JBxO"),t("FdtR"),t("wcNg");var r={page:1,query:"",key:"17811098-de4e72ec165d5b5e0a4d29971",incrementPage:function(){this.page+=1},fetchImages:function(){var e=this,n="?image_type=photo&orientation=horizontal&q="+this.query+"&page="+this.page+"&per_page=12&key="+this.key;return fetch("https://pixabay.com/api/"+n).then((function(e){return e.json()})).then((function(n){return e.incrementPage(),n}))},get searchQuery(){return this.query},set searchQuery(e){this.query=e}},a={searchForm:document.querySelector("#search-form"),galleryList:document.querySelector(".gallery-js"),loadMoreBtn:document.querySelector('button[data-action="load more"]'),photoCardImage:document.querySelector(".photo-card")},o=t("1kfM"),l=t.n(o),i=t("dIfx");t("IlkV");i.a.defaults.styling="material",i.a.defaults.icons="material";var s=function(e){return i.a.error({text:e})},c=function(e){return i.a.notice({text:e})},u={warningNotIn:"No match found!\nPlease, enter another query",warningNoInput:"No search request found!\nPlease, enter your query to the input field"};function m(e,n,t,r,a,o,l){try{var i=e[o](l),s=i.value}catch(e){return void t(e)}i.done?n(s):Promise.resolve(s).then(r,a)}var h=t("jffb");function d(e){return l()(e)}function f(e){a.galleryList.insertAdjacentHTML("beforeend",e)}function p(){a.galleryList.innerHTML=""}a.searchForm.addEventListener("input",h((function(e){e.preventDefault();var n=e.target.value.toLowerCase();r.searchQuery=n,r.fetchImages().then((function(e){if(0===e.hits.length)s(u.warningNotIn);else if(0===n.length)p();else{p(),f(d(e))}})).catch((function(e){return console.log(e)}))}),500)),a.searchForm.addEventListener("keydown",(function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||e.preventDefault()})),a.loadMoreBtn.addEventListener("click",(function(){if(0===r.searchQuery.length)c(u.warningMissingInput);else{var e=function(){var n,t=(n=regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,r.fetchImages();case 3:return f(d(t=n.sent)),n.abrupt("return",t);case 9:n.prev=9,n.t0=n.catch(0),console.error(n.t0);case 12:return n.abrupt("return",e);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})),function(){var e=this,t=arguments;return new Promise((function(r,a){var o=n.apply(e,t);function l(e){m(o,r,a,l,i,"next",e)}function i(e){m(o,r,a,l,i,"throw",e)}l(void 0)}))});return function(){return t.apply(this,arguments)}}();e().then((function(){var e=window.innerHeight-a.searchForm.offsetHeight-30;window.scrollBy({top:e,left:0,behavior:"smooth"})}))}}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.b7e66812e10910ac624d.js.map