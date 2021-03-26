var Facade = /** @class */ (function () {
    function Facade(sendMail, sendWhatsapp) {
        if (sendMail === void 0) { sendMail = null; }
        if (sendWhatsapp === void 0) { sendWhatsapp = null; }
        this.sendMail = sendMail || new SendMail();
        this.sendWhatsapp = sendWhatsapp || new SendWhatsapp();
    }
    Facade.prototype.operation = function () {
        var result = "Facade inicializa.\n";
        result += this.sendMail.send();
        result += this.sendWhatsapp.send();
        return result;
    };
    return Facade;
}());
var SendMail = /** @class */ (function () {
    function SendMail() {
    }
    SendMail.prototype.send = function () {
        return "Envio de notificación por medio de email \n";
    };
    return SendMail;
}());
var SendWhatsapp = /** @class */ (function () {
    function SendWhatsapp() {
    }
    SendWhatsapp.prototype.send = function () {
        return "Envio de notificación por medio de la api de Whatsapp \n";
    };
    return SendWhatsapp;
}());
function send(facade) {
    console.log(facade.operation());
}
function envioMailWhatsapp() {
    var sendMail = new SendMail();
    var sendWhatsapp = new SendWhatsapp();
    var facade = new Facade(sendMail, sendWhatsapp);
    send(facade);
}
