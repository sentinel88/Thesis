
var isNav, isIE
var coll = ""
var styleObj=""
if(parseInt(navigator.appVersion) >= 4) {
   if (navigator.appName=="Netscape"){
        isNav = true
   } else {
   		isIE = true
   		coll="all."
   		styleObj = ".style"
   	}
}


STATUS = "idle"
SOLVED = false
Large_V = false
STOP = false
RUNNING = false
windowname="frame"
n = 6
METHODS = new Array("Pull","Push")


options20 = '<option>n<option>2<option>3<option>4<option>5<option>6<option>7<option>8<option>9<option>10'

options20 += '<option>11<option>12<option>13<option>14<option>15<option>16<option>17<option>18<option>19<option>20'

options30 = options20 + '<option>21<option>22<option>23<option>24<option>25<option>26<option>27<option>28<option>29<option>30'

function Construct_Spready(){ 
h6 = '<html><head><title>Knapsack Problem</title></head><body bgcolor="white" text="darkblue">'
h6 += '<form name="Spready"><table align="center" border=1 bordercolor="darkred" cellspacing=0 cellpadding=0><tr><td><table width=100% border=1 bordercolor="lightgrey" cellspacing=0>'
 
h6 += '<tr nowrap align="center" bgcolor="beige"><td align="left"><font face="verdana,arial">Item (j)</font></td>'
for(j=1;j<=n;j++){
h6 += '<th>' + j + '</th>'}

h6 += '</tr><tr align="center" bgcolor="lightgrey"><td align="left"><font face="verdana,arial">Weights (w<sub>j</sub>)</font></td>'

for(j=1;j<=n;j++){
h6 += '<td align="center"><input type="text" size=5 name="w' + j + '"></td>'}

h6 += '</tr><tr bgcolor="beige" align="center"><td align="left"><font face="verdana,arial">Volumes (v<sub>j</sub>)</font></td>'

for(j=1;j<=n;j++){

h6 += '<td align="center"><input type="text" size= 5 name="v' + j + '"></td>'
}

h6 += '</tr><tr align="center" bgcolor="lightgrey"><td align="left"><font face="verdana,arial">Decisions (x<sub>j</sub>)</font></td>'

for(j=1;j<=n;j++){
h6 += '<td bgcolor="gold"><input type="text" name="x' + j + '" onclick="this.blur()" size=5 value=" ?"></td>'}

h6 += '</tr><tr bgcolor="beige"><td align="right"><font face="verdna,arial">z* </font></td><td bgcolor="gold" align="center"><input type="text" value=" ?" size=5 name="z" onfocus="this.blur()"></td><td colspan=' + (n-1) + ' align="center"><a href="javascript:void(0)" onclick="document.forms[0].reset()"><img src="img/reset_rw.gif" border=0></a></td></tr>' 

h6 += '<tr bgcolor="lightgrey"><td align="center" colspan=' + (n+1) + '><font face="verdana,arial">Status:</font><input type="text" name="stat" size=70 value="idle"></td></tr>'

h6 += '</table></td></tr>'

h6 += '<tr><td align="center"><textarea name="board" cols=75 rows=10>Good morning/evening!</textarea></td></tr></table>'

h6 += '</form><h2 align=center><font face="verdana,arial"><hr>Knapsack Problem<hr></font></h2>'

h6 += '<center><font face="comic sans MS">Contributed by </font><a href="http://www.tutor.ms.unimelb.edu.au/" target="_top"><img src="../img/tutorlogo.gif" border=0 align="center"></a></center>'

h6 +='</body></html>'
}

function Construct_Large(){
hL = '<html><head><title>Knapsack Problem</title></head><body bgcolor="white" text="darkblue">'

hL +='<form name="Spready"><table align="center" border=1 bordercolor="darkred" cellspacing=0 cellpadding=0 valign="top" width=100%><tr><td align="center"><table cellspacing=0 cellpadding=0 border=1 width=100% bordercolor="lightgrey"><tr><td valign="top"> '


hL += '<table cellpadding=1 cellspacing=0 border=1 bordercolor="lightgrey" width=100%><tr align="center" valign="top"><td><font face="verdana,arial" size=-2><br>j</font></td><td><font face="verdana,arial" size=-2>Weight<br>w<sub>j</sub></font></td><td><font face="verdana,arial" size=-2>Volume<br>v<sub>j</sub></font></td><td><font face="verdana,arial" size=-2><br>x<sub>j</sub></font></td></tr>'

for(j=1;j<=m;j++){

hL += '<tr align="center"><td>' + j + '</td>'
hL += '<td bgcolor="beige"><input type="text" size=4 name="w' + j + '"></td>'
hL += '<td bgcolor="lightgrey"><input type="text" size=4 name="v' + j + '"></td>'
hL += '<td bgcolor="gold"><input type="text" name="x' + j + '" onclick="this.blur()" size=5 value=" ?"></td></tr>'
			}
if((n%2) == 0) {

hL += '<tr><td colspan=4 bgcolor="white" align="center"><a href="javascript:void(0)" onclick="document.forms[0].reset()"><img src="img/reset_rw.gif" border=0></a></td></tr>'
		}
hL += '</table></td><td valign="top"><table cellpadding=1 cellspacing=0 border=1 bordercolor="white"><tr align="center" valign="top"><td><font face="verdana,arial" size=-2><br>j</font></td><td><font face="verdana,arial" size=-2>Weight<br>w<sub>j</sub></font></td><td><font face="verdana,arial" size=-2>Volume<br>v<sub>j</sub></font></td><td><font face="verdana,arial" size=-2><br>x<sub>j</sub></font></td></tr>'

for(j=m+1;j<=n;j++){

hL += '<tr align="center"><td>' + j + '</td>'
hL += '<td bgcolor="beige"><input type="text" size=4 name="w' + j + '"></td>'
hL += '<td bgcolor="lightgrey"><input type="text" size=4 name="v' + j + '"></td>'
hL += '<td bgcolor="gold"><input type="text" name="x' + j + '" onclick="this.blur()" value=" ?" size=5></td></tr>'
}

hL += '<tr><td align="right" colspan=2><font face="verdana,arial">z* = </font></td><td colspan=2 bgcolor="gold" align="center"><input type="text" size=6 name="z" onfocus="this.blur()" value=" ?"></td></tr>'

// hL += '</table></td>'

hL += '</table>'

if((n%2) != 0) {

hL += '</td></tr><tr><td colspan=2 align="center"><a href="javascript:void(0)" onclick="document.forms[0].reset()"><img src="img/reset_rw.gif" border=0></a></td></tr></table></td>'
		}

hL += '</td>'

hL += '<td nowrap bgcolor="beige" colspan=' + m + ' valign="top" align="center"><font face="verdana,arial">Status: </font> <input type="text" size=53 name="stat" value="Idle"><br><textarea name="board" cols=60 rows=' + Math.ceil(1.8*m) + ' onfocus="this.blur()">Good morning</textarea></td></tr></table></td></tr></table></form>'

hL += '<table align="center" width=100%><tr><td width=20% align="center">&nbsp;<br><a href="http://www.ifors.org/tutorial/" target="_top"><img src="../img/asmalllogo.gif" border=0></a></td>'

hL +='<td align="center" width=60%><h2 align=center><font face="verdana,arial"><hr>Knapsack Problem<hr></font></h2></td>'

hL += '<td align="center" width= 20%><font face="verdana,arial">Contributed by</font><br><a href="http://www.tutor.ms.unimelb.edu.au/" target="_top"><img src="../img/tutorlogo.gif" border=0 align="middle"></a></td></tr></table></body></html>'

}



