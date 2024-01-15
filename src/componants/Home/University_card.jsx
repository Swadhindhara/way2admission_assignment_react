function University_card({image, heading, subHeading}) {


    return (
        <>
            <div className="university_card">
                <img src={image} alt="University Image" />
                <h4>{heading}</h4>
                <p>{subHeading}</p>
            </div>
        </>
    )
}

export default University_card;