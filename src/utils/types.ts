export type Option = {
  id: number
  name: string
  flow: Flow
}

export type Response = {
  id: number
  text: string[]
  url?: string
  type: ResponseType
}
export enum ResponseType {
  Reply = 'reply',
  Response = 'response',
}

export enum Flow {
  Welcome = 'Welcome',
  Programs = 'Departments',
  Courses = 'Courses',
  Locations = 'Locations',
  Admissions = 'Admissions',
  Contact = 'Contact',
  Resources = 'Resources',

  /* Program Flows */
  CyberSecurity = 'CyberSecurity',
  DataAnalytics = 'DataAnalytics',
  Informatics = 'Informatics',
  CloudTechnologies = 'CloudTechnologies',
  SoftwareDevelopment = 'SoftwareDevelopment',
  ComputerScience = 'ComputerScience',
  InformationTechnologySupport = 'InformationTechnologySupport',
  NetworkInfrastructure = 'NetworkInfrastructure',

  /* Course Flows */
  ClassFormats = 'ClassFormats',
  ClassScheduling = 'ClassScheduling',
  HandsOnLearning = 'HandsOnLearning',

  /* Admissions Flows */
  HowToApply = 'HowToApply',
  Tuition = 'Tuition',
  KnowledgeAssessment = 'KnowledgeAssessment',

  /* Resource Flows */
  Advising = 'Advising',
  Library = 'Library',
  Safety = 'Safety',
  Tutoring = 'Tutoring',
  SupportServices = 'SupportServices',
}