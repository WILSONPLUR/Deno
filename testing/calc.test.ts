import {sub, sum} from './calc.ts' //Import file
import { assertEquals } from "https://deno.land/std/testing/asserts.ts"
//Deno testing
Deno.test('Sum functions', () => {
    const result = sum(41, 1)
    assertEquals(result, 42)
})

Deno.test('Sub functions', () => {
    const result = sub(43, 1)
    assertEquals(result, 42)
})