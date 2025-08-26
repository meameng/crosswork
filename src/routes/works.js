import { useEffect } from "react";
import "../css/works.scss"
import ContTit from "../components/ContTit";
import WorksUnit from "../components/WorksUnit";
import PjTit from "../components/PjTit";
import PjUnit from "../components/PjUnit";

function Works() {
    useEffect(() => {
        const scrlAction = () => {
            const worksItems = document.querySelectorAll(".worksItem");
            worksItems.forEach((unit) => {
                const rect = unit.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                if (rect.top + 100 < windowHeight && rect.bottom > 0) {
                    unit.classList.remove("none");
                }
            });
        };

        // 실행 및 스크롤 이벤트 등록
        scrlAction();
        window.addEventListener("scroll", scrlAction);

        // 컴포넌트 언마운트 시 이벤트 제거
        return () => {
            window.removeEventListener("scroll", scrlAction);
        };
    }, []);

    // works&project 클릭 이벤트
    useEffect(() => {
        const pjDtls = document.querySelectorAll(".pjDetail");
        const worksUnits = document.querySelectorAll(".worksUnit");

        // Store handler references so they can be removed later
        const pjTitHandlers = [];
        pjDtls.forEach((unit) => {
            const pjTit = unit.parentElement.querySelector(".pjTit");
            if (pjTit) {
                const handler = () => {
                    // Remove 'on' from all .pjDetail except the clicked one
                    pjDtls.forEach((dtl) => {
                        if (dtl !== unit) {
                            dtl.classList.remove("on");
                        }
                    });
                    unit.classList.toggle("on");
                    if (unit.classList.contains("on")) {
                        setTimeout(() => {
                            unit.scrollIntoView({ behavior: "smooth", block: "center" });
                        }, 250)
                    }
                };
                pjTit.addEventListener("click", handler);
                pjTitHandlers.push({ pjTit, handler });
            }
        });

        const worksUnitHandlers = [];
        worksUnits.forEach((unit) => {
            const handler = () => {
                const worksId = unit.getAttribute("id");
                if (worksId) {
                    const pjId = "pj" + worksId.replace("works", "");
                    const pjDetail = document.querySelector(`#${pjId} .pjDetail`);
                    if (pjDetail) {
                        // Remove 'on' from all .pjDetail except the target one
                        pjDtls.forEach((dtl) => {
                            if (dtl !== pjDetail) {
                                dtl.classList.remove("on");
                            }
                        });
                        pjDetail.classList.toggle("on");
                        if (pjDetail.classList.contains("on")) {
                            setTimeout(() => {
                                pjDetail.scrollIntoView({ behavior: "smooth", block: "center" });
                            }, 250)
                        }
                    }
                }
            };
            unit.addEventListener("click", handler);
            worksUnitHandlers.push({ unit, handler });
        });

        return () => {
            pjTitHandlers.forEach(({ pjTit, handler }) => {
                pjTit.removeEventListener("click", handler);
            });
            worksUnitHandlers.forEach(({ unit, handler }) => {
                unit.removeEventListener("click", handler);
            });
        };
    }, []);

    return (
        <div className="wrapper">
            <ContTit title="Works"/>
            <div className="contArea">
                <div className="lArea">
                    <ul className="worksGroup">
                        <WorksUnit id="works19" img={process.env.PUBLIC_URL + "/images/works_bg19.png"} tit="KCYCLE경륜 & KBOAT경정 사이트 전체 리뉴얼" desc="한국마사회" tag1="적응형"/>
                        <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg17.png"} tit="한국마사회 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득" />
                        <WorksUnit id="works16" img={process.env.PUBLIC_URL + "/images/works_bg16.png"} tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit id="works14" img={process.env.PUBLIC_URL + "/images/works_bg14.png"} tit="2022 한국생활가이드 E-Book 정보더하기 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works11" img={process.env.PUBLIC_URL + "/images/works_bg11.png"} tit="RT-ON 교육사이트 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit id="works09" img={process.env.PUBLIC_URL + "/images/works_bg09.png"} tit="체육지도자 페이지 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works07" img={process.env.PUBLIC_URL + "/images/works_bg07.png"} tit="컴패션 LMS 교육사이트(Growing252, 북한사역훈련, HR) 3개 사이트 신규 구축" desc="한국컴패션" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works05" img={process.env.PUBLIC_URL + "/images/works_bg05.png"} tit="KIRD E-Learning 교육수강 페이지 신규 구축" desc="국가과학기술인력개발원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works03" img={process.env.PUBLIC_URL + "/images/works_bg03.png"} tit="RT Workers 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit id="works01" img={process.env.PUBLIC_URL + "/images/works_bg01.png"} tit="유지보수 통합 관리자 시스템 신규 구축" desc="Iworks Interactive" tag1="웹시스템"/>
                    </ul>
                    <ul className="worksGroup right">
                        <WorksUnit id="works20" img={process.env.PUBLIC_URL + "/images/works_bg20.png"} tit="(주)바로크레디트 외 3개 사이트 전체 리뉴얼" desc="(주)바로크레디트" tag1="적응형"/>
                        <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg18.png"} tit="e오늘의 경주 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit id="works15" img={process.env.PUBLIC_URL + "/images/works_bg15.png"} tit="Iworks Interactive 본사 홈페이지 리뉴얼" desc="Iworks Interactive" tag1="반응형"/>
                        <WorksUnit id="works12" img={process.env.PUBLIC_URL + "/images/works_bg12.png"} tit="공공스포츠클럽 등록 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works10" img={process.env.PUBLIC_URL + "/images/works_bg10.png"} tit="체육시설방역소득지원 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2=""/>
                        <WorksUnit id="works08" img={process.env.PUBLIC_URL + "/images/works_bg08.png"} tit="한국생활가이드북(13개 국어) E-Book 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works06" img={process.env.PUBLIC_URL + "/images/works_bg06.png"} tit="돌봄공동체 사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works04" img={process.env.PUBLIC_URL + "/images/works_bg04.png"} tit="코로나19 우수방역 공모전 랜딩페이지 제작" desc="국민체육진흥공단" tag1="반응형" tag2="랜딩페이지"/>
                        <WorksUnit id="works02" img={process.env.PUBLIC_URL + "/images/works_bg02.png"} tit="스포츠윤리센터 사이트 신규 구축" desc="스포츠윤리센터" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                    </ul>
                </div>
                <div className="rArea">
                    <div className="projectArea">
                        <PjTit title="2024년"/>
                        <ul className="pjGroup">
                            <PjUnit id="pj19" period="8-12월" pjTit="KCYCLE경륜 & KBOAT경정 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="한국마사회">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg19.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="6-7월" pjTit="한국생활 가이드 E-book 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit id="pj20" period="4-6월" pjTit="(주)바로크레디트 외 3개 사이트 리뉴얼" tag1="적응형" pjHost="(주)바로크레디트">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg20.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj17" period="1-4월" pjTit="한국마사회 외 2개 사이트 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="한국마사회">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg17.png"} />
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg18.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="1월" pjTit="카카오 준법과신뢰위원회 신규구축" tag1="반응형" pjHost="(주)카카오"/>
                        </ul>
                        
                        <PjTit title="2023년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="주택·상가 임대차분쟁조정위원회 메인 리뉴얼" pjHost="대한법률구조공단"/>
                            <PjUnit period="7-11월" pjTit="현대오토에버 (HMGICS & KOMOCO) 채널 통합" tag1="반응형" tag2="리액트" pjHost="현대오토에버(주)"/>
                            <PjUnit id="pj16" period="12-4월" pjTit="국민체력 100 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="국민체육진흥공단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg16.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                        </ul>
                        
                        <PjTit title="2022년"/>
                        <ul className="pjGroup">
                            <PjUnit period="11월-12월" pjTit="현대캐피탈 방문예약 시스템 제작" tag1="반응형" tag2="리액트" pjHost="현대오토에버(주)"/>
                            <PjUnit period="11월" pjTit="Iworks Interactive 솔루션 개발" pjHost="Iworks Interactive"/>
                            <PjUnit id="pj15" period="10월" pjTit="Iworks Interactive 본사페이지 리뉴얼" tag1="반응형" pjHost="Iworks Interactive">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg15.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj14" period="8-9월" pjTit="2022 정보더하기 E-book 신규구축" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg14.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="8월" pjTit="한국생활가이드 E-book 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                            <PjUnit id="pj12" period="8월" pjTit="공공스포츠클럽 등록·신청 웹 고도화" pjHost="국민체육진흥공단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg12.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="6-7월" pjTit="돌봄중앙지원센터 신규구축" tag1="반응형" pjHost="한국건강가정진흥원"/>
                            <PjUnit period="6월" pjTit="돌봄공동체 페이지 리뉴얼" tag1="반응형"pjHost="한국건강가정진흥원"/>
                            <PjUnit period="5월" pjTit="공공스포츠클럽 등록 웹 신규구축" tag1="반응형" pjHost="국민체육진흥공단"/>
                            <PjUnit id="pj11" period="4월" pjTit="RT-ON 교육사이트 신규구축" tag1="반응형" pjHost="한국방사선진흥협회">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg11.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj10" period="3-4월" pjTit="체육시설방역소득지원 웹 신규구축" pjHost="국민체육진흥공단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg10.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj09" period="1-3월" pjTit="체육지도자 웹 신규구축" tag1="반응형" tag2="웹접근성" pjHost="국민체육진흥공단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg09.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                        </ul>
                        
                        <PjTit title="2021년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="불법스포츠토토 메인 리뉴얼" tag1="반응형" pjHost="국민체육진흥공단"/>
                            <PjUnit id="pj08" period="8-12월" pjTit="한국생활가이드북(13개 국어) E-Book 신규구축" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg08.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj07" period="5-8월" pjTit="컴패션 LMS 3개 사이트 신규구축" tag1="반응형" pjHost="한국컴패션">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg07.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj06" period="4-5월" pjTit="돌봄공동체 사이트 신규구축" tag1="반응형" pjHost="한국건강가정진흥원">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg06.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj05" period="3-4월" pjTit="KIRD E-learning 교육수강 웹 신규구축" tag1="반응형" tag2="리액트" pjHost="국가과학기술인력개발원">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg05.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit id="pj04" period="2-3월" pjTit="코로나19 우수방역 공모전 랜딩페이지 제작" pjHost="국민체육진흥공단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg04.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                        </ul>
                        
                        <PjTit title="2020년"/>
                        <ul className="pjGroup">
                            <PjUnit period="12월" pjTit="SPOEX 2020 웹접근성 갱신" tag1="웹접근성" pjHost="국민체육진흥공단"/>
                            <PjUnit period="10-11월" pjTit="KOTRA 웹접근성 획득 및 성능 최적화" tag1="웹접근성" pjHost="KOTRA"/>
                            <PjUnit id="pj03" period="9-10월" pjTit="한국방사선진흥협회 구인구직사이트 신규구축" tag1="반응형" tag2="웹접근성" pjHost="한국방사선진흥협회">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg03.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="9월" pjTit="저스트인타임대부 웹 신규구축" tag1="적응형" pjHost="(주)바로크레디트"/>
                            <PjUnit id="pj02" period="7-8월" pjTit="스포츠윤리센터 웹 신규구축" tag1="반응형" tag2="웹접근성" pjHost="스포츠윤리센터 설립추진단">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg02.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                            <PjUnit period="3월" pjTit="체육인재아카데미 사이트 리뉴얼" pjHost="국민체육진흥공단"/>
                            <PjUnit period="2월" pjTit="유미캐피탈 모바일웹 신규구축" pjHost="유미캐피탈"/>
                            <PjUnit id="pj01" period="1월" pjTit="유지보수 통합관리자 시스템 신규구축" pjHost="Iworks Interactive">
                                <div className="detail">
                                    <img src={process.env.PUBLIC_URL + "/images/works_bg01.png"} />
                                    <p className="desc"></p>
                                </div>
                            </PjUnit>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;