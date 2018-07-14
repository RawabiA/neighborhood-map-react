import React, { Component } from 'react';

class ListPlaces extends Component {

    filter(query) {
        this.props.filter(query)

        this.props.selectShop(null)
    }

    hideInfo() {
        let selected = document.getElementsByClassName('selected')

        if (selected.length !== 0) {
            selected[0].classList.remove('selected')
        }
    }

    fetchFourSquare(id) {
        fetch(`https://api.foursquare.com/v2/venues/${id}?client_id=YG3JF4VV4ESTBMRLLA3MLDHWVL4SLLHVVHAP0DHLFPHA0JGX&client_secret=LGUZPO2LPZVR1QFVEAYCRUZVKZWATV3O0DCL3JYVRL2DHCY4&v=20180510`)
            .then(res => res.json())
            .then(data => this.detailsOutput(data))
            .catch(err => alert(`Unable to get data from FourSquare (${err})`))
    }

    detailsOutput(details) {
        if (details.response.venue) {

            const shop = details.response.venue

            const markup = `
                <img class="photo" src="${shop.bestPhoto.prefix}500x300${shop.bestPhoto.suffix}" alt="${shop.name}">
                <div class="rating" style="color: #${shop.ratingColor};">${shop.rating}</div>
                <div class="address"><svg><use xlink:href="./icons.svg#marker"></use></svg>${shop.location.formattedAddress[0]}</div>
                <div class="status"><svg><use xlink:href="./icons.svg#like"></use></svg>Liked by ${shop.likes.count} user</div>
                <a class="link" href="${shop.canonicalUrl}" target="_blank" rel="noopener noreferrer">More on FourSquare<svg><use xlink:href="./icons.svg#link"></use></svg></a>
            `
            setTimeout(() => {
                document.querySelector(`#fs${shop.id} .details`).innerHTML = markup
            }, 500);
        } else {
            alert(`Unable to get details from FourSquare (${details.meta.errorDetail})`)
        }

    }

    componentDidUpdate(prevProps) {

        if (prevProps.selected === this.props.selected) {
            return false
        } else {
            this.hideInfo()

            if (this.props.selected !== null) {

                this.fetchFourSquare(this.props.selected.fsId)

                document.getElementById('fs' + this.props.selected.fsId).classList.add('selected')
            }
        }
    }


    selectShop(shop, target) {

        if (target === 'SPAN') {
            this.props.selectShop(null)
        } else if (this.props.selected === shop) {
            return false
        } else {
            this.props.selectShop(shop)
        }
    }


    render() {

        return (
            <section className="sidebar">
                <header className="header">
                    <div className="brand">
                        <h1>Neighborhood Map</h1>
                    </div>
                </header>

                <input
                    type="text"
                    className="filter"
                    placeholder="search"
                    aria-label="Filter"
                    onChange={e => this.filter(e.target.value)}
                />

                <ol className="places">
                    {this.props.filteredShops.map(shop => (
                        <li
                            key={shop.fsId}
                            className="place"
                            role="button"
                            tabIndex="0"
                            id={`fs${shop.fsId}`}
                            onClick={(e) => this.selectShop(shop, e.target.tagName)}
                            onKeyPress={(e) => this.selectShop(shop, e.target.tagName)}
                        >

                            <h4 className="name">{shop.name}</h4>
                            <span className="close" aria-label="Close" role="button" tabIndex="0" >X</span>
                            <div className="details">Loading details...</div>

                        </li>
                    ))}
                </ol>

            </section>
        );
    }
}

export default ListPlaces;