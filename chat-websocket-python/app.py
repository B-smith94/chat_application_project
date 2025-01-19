from web_socket_server import WebSocketServer, socketio, app

app = WebSocketServer().create_app()

@socketio.on('connect')
def handle_connect():
    print('Client connected')

@socketio.on('disconnect')
def handle_disconnect():
    print("Client disconnect")

@socketio.on('message')
def handle_message(message):
    print(f"Recieved message: {message}")
    socketio.emit('message', message)

@socketio.on('signin')
def handle_signin():
    print("User signed in")

@socketio.on('signout')
def handle_signout():
    print("User Signed out")

if __name__ == '__main__':
    socketio.run(app)