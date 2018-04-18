import React, {Component} from 'react';
import Carousel from '../components/Carousel';
import caveman1 from '../images/cavemen/caveman1.jpg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
const axios = require('axios');


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shakespeare: ''
        }
    }

    render() {
        return (
            <div className="main home">
                <Nav />
                <div className='container'>
                    <h1 className='page-header'>CaveDecor</h1>
                    <h3>Cave dwelling just got stylish.</h3>
                    <Carousel />
                    <hr />
                    <div id='featured-artist'>
                        <h2>Featured Artist: Sam Caveman</h2>
                        <img id="homepic" src={caveman1} />
                        <p><span class="firstcharacter">O</span>ur featured artist of the month is a fine young artist with a ROCKY past from Estonia. Under the tutelage of Leonardo Di Caveman, he switched from using bodily fluids to actual paint to create his art. He has been featured in “The PREHISTORIC Times”, “Cave Art Illustrated,” and “Rolling Stone.”</p>
                        <p>As a young caveman, Sam would often anger his parents with his cave drawings. Not so much the actual paintings but that he used his personal bodily fluids for the paintings. But once they dried and the smell went away, they could see the gifts that Sam possessed. His portrayal of a running horse launched his career and he hasn’t taken it for granite.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tempor dolor quis ex egestas, vel porta nisi suscipit. Suspendisse eget condimentum odio. Proin ac pharetra eros. Pellentesque laoreet vehicula egestas. Vestibulum aliquet sem vitae purus tempus sagittis. Nullam laoreet lacinia nisl id auctor. Suspendisse sollicitudin pharetra facilisis. Mauris eros orci, ultricies sed risus vel, condimentum hendrerit est.</p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;
