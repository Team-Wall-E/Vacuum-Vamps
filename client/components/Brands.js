import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/products";

export class Brands extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: "All",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.props.getProducts();
  }

  handleChange(evt) {
    this.setState({ filter: evt.target.value });
  }

  render() {

    const { products } = this.props;
    const { filter } = this.state;

    const allProducts = products.filter((product) => {
      if (filter === "iRobot") {
        return product.brand === "iRobot";
      } else if (filter === "Tesvor") {
        return product.brand === "Tesvor";
      } else if (filter === "Samsung") {
        return product.brand === "Samsung";
      } else if (filter === "Eufy") {
        return product.brand === "Eufy";
      } else if (filter === "Roborock") {
        return product.brand === "Roborock";
      } else if (filter === "iLife") {
        return product.brand === "iLife";    
      } else {
        return product;
      }
    });

    return (
      <div>
        <div>
          Find by Brand:
          <select
            id="brand"
            value={filter}
            onChange={this.handleChange}
          >
            <option value="All">All</option>
            <option value="iRobot">iRobot</option>
            <option value="Tesvor">Tesvor</option>
            <option value="Samsung">Samsung</option>
            <option value="Eufy">Eufy</option>
            <option value="Roborock">Roborock</option>
            <option value="iLife">iLife</option>
          </select>
        </div>

        <div className="product-list">
          {allProducts.map((product) => {
            return (
              <div key={product.id}>
                <div>
                  <Link to={`/brands/${product.id}`}>
                    <img src={product.imageUrl} />
                    <h3>{product.productName}</h3>
                    <p>{product.description}</p>
                  </Link>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ products }) => ({
    products,
  });

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Brands);