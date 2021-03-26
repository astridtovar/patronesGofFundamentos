class Facade {
  protected sendMail: SendMail;

  protected sendWhatsapp: SendWhatsapp;

  constructor(sendMail: SendMail = null, sendWhatsapp: SendWhatsapp = null) {
    this.sendMail = sendMail || new SendMail();
    this.sendWhatsapp = sendWhatsapp || new SendWhatsapp();
  }

  public operation(): string {
    let result = "Facade inicializa.\n";
    result += this.sendMail.send();
    result += this.sendWhatsapp.send();

    return result;
  }
}

class SendMail {
  public send(): string {
    return "Envio de notificación por medio de email \n";
  }
}

class SendWhatsapp {
  public send(): string {
    return "Envio de notificación por medio de la api de Whatsapp \n";
  }
}

function send(facade: Facade) {
  console.log(facade.operation());
}

function envioMailWhatsapp() {
  const sendMail = new SendMail();
  const sendWhatsapp = new SendWhatsapp();
  const facade = new Facade(sendMail, sendWhatsapp);
  send(facade);
}
