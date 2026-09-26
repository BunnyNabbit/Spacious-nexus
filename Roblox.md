---
draft: true
---
## Snippets

### Edit place imagery metadata

A user had trouble editing icons and thumbnails of places in an experience. This is because users are required to have permission to create items in groups. I found a workaround in the form of a *[[JavaScript]]* snippet, which bypasses the need to upload images to a group.

These snippets are to be evaluated on `www.roblox.com` using the browser’s *JavaScript* console. To update place icon:

```javascript
const request = { "assetId": 16180728229, "icon": "assets/17834257611" }
const requestData = JSON.stringify(request)
$.ajax({
    method: "PATCH",
    url: `https://apis.roblox.com/assets/user-auth/v1/assets/${request.assetId}?updateMask=icon`,
    data: `------WebKitFormBoundaryzjvow1gvD1jQHkba\r\nContent-Disposition: form-data; name="request"\r\n\r\n${requestData}\r\n------WebKitFormBoundaryzjvow1gvD1jQHkba--\r\n`,
    headers: {
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryzjvow1gvD1jQHkba",
    }
}).then(data => {
    console.log(data)
}).fail(error => {
    console.error(error)
})
```

And for thumbnails.

```javascript
const request = {"assetId":16180728229,"previews":[{"asset":"assets/17834257611","altText":"A bird is using a tool to create blocks."}]}
const requestData = JSON.stringify(request)
$.ajax({
    method: "PATCH",
    url: `https://apis.roblox.com/
/assets/user-auth/v1/assets/${request.assetId}?updateMask=previews`,
    data: `------WebKitFormBoundaryzjvow1gvD1jQHkba\r\nContent-Disposition: form-data; name="request"\r\n\r\n${requestData}\r\n------WebKitFormBoundaryzjvow1gvD1jQHkba--\r\n`,
    headers: {
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryzjvow1gvD1jQHkba",
    }
}).then(data => {
    console.log(data)
}).fail(error => {
    console.error(error)
})
```

### Filter testing

I moderate models. Part of that means I test out filters to make sure that they work. *Roblox*’s text filters always filters these three private-use characters: `` `` ``. These UI elements are not intended for use in chat, so these are perfect for not violating community guidelines.
