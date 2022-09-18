// Record используется для того, чтобы типизировать ключ и значение объекта

type Modes = Record<string, string | boolean>;

export const classNames = (
    cls: string,
    modes: Modes,
    additions: string[]
): string => {

    const usedModes = Object.entries(modes)
        .filter(([className, boolValue]) => Boolean(boolValue))
        .map(([className, boolValue]) => className);

    return [
        cls,
        ...usedModes,
        ...additions
    ]
        .join(' ')
}