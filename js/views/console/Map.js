(function(exports){
    function MapView(map){
        map.observer.register(this.onUpdate.bind(this));
        
        this.map = map;
        this.wnd = views.$("map");
        
        // TO TEST
        //this.onUpdate();
        
    }
    MapView.prototype.onUpdate = function(){
        Logger.log("console.Map", "update Map Display")
        
        var result = "map<br/>"
        for(var i = 0; i < this.map.width; i++){
            for(var j = 0; j < this.map.height; j++){
                result += this.map.get(i, j);
            }
            result += "<br/>"
        }
        this.wnd.innerHTML = result;
    }
    exports.views.console.Map = MapView;
})(this)