"use strict";define("dummy/adapters/echonest-genre",["exports","ember-data-echonest/adapters/echonest-genre"],function(e,t){e["default"]=t["default"]}),define("dummy/app",["exports","ember","ember-resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var l;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](l,r["default"].modulePrefix),e["default"]=l}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:t["default"](n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/models/echonest-genre",["exports","ember-data-echonest/models/echonest-genre"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){this.route("index",{path:"/"}),this.route("genres",function(){this.route("list")})}),e["default"]=a}),define("dummy/routes/genres",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/routes/genres/list",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.store.query("echonest-genre",{bucket:"description"})}})}),define("dummy/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({})}),define("dummy/serializers/echonest-genre",["exports","ember-data-echonest/serializers/echonest-genre"],function(e,t){e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:6,column:2},end:{line:6,column:43}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("button"),a=e.createTextNode("Home");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),t=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:7,column:2},end:{line:7,column:46}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("button"),a=e.createTextNode("Genres");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:11,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("h1");e.setAttribute(n,"class","title");var a=e.createElement("a");e.setAttribute(a,"href","https://github.com/elwayman02/ember-data-echonest"),e.setAttribute(a,"target","_blank");var r=e.createTextNode("Ember Data Echonest Demo");e.appendChild(a,r),e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","header");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h2"),r=e.createTextNode("Examples");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[2]),r=new Array(3);return r[0]=e.createMorphAt(a,3,3),r[1]=e.createMorphAt(a,5,5),r[2]=e.createMorphAt(t,4,4,n),r},statements:[["block","link-to",["index"],[],0,null,["loc",[null,[6,2],[6,55]]]],["block","link-to",["genres"],[],1,null,["loc",[null,[7,2],[7,58]]]],["content","outlet",["loc",[null,[10,0],[10,10]]]]],locals:[],templates:[e,t]}}())}),define("dummy/templates/genres",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:4,column:2},end:{line:4,column:49}},moduleName:"dummy/templates/genres.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("button"),a=e.createTextNode("List");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{topLevel:!1,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:7,column:10}},moduleName:"dummy/templates/genres.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","header");var a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("h3"),r=e.createTextNode("Genres");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[0]),3,3),a[1]=e.createMorphAt(t,2,2,n),e.insertBoundary(t,null),a},statements:[["block","link-to",["genres.list"],[],0,null,["loc",[null,[4,2],[4,61]]]],["content","outlet",["loc",[null,[7,0],[7,10]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/genres/list",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:9,column:20},end:{line:11,column:12}},moduleName:"dummy/templates/genres/list.hbs"},isEmpty:!1,arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n                ");e.appendChild(t,n);var n=e.createElement("li"),a=e.createComment("");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n            ");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[1]),0,0),a},statements:[["content","url",["loc",[null,[10,20],[10,27]]]]],locals:["type","url"],templates:[]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:6,column:4},end:{line:13,column:4}},moduleName:"dummy/templates/genres/list.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("        ");e.appendChild(t,n);var n=e.createElement("tr"),a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createComment("");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createElement("td"),r=e.createElement("ul"),l=e.createComment("");e.appendChild(r,l),e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n        ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1]),0,0),r[1]=e.createMorphAt(e.childAt(a,[3,0]),0,0),r},statements:[["content","genre.name",["loc",[null,[8,16],[8,30]]]],["block","each-in",[["get","genre.urls",["loc",[null,[9,31],[9,41]]]]],[],0,null,["loc",[null,[9,20],[11,24]]]]],locals:["genre"],templates:[e]}}();return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:14,column:8}},moduleName:"dummy/templates/genres/list.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("table"),a=e.createTextNode("\n    ");e.appendChild(n,a);var a=e.createElement("tr"),r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("th"),l=e.createTextNode("Genre");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("th"),l=e.createTextNode("Urls");e.appendChild(r,l),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a);var a=e.createComment("");return e.appendChild(n,a),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(e.childAt(t,[0]),3,3),a},statements:[["block","each",[["get","model",["loc",[null,[6,12],[6,17]]]]],[],0,null,["loc",[null,[6,4],[13,13]]]]],locals:[],templates:[e]}}())}),define("dummy/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{topLevel:null,revision:"Ember@2.1.0-beta.4",loc:{source:null,start:{line:1,column:0},end:{line:1,column:5}},moduleName:"dummy/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("INDEX");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"ember-data-echonest",version:"0.0.1-beta.1+0ca483a8"});