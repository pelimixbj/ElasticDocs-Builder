function parseCallouts(markdown) {
  return markdown.replace(
    />\s*\[!(NOTE|INFO|SUCCESS|WARNING|IMPORTANT|CAUTION)\]\s*\n((?:>.*\n?)*)/gi,
    (_, type, body) => {
      const map = {
        NOTE: "info",
        INFO: "info",
        SUCCESS: "success",
        WARNING: "warning",
        IMPORTANT: "warning",
        CAUTION: "warning",
      };

      const component = map[type.toUpperCase()];

      const content = body
        .split("\n")
        .map((line) => line.replace(/^>\s?/, ""))
        .join("\n")
        .trim();

      return `
:::${component}
${content}
:::
`;
    },
  );
}

module.exports = parseCallouts;
