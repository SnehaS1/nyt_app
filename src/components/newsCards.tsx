import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import { ArticleType } from "@/types";

export function NewsCard({ article }: { article: ArticleType }) {
  return (
    <Card
      className=" xs:w-[150px] sm:w-[200px] md:w-[300px] lg:w-[380px] "
      data-testid="news-card"
    >
      {/* <Card className={cn("w-[300px]")}> */}
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription className="pt-2">{article.abstract}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            data-testid="read-article-link"
          >
            Read Article
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
