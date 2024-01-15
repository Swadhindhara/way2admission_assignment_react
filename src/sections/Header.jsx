function Header() {
    return (
        <>
            <div className="header">
                <div className="left_header">
                    <div className="email">
                        <i className="header_icon fa-regular fa-envelope fa-xl"></i>
                        <p>admission@way2admission.in</p>
                    </div>
                    <div className="phone">
                    <i className="header_icon fa-solid fa-phone fa-lg"></i>
                        <p>+91 9765254685</p>
                    </div>
                </div>
                <div className="right_header">
                <i className="header_icon fa-brands fa-whatsapp fa-xl"></i>
                <i className="header_icon fa-brands fa-instagram fa-xl"></i>
                <i className="header_icon fa-brands fa-youtube fa-xl"></i>
                <i className="header_icon fa-brands fa-linkedin fa-xl"></i>
                <i className="header_icon fa-brands fa-square-facebook fa-xl"></i>
                </div>
            </div>
        </>
    )
}

export default Header;