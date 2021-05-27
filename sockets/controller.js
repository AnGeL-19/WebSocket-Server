

const socketController = (socket) => {
    
  console.log("cliente conectado");

  socket.on('disconnect', () => {
    //console.log("desconectado", socket.id);
  });

  socket.on('enviar-mensaje', (payload, callback) => {

    const id = 123124;
    callback({id, fecha: new Date()});
    socket.broadcast.emit('enviar-mensaje', payload);

  });

}

module.exports = {
    socketController
}