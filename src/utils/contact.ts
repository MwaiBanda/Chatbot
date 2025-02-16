import { Flow, Response, ResponseType } from "./types"

export function checkContactFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Contact:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'You can contact us at 888-489-4563 for a toll free 24/7 service line or you may email us at Info@ivytech.edu.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        ' Additionally, you can also contact us from any of our social media accounts @ivytech for facebook and instagram and @IvytechCC for Twitter.'
                    ],
                    type: ResponseType.Response
                },
            ])
            break
    }
}