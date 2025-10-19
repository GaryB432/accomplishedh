function toKebabCase(str) {
  return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}
function toPascalCase(str) {
  const camel = str.replace(/(-|_|\s)+(.)?/g, (match, sep, chr) =>
    chr ? chr.toUpperCase() : ""
  );
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

export const helpers = {
  toKebabCase,
  toPascalCase,
  classify: (str) => {
    return toPascalCase(str);
  },
  now: () => new Date().toISOString(),
};
