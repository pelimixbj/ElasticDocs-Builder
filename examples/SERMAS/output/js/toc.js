document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");

  if (!sidebar) return;

  const headings = document.querySelectorAll(
    "article h1, article h2, article h3, article h4",
  );

  const root = document.createElement("ul");

  sidebar.appendChild(root);

  const stack = [
    {
      level: 0,
      ul: root,
    },
  ];

  const links = [];

  headings.forEach((heading, index) => {
    if (!heading.id) {
      heading.id = "section-" + index;
    }

    const level = Number(heading.tagName.substring(1));

    while (stack.length && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    const parent = stack[stack.length - 1];

    const li = document.createElement("li");

    li.className = "toc-" + heading.tagName.toLowerCase();

    const a = document.createElement("a");

    a.href = "#" + heading.id;

    a.textContent = heading.textContent;

    li.appendChild(a);

    parent.ul.appendChild(li);

    const child = document.createElement("ul");

    li.appendChild(child);

    stack.push({
      level,
      ul: child,
    });

    links.push({
      heading,
      link: a,
      item: li,
    });
  });

  // Scroll suave

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = link.getAttribute("href").substring(1);

      document.getElementById(id).scrollIntoView({
        behavior: "smooth",

        block: "start",
      });
    });
  });

  // Sección activa

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const current = links.find((x) => x.heading === entry.target);

        if (!current) return;

        if (entry.isIntersecting) {
          links.forEach((x) => {
            x.link.classList.remove("active");

            x.item.classList.remove("active");
          });

          current.link.classList.add("active");

          current.item.classList.add("active");
        }
      });
    },

    {
      rootMargin: "-20% 0px -70% 0px",

      threshold: 0,
    },
  );

  headings.forEach((h) => observer.observe(h));
});
