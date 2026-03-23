const serviceModel = require("../models/service-model");
const { validateService } = require("../validation/sevice-validate");

const createService = async (req,res)=>{
    try {
        const msg =req.body;
        //validate the contact data
        const validationResult = validateService(msg); //function to validate the contact data
        //if validation fails, send error response
        if(!validationResult.success){
        
        return res.status(400).json({msg:"Validation failed", error: validationResult.err});
        }

        console.log(validationResult);
        console.log(msg);
        const {name,description , image}=req.body;
        console.log(name,description,image);
        const newService = await serviceModel.create({name,description,image});
        res.status(200).json({service:newService});
        console.log("Service added successfully");        
    } catch (error) {
            console.error("Service add Failed:",error);        

    }
}

const getAllServices = async (req, res) => {   
    try {
    const services = await serviceModel.find();
    res.json({ message: "Get All Services - To be implemented" ,services: services }, );
    }
    catch (error) {
        res.status(500).json({ msg: "Server error" });
        console.error(error);
    }}

const getServiceById = async (req, res) => {
    try {
    const service = await serviceModel.findById(req.params.id)
    res.json({ message: "Get Service By ID - To be implemented", service });
    
    } catch (error) {
        res.status(500).json({ msg: "Server error" });
        console.error(error);
    }
}

module.exports= {createService, getAllServices, getServiceById};