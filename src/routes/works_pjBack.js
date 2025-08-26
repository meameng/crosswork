import "../css/works.scss"
import ContTit from "../components/ContTit";
import WorksUnit from "../components/WorksUnit";
import PjTit from "../components/PjTit";
import PjUnit from "../components/PjUnit";

function Works() {
    return (
        <div className="wrapper">
            <ContTit title="Works"/>
            <div className="contArea">
                <div className="lArea">
                    <ul className="worksGroup">
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg19.png"} tit="KCYCLE경륜 & KBOAT경정 사이트 전체 리뉴얼" desc="한국마사회" tag1="적응형"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg17.png"} tit="한국마사회 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득" />
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg16.png"} tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg14.png"} tit="2022 한국생활가이드 E-Book 정보더하기 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg11.png"} tit="RT-ON 교육사이트 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg09.png"} tit="체육지도자 페이지 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg07.png"} tit="컴패션 LMS 교육사이트(Growing252, 북한사역훈련, HR) 3개 사이트 신규 구축" desc="한국컴패션" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg05.png"} tit="KIRD E-Learning 교육수강 페이지 신규 구축" desc="국가과학기술인력개발원" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg03.png"} tit="RT Workers 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg01.png"} tit="유지보수 통합 관리자 시스템 신규 구축" desc="Iworks Interactive" tag1="웹시스템"/>
                    </ul>
                    <ul className="worksGroup right">
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg20.png"} tit="(주)바로크레디트 외 3개 사이트 전체 리뉴얼" desc="(주)바로크레디트" tag1="적응형"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg18.png"} tit="e오늘의 경주 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg15.png"} tit="Iworks Interactive 본사 홈페이지 리뉴얼" desc="Iworks Interactive" tag1="반응형"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg12.png"} tit="공공스포츠클럽 등록 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg10.png"} tit="체육시설방역소득지원 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg08.png"} tit="한국생활가이드북(13개 국어) E-Book 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg06.png"} tit="돌봄공동체 사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg04.png"} tit="코로나19 우수방역 공모전 랜딩페이지 제작" desc="국민체육진흥공단" tag1="반응형" tag2="랜딩페이지"/>
                        <WorksUnit img={process.env.PUBLIC_URL + "/images/works_bg02.png"} tit="스포츠윤리센터 사이트 신규 구축" desc="스포츠윤리센터" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                    </ul>
                </div>
                <div className="rArea">
                    <div className="projectArea">
                        <PjTit title="2024년"/>
                        <ul className="pjGroup">
                            <PjUnit period="8-12월" pjTit="KCYCLE경륜 & KBOAT경정 사이트 전체 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="한국마사회">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg19.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="6-7월" pjTit="한국생활 가이드 E-book 2개 사이트 2024년 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="4-6월" pjTit="(주)바로크레디트 외 3개 사이트 전체 리뉴얼" tag1="적응형" pjHost="(주)바로크레디트"/>
                            <PjUnit period="1-4월" pjTit="한국마사회 2개 사이트 재리뉴얼 및 웹접근성 인증 마크 획득" tag1="반응형" tag2="웹접근성" pjHost="한국마사회"/>
                            <PjUnit period="1월" pjTit="카카오 준법과신뢰위원회 사이트 제작" tag1="반응형" pjHost="(주)카카오"/>
                        </ul>
                        
                        <PjTit title="2023년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="주택·상가 임대차분쟁조정위원회 메인 리뉴얼" pjHost="대한법률구조공단"/>
                            <PjUnit period="7-11월" pjTit="현대오토에버 (HMGICS & KOMOCO) 채널 통합" tag1="반응형" tag2="리액트" pjHost="현대오토에버(주)"/>
                            <PjUnit period="12-4월" pjTit="국민체력 100 웹사이트 전체 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="국민체육진흥공단"/>
                        </ul>
                        
                        <PjTit title="2022년"/>
                        <ul className="pjGroup">
                            <PjUnit period="11월-12월" pjTit="현대캐피탈 방문예약 시스템 제작" tag1="반응형" tag2="리액트" pjHost="현대오토에버(주)"/>
                            <PjUnit period="11월" pjTit="Iworks Interactive 솔루션 개발" pjHost="Iworks Interactive"/>
                            <PjUnit period="10월" pjTit="Iworks Interactive 본사 홈페이지 리뉴얼" tag1="반응형" pjHost="Iworks Interactive"/>
                            <PjUnit period="8-9월" pjTit="2022 한국생활 가이드 E-book 정보더하기 웹사이트 신규 제작" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="8월" pjTit="한국생활 가이드 E-book 2022년 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="8월" pjTit="공공스포츠클럽 등록·신청 페이지 고도화" pjHost="국민체육진흥공단"/>
                            <PjUnit period="6-7월" pjTit="돌봄중앙지원센터 신규 구축" tag1="반응형" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="6월" pjTit="돌봄공동체 페이지 리뉴얼(메인, 서브 일부)" tag1="반응형"pjHost="한국건강가정진흥원"/>
                            <PjUnit period="5월" pjTit="공공스포츠클럽 등록 사이트 신규 구축" tag1="반응형" pjHost="국민체육진흥공단"/>
                            <PjUnit period="4월" pjTit="RT-ON 교육사이트 신규 구축" tag1="반응형" pjHost="한국방사선진흥협회"/>
                            <PjUnit period="3-4월" pjTit="체육시설방역소득지원 사이트 신규 구축" pjHost="국민체육진흥공단"/>
                            <PjUnit period="1-3월" pjTit="체육지도자 페이지 신규 구축" tag1="반응형" tag2="웹접근성" pjHost="국민체육진흥공단"/>
                        </ul>
                        
                        <PjTit title="2021년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="불법스포츠토토 메인페이지 리뉴얼" tag1="반응형" pjHost="국민체육진흥공단"/>
                            <PjUnit period="8-12월" pjTit="한국생활가이드북 (13개 국어) 페이지 신규 구축" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="5-8월" pjTit="컴패션 교육사이트(growing252, 북한사역훈련, HR 3개 사이트) 신규 구축" tag1="반응형" pjHost="한국컴패션"/>
                            <PjUnit period="4-5월" pjTit="돌봄공동체 사이트 신규 구축" tag1="반응형" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="3-4월" pjTit="KIRD E-learning 교육수강 페이지 신규 구축" tag1="반응형" tag2="리액트" pjHost="국가과학기술인력개발원"/>
                            <PjUnit period="2-3월" pjTit="코로나19 우수방역 공모전 랜딩페이지 제작" pjHost="국민체육진흥공단"/>
                        </ul>
                        
                        <PjTit title="2020년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="SPOEX 2020 웹접근성 인증마크 갱신" tag1="웹접근성" pjHost="국민체육진흥공단"/>
                            <PjUnit period="10-11월" pjTit="KOTRA 웹접근성 획득 및 성능 최적화" tag1="웹접근성" pjHost="KOTRA"/>
                            <PjUnit period="9-10월" pjTit="한국방사선진흥협회 구인구직사이트 신규구축" tag1="반응형" tag2="웹접근성" pjHost="한국방사선진흥협회"/>
                            <PjUnit period="9월" pjTit="저스트인타임대부 페이지 신규 구축" tag1="적응형" pjHost="(주)바로크레디트"/>
                            <PjUnit period="7-8월" pjTit="스포츠윤리센터 페이지 신규 구축" tag1="반응형" tag2="웹접근성" pjHost="스포츠윤리센터 설립추진단"/>
                            <PjUnit period="3월" pjTit="체육인재아카데미 사이트 리뉴얼" pjHost="국민체육진흥공단"/>
                            <PjUnit period="2월" pjTit="유미캐피탈 모바일 웹 신규 구축" pjHost="유미캐피탈"/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;