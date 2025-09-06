const axios = require('axios');

const urlUsers = `https://jsonplaceholder.typicode.com/users`;
const urlPosts = 'https://jsonplaceholder.typicode.com/posts';

async function getUsers(n = 3) {
  const { data } = await axios.get(urlUsers);
  //Te da todos los users asi que nos deshacemos del resto
  return data.slice(0, n);
}

async function getUserCantPosts(idUser) {
  const { data } = await axios.get(urlPosts, { params: { userId: idUser } });
  return data.length; 
}

// --- Enfoque A: Secuencial ---
async function modoSecuencial(users) {
  console.log('--- Ejecucion Secuencial ---');

  for (const user of users) {
    const cont = await getUserCantPosts(user.id);
    console.log(`${user.name} tiene ${cont} publicaciones`);
  }
}

// --- Enfoque B: Concurrente Promise.all ---
async function modoParalelo(users) {
  console.log('\n--- Ejecución Paralela ---');

  // map recorre el array users y por cada elemento hace la invocacion, el conjunto se guarda en promesas
  // queda un array de promesas
  const promesas = users.map(user => getUserCantPosts(user.id));
  const cant = await Promise.all(promesas);

  users.forEach(
    (user, i) => {console.log(`${user.name} tiene ${cant[i]} publicaciones`);} 
);
}

async function main() {
  try {
    const users = await getUsers(3);   
    await modoSecuencial(users);
    await modoParalelo(users);
  } catch (error) {
    console.error('Error: ', error.message);
  }
}

main();
