import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://dummyjson.com/todos", () => {
    return HttpResponse.json([
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
    ]);
  }),
];
