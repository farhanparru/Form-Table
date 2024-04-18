const userData = require('../models/useModels')



module.exports = {

create: async(req,res)=>{
   const {name,age} = req.body

   if(!name || !age){
      return res.status(400).json({err:'Name and age are required'})
   }
   try {
      const newData = new userData({
         name,
         age
      })

      await newData.save()

      return res.status(201).json({message:"data create successfully", data:newData})
   } catch (error) {
      console.error('Error creating data:', error);
      return res.status(500).json({ error: 'Internal server error' });
      
   }
}
 






}