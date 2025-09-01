import "../css/about.scss"
import Header from "../components/Header";
import ContTit from "../components/ContTit";
import { useEffect } from "react";

function About() {
    // Page Fade In Effect
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');

        if (!wrapper) return;
        wrapper.classList.remove("shade");
    },[]);

    // 재직중일 때 수식화
    // const carrerPeriod = (2024 - 2017) + "년";

    return (
        <div className="wrapper shade">
            <Header/>
            <ContTit title="About Me"/>
            <div className="contArea">
                <div className="lArea">
                    <div className="aboutArea">
                        <p className="basicDesc">
                            안녕하세요. 웹퍼블리셔 <b>장수지</b>입니다.<br/>
                            그동안 다양한 프로젝틀을 수행하며 성실함과 책임감을 바탕으로 신뢰받을 수 있는 결과물을 만들어 왔습니다.<br/>
                            체계적인 업무 프로세스를 통해 안정적으로 일하는 것을 좋아하며, 끊임없이 소통하며 업무환경을 맞추어갑니다.
                            함께 일하는 동료들과 좋은 관계를 유지하며, 긍정적인 에너지를 나누고 싶습니다.<br/><br/>
                            잘 부탁드립니다.
                        </p>
                        <ul className="aboutGroup">
                            <li className="aboutUnit">
                                <h4 className="abtTit">학력</h4>
                                <ul className="dtlGroup">
                                    <li className="dtlItem">
                                        <span className="years">2011.03-2016.08</span>
                                        <span className="place">서울여자대학교</span>
                                    </li>
                                    <li className="dtlItem">
                                        <span className="years">2008.03-2011.02</span>
                                        <span className="place">수락고등학교</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="aboutUnit">
                                <h4 className="abtTit">경력 <span className="period">(6년 4개월)</span></h4>
                                <ul className="dtlGroup">
                                    <li className="dtlItem">
                                        <span className="years">2019.12-2024.12</span>
                                        <span className="place">Iworks Interactive</span>
                                    </li>
                                    <li className="dtlItem">
                                        <span className="years">2017.07-2018.10</span>
                                        <span className="place">㈜삼성금거래소</span>
                                    </li>
                                </ul>
                            </li>
                            <li className="aboutUnit">
                                <h4 className="abtTit">Skill</h4>
                                <ul className="sklGroup">
                                    <li className="skill">Html<b>(상)</b></li>
                                    <li className="skill">CSS<b>(상)</b></li>
                                    <li className="skill">JavaScript<b>(상)</b></li>
                                    <li className="skill">Jquery<b>(상)</b></li>
                                    <li className="skill">TypeScript<b>(하)</b></li>
                                    <li className="skill">SCSS<b>(중)</b></li>
                                    <li className="skill">React<b>(중)</b></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="rArea">
                    <div className="contactArea">
                        <ul className="cttGroup">
                            <li className="cttItem">
                                <div className="titleImg">
                                    <img src={process.env.PUBLIC_URL + "/images/about_profile.png"} alt="나는 장수지" />
                                </div>
                            </li>
                            <li className="cttItem">
                                <dl className="ctt">
                                    <dt><b>연락처</b> <i>Mobile</i></dt>
                                    <dd>010-4544-9346</dd>
                                </dl>
                                <dl className="ctt">
                                    <dt><b>이메일</b> <i>E-Mail</i></dt>
                                    <dd>suji0220@naver.com</dd>
                                </dl>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;