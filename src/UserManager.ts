
interface User {
    name: string;
    id: string;
}

interface Room {
    users:User[]
}


export class UserManager {
    private users: Map<string , Room>;
    constructor() {
        this.users = new Map<string, Room>()

    }

    addUser(name: string, userId: string, roomId:string, socket: WebSocket) {

    }

    removeUser(roomId: string, userId:string) {
        
    }
    } 

