import { Card } from "../components/Card/app.js";

(function () {
  const init = () => {
    document.body.append(new Card(1));
  };
  init();
})();
