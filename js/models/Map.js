(function(exports){
    var MAP_FEATURE = {
        SPACE : 0, 
        WALL : 1
    }
    function Map(){
        this.observer = new utils.Observer();
        
        this.width = 50;
        this.height = 50;
        
        this._data = new Int8Array(this.width * this.height);
    }
    Map.prototype.build = function(){
        //make first Room
        
        this.observer.update();
    }
    Map.prototype.get = function(x, y){
        return this._data[x * this.width + y];
    }
    Map.prototype.view = function(x, y){
        //TODO apply sight.
        return this._data[x * this.width + y];
    }
    Map.prototype._makeRoom = function(){
        var roomSize = getRoomSize(3, 10)
    }
    function standardDistributeRamdom(level){
        var sum = 0;
        for(var i = 0; i < level; i++){
            sum += Math.random();
        }
        return sum/level;
    }
    function getRoomSize(min, max){
        return {
            width : parseInt(min + (max - min) * standardDistributeRamdom(2)),
            height : parseInt(min + (max - min) * standardDistributeRamdom(2))
        }
        
    }
    exports.models.Map = Map;
    exports.models.Map.FEATURE = MAP_FEATURE;
})(this)