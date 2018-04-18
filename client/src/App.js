import React, { Component } from 'react';
import Home from './pages/Home';
import Art from './pages/Art';
import Artists from './pages/Artists';
import Cart from './pages/Cart';
import Item from './pages/Item';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

const allArt = [{
        name: 'Antelope 1',
        artist: 'Frida Kavelo',
        about: "Frida Kavelo is best known for her many portraits, self-portraits, and works inspired by the nature and artifacts of her native Rockingham. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Rockingham society. Her paintings often had strong autobiographical elements,mixed realism with fantasy, and antelopes.",
        price: '$120,000',
        fileName: 'antelope1.jpg',
        id: 1
    },{
        name: 'Beasts',
        artist: 'Frida Kavelo',
        about: "Frida Kavelo is best known for her many portraits, self-portraits, and works inspired by the nature and artifacts of her native Rockingham. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Rockingham society. Her paintings often had strong autobiographical elements,mixed realism with fantasy, and antelopes.",
        price: '$240,000',
        fileName: 'beasts.JPG',
        id: 2
    },{
        name: 'Bison',
        artist: 'Frida Kavelo',
        about: "Frida Kavelo is best known for her many portraits, self-portraits, and works inspired by the nature and artifacts of her native Rockingham. Inspired by the country's popular culture, she employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Rockingham society. Her paintings often had strong autobiographical elements,mixed realism with fantasy, and antelopes.",
        price: '$360,000',
        fileName: 'bison.jpg',
        id: 3
    },{
        name: 'Lone Bison',
        artist: 'Leonardo Di Caveman',
        about: "Despite discovering fire and inventing the wheel, Leonardo Di Caveman is best known for his series of bison paintings. His difficult upbringing in Detroit Rock City formed his love for escaping the bustling cave district and to head out in the wilderness to capture bison in their liveliest forms.",
        price: '$120,000',
        fileName: 'bison2.jpg',
        id: 4
    },{
        name: 'Standing Bison',
        artist: 'Leonardo Di Caveman',
        about: "Despite discovering fire and inventing the wheel, Leonardo Di Caveman is best known for his series of bison paintings. His difficult upbringing in Detroit Rock City formed his love for escaping the bustling cave district and to head out in the wilderness to capture bison in their liveliest forms.",
        price: '$360,000',
        fileName: 'bison3.jpg',
        id: 5
    },{
        name: 'Sling',
        artist: 'Leonardo Di Caveman',
        about: "Despite discovering fire and inventing the wheel, Leonardo Di Caveman is best known for his series of bison paintings. His difficult upbringing in Detroit Rock City formed his love for escaping the bustling cave district and to head out in the wilderness to capture bison in their liveliest forms.",
        price: '$240,000',
        fileName: 'catapult.jpg',
        id: 6
    },{
        name: 'Cow',
        artist: 'Rockelle Welch',
        about: "As the only daughter of Fugg and Ugg, Rockelle used her experience hunting with her family as inspiration for her early work. Rockelle’s most famous work is the “Hands” series. She discovered you could create the perfect image of a hand by placing it on a surface and painting around it. She’s also the innovator of the hand turkey; which has become the standard method for elementary students to draw turkeys. You have to see it to believe it.",
        price: '$120,000',
        fileName: 'cattle1.jpg',
        id: 7
    },{
        name: 'Hands',
        artist: 'Rockelle Welch',
        about: "As the only daughter of Fugg and Ugg, Rockelle used her experience hunting with her family as inspiration for her early work. Rockelle’s most famous work is the “Hands” series. She discovered you could create the perfect image of a hand by placing it on a surface and painting around it. She’s also the innovator of the hand turkey; which has become the standard method for elementary students to draw turkeys. You have to see it to believe it.",
        price: '$240,000',
        fileName: 'hands.jpg',
        id: 8
    },{
        name: 'Hedgehogs',
        artist: 'Rockelle Welch',
        about: "As the only daughter of Fugg and Ugg, Rockelle used her experience hunting with her family as inspiration for her early work. Rockelle’s most famous work is the “Hands” series. She discovered you could create the perfect image of a hand by placing it on a surface and painting around it. She’s also the innovator of the hand turkey; which has become the standard method for elementary students to draw turkeys. You have to see it to believe it.",
        price: '$360,000',
        fileName: 'hedgehog.jpg',
        id: 9
    },{
        name: 'Running Horse',
        artist: 'Sam Caveman',
        about: "As a young caveman, Sam would often anger his parents with his cave drawings. Not so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they dried and the smell went away, they could see the gifts that Sam possessed. His portrayal of a running horse launched his career and he hasn’t taken it for granite.",
        price: '$120,000',
        fileName: 'horse1.jpg',
        id: 10
    },{
        name: 'Stampede',
        artist: 'Sam Caveman',
        about: "As a young caveman, Sam would often anger his parents with his cave drawings. Not so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they dried and the smell went away, they could see the gifts that Sam possessed. His portrayal of a running horse launched his career and he hasn’t taken it for granite.",
        price: '$240,000',
        fileName: 'horse2.jpg',
        id: 11
    },{
        name: 'Stages',
        artist: 'Sam Caveman',
        about: "As a young caveman, Sam would often anger his parents with his cave drawings. Not so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they dried and the smell went away, they could see the gifts that Sam possessed. His portrayal of a running horse launched his career and he hasn’t taken it for granite.",
        price: '$360,000',
        fileName: 'horses1.jpg',
        id: 12
    }
];

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleAddToCart(e, index) {
        let cartCopy = Array.from(this.state.cart);
        cartCopy.push(allArt[index]);
        this.setState({
            cart: cartCopy
        });
    }

    handleCheckout() {
        this.setState({
            cart: []
        });
    }

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/art" component={ () => <Art allArt={allArt} /> } />
                    <Route path="/artists" component={Artists} />
                    <Route path="/cart" component={ () => <Cart cartArt={this.state.cart} onCheckout={this.handleCheckout} /> } />
                    <Route path="/item/1" component={ () => <Item allArt={allArt} index={0} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/2" component={ () => <Item allArt={allArt} index={1} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/3" component={ () => <Item allArt={allArt} index={2} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/4" component={ () => <Item allArt={allArt} index={3} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/5" component={ () => <Item allArt={allArt} index={4} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/6" component={ () => <Item allArt={allArt} index={5} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/7" component={ () => <Item allArt={allArt} index={6} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/8" component={ () => <Item allArt={allArt} index={7} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/9" component={ () => <Item allArt={allArt} index={8} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/10" component={ () => <Item allArt={allArt} index={9} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/11" component={ () => <Item allArt={allArt} index={10} onAddToCart={this.handleAddToCart} /> } />
                    <Route path="/item/12" component={ () => <Item allArt={allArt} index={11} onAddToCart={this.handleAddToCart} /> } />
                </div>
            </Router>
        )
    }
}

export default App;

//<Route path="/Blog" component={  } />
