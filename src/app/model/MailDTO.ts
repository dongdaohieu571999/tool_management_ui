export class MailDTO {
  id : number;
  title: String;
  content: String;
  time: Date;
  status: String;
  priority: String;
  senderName: String;
  receiverName: String;

  constructor(id: number, title: String, content: String, time: Date, status: String, priority: String, senderName: String, receiverName: String){
    this.id = id;
    this.title = title;
    this.content = content;
    this.time = time;
    this.status = status;
    this.priority = priority;
    this.senderName = senderName;
    this.receiverName = receiverName;
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
    return this.receiverName;
  }
}
