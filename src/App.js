import React, { Component } from 'react';
import ListPlaces from "./ListPlaces";
import Data from "./Data";
import Map from "./Map";
import './App.css';

class App extends Component {

    constructor(props) {
        super(props)
        this.updateQuery = this.updateQuery.bind(this)
        this.selectShop = this.selectShop.bind(this)
    }

    state = {
        shops: [],
        filteredShops: [],
        selected: null
    };

    componentDidMount() {
        this.setState({ shops: Data.shops, filteredShops: Data.shops })
    }

    updateQuery(query) {
        this.setState({
            filteredShops: this.state.shops.filter(shop => shop.name.toLowerCase().indexOf(query.trim().toLowerCase()) !== -1)
        })
    }

    selectShop = function (shop) {
        this.setState({ selected: shop })
    }

    render() {
        return (
            <div className="App">

                <ListPlaces
                    filter={this.updateQuery}
                    selectShop={this.selectShop}
                    selected={this.state.selected}
                    filteredShops={this.state.filteredShops}
                />

                <Map
                    filteredShops={this.state.filteredShops}
                    selectShop={this.selectShop}
                    selected={this.state.selected}
                />

            </div>
        );
    }
}

export default App;