import { User } from './models/User'

const user = new User({ name: 'name', age: 99 })

user.on('change', () => {
  console.log('change 1')
})

user.on('change', () => {
  console.log('change 3')
})

user.on('save', () => {
  console.log('save was triggered')
})

user.trigger('change')
user.trigger('save')
