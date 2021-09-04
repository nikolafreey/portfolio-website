export const projects = [
  {
    title: "MERN E-Commerce React Frontend",
    description:
      "Used React, Node.js, Express & MongoDB to build a Full Stack MERN E-Commerce Application. Frontend is coded using React functional components and Hooks, Stripe Integration and Redux. Authentication and Authorization is done using Google`s Firebase Auth.",
    image: "/images/MERN.png",
    tags: ["React", "JavaScript"],
    source: "https://github.com/nikolafreey/nodejs-react-ecommerce-front",
    visit: "https://github.com/nikolafreey/nodejs-react-ecommerce-front",
    id: 0,
  },
  {
    title: "MERN E-Commerce React Backend",
    description:
      "Used React, Node.js, Express & MongoDB to build a Full Stack MERN E-Commerce Application. Backend is WebAPI build in NodeJS and Express with Google's Firebase Auth, we are using MongoDB and Mongoose, Helmet for best security practises",
    image: "/images/MERN.png",
    tags: ["Mongo", "Express", "Node"],
    source: "https://github.com/nikolafreey/nodejs-react-ecommerce-backend",
    visit: "https://github.com/nikolafreey/nodejs-react-ecommerce-backend",
    id: 1,
  },
  {
    title: "Reciept Fiscalisation for Montenegro's Post Office Frontend",
    description:
      "Single Page Application in React using Redux, Redux-Saga, Formik and Yup Validation, Core app functionality is generating invoices of many types and fiscalising them using Central Invoice Checking SOAP API at Montenego's Internal Revenue Service.Most of the logic is implemented in the React regarding validation and invoice checking principles, we are using backend validation just as a added security measure.",
    image: "/images/Fiscalisation.png",
    tags: ["React", "Redux", "Formik", "Redux-Saga", "Yup"],
    source: "https://github.com/nikolafreey/fiscalisation-montenegro-front",
    visit: "https://test.postfiskal.me",
    id: 2,
  },
  {
    title: "Reciept Fiscalisation for Montenegro's Post Office Backend",
    description:
      "WebAPI is made using Laravel, Database is MariaDB and we are using Laravel's Sanctum package for authentication and authorization, also we've implemented full-text and site-wide search using ElasticSearch tool.Main purpose of this API is to serve React SPA and Native Android Application and to make calls and neccessary checks to ensure that the info sent from frontend is valid and suitable to be sent further to Central Invoice Checking SOAP API",
    image: "/images/Fiscalisation.png",
    tags: ["Laravel", "PHP", "ElasticSearch", "MariaDB", "Sanctum"],
    source: "https://github.com/nikolafreey/fiscalisation-montenegro-backend",
    visit: "https://test.postfiskal.me",
    id: 3,
  },
  {
    title: "Job Board in Laravel MVC",
    description:
      "This is an open-source job board application powered by Laravel and Tailwind CSS and Stripe (Laravel Cashier) and Laravel Breeze for Authentication. The goal of this is to let you self-host your own job board website, similar to larajobs.com or remoteok.io.",
    image: "/images/jobBoard.png",
    tags: ["Laravel", "Stripe", "MariaDB", "Laravel Breeze", "Tailwind"],
    source: "https://github.com/nikolafreey/job_board_laravel",
    visit: "https://github.com/nikolafreey/job_board_laravel",
    id: 4,
  },
  {
    title: "Python Microservices Demo",
    description:
      "Using Python microservices allows you to break up your apps into smaller parts that communicate with each other. This can make it simpler to scale the application based on the traffic. Also, the separation of concerns makes it easier to work on just one part of the app at a time.",
    image: "/images/pythonMicroservicesDjangoFlask.png",
    tags: ["Python", "Django", "Flask", "RabbitMQ", "Docker", "MySQL"],
    source:
      "https://github.com/nikolafreey/python-rabbitmq-microservices-example",
    visit:
      "https://github.com/nikolafreey/python-rabbitmq-microservices-example",
    id: 5,
  },
];

export const TimeLineData = [
  { year: 2015, text: "Started Electrical Engineering studies" },
  { year: 2018, text: "Worked as an intern and started freelancing" },
  {
    year: 2019,
    text: "Began working as Junior Full-Stack Developer in Fintech Company",
  },
  {
    year: 2020,
    text: "Started my biggest freelance project yet for Post Office of Montenegro",
  },
  { year: 2021, text: "Got promoted to Code Architect and Medior Developer" },
];
