// тип для режима сборки
export type buildMode = 'production' | 'development';

// интерфейс для путей сборки
export interface buildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

// интерфейс настроек сборки
export interface buildOptions {
    mode: buildMode;
    paths: buildPaths;
    isDev: boolean;
    port: number;
}

// интерфейс для переменных окружения
export interface envOptions {
    mode: buildMode;
    port: number;
}