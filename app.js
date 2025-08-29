// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
let bolsa = []; 

const $input     = document.getElementById('amigo');
const $lista     = document.getElementById('listaAmigos');
const $resultado = document.getElementById('resultado');


const norm = (s) => s.trim().toLowerCase();

function pintarLista() {
  $lista.innerHTML = '';
  amigos.forEach((nombre, i) => {
    const li = document.createElement('li');
    li.textContent = `${i + 1}. ${nombre}`;
    $lista.appendChild(li);
  });

  $resultado.innerHTML = '';
  bolsa = [];
}

window.agregarAmigo = function agregarAmigo() {
  const nombre = $input.value.trim();

  if (!nombre) {
    alert('Escribe un nombre antes de añadir.');
    $input.focus();
    return;
  }
  const yaExiste = amigos.some((n) => norm(n) === norm(nombre));
  if (yaExiste) {
    alert('Ese nombre ya está en la lista.');
    $input.select();
    return;
  }

  amigos.push(nombre);
  pintarLista();
  $input.value = '';
  $input.focus();
};

window.sortearAmigo = function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Primero añade participantes.');
    return;
  }

  
  if (bolsa.length === 0) {
    bolsa = [...amigos];
    $resultado.innerHTML = ''; 
    alert('¡Se reinició la bolsa! Empieza un nuevo sorteo.');
  }

 
  const idx = Math.floor(Math.random() * bolsa.length);
  const nombre = bolsa.splice(idx, 1)[0]; // extrae y lo quita de la bolsa


  const li = document.createElement('li');
  li.textContent = `🎉 ${nombre}`;
  $resultado.appendChild(li);
};
