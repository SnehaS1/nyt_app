import { render, screen } from "@testing-library/react";
import { ArticleType } from "../types";
import { NewsCard } from "../components/newsCards";

describe("NewsCard Component", () => {
  const article: ArticleType = {
    id: "1",
    title: "Test Article Title",
    abstract: "This is a test abstract for the article.",
    url: "http://example.com/article1",
  };

  it("renders the article title", () => {
    render(<NewsCard article={article} />);

    expect(screen.getByText("Test Article Title")).toBeTruthy();
  });
});
