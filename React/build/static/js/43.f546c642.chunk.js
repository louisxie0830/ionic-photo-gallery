(this.webpackJsonpReact=this.webpackJsonpReact||[]).push([[43],{165:function(e,t,r){"use strict";r.r(t),r.d(t,"FilesystemWeb",(function(){return b}));var n=r(50),a=r(28),i=r(4),s=r.n(i),c=r(10),o=r(7),u=r(8),h=r(11),p=r(12);function d(e){var t=e.split("/").filter((function(e){return"."!==e})),r=[];return t.forEach((function(e){".."===e&&r.length>0&&".."!==r[r.length-1]?r.pop():r.push(e)})),r.join("/")}function f(e,t){e=d(e),t=d(t);var r=e.split("/"),n=t.split("/");return e!==t&&r.every((function(e,t){return e===n[t]}))}var b=function(e){Object(h.a)(r,e);var t=Object(p.a)(r);function r(){var e;return Object(o.a)(this,r),(e=t.apply(this,arguments)).DB_VERSION=1,e.DB_NAME="Disc",e._writeCmds=["add","put","delete"],e}return Object(u.a)(r,[{key:"initDb",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this._db){e.next=2;break}return e.abrupt("return",this._db);case 2:if("indexedDB"in window){e.next=4;break}throw this.unavailable("This browser doesn't support IndexedDB");case 4:return e.abrupt("return",new Promise((function(e,n){var a=indexedDB.open(t.DB_NAME,t.DB_VERSION);a.onupgradeneeded=r.doUpgrade,a.onsuccess=function(){t._db=a.result,e(a.result)},a.onerror=function(){return n(a.error)},a.onblocked=function(){console.warn("db blocked")}})));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"dbRequest",value:function(){var e=Object(c.a)(s.a.mark((function e(t,r){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=-1!==this._writeCmds.indexOf(t)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(i,s){var c=e.transaction(["FileStorage"],n).objectStore("FileStorage"),o=c[t].apply(c,Object(a.a)(r));o.onsuccess=function(){return i(o.result)},o.onerror=function(){return s(o.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"dbIndexRequest",value:function(){var e=Object(c.a)(s.a.mark((function e(t,r,n){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=-1!==this._writeCmds.indexOf(r)?"readwrite":"readonly",e.abrupt("return",this.initDb().then((function(e){return new Promise((function(s,c){var o=e.transaction(["FileStorage"],i).objectStore("FileStorage").index(t),u=o[r].apply(o,Object(a.a)(n));u.onsuccess=function(){return s(u.result)},u.onerror=function(){return c(u.error)}}))})));case 2:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"getPath",value:function(e,t){var r=void 0!==t?t.replace(/^[/]+|[/]+$/g,""):"",n="";return void 0!==e&&(n+="/"+e),""!==t&&(n+="/"+r),n}},{key:"clear",value:function(){var e=Object(c.a)(s.a.mark((function e(){var t,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.initDb();case 2:t=e.sent,r=t.transaction(["FileStorage"],"readwrite"),r.objectStore("FileStorage").clear();case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"readFile",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=6;break}throw Error("File does not exist.");case 6:return e.abrupt("return",{data:n.content?n.content:""});case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"writeFile",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n,a,i,c,o,u,h,p,d;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=t.recursive,e.next=5,this.dbRequest("get",[r]);case 5:if(!(i=e.sent)||"directory"!==i.type){e.next=8;break}throw"The supplied path is a directory.";case 8:return c=t.encoding,o=r.substr(0,r.lastIndexOf("/")),e.next=12,this.dbRequest("get",[o]);case 12:if(void 0!==e.sent){e.next=19;break}if(-1===(u=o.indexOf("/",1))){e.next=19;break}return h=o.substr(u),e.next=19,this.mkdir({path:h,directory:t.directory,recursive:a});case 19:return p=Date.now(),d={path:r,folder:o,type:"file",size:n.length,ctime:p,mtime:p,content:!c&&n.indexOf(",")>=0?n.split(",")[1]:n},e.next=23,this.dbRequest("put",[d]);case 23:return e.abrupt("return",{uri:d.path});case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"appendFile",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n,a,i,c,o,u,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.data,a=r.substr(0,r.lastIndexOf("/")),i=Date.now(),c=i,e.next=7,this.dbRequest("get",[r]);case 7:if(!(o=e.sent)||"directory"!==o.type){e.next=10;break}throw"The supplied path is a directory.";case 10:return e.next=12,this.dbRequest("get",[a]);case 12:if(void 0!==e.sent){e.next=19;break}if(-1===(u=a.indexOf("/",1))){e.next=19;break}return h=a.substr(u),e.next=19,this.mkdir({path:h,directory:t.directory,recursive:!0});case 19:return void 0!==o&&(n=o.content+n,c=o.ctime),p={path:r,folder:a,type:"file",size:n.length,ctime:c,mtime:i,content:n},e.next=23,this.dbRequest("put",[p]);case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteFile",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==e.sent){e.next=6;break}throw Error("File does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:if(0===e.sent.length){e.next=11;break}throw Error("Folder is not empty.");case 11:return e.next=13,this.dbRequest("delete",[r]);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"mkdir",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n,a,i,c,o,u,h,p;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),n=t.recursive,a=r.substr(0,r.lastIndexOf("/")),i=(r.match(/\//g)||[]).length,e.next=6,this.dbRequest("get",[a]);case 6:return c=e.sent,e.next=9,this.dbRequest("get",[r]);case 9:if(o=e.sent,1!==i){e.next=12;break}throw Error("Cannot create Root directory");case 12:if(void 0===o){e.next=14;break}throw Error("Current directory does already exist.");case 14:if(n||2===i||void 0!==c){e.next=16;break}throw Error("Parent directory must exist");case 16:if(!n||2===i||void 0!==c){e.next=20;break}return u=a.substr(a.indexOf("/",1)),e.next=20,this.mkdir({path:u,directory:t.directory,recursive:n});case 20:return h=Date.now(),p={path:r,folder:a,type:"directory",size:0,ctime:h,mtime:h},e.next=24,this.dbRequest("put",[p]);case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rmdir",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,a,i,c,o,u,h,p,d,f;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.path,a=t.directory,i=t.recursive,c=this.getPath(a,r),e.next=4,this.dbRequest("get",[c]);case 4:if(void 0!==(o=e.sent)){e.next=7;break}throw Error("Folder does not exist.");case 7:if("directory"===o.type){e.next=9;break}throw Error("Requested path is not a directory");case 9:return e.next=11,this.readdir({path:r,directory:a});case 11:if(0===(u=e.sent).files.length||i){e.next=14;break}throw Error("Folder is not empty");case 14:h=Object(n.a)(u.files),e.prev=15,h.s();case 17:if((p=h.n()).done){e.next=32;break}return d=p.value,f="".concat(r,"/").concat(d),e.next=22,this.stat({path:f,directory:a});case 22:if("file"!==e.sent.type){e.next=28;break}return e.next=26,this.deleteFile({path:f,directory:a});case 26:e.next=30;break;case 28:return e.next=30,this.rmdir({path:f,directory:a,recursive:i});case 30:e.next=17;break;case 32:e.next=37;break;case 34:e.prev=34,e.t0=e.catch(15),h.e(e.t0);case 37:return e.prev=37,h.f(),e.finish(37);case 40:return e.next=42,this.dbRequest("delete",[c]);case 42:case"end":return e.stop()}}),e,this,[[15,34,37,40]])})));return function(t){return e.apply(this,arguments)}}()},{key:"readdir",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(n=e.sent,""===t.path||void 0!==n){e.next=6;break}throw Error("Folder does not exist.");case 6:return e.next=8,this.dbIndexRequest("by_folder","getAllKeys",[IDBKeyRange.only(r)]);case 8:return a=e.sent,i=a.map((function(e){return e.substring(r.length+1)})),e.abrupt("return",{files:i});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getUri",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:return e.abrupt("return",{uri:(null===n||void 0===n?void 0:n.path)||r});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stat",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.getPath(t.directory,t.path),e.next=3,this.dbRequest("get",[r]);case 3:if(void 0!==(n=e.sent)){e.next=8;break}return e.next=7,this.dbRequest("get",[r+"/"]);case 7:n=e.sent;case 8:if(void 0!==n){e.next=10;break}throw Error("Entry does not exist.");case 10:return e.abrupt("return",{type:n.type,size:n.size,ctime:n.ctime,mtime:n.mtime,uri:n.path});case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"rename",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!0));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"copy",value:function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._copy(t,!1));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestPermissions",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"checkPermissions",value:function(){var e=Object(c.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{publicStorage:"granted"});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"_copy",value:function(){var e=Object(c.a)(s.a.mark((function e(t){var r,a,i,o,u,h,p,d,b,l,x,v,y,k,w,m,g,O,j=this,R=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=R.length>1&&void 0!==R[1]&&R[1],a=t.toDirectory,i=t.to,o=t.from,u=t.directory,i&&o){e.next=5;break}throw Error("Both to and from must be provided");case 5:if(a||(a=u),h=this.getPath(u,o),p=this.getPath(a,i),h!==p){e.next=10;break}return e.abrupt("return");case 10:if(!f(h,p)){e.next=12;break}throw Error("To path cannot contain the from path");case 12:return e.prev=12,e.next=15,this.stat({path:i,directory:a});case 15:d=e.sent,e.next=29;break;case 18:if(e.prev=18,e.t0=e.catch(12),(b=i.split("/")).pop(),l=b.join("/"),!(b.length>0)){e.next=29;break}return e.next=26,this.stat({path:l,directory:a});case 26:if("directory"===e.sent.type){e.next=29;break}throw new Error("Parent directory of the to path is a file");case 29:if(!d||"directory"!==d.type){e.next=31;break}throw new Error("Cannot overwrite a directory with a file");case 31:return e.next=33,this.stat({path:o,directory:u});case 33:x=e.sent,v=function(){var e=Object(c.a)(s.a.mark((function e(t,r,n){var i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=j.getPath(a,t),e.next=3,j.dbRequest("get",[i]);case 3:return(c=e.sent).ctime=r,c.mtime=n,e.next=8,j.dbRequest("put",[c]);case 8:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),y=x.ctime?x.ctime:Date.now(),e.t1=x.type,e.next="file"===e.t1?39:"directory"===e.t1?51:86;break;case 39:return e.next=41,this.readFile({path:o,directory:u});case 41:if(k=e.sent,!r){e.next=45;break}return e.next=45,this.deleteFile({path:o,directory:u});case 45:return e.next=47,this.writeFile({path:i,directory:a,data:k.data});case 47:if(!r){e.next=50;break}return e.next=50,v(i,y,x.mtime);case 50:return e.abrupt("return");case 51:if(!d){e.next=53;break}throw Error("Cannot move a directory over an existing object");case 53:return e.prev=53,e.next=56,this.mkdir({path:i,directory:a,recursive:!1});case 56:if(!r){e.next=59;break}return e.next=59,v(i,y,x.mtime);case 59:e.next=63;break;case 61:e.prev=61,e.t2=e.catch(53);case 63:return e.next=65,this.readdir({path:o,directory:u});case 65:w=e.sent.files,m=Object(n.a)(w),e.prev=67,m.s();case 69:if((g=m.n()).done){e.next=75;break}return O=g.value,e.next=73,this._copy({from:"".concat(o,"/").concat(O),to:"".concat(i,"/").concat(O),directory:u,toDirectory:a},r);case 73:e.next=69;break;case 75:e.next=80;break;case 77:e.prev=77,e.t3=e.catch(67),m.e(e.t3);case 80:return e.prev=80,m.f(),e.finish(80);case 83:if(!r){e.next=86;break}return e.next=86,this.rmdir({path:o,directory:u});case 86:case"end":return e.stop()}}),e,this,[[12,18],[53,61],[67,77,80,83]])})));return function(t){return e.apply(this,arguments)}}()}],[{key:"doUpgrade",value:function(e){var t=e.target.result;e.oldVersion,t.objectStoreNames.contains("FileStorage")&&t.deleteObjectStore("FileStorage"),t.createObjectStore("FileStorage",{keyPath:"path"}).createIndex("by_folder","folder")}}]),r}(r(25).c);b._debug=!0}}]);
//# sourceMappingURL=43.f546c642.chunk.js.map