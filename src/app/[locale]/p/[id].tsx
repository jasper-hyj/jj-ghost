import prisma from "../../../../lib/prisma";

async function getData({ id }: {id: string} ) {
  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: post,
  };
}
