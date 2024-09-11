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

  return (
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

      <div className={homeStyles.productsList}>
        <div className={homeStyles.product}>
          <h3>Tofu</h3>
          <p>This is definitely tofu.</p>
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/1d1c83da-7e31-4e77-916f-96faf7003173/d2z2tzw-033be9ea-1aee-4a43-bb37-12a615824631.png/v1/fit/w_700,h_700,q_70,strp/a_can_of_spam_by_zellfaze_d2z2tzw-375w-2x.jpg"
            alt="Real picture of tofu"
          />
        </div>

        <div className={homeStyles.product}>
          <h3>Spam</h3>
          <p>This is a can of spam.</p>
          <img
            src="https://i1.pickpik.com/photos/829/655/724/spinach-healthy-green-dieting-preview.jpg"
            alt="A CAN of SPAM"
          />
        </div>

        <div className={homeStyles.product}>
          <h3>Spinach</h3>
          <p>This is a leaf of spinach.</p>
          <img
            src="https://www.ultraboardgames.com/tofu-kingdom/gfx/game7.jpg"
            alt="Just a measley leaf of spinach"
          />
        </div>
      </div>
    </main>
  );
}
