import { useState, useMemo } from 'react'
import { projects, type Project } from '../data/projects.data'

export function useProjectFilter() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'Todos') {
      return projects
    }
    return projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return { activeFilter, setActiveFilter, filteredProjects }
}
