import { Container, IconArea, Icon, Label } from "./styles";

type Props = {
  label: string;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export function Button({ label, icon, onClick }: Props) {
  return (
    <Container onClick={onClick}>
      {icon && (
        <IconArea>
          <Icon src={icon} />
        </IconArea>
      )}
      <Label>{label}</Label>
    </Container>
  );
}
