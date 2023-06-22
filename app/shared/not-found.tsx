import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>해당하는 유저가 없거나 유저의 폴더가 존재하지 않습니다.</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
