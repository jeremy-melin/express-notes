import { readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = "data";

export default class MapStore {

    filePath: string;

    constructor(filename: string) {
        this.filePath = path.resolve(dataDir, filename);
    }

    async save(data: any) {
        const serializedData = JSON.stringify(Array.from(data.entries()));
        await writeFile(this.filePath, serializedData);
    }

    async read() {
        const data = await readFile(this.filePath, "utf-8");
        const parsed = JSON.parse(data);
        return new Map(parsed);
    };
}