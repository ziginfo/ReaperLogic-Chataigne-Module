// ========================== VARS ===========================
var trNumb = ["/1/track#1","/1/track#2","/1/track#3","/1/track#4","/1/track#5","/1/track#6","/1/track#7","/1/track#8"] ;
var numb;
var selTrack = {
	"trackno"	:	["TrackNo", "s", "/3/track#", ""],
	"name"	:	["Label", "s", "/3/trackname", ""],
	"faderlev" : ["Level", "s","/3/trkvolval", ""],
	"fadervol" : ["Volume", "f","/3/volume", ""],
	"pan" : ["Pan", "s","/3/trkpanval", ""],
	"mute" : ["Mute", "b","/3/mute", ""],
	"solo" : ["Solo", "b","/3/solo", ""],
	"arm" : ["R Arm", "b","/3/recenable", ""],
	
	"master" : ["Master Level", "s","/1/masterlevel", ""],
	
	"sendname1" : ["SendName1", "s","/3/sendname1", ""],
	"sendlevel1" : ["SendLevel1", "f","/3/sendlevel1", ""],
	"sendval1" : ["SendVal1", "s","/3/sendval1", ""],
	"sendname2" : ["SendName2", "s","/3/sendname2", ""],
	"sendlevel2" : ["SendLevel2", "f","/3/sendlevel2", ""],
	"sendval2" : ["SendVal2", "s","/3/sendval2", ""],
	"sendname3" : ["SendName3", "s","/3/sendname3", ""],
	"sendlevel3" : ["SendLevel3", "f","/3/sendlevel3", ""],
	"sendval3" : ["SendVal3", "s","/3/sendval3", ""],
	"sendname4" : ["SendName4", "s","/3/sendname4", ""],
	"sendlevel4" : ["SendLevel4", "f","/3/sendlevel4", ""],
	"sendval4" : ["SendVal4", "s","/3/sendval4", ""],
	"sendname5" : ["SendName5", "s","/3/sendname5", ""],
	"sendlevel5" : ["SendLevel5", "f","/3/sendlevel5", ""],
	"sendval5" : ["SendVal5", "s","/3/sendval5", ""],
	
	"insert1" : ["Insert1", "s","/3/insertname1", ""],
	"insert2" : ["Insert2", "s","/3/insertname2", ""],
	"insert3" : ["Insert3", "s","/3/insertname3", ""],
	"insert4" : ["Insert4", "s","/3/insertname4", ""],
	"insert5" : ["Insert5", "s","/3/insertname5", ""],
	"insert6" : ["Insert6", "s","/3/insertname6", ""],
	"insert7" : ["Insert7", "s","/3/insertname7", ""],
	"insert8" : ["Insert8", "s","/3/insertname8", ""] };
	
