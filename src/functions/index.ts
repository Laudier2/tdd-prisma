import prisma from '../config/client'

interface CreateOrder {
  name: string
  description: string
  price: string
  sku: string
  categoryId: string
  acceptTermsAndConditions: boolean
}

export async function createOrder(user: CreateOrder) {
  if (user.acceptTermsAndConditions) {
    return await prisma.user.create({
      data: user,
    })
  } else {
    return new Error('User must accept terms!')
  }
}

interface User {
  id: string
  name: string
  email: string
  address: string
}

export async function Customer(user: User) {
  return await prisma.user.update({
    where: { id: user.id },
    data: user,
  })
}

export async function OrderInput(user: User) {
  return await prisma.user.findUnique({
    where: { id: user.id },
    data: user,
  })
}