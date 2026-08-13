---
draft: true
---
## Snippets

### Edit place metadata

A user had trouble editing icons and thumbnails of places in an experience. Apparently, the `create.roblox.com` interface doesn’t allow them to. I’m not the owner of the group to try troubleshooting this. However, I found a workaround in the form of a *[[JavaScript]]* snippet, which seems to have work? I’m not sure why it still works. It has been working for years, and we still don’t have an elegant solution.

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
