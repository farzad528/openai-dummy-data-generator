"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const faker_1 = require("@faker-js/faker");
// Define the OpenAI API endpoint and API key
const endpoint = "https://delegenz-openai.openai.azure.com/openai/deployments/text-davinci-002/completions?api-version=2022-12-01";
const apiKey = "07f7381339e1419da636ff5171950888";
// Function that generates the dummy data
function generateData(numEntries) {
    return __awaiter(this, void 0, void 0, function* () {
        let equipment = [];
        for (let i = 0; i < numEntries; i++) {
            let newEquipment = {
                name: faker_1.faker.commerce.productName(),
                description: "",
                price: parseFloat(faker_1.faker.commerce.price(100, 200, 0)),
                manufacturer: faker_1.faker.company.name(),
                serialNumber: faker_1.faker.datatype.uuid(),
                dateInstalled: faker_1.faker.date.past().toISOString(),
            };
            // Call the OpenAI API to generate a description for the equipment
            let response = yield axios_1.default.post(endpoint, {
                prompt: `Please create definitions of types of equipment used in the engineering industry. Describe the ${newEquipment.name} in 5 sentences`,
                max_tokens: 100,
                temperature: 0.5,
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": apiKey,
                },
            });
            newEquipment.description = response.data.choices[0].text;
            equipment.push(newEquipment);
        }
        return equipment;
    });
}
// Call the function to generate the data
generateData(100).then((equipmentData) => {
    // Log the generated data to the console
    console.log(JSON.stringify(equipmentData, null, 2));
});
