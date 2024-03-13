import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  shane,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Shane Young Kizito",
  initials: "SK",
  location: "Nairobi , Kenya, GMT",
  locationLink: "https://www.google.com/maps/place/Nairobi",
  about:
  "Full Stack Engineer focused on building products with extra attention to detail",
summary:`Results-driven Senior Front-End Developer with a proven record of crafting exceptional web and mobile applications. Expert at translating design concepts into intuitive interfaces with a passion for high-quality code. Proficient in React Native, React.js, Vue, Material UI, Tailwind, Kotlin, and CSS. Experienced in optimizing CI/CD pipelines to stay ahead of industry trends. Excellent communicator and collaborator, thriving in cross-functional teams. Elevate your projects with my strategic mindset and technical prowess.`,
  avatarUrl:'https://media.licdn.com/dms/image/D4D03AQGThe4wdBcWXw/profile-displayphoto-shrink_400_400/0/1709889818554?e=1715212800&v=beta&t=ORgfZWGliRE_jLAkjOL6-mrtSGT3wrIYIN-9nxxzRyI',
    personalWebsiteUrl: "sharkfinances.substack.com",
      contact: {
  email: "shaneyoungk@gmail.com",
    tel: "+254713924165",
      social: [
        {
          name: "GitHub",
          url: "https://github.com/shanekizito",
          icon: GitHubIcon,
        },
        {
          name: "LinkedIn",
          url: "linkedin.com/in/shane-kizito-1415542a1",
          icon: LinkedInIcon,
        },
        {
          name: "X",
          url: "https://twitter.com/0x_Shark",
          icon: XIcon,
        },
      ],
  },
education: [
  {
    school: "Multimedia University of Kenya",
    degree: "Bachelors of Science in Computer Technology",
    start: "2019",
    end: "2022",
  },
  {
    school: "Nairobi School",
    degree: "Highschool",
    start: "2014",
    end: "2018",
  },
],
  work: [
    {
      company: "WayaWaya",
      link: "https://www.wayawaya.com/",
      badges: ["ON-SITE"],
      title: "Senior Full Stack Developer",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "As a Back-End Developer at WayaWaya Fintech, I drove the company's growth by facilitating seamless transactions for SMEs. My key contributions encompassed innovative API development, optimizing RESTful APIs to enhance financial integration and diminish transactional friction. I designed and implemented a scalable back-end infrastructure, guaranteeing reliability and performance during surges in transaction volumes. Through cross-functional collaboration, I actively addressed challenges, cultivating an agile development environment. Prioritizing security and compliance, I implemented robust measures to uphold industry standards and safeguard sensitive financial data. Collectively, my efforts played a pivotal role in elevating WayaWaya's transaction capabilities and promoting financial inclusivity for SMEs. Technologies:Django , Gitlab,PostgresSQL,Docker, RESTFUL API Design,AWS,GIT",
    },
    {
      company: "DR. Mums Kenya",
      link: "http://drmumskenya.com/",
      badges: ["Remote"],
      title: "Front end developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
        "As a Web Developer with a focus on user-centric design, security, and performance, I Led the creation of Dr.Mums Kenya site, optimizing it for doctor-parent community needs. Leveraged React.js, CSS, and Material UI for intuitive interfaces. Implemented SSL for security, hosted on Google Cloud for reliability. Introduced community features and marketplace, enhancing user experience and fostering a supportive ecosystem. Technologies: React, TypeScript,Boostrap",
    },
    {
      company: "Littlegig",
      link: "https://youtu.be/pX3iW_mgXXw?si=EBFhluSl1rtV_8q",
      badges: ["Remote"],
      title: "Android developer",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2021",
      description:
        "In my role as Technical Lead at LittleGig, I orchestrated the rapid growth of our ticket reservation system, achieving 3000+ users in just three months. Leading the cross-platform development for both iOS and Android, I ensured a seamless experience, leveraging advanced technologies like React Native. Scalability was a strategic priority, with a focus on maintaining optimal performance amid user surges. Guiding an agile development team, I fostered a culture of innovation, propelling LittleGig to the forefront of the entertainment app landscape. Beyond efficient coding, my emphasis on data-driven decision-making resulted in an app that not only functioned seamlessly but resonated with users, enhancing engagement and conversion rates. As I explore new opportunities, I bring a wealth of experience dedicated to driving technological excellence and user-centric innovation.",
    },
    {
      company: "Uproot real estate",
      link: "",
      badges: ["Remote"],
      title: "Blockchain Developer",
      logo: NSNLogo,
      start: "02/2020",
      end: "06/2012",
      description: "As a Blockchain Developer at an innovative real estate startup, I played a pivotal role in revolutionizing home ownership by enabling clients to purchase tokenized ownership through our cutting-edge blockchain solution. Specializing in Ethereum-based Layer 2 technology, specifically ZKSync, I crafted robust code in Solidity, React.js, Node.js, and MongoDB. Remarkably, our dynamic team shipped the MVP in a mere 2 months, showcasing not just the agility but the commitment to excellence. In this groundbreaking venture, I established best coding practices and pioneered the setup of a CI/CD pipeline, bringing efficiency and reliability to a nascent industry. Thrilled to be at the forefront of reshaping real estate through blockchain technology.",
    },
  ],
    skills: [
      "React Native",
      "React",
      "Java",
      "Node.js",
      "Python",
      "Graphql",
      "Redis",
      "MongoDB",
      "Express.js",
      "Webpack",
      "RestFul APIs",
      "Typescript",
      "Tailwind",
      "Agile Nethodology",
      "Responsive Design",
      "Test Automation",

    ],
      projects: [
        {
          title: "benkikoNFT",
          techStack: [
            "Side Project",
            "TypeScript",
            "React.js",
            "Vite",
            "GraphQL",
            "Tailwind"
          
          ],
          description: "A platform for painting artists to sell their work in digital copy using blockchain tech",
          logo: ConsultlyLogo,
          link: {
            label: "BenkikoNFT",
            href: "https://benkikonft.netlify.app/",
          },
        },
        {
          title: "Neptunex",
          techStack: ["Side Project", "TypeScript", "Next.js","Material UI"],
          description:
            "Invest in stocks, options, and ETFs on the user friendly Broker exchange.",
          logo: MonitoLogo,
          link: {
            label: "Neptunex",
            href: "https://neptunexx.netlify.app/",
          },
        },
        {
          title: "Fleexed",
          techStack: ["Side Project", "Next.js", "Tailwind","Material UI","Node.js","Express.js","Socket.io"],
          description:
            "🚀 Welcome to our open-source remote work marketplace project on GitHub! Our stack includes Node.js, Express.js, MongoDB, and Mongoose, powering robust back-end operations. Join our passionate community of contributors to shape the future of remote work – your expertise can drive innovation and empower users worldwide. Let's collaborate and make a difference together!",
          logo:shane,
          link: {
            label: "Fleexed",
            href: "https://github.com/shanekizito/Fleexd/tree/main",
          },
        },
        {
          title: "OnTheGo",
          techStack: ["Side Project", "React Native", "Node.js","Redis","Google cloud","Google Cloud"],
          description:
            "Introducing 'On the Go' – your ultimate events booking companion. Seamlessly book tickets, organize itineraries, and pay securely using M-PESA, all in one platform. With AI integration, your experience is personalized and optimized for convenience. Say hello to effortless event planning wherever you go",
          logo: Minimal,
          link: {
            label: "useminimal.com",
            href: "https://useminimal.com/",
          },
        }
      ],
} as const ;
