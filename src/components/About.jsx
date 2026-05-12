const heroImg = "/images/berta.jpg"

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML & CSS",
  "Tailwind",
  "Python",
  "Git",
  "Vercel",
]

export default function About() {
  return (
    <section id="about" aria-label="About me">
      <div className="container">
        <div className="about__top">
          <div className="about__photo-wrap">
            <img src={heroImg} alt="Berta Reverté Àlvaro" className="about__photo" />
          </div>

          <div className="about__bio">
            <p className="section-label">About</p>
            <h2 className="about__bio-name">Hi, I'm Berta.</h2>
            <p>
              I'm a frontend developer with a passion for building digital experiences that are both
              visually polished and technically sound. I enjoy working at the intersection of design
              and code — turning ideas into interfaces people love to use.
            </p>
            <p>
              With a strong foundation in React and JavaScript, I care deeply about clean, readable
              code and attention to detail. I'm always learning and staying curious about modern web
              technologies.
            </p>
            <p>
              When I'm not coding, I'm usually outdoors — paddle surfing, cycling, or walking by the
              sea with my dog. And yes, I always have a book on the go.
            </p>
          </div>
        </div>

        <div>
          <p className="about__skills-label">Tech stack</p>
          <ul className="about__skills" role="list" aria-label="Technologies">
            {skills.map(skill => (
              <li key={skill} className="skill-pill">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
