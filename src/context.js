import React, { Component } from "react";
import items from "./data";


const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
    product: [],
    sortedProduct: [],
    featuredProduct: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    };

  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

componentDidMount() {
    // this.getData();
    let product = this.formatData(items);
    let featuredProduct = product.filter(product => product.featured === true);
    //
    let maxPrice = Math.max(...product.map(item => item.price));
    let maxSize = Math.max(...product.map(item => item.size));
    this.setState({
    product,
    featuredProduct,
    sortedProduct: product,
    loading: false,
      //
    price: maxPrice,
    maxPrice,
    maxSize
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let product = { ...item.fields, images, id };
      return product;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempProduct = [...this.state.product];
    const prod = tempProduct.find(prod => prod.slug === slug);
    return prod;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterProduct
    );
  };
  filterProduct = () => {
    let {
    product,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      
    } = this.state;

    let tempProduct = [...product];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
        tempProduct = tempProduct.filter(product => product.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
        tempProduct = tempProduct.filter(product => product.capacity >= capacity);
    }
    // filter by price
    tempProduct = tempProduct.filter(product => product.price <= price);
    //filter by size
    tempProduct = tempProduct.filter(
        product => product.size >= minSize && product.size <= maxSize
    );
    
    
    this.setState({
      sortedProduct: tempProduct
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProductConsumer>
        {value => <Component {...props} context={value} />}
      </ProductConsumer>
    );
  };
}