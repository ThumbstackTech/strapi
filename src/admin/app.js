import TweetButton from "./extensions/components/TweetButton";

export default {
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: TweetButton,
    });
  }
}