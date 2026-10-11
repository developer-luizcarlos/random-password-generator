// @ts-ignore
import path from "node:path";
// @ts-ignore
import { fileURLToPath } from "node:url";
import webpack from "webpack";
    
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
    
const config: webpack.Configuration = {
    mode: "production",
    entry: "./src/scripts/main.ts",
    output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    },
};
    
export default config;