export class H3 {

    public static match(input: string): RegExpMatchArray {
        return input.match(/^###\s(.*)/);
    }

    public static render(input: string): string {
        const match = input.match(/^###\s(.*)/);
        return `<h3>${match[1]}</h3>`;
    }
    
}