import { Flow, Response, ResponseType } from "./types"

export function checkAdmissionsFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Admissions:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Getting started at Ivy Tech is quick and easy. Take your first steps for a better future by joining us today.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'What would you like assistance with?'
                    ],
                    type: ResponseType.Response
                },
            ])
            break
    }
}