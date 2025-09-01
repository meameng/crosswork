import "../css/home.scss"
import Header from "../components/Header";
import { useEffect } from "react";

function Home() {
    // Page Fade In Effect
    useEffect(() => {
        const wrapper = document.querySelector('.wrapper');

        if (!wrapper) return;
        wrapper.classList.remove("shade");
    },[]);

    useEffect(()=>{
        if(window.matchMedia("(min-width: 768px)").matches) {

            const mainArea = document.querySelector(".mainArea");
            const ccLine = document.querySelector(".circleLine");
            const ccUnit = document.querySelectorAll(".circleUnit");
            const avatarVideo = document.querySelector(".avatarVideo");

            // mainArea의 중심 좌표 계산
            const mainAreaRect = mainArea.getBoundingClientRect();
            const centerX = mainAreaRect.left + mainAreaRect.width / 2;
            const centerY = mainAreaRect.top + mainAreaRect.height / 2;

            ccUnit.forEach((unit, index) => {
            unit.addEventListener("mouseenter", (event) => {
                // 마우스 위치 가져오기
                const mouseX = event.clientX;
                const mouseY = event.clientY;

                // 마우스와 중심점 간의 각도 계산
                const angle = Math.atan2(mouseY - centerY, mouseX - centerX) * (180 / Math.PI);

                if (mouseX > centerX && angle >= -60 && angle <= 60) {
                    // 1. ccLine 현재 transform과 애니메이션 비활성화
                    const nowStyle = window.getComputedStyle(ccLine);
                    ccLine.style.transform = nowStyle.transform;
                    unit.style.zIndex = 9;
                    ccLine.classList.add("paused");
                    // 1-1. avatar video 일시정지
                    avatarVideo.pause();


                    // 2. Hover된 unit의 회전 각도 추출
                    const unitTrans = window.getComputedStyle(unit).transform;
                    const matrixMatch = unitTrans.match(/matrix\(([^)]+)\)/);
                    let angle = 0;
                    if (matrixMatch) {
                    const [a, b] = matrixMatch[1].split(', ').map(Number);
                    angle = Math.atan2(b, a) * (180 / Math.PI);
                    }

                    const oppositeAngle = angle + 180;
                    console.log('Hover angle:', angle, 'Opposite base:', oppositeAngle);

                    // 3. 나머지 요소에 대해 반대 방향 + [-20, -10, 0, 10, 20] 적용
                    const offsets = [-20, -10, 0, 10, 20];

                    ccUnit.forEach((otherEl, otherIndex) => {
                    if (otherIndex !== index) {
                        // hover 제외한 요소별로 순서(index)에 맞는 offset 선택
                        const offs = offsets[otherIndex];
                        otherEl.style.transform = `rotate(${oppositeAngle + offs}deg) translate(130px)`;
                    }
                    });

                    // 4. hover된 요소는 기존 transform 유지
                    unit.style.transform = unitTrans;
                    unit.classList.add("nowOn");
                }
                
            });

            unit.addEventListener("mouseleave", () => {
                ccLine.classList.remove("paused");
                // 스타일 초기화
                ccUnit.forEach((el) => {
                    el.style.zIndex = "";
                    el.style.transform = "";
                });
                unit.classList.remove("nowOn");
                avatarVideo.play();
            });
            });
        }
    },[])
    

    return (
        <div className="wrapper shade">
            <Header/>
            <div className="mainArea">
                <div className="circleArea">
                    <div className="circleWrap">
                        <video className="avatarVideo" autoPlay muted loop>
                            <source src={process.env.PUBLIC_URL + "/images/home_avatar.mp4"} type="video/mp4" />
                        </video>
                    </div>
                    <ul className="circleLine">
                        <li className="circleUnit">
                            <div className="unitTit">성실한 태도</div>
                            <p className="unitDt">
                                어떤 일이라도 차근차근<br/>
                                약속에 맞춰 진행하는 믿음직함
                            </p>
                        </li>
                        <li className="circleUnit">
                            <div className="unitTit">긍정적인</div>
                            <p className="unitDt">
                                어려운 상황에서도 늘 노력하는<br/>
                                함께 일해 즐거운 동료
                            </p>
                        </li>
                        <li className="circleUnit">
                            <div className="unitTit">체계적인</div>
                            <p className="unitDt">
                                우선순위와 흐름을 중시하여 일하는<br/>
                                혼란을 최소화하는 계획자
                            </p>
                        </li>
                        <li className="circleUnit">
                            <div className="unitTit">책임감이 강한</div>
                            <p className="unitDt">
                                맡은 일은 끝까지, 집중력과 책임감<br/>
                                신뢰를 쌓아온 믿음직한 팀원
                            </p>
                        </li>
                        <li className="circleUnit">
                            <div className="unitTit">유연한 건널목</div>
                            <p className="unitDt">
                                모두가 함께 이루는 프로젝트<br/>
                                사이를 부드럽게 이어주는 건널목
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;