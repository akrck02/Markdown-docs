export class H2 {

    public static match(input: string): RegExpMatchArray {
        return input.match(/^##\s(.*)/)
    }


    public static render(input: string): string {
        const match = input.match(/^##\s(.*)/);
        return `<h2>${match[1]}</h2>`;
    }

}