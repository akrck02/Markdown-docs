export class Blockquote {

    public static match(input: string): RegExpMatchArray {
        return input.match(/^>\s(.*)/);
    }

    public static render(input: string): string {
        const match = input.match(/^>\s(.*)/);
        return `<blockquote>${match[1]}</blockquote>`;
    }

}