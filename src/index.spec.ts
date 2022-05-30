import test from "ava";

import { add } from "./index.js";

test("returns the sum of the numbers passed in", (t) => {
  t.is(add([1, 2, 3, 4, 5]), 15);
});

test("returns 0 if passed an empty array", (t) => {
  t.is(add([]), 0);
});

test("does not mutate the provided array", (t) => {
  t.notThrows(() => add(Object.freeze([1, 2, 3, 4, 5])));
});
