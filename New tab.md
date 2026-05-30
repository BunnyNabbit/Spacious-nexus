---
draft: true
publish: false
---

${templates.linkButton {link = "https://bsky.app", icon = "bsky.app"}} ${templates.linkButton {link = "https://rayleigh.bunnynabbit.com", icon = "rayleigh.bunnynabbit.com"}} ${templates.linkButton {link = "https://www.youtube.com", icon = "www.youtube.com"}} ${templates.linkButton {link = "https://github.com/feed", icon = "github.com"}} ${templates.linkButton {link = "https://mail.google.com/mail/u/0/", icon = "mail.google.com"}} ${templates.linkButton {link = "https://en.wiktionary.org/Wiktionary:Main_Page", icon = "en.wiktionary.org"}} ${templates.linkButton {link = "https://ozone.bunnynabbit.com/", icon = "ozone.bunnynabbit.com"}} ${templates.linkButton {link = "https://margin.at/home", icon = "margin.at"}} ${templates.linkButton {link = "https://anagora.org/", icon = "anagora.org"}}

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