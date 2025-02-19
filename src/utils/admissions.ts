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
        case Flow.HowToApply:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Applying to Ivy Tech is quick and easy. All you need is an internet connection and a little time to fill out an online form.'
                    ],
                    url: "https://www.ivytech.edu/admissions/how-to-apply/",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.Tuition:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Our tuition is one of the most affordable colleges around. We cost a fraction of the price others offer and our scholarships and grants allow you to save even more.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        ' Many of our students attend tuition-free and many graduate without college debt'
                    ],
                    url: "https://www.ivytech.edu/tuition-aid/tuition-fees/",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.KnowledgeAssessment:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'At Ivy Tech we recommend you take a Knowledge assessment to ensure that you’re placed in courses that best fit your skill level.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'As part of the registration process, you will be assessed in reading, writing, and math.'
                    ],
                    url: "https://www.ivytech.edu/admissions/course-placement/",
                    type: ResponseType.Response
                },
            ])
            break
    }
}