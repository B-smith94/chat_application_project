import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";

type SignoutProps = {
    socket: Socket;
}

const Signout: React.FC<SignoutProps> = ({socket}) => {
    const navigate = useNavigate();
    const handleSignout = () => {
        sessionStorage.removeItem('userName')
        socket.emit('signout')
        navigate('/')
    }

    return (
        <Button onClick={handleSignout}><i className="bi bi-box-arrow-in-left"></i></Button>
    );
};

export default Signout;