import React from "react";
import Title from "./components/Title";
import ShoppingList from "./components/ShoppingList";
import styles from "./App.module.css";
import "./App.css";

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props) {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: "Milk", qty: 5, unit: "ltr" },
        { id: 2, value: "Bananas", qty: 6, unit: "pcs" },
        { id: 3, value: "Bread", qty: 3, unit: "x" },
        { id: 4, value: "Eggs", qty: 16, unit: "x" },
      ],
    };
  }

  addSomeStuff = (stuffDescription, quantity) => {
    return () => {
      const searchResult = this.state.items.findIndex(
        (element, index, array) => {
          if (element.value === stuffDescription) {
            return true;
          } else {
            return false;
          }
        }
      );
      if (searchResult !== -1) {
        console.log("Success");
        let newItems = [...this.state.items];
        newItems[searchResult].qty += quantity;
        this.setState({ items: newItems });
      } else {
        console.log("No Milk");
        this.setState({
          items: [
            ...this.state.items,
            {
              id: this.state.items.length + 1,
              value: stuffDescription,
              qty: quantity,
            },
          ],
        });
      }
    };
  };

  render() {
    const { applicationDescription, applicationName } = this.props;
    return (
      <div className={styles.shoppingList}>
        <Title
          applicationDescription={applicationDescription}
          applicationName={applicationName}
        />
        <ShoppingList items={this.state.items} />
        <button onClick={this.addSomeStuff("Carrot", 6)}>Carrot</button>
        <button onClick={this.addSomeStuff("Yogurt", 2)}>Yogurt</button>
        <button onClick={this.addSomeStuff("Bread", 4)}>bread</button>
        <button onClick={this.addSomeStuff("Beer", 3)}>beer</button>
      </div>
    );
  }
}

export default App;
