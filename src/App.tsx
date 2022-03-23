import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles";
import LogoImage from "./assets/dev_memory_logo.png";
import { InfoItem } from "./components/InfoItem";

export function App() {
  return (
    <Container>
      <Info>
        <LogoLink>
          <img src={LogoImage} width="200" />
        </LogoLink>
        <InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </InfoArea>

        <button>Reiniciar</button>
      </Info>
      <GridArea></GridArea>
    </Container>
  );
}
