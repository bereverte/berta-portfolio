import { ExternalLink } from 'lucide-react';

function GitHubIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const projects = [
  {
    title: 'Konnekte',
    description:
      'A social platform to discover and connect with people who share your interests and professional goals.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Vercel'],
    live: 'https://konnekte-web.vercel.app/',
    image: '/images/konnekte.png',
  },
  {
    title: 'Crumz Can Cakes',
    description:
      'A beautifully designed site for an artisan bakery. Browse custom cakes, explore flavours, and get in touch with the baker.',
    tech: ['React', 'JavaScript', 'Tailwind', 'Vercel'],
    live: 'https://crumzcancakes.vercel.app/',
    image: '/images/crumz.png',
  },
  {
    title: 'SWAPI Explorer',
    description:
      'An interactive Star Wars encyclopedia powered by the SWAPI. Explore characters, planets, starships, and films.',
    tech: ['React', 'JavaScript', 'REST API', 'CSS'],
    live: 'https://bereverte.github.io/star-wars-encyclopedia/',
    github: 'https://github.com/bereverte/star-wars-encyclopedia',
    image: '/images/swapi.png',
  },
];

function ProjectCard({ title, description, tech, live, github, image }) {
  return (
    <article className="project-card">
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__thumb"
        aria-label={`Visit ${title} live site`}
        tabIndex={-1}
      >
        <img
          src={image}
          alt={`${title} screenshot`}
          className="project-card__thumb-img"
        />
        <div className="project-card__overlay" aria-hidden="true">
          <span className="project-card__overlay-label">
            <ExternalLink size={14} />
            Visit site
          </span>
        </div>
      </a>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__tags" role="list" aria-label="Technologies used">
          {tech.map((t) => (
            <li key={t} className="tag">{t}</li>
          ))}
        </ul>

        <div className="project-card__links">
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            aria-label={`${title} live demo`}
          >
            <ExternalLink size={13} aria-hidden="true" />
            Live
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link--secondary"
              aria-label={`${title} GitHub repository`}
            >
              <GitHubIcon size={13} />
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <section id="work" aria-label="Selected work">
      <div className="container">
        <div className="work__header">
          <p className="section-label">Work</p>
          <h2 className="section-title">Selected projects</h2>
        </div>

        <div className="work__grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
