import React, { createContext, ReactNode, useContext, useState } from 'react';
import { Project, ProjectFormData } from '../types/project';

interface ProjectContextType {
  projects: Project[];
  addProject: (projectData: ProjectFormData) => void;
  updateProject: (id: string, projectData: ProjectFormData) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
};

interface ProjectProviderProps {
  children: ReactNode;
}

export const ProjectProvider: React.FC<ProjectProviderProps> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([
    // Sample projects for development
    {
      id: '1',
      title: 'Mobile App Development',
      dueDate: new Date('2025-07-15'),
      createdAt: new Date('2025-07-01'),
      updatedAt: new Date('2025-07-01'),
    },
    {
      id: '2',
      title: 'UniTasks',
      dueDate: new Date('2025-07-31'),
      createdAt: new Date('2025-07-08'),
      updatedAt: new Date('2025-07-08'),
    },
  ]);

  const addProject = (projectData: ProjectFormData) => {
    const newProject: Project = {
      id: Date.now().toString(),
      ...projectData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setProjects(prev => [...prev, newProject]);
  };

  const updateProject = (id: string, projectData: ProjectFormData) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id
          ? { ...project, ...projectData, updatedAt: new Date() }
          : project
      )
    );
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(project => project.id !== id));
  };

  const getProject = (id: string) => {
    return projects.find(project => project.id === id);
  };

  const value: ProjectContextType = {
    projects,
    addProject,
    updateProject,
    deleteProject,
    getProject,
  };

  return (
    <ProjectContext.Provider value={value}>
      {children}
    </ProjectContext.Provider>
  );
};
