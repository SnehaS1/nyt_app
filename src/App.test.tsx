// import React from "react";
// import { render, screen, waitFor, fireEvent } from "@testing-library/react";
// import { describe, it, expect, vi } from "vitest";
// import { render, screen } from "../utils/test-utils";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import axios from "axios";
// import { it, describe, expect } from "vitest";
// import { expect } from "vitest";
import App from "./App";
// import getPosts from "../src/api/posts";
// import { ArticleType } from "../src/types";

// // Mocking the getPosts function
// vi.mock("./api/posts", () => ({
//   default: vi.fn(),
// }));

// describe("App Component", () => {
//   it("renders header", () => {
//     render(<App />);
//     expect(screen.getByText(/new york times/i)).toBeInTheDocument();
//   });

//   it("fetches and displays articles", async () => {
//     const articles: ArticleType[] = [
//       {
//         id: "1",
//         title: "Article 1",
//         abstract: "Abstract 1",
//         url: "http://example.com/article1",
//       },
//       {
//         id: "2",
//         title: "Article 2",
//         abstract: "Abstract 2",
//         url: "http://example.com/article2",
//       },
//     ];

//     (getPosts as unknown as jest.Mock).mockResolvedValue(articles);

//     render(<App />);

//     // Wait for the articles to be fetched and displayed
//     await waitFor(() =>
//       expect(screen.getByText("Article 1")).toBeInTheDocument()
//     );
//     expect(screen.getByText("Article 2")).toBeInTheDocument();
//   });

//   it("displays error message on fetch failure", async () => {
//     (getPosts as unknown as jest.Mock).mockRejectedValue(
//       new Error("Failed to fetch articles")
//     );

//     render(<App />);

//     // Wait for the error message to be displayed
//     await waitFor(() =>
//       expect(screen.getByText("Failed to fetch articles")).toBeInTheDocument()
//     );
//   });

//   it("changes period and fetches articles accordingly", async () => {
//     const articles: ArticleType[] = [
//       {
//         id: "1",
//         title: "Article 1",
//         abstract: "Abstract 1",
//         url: "http://example.com/article1",
//       },
//     ];

//     (getPosts as unknown as jest.Mock).mockResolvedValueOnce(articles);

//     render(<App />);

//     // Change the period to 7 days
//     fireEvent.change(screen.getByRole("combobox"), { target: { value: "7" } });

//     // Wait for the articles to be fetched and displayed for the new period
//     await waitFor(() =>
//       expect(screen.getByText("Article 1")).toBeInTheDocument()
//     );

//     expect(getPosts).toHaveBeenCalledWith(7);
//   });
// });
vi.mock("axios");
describe("App Component", () => {
  it("renders header", () => {
    render(<App />);
    expect(screen.getByText(/new york times/i)).toBeTruthy();
  });
  it("renders Static text", () => {
    render(<App />);
    const text = screen.getByText(/Most Viewed Articles top/i);
    expect(text).toBeTruthy();
  });
});

// import { expect, test } from "vitest";
// // import { render, screen } from "@testing-library/react";
// import { userEvent } from "@testing-library/user-event";
