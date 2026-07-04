import prisma from "../config/prisma";

interface CreateTaskData {
  title: string;
  description?: string;
  projectId: string;
  assignedToId: string;
  dueDate?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH";
}

export const createTask = async ({
  title,
  description,
  projectId,
  assignedToId,
  dueDate,
  priority,
}: CreateTaskData) => {
  const task = await prisma.task.create({
    data: {
      title,
      description,
      projectId,
      assignedToId,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      priority,
    },
  });

  return task;
};

export const getTasks = async () => {
  return prisma.task.findMany({
    include: {
      project: {
        select: {
          id: true,
          name: true,
        },
      },
      assignedTo: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });
};

export const updateTaskStatus = async (
  id: string,
  status: "TODO" | "IN_PROGRESS" | "DONE"
) => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      status,
    },
  });
};

export const updateTask = async (
  id: string,
  data: {
    title?: string;
    description?: string;
    priority?: "LOW" | "MEDIUM" | "HIGH";
    dueDate?: string;
    assignedToId?: string;
  }
) => {
  return prisma.task.update({
    where: {
      id,
    },
    data: {
      ...data,
      dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
    },
  });
};