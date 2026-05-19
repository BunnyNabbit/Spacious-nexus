---
draft: true
---

<a href="https://bsky.app"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/bsky.app.ico"></a> <a href="https://rayleigh.bunnynabbit.com/"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/rayleigh.bunnynabbit.com.ico"></a> <a href="https://www.youtube.com/"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/youtube.com.ico"></a> <a href="https://github.com/feed"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/github.com.ico"></a> <a href="https://mail.google.com/mail/u/0/"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/gmail.com.ico"></a> <a href="https://en.wiktionary.org/wiki/Wiktionary:Main_Page"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/en.wiktionary.org.ico"></a> <a href="https://ozone.bunnynabbit.com/"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/ozone.bunnynabbit.com.ico"></a> <a href="https://margin.at/home"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/margin.at.ico"></a> <a href="https://anagora.org/"><img width=32 height=32 src="https://icons.duckduckgo.com/ip3/anagora.org.ico"></a>

# Recent journal
*Create:* ${widgets.commandButton "Journal: Today"}

${some(query[[
  from p = tags.page
  where p.name:startsWith("Journal/")
  order by p.lastModified desc
  limit 10 select templates.fullPageItem(p)
]]) or "_No quick notes yet!_"}

# Recent quick notes
*Create:* ${widgets.commandButton "Quick Note"}

${some(query[[
  from p = tags.page
  where p.name:startsWith("Inbox/")
  order by p.lastModified desc
  limit 10 select templates.fullPageItem(p)
]]) or "_No quick notes yet!_"}

# Recent incomplete tasks
${some(query[[
  from t = tags.task
  where not t.done
  order by t.pageLastModified
  desc limit 10
  select templates.taskItem(t)
]]) or "_All tasks done!_"}

# Recently modified pages
${query[[
  from p = index.contentPages()
  order by p.lastModified desc
  limit 10
  select templates.fullPageItem(p) 
]]}

If you’re confused and don’t know what to do, have a look at the [Manual](https://silverbullet.md/Manual).