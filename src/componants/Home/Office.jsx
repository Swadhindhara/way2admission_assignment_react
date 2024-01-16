import Office_card from './Office_card'

function Office() {

    const kol = {
        icon: "./public/assets/kolkata.png",
        heading: "Kolkata Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const delhi = {
        icon: "./public/assets/mumbai.png",
        heading: "Delhi Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const pune = {
        icon: "./public/assets/kolkata.png",
        heading: "Pune Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const siliguri = {
        icon: "./public/assets/kolkata.png",
        heading: "Siliguri Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    return (
        <>
            <div className="office">
                <Office_card {...kol} />
                <Office_card {...delhi} />
                <Office_card {...pune} />
                <Office_card {...siliguri} />
            </div>
        </>
    )
}

export default Office