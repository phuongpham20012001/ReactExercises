import React from "react";
import SearchView from "./components/SearchView";
import axios from "axios";
import AdminView from "./components/AdminView";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      productSearchString: "",
      adminModeActive: false,
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/products")
      .then((response) => {
        this.setState({ items: response.data.items });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  clickedItem = (ID) => {
    this.setState({
      items: this.state.items.filter((item) => item.id === ID),
    });
  };
  addNewItem = (
    name,
    price,
    manufacturer,
    category,
    images,
    promos,
    rating
  ) => {
    axios.post("http://localhost:4000/products", {
      name: name,
      price: price,
      manufacturer: manufacturer,
      category: category,
      images: images,
      promos: promos,
      rating: rating,
    });

    let newItems = [...this.state.items];
    newItems.push({
      id: newItems.length + 1,
      name: name,

      price: price,
    });

    this.setState({
      items: newItems,
    });
  };

  onSearchFieldChange = (event) => {
    this.setState({ productSearchString: event.target.value });
  };

  deleteItem = (itemId) => {
    axios.delete("http://localhost:4000/products", {
      data: {
        id: itemId,
      },
    });
    // .then((response) => {})
    // .catch((err) => console.log(err));
    this.setState({
      items: this.state.items.filter((item) => item.id !== itemId),
    });
  };

  render() {
    let output = (
      <>
        <div>
          Search{" "}
          <input
            type="text"
            onChange={this.onSearchFieldChange}
            value={this.state.productSearchString}
          />
        </div>

        <SearchView
          clickedItem={this.clickedItem}
          items={this.state.items.filter(
            (item) =>
              item.name.includes(this.state.productSearchString) ||
              item.manufacturer.includes(this.state.productSearchString) ||
              item.category.includes(this.state.productSearchString)
          )}
        />

        <button
          onClick={() =>
            this.setState({ adminModeActive: !this.state.adminModeActive })
          }
        >
          Admin mode
        </button>
      </>
    );

    if (this.state.adminModeActive) {
      output = (
        <AdminView
          disableAdminMode={() => this.setState({ adminModeActive: false })}
          addNewItem={this.addNewItem}
          items={this.state.items}
          deleteItem={this.deleteItem}
        />
      );
    }

    return <>{output}</>;
  }
}

export default App;
