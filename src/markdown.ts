import { H1 } from "./components/titles/h1.js";
import { H2 } from "./components/titles/h2.js";
import { H3 } from "./components/titles/h3.js";
import { H4 } from "./components/titles/h4.js";
import H5 from "./components/titles/h5.js";
import H6 from "./components/titles/h6.js";
import { Hr } from "./components/hr.js";
import { Li } from "./components/lists/li.js";
import { Bold } from "./components/format/bold.js";
import { Italic } from "./components/format/italic.js";
import { Blockquote } from "./components/paragraphs/blockquotes.js";

interface Lexer {
    matcher: (block : string) => boolean | RegExpMatchArray; 
    renderers: Array<(block : string) => string>;
}

//mardown lexer
export class Markdown {
    public static parsers: Lexer[] = [
        { matcher: Hr.match, renderers: [Hr.render] },
        { matcher: H1.match, renderers: [H1.render, Bold.render, Italic.render] },
        { matcher: H2.match, renderers: [H2.render, Bold.render, Italic.render] },
        { matcher: H3.match, renderers: [H3.render, Bold.render, Italic.render] },
        { matcher: H4.match, renderers: [H4.render, Bold.render, Italic.render] },
        { matcher: H5.match, renderers: [H5.render, Bold.render, Italic.render] },
        { matcher: H6.match, renderers: [H6.render, Bold.render, Italic.render] },
        { matcher: Li.match, renderers: [Li.render, Bold.render, Italic.render] },
        { matcher: Blockquote.match, renderers: [Blockquote.render, Bold.render, Italic.render] },
    ];

    public static markdownToHtml(input: string): string {
        const blocks = input.split(/\n\n/);
        const parsedBlocks = blocks.map((block) => {
            const parser = Markdown.parsers.find((parser) =>
                parser.matcher(block)
            );

            if (parser) {
                parser.renderers.forEach((renderer) => {
                    block = renderer(block);
                });
            } else {
                console.log(block);
                
                block = Bold.render(block);
                block = Italic.render(block);
                block = `<p>${block}</p>`;
            }
            return block;
        });

        return parsedBlocks.join("");
    }
}
