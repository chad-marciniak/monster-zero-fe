import "./index.css";
import { Layout } from "./designSystem/Layout";
import { ArticleList } from "./designSystem/ArticleList";

function App() {
  const articles = [
    {
      title: 'Use webpack to export reusable components',
      description: 'Unlocking the potential of component reusability in web development, this article delves into harnessing the power of Webpack to efficiently export reusable components. From conceptualization to implementation, it guides readers through the process of organizing, configuring, and bundling components with Webpack, fostering modularity and scalability in their projects. By leveraging Webpack\'s robust capabilities, developers gain insights into optimizing workflows, enhancing code maintainability, and fostering a more streamlined development experience, ultimately empowering them to create resilient, adaptable web applications',
      date: 'May 4, 2018 08:45:12 pm',
      url: 'url'
    },
    {
        title: 'CREATE A SECURE REST APP WITH EXPRESS.JS',
        description: 'Embark on the journey of building a secure RESTful application with Express.js through this comprehensive guide. From establishing secure routes to implementing authentication and authorization mechanisms, this article navigates developers through the intricate process of fortifying their Express.js applications against potential vulnerabilities. By integrating best practices for security, including input validation, encryption, and session management, developers gain invaluable insights into crafting robust, resilient APIs that safeguard sensitive data and ensure trustworthiness in their web applications.',
        date: 'May 5, 2018 08:45:12 pm',
        url: 'url'
    },
    {
        title: 'Setting up redux with your react app',
        description: 'Maximize the efficiency of state management in your React applications by seamlessly integrating Redux with this comprehensive guide. From initial setup to advanced usage, this article provides a step-by-step walkthrough for developers seeking to leverage Redux\'s capabilities in their projects. Learn how to effectively organize your application\'s state, implement actions and reducers, and seamlessly connect Redux with your React components to ensure smooth data flow. With Redux, developers gain centralized control over application state, facilitating smoother data handling, improved debugging, and enhanced scalability, thereby enabling the creation of more robust and maintainable React applications.',
        date: 'May 6, 2018 08:45:12 pm',
        url: 'url'
    },
    {
        title: 'Dockerizing your node rest api',
        description: 'Dockerizing Your Node REST API" walks developers through the process of containerizing their Node.js-based RESTful APIs using Docker. This article provides a concise yet comprehensive guide, covering everything from setting up Docker for the Node.js environment to packaging the REST API application into a Docker container. Readers will learn how to streamline deployment, manage dependencies, and ensure consistency across different environments by leveraging Docker\'s containerization technology. By following this guide, developers can enhance scalability, portability, and ease of deployment for their Node.js REST APIs, ultimately optimizing their development workflow and accelerating the delivery of resilient, containerized applications.',
        date: 'May 7, 2018 08:45:12 pm',
        url: 'url'
    },
    {
        title: 'Getting started with Storybook for react components',
        description: 'Getting Started with Storybook for React Components" serves as an essential primer for developers eager to leverage Storybook in their React projects. This article offers a beginner-friendly introduction, guiding readers through the setup and implementation of Storybook to streamline the development and testing of React components. With clear step-by-step instructions, developers will learn how to create a dedicated environment for showcasing and interacting with React components, enhancing collaboration and iteration in their development process. By harnessing the power of Storybook, developers gain insights into isolating and refining individual components, fostering code reusability, and ultimately delivering more robust and polished React applications.',
        date: 'May 8, 2018 08:45:12 pm',
        url: 'url'
    },
    {
        title: 'Testing flows and visual regression with cypress.io',
        description: 'Dive into the realm of testing flows and visual regression with cypress.io through this comprehensive article. Offering practical guidance, developers will discover how to optimize their testing processes from setup to execution. Learn to leverage Cypress.io\'s robust features to automate end-to-end tests, ensuring flawless functionality and visual consistency across various environments. With clear examples and best practices, this resource equips developers to establish dependable testing pipelines, ultimately enhancing the quality and reliability of their web applications.',
        date: 'May 9, 2018 08:45:12 pm',
        url: 'url'
    }
];
  return (
    <Layout>
    {/* router goes here */}
      <ArticleList data={articles}/> 
    </Layout>
  );
}

export default App;
