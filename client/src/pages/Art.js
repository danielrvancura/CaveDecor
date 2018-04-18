import React, { Component } from 'react';
import ArtPiece from '../components/ArtPiece';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

class Art extends Component {
    render () {
        const art = this.props.allArt.map((piece) =>{
            return (
                <ArtPiece piece={piece} />
            )
        });

        return(
            <div className="main art">
                <Nav />
                <div className='container'>
                    <h1 className='page-header'>Available Pieces</h1>
                    {art}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Art;

