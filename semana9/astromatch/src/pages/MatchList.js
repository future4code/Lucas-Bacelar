import styled from "styled-components";
import * as api from "../utils/api";
import React, { useState, useEffect } from "react";

const ListContainer = styled.main`
  display: grid;
  grid-auto-rows: 80px;
  padding: 10px 20px;
  grid-gap: 10px;
  overflow-x: auto;
`;

const ListItem = styled.article`
  display: flex;
  justify-content: flex-start;
  padding: 4px 10px;


  & > h3 {
      align-self: center;
      padding-left: 15px;
  }

  & > div {
    width: 70px;

    & > img {
      border-radius: 50%;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export default function MatchList() {
  const [matches, setMatches] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    api
      .getMatches()
      .then((response) => {
        setMatches(response.data.matches);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(true);
      });
  }, []);

  let output;

  if (isLoading) {
    output = <div>Loading...</div>
  } else {
    output = matches.map((item) => {
      return (
        <ListItem key={item.id}>
          <div>
            <img src={item.photo} />
          </div>
          <h3>{item.name}</h3>
        </ListItem>
      );
    });
  }


  return (
    <ListContainer>
      {matches.length === 0 ? <div>{"Não tem ninguém aqui :("}</div> : output}
    </ListContainer>
  );
}
