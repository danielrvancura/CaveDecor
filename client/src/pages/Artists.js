import React from 'react';
import caveman1 from '../images/cavemen/caveman1.jpg';
import cavewoman1 from '../images/cavewomen/cavewoman1.jpg';
import cage from '../images/cavemen/cage.jpg';
import cavewoman2 from '../images/cavewomen/cavewoman2.jpg';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Artists = () => {
    return (
            <div className="main artists">
              <Nav />
              <div className='container'>
                  <h1 className='page-header'>Artists</h1>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={caveman1} />
                        </div>
                        <div className="col-md-7">
                              <h3>Sam Caveman</h3>
                              <h4>Age: 25</h4>
                              <h4>From: Estonia</h4>
                              <h4>Specialty: Bodily fluids based paintings.</h4>
                              <p>As a young caveman, Sam would often anger his parents with his cave drawings. Not so much the actual paintings but 
                              that he used his personal bodily fluids for the paintings. But once they dried and the smell went away, they could see 
                              the gifts that Sam possessed. His portrayal of a running horse launched his career and he hasn’t taken it for granite.</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cavewoman1} />
                        </div>
                        <div className="col-md-7">
                              <h3>Rockelle Welch</h3>
                              <h4>Age: 20</h4>
                              <h4>From: Bedrock</h4>
                              <h4>Specialty: Hunting based drawings.</h4>
                              <p>Bio: As the only daughter of Fugg and Ugg, Rockelle used her experience hunting with her family as inspiration for 
                              her early work. Rockelle’s most famous work is the “Hands” series. She discovered you could create the perfect image 
                              of a hand by placing it on a surface and painting around it. She’s also the innovator of the hand turkey; which has 
                              become the standard method for elementary students to draw turkeys. You have to see it to believe it.</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cage} />
                        </div>
                        <div className="col-md-7">
                              <h3>Leonardo Di Caveman</h3>
                              <h4>Age: 22</h4>
                              <h4>From: Detroit Rock City</h4>
                              <h4>Specialty: Battle based drawings</h4>
                              <p>Bio: Despite discovering fire and inventing the wheel, Leonardo Di Caveman is best known for his series of bison 
                              paintings. His difficult upbringing in Detroit Rock City formed his love for escaping the bustling cave district and 
                              to head out in the wilderness to capture bison in their liveliest forms.</p>
                        </div>
                  </div>
                  <div className="row artist-profile">
                        <div className="col-md-5 prof-pic-wrapper">
                              <img className="artist-profile-pic" src={cavewoman2} />
                        </div>
                        <div className="col-md-7">
                              <h3>Frida Kavelo</h3>
                              <h4>Age: 16</h4>
                              <h4>From: Rockingham</h4>
                              <h4>Specialty: Bison</h4>
                              <p>Bio: Frida Kavelo is best known for her many portraits, self-portraits, and works inspired by the nature and 
                              artifacts of her native Rockingham. Inspired by the country's popular culture, she employed a naïve folk art style to 
                              explore questions of identity, postcolonialism, gender, class, and race in Rockingham society. Her paintings often had 
                              strong autobiographical elements,mixed realism with fantasy, and antelopes.</p>
                        </div>
                  </div>
              </div>
              <Footer />
            </div>
    )
}

export default Artists;
