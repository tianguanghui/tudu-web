function pse_a1(j,b){this.j=j;this.b=b;};function pse_a7(c,j){var b=false;switch(j){case 0:if((c>='A')&&(c<='Z')){b=true;};break;case 1:if((c>='a')&&(c<='z')){b=true;};break;case 2:if((c>='0')&&(c<='9')){b=true;};break;case 3:if("!@#$%^&*()_+-='\";:[{]}\|.>,</?`~".indexOf(c)>=0){b=true;};break;case 4:if(pse_a7(c,0)||pse_a7(c,1)){b=true;};break;default:break;};return b;};function pse_a8(e,g){if((e==null)||isNaN(g)){return false;}else if(e.length<g){return false;};return true;};function pse_a10(e,f){var i=0;var jj=new Array(new pse_a1(0,false),new pse_a1(1,false),new pse_a1(2,false),new pse_a1(3,false));if((e==null)||isNaN(f)){return false;};for(var k=0;k<e.length;k++){for(var d=0;d<jj.length;d++){if(!jj[d].b&&pse_a7(e.charAt(k),jj[d].j)){jj[d].b=true;break;};};};for(var d=0;d<jj.length;d++){if(jj[d].b){i++;};};if(i<f){return false;};return true;};function pse_a3(h){return(pse_a8(h,"7")&&pse_a10(h,"3"));};function pse_a2(h){return(pse_a8(h,"7")&&pse_a10(h,"2"));};function pse_a4(h){return(pse_a8(h,"5")||(!pse_a8(h,"0")));};function pse_a6(q){return document.getElementById(q);};function SetPwdStrengthEx(o){if(pse_a3(o)){pse_a5(3,'pse04');}else if(pse_a2(o)){pse_a5(2,'pse03');}else if(pse_a4(o)){pse_a5(1,'pse02');}else{pse_a5(0,'pse01');};};function pse_a5(m,p){if(m>3){m=3;};for(var n=0;n<4;n++){var l="pse01";if(n<=m){l=p;};if(n>0){pse_a6("idSM"+n).className=l;};pse_a6("idSMT"+n).style.display=((n==m)?"inline":"none");};};document.write('<style type="text/css">.pse01{background-color:#EBEBEB;border-right:solid 1px #BEBEBE;border-bottom:solid 1px #BEBEBE;}.pse02{background-color:#FF4545;border-right:solid 1px #BB2B2B;border-bottom:solid 1px #BB2B2B;}.pse03{background-color:#FFD35E;border-right:solid 1px #E9AE10;border-bottom:solid 1px #E9AE10;}.pse04{background-color:#95EB81;border-right:solid 1px #3BBC1B;border-bottom:solid 1px #3BBC1B;}</style>');document.write('<table cellpadding="0" cellspacing="0" class="txt_left" style="width:146px; height:8px;line-height:8px;display:inline-table;*display:inline"><tr><td id="idSM1" width="33%" class="pse01" align="center"><span style="font-size:1px">&nbsp;</span><span id="idSMT1" style="display:none;"></span></td><td id="idSM2" width="34%" class="pse01" align="center" style="border-left:solid 1px #fff"><span style="font-size:1px">&nbsp;</span><span id="idSMT0" style="display:inline;font-weight:normal;color:#666"></span><span id="idSMT2" style="display:none;"></span></td><td id="idSM3" width="33%" class="pse01" align="center" style="border-left:solid 1px #fff"><span style="font-size:1px">&nbsp;</span><span id="idSMT3" style="display:none;"></span></td></tr></table>');