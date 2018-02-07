"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scalars_1 = require("graphql/type/scalars");
function AddVoidPlugin(builder, { pgExtendedTypes }) {
    builder.hook("GraphQLObjectType:fields", (fields, // Input object - the fields for this GraphQLObjectType
    { extend, getTypeByName }, // Build object - handy utils
    { scope: { isRootQuery } } // Context object - used for filtering
    ) => {
        if (!isRootQuery) {
            // This isn't the object we want to modify:
            // return the input object unmodified
            return fields;
        }
        // We don't want to introduce a new JSON type as that will clash,
        // so let's find the JSON type that other fields use:
        const JSONType = getTypeByName(String);
        return extend(fields, {
            void: {
                type: scalars_1.GraphQLString,
                args: {
                    arg1: {
                        type: scalars_1.GraphQLBoolean
                    }
                },
                resolve(var1, var2, var3, var4, var5) {
                    console.log('var1', var1, '\n\nvar2', var2, '\n\nvar3', var3, '\n\nvar4', var4, '\n\nvar5', var5);
                    return "some_string";
                },
            },
        });
    });
}
exports.AddVoidPlugin = AddVoidPlugin;
