import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Project, ProjectFormData } from '../types/project';

interface ProjectModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (projectData: ProjectFormData) => void;
  project?: Project;
  mode: 'create' | 'edit';
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  visible,
  onClose,
  onSave,
  project,
  mode,
}) => {
  const [title, setTitle] = useState(project?.title || '');
  const [dueDate, setDueDate] = useState(project?.dueDate || new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a project title');
      return;
    }

    onSave({
      title: title.trim(),
      dueDate,
    });

    // Reset form
    setTitle('');
    setDueDate(new Date());
    onClose();
  };

  const handleCancel = () => {
    // Reset form to original values
    setTitle(project?.title || '');
    setDueDate(project?.dueDate || new Date());
    onClose();
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(Platform.OS === 'ios');
    setDueDate(currentDate);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleCancel}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleCancel}>
            <Text style={styles.cancelButton}>Cancel</Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {mode === 'create' ? 'New Project' : 'Edit Project'}
          </Text>
          <TouchableOpacity onPress={handleSave}>
            <Text style={styles.saveButton}>Save</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Project Title</Text>
            <TextInput
              style={styles.textInput}
              value={title}
              onChangeText={setTitle}
              placeholder="Enter project title"
              multiline
              textAlignVertical="top"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Due Date</Text>
            <TouchableOpacity
              style={styles.dateButton}
              onPress={() => setShowDatePicker(true)}
            >
              <Ionicons name="calendar-outline" size={20} color="#6B7280" />
              <Text style={styles.dateText}>{formatDate(dueDate)}</Text>
              <Ionicons name="chevron-forward" size={16} color="#9CA3AF" />
            </TouchableOpacity>
          </View>

          {showDatePicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={dueDate}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onDateChange}
              minimumDate={new Date()}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: Platform.OS === 'ios' ? 60 : 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  cancelButton: {
    fontSize: 16,
    color: '#6B7280',
  },
  saveButton: {
    fontSize: 16,
    color: '#4A00E0',
    fontWeight: '600',
  },
  form: {
    flex: 1,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#1F2937',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    minHeight: 44,
  },
  dateButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    minHeight: 44,
  },
  dateText: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#1F2937',
  },
});

export default ProjectModal;
