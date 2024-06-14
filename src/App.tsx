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
  console.log("sneha", process.env);
  return (
    <div>
      <Header />
      <h1 className="text-green-500">Most Popular Articles</h1>

      {error && <p>{error}</p>}

      <ul>
        {articles.map((article, index) => {
          if (index === 1) {
            console.log(article);
          }
          return (
            <>
              <NewsCard artcile={article} key={article.id} />
              <li key={index}>
                <h2>{article.title}</h2>
                {/* <p>{article.abstract}</p> */}
                {index === 1 && <NewsAvatar />}
                <Button>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </Button>
              </li>{" "}
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
