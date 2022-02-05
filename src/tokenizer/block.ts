
export class Block {

    private text: string;
    private children: Block[];
    private type: string;

    constructor(text: string, type: string) {
        this.text = text;
        this.children = [];
        this.type = type;
    }  

    public getText(): string {
        return this.text;
    }

    public getChildren(): Block[] {
        return this.children;
    }

    public getType(): string {
        return this.type;
    }
    
}