const { PrismaClient } = require("@prisma/client");
const data = require("./mock_data.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_2k1BIJVIvSvzRBUEFqTPyNCYmVx";
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
