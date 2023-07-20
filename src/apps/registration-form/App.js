import Fieldset from "./Fieldset";
import Input from "./Input";
import Select from "./Select";
import Option from "./Option";
import Textarea from "./Textarea";
import "./app.css";

export default function App() {
  return (
    <main>
      <h1>Registration Form</h1>
      <p>Please fill out this form with the required information</p>
      <form>
        <Fieldset>
          <Input
            id="first-name"
            name="first-name"
            type="text"
            required
            label="Enter Your First Name:"
          />
          <Input
            id="last-name"
            name="last-name"
            type="text"
            required
            label="Enter Your Last Name:"
          />
          <Input
            id="email"
            name="email"
            type="email"
            required
            label="Enter Your Email:"
          />
          <Input
            id="password"
            name="password"
            type="password"
            required
            label="Create a New Password:"
          />
        </Fieldset>
        <Fieldset>
          <Input
            id="personal-account"
            name="account-type"
            type="radio"
            label="Personal Account"
            className="inline"
          />
          <Input
            id="business-account"
            name="account-type"
            type="radio"
            label="Business Account"
            className="inline"
          />
          <Input
            id="terms-and-conditions"
            name="terms-and-conditions"
            type="checkbox"
            className="inline"
            label={
              <>
                I accept the{" "}
                <a href="https://www.freecodecamp.org/news/terms-of-service/">
                  terms and conditions
                </a>
              </>
            }
          />
        </Fieldset>
        <Fieldset>
          <Input
            id="profile-picture"
            name="file"
            type="file"
            label="Upload a profile picture:"
          />
          <Input
            id="age"
            name="age"
            type="number"
            label="Input your age (years):"
          />
          <Select
            id="refereer"
            name="referrer"
            label="How did you hear about us?"
          >
            <Option value="" text="(select one)" selected disabled />
            <Option value="1" text="Facebook" />
            <Option value="2" text="YouTube" />
            <Option value="3" text="News" />
            <Option value="4" text="Other" />
          </Select>
          <Textarea
            id="bio"
            name="bio"
            rows="3"
            cols="30"
            label="Provide a bio:"
            placeholder="I like coding on the beach..."
          />
        </Fieldset>
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
