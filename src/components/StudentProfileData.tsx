export interface StudentProfileData {
  id: string;
  name: string;
  photoUrl: string;
  program: string;
  quote: string;
  githubUrl: string;
  expectedGraduation: string;
  sections: {
    myStory: string;
    whyThisAcademy: string;
    myExperience: string;
    whatNext: string;
  };
  progress: string[];
  mockExamSpotlight: {
    title: string;
    challenge: string;
    solution: string;
    projectImage: string;
    githubLink: string;
    liveProjectLink: string;
  };
  pullQuote: {
    mentorName: string;
    quote: string;
  };
}
