import { useEffect } from "react"
import { Options } from "./Options"
import { Flow, Response } from "./utils/types"
import { checkProgramsFlow } from "./utils/programs"
import { backOptions, programOptions, welcomeOptions } from "./utils/options"

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
            setLoading(false)
            checkProgramsFlow(flow, responses, setResponses)
        }, 1500)
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