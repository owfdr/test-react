import { transformFromAstSync } from "@babel/core";
import * as parser from "@babel/parser";

const jsxString = "<h1>Hello, React!</h1>";

const ast = parser.parse(jsxString, {
  sourceType: "module",
  plugins: ["jsx"],
});

console.log(ast); 

const result = transformFromAstSync(ast, jsxString, {
  presets: ["@babel/preset-react"],
});

console.log(result.code);
