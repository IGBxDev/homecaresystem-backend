class Constants {    
    static DB_CONNECTION_STRING: string = "mongodb+srv://homecaresystem:123asyst100@homecaresystem.dh0cd.mongodb.net/homecaresystem?retryWrites=true&w=majority"
    //`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_SERVER}/${process.env.DB_DATABASE}?retryWrites=true&w=majority`
    //process.env.MONGODB_URL as string

    //`${process.env.DB_MONGOOSE}${process.env.DB_USER}:${process.env.DB_PASSWORD}${process.env.DB_DATABASE}`
    
}
Object.seal(Constants);
export = Constants;
