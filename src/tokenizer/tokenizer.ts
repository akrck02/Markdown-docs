import { AbstractTree } from "./abstractTree";
import { Block } from "./block";

export class Tokenizer {
    
    private tree : AbstractTree;

    constructor() {
        this.tree = new AbstractTree();
    }

    /**
     * Get the abstract tree of the text to be translated. 
     * @param text The text to be translated.
     * @returns The abstract tree of the text to be translated.
     */
    public tokenize(text: string): AbstractTree {
        return this.tree;
    }


    /**
     * Tokenize a line of text.
     * @param line The line of text to be tokenized.
     * @returns The block of the line of text.
     */
    private tokenizeLine(line: string): Block {
        return undefined;
    }

}