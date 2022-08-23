function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,s){e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s;return t};const s=[{id:1,lat:50.3864813,lng:30.4610184},{id:2,lat:50.3893584,lng:30.4744418},{id:3,lat:50.3766632,lng:30.4545341},{id:4,lat:50.3871685,lng:30.4633948},{id:5,lat:50.3839428,lng:30.4448406},{id:6,lat:50.3950753,lng:30.5020464},{id:7,lat:50.3932314,lng:30.4851096},{id:8,lat:50.3932962,lng:30.4808875},{id:9,lat:50.3850642,lng:30.4800686},{id:10,lat:50.3852944,lng:30.4568793},{id:11,lat:50.383335,lng:30.4582703}],i=[{id:1,title:"Вільямса, 9",image:"https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:2,title:"Ломоносова, 38",image:"https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:3,title:"Касьяна, 20",image:"https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:4,title:"Мейтуса, 10",image:"https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:5,title:"Луценка, 11",image:"https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:6,title:"Васильківська, 11",image:"https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:7,title:"Васильківська, 34",image:"https://images.pexels.com/photos/1669799/pexels-photo-1669799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:8,title:"Максимовича, 4",image:"https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:9,title:"Васильківська, 53",image:"https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:10,title:"Вільямса, 11",image:"https://images.pexels.com/photos/271743/pexels-photo-271743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"},{id:11,title:"Конєва, 10",image:"https://images.pexels.com/photos/265004/pexels-photo-265004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint tempore quidem aliquam, vero itaque architecto qui minima hic saepe placeat?"}];class o{constructor(){t(e)(this,"initModel",(()=>{null===JSON.parse(localStorage.getItem("points"))&&localStorage.setItem("points",JSON.stringify(s)),null===JSON.parse(localStorage.getItem("appartments"))&&localStorage.setItem("appartments",JSON.stringify(i))})),t(e)(this,"getAllPoints",(()=>JSON.parse(localStorage.getItem("points")))),t(e)(this,"getLastPointId",(()=>{const t=JSON.parse(localStorage.getItem("points"));return t[t.length-1].id})),t(e)(this,"getAllAppartments",(()=>JSON.parse(localStorage.getItem("appartments")))),t(e)(this,"getAppartmentById",(t=>{const e=JSON.parse(localStorage.getItem("appartments"));return[e[e.findIndex((e=>e.id===t))]]})),t(e)(this,"getAppartmentsByIdArr",(t=>JSON.parse(localStorage.getItem("appartments")).filter((e=>t.includes(e.id))))),t(e)(this,"getVisiblePointsId",(t=>JSON.parse(localStorage.getItem("points")).filter(n(t)).map(r))),t(e)(this,"initBuffer",((t,{lat:e,lng:s})=>{this.bufferObj.status="PREPAING",this.bufferObj.id=t+1,this.bufferObj.lat=e,this.bufferObj.lng=s})),t(e)(this,"addAppartmentToBuffer",(({title:t,image:e,description:s})=>{this.bufferObj.status="READY",this.bufferObj.title=t,this.bufferObj.image=e,this.bufferObj.description=s})),t(e)(this,"addNewAppartment",(({id:t,lat:e,lng:s,title:i,image:o,description:r})=>{const n=JSON.parse(localStorage.getItem("points")),a=JSON.parse(localStorage.getItem("appartments"));n.push({id:t,lat:e,lng:s}),a.push({id:t,title:i,image:o,description:r}),localStorage.setItem("points",JSON.stringify(n)),localStorage.setItem("appartments",JSON.stringify(a))})),t(e)(this,"bufferObj",{status:"EMPTY",id:null,lat:null,lng:null,title:"",image:"",description:""})}}const r=t=>t.id,n=({south:t,north:e,west:s,east:i})=>({lat:o,lng:r})=>r>s&&r<i&&o>t&&o<e;var a;function l(t,e,s,i,o,r){if(o-i<=s)return;const n=i+o>>1;p(t,e,n,i,o,r%2),l(t,e,s,i,n-1,r+1),l(t,e,s,n+1,o,r+1)}function p(t,e,s,i,o,r){for(;o>i;){if(o-i>600){const n=o-i+1,a=s-i+1,l=Math.log(n),c=.5*Math.exp(2*l/3),m=.5*Math.sqrt(l*c*(n-c)/n)*(a-n/2<0?-1:1);p(t,e,s,Math.max(i,Math.floor(s-a*c/n+m)),Math.min(o,Math.floor(s+(n-a)*c/n+m)),r)}const n=e[2*s+r];let a=i,l=o;for(c(t,e,i,s),e[2*o+r]>n&&c(t,e,i,o);a<l;){for(c(t,e,a,l),a++,l--;e[2*a+r]<n;)a++;for(;e[2*l+r]>n;)l--}e[2*i+r]===n?c(t,e,i,l):(l++,c(t,e,l,o)),l<=s&&(i=l+1),s<=l&&(o=l-1)}}function c(t,e,s,i){m(t,s,i),m(e,2*s,2*i),m(e,2*s+1,2*i+1)}function m(t,e,s){const i=t[e];t[e]=t[s],t[s]=i}function h(t,e,s,i,o,r,n){const a=[0,t.length-1,0],l=[];let p,c;for(;a.length;){const m=a.pop(),h=a.pop(),u=a.pop();if(h-u<=n){for(let n=u;n<=h;n++)p=e[2*n],c=e[2*n+1],p>=s&&p<=o&&c>=i&&c<=r&&l.push(t[n]);continue}const d=Math.floor((u+h)/2);p=e[2*d],c=e[2*d+1],p>=s&&p<=o&&c>=i&&c<=r&&l.push(t[d]);const g=(m+1)%2;(0===m?s<=p:i<=c)&&(a.push(u),a.push(d-1),a.push(g)),(0===m?o>=p:r>=c)&&(a.push(d+1),a.push(h),a.push(g))}return l}function u(t,e,s,i,o,r){const n=[0,t.length-1,0],a=[],l=o*o;for(;n.length;){const p=n.pop(),c=n.pop(),m=n.pop();if(c-m<=r){for(let o=m;o<=c;o++)d(e[2*o],e[2*o+1],s,i)<=l&&a.push(t[o]);continue}const h=Math.floor((m+c)/2),u=e[2*h],g=e[2*h+1];d(u,g,s,i)<=l&&a.push(t[h]);const f=(p+1)%2;(0===p?s-o<=u:i-o<=g)&&(n.push(m),n.push(h-1),n.push(f)),(0===p?s+o>=u:i+o>=g)&&(n.push(h+1),n.push(c),n.push(f))}return a}function d(t,e,s,i){const o=t-s,r=e-i;return o*o+r*r}a=function t(e,s){if(e===s)return!0;if(e&&s&&"object"==typeof e&&"object"==typeof s){if(e.constructor!==s.constructor)return!1;var i,o,r;if(Array.isArray(e)){if((i=e.length)!=s.length)return!1;for(o=i;0!=o--;)if(!t(e[o],s[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===s.source&&e.flags===s.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===s.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===s.toString();if((i=(r=Object.keys(e)).length)!==Object.keys(s).length)return!1;for(o=i;0!=o--;)if(!Object.prototype.hasOwnProperty.call(s,r[o]))return!1;for(o=i;0!=o--;){var n=r[o];if(!t(e[n],s[n]))return!1}return!0}return e!=e&&s!=s};const g=t=>t[0],f=t=>t[1];class b{range(t,e,s,i){return h(this.ids,this.coords,t,e,s,i,this.nodeSize)}within(t,e,s){return u(this.ids,this.coords,t,e,s,this.nodeSize)}constructor(t,e=g,s=f,i=64,o=Float64Array){this.nodeSize=i,this.points=t;const r=t.length<65536?Uint16Array:Uint32Array,n=this.ids=new r(t.length),a=this.coords=new o(2*t.length);for(let i=0;i<t.length;i++)n[i]=i,a[2*i]=e(t[i]),a[2*i+1]=s(t[i]);l(n,a,i,0,n.length-1,0)}}const y={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:t=>t},_=Math.fround||(v=new Float32Array(1),t=>(v[0]=+t,v[0]));var v;class x{load(t){const{log:e,minZoom:s,maxZoom:i,nodeSize:o}=this.options;e&&console.time("total time");const r=`prepare ${t.length} points`;e&&console.time(r),this.points=t;let n=[];for(let e=0;e<t.length;e++)t[e].geometry&&n.push(w(t[e],e));this.trees[i+1]=new b(n,A,I,o,Float32Array),e&&console.timeEnd(r);for(let t=i;t>=s;t--){const s=+Date.now();n=this._cluster(n,t),this.trees[t]=new b(n,A,I,o,Float32Array),e&&console.log("z%d: %d clusters in %dms",t,n.length,+Date.now()-s)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let s=((t[0]+180)%360+360)%360-180;const i=Math.max(-90,Math.min(90,t[1]));let o=180===t[2]?180:((t[2]+180)%360+360)%360-180;const r=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)s=-180,o=180;else if(s>o){const t=this.getClusters([s,i,180,r],e),n=this.getClusters([-180,i,o,r],e);return t.concat(n)}const n=this.trees[this._limitZoom(e)],a=n.range(E(s),M(r),E(o),M(i)),l=[];for(const t of a){const e=n.points[t];l.push(e.numPoints?k(e):this.points[e.index])}return l}getChildren(t){const e=this._getOriginId(t),s=this._getOriginZoom(t),i="No cluster with the specified id.",o=this.trees[s];if(!o)throw new Error(i);const r=o.points[e];if(!r)throw new Error(i);const n=this.options.radius/(this.options.extent*Math.pow(2,s-1)),a=o.within(r.x,r.y,n),l=[];for(const e of a){const s=o.points[e];s.parentId===t&&l.push(s.numPoints?k(s):this.points[s.index])}if(0===l.length)throw new Error(i);return l}getLeaves(t,e,s){e=e||10,s=s||0;const i=[];return this._appendLeaves(i,t,e,s,0),i}getTile(t,e,s){const i=this.trees[this._limitZoom(t)],o=Math.pow(2,t),{extent:r,radius:n}=this.options,a=n/r,l=(s-a)/o,p=(s+1+a)/o,c={features:[]};return this._addTileFeatures(i.range((e-a)/o,l,(e+1+a)/o,p),i.points,e,s,o,c),0===e&&this._addTileFeatures(i.range(1-a/o,l,1,p),i.points,o,s,o,c),e===o-1&&this._addTileFeatures(i.range(0,l,a/o,p),i.points,-1,s,o,c),c.features.length?c:null}getClusterExpansionZoom(t){let e=this._getOriginZoom(t)-1;for(;e<=this.options.maxZoom;){const s=this.getChildren(t);if(e++,1!==s.length)break;t=s[0].properties.cluster_id}return e}_appendLeaves(t,e,s,i,o){const r=this.getChildren(e);for(const e of r){const r=e.properties;if(r&&r.cluster?o+r.point_count<=i?o+=r.point_count:o=this._appendLeaves(t,r.cluster_id,s,i,o):o<i?o++:t.push(e),t.length===s)break}return o}_addTileFeatures(t,e,s,i,o,r){for(const n of t){const t=e[n],a=t.numPoints;let l,p,c;if(a)l=L(t),p=t.x,c=t.y;else{const e=this.points[t.index];l=e.properties,p=E(e.geometry.coordinates[0]),c=M(e.geometry.coordinates[1])}const m={type:1,geometry:[[Math.round(this.options.extent*(p*o-s)),Math.round(this.options.extent*(c*o-i))]],tags:l};let h;a?h=t.id:this.options.generateId?h=t.index:this.points[t.index].id&&(h=this.points[t.index].id),void 0!==h&&(m.id=h),r.features.push(m)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,e){const s=[],{radius:i,extent:o,reduce:r,minPoints:n}=this.options,a=i/(o*Math.pow(2,e));for(let i=0;i<t.length;i++){const o=t[i];if(o.zoom<=e)continue;o.zoom=e;const l=this.trees[e+1],p=l.within(o.x,o.y,a),c=o.numPoints||1;let m=c;for(const t of p){const s=l.points[t];s.zoom>e&&(m+=s.numPoints||1)}if(m>c&&m>=n){let t=o.x*c,n=o.y*c,a=r&&c>1?this._map(o,!0):null;const h=(i<<5)+(e+1)+this.points.length;for(const s of p){const i=l.points[s];if(i.zoom<=e)continue;i.zoom=e;const p=i.numPoints||1;t+=i.x*p,n+=i.y*p,i.parentId=h,r&&(a||(a=this._map(o,!0)),r(a,this._map(i)))}o.parentId=h,s.push(S(t/m,n/m,h,m,a))}else if(s.push(o),m>1)for(const t of p){const i=l.points[t];i.zoom<=e||(i.zoom=e,s.push(i))}}return s}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,e){if(t.numPoints)return e?q({},t.properties):t.properties;const s=this.points[t.index].properties,i=this.options.map(s);return e&&i===s?q({},i):i}constructor(t){this.options=q(Object.create(y),t),this.trees=new Array(this.options.maxZoom+1)}}function S(t,e,s,i,o){return{x:_(t),y:_(e),zoom:1/0,id:s,parentId:-1,numPoints:i,properties:o}}function w(t,e){const[s,i]=t.geometry.coordinates;return{x:_(E(s)),y:_(M(i)),zoom:1/0,index:e,parentId:-1}}function k(t){return{type:"Feature",id:t.id,properties:L(t),geometry:{type:"Point",coordinates:[(e=t.x,360*(e-.5)),O(t.y)]}};var e}function L(t){const e=t.numPoints,s=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?Math.round(e/100)/10+"k":e;return q(q({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:s})}function E(t){return t/360+.5}function M(t){const e=Math.sin(t*Math.PI/180),s=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return s<0?0:s>1?1:s}function O(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function q(t,e){for(const s in e)t[s]=e[s];return t}function A(t){return t.x}function I(t){return t.y}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function C(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(s[i[o]]=t[i[o]])}return s}class P{get bounds(){if(0!==this.markers.length||this._position)return this.markers.reduce(((t,e)=>t.extend(e.getPosition())),new google.maps.LatLngBounds(this._position,this._position))}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter((t=>t.getVisible())).length}push(t){this.markers.push(t)}delete(){this.marker&&(this.marker.setMap(null),delete this.marker),this.markers.length=0}constructor({markers:t,position:e}){this.markers=t,e&&(e instanceof google.maps.LatLng?this._position=e:this._position=new google.maps.LatLng(e))}}class j{noop({markers:t}){return N(t)}constructor({maxZoom:t=16}){this.maxZoom=t}}const N=t=>t.map((t=>new P({position:t.getPosition(),markers:[t]})));class T extends j{calculate(e){let s=!1;if(!t(a)(e.markers,this.markers)){s=!0,this.markers=[...e.markers];const t=this.markers.map((t=>({type:"Feature",geometry:{type:"Point",coordinates:[t.getPosition().lng(),t.getPosition().lat()]},properties:{marker:t}})));this.superCluster.load(t)}const i={zoom:e.map.getZoom()};return s||this.state.zoom>this.maxZoom&&i.zoom>this.maxZoom||(s=s||!t(a)(this.state,i)),this.state=i,s&&(this.clusters=this.cluster(e)),{clusters:this.clusters,changed:s}}cluster({map:t}){return this.superCluster.getClusters([-180,-90,180,90],Math.round(t.getZoom())).map(this.transformCluster.bind(this))}transformCluster({geometry:{coordinates:[t,e]},properties:s}){if(s.cluster)return new P({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map((t=>t.properties.marker)),position:new google.maps.LatLng({lat:e,lng:t})});{const t=s.marker;return new P({markers:[t],position:t.getPosition()})}}constructor(t){var{maxZoom:e,radius:s=60}=t,i=C(t,["maxZoom","radius"]);super({maxZoom:e}),this.superCluster=new x(Object.assign({maxZoom:this.maxZoom,radius:s},i)),this.state={zoom:null}}}class Z{constructor(t,e){this.markers={sum:t.length};const s=e.map((t=>t.count)),i=s.reduce(((t,e)=>t+e),0);this.clusters={count:e.length,markers:{mean:i/e.length,sum:i,min:Math.min(...s),max:Math.max(...s)}}}}class z{render({count:t,position:e},s){const i=t>Math.max(10,s.clusters.markers.mean)?"#ff0000":"#0000ff",o=window.btoa(`\n  <svg fill="${i}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">\n    <circle cx="120" cy="120" opacity=".6" r="70" />\n    <circle cx="120" cy="120" opacity=".3" r="90" />\n    <circle cx="120" cy="120" opacity=".2" r="110" />\n  </svg>`);return new google.maps.Marker({position:e,icon:{url:`data:image/svg+xml;base64,${o}`,scaledSize:new google.maps.Size(45,45)},label:{text:String(t),color:"rgba(255,255,255,0.9)",fontSize:"12px"},title:`Cluster of ${t} markers`,zIndex:Number(google.maps.Marker.MAX_ZINDEX)+t})}}class F{constructor(){!function(t,e){for(let s in e.prototype)t.prototype[s]=e.prototype[s]}(F,google.maps.OverlayView)}}var G,B;(B=G||(G={})).CLUSTERING_BEGIN="clusteringbegin",B.CLUSTERING_END="clusteringend",B.CLUSTER_CLICK="click";const J=(t,e,s)=>{s.fitBounds(e.bounds)};class R extends F{addMarker(t,e){this.markers.includes(t)||(this.markers.push(t),e||this.render())}addMarkers(t,e){t.forEach((t=>{this.addMarker(t,!0)})),e||this.render()}removeMarker(t,e){const s=this.markers.indexOf(t);return-1!==s&&(t.setMap(null),this.markers.splice(s,1),e||this.render(),!0)}removeMarkers(t,e){let s=!1;return t.forEach((t=>{s=this.removeMarker(t,!0)||s})),s&&!e&&this.render(),s}clearMarkers(t){this.markers.length=0,t||this.render()}render(){const t=this.getMap();if(t instanceof google.maps.Map&&this.getProjection()){google.maps.event.trigger(this,G.CLUSTERING_BEGIN,this);const{clusters:e,changed:s}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});(s||null==s)&&(this.reset(),this.clusters=e,this.renderClusters()),google.maps.event.trigger(this,G.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach((t=>t.setMap(null))),this.clusters.forEach((t=>t.delete())),this.clusters=[]}renderClusters(){const t=new Z(this.markers,this.clusters),e=this.getMap();this.clusters.forEach((s=>{1===s.markers.length?s.marker=s.markers[0]:(s.marker=this.renderer.render(s,t),this.onClusterClick&&s.marker.addListener("click",(t=>{google.maps.event.trigger(this,G.CLUSTER_CLICK,s),this.onClusterClick(t,s,e)}))),s.marker.setMap(e)}))}constructor({map:t,markers:e=[],algorithm:s=new T({}),renderer:i=new z,onClusterClick:o=J}){super(),this.markers=[...e],this.clusters=[],this.algorithm=s,this.renderer=i,this.onClusterClick=o,t&&this.setMap(t)}}function D(t){const e=new google.maps.Map(t,{zoom:16,center:{lat:50.3864813,lng:30.4610184},mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.HORIZONTAL_BAR,position:google.maps.ControlPosition.TOP_CENTER},zoomControl:!0,zoomControlOptions:{position:google.maps.ControlPosition.LEFT_CENTER},scaleControl:!0,streetViewControl:!0,streetViewControlOptions:{position:google.maps.ControlPosition.LEFT_TOP},fullscreenControl:!0}),s=[];e.addListener("bounds_changed",(function(){for(let t=0;t<s.length;t++)"bounds_changed"===s[t].eventName&&s[t].listener(e.getBounds().toJSON())}));return{addPoints:t=>{const s=t.map((({id:t,lat:s,lng:i})=>{const o=t.toString(),r=new google.maps.Marker({position:{lat:s,lng:i},label:o});return r.addListener("click",(t=>{console.log("CLICK!!!",r.label,e.zoom),e.setZoom(18),e.setCenter(r.position);const s=document.querySelector(`[data-id='${r.label}']`);console.log(s),s.scrollIntoView(!0)})),r}));new R({markers:s,map:e})},findNewPoints:t=>new Promise(((s,i)=>{new google.maps.places.PlacesService(e).findPlaceFromQuery(t,(function(t,o){if(o===google.maps.places.PlacesServiceStatus.OK){!function(t){if(!t.geometry||!t.geometry.location)return;new google.maps.Marker({map:e,position:t.geometry.location})}(t[0]);const i={lat:t[0].geometry.location.lat(),lng:t[0].geometry.location.lng()};e.setCenter(t[0].geometry.location),s(i)}else i(o)}))})),zoomTo:()=>{},addEventListener:function(t,e){s.push({eventName:t,listener:e})},removeEventListener:function(t,e){}}}class ${constructor(s){t(e)(this,"itemsGalleryEl",""),t(e)(this,"renderItemsGallery",(t=>t.map((t=>`\n    <li class="item" data-id="${t.id}">\n    <img class="item--img" src="${t.image}" alt="" />\n    <div class="item--details">\n      <h3 class="item--title">${t.title}</h3>\n      <p class="item--description">${t.description}</p>\n    </div>\n  </li>\n    `)).join(""))),t(e)(this,"showAppartments",(t=>{this.itemsGalleryEl.innerHTML=this.renderItemsGallery(t)})),t(e)(this,"hideGallery",(()=>{this.itemsGalleryEl.classList.add("invisible")})),t(e)(this,"openGallery",(()=>{this.itemsGalleryEl.classList.remove("invisible")})),this.itemsGalleryEl=document.querySelector(s)}}class U{constructor(s){t(e)(this,"rootEl",""),t(e)(this,"ref",{inputAddress:"",inputImageLink:"",inputDescripton:"",buttonSearch:"",stepAdd:[]}),t(e)(this,"renderFormToAddNewAppartment",((t,e)=>{this.rootEl.innerHTML='\n<div class="form__wrap">\n  <h3 class="form__title">Додайте новий об\'єкт</h3>\n  <form class="form__body">\n    <label class="form__label">\n      <span class="form__text">Адреса</span>\n      <input class="form__field" type="text" name="title" placeholder="назва вулиці, № будинку" />\n    </label>\n\n    <label class="form__label">\n      <span class="form__text invisible" option="stepAdd">Посилання на фото</span>\n      <input class="form__field invisible" type="text" name="image" option="stepAdd" placeholder="посилання на фото" />\n    </label>\n\n    <label class="form__label ">\n      <span class="form__text invisible" option="stepAdd">Опис</span>\n      <textarea\n        class="form__field form__field--textarea invisible"\n        name="description"\n        option="stepAdd"\n        placeholder="опис об\'єкту"\n        cols="30"\n        rows="10"\n      ></textarea>\n    </label>\n    <button class="form__button form__button--search" option=\'step1\'>Знайти адресу</button>\n    <button class="form__button form__button--save invisible" type="submit" option=\'stepAdd\'>Додати</button>\n    <div class=\'form__error\'>\n    <p class=\'error__text--not-found invisible\'>Об\'єкт не знайдено. Спробуйте ще</p>\n    <p class=\'error__text--empty-fields invisible\'>Заповніть всі поля</p>\n    </div>\n\n  </form>\n</div>\n',this.ref.inputAddress=this.rootEl.querySelector('input[name="title"]'),this.ref.inputImageLink=this.rootEl.querySelector('input[name="image"]'),this.ref.inputDescripton=this.rootEl.querySelector('[name="description"]'),this.ref.buttonSearch=this.rootEl.querySelector(".form__button--search"),this.ref.stepAdd=this.rootEl.querySelectorAll('[option="stepAdd"]'),this.ref.inputAddress.addEventListener("focus",(()=>{this.ref.inputAddress.value="",this.hideErrorSearch()})),this.rootEl.querySelector(".form__button--search").addEventListener("click",(e=>{e.preventDefault();const s=this.ref.inputAddress.value;t(s)})),this.rootEl.querySelector(".form__body").addEventListener("submit",(t=>{t.preventDefault();const s=t.currentTarget.elements.title.value,i=t.currentTarget.elements.image.value,o=t.currentTarget.elements.description.value;e({title:s,image:i,description:o})}))})),t(e)(this,"openFormAfterSearch",(()=>{this.ref.buttonSearch.classList.add("invisible"),this.ref.stepAdd.forEach((t=>t.classList.remove("invisible")))})),t(e)(this,"hideFormAfterSearch",(()=>{this.ref.inputAddress.value="",this.ref.inputImageLink.value="",this.ref.inputDescripton.value="",this.ref.buttonSearch.classList.remove("invisible"),this.ref.stepAdd.forEach((t=>t.classList.add("invisible")))})),t(e)(this,"hideForm",(()=>{this.rootEl.classList.add("invisible")})),t(e)(this,"openForm",(()=>{this.rootEl.classList.remove("invisible")})),t(e)(this,"hideErrorSearch",(()=>{this.rootEl.querySelector(".error__text--not-found").classList.add("invisible")})),t(e)(this,"showErrorSearch",(()=>{this.rootEl.querySelector(".error__text--not-found").classList.remove("invisible")})),this.rootEl=document.querySelector(s),this.hideForm()}}window.main=function(){const t=new o;t.initModel();const e=D(document.getElementById("map")),s=new $(".item--list"),i=new U(".form-block"),r=document.querySelector(".header--btn");r.addEventListener("click",i.openForm),r.addEventListener("click",s.hideGallery),e.addPoints(t.getAllPoints()),e.addEventListener("bounds_changed",(function(e){const i=t.getVisiblePointsId(e);s.showAppartments(t.getAppartmentsByIdArr(i))}));const n=e=>{t.initBuffer(t.getLastPointId(),e),i.openFormAfterSearch()};i.renderFormToAddNewAppartment((t=>{e.findNewPoints({fields:["name","geometry"],query:t}).then(n).catch(i.showErrorSearch)}),(({title:e,image:o,description:r})=>{t.addAppartmentToBuffer({title:e,image:o,description:r}),t.addNewAppartment(t.bufferObj),i.hideFormAfterSearch(),i.hideForm(),s.openGallery(),s.showAppartments(t.getAppartmentById(t.bufferObj.id))}))};
//# sourceMappingURL=index.4cc33e2a.js.map
