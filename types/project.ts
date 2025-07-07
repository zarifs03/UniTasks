export interface Project {
  id: string;
  title: string;
  dueDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectFormData {
  title: string;
  dueDate: Date;
}
