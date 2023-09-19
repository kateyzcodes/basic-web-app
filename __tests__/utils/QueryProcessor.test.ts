import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return katelynz description', () => {
        const query = "katelynz";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "Katelyn Zheng is a third year CMU student majoring "+
            "in Information Systems with a concentration in "+
            "Data Analytics and a minor in Social and Political History."
          ));
    });

    test('should add numbers', () => {
        expect(QueryProcessor("What is 5 plus 52?")).toEqual("57");
        expect(QueryProcessor("What is 12 plus 1?")).toEqual("13");
    });

    test('should subtract numbers', () => {
        expect(QueryProcessor("What is 10 minus 7?")).toEqual("3");
        expect(QueryProcessor("What is 80 minus 34?")).toEqual("46");
    });

    test('should multiply numbers', () => {
        expect(QueryProcessor("What is 10 multiplied by 7?")).toEqual("70");
        expect(QueryProcessor("What is 80 multiplied by 11?")).toEqual("880");
    });
});