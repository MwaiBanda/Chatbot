import { Flow, ResponseType, Response } from "./types";

export function checkProgramsFlow(flow: Flow,  responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Programs:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'At Ivy Tech, we offer several programs within our School of Information Technology, designed to prepare you for a career in the tech industry. '
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'You can learn about fields such as computer science, cyber security, and many others. Which program would you like to explore further?'
                    ],
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.CyberSecurity:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Ivy Tech is one of the few two-year colleges to offer a cybersecurity program that is recognized by the National Security Agency.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Students here will receive the education needed to get into a career that will secure the networks and computers of their place of employment.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=821&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.DataAnalytics:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Data is vast, but in its raw form, it holds little meaning. This is where a career in Data Analytics comes into play.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'A data analysis can review, manage, visualize and analyze data so organizations can make informed decisions based on their transformed data.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=822&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.Informatics:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Informatics combines technology with the lives of everyday people.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'In this program students will study the interaction between people and computers, to enhance communication and increase productivity.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=823&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
    }
}