function Print(){
var tcomment=""
if(comment){tcomment = window.down.document.forms[0].comment_area.value}
var cccc = ""
if(tcomment.length > 0){
	cccc ='<p><font color="red">Comment:</font></p><table border=1 bordercolor="darkred" cellspacing=0 cellpadding=5 align="center"><tr><td bgcolor="beige">' + tcomment +'</td></tr></table>'}
REPORT = '<html><body><font color="red">' + REPORT + cccc + '</font></body></html>'

WINPRINT = window.open('blank.html','WINPRINT','scrollbars')
WINPRINT.focus()
WINPRINT.document.clear()
WINPRINT.document.write(REPORT)
WINPRINT.document.close()
Report_Close()
}


function Resize(form){
newn = 1 + form.n.selectedIndex
if(form.name == "Spready"){First_Resize(form);return}
n = newn
form.n.selectedIndex = 0
Resize_n(n)
iuuyuyuyu= setTimeout('Randomize(window.up.document.forms[0])',1000)
}

function First_Resize(form){
form.n.selectedIndex = 0
WIN = window.open( 'frame.html','WIN','scrollbars,width=680')
WIN.focus()
}

function New_Resize(form){
m = Math.ceil(n/2)
if(n <= 10){Construct_Spready();  h = h6; formnam="Spready"}
if(n > 10){Construct_Large(); h = hL; formname="Large"}
window.down.document.clear()
window.down.document.write(h)
window.down.document.close()
window.up.document.clear()
window.up.document.write(tc)
window.up.document.close()
topyudh = setTimeout('Randomize(window.up.document.forms[0])',1000)
}

function Resize_n(n){
m = Math.ceil(n/2)
if(n <= 10){Construct_Spready();  h = h6; formnam="Spready"}
if(n > 10){Construct_Large(); h = hL; formname="Large"}
window.down.document.clear()
window.down.document.write(h)
window.down.document.close()
}


function Solve(form){
if(STATUS == 'running'){Board('The algorithm is running. Use the "STOP" or "PAUSE" buttons to  terminates or pause the execution.');return}
if(STATUS == 'pause'){Board('The system is in a PAUSE mode. Click the "PAUSE" button to resume execution.');return}
Board('Your request is being processed ... ')
RESET(form)
Copy(form)
Check(form)
if(!check){return}
Prepare()
if(Method == 'Pull'){FE_LEQ()}
else {FR_LEQ()}
}


function Prepare(){
return
var form = window.down.document.forms[0]
form.z.value="?"
for(j=1;j<=n;j++){
	eval('form.x' + j + '.value =' + ' ?')   }
}


function Check(form){
check_v  = Check_v(form)
check_w = Check_w(form)
check_V = Check_V(form)
check = check_v && check_w && check_V
if(check){return}
Board(list_v + '\n' + list_w + '\n' + list_V)
     }

function Check_v(form){
var c
list_v = ""
for(j=1;j<=n;j++){
	c = Check_Integer(v[j])
	if(c){v[j] = 1*v[j]}
		else {list_v += 'v[' + j+'], '} 
	}
if(list_v.length == 0){return true}
list_v = 'Sorry, some of the specified volumes are not positive integers, eg ' + list_v + '.'
return false
}

function Check_w(form){
var zero,num,c
zero = ""
num = ""
list_w = ""
for(j=1;j<=n;j++){
	if(isNaN(w[j])){c = false; num += 'w('+ j + '),'} 
	else {w[j] = 1*w[j];c=true}
	if(c && (w[j] == 0) ){zero += 'w(' + j + '),'} 
	}
list_w = zero + num 
if( list_w.length == 0){return true}
list_w = ""
if(num.length != 0){list_w = 'Sorry, some of the specified weights are not numbers, eg ' + num + '.\n'}
if(zero.length != 0){list_w += 'Sorry, some of the specified weights are equal to zero, eg. ' + zero +'.'}
return false
}


function Check_Integer(a){
if(isNaN(a)){return false}
var a = 1*a
if(0 > a){return false}
if(a != Math.floor(a)){return false}
return true
}

function Check_V(form){
list_V = ""
if(isNaN(V)){list_V = 'Sorry, the value specified for V is not a number.';return false}
V = 1*V
if(V == 0){list_V = 'Very funny, a knapsack of zero volume!'; return false}
if(V < 0) {list_V = 'Knapsacks with negative volumes are illegal on this premises!'; return false}
cv = new Array()
VV = new Array()
cv[0] = 0
cv[1] = 0
VV[1] = V
vmin = v[1]
	if(problem == '01'){
	for(j=2;j<=n+1;j++){VV[j] = VV[j-1] -v[j-1]; vmin = Math.min(vmin,v[j-1])}
	if(VV[n+1] >= 0){Unconstrained_V(form);list_V='This is an unconstrained problem (V >= sum of all v(j)).';return false}
	}

if(V < vmin){list_V = 'This is a trivial problem: the volume of the knapsack is smaller than the volume of the smallest item. You cannot put anything in the knapsack.'; return false}
if(Large_V){return true}

MAXV = 200

if(problem == 'UB'){MAXV = 4000}
if(V > MAXV){ list_V = 'You specified a relatively large value for V for this (' + problem + ') type of problem. Depending on how fast your computer is, it may take sometime to complete the job. If you really want to go ahead with this job, please click the "Solve" button again.'; Large_V = true; return false}
return true 
}

function Unconstrained_V(form){
}

function Board(txt){
txt = '\nReport\n++++++++++\n' + txt
window.down.document.forms[0].board.value=txt
}

function Copy(form){
Copy_control(form)
Copy_spread(form)
}

function Copy_spread(form){
var form = window.down.document.forms[0]
for(j=1;j<=n;j++){
	eval('v['+j+']=form.v'+j+'.value')
	eval('w['+j+']=form.w'+j+'.value')
	}
}

function Copy_control(form){
opt= form.OPT.selectedIndex
if(opt==0){opt="max"} else {opt="min"}
LEQ=form.constraint.selectedIndex
if(LEQ==0){P = 0} else {P = -Infinity}
if(opt=="min"){P = -P}
w = new Array()
v = new Array()
V = form.V.value
if(form.method.selectedIndex == 0){Method = "Pull"; METHOD=METHODS[0]}
	else {Method = "Push"; METHOD=METHODS[1]}
if(form.problem.selectedIndex == 0 ){problem = '01'} else {problem = 'UB'}
Random_v = form.random_v.value
Random_w = form.random_w.value
}

