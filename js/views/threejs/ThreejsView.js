(function(exports){
    function ThreejsView(game){
        Logger.log("ThreejsView", "init view")
        
        new views.console.Position(game.hero);
        new views.console.Map(game.map);
        
        
        exports.admin = this;
    }
    
    function $(id){
        return document.getElementById(id);
    }

    exports.views.$ = $;
    exports.views.threejs.ThreejsView = ThreejsView;
})(this)
