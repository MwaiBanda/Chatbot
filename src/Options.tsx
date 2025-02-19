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
                    fontSize: "0.5em"
                }
            default:
                return {
                    fontSize: "0.8em"
                }
        }
    }
    const tabStyle = () => {
        switch (flow) {
            case Flow.Programs:
                return {
                    height: "28px",
                    lineHeight: "28px"
                }
            default:
                return {
                    height: "37px",
                    lineHeight: "37px"
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