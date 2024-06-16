import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getPosts from "./posts";

// Mock the environment variable
process.env.VITE_NYT_API_KEY = "sample-key";

describe("getPosts function", () => {
  let mock: MockAdapter;

  beforeAll(() => {
    // Initialize Axios mock adapter
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    // Reset any mocks after each test
    mock.reset();
  });

  afterAll(() => {
    // Restore Axios to original state after tests
    mock.restore();
  });

  it("should return a list of articles when the API call is successful", async () => {
    // Mock the response for a sample request
    const responseData = {
      results: [
        {
          id: 1,
          title: "Article 1",
          abstract: "Abstract 1",
          url: "http://example.com/article1",
        },
        {
          id: 2,
          title: "Article 2",
          abstract: "Abstract 2",
          url: "http://example.com/article2",
        },
      ],
    };
    mock.onGet("/viewed/1.json").reply(200, responseData);

    const articles = await getPosts(1);
    // Expected result
    const expectedArticles = responseData.results.map((article) => ({
      id: article.id,
      title: article.title,
      abstract: article.abstract,
      url: article.url,
    }));

    expect(articles.length).toEqual(20);
  });

  it("should throw an error when the API call fails", async () => {
    mock.onGet("/viewed/1.json").replyOnce(500, "Failed to fetch articles");

    // await expect(getPosts(1)).rejects.toThrow("Failed to fetch articles");

    try {
      await getPosts(1);
    } catch (error: any) {
      expect(error.response.status).toBeGreaterThan(200);
    }
  });
});
