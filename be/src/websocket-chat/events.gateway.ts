import {MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import {Server, Socket} from 'socket.io';
import {EventsService} from "./events.service";
import {query} from "express";

const config = require('dotenv').config().parsed // config variables

@WebSocketGateway(Number(config.PORT_WS), { // MUST be NUMBER primitive
    cors: {
        origin: `*`, // todo put here variable
    },
    serveClient: false,
    namespace: "chat" // name of url path to connect WS via client todo put here variable
}) // for example all this comes to "localhost:4080/chat" (config in .env file)

export class EventsGateway {
    constructor(private readonly eventsService: EventsService) {
    }
    @WebSocketServer() server: Server;

    @SubscribeMessage("ping")
    async handlePingMessagesGet(): Promise<void> {
        this.server.emit("ping", 'ping-args');
        this.server.emit("pong", 'pong-args');
    }

    @SubscribeMessage("message")
    async handleMessage(@MessageBody() data: { text: string }): Promise<void> {
        console.log(data.text)
        this.server.emit("message:bot", this.eventsService.nextPhrase());
    }

    @SubscribeMessage("messages:get")
    async handleMessagesGet(): Promise<void> {
        // get past messages
    }

    @SubscribeMessage("message:post")
    async handleMessagesPost(client: Socket, ...args: any[]): Promise<void> {
        console.log(client.request.method)
        console.log(client.data)
        this.server.emit("messages", 'messages');
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
        console.log(`client DISconnected: ${client.handshake.query.userName as string}`)
        console.log(`socketId: ${client.id}`)
        client.broadcast.emit("log", `${client} disconnected`);
    }
}