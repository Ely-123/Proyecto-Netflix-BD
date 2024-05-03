import React from "react";
import styled from "styled-components";
import CardSlider from "./CardSlider";
export default function Slider({ movies }) {
  const getMoviesFromRange = (from, to) => {
    return movies.slice(from, to);
  };
  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0, 10)} title="En tendencia ahora" />
      <CardSlider data={getMoviesFromRange(10, 20)} title="Nuevos lanzamientos" />
      <CardSlider
        data={getMoviesFromRange(20, 30)}
        title="Blockbuster Peliculas"
      />
      <CardSlider
        data={getMoviesFromRange(30, 40)}
        title="Popular en netflix"
      />
      <CardSlider data={getMoviesFromRange(40, 50)} title="Peliculas de accion" />
      <CardSlider data={getMoviesFromRange(50, 60)} title="Epicas" />
    </Container>
  );
}

const Container = styled.div``;
