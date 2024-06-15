import { ArticleType } from "@/types";
import api from "./api";

async function getPosts(period: number): Promise<ArticleType[]> {
  const response = await api.get(`/viewed/${period}.json`);

  if (response.status !== 200) {
    throw new Error("Failed to fetch articles");
  } else {
    return response.data.results.map((article: any) => {
      return {
        id: article.id,
        title: article.title,
        abstract: article.abstract,
        url: article.url,
      };
    });
  }
}

export default getPosts;
