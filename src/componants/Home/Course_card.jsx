function Course_card({heading, image, subHeading}) {
    return (
        <>
            <div className="course_card">
                <img src={image} alt="" />
                <h5>{heading}</h5>
                <p>{subHeading}</p>
            </div>
        </>
    )
}

export default Course_card