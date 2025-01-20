import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
type HomePageProps = {
    socket: Socket;
}

const HomePage: React.FC<HomePageProps> = ({socket}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault()
        let userName = e.target.username.value
        if (userName > 6) {
            alert("Username must be at least 6 characters long.")
            return;
        }
        sessionStorage.setItem('userName', userName)
        try {
           socket.emit('signin') 
           navigate('/chat')
        } catch(error) {
            alert(`An error occurred during sign-in: ${error}`)
            console.log("An error occurred:", error)
            return;
        }

    };
    return (
        <form className="home__container" onSubmit={handleSubmit}>
            <h2 className="home__header">Sign in to Open Chat</h2>
            <label htmlFor="username">Username</label>
            <input
             type="text"
             minLength={6}
             name="username"
             id="username"
             className="username__input"
             value={userName}
             onChange={(e) => setUserName(e.target.value)}
            />
            <button className="home__cta">SIGN IN</button>
        </form>
    );
}

export default HomePage;