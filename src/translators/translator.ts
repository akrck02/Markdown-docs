import { AbstractTree } from "../tokenizer/abstractTree";

export default abstract class Translator {
    public abstract translate(tree: AbstractTree): string;
}