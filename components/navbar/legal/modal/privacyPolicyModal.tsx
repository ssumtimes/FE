"use client";

import { Button, ModalContent } from "@nextui-org/react";

interface IMenu {
  onClose: () => void;
}

export default function PrivacyPolicyModal({ onClose }: IMenu) {
  return (
    <ModalContent>
      {(onClose) => (
        <div className="px-4 py-3 text-xs overflow-auto">
          <div className="flex justify-between ">
            <span className="text-lg font-extrabold">개인정보처리방침</span>
            <Button color="danger" size="sm" onPress={onClose}>
              close
            </Button>
          </div>
          <div className=" mt-10">
            <span>
              주식회사 케미컴퍼니(이하 ‘회사’라 한다)는 개인정보 보호법 제30조에 따라 정보 주체의 개인정보를 보호하고
              이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립,
              공개합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제1조 (개인정보의 처리목적)</span>
            <span>
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는
              이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한
              조치를 이행할 예정입니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>1. 홈페이지 회원 가입 및 관리</span>
            <span>
              회원 가입 의사 확인, 회원제 서비스 제공에 따른 본인 식별․인증, 회원자격 유지․관리, 제한적 본인확인제
              시행에 따른 본인확인, 서비스 부정 이용 방지, 만 14세 미만 아동의 개인정보처리 시 법정대리인의 동의 여부
              확인, 각종 고지․통지, 고충 처리 등을 목적으로 개인정보를 처리합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>2. 재화 또는 서비스 제공</span>
            <span>
              물품 배송, 서비스 제공, 서비스 이용 안내, 계약서 및 청구서 발송, 콘텐츠 제공, 맞춤서비스 제공, 여행 및
              모임 개최정보 안내, 여정 및 모임 진행정보 안내, 본인인증, 연령인증, 요금 결제 및 정산, 채권추심 등을
              목적으로 개인정보를 처리합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>3. 고충 처리</span>
            <span>
              민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락․통지, 처리 결과 통보 등의 목적으로 개인정보를
              처리합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제2조 (개인정보의 처리 및 보유기간)</span>
            <span>
              ① 회사는 법령에 따른 개인정보 보유, 이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보
              보유, 이용 기간 내에서 개인정보를 처리, 보유합니다.
            </span>
            <span>② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>1. 홈페이지 회원 가입 및 관리 : 사업자/단체 홈페이지 탈퇴 시까지</span>
            <span>다만, 다음의 사유에 해당하는 경우에는 해당 사유 종료 시까지</span>
            <span>1&#41; 관계 법령 위반에 따른 수사, 조사 등이 진행 중인 경우에는 해당 수사, 조사 종료 시까지</span>
            <span>2&#41; 홈페이지 이용에 따른 채권 및 채무관계 잔존 시에는 해당 채권, 채무 관계 정산 시까지</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>2. 재화 또는 서비스 제공 : 재화․서비스 공급완료 및 요금결제․정산 완료 시까지</span>
            <span>다만, 다음의 사유에 해당하는 경우에는 해당 기간 종료 시까지</span>
            <span>
              1&#41 「전자상거래 등에서의 소비자 보호에 관한 법률」에 따른 표시․광고, 계약내용 및 이행 등 거래에 관한
              기록
            </span>
            <span>- 표시․광고에 관한 기록 : 6월</span>
            <span>- 계약 또는 청약 철회, 대금결제, 재화 등의 공급기록 : 5년</span>
            <span>- 소비자 불만 또는 분쟁 처리에 관한 기록 : 3년</span>
            <span>2&#41; 「통신비밀보호법」 제41조에 따른 통신사실확인자료 보관</span>
            <span>
              - 가입자 전기통신일시, 개시․종료 시간, 상대방 가입자 번호, 사용도수, 발신기지국 위치추적자료 : 1년
            </span>
            <span>- 컴퓨터 통신, 인터넷 로그 기록자료, 접속지 추적자료 : 3개월</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제3조(이용자 및 법정대리인의 권리와 그 행사 방법)</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>① 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.</span>
            <span>1. 개인정보 열람 요구</span>
            <span>2. 오류 등이 있을 경우 정정 요구</span>
            <span>3. 삭제요구</span>
            <span>4. 처리정지 요구</span>
            <span>
              ② 제1항에 따른 권리 행사는 회사에 대해 서면, 전화, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며
              회사는 이에 대해 지체없이 조치하겠습니다.
            </span>
            <span>
              ③ 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할
              때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
            </span>
            <span>
              ④ 제1항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 하실 수 있습니다.
              이 경우 개인정보 보호법 시행규칙 별지 제11호 서식에 따른 위임장을 제출하셔야 합니다.
            </span>
            <span>
              ⑤ 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의
              개인정보 및 사생활을 침해하여서는 아니 됩니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제4조(처리하는 개인정보 항목)</span>
            <span>회사는 다음의 개인정보 항목을 처리하고 있습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>1. 홈페이지 회원 가입 및 관리</span>
            <span>
              필수항목 : ID, 성명, 성별, 이메일주소, 연락처, 생년월일, 아이핀번호, 암호화된 이용자 확인값(CI) 선택항목 :
              거주지, 직업 또는 직장명, 연 소득 구간, 키, 이상형, 가치관
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>2. 재화 또는 서비스 제공</span>
            <span>
              필수항목 : 성명, 성별, 연락처, 이메일주소, 생년월일, 직업 또는 직장명, 직무, 최종 학력, 외모 관련 사진,
              키, 체중, 이상형, 가치관, 신용카드번호, 은행계좌정보 등 결제정보
            </span>
            <span>선택항목 : 연 소득 구간, 전공, MBTI</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>
              3. 인터넷 서비스 이용과정에서 아래 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다. IP주소, 쿠키,
              MAC주소, 서비스 이용기록, 방문기록, 불량 이용기록 등
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제5조(개인정보의 파기)</span>
            <span>
              ① 회사는 개인정보 보유 기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당
              개인정보를 파기합니다.
            </span>
            <span>
              ② 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에
              따라 개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나
              보관장소를 달리하여 보존합니다.
            </span>
            <span>③ 개인정보 파기의 절차 및 방법은 다음과 같습니다.</span>
            <span>1. 파기 절차</span>
            <span>
              회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를
              파기합니다.
            </span>
            <span>2. 파기 방법</span>
            <span>
              회사는 전자적 파일 형태로 기록․저장된 개인정보는 기록을 재생할 수 없도록 로우레밸포멧(Low Level Format)
              등의 방법을 이용하여 파기하며, 종이 문서에 기록․저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제6조(개인정보의 안전성 확보조치)</span>
            <span>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 하고 있습니다.</span>
            <span>1. 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등</span>
            <span>
              2. 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보 등의 암호화,
              보안프로그램 설치
            </span>
            <span>3. 물리적 조치 : 전산실, 자료보관실 등의 접근통제</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제7조(개인정보 자동 수집 장치의 설치∙운영 및 거부에 관한 사항)</span>
            <span>
              ① 회사는 이용자에게 개별적인 맞춤 서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는
              ‘쿠키(cookie)’를 사용합니다.
            </span>
            <span>
              ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의 컴퓨터 브라우저에 보내는 소량의 정보이며
              이용자들의 컴퓨터 내의 하드디스크에 저장되기도 합니다.
            </span>
            <span>
              가. 쿠키의 사용 목적: 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및 이용형태, 인기 검색어,
              보안접속 여부, 등을 파악하여 이용자에게 최적화된 정보 제공을 위해 사용됩니다.
            </span>
            <span>
              나. 쿠키의 설치∙운영 및 거부 : 웹브라우저 상단의 도구&gt;인터넷 옵션&gt;개인정보 메뉴의 옵션 설정을 통해
              쿠키 저장을 거부 할 수 있습니다.
            </span>
            <span>다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수 있습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span className="font-semibold">제8조(개인정보 보호책임자)</span>
            <span>
              ① 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및
              피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>▶ 개인정보 보호책임자</span>
            <span>성명: 표수민</span>
            <span>직책: 대표</span>
            <span>이메일 : ssomtimes22@gmail.com</span>
            <span>
              ② 정보주체께서는 회사의 서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만 처리,
              피해구제 등에 관한 사항을 개인정보 보호책임자 및 담당부서로 문의하실 수 있습니다. 회사는 정보주체의 문의에
              대해 지체없이 답변 및 처리해드릴 것입니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>제9조(개인정보 열람청구)</span>
            <span>
              정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다. 회사는
              정보주체의 개인정보 열람 청구가 신속하게 처리되도록 노력하겠습니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>제10조(권익침해 구제 방법)</span>
            <span>정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제, 상담 등을 문의하실 수 있습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>▶ 개인정보 침해신고센터 (한국인터넷진흥원 운영)</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>▶ 개인정보 분쟁조정위원회</span>
            <span>- 소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)</span>
            <span>- 홈페이지 : www.kopico.go.kr</span>
            <span>- 전화 : (국번없이) 1833-6972</span>
            <span>- 주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>▶ 대검찰청 사이버범죄수사단 : 02-3480-3573 (www.spo.go.kr)</span>
            <span>▶ 경찰청 사이버안전국 : 182 (http://cyberbureau.police.go.kr)</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>제11조(개인정보 처리방침 시행 및 변경)</span>
            <span>이 개인정보 처리방침은 2024. 09. 01부터 적용됩니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>※ 유의 사항 (공통 안내 사항)</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>[참가 자격]</span>
            <span>- 미성년자, 기혼자는 참가할 수 없습니다. (사실혼 포함)</span>
            <span>- 신청 정보에 허위/위조 사실이 발견되면 참석이 취소될 수 있습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>[참가자 선정]</span>
            <span>- 참가 신청서의 내용을 바탕으로 서비스 운영자가 참가자를 선정합니다.</span>
            <span>
              - 참가자 선정 결과 발표 당일 중, 참가 대상자로 선정된 분들께 문자메시지(SMS) 또는 카카오톡 채널을 통해
              참가 의사 최종 확인을 진행합니다.
            </span>
            <span>
              - 참가 의사를 기한 내 회신하지 않을 경우, 참가 의사가 없는 것으로 간주하여 참가 대상에서 제외됩니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>[취소/환불]</span>
            <span>- 참가 신청을 취소하려면 1:1문의 메일로 불참 의사를 전달해주세요.</span>
            <span>- 최종 참가자로 선정된 분들만 참가비 결제를 진행합니다.</span>
            <span>
              - 최종 참가자 확정 안내가 나간 후에는 취소/환불이 불가합니다. (단, 직계가족 경조사, 재해, 질병 등 긴급하고
              부득이한 사유로 인정될 만한 사정이 있는 경우에는 증빙서류 제출을 해주시면 환불을 진행해 드립니다.)
            </span>
            <span>
              {" "}
              - 개최 최소 인원 미달로 인한 행사 취소 시 사전에 개별 연락 드립니다. . 6:6 모임의 최소인원: 10명(남자5,
              여자5)
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>[행사 당일 진행]</span>
            <span>- 행사 당일 신분증으로 본인 확인을 진행합니다. 신분증을 꼭 가져와 주세요.</span>
            <span>- 개최 장소까지는 개별 이동입니다.</span>
            <span className="pl-2">
              단, 개최 장소에 따라 각 회차마다 교통편 예매 또는 픽업을 지원해드리는 경우가 있습니다.
            </span>
            <span className="pl-2">자세한 내용은 최종 참가자에게 별도로 안내해 드립니다.</span>
            <span>- 행사 중 사진 촬영이 진행될 수 있으며, 얼굴을 가리고 행사 후기에 활용됩니다.</span>
            <span>- 행사 당일의 교통/기상 상황 등 현지 여건에 따라 일정 및 프로그램이 일부 변경될 수 있습니다.</span>
            <span>- 안전하고 원활한 진행을 위해 운영자의 안내/진행과 질서 유지에 협조 부탁 드립니다.</span>
            <span>- 다른 참가자의 개인정보를 요구하거나, 무단으로 수집/이용하는 행위는 금지입니다.</span>
            <span>- 질병, 신체 이상 등의 사유로 개별 관리가 필요하여 단체 행사의 원활한 참여에 어려움이 있거나,</span>
            <span>
              영업, 종교 포교, 홍보 등 행사의 목적과 관계 없는 사유로 참여하였거나, 정당한 사유 없이 행사 진행에 지장을
              초래하는 경우에는 참석 거절 또는 퇴소 조치 될 수 있으며, 환불 불가 합니다.
            </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>[기타 사항]</span>
            <span>- 참가자 선정을 위한 목적으로 개인정보를 수집/이용합니다.</span>
            <span>- 최종 선택 매칭 시 서로 연락처를 교환해 드립니다.</span>
            <span>- 회원 정보에 등록되어 있는 연락처로만 연락 드리오니 연락처를 정확하게 등록해 주시기 바랍니다.</span>
            <span>
              - 본 행사는 여행자 보험에 가입되어 있지 않습니다. 개인 부주의에 의한 안전 사고는 참여자 본인의 책임입니다.
            </span>
            <span>- 신청서에 기재된 정보를 바탕으로 이상형 매칭을 통해 참가자를 선정합니다.</span>
            <span>
              그러나 주최자가 각 참가자 이상형의 완전한 합치 및 신청서 기재 정보의 사실 여부를 보장하는 것은 아닙니다.
            </span>
            <span>- 썸타임즈은 다른 사람과 함께하는 곳입니다.</span>
            <span> 환경에 민감하거나 성격이 예민하신 분 등 단체 활동이 어려우신 분은 하트트래블과 맞지 않습니다.</span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>- 문의처: 마이페이지&gt;1:1문의 또는 </span>
          </div>
          <div className=" mt-4 flex flex-col space-y-1">
            <span>ssomtimes22@gmail.com</span>
          </div>
        </div>
      )}
    </ModalContent>
  );
}
