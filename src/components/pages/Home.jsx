import React, {Fragment} from 'react';
// import SpeakerCard from "../common/speakerCard";
import logo from "../../img/logo.png";
import DysSection from "../DysSection";
import PageSection from "../PageSection";
import FaqSection from "../FaqSection";
import NewOffering from "../common/newOffering";

const Home = ({match}) => {
    return (
        <Fragment>
            <header className="container-fluid">
                <div className="container m-0 position-absolute new-offering-position">
                    {match.url ===  '/home' ? <NewOffering/> : undefined}
                </div>
                <div className="App">
                    <img className="iskcon-logo" src={logo} alt="iskcon-logo"/>
                </div>
            </header>
            <main className="container">
                <DysSection />
                <PageSection />
                <FaqSection />
            {/*<section className="container mx-3">*/}
            {/*    <PageHeading title="Our Speakers"/>*/}
            {/*            <div className="container row App">*/}
            {/*    {OurSpeakers.map((data, index) => {*/}
            {/*        return(*/}
            {/*            <SpeakerCard*/}
            {/*                key={index}*/}
            {/*                title={data[nameProperty]}*/}
            {/*                profession={data[professionProperty]}*/}
            {/*                imgUrl={data[profileProperty]}/>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*            </div>*/}
            {/*</section>*/}
            </main>
        </Fragment>
    );
};
export default Home;
