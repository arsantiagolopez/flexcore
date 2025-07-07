export function getFirstName(fullName: string): string {
  if (!fullName || typeof fullName !== "string") {
    return "";
  }

  // Clean up the input
  const cleaned = fullName
    .trim()
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .replace(/[^\p{L}\s'-]/gu, "") // Remove non-letter characters except spaces, hyphens, apostrophes
    .trim();

  if (!cleaned) {
    return "";
  }

  // Split by spaces
  const parts = cleaned.split(" ").filter((part) => part.length > 0);

  if (parts.length === 0) {
    return "";
  }

  // Handle single name
  if (parts.length === 1) {
    return capitalizeFirstLetter(parts[0]);
  }

  // Handle common prefixes/titles
  const prefixes = [
    "mr",
    "mrs",
    "ms",
    "dr",
    "prof",
    "sir",
    "dame",
    "lord",
    "lady",
  ];
  let startIndex = 0;

  // Skip prefixes
  while (
    startIndex < parts.length &&
    prefixes.includes(parts[startIndex].toLowerCase().replace(".", ""))
  ) {
    startIndex++;
  }

  // Return the first non-prefix part
  if (startIndex < parts.length) {
    return capitalizeFirstLetter(parts[startIndex]);
  }

  // Fallback to first part if all were prefixes
  return capitalizeFirstLetter(parts[0]);
}

function capitalizeFirstLetter(name: string): string {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
