import { createUser, updateUsername } from '../controllers/functions-without-context'
import { prismaMock } from '../../singleton'

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

  prismaMock.user.create.mockResolvedValue(user)

  await expect(createUser(user)).resolves.toEqual({
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
})

test('should update a users name ', async () => {
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

  prismaMock.user.update.mockResolvedValue(user)

  await expect(updateUsername(user)).resolves.toEqual({
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

  prismaMock.user.create.mockImplementation()

  await expect(createUser(user)).resolves.toEqual(
    new Error('User must accept terms!')
  )
})