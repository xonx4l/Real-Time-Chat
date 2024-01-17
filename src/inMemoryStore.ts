import { Chat,store } from "./store/Store";
export interface Room {
    roomId: string;
    chats: Chat[]
}
export class InMemoryStore implements store {
    constructor(){
          this.store = new Map<string, Room>();
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