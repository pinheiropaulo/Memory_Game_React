import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";

import LogoImage from "./assets/dev_memory_logo.png";
import RestartIcon from "./assets/svg/restart.svg";

import { Container, GridArea, Info, InfoArea, LogoLink } from "./App.styles";

export function App() {
  function resetAndCreateGrid() {}

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

        <Button
          label="Reiniciar"
          icon={RestartIcon}
          onClick={resetAndCreateGrid}
        />
      </Info>
      <GridArea></GridArea>
    </Container>
  );
}
