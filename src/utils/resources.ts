import { Flow, Response, ResponseType } from "./types"

export function checkResourcesFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Resources:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Ivy Tech offers many resources to help you not only pay for tuition, but also help you succeed in your studies.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Whether you need financial aid, tutoring, or to talk with an advisor, we can help you. Which topic would you like to explore further?'
                    ],
                    type: ResponseType.Response
                },
            ])
            break
    }
}