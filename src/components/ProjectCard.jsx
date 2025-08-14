'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'

// README content for each project
const projectReadme = {
  'Clearing Vision': {
    overview: "An optician's professional website built with WordPress, featuring online appointment scheduling and frame catalog browsing.",
    features: [
      "Online appointment scheduling system",
      "Interactive frame catalog with filtering options",
      "Insurance verification portal",
      "Contact lens reordering system"
    ],
    installation: "WordPress installation with custom theme and plugins. Requires PHP 7.4+ and MySQL 5.7+",
    screenshots: [
      "Homepage showcase",
      "Appointment booking interface",
      "Frame catalog browser",
      "Patient portal"
    ]
  },
  'DogFoster': {
    overview: "A full-stack web application connecting foster families with dogs in need, featuring real-time updates and transport coordination.",
    features: [
      "Real-time foster home availability tracking",
      "Transport route optimization",
      "Foster application processing",
      "Medical record tracking",
      "Automated matching system"
    ],
    installation: "npm install && npm run dev",
    screenshots: [
      "Dashboard view",
      "Foster application form",
      "Transport coordination map",
      "Dog profiles page"
    ]
  },
  '¿Cómo Se Dice?': {
    overview: "A mobile-first Spanish learning application that makes language learning fun and interactive.",
    features: [
      "Daily vocabulary challenges",
      "Speech recognition for pronunciation practice",
      "Progress tracking and achievements",
      "Social learning features",
      "Offline mode support"
    ],
    installation: "expo install && expo start",
    screenshots: [
      "Learning interface",
      "Practice sessions",
      "Achievement board",
      "Social leaderboard"
    ]
  }
}

export function ProjectCard({ project }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMoreInfo = (e) => {
    e.preventDefault()
    setIsOpen(true)
  }

  const readme = projectReadme[project.name]

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-x-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 dark:bg-teal-400/10 ring-1 ring-teal-200/50 dark:ring-teal-400/20">
          <Image src={project.logo} alt="" className="h-6 w-6" unoptimized />
        </div>
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {project.name}
        </h2>
      </div>

      <div className="relative w-full h-64 rounded-xl overflow-hidden ring-1 ring-zinc-900/5 dark:ring-zinc-300/20">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>

      <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
        {project.description}
      </p>

      <div className="mt-6">
        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100 mb-3">
          Technologies Used:
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 text-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        {project.link && (
          <a
            href={project.link.href}
            className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link.href !== '#' ? 'View live project →' : 'Coming soon →'}
          </a>
        )}

        <button
          onClick={handleMoreInfo}
          className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 transition-colors"
        >
          More Info →
        </button>
      </div>

      {/* Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen p-4">
          <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <div className="relative bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-4xl mx-auto p-8 shadow-2xl">
            <Dialog.Title className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-6">
              {project.name}
            </Dialog.Title>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Project Overview</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{readme.overview}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Key Features</h3>
                <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
                  {readme.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-teal-500 mr-2 mt-1">•</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mb-3">Technical Implementation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-teal-50 text-teal-700 dark:bg-teal-400/10 dark:text-teal-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="mt-8 px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </Dialog>
    </div>
  )
} 