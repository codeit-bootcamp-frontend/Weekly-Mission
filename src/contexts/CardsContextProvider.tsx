"use client";
import React, { ReactNode, useState } from "react";
import { Link } from "$/types";
import CardsContext from "@/contexts/CardsContext";

const CardsContextProvider = ({ children }: { children: ReactNode }) => {
  const [cards, setCards] = useState<Link[]>([]);

  return (
    <CardsContext.Provider value={{ cards, setCards }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
