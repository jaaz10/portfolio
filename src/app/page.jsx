import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAirbnb from '@/images/logos/tsp.png'
import logoFacebook from '@/images/logos/sdi.png'
import logoPlanetaria from '@/images/logos/realnets.png'
// import avatarPic from '@/images/logos/realnets.png'
// import logoStarbucks from '@/images/logos/starbucks.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'

import logoAnimaginary from '@/images/logos/ball.svg'
import logoCosmos from '@/images/logos/seal_chi.jpg'
import logoHelioStream from '@/images/logos/eye-glasses.svg'
import logoOpenShuttle from '@/images/logos/mana.svg'

import { getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'

import logoOptician from '@/images/logos/eye-glasses.svg'      // Eye care/optician related
import logoRescue from '@/images/logos/pet.svg'            // Pet/animal rescue related
import logoOnboarding from '@/images/logos/onboard.svg'  // HR/onboarding related

import { ProjectCard } from '@/components/ProjectCard'
import { projectDetails } from '@/lib/projectDetails'

import { TechStack } from '@/components/TechStack'

const projects = [
  {
    name: 'Clearing Vision',
    description: 'A professional website for an optician serving the metropolitan area since 2010.',
    link: { href: 'https://clearingvision.com/', label: 'clearingvision.com' },
    logo: logoOptician,
    screenshot: 'https://i.ibb.co/3CJfNLy/Screenshot-2024-12-05-at-2-02-24-PM-2.png',
    technologies: ['WordPress', 'Custom WordPress Plugins', 'PHP', 'MySQL'],
  },
  {
    name: 'DogFoster',
    description: 'Connecting pups with foster homes and forever families one pup at a time. Transport provided.',
    link: { href: '#', label: 'dogfoster.org' },
    logo: logoRescue,
    screenshot: 'https://i.ibb.co/5ndy8N2/earth-8882368-640.jpg',
    technologies: ['React + Next.js', 'Tailwind CSS', 'Supabase', 'Node.js + Express','Figma'],
  },
  {
    name: '¿Cómo Se Dice?',
    description: 'A Spanish learning app that helps you learn Spanish words and phrases. Bring it out at parties!',
    link: { href: '#', label: 'comosedice.com' },
    logo: logoOnboarding,
    screenshot: 'https://i.ibb.co/5ndy8N2/earth-8882368-640.jpg',
    technologies: ['React Native + Expo', 'Node.js + Express', 'MongoDB', 'Next.js'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
      /home/karn/Downloads/orange_seal.png /home/karn/Downloads/orange_seal.png
    </svg>
  )
}

// export const metadata = {
//   title: 'Projects',
//   description: 'Things Ive made trying to put my dent in the universe.',
// }

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
        <Card.Description>{description}</Card.Description>
      </Card.Title>
      {/* <Card.Eyebrow decorate>{event}</Card.Eyebrow> */}

      {/* <Card.Cta>{cta}</Card.Cta> */}
    </Card>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-1">
        <div className="max-w-2xl">
          {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software designer, founder, and amateur astronaut.
          </h1> */}
          {/* <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p> */}
          {/* <div className="mt-6 flex gap-6">
            <SocialLink href="#" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="#"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="#"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div> */}
        </div>
      </Container>
      {/* <Photos /> */}
      <Container className="mt-10 md:mt-1">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-12">
            <SpeakingSection title="About">
              <Appearance
                // href="#"
                // title="In space, no one can watch you stream — until now"
                description="Hey! I'm Jaaz - by day I work in IT, 
                and by night I'm pursuing my CS degree. When I'm not knee-deep in schoolwork or 
                helping users fix their IT headaches, you can find me either messing with my HomeLab or 
                coding up some new side project."
                // event="SysConf 2021"
                // cta="../images/avatar.jpg"
              />
              <img
                src="https://i.ibb.co/YZhsWWC/man-5674344-640.jpg"
                alt="Image description"
                h
                className="!mb-0 !mt-[32px] rounded-[16px]"
              />
              {/*<p className="items-right !mt-2 flex justify-end text-sm text-[#A1A1AA]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-map-pin inline w-3"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Chicago
              </p>
              */}
            </SpeakingSection>
          </div>

          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <TechStack />
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1">
          <ul role="list" className="mb-10 mt-5 grid w-full grid-cols-1 gap-y-16 sm:mx-auto sm:w-full sm:grid-cols-1 md:grid-cols-[137px_1fr] md:border-l md:border-zinc-100 md:pl-6 lg:w-full lg:grid-cols-[120px_1fr] md:dark:border-zinc-700/40">
            <section aria-labelledby="someProjects">
              <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                <h2 id="someProjects" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                  Projects
                </h2>
              </div>
            </section>

            {/* Projects grid */}
            <div className="sm:col-span-23 grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
              {projects.map((project) => (
                <div 
                  key={project.name} 
                  className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40 h-full bg-white dark:bg-zinc-800/90"
                >
                  <ProjectCard 
                    project={project} 
                    projectDetails={projectDetails}
                  />
                </div>
              ))}
            </div>
          </ul>
        </div>
        <SpeakingSection title="Contact">
          <Appearance
            description={
              <a 
                href="mailto:jaazespinoza@gmail.com"
                className="hover:text-teal-500 transition-colors"
              >
                jaazespinoza@gmail.com
              </a>
            }
          />
        </SpeakingSection>
      </Container>
    </>
  )
}
