import { META_FOLDER } from "@/app/_meta";
import { Children } from "@/types";
import { User } from "@/utils/api/types";

export async function generateMetadata({ params }: { params: { id: number } }) {
  const folderId = params.id;
  // TODO: generateMetadata는 서버 컴포넌트에서만 지원.. How I get currentUser?
  const currentUser: User = {
    id: "649fc0074843a7796910d6f7",
    created_at: "2023-06-04T13:56:30.307749+00:00",
    name: "이안",
    image_source:
      "https://ca.slack-edge.com/T04T2BTF4F5-U0505C4KP8Q-607dc1ebd010-512",
    email: "dlxkffldk37@gmail.com",
    folder_id: [],
  };
  const { id: userId, name: userName } = currentUser;
  const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL;
  return {
    ...META_FOLDER,
    openGraph: {
      title: `Shared by ${userName} | Linkbrary`,
      description: `${userName}님이 공유한 폴더의 링크를 확인해 보세요`,
      url: `${baseURL}/shared?user=${userId}&folder=${folderId}`,
    },
  };
}

export default async function FolderLayout({ children }: Children) {
  return <>{children}</>;
}
