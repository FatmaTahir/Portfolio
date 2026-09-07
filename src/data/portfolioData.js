export const PORTFOLIO_DATA = {
  personal: {
    name: "Fatima Tahir",
    title: "Full Stack Software Developer",
    heroHeadline: "I build modern, scalable & user-centric web applications.",
    bio: "Full Stack Software Developer focused on building modern, scalable, and user-friendly web applications with React, C#, and .NET.",
    about: [
      "I'm a Full Stack Software Developer with hands-on experience in React, C#, and .NET. I enjoy turning ideas and real-world problems into clean, efficient, and maintainable digital solutions. From creating responsive and engaging interfaces to developing reliable backend systems and APIs, I work across the stack to bring complete applications to life.",
      "Let’s collaborate to transform ambitious ideas into powerful digital experiences!"
    ],
    email: "fatimahtahir452@gmail.com",
    github: "https://github.com/FatmaTahir",
    linkedin: "https://www.linkedin.com/in/fatima-tahir-a77182336/",
    upwork:"https://www.upwork.com/freelancers/~012f23979e2d566d86",
    resumePath: "/Fatima_Tahir_Resume.pdf"
  },
  skills: [
    {
      category: "Frontend Development",
      items: ["React.js", "Tailwind CSS", "Bootstrap", "jQuery", "Framer Motion", "HTML5", "CSS3", "JavaScript (ES6+)", "Vite", "Figma"]
    },
    {
      category: "Backend Development",
      items: [".NET 8", "ASP.NET MVC", ".NET Web API", "REST APIs", "Microservices", "ADO.NET", "SignalR", "Entity Framework", "Dapper", "RabbitMQ", "Blazor", "xUnit"]
    },
    {
      category: "Languages & Tools",
      items: ["C", "C++", "C#", "Python", "Kotlin", "SQL Server", "Docker", "Postman", "Appium", "Git", "GitHub", "VS Code", "JIRA", "Google Colab", "Jupyter Notebook"]
    },
    {
      category: "Software Engineering",
      items: ["Machine Learning", "Android Dev", "Design Patterns(GoF)", "Data Structures", "Database Design", "Computer Networks", "Algorithms", "Software Quality Engineering"]
    }
  ],
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "FentixTech",
      period: "June 2026 – August 2026",
      description: "Transformed design concepts into production-ready web applications from scratch.",
      highlights: [
        "Translated UI/UX designs into pixel-perfect, interactive web applications built completely from the ground up.",
        "Engineered fully responsive interfaces to ensure flawless layout adaptability across all desktop, tablet, and mobile viewports.",
        "Managed full build-to-deployment lifecycles while consistently executing 100% of project deliverables on schedule."
      ]
    },
    {
      role: "Frontend Developer",
      company: "Upwork (Freelance)",
      period: "July 2026 – Present",
      description: "Delivering modern, client-focused frontend web solutions, translating custom design requirements into performant, production-ready interfaces.",
      highlights: [
        "Translating custom client specifications and UI mockups into interactive, pixel-perfect web applications.",
        "Integrating frontend components with third-party and backend RESTful APIs to deliver dynamic user experiences.",
        "Collaborating closely with global clients to iterate on feedback, implement feature requests, and ensure on-time delivery."
      ]
    }
  ],
  projects: [
    {
      id: "scriblia",
      title: "Scriblia",
      subtitle: "Full Stack Stationery E-Commerce Platform",
      description: "Scriblia is a modern full-stack stationery e-commerce platform. It provides customers with an elegant shopping experience while offering administrators complete product and order management. The application features user authentication, shopping cart management, checkout, and a responsive UI.",
      image: "/projects/Scriblia.png",
      tags: ["React", "Tailwind CSS", "ASP.NET Core Web API", "EF Core", "SQL Server", "JWT"],
      highlights: [
        "Decoupled React frontend with state-driven dynamic routing",
        "ASP.NET Core .NET 8 Web API built on Repository concepts",
        "JWT Authentication with secure Role-Based authorization",
        "Complete transaction-driven cart, order, and product processing"
      ],
      github: "https://github.com/FatmaTahir/Scriblia",
      demo: "https://scriblia-stationery.vercel.app/",
      featured: true
    },
    {
      id: "furnitur",
      title: "FURNITUR",
      subtitle: "Furniture E-Commerce Website",
      description: "FURNITUR is a responsive furniture e-commerce website developed from a high-fidelity Figma design. It provides a complete shopping experience with product search, filtering, product details, cart management, and a multi-step checkout process.",
      image: "/projects/furnitur.jpg",
      tags: ["HTML", "CSS ", "JS", "localStorage", "Figma"],
      highlights: [
        "Complete shopping flow: filtering, detail views, and interactive cart",
        "Guided multi-step checkout workflow with client validation",
        "State persistence implemented via custom localStorage handling",
        "Fully responsive dynamic layouts built with pure standard web tech"
      ],
      github: "https://github.com/FatmaTahir/Furniture-Ecommerce-Site",
      demo: "https://furniture-ecommerce-site.vercel.app/",
      featured: true
    },
    {
      id: "taskly",
      title: "Taskly",
      subtitle: "Modern Task Management Web App",
      description: "A clean, responsive application designed for seamless daily task organization, feature-rich view filtering, and custom theme customization.",
      image: "/projects/Taskly.PNG",
      tags: ["React", "Bootstrap", "Framer Motion", "LocalStorage API"],
      highlights: [
        "Engineered full client-side CRUD operations, category tagging, and priority-based filtering with zero backend latency.",
        "Implemented complete dynamic view routing for Today, Upcoming, and Completed tasks paired with live navbar status badges.",
        "Integrated persistent dark/light theme switching and offline data state management using browser LocalStorage.",
        "Crafted polished UI interactions, slide-over drawer details, and staggered entrance list animations via Framer Motion."
      ],
      github: "https://github.com/FatmaTahir/Taskly", 
      demo: "https://taskly-web-three.vercel.app/", 
      featured: true
    },
    {
      id: "atmos",
      title: "Atmos",
      subtitle: "Live Weather Forecasting Dashboard",
      description: "A sleek, responsive weather forecasting dashboard that provides live weather metrics with high-performance UI updates.",
      image: "/projects/Atmos.jpg",
      tags: ["React", "Bootstrap", "OpenWeather API", "Framer Motion", "Lucide React"],
      highlights: [
        "Integrated asynchronous RESTful API endpoints to fetch live weather data, temperature metrics, wind speeds, and dynamic conditions.",
        "Engineered location-based search with error handling and fallback states for smooth user interaction.",
        "Built dynamic visual theme adaptations based on real-time weather metrics and time of day.",
        "Implemented animated micro-interactions and smooth page load transitions using Framer Motion."
      ],
      github: "https://github.com/FatmaTahir/Atmos-Weather-App", 
      demo: "https://atmosweather-beta.vercel.app/", 
      featured: true
    },
    {
      id: "winter-gallery",
      title: "Winter Gallery",
      subtitle: "Responsive Photography Portfolio & Masonry Showcase",
      description: "A winter-themed photography portfolio web application featuring a masonry grid, interactive full-screen lightbox preview, dynamic category filtering, and background slideshows.",
      image: "/projects/WinterGallery.PNG", 
      tags: ["HTML", "CSS", "JS", "Responsive Design"],
      highlights: [
        "Engineered a Pinterest-style masonry layout with dynamic category filtering and smooth image zoom hover animations.",
        "Built a full-screen modal Lightbox with next/previous image navigation, image captions, and click-outside closure.",
        "Created an automatic hero section background slider with soft visual overlays to maximize text legibility.",
        "Implemented custom touch-ready mobile navigation, smooth scrolling, and animated contact interfaces without external UI dependencies."
      ],
      github: "https://github.com/FatmaTahir/Winter-Gallery",
      demo: "https://dancing-kashata-e0db94.netlify.app/#home",
      featured: true
    },
    {
      id: "moodmemo",
      title: "Mood-Memo",
      subtitle: "Interactive Mood Tracking Web Application",
      description: "A modern note-taking and mindfulness app designed to let users track daily feelings with visual emoji indicators, attach daily thoughts, and manage journal entries.",
      image: null,
      tags: ["React", "Tailwind CSS", "React Router", "React Icons"],
      highlights: [
        "Designed an intuitive mood selection workflow pairing custom emoji metrics with text entry capabilities.",
        "Implemented client-side routing via React Router DOM to manage multi-page navigation between Home and Saved Notes pages.",
        "Engineered real-time entry manipulation featuring automated date stamping and single-click note deletion.",
        "Built a vibrant, fully responsive user interface utilizing Tailwind CSS and React Icons for enhanced visual engagement."
      ],
      github: "https://github.com/FatmaTahir/MoodMemo",
      demo: null,
      featured: true
    },
    {
      id: "mediblood-connect",
      title: "MediBlood-Connect",
      subtitle: "Real-Time Blood Donation Management Platform",
      description: "Medi Blood Connect is a smart blood donation management platform built to connect donors, patients, hospitals, and blood banks efficiently. It helps users find available blood donors based on blood group type, manage emergency requests, and streamline the blood donation process using modern web technologies.",
      image: null, 
      tags: ["ASP.NET MVC", "C#", "Bootstrap", "SignalR", "SQL Server"],
      github: "https://github.com/FatmaTahir/MediBlood-Connect",
      demo: null,
      featured: true
    }
  ],
  education: [
    {
      degree: "BS Software Engineering",
      institution: "Punjab University College of Information Technology",
      period: "2023 – 2027"
    },
    {
      degree: "FSc (Intermediate)",
      institution: "Government Girls Higher Secondary School",
      period: "2021 – 2023"
    }
  ],
  services: [
    {
      title: "Frontend Development",
      description: "Building responsive, highly accessible, and interactive web interfaces using React.js, Tailwind CSS, and modern web engines."
    },
    {
      title: "Full Stack Development",
      description: "End-to-end web application development connecting robust C#/.NET RESTful backend APIs with dynamic web applications."
    },
    {
      title: "C++ Programming",
      description: "Developing clean, performant, and structured C++ code for complex algorithmic logic and problem-solving requirements."
    }
  ]
};