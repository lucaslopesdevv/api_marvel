import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Main from "../components/Main";
// import { getMarvelCharacterRoute } from "../services/function";

import axios from "axios";
import md5 from "crypto-js/md5";

import Characters from "../components/Characters";
import Character from "../components/Character";

let resultado = [];
let nome = [];

const publicKey = process.env.REACT_APP_PUBLIC_KEY;
const privateKey = process.env.REACT_APP_PRIVATE_KEY;

const time = Number(new Date());

const hash = md5(time + privateKey + publicKey);

const apiPosts = axios.create({
  baseURL: "http://gateway.marvel.com/",
});

export default function MarvelCharactersPage() {
  //prettier-ignore
  const [allCharacters, setCharacters] = useState([]);

  async function getMarvelCharacterRoute(resultado) {
    let response = await apiPosts.get(
      `v1/public/characters?ts=${time}&apikey=${publicKey}&hash=${hash}`
    );

    console.log(response);

    setCharacters(response.data.data.results);

    allCharacters.forEach(({ name }) => {
      resultado = name;
      console.log("teste " + resultado);
    });
  }

  useEffect(() => {
    getMarvelCharacterRoute(resultado);
  }, []);

  return (
    <>
      <Header title="marvel-react-app" />
      <Main>Personagens da Marvel</Main>
      <Characters title="titulo">
        {allCharacters.map(({ id, name, description }) => {
          return (
            <Character key={id}>
              <span>{name}</span>
            </Character>
          );
        })}
      </Characters>
    </>
  );
}
