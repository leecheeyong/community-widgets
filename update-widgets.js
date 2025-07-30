import fs from "fs";

const widgets = [];

const files = fs.readdirSync("./widgets");

for (const file of files) {
  if (file.endsWith(".json")) {
    const filePath = `./widgets/${file}`;
    const content = fs.readFileSync(filePath, "utf-8");
    const jsonContent = JSON.parse(content);
    widgets.push(jsonContent);
  }
}

fs.writeFileSync("./widgets.json", JSON.stringify(widgets), "utf-8");
console.log("Widgets updated successfully.", widgets.length, "widgets found.");