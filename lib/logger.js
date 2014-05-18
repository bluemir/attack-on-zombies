var Logger = {};
Logger.error = function(module, error){
    if(error instanceof Error){
        console.error("[ERROR]", module, "-", error.toString());
    } else if((typeof error) == "string"){
        console.error(module, new Error(error));
    } else {
        console.error(module, error);
    }
}
Logger.log = function(module, message){
    console.log("[LOG]", module,"-", message);
}
Logger.debug = function(module, obj){
    console.debug("[DEBUG]", module, "-", obj);
}

function ErrorType(type){
    type.prototype = new Error();
    type.prototype.construct = type;
    
    delete type.prototype.stack;
    delete type.prototype.message;
    
    type.prototype.name = type.name;    
    
    type.prototype.super = function(message){
        this.message = message;
    }
}
