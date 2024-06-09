export const demoJson = {
    title: "DEMO SURVEY",
    description: "This is demo for our survey POC",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "text",
                    name: "Full_Name",
                    title: "Full Name ",
                    isRequired: true,
                },
                {
                    type: "dropdown",
                    name: "Gender",
                    title: "Gender",
                    isRequired: true,
                    choices: [
                        {
                            value: "MALE",
                            text: "Male",
                        },
                        {
                            value: "FEMALE",
                            text: "Female",
                        },
                        {
                            value: "OTHER",
                            text: "Other",
                        },
                    ],
                },
                {
                    type: "rating",
                    name: "Rating",
                    title:
                        "On a scale of 1 to 5, how would you rate your coding skills?",
                    isRequired: true,
                    rateType: "stars",
                },
            ],
        },
    ],
    questionErrorLocation: "bottom",
    widthMode: "responsive",
};