import prisma from "~~/lib/prisma";

const getUsers = async (event) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  });
  return {
    users,
  };
};

export default getUsers;
