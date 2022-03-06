console.log("Start");
setTimeout(() => {
  console.log("Create post");
  setTimeout(() => {
    console.log("get post");
    console.log("End");
  }, 1000);
}, 2000);
