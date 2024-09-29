export const json = {
  title: "Customer Satisfaction Survey",
  description: "This is survey 1",
  completedHtml: "<h3>Thank you for completing the survey !!</h3>",
  pages: [
    {
      name: "page1",
      title: "Customer Support",
      elements: [
        {
          type: "rating",
          name: "Q1",
          title:
            "How satisfied are you with the response time of our customer support team?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfied",
            },
          ],
        },
        {
          type: "rating",
          name: "Q2",
          title:
            "How effective was our customer support team in resolving your issues?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied ",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfied",
            },
          ],
        },
        {
          type: "rating",
          name: "Q3",
          title:
            "How would you rate the professionalism and courtesy of our customer support representatives?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied ",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfies",
            },
          ],
        },
        {
          type: "boolean",
          name: "Q4",
          title:
            "Were you able to reach our customer support team through your preferred communication channel (phone, email, chat, etc.)?",
          isRequired: true,
          labelTrue: "Yes",
          labelFalse: "No",
          valueTrue: 1,
          valueFalse: 0,
        },
      ],
    },
    {
      name: "page2",
      title: "Field Technicians",
      elements: [
        {
          type: "rating",
          name: "Q5",
          title:
            "How satisfied are you with the punctuality of our field technicians?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied ",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfies",
            },
          ],
        },
        {
          type: "rating",
          name: "Q6",
          title:
            "How would you rate the technical expertise and competence of our field technicians?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied ",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfies",
            },
          ],
        },
        {
          type: "rating",
          name: "Q7",
          title:
            "How satisfied are you with the overall quality of work performed by our field technicians?",
          isRequired: true,
          validators: [
            {
              type: "expression",
            },
          ],
          autoGenerate: false,
          rateValues: [
            {
              value: 1,
              text: "Very Dissatisfied ",
            },
            {
              value: 2,
              text: "Dissatisfied",
            },
            {
              value: 3,
              text: "Neutral",
            },
            {
              value: 4,
              text: "Satisfied",
            },
            {
              value: 5,
              text: "Very Satisfies",
            },
          ],
        },
        {
          type: "boolean",
          name: "Q8",
          title:
            "Did our field technicians effectively communicate the issues and solutions with you?",
          isRequired: true,
          labelTrue: "Yes",
          labelFalse: "No",
          valueTrue: 1,
          valueFalse: 0,
        },
      ],
    },
    {
      name: "page3",
      title: "Recommendation",
      elements: [
        {
          type: "rating",
          name: "Q9",
          title: "How likely are you to recommend our services to others?",
          isRequired: true,
          rateCount: 10,
          rateMax: 10,
        },
        {
          type: "html",
          name: "question10",
          title: "",
          html: '<div>\n    <div style="font-size: 1.3125rem;">NOTE</div>\n</div>\n<div style="font-size: 14px;">\n    <ul>\n        <li><strong>Privacy Statement</strong></li>\n    </ul>We value your feedback and are committed to protecting your privacy. The responses you provide in this form will be used solely for the purpose of improving our customer support and field technician services.<br>\n    <ul>\n        <li><strong>How We Use Your Data</strong>\n            <ul>\n                <li>Service Improvement: We will analyze the feedback to identify areas for improvement and enhance the quality of our services.</li>\n                <li>Internal Use Only: Your responses will be used internally and will not be shared publicly or with any third parties.</li>\n            </ul>\n        </li>\n    </ul>&nbsp;&nbsp;<ul>\n        <li><strong>Data Protection</strong></li>\n    </ul>We take data protection seriously and ensure that all feedback is stored securely. Access to your responses is restricted to authorized personnel only.<br>By submitting this form, you consent to the collection and use of your feedback as described in this statement. If you have any questions or concerns about how your data will be used, please contact us at <a href="mailto:support@ktcco.net" style="color: transparent;">support@ktcco.net</a>\n</div>',
        },
      ],
    },
  ],
  widthMode: "responsive",
  width: "9in",
};
