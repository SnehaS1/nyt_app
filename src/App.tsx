import React, { useEffect, useState } from "react";
import getPosts from "./api/posts";
import { ArticleType } from "./types";
import Header from "./components/Header";
import { NewsCard } from "./components/newsCards";

const App: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [period, setPeriod] = useState(1); // default period to 1 day

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getPosts(period);
        setError("");
        setArticles(response);
      } catch (error) {
        setError("Failed to fetch articles");
      }
    };

    fetchArticles();
  }, [period]);
  return (
    <div className="">
      <Header />
      <div className="mt-0.5 border-t-2 border-black"></div>
      <div className="flex justify-end mr-5 pt-5 gap-3">
        <h4 className="text-2xl font-bold pt-2">Most Viewed Articles top</h4>
        <select
          value={period}
          onChange={(e) => setPeriod(Number(e.target.value))}
          className="mb-4 p-2 border"
        >
          <option value={1}>1 Day</option>
          <option value={7}>7 Days</option>
          <option value={30}>30 Days</option>
        </select>
      </div>

      {error && <p>{error}</p>}
      <section className="flex justify-center py-3 ">
        <ul className=" grid  justify-center md:grid-cols-3 lg:grid-cols-3   sm:grid-cols-2 mt-3 gap-x-2 gap-y-3">
          {articles.map((article) => {
            return <NewsCard article={article} key={article.id} />;
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;
