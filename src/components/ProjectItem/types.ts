export interface Project {
  id: string;
  name: string;
  period: string;
  teamSize: string;
  contribution: string;
  description: string;
  technologies?: string[];
  contributionDetails?: string[];
  troubleshooting?: {
    title: string;
    items: Array<{
      type: "problem" | "solution" | "learning";
      text: string;
      code?: string;
    }>;
    code?: {
      title: string;
      code: string;
    };
  };
}

export interface Slide {
  src: string;
  alt: string;
  title?: string;
  content: React.ReactNode;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export const getTechImages = (projectId: string): ProjectImage[] => {
  if (projectId !== "Project02") return [];

  return [
    {
      src: "/img/interviewdot/tech_ai.png",
      alt: "AI면접",
    },
    {
      src: "/img/interviewdot/tech_jwt.png",
      alt: "Spring Security / JWTUtil",
    },
    {
      src: "/img/interviewdot/tech_api.png",
      alt: "공공 데이터포털 API",
    },
  ];
};

export const getSequenceImages = (projectId: string): ProjectImage[] => {
  if (projectId !== "Project02") return [];

  return [
    {
      src: "/img/interviewdot/seq_jwt.png",
      alt: "JWTUtil 시퀀스 다이어그램",
    },
    {
      src: "/img/interviewdot/seq_qna.png",
      alt: "1:1문의 시퀀스 다이어그램",
    },
    {
      src: "/img/interviewdot/seq_success.png",
      alt: "면접, 합격자 후기 게시판 시퀀스 다이어그램",
    },
    {
      src: "/img/interviewdot/seq_report.png",
      alt: "신고 처리 시퀀스 다이어그램",
    },
  ];
};
