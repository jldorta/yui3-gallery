YUI.add("gallery-center",function(D){var A=D.namespace("apm"),B=function(C){B.superclass.constructor.apply(this,arguments);this._host=C.host;};B.NAME="Center";B.NS="apm_center";D.extend(B,Object,{offset:function(C){C=C||this._host.get("region");return[Math.floor(C.width/2),Math.floor(C.height/2)];},calc:function(){var C=this._host.get("region"),E=this.offset(C);return[C.left+E[0],C.top+E[1]];},to:function(C,G){switch(D.Lang.type(C)){case"array":G=C[1];C=C[0];break;case"object":G=C.pageY;C=C.pageX;break;default:}var F=this.offset(),E=[C-F[0],G-F[1]];this._host.setXY(E);return E;}});A.Center=B;},"gallery-2010.02.19-03",{requires:["node-pluginhost","node-screen"]});