function Explain(form){

if(STATUS != 'solved'){Board('\nYou have to solve the problem before you ask for an explanation. Use the "Solve" button to solve the current problems instance.' );return}

meth = form.method.options[form.method.selectedIndex].value

if(meth != Method){Board('The selected method (' + meth + ')  is different from the one used to solve the problem.' );return}

var s = form.explain_state.value
if(!Check_State(s)){return}
State_Explain = parseInt(s)
Stage_Explain = form.explain_stage.selectedIndex

if(problem == 'UB'){Explain_UB(); return}

if((Method == 'Pull')&&(Stage_Explain == 0)){Board('The "Pull" method does not solve the functional equation for stage j = 0.' ); return}


Stat('Explaining (j,s) = (' + Stage_Explain + ',' + State_Explain + ').')
Board('More is coming ....')
if('undefined' == typeof F[Stage_Explain][State_Explain]){Board('The (j,s) pair your specified are not reachable from the initial state. The functional equation was not solved for this pair.'); return} 

if(Method == "Push"){Explain_R();return}


var tt = 'The (backward) functional equation is as follows:\n\n'
tt += 'f(j,s) = f(j+1,s) , if s < v(j)\n       = max{f(j+1,s) , w(j) + f(j+1,s-v(j))} , if s >= v(j)'
tt += '\n\nIn our case j=' + Stage_Explain + ', s=' + State_Explain + ' and v(' + Stage_Explain +') = ' +  v[Stage_Explain] + '.'
var sign = ' > '
if(v[Stage_Explain] > State_Explain){sign = ' <= ' }
tt += '\n\nSince s ' + sign + ' v(' + Stage_Explain + '), it follows that for this case we have\n\n'
var j = Stage_Explain
var s = State_Explain
if(v[j] > s){
tt += 'f('+j + ',' + s + ') = f(' + (j+1) + ',' + s +') = ' +F[j+1][s] + '.'}
else{
tt += 'f('+j + ',' + s + ') = ' + opt +  '{f(' + (j+1) + ',' + s +'),w(' + j +')+f(' +(j+1) +',' + s + '-v(' + j + '))}'
tt += "\n         = " + opt + ' {' + F[j+1][s] + ',' + w[j] + '+' + F[j+1][s-v[j]] + '} \n         = ' + opt + '{' + F[j+1][s] + ',' + (w[j] + F[j+1][s-v[j]] + '}')
tt += '\n         = ' + F[j][s]}
Board(tt)
}

function Explain_R(){
var j = Stage_Explain
var s = State_Explain
if(j == n){Board('The "Push" method does not conduct updates for the final stage j = ' + n + '.'); return}
var tt ="Given that we are at state s in stage j < n and have already computed the value of f(j,s), we can compute a bound for f(j+1,s') for any feasible successer s' of s.  There are two possible successor corresponding to x(j+1)=0 and x(j+1)=1. However, x(j+1) =1 is feasible only if s + v(j) <= V.  In short, at (j,s) we can conduct the following update:\n\n"

tt += '(1) Corresponding to x(j+1)=0 (always feasible):\n\n     f(j+1,s) = f(j,s).\n\n'
tt += '(2) Corresponding to x(j+1)=1 (feasible if s+v(j+1) <= V):'


tt += '\n\nIf s\' = s+v(j+1) has already been generated in the State_Loop, then the update is \n\n'
tt += '       f(j+1,s+v(j+1)) = opt{f(j,s+v(j+1), w(j+1) + f(j,s)}.\n\n'

tt += 'If s\' has not been generated yet, then we initialise it, that is we set \n\n      f(j+1,s+v(j+1))  = w(j+1) + f(j,s).'

tt += '\n\nIn what follows we assume the latter to be the case.'

tt += '\n\nThus, for j=' + j + ', s=' + s + ',  we have : \n\n(1). An update corresponding to x(' + (j+1) + ') = 0:\n\n'

tt += '       f(' + (j+1) +',' + s + ') = f(' + j + ',' + s + ') = ' + F[j][s] + '.\n'

if((s+v[j+1]) > V ){tt +='\n\n(2) Since x(' + j + ') is not feasible, the above  is the only update carried out in this case. '} else {tt += '\n(2). An update corresponding to x(' + (j+1) + ')=1:\n\n       '

tt += 'f(' + (j+1) + ',' + s + '+v(' + (j+1) + ')) = w(' + (j+1) + ') + f(' + j + ',' + s + ')\n       '
tt += 'f(' + (j+1) + ',' + s + '+' + v[j+1] + ') = ' + w[j+1] + '+' + F[j][s] + '\n       '

tt += 'f(' + (j+1) + ',' + (s+ v[j+1]) + ') = ' + (w[j+1] +  + F[j][s] ) +'.' 
   } 
Board(tt)
}


function Explain_UB(){
if(meth != Method){Board('The selected method (' + meth + ')  is different from the one used to solve the problem.' );return}

Stat('Explaining the "Pull" method for state s =' +  State_Explain + '.')
Board('More is coming ....')

if(null == F[State_Explain]){Board('The s value you specified is not reachable from the initial state. The functional equation was not solved for this pair.'); return} 

if(Method == 'Push'){Explain_UB_Push();return}

var tt = 'The (backward) functional equation used by "Pull" is as follows:\n\n'
tt += 'f(0) = 0\n'

if(LEQ == 1){
tt += 'f(s) = C , if 0 < s < v_min\n      = opt{w(j) + f(s-v(j)): v(j) <= s, j=1,...,n} , if s >= v(j)'}

if(LEQ == 0){tt += 'f(s) = C , if 0 < s < v_min\n      = opt{ 0 ,opt{w(j) + f(s-v(j)): v(j) <= s, j=1,...,n}} , if s >= v(j)'}

tt += '\n\nwhere C is a constant whose value depends on the value of opt (either "min" or "max").\n'

var sign = '<='
if (LEQ == 1){ sign = '='}
tt += 'In our case opt=' + opt + ' and the functional constraint is of the "' + sign + '" type, hence C = ' + CC + '.\n'

var te = "" 
if(State_Explain == 0 ){ te = 'Since s=0, we have f(' + State_Explain + ') = 0.'}
if ((State_Explain > 0) && (State_Explain < vmin)){ var te = 'Since s = ' + State_Explain +', vmin = ' + vmin + ', we have  0 < s < vmin, and therefore f(' + State_Explain + ') = C=' + CC + '.' }

if(te.length > 0) {Board(tt + te); return}

tt += 'Since s = ' + State_Explain +', vmin = ' + vmin + ', we have   s >= vmin, hence\n\n'

if(LEQ==1){
tt += 'f(' + State_Explain +') = ' + opt + '{w(j) + f(' + State_Explain + ' - v(j)): v(j) <= ' + State_Explain + ', j=1,...,n}\n\n'
}

if(LEQ == 0){
tt += 'f(' + State_Explain +') = ' + opt  + '{ 0 , ' + opt + '{w(j) + f(' + State_Explain + ' - v(j)): v(j) <= ' + State_Explain + ', j=1,...,n}}\n\n'
}



tt += 'Consequently,\n\n'


AAA = ""
if(LEQ ==0){AAA = "0"}
te = 'f(' + State_Explain + ') = ' + opt + '{' + AAA + ',' 

for (j=1;j<=n; j++){
	if(v[j] > State_Explain){continue}
	te += '*w(' + j + ')+f(' + State_Explain + '-v(' + j + ')),'
					}
	te = te.substring(0,tt.length-1) + '*}'
	
	if(te.length > 90){				
	te = te.split(',')
	te = te.join('\n')
	te = te.split("*")
	tt += te.join('          ')	
		}
	else{te = te.split("*"); tt += te.join('')	; tt = tt.replace('{,','{') ; tt = tt.replace(',}','}')}		
					
te = '\n\nThus\n\nf(' + State_Explain + ') = ' + opt + '{' + AAA + ','

for (j=1;j<=n; j++){
	if(v[j] > State_Explain){continue}
	te += '*' + w[j]  + '+f(' + State_Explain + '-' + v[j] + '),'
					}
	te = te.substring(0,tt.length-1) + '*}'
	
	if(te.length > 90){				
	te = te.split(',')
	te = te.join('\n')
	te = te.split("*")
	tt += te.join('          ')	
		}
	else{te = te.split("*"); tt += te.join('')	; tt = tt.replace('{,','{') ; tt = tt.replace(',}','}')}						
					

te  = '\n\nTherefore\n\nf(' + State_Explain + ') = ' + opt + '{' + AAA + ','
for (j=1;j<=n; j++){
	if(v[j] > State_Explain){continue}
	te += '*' + w[j]  + ' + f(' + (State_Explain - v[j] ) + '),'
					}
					
					
te = te.substring(0,tt.length-1) + '*}'
	
	if(te.length > 90){				
	te = te.split(',')
	te = te.join('\n')
	te = te.split("*")
	tt += te.join('          ')	
		}
	else{te = te.split("*"); tt += te.join(''); tt = tt.replace('{,','{') ; tt = tt.replace(',}','}')	}						
					


te = '\n\nThis yields\n\nf(' + State_Explain + ') = ' + opt + '{' + AAA + ','

for (j=1;j<=n; j++){
	if(v[j] > State_Explain){continue}
	te += '*' + w[j]  + '+' + F[State_Explain - v[j]] + ','
					}
					
	te = te.substring(0,tt.length-1) + '*}'
	
	if(te.length > 90){				
	te = te.split(',')
	te = te.join('\n')
	te = te.split("*")
	tt += te.join('          ')	
		}
	else{te = te.split("*"); tt += te.join('')	}						
					

tt += '\n\nTherefore\n\nf(' + State_Explain + ') = ' + opt + '{' + AAA + ','



for (j=1;j<=n; j++){
	if(v[j] > State_Explain){continue}
	tt += (w[j]  + F[State_Explain - v[j]]) + ','
					}
tt = tt.substring(0,tt.length-1)
tt += '}'

tt += '\n\nHence, f(' + State_Explain + ') = ' +  F[State_Explain] + '.'

if(Infinity == Math.abs(F[State_Explain])){tt += '\n\nThis means that the problem is not feasible.' }

Board(tt)
return

}


