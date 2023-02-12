gdjs.MainCode = {};
gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1= [];
gdjs.MainCode.GDVoiceRecognitionStatusTextObjects2= [];
gdjs.MainCode.GDInstructionObjects1= [];
gdjs.MainCode.GDInstructionObjects2= [];
gdjs.MainCode.GDStartButtonObjects1= [];
gdjs.MainCode.GDStartButtonObjects2= [];

gdjs.MainCode.conditionTrue_0 = {val:false};
gdjs.MainCode.condition0IsTrue_0 = {val:false};
gdjs.MainCode.condition1IsTrue_0 = {val:false};
gdjs.MainCode.condition2IsTrue_0 = {val:false};


gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.MainCode.GDStartButtonObjects1});
gdjs.MainCode.eventsList0 = function(runtimeScene) {

{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VoiceRecognitionStatusText"), gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1);
{gdjs.evtsExt__VoiceRecognition__StartListening.func(runtimeScene, "en-US (English)", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrieveStatus.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.MainCode.GDStartButtonObjects1);

gdjs.MainCode.condition0IsTrue_0.val = false;
gdjs.MainCode.condition1IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MainCode.mapOfGDgdjs_46MainCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MainCode.condition0IsTrue_0.val ) {
{
gdjs.MainCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MainCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VoiceRecognitionStatusText"), gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1);
{gdjs.evtsExt__VoiceRecognition__StartListening.func(runtimeScene, "en-US (English)", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrieveStatus.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__VoiceRecognition__OnError.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VoiceRecognitionStatusText"), gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrieveError.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.MainCode.condition0IsTrue_0.val = false;
{
gdjs.MainCode.condition0IsTrue_0.val = gdjs.evtsExt__VoiceRecognition__OnSuccess.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.MainCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("VoiceRecognitionStatusText"), gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1);
{for(var i = 0, len = gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1.length ;i < len;++i) {
    gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1[i].setString(gdjs.evtsExt__VoiceRecognition__RetrievetResultText.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


};

gdjs.MainCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainCode.GDVoiceRecognitionStatusTextObjects1.length = 0;
gdjs.MainCode.GDVoiceRecognitionStatusTextObjects2.length = 0;
gdjs.MainCode.GDInstructionObjects1.length = 0;
gdjs.MainCode.GDInstructionObjects2.length = 0;
gdjs.MainCode.GDStartButtonObjects1.length = 0;
gdjs.MainCode.GDStartButtonObjects2.length = 0;

gdjs.MainCode.eventsList0(runtimeScene);

return;

}

gdjs['MainCode'] = gdjs.MainCode;
