import { gql } from "@apollo/client";

export const GET_MSGS = gql`
    query{
        messages {
            id
            user
            msg
            type
        }
    }
`