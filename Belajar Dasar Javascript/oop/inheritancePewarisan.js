function MailService(sender) {
    this.sender = sender;
}

MailService.prototype.sendMessage = function (message, receiver) {
    console.log(`${this.sender} sent ${message}, to ${receiver}`);
}

function WhatsAppService(sender) {
    MailService.call(this, sender);
}

// prototype inheritance
WhatsAppService.prototype = Object.create(MailService.prototype);
WhatsAppService.prototype.constructor = WhatsAppService;

WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
    for (const receiver of receivers){
        this.sendMessage(message, receiver);
    }
}

function EmailService(sender) {
    MailService.call(this, sender);
}

// Prototype inheritance
EmailService.prototype = Object.create(MailService.prototype);
EmailService.prototype.constructor = EmailService;

EmailService.prototype.sendDelayedMessage = function (message, receiver, delay) {
    setTimeout(() => {
        this.sendMessage(message, receiver);
    }, delay);
}

const whatsapp = new WhatsAppService('+083923810213');
const email = new EmailService('Rizky@gmail.com');
whatsapp.sendMessage('hello', '+01209031921');
whatsapp.sendBroadcastMessage('hello', ['+982938923192', '+023019230123']);
email.sendMessage('hello', 'john@gmail.com');
email.sendDelayedMessage('hi', 'john@doe.com', 5000);


console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false

