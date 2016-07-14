describe("Words Counter", function () {
    it('should returns 2', function () {
        expect(wordsCounter("word1 word2")).toEqual(2)
    })

    it('should returns 3', function () {
        expect(wordsCounter("word1 word2 word3")).toEqual(3)
    })

    it('should returns 2', function () {
        expect(wordsCounter(" word1 word2")).toEqual(2)
    })

    it('should returns 4',function () {
        expect(wordsCounter("word1 word2 3 word4")).toEqual(4)

    })

    it('should returns 1',function () {
        expect(wordsCounter("word1-word2")).toEqual(1)
    })

    it('should returns 2',function () {
        expect(wordsCounter("  word1  word2")).toEqual(2)
    })
});