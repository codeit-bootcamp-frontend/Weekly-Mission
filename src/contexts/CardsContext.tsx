import { Link } from "$/types";
import { createContext } from "react";

type CardsContextType = {
  cards: Link[];
  setCards: React.Dispatch<React.SetStateAction<Link[]>>;
};

const CardsContext = createContext<CardsContextType>({
  cards: [],
  setCards: () => {},
});

export default CardsContext;
