import fs from 'fs';
import path from 'path';

export function getRootPath(): string {
    return path.dirname(require.main?.filename || process.mainModule?.filename || '');
}

export const getDirectories = (source: string): string[] => {
    return fs.readdirSync(source, {withFileTypes: true})
        .filter((e) => e.isDirectory())
        .map((e) => e.name);
}

export const getFiles = fs.readdirSync;