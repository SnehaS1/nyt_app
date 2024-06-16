import { describe, it, expect, beforeAll, afterEach, afterAll } from "vitest";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import api from "./api"; // Adjust the import path as needed

// Mock the environment variable
process.env.VITE_NYT_API_KEY = "KteMFzW41S9YabJIKGTDxipkAmaotNHn";

describe("API client", () => {
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

  it("should include the API key in the request parameters", async () => {
    // Mock the response for a sample request
    const responseData = { results: [] };
    mock.onGet("/viewed/1.json").reply(200, responseData);

    const response = await api.get("/viewed/1.json");

    // Ensure the request was made with the API key
    expect(response.config.params["api-key"]).toBe(
      process.env.VITE_NYT_API_KEY
    );
    expect(response.data.status).toEqual("OK");
    expect(response.data.results.length).toEqual(20);
  });

  it("should handle request failures", async () => {
    mock.onGet("/viewed/1.json").reply(500);

    try {
      await api.get("/viewed/1.json");
    } catch (error: any) {
      expect(error.response.status).toBeGreaterThan(200);
    }
  });
});
