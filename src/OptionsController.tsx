import { useEffect } from "react"
import { Options } from "./Options"
import { Flow, Response } from "./utils/types"
import { checkProgramsFlow } from "./utils/programs"
import { admissionsOptions, backOptions, coursesOptions, programOptions, resourcesOptions, welcomeOptions } from "./utils/options"
import { checkCoursesFlow } from "./utils/courses"
import { checkLocationFlow } from "./utils/locations"
import { checkAdmissionsFlow } from "./utils/admissions"
import { checkContactFlow } from "./utils/contact"
import { checkResourcesFlow } from "./utils/resources"

interface OptionsControllerProps {
    flow: Flow
    responses: Response[]
    setFlow: (flow: Flow) => void
    setResponses: (response: Response[]) => void
    setLoading: (isLoading: boolean) => void
}

export function OptionsController({
    flow,
    responses,
    setFlow,
    setResponses,
    setLoading
}: OptionsControllerProps) {

    useEffect(() => {
        if (flow !== Flow.Welcome) {
            setLoading(true)
        }
        setTimeout(() => {
            checkProgramsFlow(flow, responses, setResponses)
            checkCoursesFlow(flow, responses, setResponses)
            checkAdmissionsFlow(flow, responses, setResponses)
            checkLocationFlow(flow, responses, setResponses)
            checkResourcesFlow(flow, responses, setResponses)
            checkContactFlow(flow, responses, setResponses)
            setLoading(false)
        }, 1000)
    }, [flow])

    switch (flow) {
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
        case Flow.Courses:
            return <Options
                flow={flow}
                options={coursesOptions}
                responses={responses}
                setFlow={setFlow}
                setResponses={setResponses}
            />
        case Flow.Admissions:
            return <Options
                flow={flow}
                options={admissionsOptions}
                responses={responses}
                setFlow={setFlow}
                setResponses={setResponses}
            />
        case Flow.Resources:
            return <Options
                flow={flow}
                options={resourcesOptions}
                responses={responses}
                setFlow={setFlow}
                setResponses={setResponses}
            />
        default:
            return <Options
                flow={flow}
                options={backOptions}
                responses={responses}
                setFlow={setFlow}
                setResponses={() => { }}
            />
    }
}