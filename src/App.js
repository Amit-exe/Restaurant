import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FoodItem from "./components/FoodItem";
import mainImg from "./images/bg1.jpg";
import menu from "./menuItems";
import drinks from "./drinks";
import events from "./events";
import About from "./components/about";
import Event from "./components/Events";

function App() {
  return (
    <div>
      <section id="home">
        <Header />
      </section>

      <section id="menu">
        <h1>Menu items</h1>
        {menu.map((item, i) => (
          <FoodItem
            key={i}
            img={item.img}
            foodname={item.name}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </section>

      <section id="drinks">
        <h1>Drinks</h1>
        {drinks.map((item, i) => (
          <FoodItem
            img={item.img}
            key={i}
            foodname={item.name}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </section>

      <section id="events">
        <h1>Events</h1>
        {events.map((event, i) => (
          <Event
            name={event.name}
            key={i}
            start={event.start}
            end={event.end}
            date={event.date}
            offer={event.offers}
          />
        ))}
      </section>

      <section id="about">
        <About />
        <Footer />
      </section>
    </div>
  );
}

export default App;
