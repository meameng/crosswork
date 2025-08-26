const tagClass = {
    "반응형" : "respon",
    "적응형" : "adapt",
    "컴포넌트" : "comp",
    "웹접근성" : "access",
    "리액트" : "react",
}

const PjUnit = ({id, period, pjTit, tag1, tag2, pjHost, children}) => {
    return(
        <li className="pjUnit" id={id}>
            <div className="pjSumm">
                <h5 className="period">{period}</h5>
                <div className="pjTit">
                    {pjTit}
                    {tag1 && <span className={tagClass[tag1] || ""}>{tag1}</span>}
                    {tag2 && <span className={tagClass[tag2] || ""}>{tag2}</span>}
                </div>
                <div className="spacer"></div>
                <div className="pjHost">{pjHost}</div>
            </div>
            {children && (
                <div className="pjDetail">
                    {children}
                </div>
            )}
            
        </li>
    )
}

export default PjUnit;