function Explain_UB_Push(){
var tt = 'The (forward) "Push" update is as follows:\n\n Given that we are at a "live" state s in L, for each item j such that s+v(j)<= V we do:\n\n'
tt += "      Remove s from L\n      s' = s +v(j)\n      u = w(j) + g(s)\n      if(u is better than g(s')){g(s) = u; append s' to L}\n\n"

Board(tt)

An_UB_Push()

}


function Collect_Decisions(s,express){
var CV = new Array()
for(j=1;j<=n;j++){
	if(s < v[j]){contimue} 
	CV[length] = eval(express)
				}
return CV
}



function Check_State(s){
t = ""
if(isNaN(s)){t = "The specified value of s is not a positive integer."}
if(s < 0) {t = "The specified value of s is a nonnegative integer."}
if(s > V) { t = 'The specified value of s (' + s + ') exceeds the specified volume of the knapsack ( V = ' + V + ")."}
if(Math.floor(s) != s){ t = "The specified value of s is not a positive integer."}
if(t.length != 0 ){Board(t); return false}
return true
}


function Stat(txt){
window.down.document.forms[0].stat.value=txt
}

function Stop(){
form = window.down.document.forms[0]
if(STATUS == "idle" ){return}
if(STATUS == 'solved'){return}
if(STATUS == 'stopped'){return}
STATUS = 'stopped'
YT = setTimeout('STATUS = "idle"',100) 
if(problem == 'UB'){stt = 'form.stat.value= "Stopped at s = '  + SS + '."' } else {
 stt = 'form.stat.value= "Stopped at (j,s) = (' + JJ + ','  + SS + ')."' }
YY = setTimeout(stt,200)
YZ = setTimeout('Board("Stopped!")',200)
}

function Pause(){
if(STATUS == "idle" ){return}
if(STATUS == 'solved'){return}
if(STATUS == 'stopped'){return}
if(STATUS == 'pause'){On_Resume();return}
STATUS = 'pause'
var form = window.down.document.forms[0]
if(problem == 'UB'){form.stat.value='Paused at s = ' + SS + '.'}
else {form.stat.value="Paused at (j,s) = (" + JJ + "," + SS + ")."}
}

function On_Resume(){
STATUS = 'resumed'
var form = window.down.document.forms[0]
if(problem == '01'){form.stat.value="Resumed at (j,s) = (" + JJ + "," + SS + ")."} else {form.stat.value="Resumed  at s = " + SS + "."}
if((Method == 'Pull') && (problem == '01')){Do_LEQ();return}
if((Method == 'Pull') && (problem == 'UB')){Do_UB();return}
if((Method == 'Push') && (problem == '01')){Do_FR();return}
if((Method == 'Push') && (problem == 'UB')){Do_UB();return}

}

function Do_LEQ(){
var form = window.down.document.forms[0]
if(JJ <1) {STATUS = 'solved'; Recover(); return}
if(STATUS == "stopped"){return}
if(STATUS == 'pause'){return}
STATUS = 'running'
form.stat.value='Computing at f(' + JJ + ',' + SS + ').'
F[JJ][SS] = F[JJ+1][SS]
if(SS >= v[JJ]){F[JJ][SS] = Opt_f(opt,F[JJ][SS],w[JJ] + F[JJ+1][SS-v[JJ]])
	Board('f(' + JJ + ',' + SS + ') = ' + F[JJ][SS])
	}
SS = SS+1
if(SS > V){
	JJ = JJ-1
	if(JJ == 0){STATUS = 'solved';Wrap_Up_01(); return}
	SS = Math.max(0,VV[JJ])
			}
IDT = setTimeout('Do_LEQ()',0)
}

function FE_LEQ(){
if(problem == 'UB'){FE_UB(); return}
Initialization()
JJ = n
SS = 0
F = new Array()
for(j=1;j<=n+1;j++){F[j] = new Array()}
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
if(opt=='min'){CC = -CC}
//for(s=VV[n+1];s<=V ; s++){F[n+1][s] = CC}
for(s=0;s<=V ; s++){F[n+1][s] = CC}
F[n+1][0] = 0
Do_LEQ()
return
}

function FE_UB(){
var form = window.down.document.forms[0]
SS = 0
F = new Array()
F[0] = 0
parm = 1
if(opt == 'min'){parm = -1}
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
if(opt=='min'){CC = -CC}
	for(s=1;s<vmin;s++){F[s] = CC}
SS = vmin
idrity = setTimeout('Do_UB()',0)
return
}


function Do_UB(){
var form = window.down.document.forms[0]
if(SS > V){STATUS == 'solved';Recover_UB();return}
if(STATUS == 'stopped'){return}
if(STATUS == 'pause'){return}
STATUS = 'running'
F[SS] = -parm*Infinity
if(LEQ == 0){F[SS] = F[SS-1]}
form.stat.value='Computing at ' + SS + '.'
for(j=1;j<=n;j++){
			if(SS < v[j]) {continue}
			dr = w[j] + F[SS-v[j]]
			F[SS] = Opt_f(opt,F[SS],dr)
			}
SS += 1
if(SS > V){STATUS ='solved';Wrap_Up_UB();return}
uytr = setTimeout('Do_UB()',0)
return
}

function Opt_f(opt,a,b){
if(opt == 'max'){ return Math.max(a,b)}
return Math.min(a,b)
}

function Initialization(){
Stop_Stage = n
Stop_State  = 0 
RUNNING = true
SOLVED == false
}

function FR_LEQ(){
if(problem == 'UB'){FR_UB(); return}
Initialization_FR()
JJ = 0
SS = 0
F = new Array()
for(j=0;j<=n+1;j++){F[j] = new Array()}
F[0][0] = 0
F[1][0] = 0
STATES = new Array()
STATES[0] = 0
Do_FR()
return
}

function Initialization_FR(){
Stop_Stage = 1
Stop_State  = 0 
RUNNING = true
SOLVED = false
}

