import { Flow, Option } from "./types"

export const welcomeOptions: Option[] = [
    { id: 2, name: 'Programs', flow: Flow.Programs },
    { id: 1, name: 'Courses', flow: Flow.Courses },
    { id: 3, name: 'Locations', flow: Flow.Locations },
    { id: 4, name: 'Admssions', flow: Flow.Admissions },
    { id: 5, name: 'Contact', flow: Flow.Contact },
    { id: 6, name: 'About Us', flow: Flow.AboutUs },
]

export const programOptions: Option[] = [
    { id: 2, name: 'Cyber Security', flow: Flow.CyberSecurity },
    { id: 1, name: 'Data Analytics', flow: Flow.DataAnalytics },
    { id: 8, name: 'Informatics', flow: Flow.Informatics },
    { id: 5, name: 'Cloud Technology', flow: Flow.CloudTechnologies },
    { id: 6, name: 'Software Dev.', flow: Flow.SoftwareDevelopment },
    { id: 7, name: 'Computer Science', flow: Flow.ComputerScience },
    { id: 3, name: 'Information Technology Support', flow: Flow.InformationTechnologySupport },
    { id: 4, name: 'Network Infrastructure', flow: Flow.NetworkInfrastructure },
]

export const backOptions: Option[] = [
    { id: 2, name: 'Return to Main Menu', flow: Flow.Welcome },
]