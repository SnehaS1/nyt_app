// import React from "react";
// import { render, screen, waitFor, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";
// import { render, screen } from "../utils/test-utils";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import axios from "axios";
import getPosts from "./api/posts";

// import { it, describe, expect } from "vitest";
// import { expect } from "vitest";
import App from "./App";
import { ArticleType } from "./types";
import { act } from "react";

vi.mock("axios");
// jest.mock("./components/newsCards.tsx", () => {
//   return {
//     NewsCard: ({ article }: { article: ArticleType }) => (
//       <div data-testid="news-card">
//         <h2>{article.title}</h2>
//         <p>{article.abstract}</p>
//       </div>
//     ),
//   };
// });
vi.mock("./api/posts");
global.fetch = vi.fn();
function createFetchResponse(data: ArticleType[]) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}
const mockArticles: ArticleType[] = [
  {
    id: "1",
    title: "Article 1",
    abstract: "Abstract 1",
    url: "http://example.com/1",
  },
  {
    id: "2",
    title: "Article 2",
    abstract: "Abstract 2",
    url: "http://example.com/2",
  },
  {
    id: "3",
    title: "Article 3",
    abstract: "Abstract 3",
    url: "http://example.com/3",
  },
];
describe("App Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  const articles: ArticleType[] = [
    {
      id: "1",
      title: "Article 1",
      abstract: "Abstract 1",
      url: "http://example.com/1",
    },
    {
      id: "2",
      title: "Article 2",
      abstract: "Abstract 2",
      url: "http://example.com/2",
    },
    {
      id: "3",
      title: "Article 3",
      abstract: "Abstract 3",
      url: "http://example.com/3",
    },
  ];
  it("renders header", () => {
    render(<App />);
    expect(screen.getByText(/new york times/i)).toBeTruthy();
  });
  it("renders Static text", () => {
    render(<App />);
    const text = screen.getByText(/Most Viewed Articles top/i);
    expect(text).toBeTruthy();
  });
  test("check initial state value", () => {
    render(<App />);
    const dropdown = screen.getByRole("combobox");
    const nameInputElement3 = screen.getByDisplayValue("1 Day");
    expect(nameInputElement3).toBeTruthy();

    // fireEvent.change(dropdown, { target: { value: "7" } });
    // expect(await screen.findByText(/7 Days/i)).toBeTruthy();
    // expect(dropdown).toBeTruthy();
  });
  test("check change of state", () => {
    render(<App />);
    const dropdown = screen.getByRole("combobox");
    act(() => {
      fireEvent.change(dropdown, { target: { value: 7 } });
    });
    screen.debug();
    const nameInputElement3 = screen.getByDisplayValue("7 Days");
    expect(nameInputElement3).toBeTruthy();
  });
  it("renders list of articles", async () => {
    const articles = [
      {
        id: "1",
        title: "Article 1",
        abstract: "Abstract 1",
        url: "http://example.com/article1",
      },
      {
        id: "2",
        title: "Article 2",
        abstract: "Abstract 2",
        url: "http://example.com/article2",
      },
    ];
  });
  // it("renders list of articles", async () => {
  //   const articles = [
  //     {
  //       id: "1",
  //       title: "Article 1",
  //       abstract: "Abstract 1",
  //       url: "http://example.com/article1",
  //     },
  //     {
  //       id: "2",
  //       title: "Article 2",
  //       abstract: "Abstract 2",
  //       url: "http://example.com/article2",
  //     },
  //   ];

  //   jest.mock("./api/posts");

  //   // ...

  //   (getPosts as jest.Mock).mockResolvedValue(mockArticles);
  //   render(<App />);
  //   screen.debug();
  // });
});

// import { expect, test } from "vitest";
// // import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
