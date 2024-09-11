"use client";
import homeStyles from "@/app/page.module.css";

export default function Home() {
  const headerStyle = {
    backgroundColor: "lightcoral",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  function openModal() {
    console.log("Open");
  }

  const myName = "Ty the Lobster Guy";

  const farmAnimals = [
    "seal",
    "polar bear",
    "iguana",
    "chimpanzee",
    "tasmanian devil",
  ];

  const person = {
    name: "Ty the Ghost Guy",
    hairColor: "black",
    eyeColor: "void",
  };

  const timesTySaidHemidemisemiquaverToday = 0;

  const isTuesday = true;
  const showNull = null;

  <main>
    <nav className={homeStyles.homeNav}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
    <h1 style={headerStyle}>Next.js App</h1>
    <p className={homeStyles.callout}>
      This is a very sunny day here in Rainyville. Surprising not our sunniest
      day this week. Signing off, {myName}.
    </p>

    <p>Array of farm animals: {farmAnimals.join(", ")}</p>

    <p>Person: {JSON.stringify(person)}</p>

    <p>
      Times Ty Said Hemi-demi-semi-quaver:
      {timesTySaidHemidemisemiquaverToday}
    </p>

    <p>Is it Tuesday: {String(isTuesday)}</p>
    <p>Show Null: {String(null)}</p>
    <button onClick={openModal}>View Sun</button>
  </main>;
}
