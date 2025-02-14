import { useEffect } from "react"
import { Options } from "./Options"
import { Flow, Option, Response, ResponseType } from "./types/types"

interface OptionsControllerProps {
    flow: Flow
    responses: Response[]
    setFlow: (flow: Flow) => void
    setResponses: (response: Response[]) => void
  }
  
export function OptionsController({flow, responses, setFlow, setResponses}: OptionsControllerProps) {
    const welcomeOptions: Option[] = [
      { id: 2, name: 'Programs', flow: Flow.Programs },
      { id: 1, name: 'Courses', flow: Flow.Courses },
      { id: 3, name: 'Locations', flow: Flow.Locations },
      { id: 4, name: 'Admssions', flow: Flow.Admissions },
      { id: 5, name: 'Contact', flow: Flow.Contact },
      { id: 6, name: 'About Us',  flow: Flow.AboutUs },
    ]
    const programOptions: Option[] = [
        { id: 2, name: 'Cyber Security', flow: Flow.CyberSecurity },
        { id: 1, name: 'Data Analytics', flow: Flow.DataAnalytics },
        { id: 8, name: 'Informatics', flow: Flow.Informatics },
        { id: 5, name: 'Cloud Technology', flow: Flow.CloudTechnologies },
        { id: 6, name: 'Software Dev.',  flow: Flow.SoftwareDevelopment },
        { id: 7, name: 'Computer Science',  flow: Flow.ComputerScience },
        { id: 3, name: 'Information Technology Support', flow: Flow.InformationTechnologySupport },
        { id: 4, name: 'Network Infrastructure', flow: Flow.NetworkInfrastructure },
    ]
    const backOptions: Option[] = [
        { id: 2, name: 'Return to Main Menu', flow: Flow.Welcome },
    ]
    useEffect(() => {
        switch(flow) {
            case Flow.Programs:
                setResponses([
                    ...responses,
                    {
                        id: responses[responses.length - 1].id + 1,
                        text: [
                            'At Ivy Tech, we offer several programs within our School of Information Technology, designed to prepare you for a career in the tech industry. '
                        ], 
                        type: ResponseType.Response
                    },
                    {
                        id: responses[responses.length - 1].id + 2,
                        text: [
                            'You can learn about fields such as computer science, cyber security, and many others. Which program would you like to explore further?'
                        ], 
                        type: ResponseType.Response
                    },
                ])
                break
            case Flow.CyberSecurity: 
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Ivy Tech is one of the few two-year colleges to offer a cybersecurity program that is recognized by the National Security Agency.'
                    ], 
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Students here will receive the education needed to get into a career that will secure the networks and computers of their place of employment.'
                    ], 
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=821&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
            case Flow.DataAnalytics: 
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Data is vast, but in its raw form, it holds little meaning. This is where a career in Data Analytics comes into play.'
                    ], 
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'A data analysis can review, manage, visualize and analyze data so organizations can make informed decisions based on their transformed data.'
                    ], 
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=822&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
            case Flow.Informatics: 
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Informatics combines technology with the lives of everyday people.'
                    ], 
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'In this program students will study the interaction between people and computers, to enhance communication and increase productivity.'
                    ], 
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=823&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        }
    }, [flow])

    switch(flow) {
      case Flow.Welcome:
        return <Options 
        flow={flow}
        options={welcomeOptions} 
        responses={responses} 
        setFlow={setFlow} 
        setResponses={setResponses}
      />
    case Flow.Programs:
        return <Options 
        flow={flow}
        options={programOptions} 
        responses={responses} 
        setFlow={setFlow} 
        setResponses={setResponses}
      />
    default:
        return<Options 
            flow={flow}
            options={backOptions} 
            responses={responses} 
            setFlow={setFlow} 
            setResponses={() => {}}
        />
    }
  }