import Apply_box from "./Apply_box";
import briefcase from "../../assets/briefcase-solid.svg"
import college_logo from "../../assets/uni_icon.jpg"

function Apply() {

    let applyObj = {
        icon: briefcase,
        text: "Corporate Administration"
    }

    return (
        <>
            <div className="apply_box">
                <div className="left_box">
                    <div className="left"><p>MBA application are submitted directly to the university online</p></div>
                    <h4>Popular Programs</h4>
                    <div className="programs">
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                        <Apply_box {...applyObj} />
                    </div>
                </div>
                <div className="right_box">
                <div className="right"><p>CAD 28,000 - CAD 57,000 (INR 16,80,153 - 34,20,312) per year</p></div>
                    <h4>Popular University</h4>
                    <div className="university_box">
                        <img src = {college_logo} alt="" />
                        <img src = {college_logo} alt="" />
                        <img src = {college_logo} alt="" />
                        <img src = {college_logo} alt="" />
                        <img src = {college_logo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Apply;