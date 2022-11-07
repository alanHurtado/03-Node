//referencias HTml
const span1 = document.querySelector("#span1");
const span2 = document.querySelector("#span2");
const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  span1.style.display = "";
  span2.style.display = "none";
});

socket.on("disconnect", () => {
  span1.style.display = "none";
  span2.style.display = "";
});

socket.on("enviar-mensaje", (payload) => {
  console.log(payload);
});

btnEnviar.addEventListener("click", () => {
  const mensaje = txtMensaje.value;
  const payload = {
    mensaje,
    id: "jsdklfjlsd",
    fecha: new Date().getTime(),
  };
  socket.emit("enviar-mensaje", payload, (id) => {
    console.log("Desde el servidor, id");
  });
});
