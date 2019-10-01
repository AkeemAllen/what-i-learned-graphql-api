const graphql = require("graphql");
const User = require("../models/User");
const _ = require("lodash");
const bcrypt = require("bcryptjs");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  description: "A single person in the system",
  fields: () => ({
    id: { type: GraphQLID },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    password: { type: GraphQLString },
    email: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id).then(result => {
          return { ...result._doc, password: null, _id: result._id };
        });
      }
    },
    allUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      }
    }
  })
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addUser: {
      type: UserType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args) {
        return User.findOne({ email: args.email })
          .then(user => {
            if (user) {
              throw new Error("User Already Exists");
            }
            return bcrypt.hash(args.password, 12);
          })
          .then(hashedPassword => {
            let user = new User({
              firstName: args.firstName,
              lastName: args.lastName,
              password: hashedPassword,
              email: args.email
            });
            return user.save();
          })
          .then(result => {
            return { ...result._doc, password: null, _id: result._id };
          })
          .catch(err => {
            throw err;
          });
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
