var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.connectDB = function () {
        return "DB connected!";
    };
    return Singleton;
}());
function connect() {
    var s1 = Singleton.getInstance();
    console.log(s1.connectDB());
}
