import { User, Appointment, Symptom, HealthRecord, Medication, Message, TreatmentPlan } from '../models/types';

export const mockUser: User = {
  id: 'user123',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
  phone: '(555) 123-4567',
  medicalId: 'MID-12345',
  diagnosis: 'Stage II Breast Cancer',
  treatmentPlan: 'AC-T Chemotherapy',
};

export const mockAppointments: Appointment[] = [
  {
    id: 'apt1',
    type: 'Chemotherapy',
    date: new Date(2025, 5, 30),
    time: '10:00 AM',
    location: 'Oncology Treatment Center, Floor 3',
    provider: 'Dr. Emma Wilson',
    status: 'Confirmed',
    prepRequired: true,
    notes: 'Please arrive 15 minutes early for check-in',
  },
  {
    id: 'apt2',
    type: 'Follow-up',
    date: new Date(2025, 6, 7),
    time: '2:30 PM',
    location: 'Medical Office Building, Suite 200',
    provider: 'Dr. Michael Chen',
    status: 'Pending',
    prepRequired: false,
    notes: 'Bring your symptom journal to discuss side effects',
  },
  {
    id: 'apt3',
    type: 'Lab Work',
    date: new Date(2025, 6, 15),
    time: '8:00 AM',
    location: 'Clinical Laboratory, Ground Floor',
    provider: 'Lab Services',
    status: 'Confirmed',
    prepRequired: true,
    notes: 'Fasting required 8 hours before appointment',
  },
  {
    id: 'apt4',
    type: 'Initial Oncology Consultation',
    date: new Date(2025, 3, 24),
    time: '8:30 AM',
    location: 'Downtown Oncology Center, Building A',
    provider: 'Dr. Sarah Williams',
    status: 'Cancelled',
    prepRequired: true,
    notes: 'Multiple appointments • 3.5 hour duration',
  }
];

export const mockSymptoms: Symptom[] = [
  {
    id: 'sym1',
    name: 'Fatigue',
    severity: 3,
    timestamp: new Date(2025, 5, 25),
    notes: 'Feeling exhausted in the afternoons',
    trend: 'stable'
  },
  {
    id: 'sym2',
    name: 'Nausea',
    severity: 2,
    timestamp: new Date(2025, 5, 26),
    notes: 'Mild nausea after breakfast',
    trend: 'improving'
  },
  {
    id: 'sym3',
    name: 'Pain',
    severity: 4,
    timestamp: new Date(2025, 5, 26),
    notes: 'Joint pain, especially in mornings',
    trend: 'worsening'
  }
];

export const mockHealthRecords: HealthRecord[] = [
  {
    id: 'hr1',
    type: 'Lab',
    title: 'Complete Blood Count',
    date: new Date(2025, 5, 15),
    provider: 'Dr. Emma Wilson',
    status: 'Normal',
    details: {},
    values: [
      { name: 'WBC', value: '5.0', unit: '10^3/μL', range: '3.5-10.5' },
      { name: 'RBC', value: '4.2', unit: '10^6/μL', range: '3.8-5.2' },
      { name: 'Hemoglobin', value: '12.1', unit: 'g/dL', range: '11.5-15.5' }
    ],
    notes: 'All values within normal ranges'
  },
  {
    id: 'hr2',
    type: 'Immunization',
    title: 'Influenza Vaccine',
    date: new Date(2025, 4, 20),
    provider: 'Dr. Michael Chen',
    status: 'Current',
    details: { manufacturer: 'FluVax', lot: 'FL-456789' },
    values: [],
    notes: 'Annual flu shot'
  },
  {
    id: 'hr3',
    type: 'Note',
    title: 'Treatment Progress Evaluation',
    date: new Date(2025, 5, 10),
    provider: 'Dr. Emma Wilson',
    status: 'Normal',
    details: {},
    values: [],
    notes: 'Patient responding well to treatment. Tumor size reduced by approximately 30%. Continuing current treatment plan with close monitoring of side effects.'
  }
];

export const mockMedications: Medication[] = [
  {
    id: 'med1',
    name: 'Doxorubicin',
    dosage: '60 mg/m²',
    frequency: 'Once every 3 weeks',
    startDate: new Date(2025, 3, 15),
    purpose: 'Chemotherapy agent',
    instructions: 'Administered via IV during chemotherapy sessions',
    nextDose: new Date(2025, 5, 30)
  },
  {
    id: 'med2',
    name: 'Ondansetron',
    dosage: '8 mg',
    frequency: 'Every 8 hours as needed',
    startDate: new Date(2025, 3, 15),
    purpose: 'Anti-nausea medication',
    instructions: 'Take with water. Do not exceed 3 doses in 24 hours.',
    nextDose: new Date(2025, 5, 27, 14, 0)
  },
  {
    id: 'med3',
    name: 'Dexamethasone',
    dosage: '4 mg',
    frequency: 'Twice daily for 3 days following chemotherapy',
    startDate: new Date(2025, 3, 15),
    purpose: 'Anti-inflammatory steroid',
    instructions: 'Take with food to minimize stomach irritation',
    nextDose: new Date(2025, 5, 30, 18, 0)
  }
];

export const mockMessages: Message[] = [
  {
    id: 'msg1',
    sender: 'Dr. Emma Wilson',
    recipient: 'Jane Smith',
    timestamp: new Date(2025, 5, 24, 10, 30),
    content: 'Your recent lab results look good. We\'ll discuss them in detail at your next appointment.',
    read: true,
    attachments: []
  },
  {
    id: 'msg2',
    sender: 'Nurse Coordinator',
    recipient: 'Jane Smith',
    timestamp: new Date(2025, 5, 25, 14, 15),
    content: 'Please remember to complete your symptom journal before your appointment next week.',
    read: true,
    attachments: []
  },
  {
    id: 'msg3',
    sender: 'Pharmacy',
    recipient: 'Jane Smith',
    timestamp: new Date(2025, 5, 26, 9, 45),
    content: 'Your prescription is ready for pickup at the hospital pharmacy.',
    read: false,
    attachments: []
  }
];

export const mockTreatmentPlan: TreatmentPlan = {
  id: 'tp1',
  name: 'AC-T Chemotherapy',
  totalCycles: 8,
  currentCycle: 3,
  progress: 37.5,
  startDate: new Date(2025, 3, 15),
  estimatedEndDate: new Date(2025, 9, 30)
};