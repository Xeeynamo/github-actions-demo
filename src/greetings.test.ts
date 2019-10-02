import * as greetings from './greetings'

[
    { param: "GitHub Actions", expect: "Hello GitHub Actions!" },
    { param: "world", expect: "Hello world!" },
    { param: "", expect: "Hello world!" },
].forEach(x => {
    it(`should return ${x.expect} when param is ${x.param}`, () => {
        const actual = greetings.getGreeting(x.param)
        
        expect(actual).toBe(x.expect)
    })
})
