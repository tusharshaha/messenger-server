import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'http';

@WebSocketGateway()
export class ChatGateWay {
  @WebSocketServer() server: Server;
  @SubscribeMessage('message')
  handleEvent(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
