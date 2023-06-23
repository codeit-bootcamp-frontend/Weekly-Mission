import { META_FOLDER } from "@/app/_meta";
import { Children } from "@/types";

export const metadata = META_FOLDER;

export default async function FolderLayout({ children }: Children) {
  return <>{children}</>;
}
