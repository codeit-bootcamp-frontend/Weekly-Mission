import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getUser } from "@/utils/api/userRequest";
import { tempUserDatas } from "@/utils/constants";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma?.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!currentUser) {
      return null;
    }

    const userId = tempUserDatas[currentUser.id];

    const user = await getUser(userId);

    return user;
  } catch (error) {
    return null;
  }
}
