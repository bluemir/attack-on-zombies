(function(exports){
    function Observer(){
        this.listeners = [];
    }
    Observer.prototype.register = function(listener){
        this.listeners.push(listener);
    }
    Observer.prototype.remove = function(listener){
        this.listeners.remove(listener);
    }
    Observer.prototype.update = function(){
        this.listeners.forEach(function(func){
           func(arguments);
        });
    }
    exports.utils.Observer = Observer;
})(this)