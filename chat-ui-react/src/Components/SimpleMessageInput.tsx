import { useState } from "react";
import { Container, Form } from "react-bootstrap";

type MessageInputProps = {
    socket: any;
};

const MessageInput: React.FC<MessageInputProps> = ({ socket }) => {

    const [messageText, setMessageText] = useState('');

    const sendMessage = () => {
        let userId = sessionStorage.getItem('userName');
        socket.emit("message", {userId, text: messageText})
        setMessageText('');
    };

    const handleEnterKey = (e: any) => {
        if (e.key === "Enter") {
            e.preventDefault();
            sendMessage();
            setMessageText("");
        }
    };

    return (
        <Container>
            <Form>
                <Form.Label style={{ font: 'aria', color: 'lightgrey' }}>
                    Type your Message
                </Form.Label>
                <Form.Control
                 type="text"
                 id="text"
                 value={messageText}
                 onChange={(e) => setMessageText(e.target.value)}
                 onKeyDown={(e) => handleEnterKey(e)}
                 autoComplete="off"
                ></Form.Control>
            </Form>
        </Container>
    )
}

export default MessageInput