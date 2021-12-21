

export class Hr {

    public static match(input: string): RegExpMatchArray {
        return input.match(/^\*\*\*(.*)/)
    }


    public static render(input: string): string {
        const match = input.match(/^\*\*\*(.*)/);
        return `<hr/>` + match[1];
    }

}