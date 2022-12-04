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

export const SEND_MSG = gql`
    mutation($input: MsgInput!){
        sendMessage(input: $input) {
            id
            user
            msg
            type
        }
    }
`