import {
  parseDate,
  parseDateTime,
} from "https://deno.land/std/datetime/mod.ts";
import {
  dayOfYear,
  currentDayOfYear,
} from "https://deno.land/std/datetime/mod.ts";


console.log(parseDate("20-01-2019", "dd-mm-yyyy"));

console.log(dayOfYear(new Date("2019-03-11T03:24:00"))); // output: 70
console.log(currentDayOfYear()); // output: ** depends on when you run it :) **
