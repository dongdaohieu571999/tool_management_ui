export class Attachment{
    id:number;
    url:String;
    id_attachment:number;
    name:String;

    constructor(url:string,id_attachment:number,name:String){
        this.url = url;
        this.id_attachment = id_attachment;
        this.name = name;
    }
}