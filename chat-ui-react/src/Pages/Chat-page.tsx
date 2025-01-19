import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import ChatProvider from '../Components/SimpleChatBody';
import MessageInput from '../Components/SimpleMessageInput';
import Signout from '../Components/Signout';

type ChatPageProps = {
    socket: any;
};

const ChatPage: React.FC<ChatPageProps> = ({socket}) => {
    return (
        <Container>
            <Row>
                <Col className="pt-3">
                    <Signout socket={socket} />
                </Col>
            </Row>
            <Container>
                <ChatProvider socket={socket} />
            </Container>
            <MessageInput socket={socket} />
        </Container>
    );
};

export default ChatPage;