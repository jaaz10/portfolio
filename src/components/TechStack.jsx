'use client'

import { FaJsSquare, FaReact, FaNodeJs, FaPython, FaDatabase, FaAws, FaGitAlt, FaDocker, FaCode } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function TechStack() {
  const technologies = [
    {
      technology: 'JavaScript',
      icon: <FaJsSquare />,
      color: '#F7DF1E'
    },
    {
      technology: 'React',
      icon: <FaReact />,
      color: '#61DAFB'
    },
    {
      technology: 'Node.js',
      icon: <FaNodeJs />,
      color: '#339933'
    },
    {
      technology: 'Python',
      icon: <FaPython />,
      color: '#3776AB'
    },
    {
      technology: 'SQL',
      icon: <FaDatabase />,
      color: '#336791'
    },
    {
      technology: 'AWS',
      icon: <FaAws />,
      color: '#FF9900'
    },
    {
      technology: 'Git',
      icon: <FaGitAlt />,
      color: '#F05032'
    },
    {
      technology: 'Docker',
      icon: <FaDocker />,
      color: '#2496ED'
    }
  ]

  // Constants for container boundaries
  const PADDING = 6 // Matches the p-6 padding
  const ICON_SIZE = 24 // Approximate size of text-3xl icons
  const MAX_POSITION = 350 - ICON_SIZE - (PADDING * 2) // Container width minus padding and icon size

  // Helper function to get edge positions
  const getEdgePosition = () => {
    const positions = [
      [0, Math.random() * MAX_POSITION],             // Left edge
      [MAX_POSITION, Math.random() * MAX_POSITION],  // Right edge
      [Math.random() * MAX_POSITION, 0],             // Top edge
      [Math.random() * MAX_POSITION, MAX_POSITION]   // Bottom edge
    ]
    return positions[Math.floor(Math.random() * positions.length)]
  }

  // Get a mix of edge and random positions
  const getMixedPosition = () => {
    return Math.random() > 0.5 ? 
      getEdgePosition() : 
      [Math.random() * MAX_POSITION, Math.random() * MAX_POSITION]
  }

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-800 dark:text-zinc-100">
        <FaCode className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Stack</span>
      </h2>
      <div className="relative aspect-square w-full max-w-[350px] mx-auto mt-6 rounded-lg">
        <div className="relative w-full h-full">
          {technologies.map((tech) => {
            const [startX, startY] = getMixedPosition()
            const positions = Array(4).fill(null).map(() => getMixedPosition())
            
            return (
              <motion.div
                key={tech.technology}
                className="absolute text-3xl cursor-pointer group backdrop-blur-[1px] drop-shadow-lg"
                style={{ 
                  color: tech.color,
                  zIndex: Math.random() * 10
                }}
                initial={{
                  x: startX,
                  y: startY,
                }}
                animate={{
                  x: positions.map(p => p[0]),
                  y: positions.map(p => p[1]),
                  zIndex: [1, 2, 1, 2]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                  zIndex: {
                    duration: 0,
                    delay: Math.random() * 5
                  }
                }}
                whileHover={{
                  scale: 1.2,
                  filter: 'brightness(1.2)',
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs whitespace-nowrap bg-white/80 dark:bg-zinc-800/80 px-2 py-1 rounded">
                  {tech.technology}
                </span>
                {tech.icon}
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
} 