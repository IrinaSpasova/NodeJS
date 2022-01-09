const Product = require('../models/product');


const getAllProductsStatic = async (req, res) => {

    const products = await Product.find({
price:{$gt:30}


//gt === greater then, lt === less then
        // name: {$regex:search, $options: 'i'},
        // lecture 140 explain where to find this!
    })
    .sort('-price')
    .select('name price')
    .limit(10)
    .skip(1);
    //we can search for different properties if we put ...find({key: true}) here (ex. featured: true)
    res.status(200).json({
        products,
        nbHits: products.length,
    });
};

const getAllProducts = async (req, res) => {
    const {
        featured,
        company,
        name,
        sort,
        fields,
        numericFilters,
        // instead of name we can put search!
    } = req.query;
    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = {
            $regex: name,
            $options: 'i'
        };
    }

    if(numericFilters){
        //transform user friendly signs to mongoose signs:
        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }

        const regEx = /\b(<|>|>=|<=|=)\b/g;
        let filters = numericFilters.replace(
            regEx,
            (match)=>`-${operatorMap[match]}-`);
        
            const options = ['price', 'rating'];
            filters = filters.split(',').forEach((item)=>{
                const [field, operator, value] = item.split('-');
                if(options.includes(field)){
                    queryObject[field] ={[operator]:Number(value)}
                }
            });
    }


    console.log(queryObject);
    let result = Product.find(queryObject)
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    if(fields){
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1)*limit;

result = result.skip(skip).limit(limit);
//23
//4pages, 7 7 7 2 products per page
//145 lecture 4:43

    const products = await result;
    res.status(200).json({
        // msg: 'products route'
        products,
        nbHits: products.length,
    });
};

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}