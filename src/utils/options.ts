import { Flow, Option } from "./types"

export const welcomeOptions: Option[] = [
    { id: 2, name: 'Programs', flow: Flow.Programs },
    { id: 1, name: 'Courses', flow: Flow.Courses },
    { id: 4, name: 'Admssions', flow: Flow.Admissions },
    { id: 3, name: 'Locations', flow: Flow.Locations },
    { id: 5, name: 'Resources', flow: Flow.Resources },
    { id: 6, name: 'Contact Us', flow: Flow.Contact },
]

export const programOptions: Option[] = [
    { id: 2, name: 'Cyber Security', flow: Flow.CyberSecurity },
    { id: 1, name: 'Data Analytics', flow: Flow.DataAnalytics },
    { id: 8, name: 'Informatics', flow: Flow.Informatics },
    { id: 5, name: 'Cloud Technology', flow: Flow.CloudTechnologies },
    { id: 6, name: 'Software Development', flow: Flow.SoftwareDevelopment },
    { id: 7, name: 'Computer Science', flow: Flow.ComputerScience },
    { id: 3, name: 'Information Technology Support', flow: Flow.InformationTechnologySupport },
    { id: 4, name: 'Network Infrastructure', flow: Flow.NetworkInfrastructure },
]

export const coursesOptions: Option[] = [
    { id: 1, name: 'Class Formats', flow: Flow.ClassFormats },
    { id: 2, name: 'Class Scheduling', flow: Flow.ClassScheduling },
    { id: 3, name: 'Hands-On Learning', flow: Flow.HandsOnLearning },
]

export const admissionsOptions: Option[] = [
    { id: 1, name: 'How to Apply', flow: Flow.ClassFormats },
    { id: 2, name: 'Tuition', flow: Flow.ClassScheduling },
    { id: 3, name: 'Knowledge Assessment', flow: Flow.HandsOnLearning },
]

export const resourcesOptions: Option[] = [
    { id: 1, name: 'Advising', flow: Flow.Advising },
    { id: 2, name: 'Library', flow: Flow.Library },
    { id: 3, name: 'Safety', flow: Flow.Safety },
    { id: 4, name: 'Tutoring', flow: Flow.Tutoring },
    { id: 5, name: 'Support services', flow: Flow.SupportServices },
]

export const backOptions: Option[] = [
    { id: 2, name: 'Return to Main Menu', flow: Flow.Welcome },
]