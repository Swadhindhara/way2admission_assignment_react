function Apply_box({icon, text}) {
    return (
        <>
            <div className="apply_box_card">
                <img src={icon} alt="" />
                <p>{text}</p>
            </div>
        </>
    )
}

export default Apply_box;