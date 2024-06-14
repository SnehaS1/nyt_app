import { ArticleType } from "@/types";
import api from "./api";

async function getPosts(): Promise<ArticleType[]> {
  const response = await api.get("/viewed/1.json");

  if (response.status !== 200) {
    throw new Error("Failed to fetch articles");
  } else {
    return response.data.results;
  }
}

export default getPosts;
