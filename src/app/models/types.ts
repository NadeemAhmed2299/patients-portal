export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  medicalId: string;
  diagnosis: string;
  treatmentPlan: string;
}

export interface Appointment {
  id: string;
  type: string;
  date: Date;
  time: string;
  location: string;
  provider: string;
  status: string;
  prepRequired: boolean;
  notes: string;
}

export interface Symptom {
  id: string;
  name: string;
  severity: number;
  timestamp: Date;
  notes: string;
  trend: string;
}

export interface HealthRecord {
  id: string;
  type: string;
  title: string;
  date: Date;
  provider: string;
  status: string;
  details: any;
  values: any[];
  notes: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  startDate: Date;
  endDate?: Date;
  purpose: string;
  instructions: string;
  nextDose: Date;
}

export interface Message {
  id: string;
  sender: string;
  recipient: string;
  timestamp: Date;
  content: string;
  read: boolean;
  attachments: any[];
}

export interface TreatmentPlan {
  id: string;
  name: string;
  totalCycles: number;
  currentCycle: number;
  progress: number;
  startDate: Date;
  estimatedEndDate: Date;
}