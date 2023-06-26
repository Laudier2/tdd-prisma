import prisma from '../config/client'

interface CreateUser {
  name:                string
  email:               string
  bar_code:            string
  price:               string
  image:               string
  size:                string
  color:               string
  slug:                string 
  description:         string
  quantity:            string
  acceptTermsAndConditions: boolean
}

export async function createUser(user: CreateUser) {
  if (user.acceptTermsAndConditions) {
    return await prisma.user.create ({
      data: user,
    })
  } else {
    return new Error('User must accept terms!')
  }
}

interface UpdateUser {
  id: string
  name:                string
  email:               string
  bar_code:            string
  price:               string
  image:               string
  size:                string
  color:               string
  slug:                string 
  description:         string
  quantity:            string
}

export async function updateUsername(user: UpdateUser) {
  return await prisma.user.update({
    where: { id: user.id },
    data: user,
  })
}