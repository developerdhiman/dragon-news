import { useEffect, useState } from "react";
import { Link } from "react-router";

const LeftSide = () => {
    const [categories, setCategories] = useState([]);
        useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(response => response.json())
            .then(data => setCategories(data.data.news_category))
    }, []);
    console.log(categories);
    return (
        <section className="">
            <h2 className="font-bold">All Category</h2>
            <div className="flex flex-col gap-2 ml-3 text-lg font-semibold text-gray-500">
                {
                    categories.map(({category_id, category_name}) => (<Link to={`/category/${category_id}`} key={category_id}>{category_name}</Link>))
                }
            </div>
        </section>
    );
};

export default LeftSide;