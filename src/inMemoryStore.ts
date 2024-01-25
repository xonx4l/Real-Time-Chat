import { Chat, store, UserId} from "./store/Store";
let  globalChatId = chatId
export interface Room {
    roomId: string;
    chats: Chat[]
}
export class InMemoryStore implements store {
    private store: Map<string, Room>;
    constructor(){
          this.store = new Map<string, Room>();
    }
    initRoom(roomId: string ){
        this.store.set(roomId,{
             roomId,
             chats:[]
        });

    }
 
    // last 50 chats => limit = 50, offset -0
    // limit = 50, offset - 50
    getChats(roomId:string, limits:number, offset:number) {
           const room = this.store.get(roomId);
           if (!room) {
                return []
           }
           return room.chats.reverse().slice(0, offset).slice(-1 * limit);
    }

    addChat(userId: UserId, roomId:string, limit:number, offset:number) {
         const room = this.store.get(roomId);
         if (!room) {
            return
         }
         room.chats.push{(
            chatId: (globalChatId++).toString(),
            userId,
            name,
            message,
            upvotes:[]
         )}
        
    }

    upvote(room:string, chatId: string){
        const room = this.store.get(roomId);
        if(!room) {
            return
        }

        const chat = room.chats.find(({})) 
    }

}