function Office_card({icon, heading, address}) {


    return (
        <>
            <div className="office_card">
                <img src={icon} alt="" />
                <div className="office_card_content">
                    <h4>{heading}</h4>
                    <p>{address}</p>
                </div>
            </div>
        </>
    )
}

export default Office_card;