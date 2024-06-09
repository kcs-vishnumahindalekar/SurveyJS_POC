declare namespace types {
    type TChoice = {
        value: string;
        text: string;
    }

    type TElements = {
        type: string;
        name: string;
        title: string;
        isRequired: boolean;
        choices?: TChoice[];
        rateType?: string;
    }

    type TPage = {
        name: string;
        elements: TElements[];
    }

    type TSurvey = {
        title: string;
        description: string;
        pages: TPage[];
        questionErrorLocation: string;
        widthMode: string;
    }
}