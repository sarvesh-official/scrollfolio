import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sarvesh P",
  initials: "SP",
  url: "https://sarvesh-portfolio.vercel.app",
  location: "Punjab, India",
  locationLink: "https://www.google.com/maps/place/punjab+india",
  description:
    "Software Engineer exploring Web3, building AI solutions, and giving back to the community.",
  avatarUrl: "/me.png",
  skills: [
    "Java",
    "C++",
    "Python",
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Spring Boot",
    "Git",
    "Docker",
    "AWS S3",
    "Pinecone",
    "MongoDB",
    "Convex",
    "Figma",
    "REST APIs",
    "OOP",
    "Data Structures & Algorithms",
    "DBMS",
    "Operating Systems",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sarveshjaiofficial@gmail.com",
    tel: "+91-8220149324",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sarvesh-official",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sarvesh--p/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/sarvesh-official",
        icon: Icons.globe,
        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@LearnWithSarvee",
        icon: Icons.youtube,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sarvesh_Off",
        icon: Icons.x,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:sarveshjaiofficial@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Lowe's",
      href: "https://www.lowes.com",
      badges: [],
      location: "Remote / Bengaluru, India",
      title: "Software Engineering Intern",
      logoUrl: "/lowes.png",
      start: "Aug 2024",
      end: "Present",
      description:
        "Increased Sonar test coverage by 60% across a core repository by writing unit and integration tests. Fixed high-priority Snyk and Sonar bugs/vulnerabilities, improving system reliability and security. Currently working on an event correlation task to enhance observability. Worked onsite in Bengaluru for 2 months, collaborating closely with engineering teams.",
    },
    {
      company: "TrueHealthSearch",
      href: "https://truehealthsearch.com",
      badges: [],
      location: "Remote",
      title: "Freelance Full-Stack Developer & UI Designer",
      logoUrl: "/ths.png",
      start: "Dec 2023",
      end: "Jun 2024",
      description:
        "Built a user-friendly frontend with Figma, Next.js, and TypeScript to improve engagement. Migrated architecture from React (Vite) to Next.js 14, reducing build complexity and improving performance by 25%. Developed an AI-powered medical chatbot (ChatGPT API) with ICD-10 integration, reducing manual lookup time by 30%.",
    },
  ],
  education: [
    {
      school: "Lovely Professional University",
      href: "https://www.lpu.in",
      degree: "Bachelor of Technology in Software Product Engineering",
      logoUrl: "/lpu.png",
      start: "Aug 2023",
      end: "May 2027",
    },
  ],
  projects: [
    {
      title: "Piper AI",
      href: "https://piper.sarvee.dev/",
      dates: "Jan 2025 – May 2025",
      active: true,
      description:
        "AI-powered learning assistant that generates personalized courses and quizzes. Integrated Gemini 2.5 for conversational reasoning and document understanding. Used Google Docs API for OCR-based document ingestion and processing. Implemented chat with documents, secure file uploads, and vector search with Pinecone.",
      technologies: [
        "Next.js",
        "LangChain",
        "MongoDB",
        "AWS S3",
        "Gemini 2.5",
        "Google Docs API",
        "Pinecone",
        "OCR",
      ],
      links: [
        {
          type: "Website",
          href: "https://piper.sarvee.dev/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/Piper",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/piper.png",
      video: "",
    },
    {
      title: "Roomble",
      href: "https://www.roomble.app/",
      dates: "2025 – Building",
      active: true,
      description:
        "Community-driven chat app where users join via room numbers. Features real-time messaging with Socket.io, user authentication, and room-based conversations. Backend built with Node.js and Express, with video calling integration using WebRTC. Includes responsive UI with dark/light theme support and message persistence.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express",
        "Socket.io",
        "WebRTC",
        "MongoDB",
        "Tailwind CSS",
        "TypeScript",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.roomble.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/Roomble",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/roomble.png",
      video: "",
    },
    {
      title: "Cloudfuse",
      href: "https://cloudfuse.vercel.app/",
      dates: "Jan 2024 – Aug 2024",
      active: true,
      description:
        "Built a secure, real-time file collaboration tool with sharing and advanced search features.",
      technologies: [
        "Next.js",
        "Convex",
        "Tailwind CSS",
        "Real-time collaboration",
        "File sharing",
        "Advanced search",
      ],
      links: [
        {
          type: "Website",
          href: "https://cloudfuse.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/cloudfuse",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/cloudfuse.png",
      video: "",
    },
    {
      title: "SmartTube",
      href: "https://smart-tube.vercel.app/",
      dates: "Feb 2025 – Jul 2025",
      active: true,
      description:
        "YouTube content organizer with intelligent search and playlist restructuring.",
      technologies: [
        "Next.js",
        "MongoDB",
        "YouTube API",
        "Intelligent search",
        "Playlist management",
      ],
      links: [
        {
          type: "Website",
          href: "https://smart-tube.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/smart-tube",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/smart-tube.png",
      video: "",
    },
    {
      title: "Kill Switch (VS Code Extension)",
      href: "https://marketplace.visualstudio.com/items?itemName=Sarvesh.kill-switch&ssr=false#review-details",
      dates: "2024",
      active: true,
      description:
        "Developed lightweight extension to kill processes by port directly from VS Code. 60+ downloads on VS Code Marketplace.",
      technologies: [
        "JavaScript",
        "VS Code API",
        "Node.js",
        "Process management",
      ],
      links: [
        {
          type: "Marketplace",
          href: "https://marketplace.visualstudio.com/items?itemName=sarvesh-official.kill-switch",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/kill-switch",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/tutorial.gif",
      video: "",
    },
    {
      title: "Medium Clone",
      href: "https://medium-prisma.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "Developed a basic implementation of Medium, allowing users to post and view blogs with custom authentication.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PostgreSQL",
        "Hono",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://medium-prisma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/medium",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/medium.png",
      video: "",
    },
    {
      title: "TempChat",
      href: "https://react-chat-app-n10q.onrender.com/",
      dates: "2024",
      active: true,
      description:
        "The app allows multiple users to join and chat together, but since it is a temporary chat, messages are not stored in a database.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
      ],
      links: [
        {
          type: "Website",
          href: "https://react-chat-app-n10q.onrender.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/temp-chat",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/temp-chat.png",
      video: "",
    },
    {
      title: "Color Mix",
      href: "https://colormix.vercel.app/",
      dates: "2024",
      active: true,
      description:
        "A color scheme generator made with React. Features include options to lock colors, choose specific colors, and download color schemes. Designed to inspire creativity and streamline the design process for designers, developers, and artists.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://colormix.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/sarvesh-official/color-mix",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/color-mix.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Web-A-Thon",
      dates: "2024",
      location: "Online",
      description:
        "Built AIOT (All in One Traveler), a comprehensive travel app designed to simplify and enhance travel experiences. The app offers everything needed to plan, book, and enjoy trips.",
      image: "/lpu.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://aiotraveller.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sarvesh-official/AIOT",
        },
      ],
    },
    {
      title: "Hackverse",
      dates: "2024",
      location: "Online",
      description:
        "Created DockerX, a Docker Management Dashboard built with Express, React, and Node.js to manage and monitor Docker containers running on Linux systems. We became one among the winners for this project.",
      image: "/lpu.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sarvesh-official/DockerX",
        },
      ],
    },
    {
      title: "Code-A-Haunt",
      dates: "2024",
      location: "University",
      description:
        "First hackathon participation. Built TrackIt, a project that empowers shoppers to make smarter purchasing decisions. Achieved top 10 finalist position out of 200 projects in intra-university hackathon.",
      image: "/lpu.png",
      win: "Top 10 Finalist",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://track-it-up.vercel.app/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/sarvesh-official/TrackIt",
        }
      ],
    },
  ],
  summary: "I'm pursuing **Software Product Engineering** at Lovely Professional University. I've mentored **800+ students and police officers** through programming and cybersecurity sessions, and gained valuable experience from [3+ hackathons](/#hackathons). I enjoy **sharing knowledge**, building **AI-powered solutions**, and **giving back to the community**.",
  achievements: [
    {
      title: "Finalist at HackVerse 2024 (MERN Stack)",
      description: "Achieved finalist position in HackVerse 2024 hackathon using MERN Stack technologies.",
    },
    {
      title: "Winner of AWS Young Builder for Top 100 Project (2024)",
      description: "Recognized as AWS Young Builder with project ranking in top 100.",
    },
    {
      title: "1st Place in Kite Robotics Competition (App Development)",
      description: "Won first place in app development category at Kite Robotics Competition.",
    },
    {
      title: "SSVM Studentpreneur 2022: Top 10 student entrepreneurs",
      description: "Selected as one of the top 10 student entrepreneurs in SSVM Studentpreneur program.",
    },
    {
      title: "Hall of Fame in Bugcrowd for vulnerability discovery",
      description: "Achieved Hall of Fame recognition in Bugcrowd for discovering security vulnerabilities.",
    },
    {
      title: "50-day LeetCode streak with 270+ problems solved",
      description: "Maintained a consistent 50-day LeetCode streak and solved 270+ problems across platforms.",
    },
    {
      title: "YouTube channel Learn With Sarvee with 2K+ subscribers",
      description: "Created and maintained YouTube channel publishing tech content with over 2K subscribers.",
    },
  ],
  certifications: [
    {
      title: "WCHL Global Hackathon 2025",
      issuer: "ICP HUB India",
      date: "Aug 2025",
      credentialId: undefined,
      skills: ["Web3"],
      url: undefined,
      image: "https://media.licdn.com/dms/image/v2/D560BAQHSpZIrplhZVw/company-logo_100_100/company-logo_100_100/0/1738662069487/crewsphere_logo?e=1759968000&v=beta&t=_HBiMCwqM__pjW9VpNuv_MTYXY5O9H_5ySS8ShwoZm0",
      certificateImage: "/certificates/wchl-participation-certificate.jpg",
    },
    {
      title: "WCHL Qualified for the National Round",
      issuer: "ICP HUB India",
      date: "Aug 2025",
      credentialId: undefined,
      skills: ["Web3"],
      url: undefined,
      image: "https://media.licdn.com/dms/image/v2/D560BAQHSpZIrplhZVw/company-logo_100_100/company-logo_100_100/0/1738662069487/crewsphere_logo?e=1759968000&v=beta&t=_HBiMCwqM__pjW9VpNuv_MTYXY5O9H_5ySS8ShwoZm0",
      certificateImage: "/certificates/wchl-national-round.jpg",
    },
    {
      title: "Introduction to LangGraph",
      issuer: "LangChain",
      date: "Jul 2025",
      credentialId: "2oxmmp9boy",
      skills: ["LangChain"],
      url: "https://academy.langchain.com/certificates/2oxmmp9boy",
      image: "https://media.licdn.com/dms/image/v2/D560BAQGHpVAp9i7n5Q/company-logo_100_100/B56ZcyzK7qHgAQ-/0/1748903964692/langchain_logo?e=1759968000&v=beta&t=N0JznZEiUBqV_T17OowWw_OfIN3Y0lnWOHWbzKrAzGQ",
      certificateImage: undefined,
    },
    {
      title: "Postman API Fundamentals Student Expert",
      issuer: "Postman",
      date: "Mar 2025",
      credentialId: "67e45a88fe5e1b202a553569",
      skills: ["Postman API"],
      url: "https://badgr.com/backpack/badges/67e45a88fe5e1b202a553569",
      image: "https://media.licdn.com/dms/image/v2/C560BAQFf8sH83foEVg/company-logo_100_100/company-logo_100_100/0/1654794308958/postman_platform_logo?e=1759968000&v=beta&t=G8U8F_1ruFI2TAtALpdbSNVLzw9_xNAmR2cqiQMOfO0",
      certificateImage: undefined,
    },
    {
      title: "Certified AppSec Practitioner",
      issuer: "The SecOps Group",
      date: "Feb 2024",
      credentialId: "8363869",
      skills: ["Penetration Testing"],
      url: "https://secops.group/certificate-validation/",
      image: "https://media.licdn.com/dms/image/v2/D4D0BAQGJvXkjZCWEJA/company-logo_100_100/company-logo_100_100/0/1718360904522/secops_group_logo?e=1759968000&v=beta&t=ybASMoyjM69EtxcNuZvJf3rxRX2g1oOSxmrC-y6bpLg",
      certificateImage: undefined,
    },
    {
      title: "FSWD (Full Stack Web Development)",
      issuer: "codedamn",
      date: "Jan 2024",
      credentialId: undefined,
      skills: ["Full-Stack Development"],
      url: "https://codedamn.com/certificate/verify/a894329479ada81dfa627d62c8445b4a75229b20",
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQGafuen6FbNnA/company-logo_100_100/company-logo_100_100/0/1630536891944/codedamn_logo?e=1759968000&v=beta&t=A2M-m9yzdkCADcp2CAm3AL3VYgKtzoM6eXpH4Yb0uLs",
      certificateImage: undefined,
    },
    {
      title: "Google Digital Marketing Course",
      issuer: "Google",
      date: "Jan 2022",
      credentialId: undefined,
      skills: undefined,
      url: undefined,
      image: "https://media.licdn.com/dms/image/v2/C4D0BAQHiNSL4Or29cg/company-logo_100_100/company-logo_100_100/0/1631311446380?e=1759968000&v=beta&t=jnIPgQh2pNFZqcdjrYShazVuIbOZFNPBN3SVS0xecUI",
      certificateImage: undefined,
    },
    {
      title: "Certified Ethical Hacker (CEH)",
      issuer: "TCM Security",
      date: "Nov 2020",
      credentialId: undefined,
      skills: undefined,
      url: undefined,
      image: "https://media.licdn.com/dms/image/v2/C560BAQFdkbctaxZDaA/company-logo_100_100/company-logo_100_100/0/1634049884027/tcm_security_inc_logo?e=1759968000&v=beta&t=xFbmUmgTFVFM008VqrD-eplQErCZFAaQfp3alfIjHAQ",
      certificateImage: undefined,
    },
  ],
} as const;
