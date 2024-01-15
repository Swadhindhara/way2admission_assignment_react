import Admission from './Admission';
import Course from './Course';
import Learning from './Learning';
import Main from './Main'
import Office from './Office';
import Text from './Text';
import University from './University';

function Home() {
    return (
        <>
            <Main />
            <Text />
            <Course />
            <Admission />
            <University />
            <Learning />
            <Office  />
        </>
    )
}

export default Home;