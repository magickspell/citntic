import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';

const config = require('dotenv').config().parsed // config variables

@WebSocketGateway(Number(config.PORT_WS), { // MUST be NUMBER primitive
    cors: {
        origin: `*`, // todo put here variable
    },
    serveClient: false,
    namespace: "chat" // name of url path to connect WS via client todo put here variable
}) // for example all this comes to "localhost:4080/chat" (config in .env file)

export class EventsGateway {
    @WebSocketServer() server: Server;

    @SubscribeMessage("ping")
    async handlePingMessagesGet(): Promise<void> {
        console.log('ping come')
        this.server.emit("ping", 'ping-args');
        this.server.emit("pong", 'pong-args');
    }

    @SubscribeMessage("message")
    async handleMessage(): Promise<void> {
        console.log('message come')
        this.server.emit("message", 'message-args');
    }

    @SubscribeMessage("messages:get")
    async handleMessagesGet(): Promise<void> {
        console.log('message:get come')
        this.server.emit("messages", 'messages');
    }

    @SubscribeMessage("messages:post")
    async handleMessagesPost(): Promise<void> {
        console.log('message:post come')
        //this.server.emit("message:post");
        this.server.emit("messages", 'messages');
    }

    @SubscribeMessage('events')
    async identity(@MessageBody() data: string): Promise<string> {
        console.log('events come')
        return data;
    }

    afterInit(server: Server) {
        console.log('ws server started')
    }

    handleConnection(client: Socket, ...args: any[]) {
        // обратите внимание на структуру объекта `handshake`
        const userName = client.handshake.query.userName as string;
        const socketId = client.id;
        console.log(`client connected: ${userName}`)
        console.log(`socketId: ${socketId}`)
        // передаем информацию всем клиентам, кроме текущего
        client.broadcast.emit("log", `${userName} connected`);
    }

    handleDisconnect(client: Socket) {
        console.log(`client connected: ${client.handshake.query.userName as string}`)
        console.log(`socketId: ${client.id}`)
        client.broadcast.emit("log", `${client} disconnected`);
    }
}