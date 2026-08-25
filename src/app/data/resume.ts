export interface ExperienceEntry {
  company: string
  position: string
  start: Date
  end?: Date
  isPartTime?: boolean
  description: string
}

export const name = 'Hossein Tavangar'

export const profileImage = '/profile.jpg'

export const themeColor = '#548e75'

export const contact = {
  location: 'Tehran',
  phone: '+989134312831',
  email: 'androsein1@gmail.com',
  linkedin: 'linkedin.com/in/tavangar',
  telegram: 'that_hossein',
  website: 'hossein.info'
}

export const title = 'Senior Frontend Developer'

export const subtitles = [
  'Frontend developer for Vue.js',
  'Frontend developer for Nuxt.js',
  'Frontend developer for React.js',
  'Frontend developer for Next.js'
]

export const about = [
  'Senior Frontend Developer with 7+ years of experience building responsive, scalable web applications using Vue.js, Nuxt.js, and TypeScript. I focus on crafting seamless user experiences, mentoring engineers, and collaborating with cross-functional teams to solve complex problems in web development.',
  'I care about clean, maintainable code and pixel-perfect execution. Currently expanding into React to broaden my stack and stay ahead of where the industry is heading.',
  'Beyond frontend, I have hands-on backend experience with PHP, Node.js, and NestJS, plus some Android development — gives me a fuller picture when working across a stack.'
]

export const summary =
  'Senior Frontend Developer with 7+ years of professional experience building responsive, scalable web applications using Vue.js, Nuxt.js and TypeScript. Proven ability to collaborate with cross-functional teams, mentor junior engineers, and deliver pixel-perfect user interfaces. Actively expanding expertise in React to broaden technology stack and future-proof solutions.'

export const skills = [
  'Proficient in Vue.js',
  'Proficient in Nuxt.js',
  'React development',
  'Web performance optimization',
  'Responsive design',
  'PWA',
  'Bootstrap',
  'Tailwind',
  'Vuetify',
  'Vite',
  'Webpack',
  'Monorepo'
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Argoman',
    position: 'Senior Frontend Developer',
    start: new Date('2026 Feb'),
    description:
      'As a Senior Frontend Developer at Argoman Venture Studio, I work in a fast-paced, product-driven environment where small autonomous teams build and scale modern software products with a strong focus on ownership, speed, and long-term impact. Argoman focuses on developing scalable software solutions, including AI-powered products, designed for experimentation, growth, and real-world value. I contribute to a core evolving product, taking ownership of frontend architecture, scalability, and maintainability while driving refactoring efforts to improve code quality, performance, and developer experience. I collaborate closely with product and engineering teams to deliver features rapidly while ensuring system stability and long-term technical sustainability.'
  },
  {
    company: 'Smart Trust for the Future',
    position: 'Frontend Consultant',
    start: new Date('2025 May'),
    isPartTime: true,
    description:
      'As a Frontend Consultant, I owned the architecture and technical direction of frontend solutions for secure document processing systems. I designed and implemented low-level PDF manipulation workflows, working directly with PDF internals, attributes, and signature containers. I defined and enforced frontend architecture standards for integrating PDF digital signature specifications, including PKCS#7 signing flows and X.509 certificate handling with PEM-encoded elements. In this role, I provided technical leadership on security-critical implementations, guided engineering decisions across teams, reviewed and validated complex code paths, and ensured scalability, maintainability, and strict compliance with digital signature and trust standards.'
  },
  {
    company: 'MTYN Ltd.',
    position: 'Frontend Team Lead',
    start: new Date('2023 Jan'),
    end: new Date('2026 Feb'),
    description:
      'As Frontend Team Lead on the Baarbaanet project, I spearheaded the evolution of six core applications—including customer, driver, and curator web apps alongside shipper, carrier, and back‑office panels—while managing the frontend team, conducting regular code reviews, and enforcing best practices for clean, maintainable code. I managed all six applications within an Nx‑powered monorepo to share code, enforce consistency, and accelerate development. I designed and built a reusable UI‑kit based on UI/UX guidelines to ensure a cohesive look and feel across every app. I implemented and integrated essential libraries for form handling, user authentication, authorization, and API services to optimize performance and future‑proof our codebase. By leveraging Capacitor, I enabled the generation of Android APKs for rapid distribution of installable mobile applications. In close collaboration with product, design, and backend teams, I enhanced the user experience, streamlined workflows, and delivered high‑quality, scalable solutions that supported seamless delivery and logistics operations.'
  },
  {
    company: 'MTYN Ltd.',
    position: 'Frontend Developer',
    start: new Date('2021 Jun'),
    end: new Date('2023 Jan'),
    description:
      'As a Frontend Developer, I worked on enhancing the Baarbaanet platform, focusing on creating responsive and intuitive user interfaces for the web application, driver panel, courier panel, and admin panel. I collaborated closely with the backend team to ensure seamless integration and optimized performance, while also ensuring pixel-perfect designs. My contributions helped improve the overall user experience and streamline workflows, delivering high-quality solutions in a fast-paced development environment.'
  },
  {
    company: 'Self Employed',
    position: 'Full‑Stack Web Developer',
    start: new Date('2020 Feb'),
    end: new Date('2021 June'),
    description:
      'As a Freelance Full‑Stack Web Developer, I delivered end‑to‑end project implementations by leveraging PHP, Node.js, and Nest.js on the server side, paired with Vue.js or jQuery to craft responsive, interactive front‑end interfaces. I owned the entire development lifecycle—from requirements gathering and architecture design through coding, testing, and deployment—ensuring clean, maintainable code and on‑time delivery. Collaborating directly with clients, I translated business needs into tailored technical solutions, integrated third‑party APIs, and optimized performance to exceed expectations on every engagement.'
  },
  {
    company: 'XSyntax',
    position: 'Frontend / Android Developer',
    start: new Date('2015 Sep'),
    end: new Date('2020 Feb'),
    description:
      'As a Developer, I began my professional career with this team by building Android applications using Java. Over time, driven by my growing interest in front‑end development, I expanded my skills to include web technologies and contributed to the user interface side of projects. The team handled both personal and corporate client projects, where I collaborated closely with back‑end and Windows developers to deliver robust, full‑featured solutions tailored to client needs.'
  }
]

export interface EducationEntry {
  degree: string
  school: string
  period: string
}

export const education: EducationEntry[] = [
  {
    degree: "Bachelor's Degree in Computer Software Technology/Technician",
    school: 'Islamic Azad University, Najafabad Branch',
    period: 'January 2018 - August 2022'
  },
  {
    degree: "Associate's Degree in Computer Software Engineering",
    school: 'Soroush Technical University, Isfahan',
    period: '2015 - 2017'
  }
]

export const languages = [
  { name: 'English', level: 'Limited working proficiency' },
  { name: 'Persian', level: 'Native language' }
]
