import { useEffect, useState } from "react";

import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/Button";
import { GridItem } from "./components/GridItem";

import LogoImage from "./assets/dev_memory_logo.png";
import RestartIcon from "./assets/svg/restart.svg";

import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";

import {
  Container,
  GridArea,
  Info,
  InfoArea,
  LogoLink,
  Grid,
} from "./App.styles";

export function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [movoCont, setMoveCont] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  function resetAndCreateGrid() {
    setTimeElapsed(0);
    setMoveCont(0);
    setShownCount(0);
    //
    let tempGrid: GridItemType[] = [];

    for (let i = 0; i < items.length * 2; i++) {
      tempGrid.push({
        item: null,
        show: false,
        permanentShow: false,
      });
    }

    //
    for (let w = 0; w < 2; w++) {
      //
      for (let i = 0; i < items.length; i++) {
        let pos = -1;

        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }

        tempGrid[pos].item = i;
      }
    }

    //
    setGridItems(tempGrid);

    //
    setPlaying(true);
  }

  function handleItemClick(index: number) {}

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
      <GridArea>
        <Grid>
          {gridItems.map((item, index) => (
            <GridItem
              key={index}
              item={item}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </Grid>
      </GridArea>
    </Container>
  );
}