function Do_FR(){
if(JJ == n) {STATUS = 'solved'; Recover_R(); return}
if(STATUS == "stopped"){return}
if(STATUS == 'pause'){return}
STATUS = 'running'

var NS = STATES.length
for(i=0;i<NS;i++){
var s = STATES[i]
	F[JJ+1][s] = F[JJ][s]
	window.down.document.forms[0].stat.value='Computing at (j,s) = (' + JJ + ',' + s + ').'	
	}
	
for(i=0;i<NS;i++){
	s = STATES[i]
	window.down.document.forms[0].stat.value='Computing at (j,s) = (' + JJ + ',' + s + ').'
	Board('f(' + JJ + ',' + s + ') = ' + F[JJ+1][s])
	var sv = s + v[JJ+1]
	if(V >= sv){
			if('undefined' == typeof F[JJ+1][sv]){F[JJ+1][sv] = F[JJ][s] + w[JJ+1]; STATES[STATES.length] = sv}
		    else{F[JJ+1][sv] = Opt_f(opt,F[JJ+1][sv],F[JJ][s] + w[JJ+1])}
		     }
			Board('f(' + JJ + ',' + s + ') = ' + F[JJ+1][s])
		        }
	JJ = JJ+1
	if(JJ == n){Wrap_Up(); return}
IDT = setTimeout('Do_FR()',0)
}

function Wrap_Up(){
STATUS = 'solved'
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
if(opt == 'min'){CC = -CC}
var parm = 1  

if(opt == 'min'){parm = -1}

if('undefined' == typeof F[n][V]){optr = CC; opts="none"} else {optr=F[n][V]; opts = V}

if(LEQ == 0){
	var NS = STATES.length
		for(s=0; s < NS ; s++){
		if((parm*optr) < parm*F[n][STATES[s]]){ optr = F[n][STATES[s]] ; opts = STATES[s]} 
	 			}
	 			
	 			}

if(opts == 'none'){ttt ="No feasible solution."}	
 else {ttt = 'Optimal final state: s* = ' + opts + '\nOptimal return: Z* = f(n,s*) = ' + optr}
Board(ttt)

SOPT = opts
if(SOPT == "none"){return}
Recover_R()
}

function Wrap_Up_01(){
STATUS = 'solved'
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
if(opt == 'min'){CC = -CC}
optr = CC
opts = 'none'
var parm = 1  
if(opt == 'min'){parm = -1}

if((null == F[1][V]) || (Infinity == Math.abs(F[1][V])) ){optr = CC; opts="none"} else {optr=F[1][V]; opts = V}

if(opts == 'none'){ttt ="No feasible solution."}	
 else {ttt = 'Optimal final state: s* = ' + opts + '\nOptimal return: Z* = f(n,s*) = ' + optr}
Board(ttt)

SOPT = opts
if(SOPT == "none"){return}
Recover()

}


function FR_UB(){
SS = 0
F = new Array()
LL = new Array()
F[0] = 0
LL[0] = true
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
parm = 1
if(opt=='min'){CC = -CC;parm = -1}

for(i=1;i< vmin;i++){F[i] = CC}

STATES = new Array()
STATES[0] = 0
Do_FR_UB()
return
}


function Do_FR_UB(){
if(STATES.length == 0){STATUS = 'solved'; Recover_UB(); return}
if(STATUS == "stopped"){return}
if(STATUS == 'pause'){return}
STATUS = 'running'
	SS = STATES[0]
	window.down.document.forms[0].stat.value='Computing at ' + SS + '.'
	STATES = STATES.slice(1)
	LL[SS] = false
	for(j=1;j<=n;j++){
		us = SS+v[j]
		ur = F[SS] + w[j]
		window.down.document.forms[0].board.value='\n\nUpdating g(' + us + ') = ' + ur + '.'
		if(us > V){continue}
		if('undefined' == typeof LL[us]){F[us] = -parm*Infinity;LL[us] = false}
		if(ur <= parm*F[us]){continue}
		F[us] = ur
		if(LL[us] == false){STATES[STATES.length] = us; LL[us] = true}
					}
if(STATES.length == 0){STATUS ='solved';Wrap_Up_UB();return}
IDT = setTimeout('Do_FR_UB()',0)

}

function Wrap_Up_UB(){
STATUS = 'solved'
if(LEQ == 0){Wrap_Up_UB_LE()} else{Wrap_Up_EQ()} 
if(SOPT == null){Board('The problem is not feasible.'); return}
Recover_UB()
}

function Wrap_Up_UB_LE(){
var NF = F.length
parm =1
if(opt == "min") {parm = -1}
SOPT = 0
ROPT = 0

for(s = 1;s< NF ;s++){
	if(null == F[s]){continue}
	if((parm*F[s]) <= (parm*ROPT)){continue}
	SOPT = s
	ROPT = F[s]
					}
}

function Wrap_Up_EQ(){
if((null == F[V]) || (CC == F[V])){SOPT = null}
else {SOPT = V; ROPT = F[V]}
}



function Recover(){
var ss = V
XOPT = new Array()
var tt = ""
for(j=1;j<=n;j++){
	if(F[j][ss] == F[j+1][ss]){XOPT[j] = 0}
		 else {XOPT[j] = 1
		 }
	 tt +=  'x(' + j + ') = ' + XOPT[j] + '; '
	 ss = ss - XOPT[j]*v[j]
	 eval('window.down.document.forms[0].x' +j + '.value = ' + XOPT[j])
	 window.down.document.forms[0].z.value = F[1][V]
	 }
	 ROPT = F[1][V]
Board('Optimal Solution:\n' + tt + '\nOptimal return:' +  F[1][V])
}

function Recover_R(){
var ss = SOPT
XOPT = new Array()
F[0] = new Array()
F[0][0] = 0
var tt = ""
for(j= n; j > 0 ;j--){
	if(F[j][ss] == F[j-1][ss]){XOPT[j] = 0}
		 else {XOPT[j] = 1
		 ss = ss - v[j]
		 }
	 tt +=  'x(' + j + ') = ' + XOPT[j] + '; '
	 eval('window.down.document.forms[0].x' +j + '.value = ' + XOPT[j])
	 window.down.document.forms[0].z.value = F[n][SOPT]
	 }
	 ROPT = F[n][SOPT]
Board('Optimal Solution:\n' + tt + '\nOptimal return:' +  F[n][SOPT])
}

function Recover_UB(){
var s = SOPT
XOPT = new Array()
for(var i=1;i<=n;i++){XOPT[i] = 0}
while(s >= vmin) { 
	Board("Recover at " + s)
	 for(j=1;j<=n;j++){
			if(s < v[j]){continue}
			if(F[s] == (w[j] + F[s-v[j]])){XOPT[j] += 1; s = s - v[j];break}
		 				}
					}
    t = ""
	 for(j=1;j<=n;j++){eval('window.down.document.forms[0].x' +j + '.value = ' + XOPT[j]); t += 'X(' + j + ')=' + XOPT[j] + '; '}
	  window.down.document.forms[0].z.value = F[SOPT]
	  ttttt =""

	  if(SOPT != V){ttttt = '\nOptimal state, s*=' + SOPT+'.\n'}
	  t = ttttt + 'Optimal solution: ' + t + '\nOptimal Return: f(' + SOPT + ') = ' + F[SOPT]  
	  Board(t)
}


function Copy_Control(){
var form = window.up.document.forms[0]
Control_V = form.V.value
Control_opt = form.OPT.selectedIndex
Control_constraint = form.constraint.selectedIndex
Control_method = form.method.selectedIndex
Control_j = form.explain_stage.value
Control_s = form.explain_state.value
Control_problem = form.problem.selectedIndex
Control_random_v = form.random_w.value
Control_random_w = form.random_v.value
}


