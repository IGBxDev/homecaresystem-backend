class Constants {    
    static DB_CONNECTION_STRING: string  = `mongodb+srv://homecaresystem:123asyst100@homecaresystem.dh0cd.mongodb.net/homecaresystem` 
    //`${process.env.DB_MONGOOSE}${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_DATABASE}`
    
}
Object.seal(Constants);
export = Constants;
