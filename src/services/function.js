import axios from "axios";
import md5 from "crypto-js/md5";

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);
const apiPosts = axios.create({
  baseURL: "http://gateway.marvel.com/",
});

export async function getMarvelCharacterRoute(resultado) {
  let response = await apiPosts.get(
    `v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
  );

  let json = response.data.data.results;

  json.forEach(({ name }) => {
    resultado = name;
    // console.log("teste " + resultado);
  });
}

export function getMarvelCharacterName() {}
