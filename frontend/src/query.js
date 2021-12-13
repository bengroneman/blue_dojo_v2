import gql from "graphql-tag"

export const GET_ARTICLES = gql`
    {
        projects {
            id
            title
            content
        }
    }
`