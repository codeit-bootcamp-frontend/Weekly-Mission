import getUserData from "/data/user.js";

async function renderGNB() {
  try {
    const { data } = await getUserData();
    const gnb = document.querySelector("custom-gnb");
    gnb.user = data;
  } catch {
    console.log("user data가 존재하지 않습니다.");
  }
}

renderGNB();
