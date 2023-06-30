import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>존재하지 않는 폴더입니다.</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
