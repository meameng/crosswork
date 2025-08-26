const WorksUnit = ({id, img, tit, desc, tag1, tag2}) => {
    return (
        <li className="worksItem none">
            <button type="button" className="worksUnit" id={id}>
                <div className="worksThum">
                    <img src={img} alt={tit} />
                </div>
                <div className="worksInfo">
                    <h3 className="worksTit">{tit}</h3>
                    <p className="worksDesc">{desc}</p>
                    <ul className="tagGroup">
                        <li className="tag">{tag1}</li>
                        {tag2 && <li className="tag">{tag2}</li>}
                    </ul>
                </div>
            </button>
        </li>
    );
}

export default WorksUnit;