import { Chat, store, UserId } from "./store/Store";

export interface Room {
  roomId: string;
  chats: Chat[];
}

export class InMemoryStore implements store {
  private store: Map<string, Room>;

  constructor() {
    this.store = new Map<string, Room>();
  }

  initRoom(roomId: string) {
    this.store.set(roomId, {
      roomId,
      chats: [],
    });
  }

  getChats(roomId: string, limits: number, offset: number) {
    const room = this.store.get(roomId);

    if (!room) {
      return [];
    }

    return room.chats.slice(-offset).slice(-limits);
  }

  addChat(userId: UserId, name: ,roomId: string) {
    const room = this.store.get(roomId);

    if (!room) {
      return;
    }

    room.chats.push({
      chatId: userId,
      userId,
      name: "",
      message: "",
      upvote: [],
    });
  }

  upvote(roomId: string, chatId: string) {
    const room = this.store.get(roomId);

    if (!room) {
      return;
    }

    const chat = room.chats.find((chat) => chat.chatId === chatId);

    if (chat) {
      chat.upvote.push(chatId);
    }
  }
}
