import "../css/about.scss"
import Header from "../components/Header";
import ContTit from "../components/ContTit";

function About() {
    return (
        <div className="wrapper">
            <Header/>
            <ContTit title="About Me"/>
            <div className="contArea">
                <div className="lArea">
                    <div className="aboutArea">
                        <p className="basicDesc">
                            안녕하세요. 뭘 써야하지요? 그냥 소개글이요. 소개글. 흑흑<br/>
                            저는 프론트엔드 개발자입니다. 주로 반응형 웹페이지를 제작하고 있습니다.<br/>
                            HTML, CSS, JavaScript를 주로 사용하며, React도 다룰 수 있습니다.<br/>
                            웹표준과 웹접근성을 준수하는 코드를 작성하려 노력합니다.<br/>
                            새로운 기술을 배우는 것을 좋아하고, 협업하는 것을 즐깁니다.<br/>
                            사용자의 입장에서 생각하며, 더 나은 사용자 경험을 제공하기 위해 고민합니다.<br/>
                            함께 일하는 동료들과 좋은 관계를 유지하며, 긍정적인 에너지를 나누고 싶습니다.<br/>
                            감사합니다.
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
                                <h4 className="abtTit">경력</h4>
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