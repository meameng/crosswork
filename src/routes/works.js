import "../css/works.scss"
import ContTit from "../components/ContTit";
import WorksUnit from "../components/WorksUnit";

function Works() {
    return (
        <div className="wrapper">
            <ContTit title="Works"/>
            <div className="contArea">
                <div className="lArea">
                    <ul className="worksGroup">
                        <WorksUnit img="" tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                        <WorksUnit img="" tit="국민체력100 사이트 전체 리뉴얼" desc="국민체육진흥공단" tag1="반응형" tag2="웹접근성 인증마크 획득"/>
                    </ul>
                </div>
                <div className="rArea"></div>
            </div>
        </div>
    );
};

export default Works;