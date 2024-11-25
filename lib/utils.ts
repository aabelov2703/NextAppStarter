export const toCamelCase = (str?: string): string => {
  if (!str) return "";
  return str
    .toLowerCase()
    .split(/[\s-_]+/)
    .map((word, index) =>
      index ? word[0].toUpperCase() + word.slice(1) : word
    )
    .join("");
};

/** Aggregating by key */
export const groupByKey = <T extends { [key: string]: string | number }>(
  array: T[],
  key: keyof T
): Record<string, number> => {
  return array.reduce((acc: Record<string, number>, item: T) => {
    const keyValue = `${item[key]}`;
    acc[keyValue] = (acc[keyValue] ?? 0) + 1;
    return acc;
  }, {});
};
