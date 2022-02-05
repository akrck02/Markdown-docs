import { Block } from "./block";

export class AbstractTree {

    private children: Block[];
    
    constructor() {
        this.children = [];
    }

    public getChildren(): Block[] {
        return this.children;
    }

    public addChild(child: Block) {
        this.children.push(child);
    }

    public getChild(index: number): Block {
        return this.children[index];
    }
}