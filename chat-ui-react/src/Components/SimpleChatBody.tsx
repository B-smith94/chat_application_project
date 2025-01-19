import { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

type ChatProviderProps = {
    socket: any;
}

type Message = {
    text: string;
    userId: string;
}

const ChatProvider: React.FC<ChatProviderProps> = ({ socket }) => {
    const [messages, setMessages] = useState([] as any);
    const userID = sessionStorage.getItem('userName');

    useEffect(() => {
        socket.on('message', (message: Message) => {
            setMessages([...messages, message]);
        });
    }, [socket, messages, userID]);

    return (
        <Container
         style={{
            marginTop: '40px',
            background: 'lightblue',
            padding: '20px',
            borderRadius: '10px',
         }}
        >
            <h2>Chat Room</h2>
            <p>Logged in as: {userID}</p>
            {messages.map((message: Message, index: any) => {
                const currentdate = new Date();
                return (
                <Card key={index} className="mb-2">
                    <Card.Body className="p-0">
                        <Card.Text style={{
                         color: message.userId === userID ? 'blue' : 'green',
                         float: message.userId === userID ? 'left' : 'right'}}>
                            {message.userId} - {message.text}
                         </Card.Text>
                         <Card.Text style={{ float: message.userId === userID ? 'right' : 'left'}}>Posted at {currentdate.toLocaleString([], {
                            hour: "2-digit",
                            minute: "2-digit"
                         })}</Card.Text>
                    </Card.Body>
                </Card>
            )})}
        </Container>
    );
};

export default ChatProvider