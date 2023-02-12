
if (typeof gdjs.evtsExt__VoiceRecognition__StartListening !== "undefined") {
  gdjs.evtsExt__VoiceRecognition__StartListening.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VoiceRecognition__StartListening = {};

gdjs.evtsExt__VoiceRecognition__StartListening.conditionTrue_0 = {val:false};
gdjs.evtsExt__VoiceRecognition__StartListening.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__VoiceRecognition__StartListening.userFunc0x77bfb0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
const Language = eventsFunctionContext.getArgument("language");

if(Language.trim() != "") {
    gdjs._extensionVoiceRecognition.setLanguage(Language);
}

gdjs._extensionVoiceRecognition.startListening();
};
gdjs.evtsExt__VoiceRecognition__StartListening.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


gdjs.evtsExt__VoiceRecognition__StartListening.userFunc0x77bfb0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VoiceRecognition__StartListening.func = function(runtimeScene, language, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "language") return language;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__VoiceRecognition__StartListening.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VoiceRecognition__StartListening.registeredGdjsCallbacks = [];