import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";
import { MoviesProvider } from "./hooks/useMovies";

import "./styles/global.scss";
import "./styles/sidebar.scss";
import "./styles/content.scss";

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
