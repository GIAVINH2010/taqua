import prisma from "~~/lib/prisma";

const createUser = async (event) => {
  const body = await useBody(event);
  const user = await prisma.user.create({
    data: {
      ...body,
    },
  });
  return {
    user,
  };
};

export default createUser;
