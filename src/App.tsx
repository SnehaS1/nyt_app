import React, { useEffect, useState } from "react";
import api from "./api/api";
import { Button } from "./components/ui/button";
import { NewsCard } from "./components/newsCards";
import { NewsAvatar } from "./components/newsAvatar";
import getPosts from "./api/posts";
import { ArticleType } from "./types";
import Header from "./components/Header";

interface Article {
  title: string;
  abstract: string;
  url: string;
}

const App: React.FC = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getPosts();
        setError("");
        setArticles(response);
      } catch (error) {
        setError("Failed to fetch articles");
      }
    };

    fetchArticles();
  }, []);
  return (
    <div className="">
      <Header />
      <h1 className="text-green-500">Most Popular Articles</h1>

      {error && <p>{error}</p>}

      <ul className="p-20">
        {articles.map((article, index) => {
          if (index === 1) {
            console.log(article);
          }
          return (
            <div className="border-2 border-red-200">
              <p>{article.id}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
