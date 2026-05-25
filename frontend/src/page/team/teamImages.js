const modules = import.meta.glob(
  "../../assets/team/**/*.{png,jpg,jpeg,gif,webp}",
  { eager: true, import: "default" }
);

const images = {};
for (const fullPath in modules) {
  const relativePath = fullPath.replace("../../assets/team/", "");
  images[relativePath] = modules[fullPath];
}

export function getTeamImage(path) {
  if (!path) return null;
  return images[path] || null;
}
