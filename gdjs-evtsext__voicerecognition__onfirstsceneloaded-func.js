
if (typeof gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded = {};

gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.userFunc0x7873d8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
function VoiceRecognition() {
    this.errorStatus = false;
    this.successStatus = false;

    this.setStatus = function (status) {
        this.status = status;
    }

    this.setError = function (error) {
        this.error = error;
    }

    this.setResultText = function (result) {
        this.result = result;
    }

    this.getResultText = function () {
        return this.result;
    }

    this.getStatus = function () {
        return this.status;
    }

    this.getError = function () {
        return this.error;
    }

    this.setLanguage = function (lang) {
        this.recognition.lang = lang;
    }

    let parent = this;

    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
    var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList
    var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

    this.recognition = new SpeechRecognition();

    this.recognition.continuous = false;
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    // This runs when the speech recognition service starts
    this.recognition.onstart = function() {
        parent.setStatus("listening, please speak...");
    };

    this.recognition.onspeechend = function() {
        parent.recognition.stop();
    }

    this.recognition.onerror = function(event) {
        parent.errorStatus = true;
        parent.setError('Error occurred in recognition: ' + event.error);
    }

    // This runs when the speech recognition service returns result
    this.recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        var confidence = event.results[0][0].confidence;

        parent.successStatus = true;
        parent.confidence = confidence;
        parent.setResultText(transcript);
    };

    // start recognition
    this.startListening = function() {
        parent.recognition.start();
        
        parent.errorStatus = false;
        parent.successStatus = false;
        parent.setStatus("listening, please speak...");
    }
}

if(gdjs._extensionVoiceRecognition == undefined) {
    gdjs._extensionVoiceRecognition = new VoiceRecognition();
}


};
gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
}

}


{


gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.userFunc0x7873d8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__VoiceRecognition__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
