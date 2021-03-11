export class MailDTO {
  id : number;
  title: String;
  content: String;
  time: Date;
  status: String;
  priority: String;
  senderName: String;
  receiverNameCode: String;

  constructor(title: String, content: String, time: Date, status: String, priority: String, senderName: String, receiverNameCode: String){
    this.title = title;
    this.content = content;
    this.time = time;
    this.status = status;
    this.priority = priority;
    this.senderName = senderName;
    this.receiverNameCode = receiverNameCode;
  }

  getId() : number {
    return this.id;
  }

  getTitle(): String {
    return this.title;
  }

  getContent(): String {
    return this.content;
  }

  getTime(): Date {
    return this.time;
  }

  getStatus(): String {
    return this.status;
  }

  getPriority(): String {
    return this.priority;
  }

  getSenderId(): String {
    return this.senderName;
  }

  getReceiverId(): String {
    return this.receiverNameCode;
  }
}
