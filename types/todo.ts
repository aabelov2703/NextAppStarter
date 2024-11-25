export type ToDoType = {
  id: number;
  status?: "New" | "In Progress" | "Done" | "Hold" | "Rejected";
  name?: string;
  description?: string;
  notes?: string;
  priority?: "Critical" | "High" | "Medium" | "Low" | "Minor";
};
