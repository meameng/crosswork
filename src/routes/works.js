import { useEffect } from "react";
import "../css/works.scss"
import Header from "../components/Header";
import ContTit from "../components/ContTit";
import WorksUnit from "../components/WorksUnit";
import PjTit from "../components/PjTit";
import PjUnit from "../components/PjUnit";

function Works() {
    // Page Fade In Effect
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');

        if (!wrapper) return;
        wrapper.classList.remove("shade");
    },[]);

    // Works Scorll Event
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
                        const pjUnit = unit.parentElement;
                        setTimeout(() => {
                            pjUnit.scrollIntoView({ behavior: "smooth", block: "start" });
                        }, 370)
                    }
                };
                pjTit.addEventListener("click", handler);
                pjTitHandlers.push({ pjTit, handler });
            }
        });

        const worksUnitHandlers = [];
        worksUnits.forEach((unit) => {
            const handler = () => {
                
                const pjList = document.querySelector(".projectWrap");

                if(window.matchMedia("(max-width: 1023px)").matches) {
                    pjList.classList.add("mOpen");
                }

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
                            const pjUnit = pjDetail.parentElement;
                            setTimeout(() => {
                                pjUnit.scrollIntoView({ behavior: "smooth", block: "start" });
                            }, 370)
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

    // Mobile PJ Button Event
    useEffect(() => {
        // Project List Button Event
        const mBtnOpen = document.querySelector(".btnOpen");
        const mBtnClose = document.querySelector(".btnClose");
        const pjList = document.querySelector(".projectWrap");
        
        function PJListBtnEvent () {
            mBtnOpen.addEventListener("click", ()=>{
                pjList.classList.add("mOpen");
            });

            mBtnClose.addEventListener("click", ()=>{
                pjList.classList.remove("mOpen");
            })
        }

        if(window.matchMedia("(max-width: 1023px)").matches) {
            PJListBtnEvent();
        }

        window.addEventListener("resize", function(){
            if(window.matchMedia("(min-width: 1024px)").matches) {
                pjList.classList.remove("mOpen");
            }
            PJListBtnEvent();
        })
    }, [])


    return (
        <div className="wrapper shade">
            <Header/>
            <ContTit title="Works"/>
            <div className="contArea">
                <div className="lArea">
                    <ul className="worksGroup">
                        <WorksUnit id="works19" img={process.env.PUBLIC_URL + "/images/works_bg19.png"} tit="KCYCLE경륜 & KBOAT경정 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형"/>
                        <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg17.png"} tit="한국마사회 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득" />
                        <WorksUnit id="works15" img={process.env.PUBLIC_URL + "/images/works_bg15.png"} tit="Iworks Interactive 본사 홈페이지 리뉴얼" desc="Iworks Interactive" tag1="반응형"/>
                        {/* <WorksUnit id="works12" img={process.env.PUBLIC_URL + "/images/works_bg12.png"} tit="공공스포츠클럽 등록 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/> */}
                        <WorksUnit id="works11" img={process.env.PUBLIC_URL + "/images/works_bg11.png"} tit="RT-ON 교육사이트 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        {/* <WorksUnit id="works10" img={process.env.PUBLIC_URL + "/images/works_bg10.png"} tit="체육시설방역소득지원 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2=""/> */}
                        <WorksUnit id="works08" img={process.env.PUBLIC_URL + "/images/works_bg08.png"} tit="한국생활가이드북(13개 국어) E-Book 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works06" img={process.env.PUBLIC_URL + "/images/works_bg06.png"} tit="돌봄공동체 사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        {/* <WorksUnit id="works04" img={process.env.PUBLIC_URL + "/images/works_bg04.png"} tit="코로나19 우수방역 공모전 랜딩페이지 제작" desc="국민체육진흥공단" tag1="반응형" tag2="랜딩페이지"/> */}
                        <WorksUnit id="works03" img={process.env.PUBLIC_URL + "/images/works_bg03.png"} tit="RT Workers 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit id="works01" img={process.env.PUBLIC_URL + "/images/works_bg01.png"} tit="유지보수 통합 관리자 시스템 신규 구축" desc="Iworks Interactive" tag1="웹시스템"/>
                    </ul>
                    <ul className="worksGroup right">
                        <WorksUnit id="works20" img={process.env.PUBLIC_URL + "/images/works_bg20.png"} tit="(주)바로크레디트 외 3개 사이트 전체 리뉴얼" desc="(주)바로크레디트" tag1="적응형"/>
                        {/* <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg18.png"} tit="e오늘의 경주 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득"/> */}
                        <WorksUnit id="works16" img={process.env.PUBLIC_URL + "/images/works_bg16.png"} tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit id="works14" img={process.env.PUBLIC_URL + "/images/works_bg14.png"} tit="2022 한국생활가이드 E-Book 정보더하기 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works09" img={process.env.PUBLIC_URL + "/images/works_bg09.png"} tit="체육지도자 페이지 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works07" img={process.env.PUBLIC_URL + "/images/works_bg07.png"} tit="컴패션 LMS 교육사이트 3개 사이트 신규 구축" desc="한국컴패션" tag1="반응형"/>
                        <WorksUnit id="works05" img={process.env.PUBLIC_URL + "/images/works_bg05.png"} tit="KIRD E-Learning 교육수강 페이지 신규 구축" desc="국가과학기술인력개발원" tag1="반응형" tag2="리액트"/>
                        <WorksUnit id="works02" img={process.env.PUBLIC_URL + "/images/works_bg02.png"} tit="스포츠윤리센터 사이트 신규 구축" desc="스포츠윤리센터" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                    </ul>

                    <ul className="worksGroup mView">
                        <WorksUnit id="works19" img={process.env.PUBLIC_URL + "/images/works_bg19.png"} tit="KCYCLE경륜 & KBOAT경정 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형"/>
                        <WorksUnit id="works20" img={process.env.PUBLIC_URL + "/images/works_bg20.png"} tit="(주)바로크레디트 외 3개 사이트 전체 리뉴얼" desc="(주)바로크레디트" tag1="적응형"/>
                        <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg17.png"} tit="한국마사회 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득" />
                        {/* <WorksUnit id="works17" img={process.env.PUBLIC_URL + "/images/works_bg18.png"} tit="e오늘의 경주 사이트 전체 리뉴얼" desc="한국마사회" tag1="반응형" tag2="웹접근성 인증마크 획득"/> */}
                        <WorksUnit id="works16" img={process.env.PUBLIC_URL + "/images/works_bg16.png"} tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit id="works15" img={process.env.PUBLIC_URL + "/images/works_bg15.png"} tit="Iworks Interactive 본사 홈페이지 리뉴얼" desc="Iworks Interactive" tag1="반응형"/>
                        <WorksUnit id="works14" img={process.env.PUBLIC_URL + "/images/works_bg14.png"} tit="2022 한국생활가이드 E-Book 정보더하기 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2="웹접근성 준수"/>
                        {/* <WorksUnit id="works12" img={process.env.PUBLIC_URL + "/images/works_bg12.png"} tit="공공스포츠클럽 등록 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/> */}
                        <WorksUnit id="works11" img={process.env.PUBLIC_URL + "/images/works_bg11.png"} tit="RT-ON 교육사이트 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        {/* <WorksUnit id="works10" img={process.env.PUBLIC_URL + "/images/works_bg10.png"} tit="체육시설방역소득지원 사이트 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2=""/> */}
                        <WorksUnit id="works09" img={process.env.PUBLIC_URL + "/images/works_bg09.png"} tit="체육지도자 페이지 신규 구축" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works08" img={process.env.PUBLIC_URL + "/images/works_bg08.png"} tit="한국생활가이드북(13개 국어) E-Book 웹사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works07" img={process.env.PUBLIC_URL + "/images/works_bg07.png"} tit="컴패션 LMS 교육사이트 3개 사이트 신규 구축" desc="한국컴패션" tag1="반응형" tag2="웹접근성 준수"/>
                        <WorksUnit id="works06" img={process.env.PUBLIC_URL + "/images/works_bg06.png"} tit="돌봄공동체 사이트 신규 구축" desc="한국건강가정진흥원" tag1="반응형" tag2=""/>
                        <WorksUnit id="works05" img={process.env.PUBLIC_URL + "/images/works_bg05.png"} tit="KIRD E-Learning 교육수강 페이지 신규 구축" desc="국가과학기술인력개발원" tag1="반응형" tag2=""/>
                        {/* <WorksUnit id="works04" img={process.env.PUBLIC_URL + "/images/works_bg04.png"} tit="코로나19 우수방역 공모전 랜딩페이지 제작" desc="국민체육진흥공단" tag1="반응형" tag2="랜딩페이지"/> */}
                        <WorksUnit id="works03" img={process.env.PUBLIC_URL + "/images/works_bg03.png"} tit="RT Workers 신규 구축" desc="한국방사선진흥협회" tag1="반응형" tag2=""/>
                        <WorksUnit id="works02" img={process.env.PUBLIC_URL + "/images/works_bg02.png"} tit="스포츠윤리센터 사이트 신규 구축" desc="스포츠윤리센터" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit id="works01" img={process.env.PUBLIC_URL + "/images/works_bg01.png"} tit="유지보수 통합 관리자 시스템 신규 구축" desc="Iworks Interactive" tag1="웹시스템"/>
                    </ul>
                </div>
                <div className="rArea">
                    <p className="basicDesc">
                        <span className="pcView">하단의 프로젝트 리스트에서</span><span className="tView">우측의 프로젝트 리스트 버튼을 클릭하여</span> 최근 5년간 참여해 온 프로젝트를 확인하실 수 있습니다.<br/>
                        <b>공공기관의 프로젝트</b>에 참여한 이력이 많으며, <b>체계적인 가이드를 통해 페이지 구성 요소를 컴포넌트화 하여 다수의 페이지를 구축하는 프로젝트가 주력</b>입니다. <br/>
                        모든 페이지는 일반적인 웹표준에 부합하며, 기본적인 부분에서 웹 접근성을 준수하도록 만들고 있습니다. <br/><br/>
                        웹페이지를 확인할 수 있는 사이트는 실사이트로 연결되도록 해 두었으나, 웹의 리뉴얼 등으로 인해 당시의 사이트를 따로 확인할 수 없는 사이트는 작업 당시 활용한 파일리스트 일부를 연결해두었습니다.<br/><br/>
                        이외 내부 시스템이거나 혹은 보안 상의 이유로 올릴 수 없는 사이트는 해당 페이지에서 상세를 확인하실 수 없습니다.
                    </p>
                    <div className="projectWrap">
                        <div className="mUnitArea">
                            <button className="btnOpen" type="button">Project List</button>
                            <div className="mTitArea">
                                <span className="mTit">Project List</span>
                                <button className="btnClose" type="button">프로젝트 리스트 닫기</button>
                            </div>
                        </div>

                        <div className="projectArea">
                            <PjTit title="2024년"/>
                            <ul className="pjGroup">
                                <PjUnit id="pj19" period="8-12월" pjTit="KCYCLE경륜 & KBOAT경정 리뉴얼" tag1="반응형" tag2="컴포넌트" pjHost="한국마사회">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg19.png"} />
                                        </div>
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://www.kcycle.or.kr/main" target="_blank" title="새창열림">경륜KCYCLE 실사이트 바로가기</a></li>
                                            <li className="linkItem"><a href="https://www.kboat.or.kr/main" target="_blank" title="새창열림">경정KBOAT 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>KCYCLE 경륜 & KBOAT 경정 사이트 전체 리뉴얼 프로젝트</b>에 참여했습니다.<br/>
                                            두 개 사이트는 한국마사회의 유관 사이트로, 서로 비슷한 성질의 사이트를 함께 리뉴얼하면서 통일성이 요구되었기에 같은 가이드, 같은 레이아웃을 다른 테마로 표현하였습니다.<br/>
                                            또한 사이트 내부에서 전달하는 기본 설명 정보와 데이터 정보가 많았기에 통일성을 위해서라도 일관된 컴포넌트 가이드가 필수적이었습니다.<br/><br/>
                                            저는 <b>메인페이지 작업과 더불어 컴포넌트 가이드 작성</b>에 큰 부분 참여하였습니다. <br/>
                                            웹접근성 인증마크가 필수 요구사항은 아니었으나 한국마사회의 메인 웹페이지가 웹접근성 인증마크를 획득하였던 경험에 비추어볼 때,
                                            추가적으로 웹접근성 심사를 받을 가능성에 대비하여 <b>기본 접근성에 준수</b>하도록 작업하였습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">가이드 작성 참여</li>
                                            <li className="summItem">Figma, Gulp, SCSS 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 40%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit period="6-7월" pjTit="한국생활 가이드 E-book 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                                <PjUnit id="pj20" period="4-6월" pjTit="(주)바로크레디트 외 3개 사이트 리뉴얼" tag1="적응형" pjHost="(주)바로크레디트">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg20.png"} />
                                        </div>
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://www.barocredit.com/" target="_blank" title="새창열림">바로크레디트(PC) 실사이트 바로가기</a></li>
                                            <li className="linkItem"><a href="https://m.barocredit.com/" target="_blank" title="새창열림">바로크레디트(mobile) 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>(주)바로크레디트대부 외 3개 사이트 전체 리뉴얼 프로젝트</b>에 참여했습니다.<br/>
                                            바로크레디트, 저스트론, 써니캐피탈의 3개 사이트로, 3개 사이트가 서로 비슷한 느낌을 공유하기를 원하셨기에 같은 가이드, 같은 레이아웃을 다른 테마로 표현하였습니다.<br/>
                                            PC 사이트와 모바일 웹에서 기본 제공하는 서비스가 달랐기 때문에 해당 사이트는 요구사항에 맞추어 적응형으로 작업하였습니다.<br/><br/>
                                            저는 기본 토대가 되는 바로크레디트의 <b>컴포넌트 가이드 작성</b>에 큰 부분 참여하였습니다. <br/>
                                            리뉴얼 이전의 해당 사이트의 유지보수를 오래 겸하였기 때문에, 퍼블리싱 코딩 이외에도 앞으로의 유지보수에 도움이 될 부분에서 의견을 더한 부분이 컸습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">가이드 작성 참여</li>
                                            <li className="summItem">Figma, Gulp, SCSS 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 30%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj17" period="1-4월" pjTit="한국마사회 외 2개 사이트 리뉴얼" tag1="반응형" tag2="웹접근성" pjHost="한국마사회">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg17.png"} />
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg18.png"} />
                                        </div>
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://www.kra.co.kr/main.do" target="_blank" title="새창열림">한국마사회 실사이트 바로가기</a></li>
                                            <li className="linkItem"><a href="https://todayrace.kra.co.kr/main.do" target="_blank" title="새창열림">e오늘의 경주 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>한국마사회 외 2개 사이트 리뉴얼 프로젝트</b>에 참여했습니다.<br/>
                                            사이트 내부에서 전달하는 기본 설명 정보이 많고, 표로 전달되는 데이터 정보가 많았기에 알아보기 쉬운 표를 통일성 있게, 더불어 PC와 Mobile에서 모두 쉽게 호환될 수 있는 일관된 컴포넌트 가이드가 필수적이었습니다. <br/><br/>

                                            저는 <b>메인페이지를 작업하였으며, 서브페이지 작업 일부</b>에 참여하였습니다. <br/>
                                            또한 이후 추가적으로 요청받은 <b>웹접근성 인증마크</b>의 획득을 위해 메인 페이지를 비롯한 전체 웹페이지의 웹접근성 보완 작업에 착수했습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">웹접근성 인증마크 획득</li>
                                            <li className="summItem">Figma, Gulp, SCSS, Javascript 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 20%</li>
                                        </ul>
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
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg16.png"} />
                                        </div>
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://nfa.kspo.or.kr/main.kspo" target="_blank" title="새창열림">국민체력100 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>국민체력100 전체 리뉴얼 프로젝트</b>에 <b>PL</b>로서 참여했습니다.<br/>

                                            웹페이지 내부에서 제공하는 설명 정보와 자료가 많았기에 <b>일관된 가이드와 반복적으로 활용할 수 있는 컴포넌트의 구성</b>이 필수적이었습니다. 또한 불특정다수의 사용자에게 체력 인증 시스템과 체력측정 시스템을 제공하고 있었기에 다양한 화면에서 원활하게 작동하는 입력 폼을 구현했습니다.<br/><br/>
                                            해당 프로젝트에서 PL을 맡았기에, 저는 프로젝트 일정을 관리하고 <b>메인페이지 작업과 더불어 컴포넌트 가이드를 주도하여 작성</b>하였습니다. <br/>
                                            또한 리뉴얼 구축 작업 당시 <b>웹접근성 인증마크</b>를 요구받았기에 웹접근성에 기반하여 작업하였고, 프로젝트가 끝난 후 무사히 인증마크를 획득하였습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">가이드 작성</li>
                                            <li className="summItem">웹접근성 인증마크 획득</li>
                                            <li className="summItem">Zeplin, jQuery 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 70%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                            </ul>
                            
                            <PjTit title="2022년"/>
                            <ul className="pjGroup">
                                <PjUnit period="11월-12월" pjTit="현대캐피탈 방문예약 시스템 제작" tag1="반응형" tag2="리액트" pjHost="현대오토에버(주)"/>
                                <PjUnit period="11월" pjTit="Iworks Interactive 솔루션 개발" pjHost="Iworks Interactive"/>
                                <PjUnit id="pj15" period="10월" pjTit="Iworks Interactive 본사페이지 리뉴얼" tag1="반응형" pjHost="Iworks Interactive">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg15.png"} />
                                        </div>
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="http://crosswork.dothome.co.kr/contents/15_iworks/filelist.html" target="_blank" title="새창열림">Iworks Interactive 파일리스트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            SI 기업 <b>Iworks Interactive 본사 홈페이지 리뉴얼 프로젝트</b>에 참여했습니다.<br/>
                                            리뉴얼 이전의 사이트는 많은 스크롤 이벤트와 애니메이션 동작 이벤트를 포함하고 있어, 웹사이트에 접속한 직후 본문에 접근하기가 번거롭다는 의견에 따라 조금 더 간소화된 페이지를 작업하게 되었습니다.<br/><br/>
                                            해당 사이트의 전반은 직접 작업하였으며, 내부 업무였으므로 본사의 기획자와 디자이너와 저, 세 명이서 협의해가며 구축을 완료하였습니다. 
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지, 서브페이지 전반 작업</li>
                                            <li className="summItem">Figma, jQuery 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 100%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj14" period="8-9월" pjTit="2022 정보더하기 E-book 신규구축" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg14.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://plus.k-guide.kr/KOR/main.do" target="_blank" title="새창열림">정보더하기 E-Book 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>2022 한국생활안내 정보더하기 가이드 E-Book 구축 프로젝트</b>에 참여했습니다.<br/>
                                            전 연도(2021년)에 진행하였던 한국생활안내 가이드 E-Book 구축 프로젝트에 연계되어 이듬해 진행된 프로젝트로, 기존에 활용하였던 E-Book 프로젝트의 가이드를 활용하여 또 다른 E-Book 페이지를 구축했습니다.<br/>
                                            기존에 PDF로 제공하고 있었던 가이드북의 내용을 웹페이지로 옮겨온 것이기 때문에, 도서의 문서 레이아웃을 사용하듯이 일정한 틀 안에서 다양한 내용을 깨짐없이 반복 활용할 수 있는 <b>컴포넌트 가이드</b>를 만드는 것이 중요한 작업이었습니다.<br/>
                                            또한 13개 국어의 언어를 지원하고 있기 때문에 텍스트가 예상 외로 길어지거나, 한글과 다른 방식으로 사용하는 경우까지 포용할 수 있어야 했습니다.<br/><br/>
                                            저는 해당 페이지의 <b>메인페이지를 작업</b>하였고, 가이드를 구성하는 데 적극 참여했습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">가이드 작성 참여</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 60%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit period="8월" pjTit="한국생활가이드 E-book 현행화" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원"/>
                                <PjUnit id="pj12" period="8월" pjTit="공공스포츠클럽 등록·신청 웹 고도화" pjHost="국민체육진흥공단"/>
                                <PjUnit period="6-7월" pjTit="돌봄중앙지원센터 신규구축" tag1="반응형" pjHost="한국건강가정진흥원"/>
                                <PjUnit period="6월" pjTit="돌봄공동체 페이지 리뉴얼" tag1="반응형"pjHost="한국건강가정진흥원"/>
                                <PjUnit period="5월" pjTit="공공스포츠클럽 등록 웹 신규구축" tag1="반응형" pjHost="국민체육진흥공단"/>
                                <PjUnit id="pj11" period="4월" pjTit="RT-ON 학습관리시스템(LMS) 신규구축" tag1="반응형" tag2="리액트" pjHost="한국방사선진흥협회">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg11.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://lms.ratis.or.kr/ratis/hnfTrnng/main/retrieveHnfTrnngMain.do" target="_blank" title="새창열림">RT-ON 학습관리시스템(LMS) 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>RT-ON 학습관리시스템(LMS) 구축 프로젝트</b>에 참여했습니다.<br/>
                                            해당 프로젝트는 사이트 내부에서 교육 안내와 수강신청을 진행하고, 학습 과제, 동영상 강의, 출결 등을 관리할 수 있는 LMS 사이트를 구축하기 위함이었습니다.<br/>
                                            리액트 프로젝트로 진행되었기에 가이드를 확고히 하고, 모든 구성요소를 컴포넌트화하여 쉽게 반복 활용할 수 있도록 나누어 작업하였습니다.<br/><br/>
                                            저는 <b>메인페이지를 작업하고, 서브페이지 중 강의와 학습</b>부분 구축에 참여하였습니다. 
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">서브페이지 일부 참여</li>
                                            <li className="summItem">React 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 30%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj10" period="3-4월" pjTit="체육시설방역소득지원 웹 신규구축" pjHost="국민체육진흥공단"/>
                                <PjUnit id="pj09" period="1-3월" pjTit="체육지도자 웹 신규구축" tag1="반응형" pjHost="국민체육진흥공단">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg09.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://sqms.kspo.or.kr/index.kspo" target="_blank" title="새창열림">체육지도자 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>KSPO 체육지도자 웹페이지 신규구축 프로젝트</b>에 참여했습니다.<br/>
                                            체육지도자 자격 제도를 위한 웹페이지로, 자격 시험에 대한 안내와 원서 접수 신청, 지난 시험의 문제와 정답을 공개하고 자격증 확인서를 발급하기 위한 사이트였습니다.<br/>
                                            사이트에서 분류하고 있는 지도자의 분야가 다양했기에 개인이 자신에게 각자 필요한 정보를 찾기 쉽도록 웹페이지를 구성했습니다.<br/><br/>
                                            저는 <b>메인페이지를 작업하고, 서브페이지 전반의 작업</b>에 참여하였습니다. <br/>
                                            웹접근성 인증마크가 필수 요구사항은 아니었으나 기존에 유지보수 관리하고 있던 KSPO의 사이트들을 생각하였기에, 
                                            추가적으로 웹접근성 심사를 받을 가능성에 대비하여 <b>기본 접근성에 준수</b>하도록 작업하였습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">서브페이지 작업 전반 참여</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 50%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                            </ul>
                            
                            <PjTit title="2021년"/>
                            <ul className="pjGroup">
                                <PjUnit period="12월" pjTit="불법스포츠토토 메인 리뉴얼" tag1="반응형" pjHost="국민체육진흥공단"/>
                                <PjUnit id="pj08" period="8-12월" pjTit="한국생활가이드북(13개 국어) E-Book 신규구축" tag1="반응형" tag2="컴포넌트" pjHost="한국건강가정진흥원">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg08.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://k-guide.kr/KOR/main.do" target="_blank" title="새창열림">한국생활안내 E-Book 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>2021 한국생활안내 가이드 E-Book 구축 프로젝트</b>에 참여했습니다.<br/>
                                            한국에서 거주하고 있는 외국인들을 위한 가이드 웹사이트로, 기존에 PDF로 제공하고 있었던 가이드북을 웹으로 옮겨 좀 더 간편하게 접근할 수 있도록 하기 위한 프로젝트였습니다. <br/>
                                            기반이 가이드북이었던 만큼, 도서의 문서 레이아웃을 사용하듯이 일정한 틀 안에서 다양한 내용을 깨짐없이 반복 활용할 수 있는 <b>컴포넌트 가이드</b>를 만드는 것이 중요한 작업이었습니다.<br/>
                                            또한 13개 국어의 언어를 지원하고 있기 때문에 텍스트가 예상 외로 길어지거나, 한글과 다른 방식으로 사용하는 경우까지 포용할 수 있어야 했습니다.<br/><br/>
                                            해당 사이트는 <b>2021 웹어워드 코리아 공공정보분야 최우수상</b>을 수상했습니다.<br/>
                                            저는 해당 페이지의 <b>메인페이지를 작업</b>하였고, 가이드를 구성하는 데 적극 참여했습니다.
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">가이드 작성 참여</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 40%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj07" period="5-8월" pjTit="컴패션 LMS 3개 사이트 신규구축" tag1="반응형" pjHost="한국컴패션">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg07.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="https://g252.compassion.or.kr/index.do" target="_blank" title="새창열림">Growing252 실사이트 바로가기</a></li>
                                            <li className="linkItem"><a href="https://nkhope.compassion.or.kr/index.do" target="_blank" title="새창열림">북한사역훈련 실사이트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>한국컴패션 LMS 3개 사이트 신규 구축 프로젝트</b>에 참여했습니다.<br/>
                                            기부단체 한국컴패션에서 LMS 사이트 3개(Growing252, 북한사역훈련, HR)를 신규 구축하는 프로젝트였습니다. <br/>
                                            3개 사이트는 각기 비슷한 레이아웃을 가졌기에, 3개 작업을 동시에 진행할 수 있었습니다.<br/>
                                            사이트 내부에서 학기 운영정보, 각 교사와 회원 관리, 교육 신청은 물론 진단평가, 영상 제공, 온라인 시험, 과제, 설문까지 전반을 <b>마이페이지의 팝업</b>으로 운용하도록 되어 있었기에 원활한 UI의 구성이 필요했습니다.<br/><br/>

                                            저는 <b>서브페이지 전반</b>에 큰 부분 참여하였습니다. <br/>
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">서브페이지 작업 전반 참여</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 50%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj06" period="4-5월" pjTit="돌봄공동체 사이트 신규구축" tag1="반응형" pjHost="한국건강가정진흥원">
                                    {/* <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg06.png"} />
                                        </div>
                                    </div> */}
                                </PjUnit>
                                <PjUnit id="pj05" period="3-4월" pjTit="KIRD E-learning 교육수강 웹 신규구축" tag1="반응형" tag2="리액트" pjHost="국가과학기술인력개발원">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg05.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="http://crosswork.dothome.co.kr/contents/05_kird/guide/filelist.html" target="_blank" title="새창열림">KIRD E-Learning 파일리스트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>KIRD E-Learning 교육수강 웹 사이트 신규 구축 프로젝트</b>에 참여했습니다.<br/>
                                            사이트 내부에서 각 교육의 강의실 홈과 동영상, 시험, 과제, 설문 등이 모두 가능하도록 포함하고 있는 사이트였습니다.<br/>
                                            <b>리액트 프로젝트로 진행하여 각 구성요소를 모두 컴포넌트화</b> 하고, 컴포넌트를 파일로 구분하여 관리하며 웹 구축을 진행하였습니다.<br/><br/>
                                            저는 <b>전반적인 서브페이지 제작에 참여하고, 컴포넌트 일부 작성</b>에 큰 부분 참여하였습니다. <br/>
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">서브페이지 작업</li>
                                            <li className="summItem">컴포넌트 작성 참여</li>
                                            <li className="summItem">React 등 사용</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 40%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit id="pj04" period="2-3월" pjTit="코로나19 우수방역 공모전 랜딩페이지 제작" pjHost="국민체육진흥공단"/>
                            </ul>
                            
                            <PjTit title="2020년"/>
                            <ul className="pjGroup">
                                <PjUnit period="12월" pjTit="SPOEX 2020 웹접근성 갱신" tag1="웹접근성" pjHost="국민체육진흥공단"/>
                                <PjUnit period="10-11월" pjTit="KOTRA 웹접근성 획득 및 성능 최적화" tag1="웹접근성" pjHost="KOTRA"/>
                                <PjUnit id="pj03" period="9-10월" pjTit="한국방사선진흥협회 구인구직사이트 신규구축" tag1="반응형" pjHost="한국방사선진흥협회">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg03.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="http://crosswork.dothome.co.kr/contents/03_radiation_invita/filelist.html" target="_blank" title="새창열림">RT Workers 파일리스트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>한국방사선진흥협회 구인구직사이트(RT Workers) 신규 구축 프로젝트</b>에 참여했습니다.<br/>
                                            방사선 분야 전용의 구인구직 채용 사이트로, 채용지원 공고, 이력서 등록, 입사 지원, 제안 등 구인구직에 필요한 기능 전반을 포함하고 있는 사이트였습니다.<br/>
                                            전체 페이지의 수가 많고, 구인구직 사이트 특성 상 비슷한 페이지를 다른 용도로 변형하여 사용하는 일이 많았기에 통일된 구성으로 쉽게 활용할 수 있도록 작업했습니다.<br/><br/>

                                            해당 사이트는 <b>2021 웹어워드 코리아 취업정보분야 대상</b>을 수상했습니다.<br/>
                                            저는 <b>전반적인 서브페이지 제작</b>에 참여하였습니다. <br/>
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">서브페이지 작업</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 40%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit period="9월" pjTit="저스트인타임대부 웹 신규구축" tag1="적응형" pjHost="(주)바로크레디트"/>
                                <PjUnit id="pj02" period="7-8월" pjTit="스포츠윤리센터 웹 신규구축" tag1="반응형" tag2="웹접근성" pjHost="스포츠윤리센터 설립추진단">
                                    <div className="detail">
                                        <div className="imgGroup">
                                            <img src={process.env.PUBLIC_URL + "/images/works_bg02.png"} />
                                        </div>
                                        
                                        <ul className="linkList">
                                            <li className="linkItem"><a href="http://crosswork.dothome.co.kr/contents/02_ethics/filelist.html" target="_blank" title="새창열림">스포츠윤리센터 파일리스트 바로가기</a></li>
                                        </ul>
                                        
                                        <p className="basicDesc">
                                            <b>스포츠윤리센터 웹 신규구축 프로젝트</b>에 참여했습니다.<br/>
                                            당시 새로 설립된 스포츠윤리센터의 새 웹페이지를 신규 구축했습니다. 사이트 내부에 기관 설명과 신고 안내, 신고 페이지, 신고 결과 등을 확인할 수 있도록 했습니다.<br/><br/>
                                            저는 <b>메인페이지와 서브페이지 전반 구축</b>에 큰 부분 참여하였습니다. <br/>
                                            또한 작업 완료 후 <b>웹접근성 인증마크</b>까지 무사히 획득하였습니다. 
                                        </p>

                                        <ul className="pjSummGroup">
                                            <li className="summItem">메인페이지 작업</li>
                                            <li className="summItem">웹접근성 인증마크 획득</li>
                                            <li className="summItem">퍼블리싱 작업 기여도 70%</li>
                                        </ul>
                                    </div>
                                </PjUnit>
                                <PjUnit period="3월" pjTit="체육인재아카데미 사이트 리뉴얼" pjHost="국민체육진흥공단"/>
                                <PjUnit period="2월" pjTit="유미캐피탈 모바일웹 신규구축" pjHost="유미캐피탈"/>
                                <PjUnit id="pj01" period="1월" pjTit="유지보수 통합관리자 시스템 신규구축" pjHost="Iworks Interactive" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;