function Fix_Control(){
var form = window.up.document.forms[0]
form.V.value = Control_V 
form.OPT.selectedIndex = Control_opt
form.constraint.selectedIndex = Control_constraint
form.method.selectedIndex = Control_method
form.explain_stage.value = Control_j
form.explain_state.value = Control_s
form.problem.selectedIndex = Control_problem
form.random_w.value = Control_random_v
form.random_v.value = Control_random_w
}

function Zero(){
for(j=1;j<=n;j++){
eval('window.down.document.forms.' + formname + '.x' + j +'.value=" 0"')}
eval('window.down.document.forms.'+ formname + '.z.value=" 0"')
}

function Infeasible(){
rep += '\nThe problem is infeasible.'
Board(rep)
}

function Recovery_error(){
rep += "\nThere has been an error in the recovery procedure."
Board(rep)
}

function RESET(form){
}

function Help(form){
var help = 'help_01.html'
var prob = form.problem.selectedIndex
if(prob == 1){help = 'help_UB.html'}
eval('HELP_WIN = window.open("' + help + '","HELP_WIN","width=640,height=460,scrollbars")')
HELP_WIN.focus()}

function Randomize(form){
var range_w = form.random_w.value
var range_v = form.random_v.value
var r
if(0 > range_w.indexOf(',')){Board('Wrong format for the range of values of w(j).');return}
if(0 > range_v.indexOf(',')){Board('Wrong format for the range of values of v(j).');return}
Range_w = range_w.split(',')
Range_v = range_v.split(',')
if(!Check_Range()){return}
var min_v = Math.min(Range_v[0],Range_v[1])
var max_v = Math.max(Range_v[0],Range_v[1])
var min_w = Math.min(Range_w[0],Range_w[1])
var max_w = Math.max(Range_w[0],Range_w[1])
var Range_V = max_v - min_v
var Range_W = max_w - min_w

var rv = new Array()
var rw = new Array()
var VSUM=0
for(var j=0;j< n;j++){
r = 0.5 + min_v + Math.random()*Range_V
rv[j] = Math.floor(r)
VSUM += rv[j]
r = 0.5 + min_w + Math.random()*Range_W
rw[j] = Math.floor(r) }

rv = rv.sort(sort_up)
rw = rw.sort(sort_up)

for( j=1;j<= n ;j++){
eval('window.down.document.forms[0].v' + j + '.value =' + rv[j-1])
eval('window.down.document.forms[0].w' + j + '.value =' + rw[j-1])}
var VR = Math.floor(VSUM/2)
VMAX = 100
if(form.problem.selectedIndex == 0){VR = Math.min(VR,100)}
form.V.value =  VR
form.explain_state.value = VR
STATUS ="idle"
}

function sort_up(a,b){
return a-b
}

function Check_Range(){
var cv1,cv2,cw1,cw2
cv1 = !Check_Integer(Range_v[0])
cv2 = !Check_Integer(Range_v[1])
if(cv1 || cv2 ){Board('Wrong format for the range of values of v(j). Should be two integers separated by a comma, eg. 34,25.');return false}

cw1 = !Check_Integer(Range_w[0])
cw2 = !Check_Integer(Range_w[1])
if(cw1 || cw2 ){Board('Wrong format for the range of values of w(j). Should be two integers separated by a comma, eg. 34,25.');return false}

tt =""

if(Range_v[0] == Range_v[1] ){tt += 'Strage range for v(j)!'}
if(Range_w[0] == Range_w[1] ){tt += 'Strage range for w(j)!'}

if(tt.length > 0){Board(tt);return false}
Board('Random values for the w(j) and v(j) coefficients have been generated.')
Write_Stat('Idle')
return true
}

function Write_Stat(txt){
window.down.document.forms[0].stat.value = txt
}


function Write_Control(){
window.up.document.clear()
window.up.document.write(tc)
window.up.document.close()
}

function Report_First(form){
var tt = 'Hello:\n\nThis simple version does not provide reports. If you want to see what kind of reports are generated, use the "n" menu to resize the problem. This will open a new window containing the module. The "REPORT" button in that front end is capable of generating reports.'
window.down.document.forms[0].board.value = tt
}

function Write_Report(){
if(STATUS != 'solved'){Board('Hello:\nnYou have to solve the problem before you can generate a report.');return}
Copy_Control()
if(problem == '01'){TR =tr} else {TR = trub}
iuiui = setTimeout('window.up.document.clear();window.up.document.write(TR);window.up.document.close()',200)
}

function Report(form){
if(form.name=="Spready"){Report_First();return}
}


function Report_Close(){
Write_Control()
igggggg = setTimeout('Fix_Control()',200)
if("undefined" == typeof window.down.document.forms[0]){Resize_n(n); uyuyuu =setTimeout('Restore_Spready()',200); return}
if("Spready" == window.down.document.forms[0].name){return}
if(window.down.document.forms[0].name != "Spready"){Resize_n(n); uyuyuu =setTimeout('Restore_Spready()',200); return}
}

function Restore_Spready(){
var form = window.down.document.forms[0]
form.z.value = ROPT
for(j=1;j<=n;j++){
	if(XOPT[j] ==1){eval('form.x'+j + '.checked = ' + true)}
	eval('form.w' + j +'.value = ' + w[j])
	eval('form.v' + j +'.value = ' + v[j])
	}
}


function Close_Post_Report(){
Report_Close()
}


function Accept_Report(form){
var tt,tb
name_report=form.report_name.value
title = form.title.value
method = form.method.checked
formulation = form.formulation.checked
parameters = form.parameters.checked
solution = form.solution.checked
policy = form.policy.checked
comment = form.comment.checked
jj = form.j.value
ss = form.s.value
fjs = form.fjs.checked
recovery = form.recovery.checked
Write_Up('Your report is being generated.  This may take sometime. be patient .....')

tt = '<html><head><title>' + title + '</title></head><body bgcolor="white" text="darkblue"><font face="verdana,arial"><h2 align=center><hr>' + title + '<hr></h2>'

tt += 'Report generated by ' + name_report + '.<p>'

if(formulation){ Formulate(); tt += FORMULATION +'<p>'}


if(parameters){ Parameters() ; tt += PARAMETERS + '<p>'}

if(solution){Solution() ; tt += SOLUTION  + '<p>'}

if(recovery){Recovery(); tt += RECOVERY + '<p>'} 

tb ='<form><h3 align=center>Progress report on preparation of the report<hr></h3>'


tb += 'Generating the f(j,s) table. This is a ' + V + ' by ' + n + '     table ..... it may take a while, be patient .....'

tb += '<center><input type="text" name="stat" size="50"></center></form>'

Write_Up(tb)

if(method){
if(Method == "Pull"){ var meth = "Pull"} else {meth = "Push" }

tt += 'Method used to solve the DP functional equation: <font color="red">' + meth + '</font>.<p>'}

if(fjs){FJS(); tt += TABLE }

var tCOMMENT = ""
if(comment){Comment(); tCOMMENT = COMMENT}

REPORT = tt

tt += tCOMMENT

tt += '<img src="img/blank.gif" border=0 onload="parent.Write_Up(parent.tpost)"></font></body></html>'


uyuyuyu = setTimeout("Write_Down('" + tt + "')",1000)

//Write_Up(tpost)

}

function Write_Down(txt){
window.down.document.clear()
window.down.document.write(txt)
window.down.document.close()
}

function Write_Up(txt){
var tt ='<html><body bgcolor="black" text="white"><font face="verdana,arial">'
var tend = '</font></body></html>'
window.up.document.clear()
window.up.document.write(tt + txt + tend)
window.up.document.close()
}

