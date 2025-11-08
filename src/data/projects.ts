import { Project } from '../components/PortfolioItem/PortfolioItem';

export const webProjects: Project[] = [
  {
    id: 'Project01',
    name: 'Perfume',
    period: '3주',
    contribution: '40%',
    description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
  },
  {
    id: 'Project02',
    name: 'CampYou',
    period: '4주',
    contribution: '50%',
    description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
  },
  {
    id: 'Project03',
    name: 'Interviewdot',
    period: '5주',
    contribution: '60%',
    description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
    troubleshooting: {
      title: '트러블 슈팅',
      items: [
        {
          type: 'problem',
          text: '풀 캘린더와 채용공고의 날짜 형식이 달라 채용공고 날짜가 풀 캘린더에 표시되지 않는 문제 발생',
        },
        {
          type: 'solution',
          text: 'FORMDATA로 날짜 형식을 별도로 변경한 후 캘린더에 등록하고 데이터로 전송하도록 해결',
        },
        {
          type: 'learning',
          text: '날짜와 숫자 표시 방식이 API 요청 기관마다 다르므로 각각 별도로 설정해야 함을 학습',
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
          type: 'problem',
          text: '메일전송시 메일이 전송되면서 동시에 데이터베이스에 입력되고, 하나에 오류가 생기면 두가지 다 실행되지않게 해야하는 문제가 발생했습니다',
        },
        {
          type: 'solution',
          text: '트랜잭션을 사용해서 두가지중 하나라도 오류가 발생되면 해당 기능이 작동하지 않도록 하였습니다',
        },
        {
          type: 'learning',
          text: '트랜잭션을 사용하면 여러가지 기능을 동시에 실행함으로써 데이터 무결성을 보장 할수 있다는것을 배웠습니다',
        },
        {
          type: 'problem',
          text: '페이지 새로고침 시 정보가 사라지는 문제 발생',
        },
        {
          type: 'solution',
          text: 'REST API 데이터가 완전히 전달되지 않으면 LOADING 아이콘을 표시하고, 정보가 완전히 받아진 후에만 내용을 렌더링하도록 해결',
        },
        {
          type: 'learning',
          text: 'NEXT.js는 아래에서 위로 렌더링한다는 것을 배웠습니다',
        },
        {
          type: 'problem',
          text: '상세 검색 시 코드로만 요청이 전송되고 보이는 텍스트로는 전송되지 않는 문제 발생',
        },
        {
          type: 'solution',
          text: '선택한 INPUT 값을 텍스트 LABEL로 감싸서 사용자가 텍스트를 선택하면 해당 코드가 전송되도록 해결',
        },
        {
          type: 'learning',
          text: 'INPUT을 LABEL로 감싸면 다양한 선택 버튼을 디자인할 수 있다는 것을 배웠습니다',
        },
        {
          type: 'problem',
          text: '사용자의 상태에 따라 버튼을 다르게 가져와야 하는 상황 발생',
        },
        {
          type: 'solution',
          text: 'NEXT.JS에서는 IF문을 사용할 수 없어 삼항연산자로 문제를 해결했습니다',
        },
        {
          type: 'learning',
          text: '같은 테이블의 같은 정보라도 다른 테이블에 외래키로 두 개 이상 묶어서 다양하게 활용할 수 있게 되었습니다',
        },
        {
          type: 'problem',
          text: '채용공고 API 요청 시 JSON 파일 안에 두 가지 하위탭 안에 있는 정보를 한 번에 가져올 수 없는 문제 발생',
        },
        {
          type: 'solution',
          text: '하위탭의 하위탭을 따로 호출해 useState로 관리해 화면에 출력하도록 해결',
        },
        {
          type: 'learning',
          text: 'JSON 파일 제작 시 불필요한 정보들을 만들지 않고 깔끔하게 정리해야 하는 것을 배웠습니다',
        },
        {
          type: 'problem',
          text: '컴포넌트 내에서 SELECT를 선택 시 중복 선택이 되지 않는 문제 발생',
        },
        {
          type: 'solution',
          text: '쉼표로 구분된 문자열로 변환한 후 데이터베이스에 삽입하고, 쉼표를 제거한 후 선택된 값들을 화면에 출력하도록 해결',
        },
        {
          type: 'learning',
          text: '데이터를 하나의 문자열로 구분하면 슬라이싱해 사용할 수 있다는 점을 배웠습니다',
        },
        {
          type: 'problem',
          text: 'OPEN API 요청시 매번 다른 형식의 답변을 전달해준다는 문제가 발생했습니다',
        },
        {
          type: 'solution',
          text: '서버단에서 프롬프트를 작성하여 사용자화면에는 정해진 양식의 답변만 출력하도록했습니다',
        },
        {
          type: 'learning',
          text: '프롬프트를 상세하게 작성하고 영어로 요청하면 더 잘 구성된 답변이 나온다는것을 배웠습니다',
          code: `// User self-introduction letter (received value):
"I am a dedicated software engineer who has been developing web applications for five years. I have a strong background in JavaScript and Python, and I have worked on some successful projects. My goal is to leverage my skills and grow professionally. It is to contribute to a dynamic team."

// Feedback on the user's cover letter (received value):
"Successful Project Details Add Professional Content with a Strong Background to JavaScript and Python"

// Example of AChat's cover letter (the value provided):
"I am a dedicated software engineer with more than five years of experience in developing innovative web applications. I have increased customer satisfaction by 20% by leading a team that successfully completed complex projects three months earlier in my previous job. I have a strong background with JavaScript and Python, AWS and Agile methodology certification. My goal is to leverage my technology to contribute to a dynamic team that can continue to grow."`,
        },
      ],
      code: {
        title: '',
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
};

@Transactional
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
}

// 학력 선택 라디오 버튼
<Grid item xs={3} className="itembody">
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
    {/* 다른 라디오 버튼들... */}
  </div>
</Grid>

// 삼항연산자를 사용한 테이블 렌더링
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
))}

// 쉼표로 구분된 문자열 처리
export default function Experience({ uvo, handleCareerlistChange }) {
  const [p_career, setP_career] = React.useState([]);

  React.useEffect(() => {
    if (uvo.p_career) {
      setP_career(uvo.p_career.split(','));
    } else {
      setP_career([]);
    }
  }, [uvo.p_class]);

  const handleChange = (event) => {
    const { value } = event.target;
    setP_career(value);
    handleCareerlistChange(value.join(',').replace(/^,/, ''));
  };
}`,
      },
    },
  },
];

export const appProjects: Project[] = [
  {
    id: 'Project04',
    name: 'TrendOnAir',
    period: '6주',
    contribution: '45%',
    description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
  },
  {
    id: 'Project05',
    name: 'Okeydoggy',
    period: '4주',
    contribution: '55%',
    description: '어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구 어쩌구어쩌구어쩌구어쩌구어쩌구어쩌구어쩌 어쩌구어쩌구설명넣어줘',
  },
];

export const allProjects = [...webProjects, ...appProjects];

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find(project => project.id === id);
};

