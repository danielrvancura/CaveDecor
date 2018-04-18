import React, { Component } from 'react';
import SelectedArtPiece from '../components/SelectedArtPiece';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Cart extends Component {
    render () {
        let art = (<p id='congrats'>Congratulations on your purchase!</p>);
        let total = '--';

        if(this.props.cartArt !== undefined && this.props.cartArt.length > 0) {
            art = this.props.cartArt.map((piece) =>{
                return (
                    <SelectedArtPiece piece={piece} />
                )
            });

            total = this.props.cartArt.reduce((accumulator, piece) => {
                return accumulator + parseInt(piece.price.replace(/,/g, "").substr(1));
            }, 0);

            total = '$' + total;
        }

        return(
            <div className="main cart">
                <Nav />
                <div className='container'>
                    <h1 className='page-header'>Cart</h1>
                    {art}
                </div>
                <hr />
                <div id='checkout-wrapper'>
                    <p id="total">Total: {total}</p>
                    <button className='btn btn-primary checkout-button' onClick={this.props.onCheckout}>Checkout</button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart;

