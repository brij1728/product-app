import { Button, Card } from "react-bootstrap";

export interface CardProps {
  id?: string;
  name: string;
  price: string;
}
export const ProductCard: React.FC<CardProps> = ({ id, name, price }) => {
  return (
    <>
      <Card style={{ width: "18rem", margin: '1rem'}}>
        <Card.Body>
          <p>{name}</p>
          <p>{price}</p>
        </Card.Body>
        <Card.Footer>
          <Button>Add to Card</Button>
        </Card.Footer>
      </Card>
    </>
  );
};
