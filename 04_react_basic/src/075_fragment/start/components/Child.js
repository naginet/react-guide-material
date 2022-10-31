import "./Child.css";
import { Fragment } from "react";
const Child = () => {
  return (
    <Fragment key="">
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        suscipit ratione rem saepe! Iusto quo sint unde nesciunt natus
        praesentium hic modi? Provident dolores blanditiis voluptates odio
        minima, a asperiores!
      </p>
    </Fragment>
  );
};

export default Child;
