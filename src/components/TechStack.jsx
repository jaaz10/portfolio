'use client'

import { FaWordpress, FaReact, FaNodeJs, FaFigma } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiSupabase, SiPhp, SiExpo, SiNextdotjs } from 'react-icons/si'
import { TbPlugConnected } from 'react-icons/tb'

export function TechStack() {
  const technologies = {
    'Frontend': [
      { name: 'React + Next.js', icon: <FaReact /> },
      { name: 'React Native + Expo', icon: <SiExpo /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    'Backend': [
      { name: 'Node.js + Express', icon: <FaNodeJs /> },
      { name: 'PHP', icon: <SiPhp /> },
    ],
    'CMS & Platforms': [
      { name: 'WordPress', icon: <FaWordpress /> },
      { name: 'Custom WP Plugins', icon: <TbPlugConnected /> },
    ],
    'Database': [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Supabase', icon: <SiSupabase /> },
    ],
    'Design': [
      { name: 'Figma', icon: <FaFigma /> },
    ],
  }

  return (
    <div className="rounded-2xl border border-zinc-100 bg-white/50 p-8 backdrop-blur-sm dark:border-zinc-700/40 dark:bg-zinc-800/50">
      <h2 className="flex items-center text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-8">
        <FaReact className="h-6 w-6 flex-none text-teal-600 dark:text-teal-400" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="space-y-6">
        {Object.entries(technologies).map(([category, techs]) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3 uppercase tracking-wide">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <span
                  key={tech.name}
                  className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium bg-teal-50 text-teal-700 ring-1 ring-teal-200/50 dark:bg-teal-400/10 dark:text-teal-400 dark:ring-teal-400/20 hover:bg-teal-100 dark:hover:bg-teal-400/20 transition-all duration-200"
                >
                  <span className="mr-2 text-base">{tech.icon}</span>
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 