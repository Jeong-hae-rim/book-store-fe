import { BookReviewItem } from "@/models/book.model";
import { http, HttpResponse } from "msw";
import { fakerKO as faker } from "@faker-js/faker";

export const reviewsById = http.get(
  "http://localhost:8000/reviews/:bookId",
  () => {
    // const data: BookReviewItem[] = [
    //   {
    //     id: 1,
    //     userName: "Bob",
    //     content: "재밌네요",
    //     createdAt: "2024-01-01",
    //     score: 5,
    //   },
    //   {
    //     id: 2,
    //     userName: "Jane",
    //     content: "재밌네요",
    //     createdAt: "2024-01-01",
    //     score: 3,
    //   },
    // ];

    const mockReviewData: BookReviewItem[] = Array.from({ length: 8 }).map(
      (_, idx) => ({
        id: idx,
        userName: faker.person.firstName(),
        content: faker.lorem.paragraph(),
        createdAt: faker.date.past().toISOString(),
        score: faker.helpers.rangeToNumber({ min: 1, max: 5 }),
      })
    );

    return HttpResponse.json(mockReviewData, { status: 200 });
  }
);
