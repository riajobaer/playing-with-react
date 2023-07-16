import Article from "./Article";
import Header from "./Header";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="menu">
        <main>
          <Header variant="h1" text="CAMPER CAFE" />
          <p className="established">Est. 2020</p>
          <hr />
          <section>
            <Header variant="h2" text="Coffee" />
            <img
              src="https://cdn.freecodecamp.org/curriculum/css-cafe/coffee.jpg"
              alt="coffee icon"
            />

            <Article className="flavor" name="French Vanilla" price="3.00" />
            <Article className="flavor" name="Caramel Macchiato" price="3.75" />
            <Article className="flavor" name="Pumpkin Spice" price="3.50" />
            <Article className="flavor" name="Hazelnut" price="4.00" />
            <Article className="flavor" name="Mocha" price="4.50" />
          </section>
          <section>
            <Header variant="h2" text="Dessert" />
            <img
              src="https://cdn.freecodecamp.org/curriculum/css-cafe/pie.jpg"
              alt="pie icon"
            />
            <Article className="dessert" name="Donut" price="1.50" />
            <Article className="dessert" name="Cherry Pie" price="2.75" />
            <Article className="dessert" name="Cheesecake" price="3.00" />
            <Article className="dessert" name="Cinnamon Roll" price="2.50" />
          </section>
        </main>
        <hr class="bottom-line" />
        <footer>
          <p>
            <a href="https://www.freecodecamp.org" target="_blank">
              Visit our website
            </a>
          </p>
          <p class="address">123 Free Code Camp Drive</p>
        </footer>
      </div>
    </div>
  );
}
