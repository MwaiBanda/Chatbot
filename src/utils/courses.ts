import { Flow, Response, ResponseType } from "./types"

export function checkCoursesFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
    switch (flow) {
        case Flow.Courses:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'At Ivy Tech Community College, we offer a variety of courses designed to equip students with in-demand skills. Each term, students can choose from a variety of courses, with flexible class formats to fit their schedules.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Whether you prefer learning in-person, online, or through a hybrid format, we have options to support your educational journey.'
                    ],
                    url: "https://catalog.ivytech.edu/index.php",
                    type: ResponseType.Response
                },
            ])
            break
    }
}