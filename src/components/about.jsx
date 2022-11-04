import React from "react";

function About(props) {
    return <div className="about row">
        <div className="col-lg-7">
            <h1>Our Story</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="col-lg-5">
            <img className="about-noodles" src="https://media.istockphoto.com/photos/spaghetti-alla-puttanesca-italian-pasta-dish-with-tomatoes-black-picture-id1325172440?b=1&k=20&m=1325172440&s=170667a&w=0&h=WS2gPeU01_yzJYsiaHBhOSfrHVKMn-kBxzgsz61a2p8="/>
            <img className="about-drink" src="https://bakeitwithlove.com/wp-content/uploads/2022/08/Blue-Lagoon-Cocktail-sq.jpg"/>
        </div>
        
        
    </div>;
}


export default About;