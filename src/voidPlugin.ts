import { GraphQLArgument } from 'graphql'
import { graphql } from 'graphql/graphql';
import { GraphQLBoolean, GraphQLString } from 'graphql/type/scalars';

export function AddVoidPlugin(builder: any, { pgExtendedTypes }: any) {
    builder.hook(
        "GraphQLObjectType:fields",
        (
            fields: any, // Input object - the fields for this GraphQLObjectType
            { extend, getTypeByName }: { extend: any, getTypeByName: any, graphql: { GraphQLInt: any, GraphQLString: any } }, // Build object - handy utils
            { scope: { isRootQuery } }: { scope: { isRootQuery: boolean } } // Context object - used for filtering
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
                    type: GraphQLString,
                    args: {
                        arg1: {
                            type: GraphQLBoolean
                        }
                    },
                    resolve(var1:any,var2:any,var3:any,var4:any,var5:any) {
                        console.log('var1',var1,'\n\nvar2',var2,'\n\nvar3',var3,'\n\nvar4',var4,'\n\nvar5',var5);
                        return "some_string"
                    },
                },
            });
        }
    );
}