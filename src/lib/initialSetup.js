import role from '../models/UserRole'

export const createRoles = async () => {
   try {
    const count = await role.estimatedDocumentCount()
    if (count > 0) return;
    const newRoles = await Promise.all([
        new role({ name: 'admin' }).save(),
        new role({ name: 'manager' }).save(),
        new role({ name: 'employee' }).save()
    ])
    console.log(newRoles)
   } catch (error) {
     console.error(error);
   }
};