interface NotificationModel {
  notify(): string;
}

abstract class NotificationCreator {
  public abstract factoryMethod(): NotificationModel;

  public notify(): string {
    const notification = this.factoryMethod();
    return notification.notify();
  }
}

class NotificacionActividadesCreator extends NotificationCreator {
  public factoryMethod(): NotificationModel {
    return new NotificacionActividad();
  }
}

class NotificacionTestsCreator extends NotificationCreator {
  public factoryMethod(): NotificationModel {
    return new NotificacionTest();
  }
}

class NotificacionActividad implements NotificationModel {
  public notify(): string {
    return "Envio de notificación de Actividades";
  }
}

class NotificacionTest implements NotificationModel {
  public notify(): string {
    return "Envio de notificación de Tests";
  }
}

function sendNotification(notification: NotificationCreator) {
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
