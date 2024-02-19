import { io } from "socket.io-client";


let socket;
if (!socket) socket = io("http://localhost:8000");

export const getSocket = () => {
    if (socket) return socket
    socket = io("http://localhost:8000");
    return socket;
}



