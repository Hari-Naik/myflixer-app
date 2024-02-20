"use client";
import { ReactNode, createContext, useState } from "react";

export type ContextType = {
  //   showLogin: boolean;
  //   setShowLogin: (id: boolean) => void;
  type: string;
  genres: number[] | [];
  year: number | string;
  sortBy: string;
  setType: (type: string) => void;
  setGenres: (genres: number[]) => void;
  setYear: (year: number) => void;
  setSortBy: (sortBy: string) => void;
};

export const Context = createContext<ContextType>({
  type: "",
  genres: [],
  year: "",
  sortBy: "popularity.desc",
  setType: (type: string) => {},
  setGenres: (genres: number[]) => {},
  setYear: (year: number) => {},
  setSortBy: (sortBy: string) => {},
});

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [genres, setGenres] = useState<number[] | []>([]);
  const [year, setYear] = useState<number | string>("");
  const [sortBy, setSortBy] = useState<string>("popularity.desc");

  return (
    <Context.Provider
      value={{
        type,
        genres,
        year,
        sortBy,
        setType,
        setGenres,
        setSortBy,
        setYear,
      }}>
      {children}
    </Context.Provider>
  );
};