var selTrackFull = {
	"trackno"	:	["TrackNo", "s", "/4/track#", ""],
	"name"	:	["Label", "s", "/4/trackname", ""],
	"fader" : ["Volume", "s","/3/trkvolval", ""],
	"pan" : ["Pan", "s","/3/trkpanval", ""],
	"mute" : ["Mute", "b","/3/mute", ""],
	"solo" : ["Solo", "b","/3/solo", ""],
	"arm" : ["R Arm", "b","/3/recenable", ""],
	
	"hpf.on" : ["LoCut on", "b","/4/eqbandbyp/1/1", ""],	
	"hpf.freq" : ["LoCut Freq", "s","/4/hpffrqval", ""],
	"hpf.slope" : ["LoCut Slope", "s","/4/hpfslpval" , ""],

	"loshelf.on" : ["LoShelf on", "b","/4/eqbandbyp/1/2" , ""],
	"loshelf.gain" : ["LoShelf Gain", "s", "/4/loslvgainval", ""],
	"loshelf.freq" : ["LoShelf Freq", "s", "/4/loslvfrqval", ""],	
	"loshelf.q" : ["LoShelf Q", "s", "/4/loslvqval", ""],

	"peak1.on" : ["Peak1 on", "b","/4/eqbandbyp/1/3" , ""],
	"peak1.gain" : ["Peak1 Gain", "s", "/4/logainval", ""],
	"peak1.freq" : ["Peak1 Freq", "s", "/4/lofrqval", ""],	
	"peak1.q" : ["Peak1 Q", "s", "/4/loqval", ""],

	"peak2.on" : ["Peak2 on", "b","/4/eqbandbyp/1/4" , ""],
	"peak2.gain" : ["Peak2 Gain", "s", "/4/lomidgainval", ""],
	"peak2.freq" : ["Peak2 Freq", "s","/4/lomidfrqval", ""],
	"peak2.q" : ["Peak2 Q", "s", "/4/lomidqval", ""],

	"peak3.on" : ["Peak3 on", "b","/4/eqbandbyp/1/5" , ""],
	"peak3.gain" : ["Peak3 Gain", "s", "/4/himidgainval", ""],
	"peak3.freq" : ["Peak3 Freq", "s", "/4/himidfrqval", ""],
	"peak3.q" : ["Peak3 Q", "s", "/4/himidqval", ""],

	"peak4.on" : ["Peak4 on", "b","/4/eqbandbyp/1/6" , ""],
	"peak4.gain" : ["Peak4 Gain", "s", "/4/higainval", ""],
	"peak4.freq" : ["Peak4 Freq", "s", "/4/hifrqval", ""],
	"peak4.q" : ["Peak4 Q", "s", "/4/hiqval", ""],

	"hishelf.on" : ["HiShelf on", "b","/4/eqbandbyp/1/7" , ""],
	"hishelf.gain" : ["HiShelf Gain", "s", "/4/hislvgainval", ""],
	"hishelf.freq" : ["HiShelf Freq", "s", "/4/hislvfrqval", ""],
	"hishelf.q" : ["HiShelf Q", "s", "/4/hislvqval", ""],
	
	"lpf.on" : ["HiCut on", "b","/4/eqbandbyp/1/8" , ""],
	"lpf.freq" : ["HiCut Freq", "s","/4/lpffrqval", ""],
	"lpf.slope" : ["HiCut Slope", "s","/4/lpfslpval", ""],
	
	"eq.master.gain" : ["EQ Master Gain", "s", "/4/eqmstgainval", ""],
	
	"insert1" : ["Insert1", "s","/3/insertname1", ""],
	"insert2" : ["Insert2", "s","/3/insertname2", ""],
	"insert3" : ["Insert3", "s","/3/insertname3", ""],
	"insert4" : ["Insert4", "s","/3/insertname4", ""],
	"insert5" : ["Insert5", "s","/3/insertname5", ""],
	"insert6" : ["Insert6", "s","/3/insertname6", ""],
	"insert7" : ["Insert7", "s","/3/insertname7", ""],
	"insert8" : ["Insert8", "s","/3/insertname8", ""] };


//====================================================================
//						INITIAL FUNCTIONS 
//====================================================================

