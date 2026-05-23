---
draft: true
---
*[Elastic tabstops](https://nick-gravgaard.com/elastic-tabstops/)* is a text indentation/alignment system by *Nick Gravgaard*.

I’m a big fan of [[Proportional fonts|proportional fonts]] in code editors. Naturally, the idea of elastic tabstops really piqued my interest.

## So, about those tabstops?

In the age of generative AI, I can’t help but to be pessimistic. What is a system made entirely to satisfy our eyes and potentially solve a war with tabs and spaces, is something that doesn’t matter to one who doesn’t care about how the code looks.

In projects expecting all kinds of contributors, this could be rather hellish to deal with. Some projects format code using a formatter, disregarding any manual formatting. This could just be to enforce consistency, maybe make prettier. Though, the formatter could emit elastic tabstops, there is also the problem of compatibility across editors.

I feel like such a system is considered low priority for mainstream editors to implement, with their focus generally being on AI.

## What do we have now?

*Nick Gravgaard*‘s website lists some implementations. I’m noticing a few of these editors are very particular about how code is navigated. *[[Clade]]*/*Code Browser* is one example that combines it with [[Explicit folding|explicit folding]].

I am yet to see a proper implementation for *[[Visual Studio Code]]*, my go-to code editor.
