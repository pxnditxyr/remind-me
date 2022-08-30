
const regExpName     = RegExp( /^[a-zA-Z]{3,}$/ );
const regExpDate     = RegExp( /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/ )
const regExpEmail    = RegExp( /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+") )@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ );
const regExpUsername = RegExp( /^[a-zA-Z0-9_]{3,}$/ );
const regExpPassword = RegExp( /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/ );

export const isName         = ( name : string ) => regExpName.test( name );
export const isDate         = ( date : string ) => regExpDate.test( date );
export const isEmail        = ( email : string ) => regExpEmail.test( email );
export const isUsername     = ( username : string ) => regExpUsername.test( username );
export const isPassword     = ( password : string ) => regExpPassword.test( password );

