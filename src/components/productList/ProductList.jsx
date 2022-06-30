import "./productList.css";
import Product from "../product/Product";
import { products } from "./data";
import one from "../../img/1.png";
import two from "../../img/2.png";
import three from "../../img/3.png";
import four from "../../img/4.png";
import five from "../../img/5.png";
import six from "../../img/6.png";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Creations</h1>
        <p className="pl-desc">
          I have been working on <b>Embedded Systems, Mobile Applications, Automated Robots,
            <br></br>Internet of Things, Virtual Robots, Data Security & Blockchain Technology.</b>
        </p>
      </div>
      <div className="pl-list">

        <Product img={one} />
        <Product img={two} />
        <Product img={three} />
        <Product img={four} />
        <Product img={five} />
        <Product img={six} />

      </div>
    </div>
  );
};

export default ProductList;
