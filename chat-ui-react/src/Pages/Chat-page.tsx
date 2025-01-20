import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import ChatProvider from '../Components/SimpleChatBody';
import MessageInput from '../Components/SimpleMessageInput';
import Signout from '../Components/Signout';
import { Socket } from "socket.io-client";

type ChatPageProps = {
    socket: Socket;
};

const ChatPage: React.FC<ChatPageProps> = ({socket}) => {
    const [filter, setFilter] = useState<string>('')
    return (
        <Container>
            <Row>
                <Col className="pt-3">
                    <Signout socket={socket} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <input
                     type="text"
                     placeholder="Filter by username"
                     value={filter}
                     className="filter__input"
                     onChange={(e) => setFilter(e.target.value)}
                    />
                </Col>
            </Row>
            <Container>
                <ChatProvider socket={socket} filter={filter} />
            </Container>
            <MessageInput socket={socket} />
        </Container>
    );
};

export default ChatPage;