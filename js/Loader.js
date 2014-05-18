(function(exports){
    var Loader = {};
    
    var moduleList = [
        "/lib/three.js/build/three.js",
        "/js/App.js",
        "/js/models/Game.js",
        "/js/models/Character.js",
        "/js/models/Map.js",
        "/js/views/console/ConsoleView.js",
        "/js/views/console/Position.js",
        "/js/views/console/Map.js",
		"/js/views/threejs/ThreejsView.js",
        "/js/utils/Observer.js"
    ]
    //pakage
    exports.models = {};
    exports.views = {
        console : {},
		threejs : {}
    };
    exports.utils ={};
    
    Loader.startLoad = function(){
        //get core module list
        async.each(moduleList, loadModule, function(err){
            if(err) return Logger.error("Loader", err);
            Logger.log("Loader", "load complete!");
            
            //short cut
            exports.Vector2 = THREE.Vector2;
            exports.Vector3 = THREE.Vector3;
            
            Logger.log("Loader", "starting App...")
            App.start();
        })
    }
    
    function loadModule(modulePath, callback){
        Logger.log("Loader", "loading " + modulePath)
        
        var e = document.createElement("script");
        e.setAttribute("defer", "defer");
        e.setAttribute("async", "async");
        e.setAttribute("src", modulePath);
        e,addEventListener("load", onLoad);
        e.addEventListener("error", onError);

        document.getElementById("scripts").appendChild(e);
        
        var fError = false;
        function onLoad(){
            if(fError) return;
            Logger.log("Loader", modulePath + " loaded!")
            callback(null);
        }
        function onError(){
            fError = true;
            e.removeEventListener("load", onLoad);
            callback(new ModuleLoadError(modulePath));
        }
    }
    
    ErrorType(ModuleLoadError);
    function ModuleLoadError(modulePath){
        this.super("fail to load " + modulePath);
    }
    
    exports.Loader = Loader;
})(this);
