import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ChatFakeData } from '@fake-db/chat.data';

export class FakeDbService implements InMemoryDbService {
  createDb(): any {
    return {
      // Chat
      'chat-profileUser': ChatFakeData.profileUser,
      'chat-contacts': ChatFakeData.contacts,
      'chat-chats': ChatFakeData.chats,
    };
  }
}
