import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>요청한 페이지가 없습니다.</h2>
      <Link href="/">홈으로 돌아가기</Link>
    </div>
  );
}
