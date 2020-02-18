export interface Job {
  customer: string;
  year: number;
  period: string;
  duration: string;
  roleDescription: string;
  specialization: string;
  experienceScope: string;
  tools: string;
}

export const jobData: Job[] = [
  {
    customer: "Ciklum",
    year: 2019,
    period: "10.2017 - 10.2019",
    duration: "2y",
    roleDescription: "Application Architect/ Tech Lead",
    specialization: "JS unit leadership, projects bootstrap/supervision, architecture design/validation. Architecture design and POC implementation for massive market-place using micro-frontend approach with server-side rendering. Architecture design and POC implementation for document management system with form designer and workflow for SaaS platform.",
    experienceScope:
      "Participate pre-sales. Application architecture design/support/implement. JS unit team coaching/leading & mentoring. Define stack tools/frameworks/code standards. Arrange developer learning path and grade assessments. Commercial project audit and support. Development of Internal tools/modules/approaches. Mentoring js unit team leads. Define inter-unit process collaboration.",
    tools: "AWS, Docker, Nginx. Mongo, PostgreSQL, Gitlab-ci, Atlassian, Docker, Jenkins, Javascript, Typescript, Node.js, React, Angular, Lerna"
  },
  {
    customer: "SolidOpinion",
    year: 2017,
    period: "10.2015 - 10.2017",
    duration: "2y",
    roleDescription: "Frontend Architect & Team lead",
    specialization: "Massive commentary and monetization platform. Family of micro-frontend commenting applications for integration in digital media portals. Text ads and monetization platform.",
    experienceScope:
      "Analysis and planning. Defining tech stack. Single page app development, microservices, component architecture, team coaching & mentoring.",
    tools:
      "React/Redux | Angular2/ngrx, ES6(Babel/Typescript), Webpack, Lodash, Jest, CouchBase, MongoDB, Node-js, Express, Docker, AWS"
  },
  {
    customer: "SiftWisdom",
    year: 2015,
    period: "03.2015 - 08.2015",
    duration: "6m",
    roleDescription: "Team Lead, Chief programmer, UI/UX expert",
    specialization: "Medical professional and client collaboration platform. It is a social network for consultation and recommendation services. Both medical professionals and clients are able to get paid advice. Professionals have ratings, comments and forums, screening and network of colleagues.",
    experienceScope:
      "Maintain product development from scratch. Analysis and planning. Defining tech scope. Sprint planning. Task management and decomposition. Api development.",
    tools:
      "MongoDB, Node-js, Express, React, Flux, Lodash, Gulp, Mocha, Twitter-Bootstrap, AW, Codeship"
  },
  {
    customer: "Elastic.io",
    year: 2015,
    period: "09.2014 - 03.2015",
    duration: "6m",
    roleDescription: "Full Stack  Javascript Engineer",
    specialization: "Cloud service integration platform. SaaS platform which allows using predefined connectors transform data/events from one source to another. E.g. ebay orders to Magento CMS, Wallmart analytics to SalesForce, etc. Buit using microservices in AWS with overall data encryption.",
    experienceScope:
      "Intranet communication messages flow encryption, s3 file storage encryption. Custom API to custom API data flow configuration and implementation. Ember.js based application extension. ",
    tools:
      "MongoDB, Node-js, Ember.js, Underscore/Lodash, Grunt, Jasmine, Twitter-Bootstrap, Librato, Coveralls, Codeship, Heroku, Github."
  },
  {
    customer: "DataArt",
    year: 2014,
    period: "03.2014 - 9.2014",
    duration: "6m",
    roleDescription: "Senior Software Engineer",
    specialization: "full-stack r&d projects",
    experienceScope: "Social media data mining. Design and deploy node.js microservice based data-crawlers. Build web interface for data mining and analytics",
    tools: "Node.js, Twitter-bootstrap, React "
  },
  {
    customer: "Private investor",
    year: 2014,
    period: "11.2011 - 3.2014",
    duration: "2y 4m",
    roleDescription: "Project Manager, Senior Software Engineer, Business Analyst",
    specialization:
      "CRM+ERP+CMS constructor that allows visually construct arbitrary data structures and business processes. The system allows you to run from one database to any shops, websites, CRM. SaaS business model.",
    experienceScope: "Fintech Software Architecture. Business analysis and process design. Domain models definition and database design. Business logic implementation and CI/CD. Web application design & implementation.",
    tools:
      "Ruby, MongoDB, Require-js, Node-js, jQuery, CoffeeScript, Styl, Twitter-Bootstrap"
  },
  {
    customer: "RinTown",
    year: 2011,
    period: "11.2009 - 11.2011",
    duration: "2y",
    roleDescription: "Project Manager, Senior Software Engineer, Application Architect",
    specialization:
      "Automation of the enterprises operating in the field of control securities flow. Original scalable management accounting of securities transactions across the group of companies from several countries.",
    experienceScope:
      'System design and development "from scratch" for all operational accounting cycle securities turnover. Business analysis and process design. Domain models definition and database design. Business logic implementation and CI/CD. Document flow and forms design and optimisation.',
    tools: "1c, Rational Rose"
  },
  {
    customer: 'Group of companies "Oil and Gas Systems"',
    year: 2008,
    period: "11.2006 - 11.2008",
    duration: "2y",
    roleDescription:
      "Project Manager, Team Lead. Manage local and remote development team. Analysis and design of the system.",
    specialization:
      " Development of subsystems for operational records of a large enterprise. Multi corporate and multivariate account. Managing a distributed team of developers. Conducting technical and design documentation. Simulation of logic systems and business processes of the enterprise.",
    experienceScope:
      "The product had to be workable and integrable in the absence of total approved process models. As a result, the subsystem turned flexible and scalable with an acceptable level of abstraction and complexity.",
    tools: "1c, Rational Rose"
  },
  {
    customer: "Transnavikom",
    year: 2006,
    period: "06.2004 - 09.2006",
    duration: "2y",
    roleDescription: "Business Analyst, Application Architect, Software Engineer",
    specialization:
      'Integrated automation of the group of companies with branches. Base Platform - "1c Enterprise 7.7." Organization of the system for a full two-way exchange of information within the system objects having different configurations.',
    experienceScope:
      "The system included several autonomous robots that receive and process data from remote offices and loaded into the consolidated database via the Internet.",
    tools: "1c, Rational Rose"
  },
  {
    customer: "Account",
    year: 2004,
    period: "11.2001 - 06.2004",
    duration: "2y 7m",
    roleDescription: "Business Analyst, Software Engineer, Team Lead, Project Manager",
    specialization:
      'Project management, development and implementation of automated ERP system on a platform of "1C: Enterprise", the development of web-content, design, staff training',
    experienceScope:
      "Fintech, design and development of integrated ERP of a large agricultural company.",
    tools: "1c, PHP, MySQL, JS, CSS"
  },
  {
    customer: "Medical University of Lugansk",
    year: 2000,
    period: "08.1999 - 06.2000",
    duration: "10m",
    roleDescription: "Software Engineer",
    specialization: "development of medical expert systems, database",
    experienceScope: `The system was able to learn to put the correct diagnosis by selected methodology. And  had never been automated until then. And also had a graphical user interface in text mode, similar to the standard library “turbo-vision”, but totally re-written using OOP.{new-line}
    Development of the original single-file databases and libraries for text interface, including a map of all the basic elements of forms and input fields.`,
    tools: "Turbo Pascal, IBM i386"
  },
  {
    customer: "«Meridian 98»",
    year: 1999,
    period: "05.1996 - 07.1999",
    duration: "3y 2m",
    roleDescription: "Trainee",
    specialization: "game development, arcade, artificial intelligence r&d",
    experienceScope:
      "Privilege of working in the first Ukrainian company that after the release of a successful product left all the staff and their families to Australia 8)",
    tools: "С++, IBM i386"
  }
];