function Write_Up_Stat(txt){
window.up.document.forms[0].stat.value=txt
}


function Comment(){
var t ='<p>Comment:</p><center><form><textarea name="comment_area" cols=80 rows=5 nowrap></textarea></form></center>'
COMMENT = t
}






function FJS(){
var COLORS = new Array("beige","lightgrey")
if(problem =='UB'){FS() ; return}
var t="",fjs
var ffont = '<font face="verdana,arial">'
t = '<center>f(j,s)</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="lightgrey">'

t += '<tr bgcolor="lightgrey"><td align="center" bgcolor="lightgrey">' + ffont + 's x j </font></td>'



for(j=1;j<=n;j++){t += '<td align="center">' + ffont + j + '</font></td>'}
t += '</tr>'

for(s = 0;s<=V;s++){
bg = COLORS[s%2]
t += '<tr bgcolor="' +  bg + '"><td align="center" bgcolor="lightgrey">' + ffont + s + '</font></td>'
for(j=1;j<=n;j++){
	var fjs = F[j][s]
	if('undefined' == typeof F[j][s]){fjs = ' - '}
	 t +='<td align="center">' + ffont + fjs + '</font></td>'
   window.up.document.forms[0].stat.value = 'Copying f(' + j + ',' + s + ').'
		}
t +='</tr>'}
t += '</table></td></tr></table>'
t += '</font></body></html>'
TABLE = t 
}

function FS(){
var t="",fjs,s,M,bgc,v
var COLORS = new Array('lightgrey','beige')
var ffont = '<font face="verdana,arial">'
t = '<center>f(s)</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="lightgrey">'

t += '<tr bgcolor="beige" align="center"><td align="center">' + ffont + ' s </font></td>'

for(j=0;j<=9;j++){
	t += '<td>' + ffont + j + '</font></td>'
				 }
t += '</tr>'

M = Math.ceil(V/10)

for(m = 0; m<=M; m++){
bgc = COLORS[m%2]
	t += '<tr bgcolor="' + bgc + '"><td bgcolor="white">' + (m*10) + ' - ' + (9 + m*10) + '</td>'
	
		for(j=0;j<=9;j++){
			s = j + m*10
			Write_Up_Stat('Computing f(s) for s = ' + s + '.')
			v = F[s]
			if('undefined' == typeof v){ v = ' - '}
			t += '<td align="center">' + ffont + v + '</font></td>'}
		 	t += '</tr>'
					 }
t += '</table></td></tr></table>'
t += '</font></body></html>'


TABLE = t
}

function Solution(){
var t="",tx="",tj=""
var ffont = '<font face="verdana,arial">'
t = '<center>Optimal Solution</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="gray"><tr><td align="center">j</td>'
for(j=1;j<=n;j++){
	tj  += '<td align="center">' + ffont + j + '</font></td>'
	tx  += '<td align="center">' +ffont  + XOPT[j] + '</font></td>'}

t += tj + '</tr><tr bgcolor="lightgrey"><td>x<sub>j</sub></td>'
t += tx + '</tr>'
t += '<tr bgcolor="beige"><td>' + ffont + 'z*' + '</font></td><td colspan= ' + n + '>' + ffont + ROPT + '</font></td></tr>'
SOLUTION = t + '</table></td></tr></table>'
}

function Formulate(){
var cons = ' = '
if(LEQ == 0){cons = '&lt;='}
FORMULATION =   '<center>Problem Formulation</center><table align="center" border=1 bordercolor="darkred" bgcolor="white" cellspacing=0><tr><td bgcolor="beige"><table><tr><td><span>z* := ' + opt + ' z =</span></td><td><span> w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub> + ... + w<sub>' + n + '</sub>x<sub>' + n + '</sub></span></td></tr><tr><td><span>st.</span></td><td><span> v<sub>1</sub>x<sub>1</sub> + v<sub>2</sub>x<sub>2</sub> + ... + v<sub>' + n + '</sub>x<sub>' + n + '</sub></span></td><td><span>' + cons + V + '</span></td></tr><tr><td></td><td colspan=3 align="center"><span>x<sub>1</sub>,x<sub>2</sub>, ... ,x<sub>' + n + '</sub>'

if(problem == '01'){prob = '{0,1}'} else{prob = '{0,1,2,...}'}

FORMULATION += ' in ' + prob + '</span></td></tr></table></td></tr></table>'
}

function Parameters(){
var t="",tw="",tv="",tj=""
var ffont = '<font face="verdana,arial">'
t = '<center>Coeffficients</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="gray"><tr><td align="center">j</td>'
for(j=1;j<=n;j++){
	tj  += '<td align="center">' + ffont + j + '</font></td>'
	tw  += '<td align="right">' + ffont + w[j] + '</font></td>'
	tv  += '<td align="right">' +ffont  + v[j] + '</font></td>'}

t += tj + '</tr><tr bgcolor="lightgrey"><td>w<sub>j</sub></td>'
t += tw + '</tr><tr bgcolor="beige"><td>v<sub>j</sub></td>'
t += tv + '</tr>'

t += '<tr bgcolor="lightgrey"><td align="center">' + ffont + 'V' + '</font></td><td colspan=' + n + '>' + ffont + V + '</font></td></tr>'

t += '</table></td></tr></table>'

PARAMETERS = t
}

function Recovery(){
if(problem == 'UB'){Recovery_UB();return}
if(Method == 'Push'){Recovery_R();return}
RECOVERY = '<center>Recovery of optimal solution</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="gray" cellpadding=5><tr align="center"><td align="center">j</td><td>s<sub>j</sub></td><td>x<sub>j</sub></td></tr>' 
var ss = V
var tt = '<tr bgcolor="lightgrey"><td>1</td><td>s<sub>1</sub> = V = ' + V + '</td><td>' + XOPT[1] + '</td></tr>'
for(j=2;j<=n;j++){
if(1 == (j%2)){bgc = 'lightgrey'} else {bgc="beige"}
tt += '<tr bgcolor="' + bgc + '"><td>' + j + '</td><td>s<sub>' + j + '</sub> = s<sub>' + (j-1) + '</sub> - x<sub>' + (j-1) + ' </sub>v<sub>' + (j-1) + '</sub> = ' + ss + ' - ' + (XOPT[j]*v[j]) + ' = '  + (ss - XOPT[j-1]*v[j-1]) + '</td><td>' + XOPT[j] + '</td></tr>'
   
        ss = ss - XOPT[j]*v[j] 
	 }
	 
	 tt += '</table></td></tr></table>'
	 
	 var xopt = XOPT.toString()
	 tt += '<p>Thus, the optimal solution is  x = (' + xopt.substring(1,xopt.length) + ').<p>'
RECOVERY += tt
}



function Recovery_R(){
RECOVERY = '<center>Recovery of optimal solution</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="gray" cellpadding=5><tr align="center"><td align="center">j</td><td>s<sub>j</sub></td><td>x<sub>j</sub></td></tr>' 
var ss = SOPT
var tt = '<tr bgcolor="lightgrey"><td>' + n + '</td><td>s<sub>' + n + '</sub> = s* = ' + SOPT + '</td><td>' + XOPT[n] + '</td></tr>'
for(j=(n-1);j> 0;j--){
if(1 == (j%2)){bgc = 'lightgrey'} else {bgc="beige"}
tt += '<tr bgcolor="' + bgc + '"><td>' + j + '</td><td>s<sub>' + j + '</sub> = s<sub>' + (j+1) + '</sub> - x<sub>' + (j+1) + ' </sub>v<sub>' + (j+1) + '</sub> = ' + ss + ' - ' + (XOPT[j+1]*v[j+1]) + ' = '  + (ss - XOPT[j+1]*v[j+1]) + '</td><td>' + XOPT[j] + '</td></tr>'
   
        ss = ss - XOPT[j]*v[j] 
	 }
	 
	 tt += '</table></td></tr></table>'
	 
	 var xopt = XOPT.toString()
	 tt += '<p>Thus, the optimal solution is  x = (' + xopt.substring(1,xopt.length) + ').<p>'
RECOVERY += tt
}

