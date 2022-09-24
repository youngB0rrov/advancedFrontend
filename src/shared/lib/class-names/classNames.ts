// Record используется для того, чтобы типизировать ключ и значение объекта

type Modes = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  modes?: Modes,
  additions?: string[],
): string => {
  const usedModes = Object.entries(modes)
    .filter(([_, boolValue]) => Boolean(boolValue))
    .map(([className, _]) => className);

  return [
    cls,
    ...usedModes,
    ...additions,
  ]
    .join(' ');
};
