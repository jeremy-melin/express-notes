import { readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = "data";

export default class MapStore {
    constructor(filename) {
        this.filePath = path.resolve(dataDir, filename);
    }

    async save(data) {
        console.log(`${this.filePath}`);
        const serializedData = JSON.stringify(Array.from(data.entries()));
        await writeFile(this.filePath, serializedData);
    }

    async read() {
        const data = await readFile(this.filePath, "utf-8");
        const parsed = JSON.parse(data);
        return new Map(parsed);
    };
}