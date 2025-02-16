import { Flow, ResponseType, Response } from "./types";

export function checkProgramsFlow(flow: Flow, responses: Response[], setResponses: (responses: Response[]) => void) {
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

        case Flow.CloudTechnologies:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Cloud Computing allows you to access and store data, run programs, or use powerful computers over the internet instead of relying on your own device. Whether you realize it or not, cloud technology is already a part of your daily life. It powers websites, stores files, and manages data seamlessly through an extensive network of internet-connected servers.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'As technology advances, the cloud continues to grow, shaping the future of how we work and interact online. Our cloud technologies program will prepare students to acquire transferable, foundational skills in system administration, discover how modern organizations handle evolving infrastructure, and many more.'
                    ],
                    url: "https://www.ivytech.edu/programs/all-academic-programs/school-of-information-technology/cloud-technologies/",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.SoftwareDevelopment:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Software development is the process of building and maintaining computer software. Software developers do everything from designing and building programs to testing and bug fixing.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'If you enjoy working with computers and are interested in the inner workings of the programs you use every day then this may be a great fit for you.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=827&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.ComputerScience:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'Computer Science is the study of computers and how they use their computational systems for various sectors such as Tech, Medical, entertainment and government.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Computer Scientists work in offices or laboratories to develop and study new technology and how it can be used. If you like problem solving and messing with technology then this would be a great fit for you.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=836&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.InformationTechnologySupport:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        'In the Information Technology Support program, students will gain the skills and knowledge to maintain computer systems.'
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'They will also learn how to work with customers by diagnosing computer issues guiding them to solve problems.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=824&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
        case Flow.NetworkInfrastructure:
            setResponses([
                ...responses,
                {
                    id: responses[responses.length - 1].id + 1,
                    text: [
                        "Networking is at the core of digital communication in today's connected world. Our network infrastructure program will prepare students for immediate employment in a variety of networking positions."
                    ],
                    type: ResponseType.Response
                },
                {
                    id: responses[responses.length - 1].id + 2,
                    text: [
                        'Students will work with equipment and components that meet industry standards.'
                    ],
                    url: "https://catalog.ivytech.edu/preview_entity.php?catoid=7&ent_oid=825&returnto=784",
                    type: ResponseType.Response
                },
            ])
            break
    }
}