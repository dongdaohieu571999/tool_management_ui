export class Mail {
  id : number;
  title: String;
  content: String;
  time: Date;
  status: String;
  priority: String;
  senderId: number;
  receiverId: number;

  constructor(id: number, title: String, content: String, time: Date, status: String, priority: String, senderId: number, receiverId: number){
    this.id = id;
    this.title = title;
    this.content = content;
    this.time = time;
    this.status = status;
    this.priority = priority;
    this.senderId = senderId;
    this.receiverId = receiverId;
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

  getSenderId(): number {
    return this.senderId;
  }

  getReceiverId(): number {
    return this.receiverId;
  }
}
