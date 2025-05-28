import dotenv from 'dotenv'

dotenv.config()

// envalid

const x = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};


export default process.env 