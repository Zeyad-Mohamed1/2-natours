// build query
// // 1A) Filtering
// const queryObj = { ...req.query };
// const excludedFields = ['page', 'sort', 'limit', 'fields'];
// excludedFields.forEach(el => delete queryObj[el]);
// // 1B) Advanced filter
// let queryStr = JSON.stringify(queryObj);
// queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
// let query = Tour.find(JSON.parse(queryStr));

// 2) Sorting
// if (req.query.sort) {
//     const sortBy = req.query.sort.split(',').join(' ');
//     query = query.sort(sortBy);
// } else {
//     query = query.sort('-createdAt');
// }

// 3) Field limiting
// if (req.query.fields) {
//     const fields = req.query.fields.split(',').join(' ');
//     query = query.select(fields);
// } else {
//     query = query.select('-__v');
// }

// 4) Pagination
// const page = req.query.page * 1 || 1;
// const limit = req.query.limit * 1 || 10;
// const skip = (page - 1) * limit;

// query = query.skip(skip).limit(limit);

// if (req.query.page) {
//     const numTours = await Tour.countDocuments();
//     if (skip >= numTours) throw new Error('This page does not exist')
// }