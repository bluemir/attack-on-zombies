(function(exports){
    function ConsoleView(game){
        Logger.log("ConsoleView", "init console window")
        
        new views.console.Position(game.hero);
        new views.console.Map(game.map);
        
        
        exports.admin = this;
    }
    
    function $(id){
        return document.getElementById(id);
    }

    exports.views.$ = $;
    exports.views.console.ConsoleView = ConsoleView;
})(this)