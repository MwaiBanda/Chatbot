import { Flow, Response, ResponseType } from "./types"

export function checkLocationFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Locations:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Ivy Tech has 45 locations all throughout Indiana with most of our locations being in the Indianapolis metro area.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'With our Learn Anywhere program, you can take an online class from any of our locations no matter where you may live'
                    ],
                    url: "https://www.ivytech.edu/locations/",
                    type: ResponseType.Response
                },
            ])
            break
    }
}