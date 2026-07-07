import prisma from "../config/prisma";

interface CreateTeamData {
  name: string;
  description?: string;
  createdById: string;
}

export const createTeam = async ({
  name,
  description,
  createdById,
}: CreateTeamData) => {
  const team = await prisma.team.create({
    data: {
      name,
      description,
      createdById,
    },
  });

  return team;
};

export const getAllTeams = async () => {
  return prisma.team.findMany({
    include: {
      createdBy: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

export const deleteTeam = async (id: string) => {
  return prisma.team.delete({
    where: {
      id,
    },
  });
};

interface UpdateTeamData {
  name: string;
  description?: string;
}

export const updateTeam = async (
  id: string,
  { name, description }: UpdateTeamData
) => {
  return prisma.team.update({
    where: {
      id,
    },
    data: {
      name,
      description,
    },
  });
};