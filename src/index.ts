import axios from "axios";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

// Define the OpenAI API endpoint and API key
const endpoint = `https://${process.env.OPENAI_SERVICE_NAME}.openai.azure.com/openai/deployments/${process.env.DEPLOYMENT_NAME}/completions?api-version=2022-12-01`;
const apiKey = process.env.OPENAI_API_KEY;
const count = process.env.DATASET_COUNT
  ? parseInt(process.env.DATASET_COUNT, 10)
  : 5;

// Define the interface for the oil and gas equipment object
interface Equipment {
  name: string;
  description: string;
  price: number;
  manufacturer: string;
  serialNumber: string;
  dateInstalled: string;
}

// Function that generates the dummy data
async function generateData(numEntries: number): Promise<Equipment[]> {
  let equipment: Equipment[] = [];
  for (let i = 0; i < numEntries; i++) {
    let newEquipment: Equipment = {
      name: faker.commerce.productName(),
      description: "",
      price: parseFloat(faker.commerce.price(100, 200, 0)),
      manufacturer: faker.company.name(),
      serialNumber: faker.datatype.uuid(),
      dateInstalled: faker.date.past().toISOString(),
    };

    // Call the OpenAI API to generate a description for the equipment
    let response = await axios.post(
      endpoint,
      {
        prompt: `Please create definitions of types of equipment used in the engineering industry. Describe the ${newEquipment.name} in 5 sentences`,
        max_tokens: 100,
        temperature: 0.5,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      }
    );

    newEquipment.description = response.data.choices[0].text;
    equipment.push(newEquipment);
  }
  return equipment;
}

// Call the function to generate the data
generateData(count).then((equipmentData) => {
  // Log the generated data to the console
  console.log(JSON.stringify(equipmentData, null, 2));
});