function Recovery_UB(){
var COLORS = new Array("lightgrey","beige")
//if(Method == 'Push'){Recovery_UB_R();return}
var t = '<center>Recovery of optimal solution</center><table align="center" border=1 bordercolor="darkred" cellpadding=0 cellspacing=0><tr><td bgcolor="beige"><table cellspacing=0 border=1 bordercolor="gray" cellpadding=2><tr align="center"><td align="center" rowspan=2 valign="bottom">k</td><td>s<sup>(k)</sup></td><td colspan='+ n + '>x(j)</td><td rowspan=2 valign="bottom">j</td></tr>'

t += '<tr align="center"><td>s<sub>k+1</sub> = s<sub>k</sub> - v<sub>j</sub></td>'
kk = 0
ss = SOPT
var Counter = new Array()
for(j=1;j<=n;j++){
	kk += XOPT[j]
	Counter[j] = 0}
	
optx = XOPT.join(',')
optx = optx.split(',')

for(j=1;j<=n;j++){t += '<td>' + j + '</td>'} 
t += '</tr>'
jj = 0 
Counter[0] = 0
for(j=1;j<=n;j++){
	if(optx[j] == 0){continue}
		jj = j
		//Counter[j] += 1
		optx[j] = optx[j] -1
		break}

Counter[jj] += 1
t += '<tr align="center" bgcolor="lightgrey"><td>0</td><td>s<sub>0</sub> = s* = ' + SOPT + '</td>' 

for(j=1;j<=n;j++){
	t += '<td>' + Counter[j] + '</td>'
				}
t += '<td>' + jj + '</td></tr>'

if(kk > 0){

for(k = 1;k<= kk-1 ; k++){
    if(ss < vmin){break}
	bgc = COLORS[k%2]
	sss = ss - v[jj] 
	
	for(j=1;j<=n;j++){
	if(optx[j] == 0){continue}
	jk = j
	optx[j] = optx[j] - 1
	//Counter[j] += 1
	break}
	
	t += '<tr align="center" bgcolor="' + bgc + '"><td>' + k + '</td><td>s<sub>' + k + '</sub> = ' + ss + ' - ' + v[jj] + ' = ' + sss + '</td>' 
	
	 ss = ss - v[jj]
	 Counter[jk] += 1
	  jj = jk
	  
	for(j=1;j<=n;j++){
	t += '<td>' + Counter[j] + '</td>'
				}
	t += '<td>' + jk + '</td></tr>'	
		                }

bgc = COLORS[kk%2]
t += '<tr align="center" bgcolor="' + bgc +  '"><td>' + kk + '</td><td>s<sub>' + kk + '</sub> = ' + ss + ' - ' + v[jj] + ' = ' + (ss - v[jj]) + '</td>'

for(j=1;j<=n ;j++){
t += '<td>' + Counter[j] + '</td>'}
t += '<td> &nbsp; </td></tr>'
	
	
	} 
	
	 
	 t += '</table></td></tr></table>'
	 
	  xxx = XOPT.toString()
	 t += '<p>Thus, the optimal solution is  x = (' + xxx.substring(1,xxx.length) + ').<p>'
RECOVERY = t
}



function An_UB_Push(){
 tub = 'The (forward) "Push" update is as follows:\n\n Given that we are at a "live" state s in L, for each item j such that s+v(j)<= V we do:\n\n'

tub += "      Remove s from L\n      s' = s +v(j)\n      u = w(j) + g(s)\n      if(u is better than g(s')){g(s) = u; append s' to L}\n\n"

F = new Array()
LL = new Array()
F[0] = 0
LL[0] = true
if(LEQ == 0){ CC = 0} else {CC = -Infinity}
parm = 1
if(opt=='min'){CC = -CC;parm = -1}
//for(i=1;i< vmin;i++){F[i] = CC}
STATES = new Array()
STATES[0] = 0
EXPLAIN = false
SE = 1*State_Explain
tub += "\nExplaining the Push update for s = " + SE + '.'
ttt =""
Do_An_UB()
return
}


function Do_An_UB(){
if(STATES.length == 0){STATUS = 'solved'; return}
if(STATES.length == 0){return}
if(STATUS == "stopped"){return}
if(STATUS == 'pause'){return}
STATUS = 'running'
	SS = STATES[0]
	window.down.document.forms[0].stat.value='Computing at ' + SS + '.'
	STATES = STATES.slice(1)
	LL[SS] = false
	if(SS == SE){EXPLAIN = true}
	for(j=1;j<=n;j++){
		us = SS+v[j]
		ur = F[SS] + w[j]
         if(EXPLAIN){ttt += 'j = ' + j + ':\n'}
		//window.down.document.forms[0].board.value='\n\nUpdating g(' + us + ') = ' + ur + '.'
		if(us > V){if(EXPLAIN){ttt += 'this j is not feasible for the current state so there is no update.\n'} ; continue}
		if('undefined' == typeof LL[us]){F[us] = -parm*Infinity;LL[us] = false}
		if(EXPLAIN){ttt += 's\' = s + v(' + j + ') = ' + SS + ' + ' + v[j] + ' = ' + (SS+v[j]) + '\n'
		ttt += 'g(s\') = opt{g(s\'),g(s) + w(j)} = ' + opt + '{g('+ us +'),g(' + SS + ') + ' + w[j] + '}'
		ttt += '\n      = ' + opt + '{' + F[us] + ',' + F[SS] + ' + ' +  w[j] + '} = '     
		 } 
		if(ur <= parm*F[us]){if(EXPLAIN){ttt += F[us] + '\n'}; continue}
		F[us] = ur
		if(EXPLAIN){ttt += F[us] + '\n'}
		if(LL[us] == false){STATES[STATES.length] = us; LL[us] = true}
					}
 EXPLAIN = false				
if(STATES.length == 0){STATUS ='solved';Wrap_UB_An(); return}
IDT = setTimeout('Do_An_UB()',0)

}


function Wrap_UB_An(){
Board(tub + '\n' + ttt)
}

function Read_Me(){
var tt = 'Good /morning/evening !\n\n                     Read Me !            \n++++++++++++++++++++++++++++++++++++++\n\n'

tt += 'This is a front end to the Knapie Module, placed here for your convenience to give you a general impression of the module. If you really want to experiment with the module, it would be better if you use the "n" button to resize the problem. This will open a new window containing the Knapie Module.'

tt += '\n\nIf this is your first visit, you may wish to have a quick look at the "HELP" file before you try to use the module to solve a problem.'

tt += '\n\n      Enjoy your experiment.\n\n      Best wishes\n\n      Moshe'

window.down.document.forms[0].board.value = tt

}


function Write_Down(txt){
var t = '<html><head><title>knapsack</title></head><body bgcolor="white" text="darkblue"><font face="verdana,arial">'
 t += txt + '</font></body></html>'
window.down.document.clear()
window.down.document.write(t)
window.down.document.close()
}

function Open_Push(){
WINPUSH = window.open("push/index.html",'WINPUSH',"scrollbars")
WINPUSH.focus()
}
