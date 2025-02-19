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
        case Flow.Advising:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'After enrolling at Ivy Tech, you will be assigned an academic advisor.',
                    ],
                    type: ResponseType.Response
                },

                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Your advisor will guide you by determining which courses you need to complete, as well as helping you navigate through your educational journey.'
                    ],
                    url: 'https://www.ivytech.edu/student-services/advising/',
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.Library:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Ivy Tech has on campus libraries to support students on their academic journey.',
                    ],
                    type: ResponseType.Response
                },

                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'They offer support, information resources, instruction, and other services to ensure your success.'
                    ],
                    url: 'https://www.ivytech.edu/student-services/libraries/',
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.Safety:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Safety is top priority here at Ivy Tech. It is our mission to provide a safe and secure learning environment, so you can focus on your education.',
                    ],
                    type: ResponseType.Response
                },

                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'With systems in place such as IvyAlet and incident reporting, we ensure that students are informed and prepared for any situation.'
                    ],
                    url: 'https://www.ivytech.edu/student-services/public-safety/',
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.Tutoring:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        "We offer a free tutoring service to all Ivy Tech students to ensure that you stay on track and don't fall behind.",
                    ],
                    type: ResponseType.Response
                },

                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Each campus offers tutoring based on what you need. Our tutors are friendly and ready to work with you on campus or virtually.'
                    ],
                    url: 'https://www.ivytech.edu/student-services/support-services/tutoring/',
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.SupportServices:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        "Here at Ivy Tech, your success is our goal. We provide a variety of support services such as disability, technical, mental health and much more.",
                    ],
                    url: 'https://www.ivytech.edu/student-services/support-services/',
                    type: ResponseType.Response
                },
            ])
            break
    }
}