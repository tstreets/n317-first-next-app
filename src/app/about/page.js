"use client";
import homeStyles from "@/app/page.module.css";

export default function About() {
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <h1>Ty Streets</h1>
      <h3>Interests</h3>
      <ul>
        <li>Marshmallows</li>
        <li>Coding</li>
        <li>Board Games</li>
        <li>IoT Development</li>
        <li>VR / AR</li>
      </ul>
    </main>
  );
}
