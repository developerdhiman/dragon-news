import LeftSide from "../components/layout-components/LeftSide";
import RightSide from "../components/layout-components/RightSide";
import TopSection from "../components/TopSection";

const HomeLayouts = () => {
    return (
        <div className="container mx-auto">
            <TopSection></TopSection>
            <div>
                <section className="grid grid-cols-12">
                    <aside className="col-span-3 bg-gray-100 p-4">
                        <LeftSide></LeftSide>
                    </aside>
                    <main className="col-span-6"> hielsajkfl;sf lorem223</main>
                    <aside className="col-span-3">
                        <RightSide></RightSide>
                    </aside>
                </section>
            </div>
        </div>
    );
};

export default HomeLayouts;