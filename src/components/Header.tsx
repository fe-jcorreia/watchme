import { useMovies } from "../hooks/useMovies";
import { Icon } from "./Icon";

export function Header() {
  const { selectedGenre } = useMovies();

  return (
    <header>
      <span className="category">
        <Icon name={selectedGenre.name} color="#FBFBFB" />
        <span> {selectedGenre.title}</span>
      </span>
    </header>
  );
}
