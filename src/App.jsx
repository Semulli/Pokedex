import Button from "./Components/Buttons";
import MainContainer from "./Components/Main";
import Title from "./Components/Titles";
import data from "./Mock/pokemon.json";
import { useState } from "react";

function App() {
  const [team1, setTeam1] = useState([]);
  const [team2, setTeam2] = useState([]);

  function shuffledArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function startButton() {
    const shuffled = shuffledArray([...data]);
    const mid = Math.floor(shuffled.length / 2);

    const firstTeam = shuffled.slice(0, mid);
    const secondTeam = shuffled.slice(mid);

    setTeam1(firstTeam);
    setTeam2(secondTeam);
  }

  const team1Score = team1.reduce((sum, el) => sum + el.base_experience, 0);
  const team2Score = team2.reduce((sum, el) => sum + el.base_experience, 0);

  console.log(team1);
  console.log(team2);
  return (
    <>
      <Title title="Pokedex" />
      <Button startButton={startButton} />
      <MainContainer
        data={team1}
        pokemons={team1Score}
        title={team1Score > team2Score ? "Winner" : "Loser"}
      />
      <Title title="VS" />
      <MainContainer
        data={team2}
        pokemons={team2Score}
        title={team2Score > team1Score ? "Winner" : "Loser"}
      />
    </>
  );
}

export default App;
