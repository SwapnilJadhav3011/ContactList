const Contact =  require("../models/contact");
const getAllContacts = async (req, res) => {
    const {name, phoneNumber, sort} = req.query;
    const queryObject = {};

    if(name)
    {
        queryObject.name = {$regex : name, $options : "s"};
       
    }

    if(phoneNumber)
    {
        queryObject.phoneNumber = phoneNumber;
        
    }

    let apiData = Contact.find(queryObject);

    if(sort)
    {
       let sortFix = sort.replace(","," ");
       apiData = apiData.sort(sortFix);
    }

    const myData = await Contact.find(queryObject).sort(sort);
    res.status(200).json({ myData });
};

const getAllContactsTesting = async (req, res) => {
    const myData = await apiData.sort("name"); //this sort method use for sort the name for asending order
    res.status(200).json({ myData });
};

module.exports = { getAllContacts, getAllContactsTesting };