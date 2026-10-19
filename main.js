function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function link(href, label, className) {
  const a = el("a", className, label);
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  return a;
}

function render(cv) {
  document.title = `${cv.name} — ${cv.title}`;

  const heroName = document.getElementById("hero-name");
  const heroTitle = document.getElementById("hero-title");
  const heroTagline = document.getElementById("hero-tagline");
  const heroMeta = document.getElementById("hero-meta");
  const heroLinks = document.getElementById("hero-links");

  heroName.textContent = cv.name;
  heroTitle.textContent = cv.title;
  heroTagline.textContent = cv.tagline;

  heroMeta.replaceChildren(
    el("span", "meta-pill", cv.location),
    el("span", "meta-pill", cv.email)
  );

  heroLinks.replaceChildren(
    link(`mailto:${cv.email}`, "Email", "btn btn-primary"),
    link(cv.links.github, "GitHub", "btn btn-ghost"),
    link(cv.links.linkedin, "LinkedIn", "btn btn-ghost")
  );

  document.getElementById("about-text").textContent = cv.about;

  const eduRoot = document.getElementById("education-list");
  eduRoot.replaceChildren(
    ...cv.education.map((item) => {
      const card = el("article", "card card-edu");
      card.append(
        el("h3", "card-title", item.degree),
        el("p", "card-sub", `${item.school} · ${item.period}`),
        el("p", "card-body", item.details)
      );
      return card;
    })
  );

  const expRoot = document.getElementById("experience-list");
  expRoot.replaceChildren(
    ...cv.experience.map((job) => {
      const card = el("article", "card card-exp");
      const head = el("div", "card-head");
      head.append(
        el("h3", "card-title", job.role),
        el("span", "card-badge", job.period)
      );
      card.append(
        head,
        el("p", "card-sub", `${job.company} · ${job.location}`),
        el(
          "ul",
          "bullet-list",
          null
        )
      );
      const list = card.querySelector(".bullet-list");
      job.highlights.forEach((h) => list.append(el("li", null, h)));
      return card;
    })
  );

  const skillsRoot = document.getElementById("skills-grid");
  skillsRoot.replaceChildren(
    ...cv.skills.map((group) => {
      const block = el("div", "skill-block");
      block.append(el("h3", "skill-group", group.group));
      const pills = el("div", "pills");
      group.items.forEach((skill) => pills.append(el("span", "pill", skill)));
      block.append(pills);
      return block;
    })
  );

  const projRoot = document.getElementById("projects-list");
  projRoot.replaceChildren(
    ...cv.projects.map((p) => {
      const card = el("article", "card card-project");
      const pills = el("div", "pills pills-sm");
      p.tech.forEach((t) => pills.append(el("span", "pill pill-muted", t)));
      card.append(
        el("h3", "card-title", p.name),
        el("p", "card-body", p.description),
        pills,
        link(p.link, "View project →", "card-link")
      );
      return card;
    })
  );

  document.getElementById("footer-name").textContent = cv.name;
  document.getElementById("year").textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  if (!window.CV) {
    console.error("Missing window.CV — check content.js");
    return;
  }
  render(window.CV);
});
