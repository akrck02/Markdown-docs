export default class H6 {

    public static match(input: string): RegExpMatchArray {
        return input.match(/^######\s(.*)/);
    }

    public static render(input: string): string {
        const match = input.match(/^######\s(.*)/);
        return `<h6>${match[1]}</h6>`;
    }
    

}