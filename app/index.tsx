import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import FooterNavigation from "../components/FooterNavigation";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { useProjects } from "../context/ProjectContext";
import { dashboardStyles } from "../styles/dashboardStyles";
import { Project, ProjectFormData } from "../types/project";

export default function DashboardScreen() {
  const { projects, addProject, updateProject, deleteProject } = useProjects();
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>(undefined);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');

  // today's date
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleCreateProject = () => {
    setEditingProject(undefined);
    setModalMode('create');
    setModalVisible(true);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject(project);
    setModalMode('edit');
    setModalVisible(true);
  };

  const handleDeleteProject = (project: Project) => {
    Alert.alert(
      "Delete Project",
      `Are you sure you want to delete "${project.title}"? This action cannot be undone.`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteProject(project.id),
        },
      ]
    );
  };

  const handleSaveProject = (projectData: ProjectFormData) => {
    if (modalMode === 'create') {
      addProject(projectData);
    } else if (editingProject) {
      updateProject(editingProject.id, projectData);
    }
    setModalVisible(false);
    setEditingProject(undefined);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setEditingProject(undefined);
  };

  return (
    <SafeAreaView style={dashboardStyles.safeArea}>
      <View style={dashboardStyles.header}>
        <Text style={dashboardStyles.logo}>UniTasks</Text>
      </View>

      <View style={dashboardStyles.container}>
        <Text style={dashboardStyles.welcome}>Welcome back, User!</Text>
        <Text style={dashboardStyles.todayText}>{formattedDate}</Text>

        <View style={dashboardStyles.content}>
          <View style={dashboardStyles.projectsHeader}>
            <Text style={dashboardStyles.projectsTitle}>Your Projects</Text>
            <Text style={dashboardStyles.projectsCount}>
              {projects.length} project{projects.length !== 1 ? 's' : ''}
            </Text>
          </View>

          {projects.length === 0 ? (
            <View style={dashboardStyles.emptyState}>
              <Ionicons 
                name="folder-open-outline" 
                size={64} 
                color="#9CA3AF" 
                style={dashboardStyles.emptyStateIcon}
              />
              <Text style={dashboardStyles.emptyStateTitle}>No Projects Yet</Text>
              <Text style={dashboardStyles.emptyStateText}>
                Create your first project to get started{'\n'}managing your tasks and deadlines
              </Text>
              <TouchableOpacity
                style={dashboardStyles.createButton}
                onPress={handleCreateProject}
                activeOpacity={0.8}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
                <Text style={dashboardStyles.createButtonText}>Create New Project</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView 
              style={dashboardStyles.projectsList}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 20 }}
            >
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onEdit={handleEditProject}
                  onDelete={handleDeleteProject}
                />
              ))}
              <TouchableOpacity
                style={dashboardStyles.createButton}
                onPress={handleCreateProject}
                activeOpacity={0.8}
              >
                <Ionicons name="add" size={24} color="#FFFFFF" />
                <Text style={dashboardStyles.createButtonText}>Create New Project</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </View>

      <FooterNavigation />

      <ProjectModal
        visible={modalVisible}
        onClose={handleCloseModal}
        onSave={handleSaveProject}
        project={editingProject}
        mode={modalMode}
      />
    </SafeAreaView>
  );
}
