import { useState } from "react"
import Apply from "./Apply"
import Masters from "./Masters"
import Degree from "./Degree"

function Admission() {

    const [value, setValue] = useState(<Apply />)

    const master = () => {
        return setValue(<Masters />)
    }
    const degree = () => {
        return setValue(<Degree />)
    }
    const apply = () => {
        return setValue(<Apply />)
    }

    return (
        <>
            <div className="admission">
                <div className="admission_top">
                    <h2>Admission Timeline</h2>
                    <div className="tab">
                        <div className="apply" onClick={apply} ><h4>How to Apply</h4></div>
                        <div className="masters" onClick={master}><h4>MASTERS</h4></div>
                        <div className="bachelors" onClick={degree}><h4>Bachelors Degree</h4></div>
                    </div>
                    <div className="admission_top_heading"><p>WebApps Software Solution We propose a unique model of ‘Communication Co-creation. It is a form of market or business strategy
                        that emphasizes the greater realization of the relationship between a brand & its customers. It treats markets as forums for brands
                        and active customers to unite. </p></div>
                </div>
                <div className="admission_bottom">
                    {value}
                </div>
            </div>
        </>
    )
}

export default Admission