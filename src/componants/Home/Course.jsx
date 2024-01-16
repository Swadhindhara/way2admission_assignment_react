import Course_card from './Course_card'


function Course() {
//     const nursing_img = <img public="./public/assets/nurse-svgrepo-com.svg" alt="" />
//     const doctor_img = <img public="./public/assets/doctor-svgrepo-com.svg" alt="" />
//     const engineer_img = <img public="./public/assets/engineer-worker-svgrepo-com.svg" alt="" />
//     const law_img = <img public="./public/assets/scales-justice-lawyer-svgrepo-com.svg" alt="" />
    
    return (
        <>
            <div className="course">
                <div className="course_top">
                    <p>COURSE CATEGORIES</p>
                    <h1>From the best University</h1>
                </div>
                <div className="course_bottom">
                    <Course_card heading = "ANM & Nursing" image = "./public/assets/nurse-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Doctor Course" image = "./public/assets/doctor-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Engineering Course" image = "./public/assets/engineer-worker-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Law & MA" image = "./public/assets/scales-justice-lawyer-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "ANM & Nursing" image = "./public/assets/nurse-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Doctor Course" image = "./public/assets/doctor-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Engineering Course" image = "./public/assets/engineer-worker-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                    <Course_card heading = "Law & MA" image = "./public/assets/scales-justice-lawyer-svgrepo-com.svg" subHeading="Empower yourself with the knowledge and skills gained through online education!" />
                </div>
            </div>
        </>
    )
}

export default Course