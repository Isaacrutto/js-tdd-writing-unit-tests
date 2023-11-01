// Your tests here

// I expect calling the function pointsForWord("test") will return 7

import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        const word = "tEst";

        const points = pointsForWord(word);

        expect(points).toBe(7);
    })
})