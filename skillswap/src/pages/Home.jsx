import SkillCard from "../components/SkillCard";

function Home() {
  return (
    <main>
      <section className="hero">
        <h2>Welcome to Skill Swap</h2>
        <p>Exchange skills. Learn from others. Grow together.</p>
      </section>

      <section className="skills-section">
        <h3>Available Skills</h3>

        <div className="skills-grid">
          <SkillCard
            title="React Coding"
            description="Learn modern React development including hooks, components, and state management."
            price={50}
            provider="Dan Abramov"
          />

          <SkillCard
            title="Calculus"
            description="Master derivatives, integrals, limits, and real-world applications."
            price={40}
            provider="Isaac Newton"
          />

          <SkillCard
            title="Physics"
            description="Explore motion, energy, relativity, and the laws that govern the universe."
            price={45}
            provider="Albert Einstein"
          />

          <SkillCard
            title="Chemistry"
            description="Understand atoms, molecules, reactions, and the foundations of chemical science."
            price={35}
            provider="Marie Curie"
          />
        </div>
      </section>
    </main>
  );
}

export default Home;
