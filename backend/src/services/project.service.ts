import prisma from "../config/prisma";

interface CreateProjectData {
  name: string;
  description?: string;
  teamId: string;
}

interface UpdateProjectData {
  name: string;
  description?: string;
}

export const createProject = async ({
  name,
  description,
  teamId,
}: CreateProjectData) => {
  return prisma.project.create({
    data: {
      name,
      description,
      teamId,
    },
  });
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

export const updateProject = async (
  id: string,
  { name, description }: UpdateProjectData
) => {
  return prisma.project.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  });
};

export const deleteProject = async (id: string) => {
  return prisma.project.delete({
    where: {
      id,
    },
  });
};