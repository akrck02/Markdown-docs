export class Li {
    public static match(input: string): RegExpMatchArray {
        return input.match(/^\-\s(.*)/);
    }

    public static render(input: string): string {
        const match = input.match(/^\-\s(.*)/);
        return `<li>${match[1]}</li>`;
    }
}
