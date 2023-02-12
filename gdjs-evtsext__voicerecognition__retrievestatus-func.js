
if (typeof gdjs.evtsExt__VoiceRecognition__RetrieveStatus !== "undefined") {
  gdjs.evtsExt__VoiceRecognition__RetrieveStatus.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VoiceRecognition__RetrieveStatus = {};

gdjs.evtsExt__VoiceRecognition__RetrieveStatus.conditionTrue_0 = {val:false};
gdjs.evtsExt__VoiceRecognition__RetrieveStatus.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__VoiceRecognition__RetrieveStatus.userFunc0x786738 = function(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = gdjs._extensionVoiceRecognition.getStatus();
};
gdjs.evtsExt__VoiceRecognition__RetrieveStatus.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


{
}

}


{


gdjs.evtsExt__VoiceRecognition__RetrieveStatus.userFunc0x786738(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VoiceRecognition__RetrieveStatus.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__VoiceRecognition__RetrieveStatus.eventsList0(runtimeScene, eventsFunctionContext);

return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__VoiceRecognition__RetrieveStatus.registeredGdjsCallbacks = [];