import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import antelope1 from '../images/Art/antelope1.jpg';
import beasts from '../images/Art/beasts.JPG';
import bison from '../images/Art/bison.jpg';
import bison2 from '../images/Art/bison2.jpg';
import bison3 from '../images/Art/bison3.jpg';
import catapult from '../images/Art/catapult.jpg';
import cattle1 from '../images/Art/cattle1.jpg';
import hands from '../images/Art/hands.jpg';
import hedgehog from '../images/Art/hedgehog.jpg';
import horse1 from '../images/Art/horse1.jpg';
import horse2 from '../images/Art/horse2.jpg';
import horses1 from '../images/Art/horses1.jpg';

const ArtPiece = (props) => {
    let imageSrc
    switch (props.piece.fileName) {
        case 'antelope1.jpg':
            imageSrc = antelope1;
            break;
        case 'beasts.JPG':
            imageSrc = beasts;
            break;
        case 'bison.jpg':
            imageSrc = bison;
            break;
        case 'bison2.jpg':
            imageSrc = bison2;
            break;
        case 'bison3.jpg':
            imageSrc = bison3;
            break;
        case 'catapult.jpg':
            imageSrc = catapult;
            break;
        case 'cattle1.jpg':
            imageSrc = cattle1;
            break;
        case 'hands.jpg':
            imageSrc = hands;
            break;
        case 'hedgehog.jpg':
            imageSrc = hedgehog;
            break;
        case 'horse1.jpg':
            imageSrc = horse1;
            break;
        case 'horse2.jpg':
            imageSrc = horse2;
            break;
        case 'horses1.jpg':
            imageSrc = horses1;
            break;
        default:
            break
    }

    const href = "/item/" + props.piece.id;
    return (
        <div>
            <div className='cart-list-item-container'>
                <img src={imageSrc} className='item-list-image' />
                <h3>"{props.piece.name}" by {props.piece.artist} for {props.piece.price}</h3>
            </div>
        </div>
    )
}

export default ArtPiece;