function init() {
 // script.log("Custom module init");
 


//===================== TRACK No CONTAINER ===================		
	trackNo=local.values.addContainer("TrackNo");
		trackNo.setCollapsed(true);
		for (var n = 1; n < 9; n++) {
			var trn = trackNo.addStringParameter("Track"+n, "", ""); 
			trn.setAttribute("readonly" ,true);}
			 
//===================== NAMES CONTAINER ===================		
	names=local.values.addContainer("Names");
		names.setCollapsed(true);
		names.addStringParameter("Test", "", "");
		names.addStringParameter("First BankTrack No", "", "");	
		names.addTrigger("Bank back", "Get Names from the Console" , false);		
		names.addTrigger("Bank next", "Get Names from the Console" , false);
		for (var n = 1; n < 9; n++) {
			names.addStringParameter("Track"+n, "", ""); }
			
//===================== LEVELS CONTAINER ===================		
	levels=local.values.addContainer("Levels");
		levels.setCollapsed(true);
		levels.addStringParameter("First BankTrack No", "", "");	
		levels.addTrigger("Bank back", "Get Levels from the Console" , false);		
		levels.addTrigger("Bank next", "Get Levels from the Console" , false);
		for (var n = 1; n < 9; n++) {
			levels.addFloatParameter("Track"+n, "", 0, 0, 1); }
			
//==========================SELECTED TRACK FULL ============================	
	selchan = local.values.addContainer("SelectedTrack");
		selchan.setCollapsed(true);
		selchan.addTrigger("Reset all", "" , false);
		selchan.addTrigger("Bank back", "Get Names from the Console" , false);		
		selchan.addTrigger("Bank next", "Get Names from the Console" , false);
		selchan.addStringParameter("First BankTrack No", "", "");
		selchan.addIntParameter("Relative Track No","Select the Channel Number",1,1,8) ;
		selchan.addTrigger("Click to Sync", "" , false);
		var champs = util.getObjectProperties(selTrackFull);
		for (var n = 0; n < champs.length; n++) {
			if (selTrackFull[champs[n]][1] == "f") {
			selchan.addFloatParameter(selTrackFull[champs[n]][0], "", 0); }
			else if (selTrackFull[champs[n]][1] == "b") {
			selchan.addBoolParameter(selTrackFull[champs[n]][0], "", false); }
			else if (selTrackFull[champs[n]][1] == "in") {
			selchan.addIntParameter(selTrackFull[champs[n]][0], "", 0); } 
			else if (selTrackFull[champs[n]][1] == "s") {
			selchan.addStringParameter(selTrackFull[champs[n]][0], "", ""); } }
			selchan.addTrigger("Sync Inserts", "" , false);	
			
	//========================== TRACK PARAMETERS PAGE 3 ============================	
	seltr = local.values.addContainer("TrackParams");
		seltr.setCollapsed(true);
		seltr.addTrigger("Bank back", "Get Names from the Console" , false);		
		seltr.addTrigger("Bank next", "Get Names from the Console" , false);
		seltr.addStringParameter("First BankTrack No", "", "");
		seltr.addTrigger("Track back", "Get Names from the Console" , false);		
		seltr.addTrigger("Track next", "Get Names from the Console" , false);
		
//		seltr.addIntParameter("Relative Track No","Select the Channel Number",1,1,8) ;
//		seltr.addTrigger("Sync Params", "" , false);
		
		var champs = util.getObjectProperties(selTrack);
		for (var n = 0; n < champs.length; n++) {
			if (selTrack[champs[n]][1] == "f") {
			seltr.addFloatParameter(selTrack[champs[n]][0], "", 0 , 0, 1); }
			else if (selTrack[champs[n]][1] == "b") {
			seltr.addBoolParameter(selTrack[champs[n]][0], "", false); }
			else if (selTrack[champs[n]][1] == "in") {
			seltr.addIntParameter(selTrack[champs[n]][0], "", 0); } 
			else if (selTrack[champs[n]][1] == "s") {
			seltr.addStringParameter(selTrack[champs[n]][0], "", ""); } }
			
}


function moduleParameterChanged(param) {
  script.log(param.name + " parameter changed, new value: " + param.get());
}

//============================================================
//							MODULE VALUE CHANGES
//============================================================

function moduleValueChanged(value) {
  
  if (value.name == "bankBack"){
  local.send("/1/bank-"); 
  local.send("/1");}
  if (value.name == "bankNext"){
  local.send("/1");
  local.send("/1/bank+"); }
  
  if (value.name == "clickToSync"){
  var no=local.values.selectedTrack.relativeTrackNo.get(); 
  local.send("/1/select/1/"+no);
  local.send("/3");
  local.send("/4");    }
  
  if (value.name == "trackBack"){
  local.send("/3");
  local.send("/3/track-");  }
   if (value.name == "trackNext"){
   local.send("/3");  
  local.send("/3/track+"); }
  
  if (value.name == "syncInserts"){
  local.send("/3"); }
  if (value.name == "resetAll"){  
  var champs = util.getObjectProperties(selTrackFull);
	for (var n = 0; n < champs.length; n++) {
	var child = selTrackFull[champs[n]][0].split(" ").join("");	
	local.values.selectedTrack.getChild(child).set("");}   
	
  }
  
  
}


