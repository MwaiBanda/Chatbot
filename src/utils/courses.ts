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
        case Flow.ClassFormats:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'We understand every student has different learning preferences, so we offer:',
                        '• In-Person Classes – These are traditional classroom settings where students interact face-to-face with instructors and peers.',
                        '• Online Classes – These are fully virtual courses that allow students to learn at their own pace from anywhere.',
                        '• Hybrid Classes – These are a mix of in-person and online learning, offering flexibility while maintaining classroom engagement.',
                    ],
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.ClassScheduling:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'To accommodate students with different commitments, we provide:',
                        '• Daytime and Evening Classes - These are ideal for students balancing work or other responsibilities',
                        '• 8-week and 16-week Courses – Students can choose between accelerated learning or a traditional semester format.',
                    ],
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.HandsOnLearning:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Many IT classes include labs, real-world projects, and interactive activities to enhance learning. Students gain practical experience with industry-standard tools, programming languages, and cloud platforms.',
                    ],
                    type: ResponseType.Response
                },

                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'We offer a huge number of classes each term, as well as flexibility in class formats – including in-person, online, and hybrid class types.'
                    ],
                    type: ResponseType.Response
                },
            ])
            break
    }
}