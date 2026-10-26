import { useState } from "react";
import { filterSkillsByCategory } from "../skillswap-functions.js";
import SkillCard from "../components/SkillCard";

const skills = [
  { title: "Python Tutoring", category: "Programming", price: 20 },
  { title: "Guitar Lessons", category: "Music", price: 15 },
  { title: "Resume Review", category: "Career", price: 0 },
  { title: "Web Development", category: "Programming", price: 25 }
];

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredSkills = filterSkillsByCategory(skills, selectedCategory);

  return (
    <main>
      <section className="hero">
        <h2>Welcome to Skill Swap</h2>
        <p>Exchange skills. Learn from others. Grow together.</p>
      </section>

      <section className="skills-section">
        <h3>Available Skills</h3>

        {/* Filter Buttons */}
        <div className="filters">
          <button onClick={() => setSelectedCategory("All")}>All</button>
          <button onClick={() => setSelectedCategory("Programming")}>Programming</button>
          <button onClick={() => setSelectedCategory("Music")}>Music</button>
          <button onClick={() => setSelectedCategory("Career")}>Career</button>
        </div>

        {/* Dynamic Skill Cards */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={`Category: ${skill.category}`}
              price={skill.price}
              provider="Skill Provider"
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
