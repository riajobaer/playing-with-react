import Caption from "./Caption";
import Fieldset from "./Fieldset";
import Figure from "./Figure";
import Header from "./Header";
import Input from "./Input";

export default function App() {
  return (
    <main>
      <Header variant="h1" text="CatPhotoApp" />
      <section>
        <Header variant="h2" text="Cat Photos" />
        <p>
          See more{" "}
          <a target="_blank" href="https://freecatphotoapp.com">
            cat photos
          </a>{" "}
          in our gallery.
        </p>
        <a href="https://freecatphotoapp.com">
          <img
            src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
            alt="A cute orange cat lying on its back."
          />
        </a>
      </section>

      <section>
        <Header variant="h2" text="Cat Lists" />
        <Header variant="h3" text="Things cats love:" />
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <Figure
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg"
          alt="A slice of lasagna on a plate."
        >
          <Caption>
            Cats <em>love</em> Lasanga
          </Caption>
        </Figure>

        <Header variant="h3" text="Top 3 things cats hate:" />
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <Figure
          src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg"
          alt="Five cats looking around a field."
        >
          <Caption>
            Cats <strong>hate</strong> other cats.
          </Caption>
        </Figure>
      </section>
      <section>
        <Header variant="h2" text="Cat Form" />
        <form>
          <Fieldset title="Is your cat an indoor or outdoor cat?">
            <Input
              id="outdoor"
              type="radio"
              name="indoor-outdoor"
              value="outdoor"
              label="Outdoor"
              checked
            />
            <Input
              id="outdoor"
              type="radio"
              name="indoor-outdoor"
              value="outdoor"
              label="Outdoor"
            />
          </Fieldset>
          <Fieldset title="What's your cat's personality?">
            <Input
              id="loving"
              type="checkbox"
              name="personality"
              value="loving"
              checked
              label="Loving"
            />
            <Input
              id="lazy"
              type="checkbox"
              name="personality"
              value="lazy"
              label="Lazy"
            />
            <Input
              id="energetic"
              type="checkbox"
              name="personality"
              value="energetic"
              label="Energetic"
            />
          </Fieldset>
          <input
            type="text"
            name="catphotourl"
            placeholder="cat photo URL"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
