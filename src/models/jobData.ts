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
    roleDescription: "App Architect/ Tech Lead",
    specialization: "Tech stack maintenance & development",
    experienceScope:
      "Participate pre-sales. Application architecture design/support/implement. JS unit team coaching/leading & mentoring. Define stack tools/frameworks/code standards. Arrange developer learning path and grade assessments. Commercial project audit and support. Development of Internal tools/modules/approaches. Mentoring js unit team leads. Define inter-unit process collaboration.",
    tools: "Atlassian, Gitlab-ci, Docker, Jenkins"
  },
  {
    customer: "SolidOpinion",
    year: 2017,
    period: "10.2015 - 10.2017",
    duration: "2y",
    roleDescription: "Frontend Architect & Team lead",
    specialization: "Massive commentary and monetization platform",
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
    roleDescription: "Team leader, Chief programmer, UI/UX expert",
    specialization: "Medical professional and client collaboration platform",
    experienceScope:
      "Maintain product development from scratch. Analysis and planning. Defining tech scope. Sprint planning. JobItem story writing task splitting and acceptance. Api development.",
    tools:
      "MongoDB, Node-js, Express, React, Flux, Lodash, Gulp, Mocha, Twitter-Bootstrap, AW, Codeship"
  },
  {
    customer: "Elastic.io",
    year: 2015,
    period: "09.2014 - 03.2015",
    duration: "6m",
    roleDescription: "full stack javascript developer",
    specialization: "full-stack cloud service integration platform",
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
    roleDescription: "senior software developer",
    specialization: "full-stack r&d projects",
    experienceScope: "social media data mining r&d",
    tools: "Node.js, Twitter-bootstrap, React "
  },
  {
    customer: "Private investor",
    year: 2014,
    period: "11.2011 - 3.2014",
    duration: "2y 4m",
    roleDescription: "Project manager, developer, analyst",
    specialization:
      "CRM+ERP+CMS constructor that allows visually simulate arbitrary data structures and business processes. The system allows you to run from one database any shops, websites, CRM.",
    experienceScope: "Fin tech Software Architecture",
    tools:
      "Ruby, MongoDB, Require-js, Node-js, jQuery, CoffeeScript, Styl, Twitter-Bootstrap"
  },
  {
    customer: "RinTown",
    year: 2011,
    period: "11.2009 - 11.2011",
    duration: "2y",
    roleDescription: "Project manager, developer, architect",
    specialization:
      "Automation of the enterprises operating in the field of control securities flow. Original scalable management accounting of securities transactions across the group of companies from several countries.",
    experienceScope:
      'Design and development "from scratch" system for all operational accounting cycle securities turnover',
    tools: "1c, Rational Rose"
  },
  {
    customer: 'Group of companies "Oil and Gas Systems"',
    year: 2008,
    period: "11.2006 - 11.2008",
    duration: "2y",
    roleDescription:
      "Project manager, team lead. Manage local and remote development team. Analysis and design of the system.",
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
    roleDescription: "Business Analyst, Application Architector, developer",
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
    roleDescription: "Analyst, developer, team lead, project manager",
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
    roleDescription: "developer",
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
    roleDescription: "trainee",
    specialization: "game development, arcade, artificial intelligence r&d",
    experienceScope:
      "Privilege of working in the first Ukrainian company that after the release of a successful product left all the staff and their families to Australia 8)",
    tools: "С++, IBM i386"
  }
];
