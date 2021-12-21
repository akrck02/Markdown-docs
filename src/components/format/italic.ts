export class Italic {
    public static match(input: string): RegExpMatchArray {
        return input.match(/^.*\*(.*)\*.*/);
    }

    public static render(input: string): string {
        return input.replaceAll(/^\s*\*(.+)\*\s*/ig, `<i>$1</i>`);
    }
}