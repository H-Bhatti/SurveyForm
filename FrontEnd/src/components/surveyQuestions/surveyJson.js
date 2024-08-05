export const json = {
  title: "Survey 1",
  description: "This is survey 1",
  completedHtml: "<h3>Thank you for completing the survey !!</h3>",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "text",
          name: "question1",
          isRequired: true,
        },
        {
          type: "rating",
          name: "question2",
          autoGenerate: false,
          isRequired: true,
          rateValues: [
            {
              value: 1,
              text: "patrick",
            },
            {
              value: 2,
              text: "retarded",
            },
            {
              value: 3,
              text: "gay",
            },
            {
              value: 4,
              text: "ass",
            },
            {
              value: 5,
              text: "ass",
            },
          ],
        },
        {
          type: "boolean",
          isRequired: true,
          name: "question3",
        },
      ],
    },
  ],
};
