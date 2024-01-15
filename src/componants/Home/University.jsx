import University_card from "./University_card"

function University() {

    let cardObj = {
        image: "./src/assets/university.jpg",
        heading: "Welcoming Diverse Academic Backgrounds for Admission",
        subHeading: "In a nutshell, the MBA program welcomes students from diverse academic backgrounds, emphasizing the .............. "
    }


    return (
        <>
            <div className="university">
                <div className="university_top">
                    <p>EXCELLENCE IN EDUCATION</p>
                    <h1>From the best University</h1>
                </div>
                <div className="university_bottom">
                    <University_card {...cardObj}/>
                    <University_card {...cardObj}/>
                    <University_card {...cardObj}/>
                </div>
            </div>
        </>
    )
}

export default University