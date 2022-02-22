const legibilityLabel = (size = "normal", contrast) => {
  const pass = "Pass";
  const fail = "Not legible";

  if (
    (size === "normal" && contrast >= 4.5) ||
    (size === "large" && contrast >= 3.1)
  ) {
    return pass;
  } else {
    return fail;
  }
};

export const transformColors = (colors = {}) => {
  return colors.contrastTable.map((c) => {
    return {
      name: colors.name,
      value: colors.value,
      background: c.background,
      contrast: c.contrast,
      normalLegibility: legibilityLabel("normal", c.contrast),
      largeLegibility: legibilityLabel("large", c.contrast),
    };
  });
};
