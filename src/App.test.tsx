import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

// import { it, describe, expect } from "vitest";
// import { expect } from "vitest";
import App from "./App";
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

describe("App Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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
    const nameInputElement3 = screen.getByDisplayValue("1 Day");
    expect(nameInputElement3).toBeTruthy();
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
});
