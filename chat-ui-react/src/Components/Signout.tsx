import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

type SignoutProps = {
    socket: any;
    children?: React.ReactNode;
}

const Signout: React.FC<SignoutProps> = ({socket, children}) => {
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