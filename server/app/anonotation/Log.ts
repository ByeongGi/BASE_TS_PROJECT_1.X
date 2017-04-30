
export default function Log(path:any) {
   
    return  function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // save a reference to the original method
        var originalMethod = descriptor.value;
        // editing the descriptor/value parameter
        descriptor.value = function(...args: any[]) {
            // convert method arguments to string
            
            var a = args.map(a => {
                console.log(`LOG ---- >>> (${a})` );
                console.log(a);
                
                return a; 
                }).join();
            
            // invoke method and get its return value
            var result = originalMethod.apply(this, args);
            // convert result to string
            var r = JSON.stringify(result);
            // display in console the function call details
            console.log(`Call: ${propertyKey}(${a}) => ${r}`);
            // return the result of invoking the method
            return result;    
        };
        // return edited descriptor
        return descriptor;
  

        // console.log("------------------LOG ----------------------------------");
        // console.log("-----------------------"+new Date().toLocaleDateString());
        // console.log(target);
        // console.log(propertyKey);
        // console.log(descriptor);
        // console.log("------------------LOG ----------------------------------");
    }

}