import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Sally",
  //       age: 12,
  //       email: "sally@test1.com",
  //     },
  //   ],
  // });
  const user = await prisma.user.findMany({
    where: {
      name: "Sally",
    },
  });

  console.log(user);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
