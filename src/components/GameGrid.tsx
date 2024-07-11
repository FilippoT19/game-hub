import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";



const GameGrid = () => {
  const {games, error} = useGames()
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => 
          <li key={game.id}>{game.name}</li>
        )}
      </ul>
    </>
  );
};

export default GameGrid;
function usaGames(): { games: any; error: any; } {
    throw new Error("Function not implemented.");
}

