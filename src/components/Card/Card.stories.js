import Card from "./Card.js";

export default {
  title: "Cards/Card",
  component: Card,
  args: {
    children: "Button",
  },
};

export const Cards = ({title, imageUrl, description, color}) => (
  <>
      <Card variant={color}>
        <h2>{title}</h2>
        <img className="allImages" src={imageUrl}/>
        <hr />
        <p style={{height: "130px"}}>{description}</p>
      </Card>
  </>
);
