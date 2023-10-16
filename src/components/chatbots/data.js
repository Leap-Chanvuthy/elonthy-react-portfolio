// new steps 
// export const steps = [
//     {
//       id: 1,
//       message: 'Hi! What is your name?',
//       trigger: 'name',
//     },
//     {
//       id: 'name',
//       user: true,
//       trigger: 'greeting',
//     },
//     {
//       id: 'greeting',
//       message: 'Nice to meet you, {previousValue}! How can I help you today?',
//       trigger: 'help',
//     },
//     {
//       id: 'help',
//       options: [
//         { value: '1', label: 'I need help with my account.', trigger: 'accountHelp' },
//         { value: '2', label: 'I have a question about your product.', trigger: 'productQuestion' },
//       ],
//     },
//     {
//       id: 'accountHelp',
//       message: 'Here are some resources for help with your account:',
//       trigger: 'resources',
//     },
//     {
//       id: 'resources',
//       options: [
//         { value: '1', label: 'FAQ', trigger: 'faq' },
//         { value: '2', label: 'Contact support', trigger: 'contactSupport' },
//       ],
//     },
//     {
//       id: 'faq',
//       message: 'Here is a link to our FAQ page:',
//       trigger: 'end',
//     },
//     {
//       id: 'contactSupport',
//       message: 'Here is a link to our contact support page:',
//       trigger: 'end',
//     },
//     {
//       id: 'productQuestion',
//       message: 'What is your question about our product?',
//       trigger: 'end',
//     },
//     {
//       id: 'end',
//       message: 'Thank you for using our chatbot! We hope we were able to help you today.',
//       trigger: null,
//     },
//   ];
  
  


// old steps


export const steps = [
    {
      id: "Greeting",
      message: "Hello👋, My name is Leap Chanvuthy, a MERN Stack developer with experience in building and maintaining complex web applications. I'm currently a third-year Software Engineering student at the Cambodia Academy of Digital Technology. Welcome to my portfolio where I use to showcase my skills.",
      trigger: "Ask name",
    },
    {
      id: "Ask name",
      message: "May I know your name?",
      trigger: "waiting1",
    },
    {
      id: "waiting1",
      user: true,
      trigger: "name",
    },
    {
      id: "name",
      message: "Hello, {previousValue}. It's really nice that I get to know you.",
      trigger: "study",
    },
    {
      id : "study",
      message : "Could you share me , What skills are you studing ?",
      trigger : "waitting2"
    },
    {
      id : "waitting2",
      user : true,
      trigger : "major"
    },
    {
      id: "major",
      message : "{previousValue} is the one of the most demanned skill in today jobs marktet . I am really glad to hear about your journey.",
      trigger : "issue"
    },
    {
              id: 'issue',
              options: [
                { value: '1', label: 'I want to know about your project', trigger: 'projects' },
                { value: '2', label: 'I want to hear about your educations', trigger: 'educations' },
              ],
            },
            {
              id: 'projects',
              message: 'I am a MERN Stack developer with experience in building and maintaining complex web applications. I am fimiliar with JavaScript, So I explore and choose it as my Tech Stacks , Here you can find :' ,
              trigger: 'resources',
            },
            {
              id: 'resources',
              options: [
                { value: '1', label: 'FAQ', trigger: 'faq' },
                { value: '2', label: 'Contact support', trigger: 'educations' },
              ],
            },
            {
              id: 'faq',
              message: 'Here is a link to our FAQ page:',
              trigger: 'end',
            },
            {
              id: 'educations',
              message: 'Here is a link to our my educations : https://t.me/Elon_Thy ',
              trigger: 'end',
            },
            {
              id: 'projects',
              message: 'What is your question about my projects?',
              trigger: 'end',
            },
            {
              id: 'end',
              message: 'Thank you for using our chatbot! We hope we were able to help you today.',
              trigger: null,
            },
  ];
  