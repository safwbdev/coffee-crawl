"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function getData() {
    const data = await prisma.place.findMany({
        select: {
            name: true,
            id: true,
            isCompleted: true,
            location: true,
            type: true,
            cuisine: true,
            socials: true,
            images: true,
            favorite: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return data;
}
export async function getFavoriteData() {
    const data = await prisma.place.findMany({
        select: {
            name: true,
            id: true,
            isCompleted: true,
            location: true,
            type: true,
            cuisine: true,
            socials: true,
            images: true,
            favorite: true,
        },
        where: {
            favorite: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return data;
}

export async function createdPlace(formData: FormData) {
    const name = formData.get("name") as string;
    const location = formData.get("location") as string;
    const type = formData.get("type") as string;
    const cuisine = formData.get("cuisine") as string;
    const inputImage = formData.get("inputImage") as string;
    const socials = formData.get("inputSocials") as string;
    const tags = formData.get("inputTags") as string;

    if (!name.trim()) {
        return;
    }

    await prisma.place.create({
        data: {
            name: name,
            location: location,
            type: type,
            cuisine: cuisine,
            images: [inputImage],
            socials: socials.split(','),
            tags: tags.split(','),
        }
    });

    revalidatePath('/');
}
export async function changeStatus(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const place = await prisma.place.findUnique({
        where: {
            id: inputId
        }
    });

    const updatedStatus = !place?.isCompleted;

    await prisma.place.update({
        where: {
            id: inputId
        },
        data: {
            isCompleted: updatedStatus
        }
    })
    revalidatePath('/')
}

export async function favoriteStatus(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const place = await prisma.place.findUnique({
        where: {
            id: inputId
        }
    });

    const updatedStatus = !place?.favorite;

    await prisma.place.update({
        where: {
            id: inputId
        },
        data: {
            favorite: updatedStatus
        }
    });

    revalidatePath('/');
}

export async function editPlace(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const newName = formData.get("newName") as string;
    const newType = formData.get("newType") as string;
    const newLocation = formData.get("newLocation") as string;
    const newCuisine = formData.get("newCuisine") as string;
    const inputImage = formData.get("inputImage") as string;
    const socials = formData.get("inputSocials") as string;
    const tags = formData.get("inputTags") as string;

    await prisma.place.update({
        where: {
            id: inputId
        },
        data: {
            name: newName,
            location: newLocation,
            type: newType,
            cuisine: newCuisine,
            images: [inputImage],
            socials: socials.split(','),
            tags: tags.split(','),
        }
    });

    revalidatePath('/');
}

export async function ratePlace(formData: FormData) {
    const inputId = formData.get("inputId") as string;
    const newRate = formData.get("newRate") as string;

    await prisma.place.update({
        where: {
            id: inputId
        },
        data: {
            rating: Number(newRate)
        }
    });

    revalidatePath('/');
}

export async function deletePlace(formData: FormData) {
    const inputId = formData.get("inputId") as string;

    await prisma.place.delete({
        where: {
            id: inputId
        }
    });

    revalidatePath('/');
}

export async function getDataById(id: string) {
    try {
        const data = await prisma.place.findUnique({
            where: {
                id: id,
            },
        });
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}