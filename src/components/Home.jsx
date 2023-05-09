import { Link, useLoaderData } from "react-router-dom";
import ChocolateCard from "./ChocolateCard";

const Home = () => {
    const chocolates = useLoaderData();
    
    return (
        <div className="w-1/2 mx-auto mt-5">
            <Link className="border px-5 py-2" to='/addChocolate'>New Chocolate</Link>
            <h1>Available Chocolates : {chocolates.length}</h1>
            <div className="grid md:grid-cols-3 gap-4 ">
            {
                chocolates.map(chocolate => <ChocolateCard
                key={chocolate._id}
                chocolate = {chocolate}
                ></ChocolateCard>)
            }
            </div>
        </div>
    );
};

export default Home;