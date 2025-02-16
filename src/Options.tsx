import "./Options.css"
import { Flow, Option, Response, ResponseType } from "./utils/types"

interface OptionsProps {
    flow: Flow
    options: Option[]
    responses: Response[]
    setFlow: (flow: Flow) => void
    setResponses: (response: Response[]) => void
}

export function Options({ flow, options, responses, setFlow, setResponses }: OptionsProps) {
    const tabNameStyle = () => {
        switch (flow) {
            case Flow.Programs:
                return {
                    fontSize: "0.3em"
                }
            default:
                return {
                    fontSize: "1em"
                }
        }
    }
    const tabStyle = () => {
        switch (flow) {
            case Flow.Programs:
                return {
                    height: "30px",
                    lineHeight: "30px"
                }
            default:
                return {
                    height: "40px",
                    lineHeight: "40px"
                }
        }
    }
    return <div className="options">
        {options.map((option) => {
            return <div className="tab" style={tabStyle()} key={option.id}>
                <div className="tab-name" style={tabNameStyle()} onClick={() => {
                    setResponses([
                        ...responses,
                        { id: responses[responses.length - 1].id + 1, text: [option.name], type: ResponseType.Reply }
                    ])
                    setFlow(option.flow)
                }}>
                    {option.name}
                </div>
            </div>
        })}
    </div>
} 