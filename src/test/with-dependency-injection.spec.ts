import { MockContext, Context, createMockContext } from '../config/context'
import { createUser, updateUsername } from '../controllers/functions-with-context'

let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})

test('should create new user ', async () => {
  const user = {
    id: '1',
    name: 'test',       
    email:   'test',   
    bar_code:   'test',   
    price:    'test',     
    image:    'test',     
    size:     'test',     
    color:   'test',      
    slug:     'test',      
    description: 'test', 
    quantity:     'test', 
    acceptTermsAndConditions: true,
  }
  mockCtx.prisma.user.create.mockResolvedValue(user)

  await expect(createUser(user, ctx)).resolves.toEqual({
    id: '1',
    name: 'test',       
    email:   'test',   
    bar_code:   'test',   
    price:    'test',     
    image:    'test',     
    size:     'test',     
    color:   'test',      
    slug:     'test',      
    description: 'test', 
    quantity:     'test', 
    acceptTermsAndConditions: true,
  })
  console.log('should create new user ', user)
})

test('should update a users name ', async () => {
  const user = {
    id: "1",
    name: 'test',       
    email:   'test',   
    bar_code:   'test',   
    price:    'test',     
    image:    'test',     
    size:     'test',     
    color:   'test',      
    slug:     'test',      
    description: 'test', 
    quantity:     'test', 
    acceptTermsAndConditions: true,
  }
  
  mockCtx.prisma.user.update.mockResolvedValue(user)

  await expect(updateUsername(user, ctx)).resolves.toEqual({
    id: '1',
    name: 'test',       
    email:   'test',   
    bar_code:   'test',   
    price:    'test',     
    image:    'test',     
    size:     'test',     
    color:   'test',      
    slug:     'test',      
    description: 'test', 
    quantity:     'test', 
    acceptTermsAndConditions: true,
  })
  console.log('should update a users name ', user)
})

test('should fail if user does not accept terms', async () => {
  const user = {
    id: '1',
    name: 'test',       
    email:   'test',   
    bar_code:   'test',   
    price:    'test',     
    image:    'test',     
    size:     'test',     
    color:   'test',      
    slug:     'test',      
    description: 'test', 
    quantity:     'test', 
    acceptTermsAndConditions: false,
  }

  mockCtx.prisma.user.create.mockImplementation()

  await expect(createUser(user, ctx)).resolves.toEqual(
    new Error('User must accept terms!')
  )
})