export function createSlug(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function cleanMarkdown(text = "") {
  return text
    .replace(/##/g, "")
    .replace(/###/g, "")
    .replace(/\*\*/g, "")
    .trim();
}