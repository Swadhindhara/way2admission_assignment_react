import Office_card from './Office_card'
import kolkata_img from "../../assets/kolkata.png"
import mumbai_img from "../../assets/mumbai.png"

function Office() {

    const kol = {
        icon: kolkata_img,
        heading: "Kolkata Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const delhi = {
        icon: mumbai_img,
        heading: "Delhi Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const pune = {
        icon: kolkata_img,
        heading: "Pune Office",
        address: "15C, Sarat Bose Road, Bhowanipore, 700020 admissions@way2admission.in +91 9038602888 +91 9038602888"
    }
    const siliguri = {
        icon: kolkata_img,
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