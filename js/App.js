(function(exports){
    var App = {};
    
    App = {};
    App.start = function(){
        this.game = new models.Game();
        this.view = new views.threejs.ThreejsView(this.game);
        this.game.map.build();
    }
    exports.App = App;
})(this)
