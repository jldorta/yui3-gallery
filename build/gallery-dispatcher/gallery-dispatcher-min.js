YUI.add("gallery-dispatcher",function(A){var G=A.ClassNameManager.getClassName,I="dispatcher",R="script",T="fetch",Q="purge",C="beforeExecute",S="load",O="ready",F="uri",D="content",E="autopurge",N="loading",P="node",B=G(I,"loading"),H=A.Lang,J=H.isBoolean,K=H.isString,M=function(){M.superclass.constructor.apply(this,arguments);};function U(V){var L=A.Node.create("<div></div>"),W={};L.setContent(V);W.js=L.all(R).each(function(X){X.get("parentNode").removeChild(X);});W.content=L.get("innerHTML");return W;}A.mix(M,{EVENT_PREFIX:I,ATTRS:{node:{value:null,setter:function(L){this.stop();return A.one(L);}},autopurge:{value:true,validator:J},uri:{value:null,validator:function(L){return(L&&K(L)&&(L!==""));}},content:{value:"",validator:K},loading:{value:false,validator:J,readOnly:true,setter:function(L){if(L){this.fire(T);this.get(P).addClass(B);}else{this.fire(S);this.get(P).removeClass(B);}return L;}}}});A.extend(M,A.Base,{_queue:null,_io:null,initializer:function(L){L=L||{};this._queue=new A.AsyncQueue();this._initEvents();this.after(D+"Change",function(V){this._dispatch(V.newVal);},this);this.after(F+"Change",function(V){this._fetch(V.newVal);},this);if(L[D]){this._dispatch(this.get(D));}if(L[F]){this._fetch(this.get(F));}},destructor:function(){this.stop();this._queue=null;this._io=null;},stop:function(){this._queue.stop();if(this._io){this._io.abort();}return this;},_initEvents:function(){this.publish(T);this.publish(O);this.publish(Q);this.publish(C);this.publish(S);},_dispatch:function(V){var L=this,X=U(V),W=this._queue,Y=this.get(P);this.stop();if(!Y){return;}if(this.get(E)){W.add({fn:function(){Y.get("children").each(function(Z){Z.purge(true);});L.fire(Q,Y);}});}W.add({fn:function(){Y.setContent(X.content);L.fire(C,Y);}});X.js.each(function(Z){if(Z&&Z.get("src")){W.add({fn:function(){A.Get.script(Z.get("src"),{onFailure:function(a){},onEnd:function(a){a.purge();W.run();}});},autoContinue:false});}else{W.add({fn:function(){var c=Z.get("ownerDocument"),b=c.one("head")||c.get("documentElement"),a=A.Node.create("<"+R+"></"+R+">");b.replaceChild(Z,b.appendChild(a));if(Z._node.text){a._node.text=Z._node.text;}Z.remove();}});}});W.add({fn:function(){L.fire(O);}});this._queue.run();},_fetch:function(V,L){this.stop();if(!V){return false;}L=L||{method:"GET"};L.on={start:function(){this._set(N,true);},success:function(W,X){this.set(D,X.responseText);},failure:function(W,X){},end:function(){this._set(N,false);}};L.context=this;return(this._io=A.io(V,L));}});A.Dispatcher=M;},"gallery-2010.04.28-20-33",{requires:["base-base","node-base","io-base","get","async-queue","classnamemanager"]});
