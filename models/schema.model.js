const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },];

const users = [{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
},
{
    "id": 2,
    "name": "Harry",
    "username": "Harrrrry",
}, {
    "id": 3,
    "name": "Hari",
    "username": "Haritha",
}]


const UserQuery = new GraphQLObjectType({
    name: "user",
    description: "User Query",
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        username: { type: GraphQLString }
    })
})

const PostQuery = new GraphQLObjectType({
    name: "Post",
    description: "",
    fields: () => ({
        userId: {
            type: GraphQLInt
        },
        id: {
            type: GraphQLInt
        },
        title: {
            type: GraphQLString
        },
        body: {
            type: GraphQLString
        },
        user: {
            type: UserQuery,
            resolve: (post, args) => {
                return users.find(user => user.id === post.id)
            }
        },
        posts: {
            type: GraphQLList(PostQuery),
            resolve: () => posts
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: "root",
    description: "Main root query",
    fields: () => ({
        message: {
            type: GraphQLString,
            resolve: () => "Hello World",
        },
        post: {
            type: PostQuery,
            args: {
                id: {
                    type: GraphQLInt
                }
            },
            resolve: (parentValue, args) => {
                return posts.find(post => post.id === args.id)
            }
        }
    })
});

const mutation = new GraphQLObjectType({
    name: 'mutation',
    description: "crud operation",
    fields: () => ({
        addPost: {
            type: PostQuery,
            args: {
                title: { type: GraphQLString },
                body: { type: GraphQLString },
                userId: { type: GraphQLInt }
            },
            resolve: (parentValue, args) => {
                let newId = posts[posts.length - 1]['id'] ? parseInt(posts[posts.length - 1]['id']) + 1 : 1;
                let newPost = {
                    id: newId,
                    ...args
                };
                posts.push(newPost);
                return newPost
            }
        },
        editPost: {
            type: PostQuery,
            args: {
                title: { type: GraphQLString },
                body: { type: GraphQLString },
                userId: { type: GraphQLInt },
                id: { type: GraphQLInt }
            },
            resolve: (parentValue, args) => {
                let findIndex = posts.findIndex(post => post.id === args.id);
                posts[findIndex] = args;
                return posts
            }
        },
        deletePost: {
            type: PostQuery,
            args: {
                id: { type: GraphQLInt }
            },
            resolve: (parentValue, args) => {
                let findIndex = posts.findIndex(post => post.id === args.id);
                posts.splice(findIndex,1)
                return posts
            }
        },
    })
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})