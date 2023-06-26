import { Context } from '../config/context'

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

export async function createUser(user: CreateUser, ctx: Context) {
  if (user.acceptTermsAndConditions) {
    return await ctx.prisma.user.create({
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

export async function updateUsername(user: UpdateUser, ctx: Context) {
  return await ctx.prisma.user.update({
    where: { id: user.id },
    data: user,
  })
}