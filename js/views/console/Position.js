(function(exports){
    function Position(hero){
        this.wnd = views.$("position");
        this.hero = hero;
        
        Logger.log("console.Position", "register change event");
        hero.observer.register(this.onChange.bind(this));
        
        this.onChange();
    }
    Position.prototype.onChange = function(){
        var pos = this.hero.position;
        this.wnd.innerHTML = "position : ["+pos.x+","+pos.y+","+pos.z+"]";
    }
    exports.views.console.Position = Position;
})(this)