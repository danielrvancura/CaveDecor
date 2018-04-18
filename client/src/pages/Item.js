import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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

const Item = (props) => {
    let index = props.index;
    let imageSrc
    switch (props.allArt[index].fileName) {
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

    return (
        <div className="main item">
            <Nav />
            <div className='container'>
                <div className="row">
                    <div className='col-md-5'>
                        <img class="item-pic" src={imageSrc} />   
                    </div>
                    <div className='col-md-7'>
                        <h1>{props.allArt[index].name}</h1>
                        <h3>by {props.allArt[index].artist}</h3>
                        <h2>Price: {props.allArt[index].price}</h2>
                        <button className='btn btn-primary' onClick={ (e) => { props.onAddToCart(e, index) } }>Add to Cart</button>
                    </div>
                </div>
                <div className="row">
                    <div className='col-md-5'>
                        <h4>Description</h4>
                        <p>Duis cursus nec libero in efficitur. Nunc mauris lacus, lobortis ac quam sed, commodo cursus odio. Morbi consequat a est id viverra. Nunc mattis mauris quis felis feugiat varius. Nam nec neque a erat convallis pretium eu eu urna. In hac habitasse platea dictumst. Pellentesque metus dui, iaculis ac efficitur eu, fringilla at nisl. Nulla facilisi. Praesent nec eros id diam accumsan varius.</p>
                    </div>
                    <div className='col-md-7'>
                        <h4>About the artist</h4>
                        <p>{props.allArt[index].about}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Item