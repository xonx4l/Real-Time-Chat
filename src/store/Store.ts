
type UserId = string;

interface chat {
    userId: string;
    name: string;
    message:string;
    upvotes: string[];
}

export class store{
    constructor(){

    }
    initRoom(){

    }

    getChats(room:string, limits:number, offset:number) {

    }

    addChat(room:string, limit:number, offset:number) {

    }

    upvote(room:string, chatId: string){

    }

}