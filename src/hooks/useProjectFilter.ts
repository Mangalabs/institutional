import { useState, useMemo } from 'react'
import { projectsData, type Project } from '../data/projects.data'

export function useProjectFilter() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') {
      return projectsData.projects
    }
    return projectsData.projects.filter((p) => p.category === activeFilter)
  }, [activeFilter])

  return {
    activeFilter,
    setActiveFilter,
    filteredProjects,
    filters: projectsData.filters,
  }
}
