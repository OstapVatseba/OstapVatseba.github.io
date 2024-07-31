document.addEventListener("DOMContentLoaded", () => {
  async function populate() {
    const requestURL = "https://ostapvatseba.github.io/blogs.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const blogs = await response.json();

   
    populatePosts(blogs);
  }

  function populatePosts(object) {
    const mainContent = document.querySelector(".main-content");
    const posts = object.posts;

    posts.forEach(post => {
      const postElement = document.createElement("div");
      postElement.className = "blog-post large";

      const img = document.createElement("img");
      img.src = post.imageUrl;
      img.alt = `Image for ${post.title}`;
      postElement.append(img);

      const meta = document.createElement("div");
      meta.className = "meta";
      const time = document.createElement("time");
      time.datetime = post.date;
      time.textContent = post.date;
      meta.append(time);

      const category = document.createElement("span");
      category.textContent = post.category;
      meta.append(category);
      postElement.append(meta);

      const postTitle = document.createElement("a");
      postTitle.href = "#";
      const h3 = document.createElement("h3");
      h3.textContent = post.title;
      postTitle.append(h3);
      postElement.append(postTitle);

      const description = document.createElement("p");
      description.textContent = post.description;
      postElement.append(description);

      mainContent.append(postElement);
    });
  }

  populate();
});