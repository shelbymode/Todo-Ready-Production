export const toCamelCase = (kebabCase: string) => {
    return kebabCase
        .split("-")
        .map((el, idx) =>
            idx > 0 ? `${el[0].toUpperCase()}${el.slice(1)}` : el
        )
        .join("");
};
