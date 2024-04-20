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
},

update: async (req,res)=>{
  try {
   // find a id database
   const {id} = req.params
   const {name,age} = req.body
 
   
// to field it sa required check
   if(!name || !age){
      return res.status(400).json({msg:"Name and age are required"})
   }
   // find a is in database
   const recordData = await userData.findById(id)
   
   if (!recordData){
      return res.status(404).json({msg:"Data Note a found"})
   }

   // update the field
   recordData.name = name;
   recordData.age = age ;
   
// save the databse
   await recordData.save()
   return res.status(200).json({ message: 'Data updated successfully', data: recordData });

  } catch (error) {
   console.log(error);
   return res.status(500).json({message:"Internel server"})
   
  }
}
 






}