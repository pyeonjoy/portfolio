import { Project } from "../components/ProjectItem/types";

export const webProjects: Project[] = [
  {
    id: "Project01",
    name: "CampYou_fullstack",
    period: "5주",
    teamSize: "4명",
    contribution: "30%",
    description:
      "캠핑장을 알아보고, 정보를 얻고, 동행까지 한번에 해결할수있는 새로운 경험을 제공하는 서비스",
    technologies: [
      "Spring MVC",
      "MyBatis",
      "JSP",
      "Spring Security",
      "소셜 로그인",
    ],
    contributionDetails: [
      "스크롤 위치에 따른 카테고리 애니메이션 제작, 메인 이미지 바로가기 슬라이드쇼",
      "다른 사용자가 평점을 남길 때마다 합산하여 평균치 출력",
      "신고시에 신고 대상자, 당사자, 신고 상세정보 전달",
      "캠핑관련된 팝업창 쿠키를 활용해 24시간동안 보지 않기",
      "유저 정보및 정지상태, 신고 처리",
      "신고 상세내용과 날짜별 정지 처리",
      "유저 현황과 커뮤니티 현황 문의내역 통계 및 시각화",
      "팝업창 이미지 관리 및 생성, 삭제",
    ],
    troubleshooting: {
      title: "트러블 슈팅",
      items: [
        {
          type: "problem",
          text: "스크롤 이벤트시 세로로 긴 이미지를 첨부했을때 시작점이 이미지 하단으로 잡혀 스크롤이 다 끝난 뒤 늦게 이미지가 출력되는 오류",
        },
        {
          type: "solution",
          text: "스크롤 이벤트시 이벤트 시작부분을과 이벤트 진행 방향을 아래에서 위가 아닌 옆으로 설정하여 해결했습니다.",
        },
        {
          type: "learning",
          text: "자바스크립트 작업시 x와 y의 개념과 ms초에 따른 다양한 연출효과를 명확히 알게되었습니다.",
        },
        {
          type: "problem",
          text: "지도 클러스터링시 너무 많은 캠핑장이 마커로 찍혀 로딩 시간이 너무 길어지는 문제가 발생",
        },
        {
          type: "solution",
          text: "지도에 보이는 마커만 찍히게 하고, 시작시 지도를 축소해서 클러스터링이 크게 된 상태로 화면을 출력했습니다.",
        },
        {
          type: "learning",
          text: "지도 API이용시 현재 화면에 보이는 마커만 출력하는법과 초기세팅의 중요성을 알게되었습니다.",
        },
        {
          type: "problem",
          text: "사용자 신고시에 로그인한 사용자의 정보와 신고대상자의 정보를 함께 가져와야하는 문제 발생",
        },
        {
          type: "solution",
          text: "신고자의 정보를 세션에서 가져오고, 신고 대상자의 정보를 게시글에서 가져와 해결했습니다.",
        },
        {
          type: "learning",
          text: "같은 테이블의 같은 정보라도 다른 테이블에 외래키로 두개이상 묶어서 다양하게 활용할 수 있게 되었습니다.",
        },
        {
          type: "problem",
          text: "사용자 신고처리시 날짜를 지정해서 정지를 하고, 언제 어떻게 풀어주어야하는지 문제 발생",
        },
        {
          type: "solution",
          text: "테이블에 없는 DAY CLASS를 VO에 만들어 MAPPER에서 활용하고, 로그인 요청시 날짜가 지나면 MAPPER 업데이트",
        },
        {
          type: "learning",
          text: "테이블에 존재하지 않더라도 VO를 다양하게 활용하고, 사용자 정보를 언제 적절히 업데이트해야하는지 알게되었습니다.",
        },
        {
          type: "problem",
          text: "사용자 별점 평가시 기존에 있던 총 평가 값에 새로운 값을 구해 평균을 출력해야하는 문제 발생",
        },
        {
          type: "solution",
          text: "사용자 화면에 출력되는 평균 컬럼 외에 총합과 평가한 인원을 더해주고 트렌젝션을 사용하여순차적으로 평균값 계산 MAPPER 업데이트",
        },
        {
          type: "learning",
          text: "결과값이 필요한경우에는 계산을 위한 따른 컬럼이 필요하고 이를 순차적으로 진행하기위해서는 트랜젝션이 필요한것을 배웠습니다.",
        },
      ],
    },
  },
  {
    id: "Project02",
    name: "Interviewdot_fullstack",
    period: "5주",
    teamSize: "5명",
    contribution: "40%",
    description:
      "AI면접 연습 시스템을 통해 지원자들이 실제 면접에 대한 자신감을 키우고, 키워드 입력만으로 효과적인 자기소개서를 준비할 수 있는 면접 커뮤니티 사이트",
    technologies: [
      "Next.js",
      "React",
      "MobX ",
      "MUI",
      "Toss Payments 결제",
      "OpenAI API",
    ],
    contributionDetails: [
      "관리자 로그인 구현 및 BCYpasswordEncoder 사용한 비밀번호 암호화",
      "OPEN AI를 사용한 자기소개서 수정 기능 구현",
      "채용공고 API 연동을 통한 채용공고 조회 및 채용공고 즐겨찾기 기능 구현",
      "풀캘린더를 이용해 일정관리 및 채용공고 동기화",
      "1:1문의 게시판 및 신고기능, STMP를 활용한 메일 구현",
      "면접 후기 게시판 및 댓글, 좋아요 등의 커뮤니티 기능 개발",
    ],
    troubleshooting: {
      title: "트러블 슈팅",
      items: [
        {
          type: "problem",
          text: "풀캘린더와 채용공고의 날짜 형식이 달라 풀캘린더에 해당 채용공고의 날짜가 출력되지않는 문제가 발생했습니다",
        },
        {
          type: "solution",
          text: "FORMDATA로 따로 날짜 형식을 바꿔준 뒤 캘린더에 등록하고 데이터에 전달했습니다",
        },
        {
          type: "learning",
          text: "날짜와 숫자표기방식은 API요청 기관마다 달라서 따로 설정을 해주어야한다는점을 배웠습니다",
          code: `const handleRecruitChange = (event) => {
  const selectedValue = event.target.value; // 선택된 값
  const selectedRecruitInfo = list.find(
    (item) => item.recrutPbancTtl === selectedValue
  );
  
  setNewEventTitle(selectedRecruitInfo ? selectedRecruitInfo.recrutPbancTtl : '');
  setRecrutPbancTtl(selectedRecruitInfo ? selectedRecruitInfo.recrutPbancTtl : '');
  setNewEventStart(selectedRecruitInfo ? formatDate(selectedRecruitInfo.pbancBgngYmd) : null);
  setNewEventEnd(selectedRecruitInfo ? formatDate(selectedRecruitInfo.pbancEndYmd) : null);
};

const formatDate = (dateString) => {
  if (!dateString) return null;
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  return \`\${year}-\${month}-\${day}\`;
};`,
        },
        {
          type: "problem",
          text: "OPEN API요청시 매번 다른 형식의 답변을 전달해준다는 문제가 발생했습니다",
        },
        {
          type: "solution",
          text: "서버단에서 프롬프트를 작성하여 사용자화면에는 정해진 양식의 답변만 출력하도록했습니다",
        },
        {
          type: "learning",
          text: "서버단에서 프롬프트형식을 지정하여 일정한 답변을 출력 할 수 있는것을 배웠습니다.",
          code: `// User self-introduction letter (received value):
"I am a dedicated software engineer who has been developing web applications for five years. I have a strong background in JavaScript and Python, and I have worked on some successful projects. My goal is to leverage my skills and grow professionally. It is to contribute to a dynamic team."

// Feedback on the user's cover letter (received value):
"Successful Project Details Add Professional Content with a Strong Background to JavaScript and Python"

// Example of AChat's cover letter (the value provided):
"I am a dedicated software engineer with more than five years of experience in developing innovative web applications. I have increased customer satisfaction by 20% by leading a team that successfully completed complex projects three months earlier in my previous job. I have a strong background with JavaScript and Python, AWS and Agile methodology certification. My goal is to leverage my technology to contribute to a dynamic team that can continue to grow."`,
        },
        {
          type: "problem",
          text: "메일전송시 메일이 전송되면서 동시에 데이터베이스에 입력되고, 하나에 오류가 생기면 두가지 다 실행되지않게 해야하는 문제가 발생했습니다",
        },
        {
          type: "solution",
          text: "트랜젝션을 사용해서 두가지중 하나라도 오류가 발생되면 해당 기능이 작동하지 않도록 하였습니다",
        },
        {
          type: "learning",
          text: "트랜젝션을 사용하면 여러가지기능을 동시에 실행함으로써 데이터 무결성을 보장 할수 있다는것을 배웠습니다",
          code: `@Transactional
public int getreportclick (ReportVO rvo) {
    int result1 = reportMapper.getreportclick1(rvo);
    int result2 = reportMapper.getreportclick2(rvo);
    int result3 = reportMapper.getreportclick3(rvo);
    int result4 = reportMapper.getreportclick4(rvo);

    // 모든 업데이트가 성공했는지 확인
    if (result1 > 0 && result2 > 0 && result3 > 0 && result4 > 0) {
        return 1;
    } else {
        throw new RuntimeException ("업데이트 중 오류 발생");
    }
}

public void sendSimpleMessage(InquiryVO inquiryVO) {
    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom("ppee1220@gmail.com");
    message.setTo(inquiryVO.getEmail());
    message.setSubject(inquiryVO.getTitle());
    message.setText(inquiryVO.getContent());
    emailSender.send(message);
}`,
        },
        {
          type: "problem",
          text: "새로고침시 정보가 날아가는 문제가 발생했습니다",
        },
        {
          type: "solution",
          text: "REST API가 완전히 전달되지 않으면 LOADING아이콘을 출력되고 정보가 완전히 전달되면 컨텐츠를 렌더링해 해결했습니다",
        },
        {
          type: "learning",
          text: "NEXT는 하단부터 순서대로 렌더링한다는점을 배웠습니다",
          code: `<Grid item xs={3} className="itembody">
  <div className="select1">
    <input
      type="radio"
      id="acbgCondNmLst1"
      name="acbgCondLst"
      value="R7010"
      checked={acbgCondLst === "R7010"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst1" className={acbgCondLst === "R7010" ? "active-label" : ""}>
      학력무관
    </label>
    <input
      type="radio"
      id="acbgCondNmLst2"
      name="acbgCondLst"
      value="R7020"
      checked={acbgCondLst === "R7020"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst2" className={acbgCondLst === "R7020" ? "active-label" : ""}>
      중졸이하
    </label>
    <input
      type="radio"
      id="acbgCondNmLst3"
      name="acbgCondLst"
      value="R7030"
      checked={acbgCondLst === "R7030"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst3" className={acbgCondLst === "R7030" ? "active-label" : ""}>
      고졸
    </label>
    <input
      type="radio"
      id="acbgCondNmLst4"
      name="acbgCondLst"
      value="R7040"
      checked={acbgCondLst === "R7040"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst4" className={acbgCondLst === "R7040" ? "active-label" : ""}>
      대졸(2~3년)
    </label>
    <input
      type="radio"
      id="acbgCondNmLst5"
      name="acbgCondLst"
      value="R7050"
      checked={acbgCondLst === "R7050"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst5" className={acbgCondLst === "R7050" ? "active-label" : ""}>
      대졸(4년)
    </label>
    <input
      type="radio"
      id="acbgCondNmLst6"
      name="acbgCondLst"
      value="R7060"
      checked={acbgCondLst === "R7060"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst6" className={acbgCondLst === "R7060" ? "active-label" : ""}>
      석사
    </label>
    <input
      type="radio"
      id="acbgCondNmLst7"
      name="acbgCondLst"
      value="R7070"
      checked={acbgCondLst === "R7070"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst7" className={acbgCondLst === "R7070" ? "active-label" : ""}>
      박사
    </label>
  </div>
</Grid>`,
        },
        {
          type: "problem",
          text: "채용정보 상세검색시 텍스트가아닌 코드로만 요청을 보낼수 있는 문제가 발생했습니다",
        },
        {
          type: "solution",
          text: "선택한 INPUT 값을 텍스트 LABEL로 묶어 사용자가 텍스트를 선택하면 해당 코드로 요청을보냈습니다",
        },
        {
          type: "learning",
          text: "INPUT을 LABEL로 묶으면 다양한 선택버튼을 디자인할 수 있다는것을 배웠습니다",
          code: `<Grid item xs={3} className="itembody">
  <div className="select1">
    <input
      type="radio"
      id="acbgCondNmLst1"
      name="acbgCondLst"
      value="R7010"
      checked={acbgCondLst === "R7010"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst1" className={acbgCondLst === "R7010" ? "active-label" : ""}>
      학력무관
    </label>
    <input
      type="radio"
      id="acbgCondNmLst2"
      name="acbgCondLst"
      value="R7020"
      checked={acbgCondLst === "R7020"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst2" className={acbgCondLst === "R7020" ? "active-label" : ""}>
      중졸이하
    </label>
    <input
      type="radio"
      id="acbgCondNmLst3"
      name="acbgCondLst"
      value="R7030"
      checked={acbgCondLst === "R7030"}
      onChange={handleRadioChange}
    />
    <label htmlFor="acbgCondNmLst3" className={acbgCondLst === "R7030" ? "active-label" : ""}>
      고졸
    </label>
  </div>
</Grid>`,
        },
        {
          type: "problem",
          text: "사용자의 상태에 따라 버튼을 다르게 가져와야 하는 상황 발생",
        },
        {
          type: "solution",
          text: "NEXT.JS에서는 IF문을 사용할 수 없어 삼항연산자로 문제를 해결했습니다",
        },
        {
          type: "learning",
          text: "같은 테이블의 같은 정보라도 다른 테이블에 외래키로 두 개 이상 묶어서 다양하게 활용할 수 있게 되었습니다",
          code: `// 삼항연산자를 사용한 테이블 렌더링
{displayedRows.map((row, index) => (
  <TableRow key={row.i_idx}>
    <TableCell sx={{ width: '100px', textAlign: 'center' }}>
      {calculateIndex(page, index)}
    </TableCell>
    <TableCell sx={{ width: '200px', textAlign: 'center' }}
               onClick={() => handleMenuClick(\`inquirydetail/\${row.i_idx}\`)}>
      <p className="ellipsis-cell">{row.i_subject}</p>
    </TableCell>
    <TableCell sx={{ width: '200px', textAlign: 'center' }}
               onClick={() => handleMenuClick(\`inquirydetail/\${row.i_idx}\`)}>
      <p className="ellipsis-cell">{row.i_content}</p>
    </TableCell>
    <TableCell sx={{ width: '100px', textAlign: 'center' }}>
      {row.i_active === '0' ? '답변대기중' : '답변완료'}
    </TableCell>
  </TableRow>
))}`,
        },
      ],
    },
  },
];

