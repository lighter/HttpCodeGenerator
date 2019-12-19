var Mustache = require("./mustache");

var HttpCodeGenerator = function() {
    this.generate = function(context, requests, options) {
        var generated = "";
        var template = readFile("my-template.mustache");

        for (var i in requests) {
            var request = requests[i];

            console.log(request);

            var view = {
                request: request,
                body: JSON.stringify(request.jsonBody, null, 2)
            };

            // render the template
            generated += Mustache.render(template, view) + "\n\n";
        }

        return generated;
    }
};

// set the extension identifier (must be same as the directory name)
HttpCodeGenerator.identifier = "com.astrocorp.HttpCodeGenerator";
// give a display name to your Code Generator
HttpCodeGenerator.title = "Astrocorp HttpCodeGenerator";
// call to register function is required
registerCodeGenerator(HttpCodeGenerator);
