import { useEffect, useState } from "react";

import { Button } from "./components/Button";
import { MovieCard } from "./components/MovieCard";

// import { SideBar } from './components/SideBar';
// import { Content } from './components/Content';

import { api } from "./services/api";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { MoviesProvider } from "./hooks/useMovies";

export function App() {
  return (
    <MoviesProvider>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />
        <div className="container">
          <Content />
        </div>
      </div>
    </MoviesProvider>
  );
}
