// NewsCard.test.tsx or NewsCard.spec.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticleType } from "../types";
import { NewsCard } from "../components/newsCards";
// Mock article data for testing
const mockArticle = {
  id: "1212",
  title: "Test Article",
  abstract: "This is a test article abstract.",
  url: "https://example.com/article",
};

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

  // it("renders the article abstract", () => {
  //   render(<NewsCard article={article} />);
  //   expect(
  //     screen.getByText("This is a test abstract for the article.")
  //   ).toBeInTheDocument();
  // });

  // it("renders the read article link", () => {
  //   render(<NewsCard article={article} />);
  //   const linkElement = screen.getByTestId("read-article-link");
  //   expect(linkElement).toBeInTheDocument();
  //   expect(linkElement).toHaveAttribute("href", "http://example.com/article1");
  // });

  // it("has the correct classes for responsive widths", () => {
  //   render(<NewsCard article={article} />);
  //   const cardElement = screen.getByTestId("news-card");
  //   expect(cardElement).toHaveClass("xs:w-[150px]");
  //   expect(cardElement).toHaveClass("sm:w-[200px]");
  //   expect(cardElement).toHaveClass("md:w-[300px]");
  //   expect(cardElement).toHaveClass("lg:w-[380px]");
  // });
});
