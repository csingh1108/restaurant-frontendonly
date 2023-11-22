import {Navbar} from "./components/index.js";
import {AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu} from "./container/index.js";

const App = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUs />
            <SpecialMenu />
            <Chef />
            <Intro />
            <Laurels />
            <Gallery />
            <FindUs />
            <Footer />
        </div>
    );
};

export default App;