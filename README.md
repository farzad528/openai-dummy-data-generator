# OpenAI + Faker.js Dataset Generation Demo

**DISCLAIMER: This app is not for production use and is strictly for customers who want to leverage OpenAI and/or Faker to build synthetic datasets**

This is a repository built with Node.JS that provides the ability to seamlessly create synthetic datasets. The goal of this project is to create synthetic datasets that you may want to leverage in you proof of concepts to demo to customers. This method is particuarly useful for pre-sales applications where you have a high-level overview of what a customer's dataset may look like but do not have the exact data.

## Features

- Generation of synthetic datasets using Faker.js and OpenAI to enrich the data further with the power of AI

## Getting Started

### Prerequisites

- OpenAI API
- Node (I'm using version 16.x)

Once you've met all the pre-requisites, you'll need to follow these steps:

1. Clone this repository to your local machine using `git clone https://github.com/farzad528/openai-dummy-data-generator`
2. Change into the newly created directory using `cd [your directory here]`
3. Install the required dependencies by running `npm install` or `yarn install`
4. Configure variables
   4.1 Create a .env file in the folder root with the following info:

   ```
   OPENAI_API_KEY=your-api-key
   OPENAI_SERVICE_NAME=your-openai-service-name
   DEPLOYMENT_NAME=your-deployment-name
   DATASET_COUNT=your-dataset-size
   ```

   4.2 Go to `src\index.ts` and modify the prompt for OpenAI if you choose to use it with Faker.js:

5. Compile the typescript file by running `npm run build` or `yarn build`.
6. Execute the compiled javascript file by running `node index.js`.
7. Copy and paste your JSON dataset from the terminal

## Conclusion

I hope you find this repository useful for generating synthetic datasets. OpenAI can be costly when generating datasets at scale. I recommnd using Faker.js to take advtanage of the built-in datasets they have. Then, further enrich the fields by using OpenAI. This will save you tons of time and $$$!

If you have any questions or suggestions, please feel free to open an issue and I'll be happy to help.

## Contributing

If you'd like to contribute to this repository, please feel free to do so! There are many ways to contribute, such as fixing bugs, improving the documentation, or adding new features. To get started, simply fork this repository and make your changes. When you're ready, submit a pull request and I'll take a look.

## Learn More

To learn more about Faker.js and Azure OpenAI, take a look at the following resources:

- [Faker.js Documentation](https://fakerjs.dev/api) - learn about Faker.js features and API.
- [Azure OpenAI Service](https://azure.microsoft.com/products/cognitive-services/openai-service/) - learn about Azure OpenAI Service features and pricing.
