var posts=["post/4a17b156.html","post/4a17b156.html","post/5b17b176.html","post/5a717bf0.html","post/6a717bf0.html","post/5a717bcc.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };