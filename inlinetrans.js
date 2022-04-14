import {getBranch,setBranch} from "./inline.js";
console.log("Branch before modification "+getBranch());
setBranch("chennai");
console.log("Branch after modification "+getBranch());