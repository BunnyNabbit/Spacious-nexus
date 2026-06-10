---
draft: true
---
Used by *[[SQLite]]*.

## Case insensitivity

This is valid:

```sql
SELECT * FROM my_table
````

But this is also valid:

```sql
Select * from my_table
```

I use the latter. See my notes on [[Casing|casing]]. This might seem rather confusing. But SQL syntax should be highlighted by the editor. When it comes to in-lining statements in *[[JavaScript]]* code, I use [*Inline SQL*](https://marketplace.visualstudio.com/items?itemName=qufiwefefwoyn.inline-sql-syntax) for *[[Visual Studio Code]]*.

This will of course require something called a “tagged template string.”. There’s the [*sql-template-strings*](https://www.npmjs.com/package/sql-template-strings) package. But to just get the syntax highlighting with no extra fancy features, this function is sufficient enough for my needs:

```javascript
/**https://marketplace.visualstudio.com/items?itemName=qufiwefefwoyn.inline-sql-syntax
 *
 * @param {TemplateStringsArray} str
 * @returns {string}
 */
const sql = (str) => {
	return str.join()
}

const myQuery = sql`Select * from my_table`
```

The extra typing is there to keep *[[TypeScript]]* happy. I get that string interpolation can’t be used. But I’m handing that off to whichever is setting the prepared statement.
