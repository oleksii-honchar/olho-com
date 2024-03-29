import moment from "moment";

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

const currentJobStart = moment("2023-04-16");
const currentDate = moment().endOf("month");
const currentJobDuration = currentDate.diff(currentJobStart, "months") + 1;

export const jobData: Job[] = [
  {
    customer: "Taxfix",
    year: 2023,
    period: "4.2023 - now",
    duration: `~${currentJobDuration}m`,
    roleDescription: "Senior Staff Engineer",
    specialization: `Achievements:
        <ul>
        <li>Discovered and analyzed technical initiatives, identifying opportunities for improvement and growth</li>
        <li>Designed Tax Product platform solutions and processed RFCs, ensuring effective and compliant solutions</li>
        <li>Developed and supported the "Internal Development Platform," enabling efficient and streamlined workflows</li>
        <li>Led engineering teams in improving "Development Experience" tooling and practices, enhancing productivity and quality</li>
        <li>Collaborated closely with multiple engineering teams, providing mentoring and support to drive process and solution improvements</li>
        </ul>`,
    experienceScope: "Software Architecture & Engineering",
    tools:
      "Google Kubernetes Engine (GKE), Solution Architecture, Amazon Web Services (AWS), TypeScript, Continuous Integration and Continuous Delivery (CI/CD), React.js, Docker, PostgreSQL, Domain-Driven Design (DDD), Node.js, Nginx, Terraform, CDKTF",
  },
  {
    customer: "Ringcentral",
    year: 2020,
    period: "11.2020 - 3.2023",
    duration: `2y 4m`,
    roleDescription: "Senior Staff Engineer",
    specialization: `Achievements:
      <ul>
      <li>Developed and designed a change management strategy and plan according to the ACMP Standard, based on the company's strategic goals for a Transformation plan. Applied ADKAR and PPT model for change implementation</li>
      <li>Defined technical skills using  SFIA framework, and developing performance management in the company</li>
      <li>Successfully completed "Business Continuity and Recovery" initiative in response to the Russia-Ukraine conflict in February 2022, including the migration of VPN solutions infrastructure and critical on-premise HW to the cloud, UA office blackout tests to train teams and check remediation scenarios, and EU office preparation to provide necessary services</li>
      <li>Successfully drove, led, and managed various Security and IT initiatives, including onboarding processes to new vendors, preparing employee HW tiers, conducting new MFA (2FA) solution research and development, managing company subscriptions, services accounting, and renewals, budgeting for email and accounts, IT and security, and IT infrastructure design for the EU office</li>
      <li>Successfully prepared various IT and security standards, procedures, policies, and documentation in collaboration with the IT and security teams, including Compliance Assessment & Violation Policy, Host Ownership And Governance Policy, Account Management Policy, etc</li>
      <li>Successfully designed and managed the implementation of the DevOps inspired complex CI/CD strategy with multiple pipeline builder jobs for the "team chat application combined with video conferencing," which included building custom Jenkins images, dynamically inserting updated Jenkins jobs to the container using JJB, and provisioning custom Windows/MacOS/Ubuntu Jenkins builders with related instruction for every operating system</li>
      <li>Successfully designed and implemented a working prototype of an extension for the core product of an international UCaaS platform - team chat application combined with video conferencing. Oleksii successfully isolated internal video services and decoupled them to have separate customizable application builds for different clients, and the main technology stack was JavaScript, React.js, Node.js, and Electron.js</li>
      </ul>
    `,
    experienceScope:
      "Solution and application design in a multi component enterprise environment. Development process audit and transformation for the set of teams. DevOps and development best practices implementation. Multi component and multi team dependency tracking.",
    tools:
      "AWS, Windows, OSX, Docker, Jenkins, Nginx, PostgreSQL, Atlassian, Javascript, Typescript, Node.js, C#, React, Lerna, UCaaS, AWS Cloud, PPT, GROW, 9Grid, SMART, Agile, Polarity Management, ACMP, SFIA",
  },
  {
    customer: "AgileEngine",
    year: 2020,
    period: "2.2020 - 10.2020",
    duration: "8m",
    roleDescription: "Tech Lead",
    specialization:
      "Web application architecture design/support/implementation. Development team leading and mentoring.",
    experienceScope:
      "Participate pre-sales. Application architecture design/support/implement. Define stack tools/frameworks. Commercial project audit and support. Digital media publishing platform support and audit. Proximity marketing platform design and implementation.цр",
    tools: "AWS, Docker, Nginx, Mongo, PostgreSQL, Atlassian, Javascript, Typescript, Node.js, React, Lerna",
  },
  {
    customer: "Ciklum",
    year: 2020,
    period: "10.2017 - 1.2020",
    duration: "2y 4m",
    roleDescription: "Head Of Unit / Application Architect/ Tech Lead",
    specialization:
      "JS unit leadership, projects bootstrap/supervision, architecture design/validation. Architecture design and POC implementation for massive market-place using micro-frontend approach with server-side rendering. Architecture design and POC implementation for document management system with form designer and workflow for SaaS platform.",
    experienceScope:
      "Participate pre-sales. Application architecture design/support/implement. JS unit team coaching/leading & mentoring. Define stack tools/frameworks/code standards. Arrange developer learning path and grade assessments. Commercial project audit and support. Development of Internal tools/modules/approaches. Mentoring js unit team leads. Define inter-unit process collaboration.",
    tools:
      "AWS, Docker, Nginx. Mongo, PostgreSQL, Gitlab-ci, Atlassian, Docker, Jenkins, Javascript, Typescript, Node.js, React, Angular, Lerna",
  },
  {
    customer: "SolidOpinion",
    year: 2017,
    period: "10.2015 - 10.2017",
    duration: "2y",
    roleDescription: "Frontend Architect & Team lead",
    specialization:
      "Massive commentary and monetization platform. Family of micro-frontend commenting applications for integration in digital media portals. Text ads and monetization platform. JS team leadership and mentoring.",
    experienceScope:
      "Analysis and planning. Defining tech stack. Single page app development, microservices, component architecture, team coaching & mentoring.",
    tools:
      "React/Redux | Angular2/ngrx, ES6(Babel/Typescript), Webpack, Lodash, Jest, CouchBase, MongoDB, Node-js, Express, Docker, AWS",
  },
  {
    customer: "SiftWisdom",
    year: 2015,
    period: "03.2015 - 08.2015",
    duration: "6m",
    roleDescription: "Team Lead, Chief programmer, UI/UX expert",
    specialization:
      "Medical professional and client collaboration platform. It is a social network for consultation and recommendation services. Both medical professionals and clients are able to get paid advice. Professionals have ratings, comments and forums, screening and network of colleagues. FE and BE team leadership and mentoring.",
    experienceScope:
      "Maintain product development from scratch. Analysis and planning. Defining tech scope. Sprint planning. Task management and decomposition. REST API development.",
    tools: "MongoDB, Node-js, Express, React, Flux, Lodash, Gulp, Mocha, Twitter-Bootstrap, AW, Codeship",
  },
  {
    customer: "DataArt",
    year: 2015,
    period: "03.2014 - 3.2015",
    duration: "1y",
    roleDescription: "Senior Software Engineer",
    specialization: "full-stack r&d projects",
    experienceScope:
      "Social media data mining. Design and deploy node.js microservice based data-crawlers. Build web interface for data mining and analytics",
    tools: "Node.js, Twitter-bootstrap, React ",
  },
  {
    customer: "Private investor",
    year: 2014,
    period: "11.2011 - 3.2014",
    duration: "2y 4m",
    roleDescription: "Project Manager, Senior Software Engineer, Business Analyst",
    specialization:
      "CRM+ERP+CMS constructor that allows visually construct arbitrary data structures and business processes. The system allows you to run from one database to any shops, websites, CRM. SaaS business model.",
    experienceScope:
      "Fintech Software Architecture. Business analysis and process design. Domain models definition and database design. Business logic implementation and CI/CD. Web application design & implementation.",
    tools: "Ruby, MongoDB, Require-js, Node-js, jQuery, CoffeeScript, Styl, Twitter-Bootstrap",
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
    tools: "1c, Rational Rose",
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
    tools: "1c, Rational Rose",
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
    tools: "1c, Rational Rose",
  },
  {
    customer: "Account",
    year: 2004,
    period: "11.2001 - 06.2004",
    duration: "2y 7m",
    roleDescription: "Business Analyst, Software Engineer, Team Lead, Project Manager",
    specialization:
      'Project management, development and implementation of automated ERP system on a platform of "1C: Enterprise", the development of web-content, design, staff training',
    experienceScope: "Fintech, design and development of integrated ERP of a large agricultural company.",
    tools: "1c, PHP, MySQL, JS, CSS",
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
    tools: "Turbo Pascal, IBM i386",
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
    tools: "С++, IBM i386",
  },
];
