import Course_card from './Course_card'


function Course() {
//     const nursing_img = <img src="./src/assets/nurse-svgrepo-com.svg" alt="" />
//     const doctor_img = <img src="./src/assets/doctor-svgrepo-com.svg" alt="" />
//     const engineer_img = <img src="./src/assets/engineer-worker-svgrepo-com.svg" alt="" />
//     const law_img = <img src="./src/assets/scales-justice-lawyer-svgrepo-com.svg" alt="" />
    
    return (
        <>
            <div className="course">
                <div className="course_top">
                    <p>COURSE CATEGORIES</p>
                    <h1>From the best University</h1>
                </div>
                <div className="course_bottom">
                    <Course_card heading = "ANM & Nursing" image = "./src/assets/nurse-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Doctor Course" image = "./src/assets/doctor-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Engineering Course" image = "./src/assets/engineer-worker-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Law & MA" image = "./src/assets/scales-justice-lawyer-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "ANM & Nursing" image = "./src/assets/nurse-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Doctor Course" image = "./src/assets/doctor-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Engineering Course" image = "./src/assets/engineer-worker-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Law & MA" image = "./src/assets/scales-justice-lawyer-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                </div>
            </div>
        </>
    )
}

export default Course