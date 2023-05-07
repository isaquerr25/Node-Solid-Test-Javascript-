import { expect, test } from "vitest";
import { getFutureDate } from "./get-future-date";

test.only("increment date with one year", () => {
    const year = new Date().getFullYear();
    const yearFuture = new Date().getFullYear() +1;

    expect(getFutureDate(`${year}-08-10`).getFullYear()).toEqual(yearFuture )
})