export const appProjects: Project[] = [
  {
    id: "Project03",
    name: "TrendOnAir_frontend",
    period: "1주",
    teamSize: "1명",
    contribution: "100%",
    description:
      "영화관과 OTT 플랫폼에서 가장 인기 있는 콘텐츠와 트렌드를 모아 보여주는 서비스입니다.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "React Query",
      "styled-components",
    ],
    contributionDetails: [
      "실시간 영화 트렌드 조회 : 현재 인기 있는 영화 TOP 20 실시간 업데이트",
      "실시간 TV 트렌드 조회 : 지금 화제인 TV 프로그램 실시간 랭킹",
      "커밍순 영화/TV 정보 제공 : 곧 개봉 또는 공개 예정인 콘텐츠를 카테고리별로 정리",
      "트렌드 피드 뷰 제공 : 영화 & TV 트렌드를 한 번에 볼 수 있는 통합 피드",
      "상세 콘텐츠 페이지 : 줄거리, 출연진, 예고편, OTT 제공 여부까지 한눈에 확인",
    ],
  },
  {
    id: "Project04",
    name: "Okeydoggy_frontend",
    period: "8주",
    teamSize: "5명",
    contribution: "100%",
    description:
      "강아지 훈련이 필요한 보호자와 전문 트레이너를 연결해주는 반려견 맞춤형 훈련사 매칭 시스템입니다.",
    technologies: [
      "React Native",
      "TypeScript",
      "React Query",
      "React Navigation",
      "소셜 로그인",
    ],
  },
];

export const allProjects = [...webProjects, ...appProjects];

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find((project) => project.id === id);
};
