import Course_card from './Course_card'
import nursing from "../../assets/nurse-svgrepo-com.svg"
import doctor from "../../assets/doctor-svgrepo-com.svg"
import engineer from "../../assets/engineer-worker-svgrepo-com.svg"
import law from "../../assets/scales-justice-lawyer-svgrepo-com.svg"


function Course() {


    return (
        <>
            <div className="course">
                <div className="course_top">
                    <p>COURSE CATEGORIES</p>
                    <h1>From the best University</h1>
                </div>
                <div className="course_bottom">
                    <Course_card heading="ANM & Nursing" image={nursing} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Doctor Course" image={doctor} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Engineering Course" image={engineer} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Law & MA" image={law} subHeading="Empower yourself with the knowledge and skills gained through online education!" /><Course_card heading="ANM & Nursing" image={nursing} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Doctor Course" image={doctor} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Engineering Course" image={engineer} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading="Law & MA" image={law} subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                </div>
            </div>
        </>
    )
}

export default Course