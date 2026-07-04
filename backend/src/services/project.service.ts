import prisma from "../config/prisma";

interface CreateProjectData {
  name: string;
  description?: string;
  teamId: string;
}

export const createProject = async ({
  name,
  description,
  teamId,
}: CreateProjectData) => {
  const project = await prisma.project.create({
    data: {
      name,
      description,
      teamId,
    },
  });

  return project;
};

export const getProjects = async () => {
  return prisma.project.findMany({
    include: {
      team: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });
};