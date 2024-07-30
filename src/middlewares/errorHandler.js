const errorHandler = (err, req, res, next) => {
    // Log the error stack for debugging
    console.error(err.stack);
    // Respond with a 500 status code
    res.status(500).json({ error: 'Internal Server Error' });
  };
  
  export default errorHandler;
  