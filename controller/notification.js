var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NotificationCreator = /** @class */ (function () {
    function NotificationCreator() {
    }
    NotificationCreator.prototype.notify = function () {
        var notification = this.factoryMethod();
        return notification.notify();
    };
    return NotificationCreator;
}());
var NotificacionActividadesCreator = /** @class */ (function (_super) {
    __extends(NotificacionActividadesCreator, _super);
    function NotificacionActividadesCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificacionActividadesCreator.prototype.factoryMethod = function () {
        return new NotificacionActividad();
    };
    return NotificacionActividadesCreator;
}(NotificationCreator));
var NotificacionTestsCreator = /** @class */ (function (_super) {
    __extends(NotificacionTestsCreator, _super);
    function NotificacionTestsCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificacionTestsCreator.prototype.factoryMethod = function () {
        return new NotificacionTest();
    };
    return NotificacionTestsCreator;
}(NotificationCreator));
var NotificacionActividad = /** @class */ (function () {
    function NotificacionActividad() {
    }
    NotificacionActividad.prototype.notify = function () {
        return "Envio de notificación de Actividades";
    };
    return NotificacionActividad;
}());
var NotificacionTest = /** @class */ (function () {
    function NotificacionTest() {
    }
    NotificacionTest.prototype.notify = function () {
        return "Envio de notificación de Tests";
    };
    return NotificacionTest;
}());
function sendNotification(notification) {
    console.log(notification.notify());
}
function sendNotificationActividad() {
    console.log("Crear notificación actividad");
    sendNotification(new NotificacionActividadesCreator());
}
function sendNotificationTest() {
    console.log("Crear notificación Test");
    sendNotification(new NotificacionTestsCreator());
}
