import { DefaultInView } from '@/components/default-in-view'
import {
  ExperienceItem,
  ExperienceItemProps
} from '@/components/experience-item'
import { SectionTitle } from '@/components/section-title'
import clsx from 'clsx'

interface ExperienceItem extends ExperienceItemProps {
  id: number
  half?: boolean
}
const experience: ExperienceItem[] = [
  {
    id: 1,
    company: 'Smart Trust for the Future',
    logo: '/smart-trust-logo.png',
    position: 'Frontend Consultant',
    start: new Date('2025 May'),
    isPartTime: true,
    description:
      'As a Frontend Consultant, I owned the architecture and technical direction of frontend solutions for secure document processing systems. I designed and implemented low-level PDF manipulation workflows, working directly with PDF internals, attributes, and signature containers. I defined and enforced frontend architecture standards for integrating PDF digital signature specifications, including PKCS#7 signing flows and X.509 certificate handling with PEM-encoded elements. In this role, I provided technical leadership on security-critical implementations, guided engineering decisions across teams, reviewed and validated complex code paths, and ensured scalability, maintainability, and strict compliance with digital signature and trust standards.'
  },
  {
    id: 2,
    company: 'MTYN Ltd.',
    logo: '/mtyn-logo.png',
    position: 'Frontend Team Lead',
    start: new Date('2023 Jan'),
    description:
      'As Frontend Team Lead on the Baarbaanet project, I spearheaded the evolution of six core applications—including customer, driver, and curator web apps alongside shipper, carrier, and back‑office panels—while managing the frontend team, conducting regular code reviews, and enforcing best practices for clean, maintainable code. I managed all six applications within an Nx‑powered monorepo to share code, enforce consistency, and accelerate development. I designed and built a reusable UI‑kit based on UI/UX guidelines to ensure a cohesive look and feel across every app. I implemented and integrated essential libraries for form handling, user authentication, authorization, and API services to optimize performance and future‑proof our codebase. By leveraging Capacitor, I enabled the generation of Android APKs for rapid distribution of installable mobile applications. In close collaboration with product, design, and backend teams, I enhanced the user experience, streamlined workflows, and delivered high‑quality, scalable solutions that supported seamless delivery and logistics operations.'
  },
  {
    id: 3,
    company: 'MTYN Ltd.',
    logo: '/mtyn-logo.png',
    position: 'Frontend Developer',
    start: new Date('2021 Jun'),
    end: new Date('2023 Jan'),
    description:
      'As a Frontend Developer, I worked on enhancing the Baarbaanet platform, focusing on creating responsive and intuitive user interfaces for the web application, driver panel, courier panel, and admin panel. I collaborated closely with the backend team to ensure seamless integration and optimized performance, while also ensuring pixel-perfect designs. My contributions helped improve the overall user experience and streamline workflows, delivering high-quality solutions in a fast-paced development environment.'
  },
  {
    id: 4,
    company: 'Self Employed',
    logo: '/freelance-logo.png',
    position: 'Full‑Stack Web Developer',
    start: new Date('2020 Feb'),
    end: new Date('2021 June'),
    description:
      'As a Freelance Full‑Stack Web Developer, I delivered end‑to‑end project implementations by leveraging PHP, Node.js, and Nest.js on the server side, paired with Vue.js or jQuery to craft responsive, interactive front‑end interfaces. I owned the entire development lifecycle—from requirements gathering and architecture design through coding, testing, and deployment—ensuring clean, maintainable code and on‑time delivery. Collaborating directly with clients, I translated business needs into tailored technical solutions, integrated third‑party APIs, and optimized performance to exceed expectations on every engagement.'
  },
  {
    id: 5,
    company: 'XSyntax',
    logo: '/xsyntax-logo.png',
    position: 'Frontend / Android Developer',
    start: new Date('2015 Sep'),
    end: new Date('2020 Feb'),
    description:
      'As a Developer, I began my professional career with this team by building Android applications using Java. Over time, driven by my growing interest in front‑end development, I expanded my skills to include web technologies and contributed to the user interface side of projects. The team handled both personal and corporate client projects, where I collaborated closely with back‑end and Windows developers to deliver robust, full‑featured solutions tailored to client needs.'
  }
]

export function Experience() {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-20'>
      <DefaultInView className='w-full' once>
        <SectionTitle title='Experience' className='mb-10' />
      </DefaultInView>

      <div className='grid md:grid-cols-2 w-full gap-y-4 gap-x-2 md:max-w-3/4 lg:max-w-2/3'>
        {experience.map((item) => (
          <DefaultInView
            key={item.id}
            className={clsx(!item.half && 'col-span-full')}
            once>
            <ExperienceItem {...item} />
          </DefaultInView>
        ))}
      </div>
    </section>
  )
}
