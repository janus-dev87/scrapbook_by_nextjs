import prisma from '../../../lib/prisma'

export const getRawClubs = async (where = undefined) => {
  try {
    const rawClubs = await prisma.club.findMany({ where })
    return rawClubs;
  } catch {
    throw Error("Failed to get raw clubs");
  }
}

export default async (req, res) => {
  try {
    const rawClubs = await getRawClubs();
    res.json(rawClubs);
  } catch {
    res.status(404).json([]);
  }
}
