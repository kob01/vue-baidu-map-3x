import{r as h,c as _,a as t,b as r,w as s,d as p,f as n,o as u,s as v}from"./app.d046b8b1.js";const m=p('<h1 id="\u81EA\u5B9A\u4E49\u8986\u76D6\u7269" tabindex="-1">\u81EA\u5B9A\u4E49\u8986\u76D6\u7269 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u8986\u76D6\u7269" aria-hidden="true">#</a></h1><p><code>BmOverlay</code> \u81EA\u5B9A\u4E49\u8986\u76D6\u7269\u7EC4\u4EF6\u662F\u4E00\u4E2A\u9AD8\u5EA6\u8BA2\u5236\u5316\u7684\u7EC4\u4EF6\uFF0C\u901A\u8FC7 <code>draw</code> \u4E8B\u4EF6\u8FDB\u884C\u8986\u76D6\u7269\u7684\u91CD\u7ED8\u3002\u63A8\u8350\u7684\u4F7F\u7528\u65B9\u6CD5\u662F\u5C06\u91CD\u7ED8\u903B\u8F91\u76F8\u540C\u7684 <code>BmOverlay</code> \u8FDB\u884C\u4E8C\u6B21\u5C01\u88C5\u3002\u81EA\u5B9A\u4E49\u8986\u76D6\u7269\u4EC5\u5728\u5730\u56FE\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1 <code>draw</code> \u65B9\u6CD5\u91CD\u7ED8\u8986\u76D6\u7269\u89C6\u56FE\uFF0C\u82E5\u9700\u8981\u5B9A\u5236\u6570\u636E\u89C6\u56FE\u540C\u6B65\u7B56\u7565\uFF0C\u8BF7\u624B\u52A8\u89E6\u53D1 <code>BmOverlay</code> \u7684 <code>reload</code> \u5B9E\u4F8B\u65B9\u6CD5\u3002</p><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027\u540D</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>pane</td><td>String</td><td></td><td>\u81EA\u5B9A\u4E49\u8986\u76D6\u7269\u6240\u5728<a href="http://lbsyun.baidu.com/cms/jsapi/class/jsapi_reference.html#a3b1" target="_blank" rel="noopener noreferrer">\u5BB9\u5668</a>\u3002\u5305\u542B <code>floatPane</code>\u3001<code>markerMouseTarget</code>\u3001<code>floatShadow</code>\u3001<code>labelPane</code>\u3001<code>markerPane</code>\u3001<code>markerShadow</code>\u3001<code>mapPane</code> \u5171 7 \u79CD\u5408\u6CD5\u503C</td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u53C2\u6570</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>initialize</td><td><code>event{BMap, map, el, overlay}</code></td><td>\u8986\u76D6\u7269\u521D\u59CB\u5316\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr><tr><td>draw</td><td><code>event{BMap, map, el, overlay}</code></td><td>\u5730\u56FE\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1\u6B64\u4E8B\u4EF6</td></tr></tbody></table><h2 id="\u793A\u4F8B" tabindex="-1">\u793A\u4F8B <a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a></h2><h3 id="\u5355\u72EC\u4F7F\u7528" tabindex="-1">\u5355\u72EC\u4F7F\u7528 <a class="header-anchor" href="#\u5355\u72EC\u4F7F\u7528" aria-hidden="true">#</a></h3>',8),b=t("div",null,"\u6211\u7231\u5317\u4EAC\u5929\u5B89\u95E8",-1),f=t("div",{class:"tip custom-block"},[t("p",{class:"custom-block-title"},"TIP"),t("p",null,"\u81EA\u5B9A\u4E49\u8986\u76D6\u7269\u9700\u8981\u81EA\u5DF1\u5199\u6837\u5F0F\u5FC5\u987B\u8981\u6709**position: absolute;**\u6837\u5F0F")],-1),P='{"title":"\u81EA\u5B9A\u4E49\u8986\u76D6\u7269","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027"},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6"},{"level":2,"title":"\u793A\u4F8B","slug":"\u793A\u4F8B"},{"level":3,"title":"\u5355\u72EC\u4F7F\u7528","slug":"\u5355\u72EC\u4F7F\u7528"}],"relativePath":"overlay/overlay.md"}',y={},w=Object.assign(y,{setup(x){const d=h(!1),c=({el:o,BMap:e,map:l})=>{const a=l.pointToOverlayPixel(new e.Point(116.404,39.915));o.style.left=a.x-60+"px",o.style.top=a.y-20+"px"};return(o,e)=>{const l=n("bm-overlay"),a=n("baidu-map");return u(),_("div",null,[m,t("template",null,[t("div",null,[r(a,{class:"map",center:{lng:116.404,lat:39.915},zoom:15},{default:s(()=>[r(l,{pane:"labelPane",class:v({sample:!0,active:d.value}),onDraw:c,onMouseover:e[0]||(e[0]=i=>d.value=!0),onMouseleave:e[1]||(e[1]=i=>d.value=!1)},{default:s(()=>[b]),_:1},8,["class"])]),_:1},8,["center"])])]),f])}}});export{P as __pageData,w as default};