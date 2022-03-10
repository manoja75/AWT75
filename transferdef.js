import a from "./def.js";
console.log("Branch before modification "+a.getBranch());
a.setBranch("chennai");
console.log("Branch after modification "+a.getBranch());