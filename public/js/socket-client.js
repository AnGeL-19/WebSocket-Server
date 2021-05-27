const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


const socket = io();

socket.on('connect', () => {

    console.log("conectado");
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('disconnect', () => {

    console.log("desconectado");
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';

});

socket.on('enviar-mensaje', (payload, callback ) => {
    console.log(payload);
});


btnEnviar.addEventListener('click', () => {

    const mensaje = txtMensaje.value;

    socket.emit('enviar-mensaje', mensaje, (id) => {
        console.log(id);
    });

});