//============================================================
//							OSC EVENTS
//============================================================
function oscEvent(address, args) { 

//=============== TRACK NUMBER ARRAY ==================
	numb = [] ;
	for (var n = 1; n < 9; n++) {
		var addr = trNumb[n-1];	
		if (address == addr){
		numb[n-1] = args[0];	
		local.values.names.test.set(numb[0]);  } }


//=============== TRACKNUMBER ==================
	for (var n = 1; n < 9; n++) {
		var addr = trNumb[n-1];	
		if (address == addr){
		var child = "Track"+n ;
		local.values.trackNo.getChild(child).set(numb[n-1]);  } }

//=============== TRACKNAMES ==================
//	if (address == "/1/track#1"){
		local.values.names.firstBankTrackNo.set(numb[0]); 
//		}
	for (var n = 1; n < 9; n++) {
		var tNumber = numb[n-1] ;
		var addr = "/1/trackname"+n;	
		if (address == addr){
		var child = "Track"+n ;
		var fullname = local.values.trackNo.getChild(child).get()+" - "+args[0] ;
		local.values.names.getChild(child).set(fullname);  } }

//=============== TRACKLEVELS ==================
	if (address == "/1/track#1"){
		local.values.levels.firstBankTrackNo.set(args[0]); }
	for (var n = 1; n < 9; n++) {
		var addr = "/1/volume"+n;	
		if (address == addr){
		var child = "Track"+n ;
		local.values.levels.getChild(child).set(args[0]); } }

//====================SELECTED CHANNEL ================
	var first = local.values.names.firstBankTrackNo.get();
	local.values.selectedTrack.firstBankTrackNo.set(first);
	var champs = util.getObjectProperties(selTrackFull);
	for (var n = 0; n < champs.length; n++) {
	var addr = selTrackFull[champs[n]][2];
	var child = selTrackFull[champs[n]][0].split(" ").join("");
	var val = args[0];
	if (address == addr){
	local.values.selectedTrack.getChild(child).set(val);}   
	}
	
//====================TRACK PARAMETERS ================
	var first = local.values.names.firstBankTrackNo.get();
	local.values.trackParams.firstBankTrackNo.set(first);
	var champs = util.getObjectProperties(selTrack);
	for (var n = 0; n < champs.length; n++) {
	var addr = selTrack[champs[n]][2];
	var child = selTrack[champs[n]][0].split(" ").join("");
	var val = args[0];
	if (address == addr){
	local.values.trackParams.getChild(child).set(val);}   
	}

}

// This is the callback function for the "Custom command" command
function customCmd(val) {
  script.log("Custom command called with value " + val);
  local.parameters.moduleParam.set(val);
}

// Generic Functions

function master_volume(val)
{
	local.send("/1/mastervolume", val);
}

function volume(no, val)
{
	local.send("/1/volume"+no, val);
}

function mute(no)
{
	local.send("/1/mute/1/"+no);
}

function solo(no, val)
{
	local.send("/1/solo/1/"+no, val);
}

function select(no, val)
{
	local.send("/1/select/1/"+no, val);
}

function solo_reset()
{
	local.send("/1/soloreset");
}

function play()
{
	local.send("/1/play");
}

function stop()
{
	local.send("/1/stop");
}

function cycle()
{
	local.send("/1/cycle");
}

function rec()
{
	local.send("/1/rec", 1.0);
}

function click()
{
	local.send("/1/click", 1.0);
}

function rwind()
{
	local.send("/1/rewind", 1.0);
}

function forward()
{
	local.send("/1/forward", 1.0);
}

function bank_back()
{
	local.send("/1/bank-");
}

function bank_next()
{
	local.send("/1/bank+");
}

function track_back()
{
	local.send("/4/track-");
}

function track_next()
{
	local.send("/4/track+");
}


/* next functions :
/3/mInsertEdit/12/1
/3/insertbypass/12/1
*/

