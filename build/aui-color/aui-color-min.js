AUI.add("aui-color",function(F){var I=F.Lang,J=I.isArray,O=I.isObject,E=I.isString,M={hs:1,rg:1},N=Math,G=N.max,C=N.min,L=/\s*,\s*/,P=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+\s*,\s*[\d\.]+\s*,\s*[\d\.]+(?:\s*,\s*[\d\.]+)?)\s*\)|rgba?\(\s*([\d\.]+%\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%(?:\s*,\s*[\d\.]+%)?)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsb\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0)?\s*,\s*[\d\.]+\s*,\s*[\d\.]+)\s*\)|hsl\(\s*([\d\.]+(?:deg|\xb0|%)\s*,\s*[\d\.]+%\s*,\s*[\d\.]+%)\s*\))\s*$/i,H=/^(?=[\da-f]$)/,B=/^\s+|\s+$/g,K="";var D={constrainTo:function(S,T,Q,R){var A=this;if(S<T||S>Q){S=R;}return S;},getRGB:F.cached(function(Q){if(!Q||!!((Q=String(Q)).indexOf("-")+1)){return new D.RGB("error");}if(Q=="none"){return new D.RGB();}if(!M.hasOwnProperty(Q.substring(0,2))&&Q.charAt(0)!="#"){Q=D._toHex(Q);}var V;var U;var A;var S;var T;var R=Q.match(P);if(R){if(R[2]){A=parseInt(R[2].substring(5),16);U=parseInt(R[2].substring(3,5),16);V=parseInt(R[2].substring(1,3),16);}if(R[3]){A=parseInt((T=R[3].charAt(3))+T,16);U=parseInt((T=R[3].charAt(2))+T,16);V=parseInt((T=R[3].charAt(1))+T,16);}if(R[4]){R=R[4].split(L);V=parseFloat(R[0]);U=parseFloat(R[1]);A=parseFloat(R[2]);S=parseFloat(R[3]);}if(R[5]){R=R[5].split(L);V=parseFloat(R[0])*2.55;U=parseFloat(R[1])*2.55;A=parseFloat(R[2])*2.55;S=parseFloat(R[3]);}if(R[6]){R=R[6].split(L);V=parseFloat(R[0]);U=parseFloat(R[1]);A=parseFloat(R[2]);if(R[0].slice(-3)=="deg"||R[0].slice(-1)=="\xb0"){V/=360;}return D.hsb2rgb(V,U,A);}if(R[7]){R=R[7].split(L);V=parseFloat(R[0])*2.55;U=parseFloat(R[1])*2.55;A=parseFloat(R[2])*2.55;if(R[0].slice(-3)=="deg"||R[0].slice(-1)=="\xb0"){V/=360*2.55;}return D.hsb2rgb(V,U,A);}if(R[8]){R=R[8].split(L);V=parseFloat(R[0]);U=parseFloat(R[1]);A=parseFloat(R[2]);if(R[0].slice(-3)=="deg"||R[0].slice(-1)=="\xb0"){V/=360;}return D.hsl2rgb(V,U,A);}if(R[9]){R=R[9].split(L);V=parseFloat(R[0])*2.55;U=parseFloat(R[1])*2.55;A=parseFloat(R[2])*2.55;if(R[0].slice(-3)=="deg"||R[0].slice(-1)=="\xb0"){V/=360*2.55;}return D.hsl2rgb(V,U,A);}R=new D.RGB(V,U,A,S);return R;}return new D.RGB("error");}),hex2rgb:function(Q){var A=this;Q=String(Q).split("#");Q.unshift("#");return A.getRGB(Q.join(""));},hsb2rgb:function(){var A=this;var Q=A._getColorArgs("hsbo",arguments);Q[2]/=2;return A.hsl2rgb.apply(A,Q);},hsv2rgb:function(){var Z=this;var U=Z._getColorArgs("hsv",arguments);var T=Z.constrainTo(U[0],0,1,0);var c=Z.constrainTo(U[1],0,1,0);var Y=Z.constrainTo(U[2],0,1,0);var A;var V;var X;var S=Math.floor(T*6);var W=T*6-S;var R=Y*(1-c);var Q=Y*(1-W*c);var a=Y*(1-(1-W)*c);switch(S%6){case 0:A=Y;V=a;X=R;break;case 1:A=Q;V=Y;X=R;break;case 2:A=R;V=Y;X=a;break;case 3:A=R;V=Q;X=Y;break;case 4:A=a;V=R;X=Y;break;case 5:A=Y;V=R;X=Q;break;}return new D.RGB(A*255,V*255,X*255);},hsl2rgb:function(){var Y=this;var Z=Y._getColorArgs("hslo",arguments);var V=Z[0];var a=Z[1];var U=Z[2];var T=Z[3];var A,W,X;if(a==0){A=W=X=U;}else{var S=Y._hue2rgb;var Q=U<0.5?U*(1+a):U+a-U*a;var R=2*U-Q;A=S(R,Q,V+1/3);W=S(R,Q,V);X=S(R,Q,V-1/3);}return new D.RGB(A*255,W*255,X*255,T);},rgb2hex:function(W,V,R){var Q=this;var S=Q._getColorArgs("rgb",arguments);var U=S[0];var T=S[1];var A=S[2];return(16777216|A|(T<<8)|(U<<16)).toString(16).slice(1);},rgb2hsb:function(){var A=this;var Q=A.rgb2hsv.apply(A,arguments);Q.b=Q.v;return Q;},rgb2hsl:function(){var Y=this;var V=Y._getColorArgs("rgb",arguments);var A=V[0]/255;var T=V[1]/255;var W=V[2]/255;var X=Math.max(A,T,W);var R=Math.min(A,T,W);var S;var Z;var Q=(X+R)/2;if(X==R){S=Z=0;}else{var U=X-R;Z=Q>0.5?U/(2-X-R):U/(X+R);switch(X){case A:S=(T-W)/U+(T<W?6:0);break;case T:S=(W-A)/U+2;break;case W:S=(A-T)/U+4;break;}S/=6;}return{h:S,s:Z,l:Q,toString:D._hsltoString};},rgb2hsv:function(){var Y=this;var U=Y._getColorArgs("rgb",arguments);var A=U[0]/255;var S=U[1]/255;var V=U[2]/255;var W=Math.max(A,S,V);var Q=Math.min(A,S,V);var R;var Z;var X=W;var T=W-Q;Z=W==0?0:T/W;if(W==Q){R=0;}else{switch(W){case A:R=(S-V)/T+(S<V?6:0);break;case S:R=(V-A)/T+2;break;case V:R=(A-S)/T+4;break;}R/=6;}return{h:R,s:Z,v:X,toString:D._hsbtoString};},_getColorArgs:function(U,R){var Q=this;var T=[];var A=R[0];if(J(A)&&A.length){T=A;}else{if(O(A)){var W=U.split("");var V=W.length;for(var S=0;S<V;S++){T[S]=A[W[S]];}}else{T=F.Array(R);}}return T;},_hsbtoString:function(){var A=this;return["hs",(("v" in A)?"v":"b"),"(",A.h,A.s,A.b,")"].join("");},_hsltoString:function(){var A=this;return["hsl(",A.h,A.s,A.l,")"].join("");},_hue2rgb:function(R,Q,A){if(A<0){A+=1;}if(A>1){A-=1;}if(A<1/6){return R+(Q-R)*6*A;}if(A<1/2){return Q;}if(A<2/3){return R+(Q-R)*(2/3-A)*6;}return R;},_toHex:function(Q){var A=this;if(F.UA.ie){A._toHex=F.cached(function(T){var V;var U=F.config.win;try{var Y=new U.ActiveXObject("htmlfile");Y.write("<body>");Y.close();V=Y.body;}catch(X){V=U.createPopup().document.body;}var S=V.createTextRange();try{V.style.color=String(T).replace(B,K);var W=S.queryCommandValue("ForeColor");W=((W&255)<<16)|(W&65280)|((W&16711680)>>>16);return"#"+("000000"+W.toString(16)).slice(-6);}catch(X){return"none";}});}else{var R=F.config.doc.createElement("i");R.title="AlloyUI Color Picker";R.style.display="none";F.getBody().append(R);A._toHex=F.cached(function(S){R.style.color=S;return F.config.doc.defaultView.getComputedStyle(R,K).getPropertyValue("color");});}return A._toHex(Q);}};D.RGB=function(S,R,Q,T){var A=this;if(S=="error"){A.error=1;}else{if(arguments.length){A.r=~~S;A.g=~~R;A.b=~~Q;A.hex="#"+D.rgb2hex(A);if(isFinite(parseFloat(T))){A.o=T;}}}};D.RGB.prototype={r:-1,g:-1,b:-1,hex:"none",toString:function(){var A=this;return A.hex;}};F.Color=D;},"@VERSION@",{skinnable:false});