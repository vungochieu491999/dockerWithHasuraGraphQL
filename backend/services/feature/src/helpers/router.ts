import fs from 'fs';
import { Express } from 'express';
import { getRootPath, getDirectories } from './path';

export function initRouters(app: Express): Express {
    const rootPath = getRootPath();
    const directoryModuleName = "apis";
    const pathModule = `${rootPath}/${directoryModuleName}`;
    console.log(1, rootPath, directoryModuleName, `${rootPath}/${directoryModuleName}/1/router`);

    if (!fs.existsSync(pathModule)) {
        return app;
    }

    const directories = getDirectories(`${rootPath}/${directoryModuleName}`);

    directories.forEach((e: string) => {
        const { router } = require(`${rootPath}/${directoryModuleName}/${e}/router`);
    console.log("router", rootPath, directoryModuleName, `${rootPath}/${directoryModuleName}/${e}/router`);
        console.log(router);
        app.use('/', router);
    });

    return app;
}