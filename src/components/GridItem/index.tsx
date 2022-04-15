import { GridItemType } from "../../types/GridItemType";

import { items } from "../../data/items";

import b7Svg from "../../assets/svg/b7.svg";

import { Container, Icon } from "./styles";

type Props = {
  item: GridItemType;
  onClick: () => void;
};

export function GridItem({ item, onClick }: Props) {
  return (
    <Container
      showBackground={item.permanentShow || item.show}
      onClick={onClick}
    >
      {item.permanentShow === false && item.show === false && (
        <Icon src={b7Svg} opacity={0.2} />
      )}
      {(item.permanentShow || item.show) && item.item != null && (
        <Icon src={items[item.item].icon} />
      )}
    </Container>
  );
}
